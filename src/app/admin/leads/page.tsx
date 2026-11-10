'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { ArrowLeft, KeyRound, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { QueryProvider } from '@/shared/providers/QueryProvider';
import type { StoredLeadRecord } from '@/shared/types/lead.types';

const adminAccessSchema = z
  .object({
    accessKey: z.string().trim().min(1, 'Nhập khóa truy cập').max(128, 'Tối đa 128 ký tự'),
  })
  .strict();

type AdminAccessFormValues = z.infer<typeof adminAccessSchema>;

function AdminLeadsDashboardInner() {
  const mutation = useMutation({
    mutationFn: async (values: AdminAccessFormValues) => {
      const res = await fetch('/api/leads', {
        headers: {
          'x-admin-key': values.accessKey,
        },
      });
      if (!res.ok) {
        throw new Error('Khóa truy cập không chính xác.');
      }
      const data = (await res.json()) as { items?: StoredLeadRecord[] };
      return data.items ?? [];
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminAccessFormValues>({
    resolver: zodResolver(adminAccessSchema),
    defaultValues: {
      accessKey: '',
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    await mutation.mutateAsync(values);
  });

  return (
    <main className="min-h-dvh bg-[#4D0F13] px-4 py-8 text-[#F5F3F3] sm:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
          <h1 className="font-display text-2xl uppercase sm:text-3xl">
            DANH SÁCH LIÊN HỆ — HUỲNH THÁI VÂN
          </h1>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#F2EFEF] px-4 py-1.5 text-xs font-bold text-[#4D0F13]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Trang chủ</span>
          </Link>
        </header>

        <form onSubmit={onSubmit} noValidate className="mt-6 flex flex-wrap items-start gap-3">
          <div className="flex flex-1 flex-col gap-1">
            <label htmlFor="admin-access-key" className="text-xs font-bold">
              Khóa quản trị
            </label>
            <input
              id="admin-access-key"
              type="password"
              autoComplete="one-time-code"
              aria-invalid={Boolean(errors.accessKey)}
              aria-describedby={errors.accessKey ? 'err-admin-key' : undefined}
              {...register('accessKey')}
              className="rounded-[12px] border border-white/20 bg-white/10 px-3.5 py-2 text-base text-white focus:border-white focus:outline-none sm:text-sm"
            />
            {errors.accessKey ? (
              <p id="err-admin-key" role="alert" className="text-xs text-rose-300">
                {errors.accessKey.message}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="mt-5 inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#AF2A55] px-5 py-2.5 text-xs font-extrabold text-white shadow-md"
          >
            <KeyRound className="h-4 w-4" aria-hidden="true" />
            <span>{mutation.isPending ? 'Đang tải...' : 'Mở danh sách'}</span>
          </button>
        </form>

        {mutation.isError ? (
          <div
            role="alert"
            className="mt-4 rounded-[12px] bg-rose-500/20 px-4 py-2.5 text-xs font-semibold text-rose-200"
          >
            {mutation.error instanceof Error ? mutation.error.message : 'Lỗi tải dữ liệu'}
          </div>
        ) : null}

        {mutation.isSuccess ? (
          <div className="mt-6 flex flex-col gap-3">
            {mutation.data.length === 0 ? (
              <p className="rounded-[16px] bg-white/8 p-5 text-sm">Chưa có tin nhắn mới.</p>
            ) : (
              mutation.data.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-2 rounded-[18px] border border-white/15 bg-white/8 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-bold">
                    <span>
                      {item.fullName} — {item.organization}
                    </span>
                    <span className="apple-tabular-nums text-xs text-white/75">
                      {new Date(item.createdAtIso).toLocaleString('vi-VN')}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs">
                    <a
                      href={`tel:${item.phone}`}
                      className="apple-tabular-nums inline-flex items-center gap-1 underline"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{item.phone}</span>
                    </a>
                    <a
                      href={`mailto:${item.email}`}
                      className="inline-flex items-center gap-1 underline"
                    >
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{item.email}</span>
                    </a>
                    <span className="rounded-full bg-[#AF2A55] px-2.5 py-0.5 font-semibold">
                      {item.inquiryCategoryLabel}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-white/90">{item.message}</p>
                </article>
              ))
            )}
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default function AdminLeadsPage() {
  return (
    <QueryProvider>
      <AdminLeadsDashboardInner />
    </QueryProvider>
  );
}
