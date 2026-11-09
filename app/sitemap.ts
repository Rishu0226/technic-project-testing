import type { MetadataRoute } from 'next';
import { API_BASE_URL } from '../lib/api';
import { legalUpdated } from '../components/legal/legalContent';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BASE_URL = 'https://www.technictechnologies.tech';

interface BaseItem {
  slug?: string;
  status?: string;
  updatedAt?: string | Date;
  createdAt?: string | Date;
}

interface BlogItem extends BaseItem {
  publishedAt?: string | Date;
}

function parseValidDate(value?: string | Date | null): Date | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function toCanonicalUrl(path: string): string {
  const cleanPath = path
    .trim()
    .split('?')[0]
    .split('#')[0]
    .replace(/^\/+|\/+$/g, '');

  if (!cleanPath) {
    return `${BASE_URL}/`;
  }
  return `${BASE_URL}/${cleanPath}`;
}

async function fetchCollection<T>(endpoint: string): Promise<T[]> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      cache: 'no-store',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const seenUrls = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  function addUrl(entry: MetadataRoute.Sitemap[number]) {
    if (!seenUrls.has(entry.url)) {
      seenUrls.add(entry.url);
      entries.push(entry);
    }
  }

  // 1. Core Homepage
  addUrl({
    url: toCanonicalUrl('/'),
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // 2. Primary Catalog and Main Landing Pages
  addUrl({
    url: toCanonicalUrl('/services'),
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  addUrl({
    url: toCanonicalUrl('/products'),
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  addUrl({
    url: toCanonicalUrl('/solutions'),
    changeFrequency: 'weekly',
    priority: 0.8,
  });

  addUrl({
    url: toCanonicalUrl('/blog'),
    changeFrequency: 'weekly',
    priority: 0.8,
  });

  addUrl({
    url: toCanonicalUrl('/about'),
    changeFrequency: 'monthly',
    priority: 0.7,
  });

  addUrl({
    url: toCanonicalUrl('/contact'),
    changeFrequency: 'monthly',
    priority: 0.7,
  });

  addUrl({
    url: toCanonicalUrl('/career'),
    changeFrequency: 'weekly',
    priority: 0.7,
  });

  // 3. Static Legal Pages (with actual modification dates)
  const legalDate = parseValidDate(legalUpdated);

  addUrl({
    url: toCanonicalUrl('/privacy-policy'),
    ...(legalDate ? { lastModified: legalDate } : {}),
    changeFrequency: 'yearly',
    priority: 0.3,
  });

  addUrl({
    url: toCanonicalUrl('/terms-of-service'),
    ...(legalDate ? { lastModified: legalDate } : {}),
    changeFrequency: 'yearly',
    priority: 0.3,
  });

  // 4. Dynamic Pages from API
  const [servicesResult, productsResult, solutionsResult, blogsResult, careersResult] =
    await Promise.allSettled([
      fetchCollection<BaseItem>('/api/services'),
      fetchCollection<BaseItem>('/api/products'),
      fetchCollection<BaseItem>('/api/solutions'),
      fetchCollection<BlogItem>('/api/blogs'),
      fetchCollection<BaseItem>('/api/careers'),
    ]);

  const services = servicesResult.status === 'fulfilled' ? servicesResult.value : [];
  const products = productsResult.status === 'fulfilled' ? productsResult.value : [];
  const solutions = solutionsResult.status === 'fulfilled' ? solutionsResult.value : [];
  const blogs = blogsResult.status === 'fulfilled' ? blogsResult.value : [];
  const careers = careersResult.status === 'fulfilled' ? careersResult.value : [];

  // Services detail pages
  for (const service of services) {
    if (service?.slug && service.status !== 'Draft') {
      const lastModified = parseValidDate(service.updatedAt || service.createdAt);
      addUrl({
        url: toCanonicalUrl(`/services/${service.slug}`),
        ...(lastModified ? { lastModified } : {}),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  // Products detail pages
  for (const product of products) {
    if (product?.slug && product.status !== 'Draft') {
      const lastModified = parseValidDate(product.updatedAt || product.createdAt);
      addUrl({
        url: toCanonicalUrl(`/products/${product.slug}`),
        ...(lastModified ? { lastModified } : {}),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  // Solutions detail pages
  for (const solution of solutions) {
    if (solution?.slug && solution.status !== 'Draft') {
      const lastModified = parseValidDate(solution.updatedAt || solution.createdAt);
      addUrl({
        url: toCanonicalUrl(`/solutions/${solution.slug}`),
        ...(lastModified ? { lastModified } : {}),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  // Blog articles
  for (const blog of blogs) {
    if (blog?.slug && blog.status !== 'Draft') {
      const lastModified = parseValidDate(blog.updatedAt || blog.publishedAt || blog.createdAt);
      addUrl({
        url: toCanonicalUrl(`/blog/${blog.slug}`),
        ...(lastModified ? { lastModified } : {}),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  // Careers detail pages
  for (const job of careers) {
    if (job?.slug && job.status !== 'Draft' && job.status !== 'Closed') {
      const lastModified = parseValidDate(job.updatedAt || job.createdAt);
      addUrl({
        url: toCanonicalUrl(`/career/${job.slug}`),
        ...(lastModified ? { lastModified } : {}),
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    }
  }

  return entries;
}
