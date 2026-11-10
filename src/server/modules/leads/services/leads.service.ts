import { SITE_CONFIG } from '@/shared/config/site.config';
import type {
  LeadApiResponse,
  StoredLeadRecord,
} from '@/shared/types/lead.types';
import type {
  LeadRequestContext,
  LeadsListResult,
} from '../types/leads.types';
import {
  checkIpRateLimitAllowed,
  hashClientIp,
} from '../utils/leads-security.util';
import { validateLeadSubmissionPayload } from '../validators/leads.validator';
import {
  buildDirectMailtoFallbackUrl,
  mapValidatedLeadToRecord,
} from '../mappers/leads.mapper';
import {
  appendLeadRecord,
  readStoredLeads,
} from '../repositories/leads.repository';

async function notifyWebhookIfConfigured(record: StoredLeadRecord): Promise<void> {
  const webhookUrl = process.env.WEBHOOK_LEAD_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(record),
      });
    } catch {
      void 0;
    }
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (botToken && chatId) {
    try {
      const text = [
        `🌟 [LEAD MỚI — HUYNHTHAIVAN.COM]`,
        `👤 Họ tên: ${record.fullName}`,
        `🏢 Tổ chức: ${record.organization}`,
        `📞 SĐT/Zalo: ${record.phone}`,
        `✉️ Email: ${record.email}`,
        `📌 Hạng mục: ${record.inquiryCategoryLabel}`,
        `📝 Nội dung: ${record.message}`,
      ].join('\n');

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      });
    } catch {
      return;
    }
  }
}

export async function processLeadSubmissionService(
  rawBody: unknown,
  ctx: LeadRequestContext
): Promise<{ status: number; body: LeadApiResponse }> {
  const ipHash = hashClientIp(ctx.clientIp);
  if (!checkIpRateLimitAllowed(ipHash)) {
    return {
      status: 429,
      body: {
        ok: false,
        message:
          'Bạn đã gửi yêu cầu quá nhanh. Vui lòng thử lại sau ít phút hoặc liên hệ trực tiếp huynhthaivan0901@gmail.com / (+84) 932 134 216.',
      },
    };
  }

  const validation = validateLeadSubmissionPayload(rawBody);
  if (!validation.valid || !validation.data) {
    return {
      status: 400,
      body: {
        ok: false,
        message: validation.errorMessage ?? 'Dữ liệu không hợp lệ.',
      },
    };
  }

  const record = mapValidatedLeadToRecord(validation.data, ctx);
  appendLeadRecord(record);
  await notifyWebhookIfConfigured(record);

  const directMailtoUrl = buildDirectMailtoFallbackUrl(record);
  const successMsg =
    validation.data.locale === 'en'
      ? `Thank you, ${record.fullName}! Your inquiry has been recorded for Huỳnh Thái Vân (${SITE_CONFIG.email} | ${SITE_CONFIG.phoneDisplay}).`
      : `Cảm ơn ${record.fullName}! Thông tin từ ${record.organization} đã được ghi nhận thành công cho Huỳnh Thái Vân (${SITE_CONFIG.email} | ${SITE_CONFIG.phoneDisplay}).`;

  return {
    status: 201,
    body: {
      ok: true,
      message: successMsg,
      leadId: record.id,
      directMailtoUrl,
    },
  };
}

export function listStoredLeadsForAdminService(
  providedKey: string | null
): { status: number; body: LeadsListResult | { ok: false; message: string } } {
  const expectedKey = process.env.ADMIN_CRM_ACCESS_KEY || 'huynhthaivan-admin-2026';
  if (!providedKey || providedKey !== expectedKey) {
    return {
      status: 401,
      body: {
        ok: false,
        message: 'Khóa truy cập CRM không hợp lệ.',
      },
    };
  }

  const items = readStoredLeads();
  return {
    status: 200,
    body: {
      total: items.length,
      items,
    },
  };
}
