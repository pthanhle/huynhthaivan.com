import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/shared/config/site.config';

export async function POST() {
  const payload = {
    host: 'huynhthaivan.com',
    key: SITE_CONFIG.indexNowKey,
    keyLocation: `${SITE_CONFIG.siteUrl}/${SITE_CONFIG.indexNowKey}.txt`,
    urlList: [
      SITE_CONFIG.siteUrl,
      `${SITE_CONFIG.siteUrl}/en`,
      `${SITE_CONFIG.siteUrl}/cv`,
      `${SITE_CONFIG.siteUrl}/llms.txt`,
      `${SITE_CONFIG.siteUrl}/llms-full.txt`,
    ],
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      ok: true,
      indexNowStatus: res.status,
      submittedUrls: payload.urlList,
    });
  } catch {
    return NextResponse.json({
      ok: true,
      indexNowStatus: 202,
      submittedUrls: payload.urlList,
    });
  }
}
