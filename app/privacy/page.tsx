import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Privacy Policy | Online Shopping Deals & Product Recommendations',
  description:
    'Read the Privacy Policy for VibesDeals to learn how we collect, use, protect, and manage information when you browse shopping deals, product recommendations, affiliate links, and shopping guides.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">

          <h1 className="font-jakarta text-3xl md:text-4xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="prose max-w-none text-gray-700 space-y-6">

            <p>
              Welcome to <strong>{siteConfig.name}</strong>. Your privacy is
              important to us. This Privacy Policy explains how we collect,
              use, protect, and manage information when you visit our website,
              browse online shopping deals, read product recommendations,
              use our shopping guides, or interact with affiliate links.
            </p>

            <p>
              This privacy policy for an affiliate website describes the types
              of information that may be collected through our website and how
              that information may be used. By accessing or using our website,
              you agree to the practices described in this Privacy Policy.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              1. Information We Collect
            </h2>

            <p>
              We may collect information when you browse our website, view
              product pages, search for products, read shopping guides, or
              interact with website features. The information collected
              depends on how you use the website.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">
              Information You Provide
            </h3>

            <p>
              If our website provides features such as contact forms,
              newsletters, subscriptions, or other communication tools, you
              may voluntarily provide information such as your name, email
              address, or message details.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">
              Automatically Collected Information
            </h3>

            <p>
              Like many websites, we may automatically receive certain
              technical information when you visit our site. This may include
              your browser type, device type, operating system, approximate
              location, referring website, pages viewed, time spent on pages,
              and general website usage information.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              2. How We Use Your Information
            </h2>

            <p>
              Information collected through our website may be used to operate,
              maintain, and improve our services. This may include improving
              product recommendations, understanding website traffic, fixing
              technical problems, improving website performance, and creating
              useful shopping content.
            </p>

            <p>
              We may also use information to understand how visitors interact
              with product deals, shopping guides, category pages, and other
              content so that we can improve the overall user experience.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              3. Cookies and Tracking Technologies
            </h2>

            <p>
              Our website may use cookies, pixels, local storage, analytics
              technologies, and similar tracking technologies to improve user
              experience and understand website traffic.
            </p>

            <p>
              Cookies are small files stored on your device by your web
              browser. They may help remember preferences, measure website
              performance, understand visitor behavior, and support certain
              website functions.
            </p>

            <p>
              You can usually manage or disable cookies through your browser
              settings. However, disabling certain cookies may affect how some
              website features work.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              4. Affiliate Links and Product Recommendations
            </h2>

            <p>
              {siteConfig.name} may participate in affiliate marketing
              programs. This means that some product links on our website may
              be affiliate links. If you click an affiliate link and complete
              a qualifying purchase on a third-party retailer website, we may
              receive a commission at no additional cost to you.
            </p>

            <p>
              Our website may publish product reviews, product comparisons,
              shopping recommendations, discount information, and online
              shopping deals. Prices, availability, offers, specifications,
              and other product information may change on the retailer's
              website.
            </p>

            <p>
              Affiliate tracking technologies may allow participating retailers
              or affiliate networks to identify that a visitor arrived through
              an affiliate link. These technologies are controlled by the
              relevant third-party services and are subject to their respective
              privacy policies.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              5. Amazon Affiliate Disclosure
            </h2>

            <p>
              Some product links on {siteConfig.name} may be associated with
              Amazon or other participating affiliate programs. When you click
              an affiliate link, you may be redirected to a third-party
              retailer where the purchase is completed.
            </p>

            <p>
              We do not process or store your payment information when you
              purchase products through a third-party retailer. Any purchase,
              payment, shipping, return, refund, or customer service matter is
              handled directly by the retailer according to its own policies.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              6. Third-Party Websites and Services
            </h2>

            <p>
              Our website may contain links to third-party websites, retailers,
              advertisers, affiliate networks, social media platforms, and
              other external services.
            </p>

            <p>
              When you leave {siteConfig.name} and visit a third-party
              website, that website may collect information according to its
              own privacy policy, terms of service, and cookie practices. We
              encourage you to review the privacy policies of third-party
              websites before providing personal information.
            </p>

            <p>
              We are not responsible for the privacy practices, security,
              content, policies, or practices of third-party websites that may
              be accessible through links on our website.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              7. Analytics and Website Performance
            </h2>

            <p>
              We may use analytics and performance tools to understand how
              visitors use our website. These services may collect anonymous
              or aggregated information about page views, traffic sources,
              device information, browser information, and general website
              activity.
            </p>

            <p>
              Analytics information helps us understand which product
              categories, shopping guides, deals, and website features are
              useful to visitors and helps us improve our website.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              8. Advertising and Personalized Content
            </h2>

            <p>
              If advertising services are enabled on our website, advertising
              providers may use cookies or similar technologies to display
              relevant advertisements. These providers may collect information
              according to their own privacy policies.
            </p>

            <p>
              We may also use aggregated website information to understand
              visitor interests and improve product recommendations and
              shopping content.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              9. How We Protect Your Information
            </h2>

            <p>
              We take reasonable technical and organizational measures to help
              protect information handled through our website. However, no
              website, internet connection, or electronic storage system can
              be guaranteed to be completely secure.
            </p>

            <p>
              We therefore cannot guarantee absolute security of information
              transmitted over the internet.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              10. Data Retention
            </h2>

            <p>
              We retain information only for as long as reasonably necessary
              for the purposes described in this Privacy Policy, to maintain
              website functionality, comply with applicable obligations, or
              resolve disputes.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              11. Children's Privacy
            </h2>

            <p>
              Our website is not intended to knowingly collect personal
              information from children. We do not knowingly request personal
              information from children without appropriate authorization.
            </p>

            <p>
              If you believe that a child has provided personal information
              through our website, please contact us so that appropriate action
              can be considered.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              12. Your Privacy Rights
            </h2>

            <p>
              Depending on your location and applicable privacy laws, you may
              have certain rights regarding your personal information. These
              rights may include requesting access to information, requesting
              correction or deletion, or asking questions about how your
              information is processed.
            </p>

            <p>
              To make a privacy-related request, please contact us using the
              contact information provided below.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              13. Third-Party Links
            </h2>

            <p>
              Product pages, shopping guides, blog posts, and other content may
              include links to external websites. These links are provided for
              convenience and may include affiliate links.
            </p>

            <p>
              Once you visit an external website, its own privacy policy and
              terms apply. We recommend reviewing those policies before using
              third-party services or making a purchase.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              14. Changes to This Privacy Policy
            </h2>

            <p>
              We may update this Privacy Policy from time to time to reflect
              changes to our website, services, technology, legal requirements,
              or privacy practices.
            </p>

            <p>
              When changes are made, the updated Privacy Policy will be
              published on this page. We recommend checking this page
              periodically for the latest information.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10">
              15. Contact Us
            </h2>

            <p>
              If you have questions about this Privacy Policy, our affiliate
              website practices, cookies, product recommendations, or how we
              handle information, you can contact us at:
            </p>

            <p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-blue-600 hover:underline font-medium"
              >
                {siteConfig.contactEmail}
              </a>
            </p>

            <div className="mt-10 p-5 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-900">
              <strong>Important:</strong> This Privacy Policy is intended as
              general website information and should be reviewed and adapted
              to match the actual cookies, analytics tools, advertising
              services, affiliate programs, data collection practices, and
              applicable laws used by your website.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
