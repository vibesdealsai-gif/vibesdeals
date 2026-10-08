import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
metadataBase: new URL('https://vibesdeals.com'),

alternates: {
  canonical: '/',
},

  title: 'Vibes Deals – Best Deals, Trending Products & Shopping Guides',
  description:
    'Discover the best online deals, trending products, discounts and shopping guides at Vibes Deals. Shop smarter with carefully selected product recommendations.',

  icons: {
    icon: '/vibes-deals-favicon.png',
    shortcut: '/vibes-deals-favicon.png',
    apple: '/vibes-deals-favicon.png',
  },  

  verification: {
    google: '3pdspSb-KSkcuFqRxzwTkIEHswO3DZ9yOGwpmrlUQA8',
  },

  openGraph: {
    title: 'Vibes Deals – Best Deals, Trending Products & Shopping Guides',
    description:
      'Discover the best online deals, trending products and shopping guides at Vibes Deals.',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vibes Deals',
    description:
      'Discover the best online deals and trending products.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
{/* Google Tag Manager */}
<Script
  id="google-tag-manager"
  strategy="beforeInteractive"
>
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PMHLX57G');
  `}
</Script>
        {/* Google Analytics 4 */}
        <Script
  strategy="beforeInteractive"
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-58DDZ2HY6M"
/>

<Script
  id="google-analytics"
  strategy="beforeInteractive"
>          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-58DDZ2HY6M');
          `}
        </Script>
      </head>

      <body
        className={`${inter.variable} ${jakarta.variable} font-sans bg-gray-50 text-[#131921] antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
{/* Google Tag Manager (noscript) */}
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-PMHLX57G"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  />
</noscript>
        <Header />

        <main className="flex-1 flex flex-col">
          {children}
        </main>

        <Footer />
      </body>
    </html>
    );
}
