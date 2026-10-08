import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Search Products & Deals | Vibes Deals',
  description:
    'Search Vibes Deals for trending products, shopping deals, product recommendations and useful shopping guides.',
  alternates: {
    canonical: '/search',
  },
};

export default function SearchLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
