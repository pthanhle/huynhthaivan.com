import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    status: 'ok',
    probe: 'summary',
    service: 'huynhthaivan.com-portfolio-2026',
    version: '3.0.0',
    totalSlides: 15,
    totalMagazines: 6,
    totalVideos: 9,
    timestamp: new Date().toISOString(),
  });
}
