import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin2129/', '/api/'],
    },
    sitemap: 'https://hyson.kr/sitemap.xml',
  };
}
