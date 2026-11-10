import { RT_CONNECTION_ISSUES_LIST } from '@/entities/media-work/constants/rt-magazines.constants';
import { PRODUCTION_VIDEOS_LIST } from '@/entities/media-work/constants/video-showreel.constants';
import { SITE_CONFIG } from '../config/site.config';
import {
  SEO_CASE_STUDIES_LIST,
  SEO_PORTFOLIO_FAQ_ITEMS,
} from '../constants/seo-faq-schema.constants';

export function buildPortfolioJsonLdGraph() {
  const baseUrl = SITE_CONFIG.siteUrl;
  const primaryImageUrl = `${baseUrl}${SITE_CONFIG.ogImagePath}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: SITE_CONFIG.siteName,
        alternateName: [
          SITE_CONFIG.siteShortName,
          'Huỳnh Thái Vân — Portfolio',
          'Huynh Thai Van PR Specialist & CSR Lead',
          'huynhthaivan.com',
        ],
        description: SITE_CONFIG.ownerHeadlineVi,
        inLanguage: ['vi-VN', 'en-US'],
        publisher: {
          '@id': `${baseUrl}/#person`,
        },
      },
      {
        '@type': 'ImageObject',
        '@id': `${baseUrl}/#primaryimage`,
        url: primaryImageUrl,
        contentUrl: primaryImageUrl,
        width: 1200,
        height: 630,
        caption: SITE_CONFIG.siteName,
        inLanguage: 'vi-VN',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: SITE_CONFIG.siteName,
            item: baseUrl,
          },
        ],
      },
      {
        '@type': 'ProfilePage',
        '@id': `${baseUrl}/#profilepage`,
        url: baseUrl,
        name: SITE_CONFIG.siteName,
        description: SITE_CONFIG.ownerHeadlineVi,
        dateCreated: '2026-01-09T09:00:00+07:00',
        dateModified: '2026-11-10T00:00:00+07:00',
        inLanguage: 'vi-VN',
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        primaryImageOfPage: {
          '@id': `${baseUrl}/#primaryimage`,
        },
        breadcrumb: {
          '@id': `${baseUrl}/#breadcrumb`,
        },
        mainEntity: {
          '@id': `${baseUrl}/#person`,
        },
        significantLink: [
          `${baseUrl}${SITE_CONFIG.pdfDownloadPath}`,
        ],
      },
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: SITE_CONFIG.ownerFullName,
        givenName: 'Thái Vân',
        familyName: 'Huỳnh',
        alternateName: [
          'Huynh Thai Van',
          'Huỳnh Thái Vân PR',
          'Huỳnh Thái Vân CSR',
          'huynhthaivan.com',
        ],
        jobTitle: [
          'PR Specialist',
          'CSR Project Lead',
          'Corporate Communications & Event Specialist',
          'Stage & Corporate Event MC',
        ],
        description: SITE_CONFIG.ownerHeadlineVi,
        birthDate: '2001-01-09',
        gender: 'Female',
        nationality: {
          '@type': 'Country',
          name: 'Vietnam',
        },
        url: baseUrl,
        image: [
          primaryImageUrl,
          `${baseUrl}/assets/extracted/p01-van-conical-hat-cutout.webp`,
          `${baseUrl}/assets/extracted/p02-van-camera-cutout.webp`,
          `${baseUrl}/assets/extracted/p03-van-about-cutout.webp`,
          `${baseUrl}/assets/extracted/p04-van-aodai-cutout.webp`,
          `${baseUrl}/assets/extracted/p05-van-csr-child-cutout.webp`,
          `${baseUrl}/assets/extracted/p08-floral-van-cutout.webp`,
          `${baseUrl}/assets/extracted/p12-van-retro-tv.webp`,
          `${baseUrl}/assets/extracted/p13-van-beach-events.webp`,
          `${baseUrl}/assets/extracted/p14-img-x7.webp`,
          `${baseUrl}/assets/extracted/p15-van-contact-cutout.webp`,
        ],
        email: `mailto:${SITE_CONFIG.email}`,
        telephone: '+84932134216',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Thành phố Hồ Chí Minh',
          addressRegion: 'TP.HCM',
          addressCountry: 'VN',
        },
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Trường Đại học Văn Lang (Van Lang University - VLU)',
            department:
              'Khoa Quan hệ Công chúng - Truyền thông (Tốt nghiệp Loại Giỏi — GPA 3.4/4.0)',
            url: 'https://www.vlu.edu.vn',
          },
          {
            '@type': 'CollegeOrUniversity',
            name: 'Trường Đại học Kinh tế - Tài chính TP.HCM (UEF)',
            department: 'Chương trình Thạc sĩ Quan hệ Công chúng & Truyền thông',
            url: 'https://www.uef.edu.vn',
          },
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Cử nhân Quan hệ Công chúng & Truyền thông — Loại Giỏi (GPA 3.4/4.0)',
            credentialCategory: 'Bachelor Degree with Honors',
            recognizedBy: {
              '@type': 'CollegeOrUniversity',
              name: 'Trường Đại học Văn Lang (VLU)',
            },
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Học viên Cao học / Thạc sĩ Ngành Quan hệ Công chúng & Truyền thông',
            credentialCategory: 'Master Degree Program',
            recognizedBy: {
              '@type': 'CollegeOrUniversity',
              name: 'Trường Đại học Kinh tế - Tài chính TP.HCM (UEF)',
            },
          },
        ],
        award: [
          'Giải MC Xuất sắc — Nhà Văn hóa Thanh Niên TP.HCM',
          'Tốt nghiệp Cử nhân Loại Giỏi ngành Quan hệ Công chúng & Truyền thông — Đại học Văn Lang (GPA 3.4/4.0)',
        ],
        knowsLanguage: [
          {
            '@type': 'Language',
            name: 'Vietnamese',
            alternateName: 'vi',
          },
          {
            '@type': 'Language',
            name: 'English',
            alternateName: 'en',
          },
        ],
        knowsAbout: [
          'Public Relations (PR) & Corporate Communications',
          'Corporate Social Responsibility (CSR) End-to-End Project Management',
          'BMB Love School & Chiến dịch Neo Chữ Vượt Giông (114K+ Followers)',
          'Corporate Event Management & Multicultural Galas (150–500+ Attendees)',
          'Internal Communications & Employer Branding',
          'Corporate Magazine Editorial & Journalism (RT Connection Issues No. 14–19)',
          'B2B Corporate Sponsorship Acquisition & Internal Fundraising',
          'Corporate Video Production & Creative Direction',
          'Stage Hosting (MC) & Performance Choreography',
        ],
        sameAs: [
          baseUrl,
          SITE_CONFIG.zaloUrl,
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${baseUrl}/#case-studies`,
        name: 'Dự Án CSR, Sự Kiện & Ấn Phẩm Truyền Thông Tiêu Biểu — Huỳnh Thái Vân',
        numberOfItems: SEO_CASE_STUDIES_LIST.length,
        itemListElement: SEO_CASE_STUDIES_LIST.map((cs, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            '@id': `${baseUrl}/#${cs.id}`,
            name: cs.name,
            genre: cs.category,
            description: cs.description,
            image: `${baseUrl}${cs.imagePath}`,
            creator: {
              '@id': `${baseUrl}/#person`,
            },
          },
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${baseUrl}/#video-showreel`,
        name: 'Showreel 9 Dự Án Sản Xuất Video Truyền Thông & Sự Kiện — Huỳnh Thái Vân',
        numberOfItems: PRODUCTION_VIDEOS_LIST.length,
        itemListElement: PRODUCTION_VIDEOS_LIST.map((video) => ({
          '@type': 'ListItem',
          position: video.indexNumber,
          item: {
            '@type': 'VideoObject',
            '@id': `${baseUrl}/#${video.id}`,
            name: `${video.title} — Huỳnh Thái Vân`,
            description: `Dự án sản xuất video truyền thông và sự kiện doanh nghiệp "${video.title}" trong hồ sơ năng lực của Huỳnh Thái Vân.`,
            thumbnailUrl: [`${baseUrl}${video.posterSrc}`],
            uploadDate: '2026-01-09T09:00:00+07:00',
            contentUrl: `${baseUrl}${video.videoSrc}`,
            embedUrl: `${baseUrl}/#slide-12`,
            creator: {
              '@id': `${baseUrl}/#person`,
            },
            inLanguage: 'vi-VN',
          },
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${baseUrl}/#editorial-magazines`,
        name: '6 Ấn Phẩm Nội San Doanh Nghiệp RT Connection (No. 14 – No. 19) — Biên Tập Huỳnh Thái Vân',
        numberOfItems: RT_CONNECTION_ISSUES_LIST.length,
        itemListElement: RT_CONNECTION_ISSUES_LIST.map((issue, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'PublicationIssue',
            '@id': `${baseUrl}/#${issue.id}`,
            name: `${issue.title} (${issue.publishDate})`,
            issueNumber: String(issue.issueNumber),
            numberOfPages: issue.pageCount,
            url: `${baseUrl}${issue.localPdfUrl}`,
            image: `${baseUrl}${issue.pagesFolder}/page-01.webp`,
            editor: {
              '@id': `${baseUrl}/#person`,
            },
            inLanguage: 'vi-VN',
          },
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/#faq`,
        isPartOf: {
          '@id': `${baseUrl}/#profilepage`,
        },
        mainEntity: SEO_PORTFOLIO_FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}
