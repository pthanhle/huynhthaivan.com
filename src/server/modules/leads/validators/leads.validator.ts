import {
  ALLOWED_INQUIRY_CATEGORIES,
  EMAIL_BASIC_PATTERN,
  LEADS_SECURITY_CONSTANTS,
  VIETNAMESE_PHONE_PREFIX_PATTERN,
} from '../constants/leads.constants';
import type { LeadValidationResult } from '../types/leads.types';
import { normalizeVietnamesePhone } from '../utils/leads-security.util';
import { sanitizePlainInput } from '@/shared/utils/formatters.util';
import type { LeadInquiryCategory } from '@/shared/types/lead.types';

export function validateLeadSubmissionPayload(
  rawBody: unknown
): LeadValidationResult {
  if (!rawBody || typeof rawBody !== 'object') {
    return {
      valid: false,
      errorMessage: 'Dữ liệu biểu mẫu không hợp lệ.',
    };
  }

  const record = rawBody as Record<string, unknown>;
  const locale = record.locale === 'en' ? 'en' : 'vi';

  if (typeof record.honeypot === 'string' && record.honeypot.trim().length > 0) {
    return {
      valid: false,
      errorMessage:
        locale === 'en'
          ? 'Automated submission rejected.'
          : 'Hệ thống từ chối yêu cầu tự động.',
    };
  }

  const fullName = sanitizePlainInput(
    String(record.fullName ?? ''),
    LEADS_SECURITY_CONSTANTS.maxFullNameLength
  );
  const organization = sanitizePlainInput(
    String(record.organization ?? ''),
    LEADS_SECURITY_CONSTANTS.maxOrganizationLength
  );
  const email = sanitizePlainInput(
    String(record.email ?? '').toLowerCase(),
    LEADS_SECURITY_CONSTANTS.maxEmailLength
  );
  const rawPhone = sanitizePlainInput(
    String(record.phone ?? ''),
    LEADS_SECURITY_CONSTANTS.maxPhoneLength
  );
  const phone = normalizeVietnamesePhone(rawPhone);
  const message = sanitizePlainInput(
    String(record.message ?? ''),
    LEADS_SECURITY_CONSTANTS.maxMessageLength
  );
  const rawCategory = String(record.inquiryCategory ?? 'FULLTIME_PR_CSR');

  if (fullName.length < 2) {
    return {
      valid: false,
      errorMessage:
        locale === 'en'
          ? 'Please enter your full name (at least 2 characters).'
          : 'Vui lòng nhập họ và tên người liên hệ (tối thiểu 2 ký tự).',
    };
  }

  if (organization.length < 2) {
    return {
      valid: false,
      errorMessage:
        locale === 'en'
          ? 'Please enter your company or organization name.'
          : 'Vui lòng nhập tên Công ty hoặc Tổ chức.',
    };
  }

  if (!EMAIL_BASIC_PATTERN.test(email)) {
    return {
      valid: false,
      errorMessage:
        locale === 'en'
          ? 'Please enter a valid work email address.'
          : 'Địa chỉ Email không đúng định dạng.',
    };
  }

  if (!VIETNAMESE_PHONE_PREFIX_PATTERN.test(phone)) {
    return {
      valid: false,
      errorMessage:
        locale === 'en'
          ? 'Please enter a valid 10-digit Vietnam phone number (e.g., 090xxxxxxx).'
          : 'Số điện thoại không hợp lệ (vui lòng nhập số di động 10 số tại Việt Nam).',
    };
  }

  const inquiryCategory: LeadInquiryCategory = ALLOWED_INQUIRY_CATEGORIES.includes(
    rawCategory as LeadInquiryCategory
  )
    ? (rawCategory as LeadInquiryCategory)
    : 'FULLTIME_PR_CSR';

  if (message.length < 5) {
    return {
      valid: false,
      errorMessage:
        locale === 'en'
          ? 'Please provide a brief message or role description.'
          : 'Vui lòng nhập nội dung trao đổi (tối thiểu 5 ký tự).',
    };
  }

  return {
    valid: true,
    data: {
      fullName,
      organization,
      email,
      phone,
      inquiryCategory,
      message,
      locale,
    },
  };
}
