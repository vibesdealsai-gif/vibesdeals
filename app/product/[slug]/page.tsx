import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Check,
  Info,
  ShieldCheck,
  Star,
  StarHalf,
  Truck,
} from 'lucide-react';
import { products } from '@/lib/data';
import { siteConfig } from '@/config/site';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (p) => p.category === product.category && p.id !== product.id
    )
    .slice(0, 4);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            className="w-5 h-5 fill-orange-400 text-orange-400"
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <StarHalf
            key={i}
            className="w-5 h-5 fill-orange-400 text-orange-400"
          />
        );
      } else {
        stars.push(
          <Star key={i} className="w-5 h-5 text-gray-300" />
        );
      }
    }

    return stars;
  };

  return (
    <main className="bg-white min-h-screen pb-16">

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="container mx-auto px-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <span className="mx-2">›</span>

          <Link
            href={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="hover:text-blue-600"
          >
            {product.category}
          </Link>

          <span className="mx-2">›</span>

          <span className="text-gray-900 font-medium">
            {product.name}
          </span>
        </div>
      </div>

      {/* Product */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-12">

          {/* Image */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 relative flex items-center justify-center min-h-[400px] shadow-sm">

              {product.discount > 0 && (
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white font-bold px-3 py-1.5 rounded-lg text-sm">
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
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />

              <p className="text-sm leading-relaxed">
                <span className="font-bold">
                  Affiliate Disclosure:
                </span>{' '}
                {siteConfig.affiliateDisclosure}
              </p>
            </div>
          </div>

          {/* Product Information */}
          <div className="md:w-1/2">

            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
              {product.brand}
            </span>

            <h1 className="font-jakarta text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mt-2 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {renderStars(product.rating)}
              </div>

              <span className="font-bold text-gray-900">
                {product.rating}
              </span>

              <span className="text-blue-600">
                ({product.reviewCount.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">

              <div className="flex items-end gap-3 mb-2">

                <span className="text-4xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>

                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through mb-1">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}

              </div>

              <p className="text-sm text-green-600 font-bold flex items-center gap-1">
                <Check className="w-4 h-4" />
                In Stock & Ready to Ship
              </p>

              <div className="mt-6">

                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-orange-400 hover:bg-orange-500 text-[#131921] font-bold text-lg py-4 px-8 rounded-xl transition-colors"
                >
                  View Deal on Amazon
                </a>

                <p className="text-center text-xs text-gray-500 mt-3">
                  Clicking this link will open the retailer website.
                </p>

              </div>
            </div>

            {/* Highlights */}
            {product.highlights &&
              product.highlights.length > 0 && (
                <div className="mb-8">

                  <h2 className="font-bold text-lg text-gray-900 mb-3">
                    Product Highlights
                  </h2>

                  <ul className="space-y-2">
                    {product.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                </div>
              )}

            {/* Trust */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">

              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  Verified Deals
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Truck className="w-8 h-8 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">
                  Fast Shipping
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Description */}
        <section className="mt-16 pt-12 border-t border-gray-100">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Product Description
          </h2>

          <div className="max-w-4xl text-gray-700 leading-relaxed whitespace-pre-line">
            {product.description}
          </div>

        </section>

        {/* Pros & Cons */}
        <section className="grid md:grid-cols-2 gap-6 mt-10">

          {product.pros && product.pros.length > 0 && (
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">

              <h2 className="font-bold text-green-900 mb-4">
                Pros
              </h2>

              <ul className="space-y-2">
                {product.pros.map((pro, index) => (
                  <li
                    key={index}
                    className="text-green-800 text-sm"
                  >
                    ✓ {pro}
                  </li>
                ))}
              </ul>

            </div>
          )}

          {product.cons && product.cons.length > 0 && (
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">

              <h2 className="font-bold text-red-900 mb-4">
                Cons
              </h2>

              <ul className="space-y-2">
                {product.cons.map((con, index) => (
                  <li
                    key={index}
                    className="text-red-800 text-sm"
                  >
                    ✗ {con}
                  </li>
                ))}
              </ul>

            </div>
          )}

        </section>

        {/* Specifications */}
        <section className="mt-12">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Product Specifications
          </h2>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">

            {product.specs &&
              Object.entries(product.specs).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="grid grid-cols-2 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="p-4 bg-gray-50 font-medium text-gray-600">
                      {key}
                    </div>

                    <div className="p-4 text-gray-900">
                      {value}
                    </div>
                  </div>
                )
              )}

          </div>

        </section>
        
       {/* About This Product */}
        {product.about && (
          <section className="mt-12 pt-10 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              About This Product
            </h2>

            <div className="max-w-4xl text-gray-700 leading-relaxed whitespace-pre-line">
              {product.about}
            </div>
          </section>
        )}

        {/* Product Details */}
        {product.productDetails && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Product Details
            </h2>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {product.productDetails}
              </p>
            </div>
          </section>
        )}

        {/* Additional Information */}
        {product.additionalInfo && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Information
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {Object.entries(product.additionalInfo).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="p-4 bg-gray-50 font-medium text-gray-600">
                      {key}
                    </div>

                    <div className="p-4 text-gray-900">
                      {value}
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {/* Frequently Asked Questions */}
        {product.faq && product.faq.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {product.faq.map((item, index) => (
                <details
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <summary className="cursor-pointer list-none p-5 font-semibold text-gray-900 flex items-center justify-between">
                    <span>{item.question}</span>

                    <span className="text-orange-500 text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>

                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-gray-100">

            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              You May Also Like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >

                  <div className="relative h-48 bg-gray-50">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-2">
                      {p.name}
                    </h3>

                    <p className="font-bold text-gray-900 mt-3">
                      ₹{p.price.toLocaleString('en-IN')}
                    </p>
                  </div>

                </Link>
              ))}

            </div>

          </section>
        )}

      </div>
    </main>
  );
        }
