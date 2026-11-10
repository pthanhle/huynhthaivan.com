import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/shared/config/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.siteUrl;
  const now = new Date();
  const portfolioImages = [
    `${base}${SITE_CONFIG.ogImagePath}`,
    `${base}/assets/extracted/p01-van-conical-hat-cutout.webp`,
    `${base}/assets/extracted/p02-van-camera-cutout.webp`,
    `${base}/assets/extracted/p03-van-about-cutout.webp`,
    `${base}/assets/extracted/p04-van-aodai-cutout.webp`,
    `${base}/assets/extracted/p05-van-csr-child-cutout.webp`,
    `${base}/assets/extracted/p06-card-1-fanpage.webp`,
    `${base}/assets/extracted/p06-card-2-reels-views.webp`,
    `${base}/assets/extracted/p06-card-3-khanh-thanh.webp`,
    `${base}/assets/extracted/p07-card-1-banh-mi.webp`,
    `${base}/assets/extracted/p07-card-2-the-thao-quy.webp`,
    `${base}/assets/extracted/p07-card-3-phien-cho-1office.webp`,
    `${base}/assets/extracted/p08-floral-van-cutout.webp`,
    `${base}/assets/extracted/p09-event-1-yep.webp`,
    `${base}/assets/extracted/p09-event-2-anniversary.webp`,
    `${base}/assets/extracted/p09-event-3-company-trip.webp`,
    `${base}/assets/extracted/p10-img-x8.webp`,
    `${base}/assets/extracted/p10-img-x9.webp`,
    `${base}/assets/extracted/p10-img-x10.webp`,
    `${base}/assets/extracted/p10-img-x11.webp`,
    `${base}/assets/extracted/p10-img-x12.webp`,
    `${base}/assets/extracted/p11-img-x8.webp`,
    `${base}/assets/extracted/p11-img-x9.webp`,
    `${base}/assets/extracted/p11-img-x10.webp`,
    `${base}/assets/extracted/p11-img-x11.webp`,
    `${base}/assets/extracted/p11-img-x12.webp`,
    `${base}/assets/extracted/p11-img-x13.webp`,
    `${base}/assets/extracted/p12-van-retro-tv.webp`,
    `${base}/assets/extracted/p13-van-beach-events.webp`,
    `${base}/assets/extracted/p14-img-x7.webp`,
    `${base}/assets/extracted/p14-img-x9.webp`,
    `${base}/assets/extracted/p15-van-contact-cutout.webp`,
  ];

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: portfolioImages,
    },
    {
      url: `${base}/llms.txt`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/llms-full.txt`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}${SITE_CONFIG.pdfDownloadPath}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];
}
