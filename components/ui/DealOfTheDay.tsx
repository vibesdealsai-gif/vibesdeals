'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { Product } from '@/lib/types';

interface DealOfTheDayProps {
  product: Product;
}

export function DealOfTheDay({ product }: DealOfTheDayProps) {
  // Demo countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev; // Timer ended
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#131921] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
          {/* Decor background */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>
          
          <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative z-10 text-white">
            <div className="flex items-center gap-2 text-orange-400 font-bold mb-4">
              <Clock className="w-5 h-5" />
              <span className="uppercase tracking-wider">Deal of the Day</span>
            </div>
            
            <h2 className="font-jakarta text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              {product.name}
            </h2>
            
            <p className="text-gray-400 mb-8 line-clamp-2 text-lg">
              {product.description}
            </p>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-bold text-white">${product.price.toFixed(2)}</span>
              <span className="text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
              <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                Save {product.discount}%
              </span>
            </div>
            
            {/* Countdown (Demo) */}
            <div className="mb-10">
              <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-semibold">Offer ends in (Demo)</p>
              <div className="flex gap-4">
                <div className="bg-gray-800 rounded-lg p-3 w-16 text-center border border-gray-700">
                  <span className="block text-2xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <span className="text-xs text-gray-400">HRS</span>
                </div>
                <div className="text-2xl font-bold text-gray-600 self-center">:</div>
                <div className="bg-gray-800 rounded-lg p-3 w-16 text-center border border-gray-700">
                  <span className="block text-2xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <span className="text-xs text-gray-400">MIN</span>
                </div>
                <div className="text-2xl font-bold text-gray-600 self-center">:</div>
                <div className="bg-gray-800 rounded-lg p-3 w-16 text-center border border-gray-700">
                  <span className="block text-2xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <span className="text-xs text-gray-400">SEC</span>
                </div>
              </div>
            </div>
            
            <div>
              <a 
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-[#131921] font-bold text-lg py-4 px-8 rounded-lg transition-colors shadow-lg shadow-orange-500/20"
              >
                Grab This Deal <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative bg-white lg:bg-transparent min-h-[300px] lg:min-h-full flex items-center justify-center p-8">
            <div className="relative w-full max-w-md aspect-square">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-contain filter drop-shadow-2xl z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-10 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full shadow-inner z-0 lg:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
