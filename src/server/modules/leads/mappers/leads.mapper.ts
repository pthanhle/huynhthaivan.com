import crypto from 'crypto';
import { SITE_CONFIG } from '@/shared/config/site.config';
import type { StoredLeadRecord } from '@/shared/types/lead.types';
import { LEAD_CATEGORY_LABELS } from '../constants/leads.constants';
import type {
  LeadRequestContext,
  ValidatedLeadInput,
} from '../types/leads.types';
import {
  hashClientIp,
  sanitizeCsvCellValue,
} from '../utils/leads-security.util';

export function mapValidatedLeadToRecord(
  input: ValidatedLeadInput,
  ctx: LeadRequestContext,
): StoredLeadRecord {
  const categoryLabel = LEAD_CATEGORY_LABELS[input.inquiryCategory];

  return {
    id: `HTV-LEAD-${Date.now()}-${crypto.randomBytes(3).toString('hex')}`,
    createdAtIso: new Date().toISOString(),
    fullName: sanitizeCsvCellValue(input.fullName),
    organization: sanitizeCsvCellValue(input.organization),
    email: sanitizeCsvCellValue(input.email),
    phone: sanitizeCsvCellValue(input.phone),
    inquiryCategory: input.inquiryCategory,
    inquiryCategoryLabel: categoryLabel,
    message: sanitizeCsvCellValue(input.message),
    locale: input.locale,
    clientIpHash: hashClientIp(ctx.clientIp),
    userAgentSummary: ctx.userAgent.slice(0, 160),
  };
}

export function buildDirectMailtoFallbackUrl(record: StoredLeadRecord): string {
  const subject = encodeURIComponent(
    `[huynhthaivan.com] ${record.inquiryCategoryLabel} — ${record.organization} (${record.fullName})`,
  );
  const body = encodeURIComponent(
    [
      `Kính gửi Huỳnh Thái Vân,`,
      ``,
      `- Người liên hệ: ${record.fullName}`,
      `- Đơn vị / Công ty: ${record.organization}`,
      `- Điện thoại / Zalo: ${record.phone}`,
      `- Email: ${record.email}`,
      `- Hạng mục: ${record.inquiryCategoryLabel}`,
      ``,
      `Nội dung trao đổi:`,
      record.message,
    ].join('\n'),
  );
  return `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
}
