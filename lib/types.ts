export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  image: string;
  description: string;

  // Product content
  about?: string;
  productDetails?: string;
  additionalInformation?: Record<string, string>;
  faq?: {
    question: string;
    answer: string;
  }[];

  // Pricing
  price: number;
  originalPrice: number;
  discount: number;

  // Reviews
  rating: number;
  reviewCount: number;

  // Affiliate
  affiliateUrl: string;

  // Labels
  featured?: boolean;
  trending?: boolean;
  bestseller?: boolean;

  // Product information
  highlights?: string[];
  pros?: string[];
  cons?: string[];
  specs?: Record<string, string>;
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}
