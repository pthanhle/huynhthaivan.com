import { NextResponse } from 'next/server';
import { SLIDE_INDEX_DIRECTORY } from '@/entities/slides/constants/slide-index-directory.constants';
import { RT_CONNECTION_ISSUES_LIST } from '@/entities/media-work/constants/rt-magazines.constants';
import { PRODUCTION_VIDEOS_LIST } from '@/entities/media-work/constants/video-showreel.constants';

export async function GET() {
  const ready =
    SLIDE_INDEX_DIRECTORY.length === 15 &&
    RT_CONNECTION_ISSUES_LIST.length === 6 &&
    PRODUCTION_VIDEOS_LIST.length === 9;

  return NextResponse.json(
    {
      ok: ready,
      status: ready ? 'ok' : 'degraded',
      probe: 'readiness',
      service: 'huynhthaivan.com-portfolio-2026',
      checks: {
        slideDeckReady: SLIDE_INDEX_DIRECTORY.length === 15,
        magazinePreRenderedReady: RT_CONNECTION_ISSUES_LIST.length === 6,
        videoShowcaseReady: PRODUCTION_VIDEOS_LIST.length === 9,
      },
      timestamp: new Date().toISOString(),
    },
    { status: ready ? 200 : 503 }
  );
}
