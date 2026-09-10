export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  image: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  affiliateUrl: string;
  featured?: boolean;
  trending?: boolean;
  bestseller?: boolean;
  highlights?: string[];
  pros?: string[];
  cons?: string[];
  specs?: Record<string, string>;
}

export interface Category {
  name: string;
  slug: string;
  icon: string; // We'll use lucide-react icon names or image URLs
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
