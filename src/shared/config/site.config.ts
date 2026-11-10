export const SITE_CONFIG = {
  siteName: 'Huỳnh Thái Vân — Portfolio',
  siteShortName: 'Huỳnh Thái Vân',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://huynhthaivan.com',
  ownerFullName: 'Huỳnh Thái Vân',
  ownerRoleTitle: 'PR Specialist & CSR Lead',
  ownerHeadlineVi:
    'Huỳnh Thái Vân — PR Specialist & CSR Lead | CSR & Social Impact, Event & Engagement, Corporate Communications.',
  ownerHeadlineEn:
    'Huỳnh Thái Vân — PR Specialist & CSR Lead | CSR & Social Impact, Event & Engagement, Corporate Communications.',
  birthDateDisplay: '09/01/2001',
  locationVi: 'TP. Hồ Chí Minh, Việt Nam',
  locationEn: 'Ho Chi Minh City, Vietnam',
  phoneDisplay: '(+84) 932 134 216',
  phoneRaw: '+84932134216',
  zaloUrl: 'https://zalo.me/0932134216',
  email: 'huynhthaivan0901@gmail.com',
  brandEmail: 'huynhthaivan0901@gmail.com',
  pdfDownloadPath: '/downloads/Huynh-Thai-Van-Portfolio-2026.pdf',
  ogImagePath: '/assets/og/huynhthaivan-og-2026.jpg',
  indexNowKey: 'htv2026indexnowkey932134216',
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
    'g772ukE85ACRuILOPocQ0ab8bY4ougwlaNlHKqAeyBI',
} as const;
