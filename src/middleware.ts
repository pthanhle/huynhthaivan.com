import { NextRequest, NextResponse } from 'next/server';

const BLOCKED_PROBE_PATHS = [
  '/wp-admin',
  '/wp-login.php',
  '/xmlrpc.php',
  '/.env',
  '/.git',
  '/phpmyadmin',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lowerPath = pathname.toLowerCase();

  for (const probe of BLOCKED_PROBE_PATHS) {
    if (lowerPath.startsWith(probe)) {
      return new NextResponse('Not Found', {
        status: 404,
      });
    }
  }

  const host = request.headers.get('host') ?? '';
  if (host.startsWith('www.huynhthaivan.com')) {
    const targetUrl = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      'https://huynhthaivan.com'
    );
    return NextResponse.redirect(targetUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|assets/|downloads/).*)',
  ],
};
