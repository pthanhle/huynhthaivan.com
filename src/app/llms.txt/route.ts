import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/shared/config/site.config';

export async function GET() {
  const markdown = [
    `# ${SITE_CONFIG.siteName}`,
    ``,
    `> Official Domain: ${SITE_CONFIG.siteUrl}`,
    `> Contact Email: ${SITE_CONFIG.email}`,
    `> Phone / Zalo: ${SITE_CONFIG.phoneDisplay}`,
    `> Location: ${SITE_CONFIG.locationVi}`,
    `> Portfolio PDF: ${SITE_CONFIG.siteUrl}${SITE_CONFIG.pdfDownloadPath}`,
    ``,
    `## 1. Executive Profile`,
    `- **Full Name:** Huỳnh Thái Vân`,
    `- **Date of Birth:** 09/01/2001 (Capricorn)`,
    `- **Experience:** 4+ Years in Corporate Communications, Public Relations (PR), Corporate Social Responsibility (CSR) Project Leadership, and Large-Scale Event Management.`,
    `- **Education:**`,
    `  - Bachelor of Public Relations & Communications — Van Lang University (VLU), Graduated with **Honors (Giỏi — GPA 3.4/4.0)**.`,
    `  - Master’s Degree Candidate in Public Relations & Communications — Ho Chi Minh City University of Economics and Finance (UEF).`,
    `- **Awards & Stage Talent:**`,
    `  - **Best MC Award (Giải MC Xuất sắc)** — Ho Chi Minh City Youth Cultural House (Nhà Văn hóa Thanh Niên TP.HCM).`,
    `  - Former Member of **Art - Dance Crew** (Van Lang University).`,
    ``,
    `## 2. Core Competencies (Strengths)`,
    `1. **Corporate Communications & PR:** Integrated Marketing & Internal Communications planning, corporate magazine editorial (RT Connection Issues No. 14–19), multi-platform video production.`,
    `2. **End-to-End CSR Project Management (BMB Love School):** Strategy, campaign visual identity ("Neo Chữ Vượt Giông"), B2B corporate cash sponsorship acquisition (Kansai Paint), creative internal fundraising (1Office consignment marketplace, charity sports tournaments, F&B pop-up booths), field reconnaissance & building 1–2 rural/island school sites every 4 months (Ly Son Island - Quang Ngai, Tra Linh - Quang Nam), growing BMB Love School Fanpage to **114,000+ followers** with organic Reels reaching 10,000+ views.`,
    `3. **Corporate & Multicultural Event Production (150–500+ Attendees):**`,
    `   - **BMB Steel (BMB & A JSC):** Year End Party (YEP), 22nd Anniversary ("Growing & Glowing Together"), Company Trip 2026 ("Tràng An Lô Cồ"), Management L&D ("BMB Skills Bridge"), Annual Employee Holidays ("Pick Your Color", Mid-Autumn, Christmas, Greek Mythology), Corporate Billiards Tournament.`,
    `   - **RT Holdings / WASS / ISA:** Strategic Partnership Signing Ceremony for the OSSD Program (ISA), "SAIL INTO GREATNESS" Gala & year-round multicultural engagement events for **500+ Vietnamese and international expat faculty/staff (2024–2025)**.`,
    `4. **Video Showreel (9 Production Videos) & Corporate Editorial (6 Magazine Issues):**`,
    `   - Videos: VACS 3D Laser Mapping, Teacher's Day Key Moment, A2 Milk Interview, VACS 30-Year Documentary, CSR at RT Holdings, Team Building MV, VACS Stage Dance, BMB Internal Video, Grand Event Opening Visual.`,
    `   - Magazines: RT Connection Issues No. 14, No. 15, No. 16, No. 17, No. 18, No. 19.`,
  ].join('\n');

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
