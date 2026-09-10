import { ProductCard } from '@/components/ui/ProductCard';
import { CategoryGrid } from '@/components/ui/CategoryGrid';
import { HeroSection } from '@/components/ui/HeroSection';
import { DealOfTheDay } from '@/components/ui/DealOfTheDay';
import { products, categories, blogPosts } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredDeals = products.filter(p => p.featured).slice(0, 4);
  const trendingProducts = products.filter(p => p.trending).slice(0, 8);
  const bestSellers = products.filter(p => p.bestseller).slice(0, 4);
  
  // Use first featured deal as deal of the day
  const dealOfTheDay = products.find(p => p.discount > 25) || products[0];

  return (
    <>
      <HeroSection />

      {/* Categories Section */}
      <section id="categories" className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-jakarta text-2xl font-bold text-gray-900">Shop by Category</h2>
            </div>
          </div>
          <CategoryGrid categories={categories} />
        </div>
      </section>

      {/* Today's Best Deals */}
      <section id="deals" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-jakarta text-3xl font-bold text-gray-900 flex items-center gap-2">
                <span className="text-orange-500">🔥</span> Today's Best Deals
              </h2>
              <p className="text-gray-500 mt-2">Hand-picked offers with the biggest discounts.</p>
            </div>
            <Link href="/search?sort=discount" className="hidden sm:flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              View All Deals <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDeals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/search?sort=discount" className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-colors">
              View All Deals
            </Link>
          </div>
        </div>
      </section>

      {/* Deal of the Day Banner */}
      <DealOfTheDay product={dealOfTheDay} />

      {/* Trending Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-jakarta text-3xl font-bold text-gray-900">📈 Trending Products</h2>
              <p className="text-gray-500 mt-2">What everyone is buying right now.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-jakarta text-3xl font-bold text-gray-900">⭐ Best Sellers</h2>
              <p className="text-gray-500 mt-2">Top-rated products loved by customers.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Guides / Blog */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-jakarta text-3xl font-bold text-gray-900">Shopping Guides & Deals</h2>
              <p className="text-gray-500 mt-2">Expert tips to help you shop smarter.</p>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Read All Articles <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Link href={`/blog/${post.slug}`} className="block relative h-48 w-full overflow-hidden">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-6">
                  <div className="text-xs text-orange-500 font-bold uppercase tracking-wider mb-2">Guide</div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">{post.date}</span>
                    <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-blue-600 hover:text-blue-800">
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
