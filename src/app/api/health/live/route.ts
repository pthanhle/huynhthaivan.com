import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    status: 'ok',
    probe: 'liveness',
    service: 'huynhthaivan.com-portfolio-2026',
    timestamp: new Date().toISOString(),
  });
}
