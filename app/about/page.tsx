import { siteConfig } from '@/config/site';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-jakarta text-4xl font-bold text-center text-gray-900 mb-4">
          About Us
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Welcome to Vibes Deals — your destination for trending products,
          amazing offers, and carefully selected deals.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About Vibes Deals
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Vibes Deals helps shoppers discover useful products, trending
            items, discounts, and online shopping opportunities in one place.
            We research and curate products to make your shopping experience
            easier.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our goal is to help you find interesting products and great deals
            while saving time when shopping online.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600 leading-relaxed">
            If you have any questions, suggestions, or partnership inquiries,
            please contact us at{' '}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-orange-500 hover:underline font-medium"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
