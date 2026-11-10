import type { Metadata, Viewport } from 'next';
import React from 'react';
import { SITE_CONFIG } from '@/shared/config/site.config';
import { SEO_KEYWORDS_2026 } from '@/shared/constants/seo-keywords.constants';
import { buildPortfolioJsonLdGraph } from '@/shared/utils/seo-jsonld.util';
import './fonts.css';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4D0F13',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: SITE_CONFIG.siteName,
    template: `%s | ${SITE_CONFIG.ownerFullName}`,
  },
  description: SITE_CONFIG.ownerHeadlineVi,
  applicationName: SITE_CONFIG.siteShortName,
  keywords: [...SEO_KEYWORDS_2026],
  authors: [
    {
      name: SITE_CONFIG.ownerFullName,
      url: SITE_CONFIG.siteUrl,
    },
  ],
  creator: SITE_CONFIG.ownerFullName,
  publisher: SITE_CONFIG.ownerFullName,
  category:
    'Public Relations, Corporate Social Responsibility & Corporate Communications Portfolio',
  classification: 'Executive Portfolio & Curriculum Vitae',
  alternates: {
    canonical: SITE_CONFIG.siteUrl,
    languages: {
      'vi-VN': SITE_CONFIG.siteUrl,
      'x-default': SITE_CONFIG.siteUrl,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'vi_VN',
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.siteName,
    title: SITE_CONFIG.siteName,
    description: SITE_CONFIG.ownerHeadlineVi,
    firstName: 'Thái Vân',
    lastName: 'Huỳnh',
    username: 'huynhthaivan',
    gender: 'female',
    images: [
      {
        url: SITE_CONFIG.ogImagePath,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.siteName,
    description: SITE_CONFIG.ownerHeadlineVi,
    images: [SITE_CONFIG.ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: SITE_CONFIG.googleSiteVerification || undefined,
  },
  other: {
    'geo.region': 'VN-SG',
    'geo.placename': 'Thành phố Hồ Chí Minh',
    'geo.position': '10.7769;106.7009',
    ICBM: '10.7769, 106.7009',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdGraph = buildPortfolioJsonLdGraph();

  return (
    <html lang="vi">
      <body className="min-h-dvh bg-[#EDEBE8] text-[#2B090C] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-[#4D0F13] focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
        >
          Chuyển đến nội dung chính
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdGraph),
          }}
        />
        {children}
      </body>
    </html>
  );
}
