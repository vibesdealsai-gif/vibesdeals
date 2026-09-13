import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vibes Deals | Trending Products, Deals & Online Shopping',
  description:
    'Learn about Vibes Deals, a product discovery and deal website helping shoppers find trending products, useful products, online shopping deals, discounts, and curated offers.',
  keywords: [
    'Vibes Deals',
    'best online shopping deals',
    'trending products',
    'best deals online',
    'product deals',
    'discount offers',
    'online shopping deals',
    'Amazon deals',
    'product recommendations',
    'shopping guides',
  ],
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-jakarta text-4xl font-bold text-center text-gray-900 mb-4">
          About Vibes Deals – Trending Products, Deals & Online Shopping
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Welcome to Vibes Deals, your destination for trending products,
          useful product recommendations, online shopping deals, discounts,
          shopping guides, and carefully curated offers.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10">

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About Vibes Deals
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Vibes Deals is a product discovery and online shopping deals
            website created to help shoppers discover interesting products,
            trending items, useful gadgets, popular categories, discounts,
            and shopping opportunities from online retailers.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            We carefully organize products and deals into categories so that
            shoppers can easily explore electronics, smartphones, laptops,
            fashion, home and kitchen products, beauty products, fitness
            products, gaming accessories, travel products, office products,
            and other popular items.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What You Can Find on Vibes Deals
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our website focuses on helping shoppers discover products and
            offers without spending unnecessary time searching across
            different websites.
          </p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Trending products and popular items</li>
            <li>Online shopping deals and discount offers</li>
            <li>Product recommendations and highlights</li>
            <li>Product specifications and useful information</li>
            <li>Shopping guides and buying tips</li>
            <li>Popular electronics, smartphones and accessories</li>
            <li>Home, fashion, beauty, fitness and gaming products</li>
            <li>Office and travel product recommendations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is simple: help shoppers discover useful products,
            compare important product information, find interesting deals,
            and make more informed online shopping decisions.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            We aim to provide clear product information, helpful highlights,
            specifications, pros and cons, and shopping resources so visitors
            can research products before making a purchase decision.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product Information & Pricing
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Product prices, discounts, availability, specifications, ratings,
            and other details may change over time. We recommend checking the
            retailer's website for the latest price, availability, shipping
            information, and final product details before purchasing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Affiliate Disclosure
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Vibes Deals may participate in affiliate programs, including
            affiliate advertising programs offered by online retailers. When
            you click certain product links and make a qualifying purchase,
            we may earn a commission at no additional cost to you.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our goal is to provide useful product information and shopping
            resources to help visitors research products before purchasing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Vibes Deals?
          </h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Easy-to-browse product categories</li>
            <li>Curated trending products and deals</li>
            <li>Useful product specifications and highlights</li>
            <li>Pros and cons to support product research</li>
            <li>Shopping guides and helpful buying information</li>
            <li>Simple and convenient product discovery</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Contact Vibes Deals
          </h2>

          <p className="text-gray-600 leading-relaxed">
            If you have questions, suggestions, feedback, partnership
            inquiries, or business-related questions, you can contact us at{' '}
            <a
              href="mailto:vibesdeals.ai@gmail.com"
              className="text-orange-500 hover:underline font-medium"
            >
              vibesdeals.ai@gmail.com
            </a>
            .
          </p>

        </div>
      </div>
    </div>
  );
}
