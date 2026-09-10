'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, StarHalf } from 'lucide-react';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarHalf key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-3 right-3 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
          {product.discount}% OFF
        </div>
      )}

      {/* Image Container */}
      <Link href={`/product/${product.slug}`} className="block relative h-56 w-full bg-gray-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">{product.brand}</div>
        
        <Link href={`/product/${product.slug}`} className="block flex-1">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-tight mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-xs font-medium text-gray-700 ml-1">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviewCount.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* CTA Button */}
        <a 
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center bg-orange-400 hover:bg-orange-500 text-[#131921] font-bold py-2.5 px-4 rounded-lg transition-colors mt-auto shadow-sm"
          onClick={(e) => e.stopPropagation()}
        >
          View Deal
        </a>
      </div>
    </div>
  );
}
