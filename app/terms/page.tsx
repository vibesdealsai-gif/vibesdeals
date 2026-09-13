import { siteConfig } from '@/config/site';

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">

          <h1 className="font-jakarta text-3xl md:text-4xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
            Terms & Conditions
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
              Welcome to <strong>{siteConfig.name}</strong>. These Terms & Conditions
              govern your access to and use of our website, including product
              listings, shopping guides, product reviews, deal information,
              affiliate links, and other content published on this website.
            </p>

            <p>
              By accessing or using this website, you acknowledge that you have
              read, understood, and agreed to be bound by these Terms & Conditions.
              If you do not agree with any part of these terms, please discontinue
              use of the website.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              1. About Our Website
            </h2>

            <p>
              {siteConfig.name} is an online product discovery, deals, comparison,
              and shopping information website. We publish information about
              products, prices, discounts, features, specifications, shopping
              guides, and related content to help visitors make informed
              purchasing decisions.
            </p>

            <p>
              We do not operate as a direct retailer for the products displayed
              on this website unless explicitly stated. Purchases may be completed
              through third-party retailers or merchant websites.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              2. Product Information
            </h2>

            <p>
              We make reasonable efforts to provide accurate product names,
              descriptions, specifications, images, ratings, prices, discounts,
              availability information, and other product details. However,
              product information may change without notice.
            </p>

            <p>
              Product specifications, features, colors, models, prices, offers,
              stock availability, delivery charges, taxes, warranty terms, and
              other information may vary between manufacturers and retailers.
            </p>

            <p>
              Before purchasing a product, you should verify the latest information
              directly on the retailer's or manufacturer's website.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              3. Prices, Discounts & Availability
            </h2>

            <p>
              Prices and discounts displayed on {siteConfig.name} are provided for
              informational purposes and may change at any time. A price shown on
              our website may not be the same price available when you visit the
              retailer's website.
            </p>

            <p>
              We do not guarantee that any product will remain in stock or that a
              particular discount or promotional offer will remain available.
            </p>

            <p>
              The final price, shipping cost, taxes, availability, delivery date,
              and other purchase conditions are determined by the retailer at the
              time of purchase.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              4. Affiliate Links & Advertising
            </h2>

            <p>
              Some links on {siteConfig.name} may be affiliate links. This means
              that if you click an affiliate link and complete a qualifying
              purchase, we may receive a commission from the retailer at no
              additional cost to you.
            </p>

            <p>
              Our website may participate in affiliate advertising programs,
              including the Amazon Associates Program and other merchant or
              affiliate networks.
            </p>

            <p>
              Affiliate relationships help support the operation, maintenance,
              research, content creation, and development of this website.
            </p>

            <p>
              For more information, please review our Affiliate Disclosure.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              5. Third-Party Websites
            </h2>

            <p>
              Our website may contain links to third-party websites, including
              online marketplaces, retailers, manufacturers, advertisers, and
              affiliate partners.
            </p>

            <p>
              Once you leave {siteConfig.name} and visit a third-party website,
              that website's own terms, privacy policy, return policy, warranty
              policy, and other rules will apply.
            </p>

            <p>
              We do not control and are not responsible for the content, security,
              availability, policies, products, services, transactions, or
              practices of third-party websites.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              6. Purchases & Transactions
            </h2>

            <p>
              {siteConfig.name} does not process or complete purchases made through
              third-party retailer links unless specifically stated otherwise.
              Any transaction you make after clicking an external product link is
              directly between you and the applicable retailer.
            </p>

            <p>
              Questions relating to orders, payments, refunds, cancellations,
              shipping, returns, exchanges, warranties, or customer service should
              be directed to the retailer or merchant that processed your order.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              7. Product Reviews & Recommendations
            </h2>

            <p>
              Product reviews, comparisons, recommendations, ratings, buying
              guides, and editorial content published on this website are provided
              for general informational purposes.
            </p>

            <p>
              Individual preferences and requirements vary. A product recommendation
              on our website does not guarantee that a product will be suitable for
              your specific needs or circumstances.
            </p>

            <p>
              You should independently evaluate product specifications, reviews,
              warranty information, and retailer terms before making a purchase.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              8. Accuracy of Information
            </h2>

            <p>
              Although we make reasonable efforts to keep our website information
              current and accurate, we do not guarantee that all information will
              always be complete, accurate, reliable, current, or error-free.
            </p>

            <p>
              Information may contain typographical errors, outdated prices,
              incorrect availability, product specification changes, or other
              inaccuracies. We reserve the right to correct or update information
              at any time without prior notice.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              9. Intellectual Property
            </h2>

            <p>
              Unless otherwise stated, the original content published on
              {siteConfig.name}, including text, articles, product descriptions,
              graphics, website design, logos, page layouts, and other original
              materials, is protected by applicable intellectual property laws.
            </p>

            <p>
              You may access and use the website for personal and lawful purposes.
              You may not reproduce, copy, distribute, modify, republish, sell, or
              commercially exploit our original content without prior written
              permission.
            </p>

            <p>
              Product names, trademarks, logos, images, and brand materials
              belonging to third parties remain the property of their respective
              owners.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              10. Acceptable Use
            </h2>

            <p>
              You agree to use this website only for lawful purposes and in a way
              that does not interfere with the operation or security of the website.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Do not attempt to gain unauthorized access to the website.</li>
              <li>Do not knowingly introduce malicious software or harmful code.</li>
              <li>Do not scrape or reproduce our content for unauthorized commercial use.</li>
              <li>Do not use the website for fraudulent or unlawful activities.</li>
              <li>Do not interfere with the availability or security of the website.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              11. Disclaimer
            </h2>

            <p>
              The information provided on {siteConfig.name} is offered on an
              "as-is" and "as-available" basis to the maximum extent permitted by
              applicable law.
            </p>

            <p>
              We do not guarantee uninterrupted website availability, complete
              accuracy of information, continued availability of products or deals,
              or that the website will be free from errors or technical issues.
            </p>

            <p>
              We are not responsible for losses resulting from reliance on product
              information, pricing information, availability information, third-party
              content, or external retailer websites.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              12. Limitation of Liability
            </h2>

            <p>
              To the maximum extent permitted by applicable law, {siteConfig.name},
              its owners, operators, contributors, and affiliates shall not be
              liable for indirect, incidental, consequential, special, or
              business-related losses arising from your use of the website or your
              reliance on information published on the website.
            </p>

            <p>
              This limitation does not apply where liability cannot legally be
              excluded or limited under applicable law.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              13. Privacy
            </h2>

            <p>
              Your use of this website may also be subject to our Privacy Policy,
              which explains how information may be collected, used, stored, and
              processed.
            </p>

            <p>
              By using our website, you acknowledge that you have had an opportunity
              to review our Privacy Policy.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              14. Changes to These Terms
            </h2>

            <p>
              We may update or modify these Terms & Conditions from time to time.
              Changes may be made to reflect updates to our website, services,
              affiliate relationships, legal requirements, or business practices.
            </p>

            <p>
              The updated version will be posted on this page with a revised
              "Last updated" date. Your continued use of the website after changes
              are posted constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              15. Governing Law
            </h2>

            <p>
              These Terms & Conditions shall be interpreted and applied in
              accordance with applicable laws and regulations. Where legally
              applicable, disputes relating to the website shall be subject to the
              jurisdiction of the appropriate courts.
            </p>

            <p>
              Nothing in these terms is intended to remove or restrict any rights
              that cannot legally be excluded under applicable consumer protection
              laws.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              16. Contact Us
            </h2>

            <p>
              If you have questions about these Terms & Conditions, please contact
              us at:
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
