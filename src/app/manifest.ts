import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/shared/config/site.config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.siteName,
    short_name: SITE_CONFIG.siteShortName,
    description: SITE_CONFIG.ownerHeadlineVi,
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F1EA',
    theme_color: '#4A0404',
    icons: [
      {
        src: '/assets/extracted/p01-van-conical-hat-cutout.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  };
}
