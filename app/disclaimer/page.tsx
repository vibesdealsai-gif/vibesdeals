import { siteConfig } from '@/config/site';

export default function DisclaimerPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">

          <h1 className="font-jakarta text-3xl md:text-4xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
            Disclaimer
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>

          <div className="prose max-w-none text-gray-700 space-y-6">

            <p>
              The information provided on <strong>{siteConfig.name}</strong> is
              intended for general informational, educational, and product
              discovery purposes only. We publish product information, shopping
              guides, product comparisons, deals, reviews, recommendations,
              specifications, pricing information, and other shopping-related
              content to help visitors make informed purchasing decisions.
            </p>

            <p>
              By using this website, you acknowledge and agree that you are
              responsible for independently verifying product information before
              making any purchasing decision.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              1. General Information Disclaimer
            </h2>

            <p>
              While we make reasonable efforts to provide useful and accurate
              information, {siteConfig.name} does not guarantee that all information
              published on the website is complete, accurate, current, reliable,
              or error-free.
            </p>

            <p>
              Product information, specifications, features, prices, discounts,
              availability, images, ratings, reviews, shipping information, and
              other details may change without notice.
            </p>

            <p>
              You should always verify the latest information directly with the
              manufacturer, retailer, marketplace, or other official source before
              purchasing a product.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              2. Product Price & Discount Disclaimer
            </h2>

            <p>
              Prices and discounts displayed on {siteConfig.name} are provided for
              informational purposes only. Product prices, sale prices, coupons,
              promotional offers, taxes, shipping charges, and availability may
              change at any time.
            </p>

            <p>
              The price shown on our website may differ from the final price shown
              on the retailer's website at the time of purchase.
            </p>

            <p>
              We do not guarantee that any advertised discount, deal, coupon,
              promotional offer, or sale price will remain available.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              3. Affiliate Disclosure
            </h2>

            <p>
              Some links published on {siteConfig.name} may be affiliate links.
              When you click an affiliate link and make a qualifying purchase, we
              may receive a commission from the retailer at no additional cost to
              you.
            </p>

            <p>
              Our website may participate in affiliate programs such as the Amazon
              Associates Program and other affiliate networks or merchant
              advertising programs.
            </p>

            <p>
              Affiliate commissions may help support the operation, maintenance,
              research, content creation, and development of this website.
            </p>

            <p>
              Affiliate relationships do not guarantee that a product will be
              suitable for every visitor. We encourage users to research products
              independently before purchasing.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              4. Third-Party Retailers
            </h2>

            <p>
              {siteConfig.name} may link to third-party retailers, marketplaces,
              manufacturers, brands, and other external websites.
            </p>

            <p>
              We do not directly control third-party websites and are not
              responsible for their content, pricing, product availability,
              customer service, shipping policies, payment processing, return
              policies, refund policies, warranties, or other business practices.
            </p>

            <p>
              Any purchase made after clicking an external or affiliate link is
              subject to the terms and conditions of the third-party retailer.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              5. Product Reviews & Recommendations
            </h2>

            <p>
              Product reviews, buying guides, comparisons, ratings, recommendations,
              pros and cons, and editorial opinions published on this website are
              provided for general informational purposes.
            </p>

            <p>
              A product recommendation does not constitute a guarantee that the
              product will meet your individual requirements, expectations, budget,
              preferences, or intended use.
            </p>

            <p>
              Product performance can vary depending on usage, environment, model,
              region, configuration, software updates, manufacturer changes, and
              other factors.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              6. Product Specifications
            </h2>

            <p>
              Product specifications displayed on our website may include
              information such as dimensions, weight, battery life, storage,
              processor details, display specifications, connectivity, materials,
              features, and other technical information.
            </p>

            <p>
              Manufacturers and retailers may update or change product
              specifications without notice. Therefore, visitors should confirm
              technical specifications on the official manufacturer or retailer
              website before making a purchase.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              7. External Links Disclaimer
            </h2>

            <p>
              Our website may contain links to external websites that are not owned
              or operated by {siteConfig.name}.
            </p>

            <p>
              We do not control the nature, content, security, availability, or
              practices of external websites. The presence of an external link
              does not necessarily mean that we endorse or recommend all products,
              services, content, or opinions found on that website.
            </p>

            <p>
              You access third-party websites at your own discretion and risk.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              8. No Professional Advice
            </h2>

            <p>
              Content published on {siteConfig.name} is not intended to replace
              professional, financial, medical, legal, technical, or other
              specialized advice.
            </p>

            <p>
              Where a product or topic involves professional considerations, you
              should consult an appropriately qualified professional before making
              a decision.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              9. Earnings & Financial Disclaimer
            </h2>

            <p>
              Any references to savings, discounts, commissions, affiliate earnings,
              prices, deals, or potential benefits are provided for informational
              purposes only.
            </p>

            <p>
              We do not guarantee that visitors will save a specific amount of
              money or achieve any particular financial result by using information
              published on our website.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              10. Availability of Products & Deals
            </h2>

            <p>
              Product availability and promotional offers can change quickly.
              Products may become unavailable, discounts may expire, and retailers
              may modify their offers without notifying us.
            </p>

            <p>
              Therefore, a deal displayed on {siteConfig.name} should not be
              considered guaranteed until it has been verified on the retailer's
              website.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              11. Errors & Corrections
            </h2>

            <p>
              Despite our efforts to maintain accurate information, our website may
              occasionally contain typographical errors, outdated information,
              pricing errors, incorrect product specifications, broken links, or
              other inaccuracies.
            </p>

            <p>
              We reserve the right to correct, update, modify, or remove content
              from the website at any time without prior notice.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              12. Limitation of Liability
            </h2>

            <p>
              To the maximum extent permitted by applicable law, {siteConfig.name},
              its owners, operators, contributors, and affiliates shall not be
              responsible for any direct, indirect, incidental, consequential, or
              other losses arising from your use of the website or reliance on
              information published on the website.
            </p>

            <p>
              This includes, where legally permitted, losses relating to product
              purchases, pricing changes, product availability, shipping delays,
              product performance, third-party websites, affiliate transactions,
              or retailer policies.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              13. User Responsibility
            </h2>

            <p>
              Visitors are responsible for conducting their own research and
              verifying information before making purchasing decisions.
            </p>

            <p>
              Before purchasing a product, we recommend checking the official
              retailer or manufacturer website for the latest price, specifications,
              warranty, return policy, availability, shipping information, and
              other applicable terms.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              14. Changes to This Disclaimer
            </h2>

            <p>
              We may update this Disclaimer from time to time to reflect changes
              in our website, affiliate relationships, content practices, applicable
              requirements, or business operations.
            </p>

            <p>
              Any changes will be posted on this page along with an updated
              "Last updated" date.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              15. Contact Us
            </h2>

            <p>
              If you have any questions about this Disclaimer, our product
              information, affiliate relationships, or website practices, you can
              contact us at:
            </p>

            <p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-blue-600 hover:underline font-medium"
              >
                {siteConfig.contactEmail}
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
