import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/shared/config/site.config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.siteUrl;

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/llms-full.txt', '/downloads/', '/assets/'],
        disallow: ['/admin/', '/api/', '/en', '/cv'],
      },
      {
        userAgent: [
          'Googlebot',
          'Googlebot-Image',
          'Googlebot-Video',
          'Bingbot',
          'Applebot',
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt', '/downloads/', '/assets/'],
        disallow: ['/admin/', '/api/', '/en', '/cv'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
