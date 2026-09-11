import { products, blogPosts } from '@/lib/data';

const baseUrl = 'https://vibesdeals.com';

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

  const productPages = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
    })),
    ...productPages,
    ...blogPages,
  ];
}
