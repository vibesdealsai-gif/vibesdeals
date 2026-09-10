import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Info, ShieldCheck, Star, StarHalf, Truck } from 'lucide-react';
import { products } from '@/lib/data';
import { siteConfig } from '@/config/site';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);
  
  if (!product) {
    notFound();
  }

  // Related products logic (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarHalf key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />);
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="container mx-auto px-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href={`/search?category=${product.category}`} className="hover:text-blue-600">
            {product.category}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Product Image Section */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 relative flex items-center justify-center min-h-[400px] shadow-sm">
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white font-bold px-3 py-1.5 rounded-lg text-sm shadow-md">
                  {product.discount}% OFF
                </div>
              )}
              <div className="relative w-full h-[400px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-xl flex gap-3 border border-blue-100">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
              <p className="text-sm leading-relaxed">
                <span className="font-bold">Affiliate Disclosure:</span> {siteConfig.affiliateDisclosure}
              </p>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="md:w-1/2 flex flex-col">
            <div className="mb-2">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{product.brand}</span>
            </div>
            <h1 className="font-jakarta text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="font-bold text-gray-900">{product.rating}</span>
              <span className="text-blue-600 hover:underline cursor-pointer">
                ({product.reviewCount.toLocaleString()} reviews)
              </span>
            </div>
            
            {/* Price block */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through mb-1">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-sm text-green-600 font-bold flex items-center gap-1">
                <Check className="w-4 h-4" /> In Stock & Ready to Ship
              </p>
              
              <div className="mt-6">
                <a 
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-orange-400 hover:bg-orange-500 text-[#131921] font-bold text-lg py-4 px-8 rounded-xl transition-colors shadow-lg shadow-orange-500/20"
                >
                  View Deal on Retailer
                </a>
                <p className="text-center text-xs text-gray-500 mt-3">
                  Clicking this link will open a new tab to the retailer's website.
                </p>
              </div>
            </div>

            {/* Highlights */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Product Highlights</h3>
                <ul className="space-y-2">
                  {product.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100 mt-auto">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-green-500" />
                <span className="text-sm font-medium text-gray-700">Verified Deals</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-8 h-8 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">Fast Shipping info available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Tabs Area */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p>{product.description}</p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Pros & Cons */}
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {product.pros && product.pros.length > 0 && (
                  <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" /> Pros
                    </h3>
                    <ul className="space-y-2">
                      {product.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-green-800 text-sm">
                          <span className="text-green-500 font-bold">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {product.cons && product.cons.length > 0 && (
                  <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                    <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center font-bold text-red-600">-</span> Cons
                    </h3>
                    <ul className="space-y-2">
                      {product.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-red-800 text-sm">
                          <span className="text-red-500 font-bold">-</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Specifications Sidebar */}
            <div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Specifications</h2>
                {product.specs ? (
                  <dl className="space-y-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key}>
                        <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">{key}</dt>
                        <dd className="text-sm font-medium text-gray-900">{value}</dd>
                      </div>
                    ))}
                    <div>
                      <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Brand</dt>
                      <dd className="text-sm font-medium text-gray-900">{product.brand}</dd>
                    </div>
                  </dl>
                ) : (
                  <p className="text-sm text-gray-500">Full specifications available on retailer site.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Reuse ProductCard component */}
              {relatedProducts.map(p => (
                <Link key={p.id} href={`/product/${p.slug}`} className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">
                    <div className="block relative h-48 w-full bg-gray-50 overflow-hidden">
                      <Image src={p.image} alt={p.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2 line-clamp-2">{p.name}</h3>
                      <div className="mt-auto pt-4 flex justify-between items-center">
                        <span className="font-bold text-gray-900">${p.price.toFixed(2)}</span>
                        <span className="text-xs font-bold text-blue-600">View</span>
                      </div>
                    </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
