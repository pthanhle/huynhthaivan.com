import { NextRequest, NextResponse } from 'next/server';
import {
  listStoredLeadsForAdminService,
  processLeadSubmissionService,
} from '../services/leads.service';

export async function handleCreateLeadController(
  request: NextRequest
): Promise<NextResponse> {
  try {
    const rawBody = await request.json();
    const forwardedFor = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
    const clientIp = forwardedFor.split(',')[0]?.trim() || '127.0.0.1';
    const userAgent = request.headers.get('user-agent') ?? 'unknown';

    const result = await processLeadSubmissionService(rawBody, {
      clientIp,
      userAgent,
    });

    return NextResponse.json(result.body, {
      status: result.status,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: 'Yêu cầu không hợp lệ.',
      },
      {
        status: 400,
      }
    );
  }
}

export async function handleListLeadsController(
  request: NextRequest
): Promise<NextResponse> {
  const key =
    request.headers.get('x-admin-key') ??
    request.nextUrl.searchParams.get('key');

  const result = listStoredLeadsForAdminService(key);
  return NextResponse.json(result.body, {
    status: result.status,
  });
}
