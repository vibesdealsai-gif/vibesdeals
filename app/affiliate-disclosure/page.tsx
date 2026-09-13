import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Affiliate Disclosure | VibesDeals',
  description:
    'Learn how VibesDeals uses affiliate links, earns commissions from qualifying purchases, and provides product deals, recommendations, and shopping guides.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">

          <h1 className="font-jakarta text-3xl md:text-4xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
            Affiliate Disclosure
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>

          <div className="prose max-w-none text-gray-700 space-y-6">

            <p>
              At <strong>{siteConfig.name}</strong>, we believe in transparency
              and want our visitors to understand how our website may earn
              revenue. This Affiliate Disclosure explains our use of affiliate
              links, product recommendations, shopping deals, and relationships
              with third-party retailers and affiliate programs.
            </p>

            <p>
              {siteConfig.name} is an affiliate marketing and product
              recommendation website that may publish product information,
              shopping guides, comparisons, deals, discounts, reviews, and
              recommendations. Some of the links displayed on our website may
              be affiliate links.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              What Are Affiliate Links?
            </h2>

            <p>
              An affiliate link is a special link that allows a retailer or
              affiliate network to identify that a visitor reached its website
              through our website. If you click an affiliate link and complete
              a qualifying purchase or other eligible action, we may receive a
              commission from the retailer or affiliate program.
            </p>

            <p>
              In most cases, using an affiliate link does not increase the
              price you pay for a product. The retailer determines the final
              product price, shipping charges, taxes, availability, and other
              purchase terms.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              Amazon Associates Program Disclosure
            </h2>

            <p>
              {siteConfig.name} may participate in the Amazon Services LLC
              Associates Program, an affiliate advertising program designed to
              provide a means for websites to earn advertising fees by
              advertising and linking to Amazon.com and other participating
              Amazon properties.
            </p>

            <p>
              As an Amazon Associate, we may earn from qualifying purchases
              made through eligible Amazon affiliate links.
            </p>

            <p>
              Amazon product prices, availability, specifications, shipping
              information, and other purchasing details may change at any time.
              Please verify the current information directly on Amazon before
              making a purchase.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              Other Affiliate Programs
            </h2>

            <p>
              In addition to Amazon, {siteConfig.name} may participate in other
              affiliate programs and partnerships with retailers, merchants,
              brands, affiliate networks, and shopping platforms.
            </p>

            <p>
              When you click an eligible affiliate link and make a qualifying
              purchase, we may receive a commission or referral fee. These
              commissions help support the operation, maintenance, content
              creation, and development of our website.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              Product Recommendations and Shopping Deals
            </h2>

            <p>
              Our website may feature product recommendations, online shopping
              deals, discount information, product comparisons, buying guides,
              and shopping-related content.
            </p>

            <p>
              We aim to provide useful and accurate information to help visitors
              make informed purchasing decisions. However, the presence of an
              affiliate link does not guarantee that a product is suitable for
              every individual or that it is the lowest-priced option available.
            </p>

            <p>
              We encourage visitors to research products independently and
              review the retailer's product page, specifications, customer
              reviews, warranty information, return policy, and current price
              before making a purchase.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              Does Affiliate Compensation Influence Our Content?
            </h2>

            <p>
              Affiliate relationships may provide a source of revenue for
              {` ${siteConfig.name}`}, but they are not intended to change the
              way we present product information.
            </p>

            <p>
              We aim to provide useful, relevant, and transparent shopping
              information. Affiliate compensation does not mean that a product
              is guaranteed to be the best product for every visitor.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              Pricing and Availability
            </h2>

            <p>
              Product prices, discounts, stock status, specifications,
              promotions, shipping costs, and availability can change without
              notice.
            </p>

            <p>
              While we make reasonable efforts to keep our product information
              current, we cannot guarantee that the price, discount, or
              availability displayed on {siteConfig.name} will be the same when
              you visit the retailer's website.
            </p>

            <p>
              The final price and purchasing information shown on the retailer's
              website at the time of purchase should always be considered the
              authoritative source.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              Third-Party Retailers
            </h2>

            <p>
              When you click a product or affiliate link on our website, you
              may be redirected to an external retailer or third-party website.
              Any purchase made after leaving {siteConfig.name} is subject to
              the terms, conditions, privacy policy, return policy, warranty,
              shipping policy, and other rules of that retailer.
            </p>

            <p>
              We do not process payments for purchases made on third-party
              retailer websites and generally do not have access to your
              payment information.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              No Additional Cost to You
            </h2>

            <p>
              In most cases, clicking an affiliate link does not result in an
              additional charge to you. The retailer or affiliate program may
              pay us a commission for qualifying purchases or eligible actions.
            </p>

            <p>
              Your purchase price is determined by the retailer according to
              its current pricing and purchasing policies.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              Transparency and Trust
            </h2>

            <p>
              We value the trust of our visitors. Our goal is to make it clear
              when our website may benefit financially from a product link.
              Affiliate relationships help us continue creating product
              recommendations, shopping guides, deal pages, comparisons, and
              other useful content.
            </p>

            <p>
              If you have questions about a particular product recommendation
              or affiliate relationship, you are welcome to contact us.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              Important Notice About Product Information
            </h2>

            <p>
              Product names, images, descriptions, prices, ratings,
              specifications, discounts, and availability may be provided from
              or influenced by third-party retailer information. Such
              information can change over time.
            </p>

            <p>
              Before purchasing a product, always confirm the latest information
              directly on the retailer's website.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              Contact Us
            </h2>

            <p>
              If you have questions about this Affiliate Disclosure, affiliate
              links, product recommendations, Amazon affiliate links, or other
              affiliate relationships, please contact us at:
            </p>

            <p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-blue-600 hover:underline font-medium"
              >
                {siteConfig.contactEmail}
              </a>
            </p>

            <div className="mt-10 p-5 bg-orange-50 border border-orange-100 rounded-xl text-sm text-orange-900">
              <strong>Transparency matters:</strong> Some links on this
              website may be affiliate links. If you make a qualifying purchase
              through one of these links, we may earn a commission at no
              additional cost to you.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
