import type { MetadataRoute } from 'next';
import routes from '@/content/routes.json';
import { siteUrl } from '@/lib/metadata';
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ url }) => ({
    url: siteUrl + url,
    changeFrequency: 'monthly',
    priority: url === '/' ? 1 : 0.7,
  }));
}
