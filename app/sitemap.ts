export const dynamic = 'force-static';

import { products, blogPosts } from '@/lib/data';

const baseUrl = 'https://YOUR-DOMAIN.COM';

export default function sitemap() {
  const staticPages = [
    '',
    '/search',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
    '/affiliate-disclosure',
    '/disclaimer',
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
    })),

    ...products.map((product) => ({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: new Date(),
    })),

    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
    })),
  ];
}
