export const dynamic = 'force-static';

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

  const categories = [
    'electronics',
    'laptops',
    'gaming',
    'smartphones',
    'fitness',
    'fashion',
    'beauty',
    'accessories',
    'home-kitchen',
    'office-products',
    'travel',
    'trending-products',
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
    })),

    ...categories.map((category) => ({
      url: `${baseUrl}/category/${category}`,
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
