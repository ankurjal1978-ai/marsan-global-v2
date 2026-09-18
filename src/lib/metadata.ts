import type { Metadata } from 'next';
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://marsan-global.com')
).replace(/\/$/, '');
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | MarSan Global`,
      description,
      url: path,
      type: 'website',
      images: [
        {
          url: '/assets/opengraph.jpg.webp',
          width: 1200,
          height: 630,
          alt: 'MarSan Global — The Global Connector',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/opengraph.jpg.webp'],
    },
  };
}
