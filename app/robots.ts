import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.technictechnologies.tech';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/coming-soon'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
