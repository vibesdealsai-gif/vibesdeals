import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'Vibes Deals – Best Deals, Trending Products & Shopping Guides',
  description: 'Discover the best online deals, trending products, discounts and shopping guides at Vibes Deals. Shop smarter with carefully selected product recommendations.',
  openGraph: {
    title: 'Vibes Deals – Best Deals, Trending Products & Shopping Guides',
    description: 'Discover the best online deals, trending products, discounts and shopping guides at Vibes Deals. Shop smarter with carefully selected product recommendations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibes Deals',
    description: 'Discover the best online deals and trending products.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jakarta.variable} font-sans bg-gray-50 text-[#131921] antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

