import type {
  LeadInquiryCategory,
  StoredLeadRecord,
} from '@/shared/types/lead.types';

export interface ValidatedLeadInput {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  inquiryCategory: LeadInquiryCategory;
  message: string;
  locale: 'vi' | 'en';
}

export interface LeadValidationResult {
  valid: boolean;
  errorMessage?: string;
  data?: ValidatedLeadInput;
}

export interface LeadRequestContext {
  clientIp: string;
  userAgent: string;
}

export interface LeadsListResult {
  total: number;
  items: StoredLeadRecord[];
}
