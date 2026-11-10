import type { LocalizedText, PortfolioLocale } from '../types/i18n.types';

export function pickLocalizedText(
  item: LocalizedText,
  locale: PortfolioLocale
): string {
  return locale === 'en' ? item.en : item.vi;
}

export function buildGoogleDrivePreviewUrl(driveFileId: string): string {
  return `https://drive.google.com/file/d/${driveFileId}/preview`;
}

export function buildGoogleDriveViewUrl(driveFileId: string): string {
  return `https://drive.google.com/file/d/${driveFileId}/view?usp=sharing`;
}

export function sanitizePlainInput(raw: string, maxLength: number): string {
  return raw
    .replace(/[<>]/g, '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .trim()
    .slice(0, maxLength);
}
