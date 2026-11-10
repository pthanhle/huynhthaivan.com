import type { LeadInquiryCategory } from '@/shared/types/lead.types';

export interface InquiryCategoryOption {
  value: LeadInquiryCategory;
  label: string;
}

export const INQUIRY_CATEGORY_OPTIONS: readonly InquiryCategoryOption[] = [
  {
    value: 'FULLTIME_PR_CSR',
    label: 'Cơ hội hợp tác & Tuyển dụng Truyền thông – PR – CSR',
  },
  {
    value: 'EVENT_MC_BOOKING',
    label: 'Dẫn chương trình (MC) & Tổ chức sự kiện',
  },
  {
    value: 'CSR_SPONSORSHIP',
    label: 'Hợp tác dự án CSR & Cộng đồng',
  },
  {
    value: 'MEDIA_COLLABORATION',
    label: 'Sản xuất Video & Biên tập Nội san',
  },
] as const;
