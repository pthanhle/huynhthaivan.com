import { z } from 'zod';

export const contactFormSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, 'Nhập họ và tên')
      .max(120, 'Tối đa 120 ký tự'),
    organization: z
      .string()
      .trim()
      .min(2, 'Nhập tên đơn vị')
      .max(160, 'Tối đa 160 ký tự'),
    email: z
      .string()
      .trim()
      .email('Email không hợp lệ')
      .max(160, 'Tối đa 160 ký tự'),
    phone: z
      .string()
      .trim()
      .min(9, 'Số điện thoại không hợp lệ')
      .max(20, 'Tối đa 20 ký tự'),
    inquiryCategory: z.enum([
      'FULLTIME_PR_CSR',
      'CSR_SPONSORSHIP',
      'EVENT_MC_BOOKING',
      'MEDIA_COLLABORATION',
    ]),
    message: z
      .string()
      .trim()
      .min(5, 'Nhập nội dung trao đổi')
      .max(2000, 'Tối đa 2000 ký tự'),
    honeypot: z.string().max(120).optional(),
  })
  .strict();

export type ContactFormValues = z.infer<typeof contactFormSchema>;
