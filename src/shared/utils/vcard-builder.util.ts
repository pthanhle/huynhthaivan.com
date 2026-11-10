import { SITE_CONFIG } from '../config/site.config';

export function buildHuynhThaiVanVCard(): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Huỳnh;Thái Vân;;;',
    `FN:${SITE_CONFIG.ownerFullName}`,
    'TITLE:PR Specialist & CSR Lead',
    `TEL;TYPE=CELL,VOICE:${SITE_CONFIG.phoneRaw}`,
    `EMAIL;TYPE=INTERNET,PREF:${SITE_CONFIG.email}`,
    `URL:${SITE_CONFIG.siteUrl}`,
    'ADR;TYPE=WORK:;;TP. Hồ Chí Minh;;;700000;Vietnam',
    'END:VCARD',
  ];
  return lines.join('\r\n');
}
