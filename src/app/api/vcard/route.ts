import { NextResponse } from 'next/server';
import { buildHuynhThaiVanVCard } from '@/shared/utils/vcard-builder.util';

export async function GET() {
  const vcfContent = buildHuynhThaiVanVCard();
  return new NextResponse(vcfContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Huynh-Thai-Van.vcf"',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
