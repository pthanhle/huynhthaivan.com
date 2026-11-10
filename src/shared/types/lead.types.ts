export type LeadInquiryCategory =
  | 'FULLTIME_PR_CSR'
  | 'CSR_SPONSORSHIP'
  | 'EVENT_MC_BOOKING'
  | 'MEDIA_COLLABORATION';

export interface LeadSubmissionPayload {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  inquiryCategory: LeadInquiryCategory;
  message: string;
  locale: 'vi' | 'en';
  honeypot?: string;
}

export interface StoredLeadRecord {
  id: string;
  createdAtIso: string;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  inquiryCategory: LeadInquiryCategory;
  inquiryCategoryLabel: string;
  message: string;
  locale: 'vi' | 'en';
  clientIpHash: string;
  userAgentSummary: string;
}

export interface LeadApiResponse {
  ok: boolean;
  message: string;
  leadId?: string;
  directMailtoUrl?: string;
}
