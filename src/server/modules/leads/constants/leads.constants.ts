import type { LeadInquiryCategory } from '@/shared/types/lead.types';

export const LEADS_SECURITY_CONSTANTS = {
  maxRequestsPerWindow: 6,
  rateLimitWindowMs: 10 * 60 * 1000,
  maxFullNameLength: 100,
  maxOrganizationLength: 140,
  maxEmailLength: 140,
  maxPhoneLength: 25,
  maxMessageLength: 1500,
} as const;

export const ALLOWED_INQUIRY_CATEGORIES: readonly LeadInquiryCategory[] = [
  'FULLTIME_PR_CSR',
  'CSR_SPONSORSHIP',
  'EVENT_MC_BOOKING',
  'MEDIA_COLLABORATION',
] as const;

export const LEAD_CATEGORY_LABELS = {
  FULLTIME_PR_CSR: 'Cơ hội hợp tác & Tuyển dụng Truyền thông – PR – CSR',
  CSR_SPONSORSHIP: 'Hợp tác dự án CSR & Cộng đồng',
  EVENT_MC_BOOKING: 'Dẫn chương trình (MC) & Tổ chức sự kiện',
  MEDIA_COLLABORATION: 'Sản xuất Video & Biên tập Nội san',
} as const satisfies Record<LeadInquiryCategory, string>;

export const VIETNAMESE_PHONE_PREFIX_PATTERN =
  /^(0|\+84|84)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/;

export const EMAIL_BASIC_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
