'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import { ProductCard } from '@/components/ui/ProductCard';
import { products, categories } from '@/lib/data';
import { Search as SearchIcon, SlidersHorizontal, X } from 'lucide-react';
import { Product } from '@/lib/types';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || '';
  const sortParam = searchParams.get('sort') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState(sortParam || 'recommended');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    let result = [...products];

    // Search filter
    if (query) {
      const lowerQuery = query.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.brand.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
      );
    }

    // Category filter
    if (activeCategory) {
      result = result.filter(p => p.category.toLowerCase() === activeCategory.replace('-', ' '));
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'discount':
        result.sort((a, b) => b.discount - a.discount);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'bestseller':
        result = result.filter(p => p.bestseller);
        break;
      default: // recommended
        break;
    }

    setFilteredProducts(result);
  }, [query, activeCategory, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="font-jakarta text-3xl font-bold text-gray-900 mb-4">
          {query ? `Search Results for "${query}"` : activeCategory ? `${activeCategory.replace('-', ' ')} Deals` : 'All Deals'}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <p className="text-gray-500">Showing {filteredProducts.length} results</p>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            {/* Mobile Filter Toggle */}
            <button 
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white"
              onClick={() => setShowMobileFilters(true)}
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            
            <div className="flex items-center gap-2 flex-1 sm:flex-none">
              <label htmlFor="sort" className="text-sm text-gray-600 hidden sm:block">Sort by:</label>
              <select 
                id="sort" 
                className="w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="discount">Highest Discount</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className={`
          fixed inset-0 z-50 bg-black/50 md:bg-transparent md:static md:z-auto
          ${showMobileFilters ? 'block' : 'hidden md:block'}
        `}>
          <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white p-6 shadow-xl md:static md:w-64 md:max-w-none md:bg-transparent md:p-0 md:shadow-none h-full overflow-y-auto">
            
            <div className="flex items-center justify-between mb-6 md:hidden">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setShowMobileFilters(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-8">
              {/* Search Refinement */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Refine Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search within..."
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-orange-400"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <SearchIcon className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  <button 
                    className={`block w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors ${activeCategory === '' ? 'bg-orange-100 text-orange-800 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveCategory('')}
                  >
                    All Categories
                  </button>
                  {categories.map(cat => (
                    <button 
                      key={cat.slug}
                      className={`block w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors ${activeCategory === cat.slug ? 'bg-orange-100 text-orange-800 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
                      onClick={() => setActiveCategory(cat.slug)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile apply button */}
            <div className="mt-8 md:hidden">
              <button 
                onClick={() => setShowMobileFilters(false)}
                className="w-full bg-orange-400 text-white font-bold py-3 rounded-lg"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl border border-gray-200 border-dashed p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
              <SearchIcon className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">We couldn't find any matches for your current search or filters.</p>
              <button 
                onClick={() => { setQuery(''); setActiveCategory(''); setSortBy('recommended'); }}
                className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Suspense fallback={<div className="container mx-auto p-12 text-center">Loading results...</div>}>
        <SearchContent />
      </Suspense>
    </div>
  );
}
