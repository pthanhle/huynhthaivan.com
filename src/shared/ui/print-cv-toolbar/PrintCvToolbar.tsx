'use client';

import { ArrowLeft, Download, Printer, UserCheck } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { SITE_CONFIG } from '@/shared/config/site.config';

export function PrintCvToolbar() {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#4D0F13]/15 pb-4 print:hidden">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-[#4D0F13] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#AF2A55]"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Quay lại Portfolio</span>
      </Link>

      <div className="flex flex-wrap items-center gap-2.5">
        <a
          href="/api/vcard"
          className="inline-flex items-center gap-1.5 rounded-full border border-[#4D0F13]/25 bg-white px-4 py-2 text-xs font-bold text-[#4D0F13] transition hover:bg-[#4D0F13] hover:text-white"
        >
          <UserCheck className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Lưu danh bạ</span>
        </a>

        <a
          href={SITE_CONFIG.pdfDownloadPath}
          download
          className="inline-flex items-center gap-1.5 rounded-full border border-[#4D0F13]/25 bg-white px-4 py-2 text-xs font-bold text-[#4D0F13] transition hover:bg-[#4D0F13] hover:text-white"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Tải Portfolio PDF</span>
        </a>

        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#AF2A55] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#4D0F13]"
        >
          <Printer className="h-3.5 w-3.5" aria-hidden="true" />
          <span>In / Lưu CV</span>
        </button>
      </div>
    </div>
  );
}
