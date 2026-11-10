import { NextResponse } from 'next/server';
import { RT_CONNECTION_ISSUES_LIST } from '@/entities/media-work/constants/rt-magazines.constants';
import { PRODUCTION_VIDEOS_LIST } from '@/entities/media-work/constants/video-showreel.constants';
import {
  SLIDE_02_INTRODUCTION_DATA,
  SLIDE_03_ABOUT_ME_DATA,
  SLIDE_04_STRENGTHS_SECTIONS,
  SLIDE_05_CSR_BMB_DATA,
} from '@/entities/slides/constants/slides-01-to-05.constants';
import {
  SLIDE_06_CSR_METRICS_CARDS,
  SLIDE_07_CSR_FUNDRAISING_TEXT,
  SLIDE_09_EVENT_OVERVIEW_DATA,
} from '@/entities/slides/constants/slides-06-to-10.constants';
import {
  SLIDE_11_CAPTION,
  SLIDE_13_WRITING_DATA,
  SLIDE_14_PASSION_MC_DANCE_DATA,
  SLIDE_15_CONTACT_ME_DATA,
} from '@/entities/slides/constants/slides-11-to-15.constants';
import { SITE_CONFIG } from '@/shared/config/site.config';
import { SEO_PORTFOLIO_FAQ_ITEMS } from '@/shared/constants/seo-faq-schema.constants';

export async function GET() {
  const sections: string[] = [
    `# ${SITE_CONFIG.siteName}`,
    ``,
    `- **Website:** ${SITE_CONFIG.siteUrl}`,
    `- **PDF Portfolio:** ${SITE_CONFIG.siteUrl}${SITE_CONFIG.pdfDownloadPath}`,
    `- **Direct Contact:** ${SLIDE_15_CONTACT_ME_DATA.phoneDisplay} | ${SLIDE_15_CONTACT_ME_DATA.emailDisplay} | ${SLIDE_15_CONTACT_ME_DATA.locationDisplay}`,
    ``,
    `## Slide 02 — Introduction`,
    ...SLIDE_02_INTRODUCTION_DATA.bullets.map((b) => `- ${b}`),
    ``,
    `## Slide 03 — About Me`,
    SLIDE_03_ABOUT_ME_DATA.paragraph,
    ``,
    `## Slide 04 — Core Strengths`,
    ...SLIDE_04_STRENGTHS_SECTIONS.flatMap((s) => [
      `### ${s.numberTitle}`,
      ...s.bullets.map((b) => `- ${b}`),
    ]),
    ``,
    `## Slides 05–08 — CSR Project Management: ${SLIDE_05_CSR_BMB_DATA.subHeading}`,
    ...SLIDE_05_CSR_BMB_DATA.bullets.map((b) => `- ${b}`),
    ...SLIDE_06_CSR_METRICS_CARDS.map(
      (c) => `- **${c.title}:** ${(c.description ?? '').replace(/\n/g, ' ')}`,
    ),
    `- **Sponsorship & Internal Fundraising:** ${SLIDE_07_CSR_FUNDRAISING_TEXT.paragraph}`,
    ``,
    `## Slides 09–11 — Corporate & International Event Management`,
    `- **${SLIDE_09_EVENT_OVERVIEW_DATA.topHeading}:** ${SLIDE_09_EVENT_OVERVIEW_DATA.bottomNote}`,
    `- **RT Holdings / WASS / ISA:** ${SLIDE_11_CAPTION.line1} ${SLIDE_11_CAPTION.line2}`,
    ``,
    `## Slide 12 — 9 Corporate Video Production Projects`,
    ...PRODUCTION_VIDEOS_LIST.map(
      (v) => `- ${v.title} (${SITE_CONFIG.siteUrl}${v.videoSrc})`,
    ),
    ``,
    `## Slide 13 — Editorial & Corporate Magazine Journalism (RT Connection)`,
    SLIDE_13_WRITING_DATA.paragraph1,
    SLIDE_13_WRITING_DATA.paragraph2,
    ...RT_CONNECTION_ISSUES_LIST.map(
      (m) =>
        `- **${m.title}** (${m.publishDate}, ${m.pageCount} pages): ${SITE_CONFIG.siteUrl}${m.localPdfUrl}`,
    ),
    ``,
    `## Slide 14 — Stage MC & Performance Arts`,
    `- ${SLIDE_14_PASSION_MC_DANCE_DATA.leftCard.line1} ${SLIDE_14_PASSION_MC_DANCE_DATA.leftCard.line2}`,
    `- ${SLIDE_14_PASSION_MC_DANCE_DATA.rightCard.line1} ${SLIDE_14_PASSION_MC_DANCE_DATA.rightCard.line2}`,
    ``,
    `## Frequently Asked Questions (FAQ)`,
    ...SEO_PORTFOLIO_FAQ_ITEMS.flatMap((f) => [`### Q: ${f.question}`, `A: ${f.answer}`, ``]),
  ];

  return new NextResponse(sections.join('\n'), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
