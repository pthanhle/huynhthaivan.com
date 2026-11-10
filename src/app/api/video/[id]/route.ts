import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTION_VIDEOS_LIST } from '@/entities/media-work/constants/video-showreel.constants';

export const runtime = 'edge';

function buildUpstreamUrl(driveFileId: string): string {
  return `https://drive.usercontent.google.com/download?id=${driveFileId}&export=download&confirm=t`;
}

export async function HEAD(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const entry = PRODUCTION_VIDEOS_LIST.find((v) => v.id === id);

  if (!entry) {
    return new NextResponse(null, { status: 404 });
  }

  const upstreamRes = await fetch(buildUpstreamUrl(entry.driveFileId), {
    method: 'GET',
    headers: {
      Range: 'bytes=0-0',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15',
    },
    redirect: 'follow',
  });

  const contentRange = upstreamRes.headers.get('content-range');
  const totalBytes = contentRange?.split('/')[1];

  const responseHeaders = new Headers();
  responseHeaders.set('Content-Type', 'video/mp4');
  responseHeaders.set('Accept-Ranges', 'bytes');
  responseHeaders.set('Cache-Control', 'private, max-age=3600, no-transform');
  if (totalBytes) {
    responseHeaders.set('Content-Length', totalBytes);
  }

  return new NextResponse(null, {
    status: 200,
    headers: responseHeaders,
  });
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const entry = PRODUCTION_VIDEOS_LIST.find((v) => v.id === id);

  if (!entry) {
    return NextResponse.json({ error: 'Video not found' }, { status: 404 });
  }

  const upstreamUrl = buildUpstreamUrl(entry.driveFileId);
  const rangeHeader = request.headers.get('range') ?? 'bytes=0-';

  const upstreamHeaders = new Headers();
  upstreamHeaders.set('Range', rangeHeader);
  upstreamHeaders.set(
    'User-Agent',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15',
  );

  const upstreamRes = await fetch(upstreamUrl, {
    headers: upstreamHeaders,
    redirect: 'follow',
  });

  if (!upstreamRes.ok && upstreamRes.status !== 206) {
    return NextResponse.redirect(upstreamUrl, 307);
  }

  const responseHeaders = new Headers();
  responseHeaders.set('Content-Type', 'video/mp4');
  responseHeaders.set('Accept-Ranges', 'bytes');
  responseHeaders.set('Cache-Control', 'private, max-age=3600, no-transform');

  const contentRange = upstreamRes.headers.get('content-range');
  if (contentRange) {
    responseHeaders.set('Content-Range', contentRange);
  }

  const contentLength = upstreamRes.headers.get('content-length');
  if (contentLength) {
    responseHeaders.set('Content-Length', contentLength);
  }

  return new NextResponse(upstreamRes.body, {
    status: upstreamRes.status,
    headers: responseHeaders,
  });
}
