import crypto from 'crypto';
import { LEADS_SECURITY_CONSTANTS } from '../constants/leads.constants';

const ipVelocityBuckets = new Map<string, number[]>();

export function hashClientIp(rawIp: string): string {
  return crypto
    .createHash('sha256')
    .update(`htv-2026-salt:${rawIp}`)
    .digest('hex')
    .slice(0, 16);
}

export function checkIpRateLimitAllowed(ipHash: string): boolean {
  const now = Date.now();
  const windowStart = now - LEADS_SECURITY_CONSTANTS.rateLimitWindowMs;
  const existing = ipVelocityBuckets.get(ipHash) ?? [];
  const activeTimestamps = existing.filter((ts) => ts > windowStart);

  if (activeTimestamps.length >= LEADS_SECURITY_CONSTANTS.maxRequestsPerWindow) {
    ipVelocityBuckets.set(ipHash, activeTimestamps);
    return false;
  }

  activeTimestamps.push(now);
  ipVelocityBuckets.set(ipHash, activeTimestamps);
  return true;
}

export function normalizeVietnamesePhone(rawPhone: string): string {
  const digits = rawPhone.replace(/[\s.\-()]/g, '');
  if (digits.startsWith('+84')) {
    return `0${digits.slice(3)}`;
  }
  if (digits.startsWith('84') && digits.length === 11) {
    return `0${digits.slice(2)}`;
  }
  return digits;
}

export function sanitizeCsvCellValue(value: string): string {
  const trimmed = value.replace(/[\r\n]+/g, ' ').trim();
  if (/^[=+\-@]/.test(trimmed)) {
    return `'${trimmed}`;
  }
  return trimmed;
}
