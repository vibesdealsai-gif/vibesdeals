'use client';

import Link from 'next/link';
import { Search, Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#131921] text-white border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 gap-4 md:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <ShoppingBag className="w-8 h-8 text-orange-400" />
            <span className="font-jakarta font-bold text-2xl tracking-tight hidden sm:block">
              Vibes<span className="text-orange-400">Deals</span>
            </span>
          </Link>

          {/* Search Bar (Desktop & Tablet) */}
          <div className="flex-1 max-w-3xl hidden md:block">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <input
                type="text"
                placeholder="Search products, brands and deals..."
                className="w-full h-10 pl-4 pr-12 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="h-10 px-4 bg-orange-400 hover:bg-orange-500 transition-colors rounded-r-md flex items-center justify-center text-[#131921]"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Mobile Search & Menu Toggles */}
          <div className="flex flex-1 justify-end items-center gap-4 md:hidden">
            <button 
              className="p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex bg-gray-800 text-sm font-medium">
        <div className="container mx-auto px-4 flex items-center h-10 gap-6">
          <Link href={siteConfig.links.home} className="hover:text-orange-400 transition-colors">Home</Link>
          <Link href={siteConfig.links.deals} className="hover:text-orange-400 transition-colors text-orange-400">Today's Deals</Link>
          <Link href={siteConfig.links.bestSellers} className="hover:text-orange-400 transition-colors">Best Sellers</Link>
          <Link href={siteConfig.links.categories} className="hover:text-orange-400 transition-colors">Categories</Link>
          <Link href={siteConfig.links.blog} className="hover:text-orange-400 transition-colors">Shopping Guides</Link>
          <Link href={siteConfig.links.about} className="hover:text-orange-400 transition-colors">About Us</Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 absolute w-full left-0 top-[65px] h-screen overflow-y-auto pb-24 shadow-xl">
          <div className="p-4">
            <form onSubmit={handleSearch} className="relative flex items-center mb-6">
              <input
                type="text"
                placeholder="Search deals..."
                className="w-full h-12 pl-4 pr-12 rounded-md text-gray-900 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-0 h-12 px-4 bg-orange-400 hover:bg-orange-500 rounded-r-md text-[#131921]"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
            
            <nav className="flex flex-col gap-4 text-lg font-medium">
              <Link href={siteConfig.links.home} onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-800 hover:text-orange-400">Home</Link>
              <Link href={siteConfig.links.deals} onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-800 text-orange-400">Today's Deals</Link>
              <Link href={siteConfig.links.bestSellers} onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-800 hover:text-orange-400">Best Sellers</Link>
              <Link href={siteConfig.links.categories} onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-800 hover:text-orange-400">Categories</Link>
              <Link href={siteConfig.links.blog} onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-800 hover:text-orange-400">Shopping Guides</Link>
              <Link href={siteConfig.links.about} onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-800 hover:text-orange-400">About Us</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
