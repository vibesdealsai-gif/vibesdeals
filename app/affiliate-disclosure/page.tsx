import { siteConfig } from '@/config/site';

export default function AffiliateDisclosurePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="font-jakarta text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Affiliate Disclosure</h1>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <p>
              At <strong>{siteConfig.name}</strong>, we believe in transparency. This Affiliate Disclosure details our affiliate relationships with other companies and products.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Amazon Associates Program Disclosure</h2>
            <p>
              {siteConfig.name} is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            </p>
            <p>
              As an Amazon Associate, we earn from qualifying purchases. Amazon offers a small commission on products sold through their affiliate links. Each of your purchases via our Amazon affiliation links supports our cause at no additional cost to you.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Other Affiliate Programs</h2>
            <p>
              In addition to Amazon, {siteConfig.name} participates in various other affiliate programs. This means that when you click on links to various merchants on this site and make a purchase, this can result in a commission that is credited to this site.
            </p>
            <p>
              Our participation in these programs does not influence our content, topics, or product recommendations. We always aim to provide honest opinions, findings, beliefs, or experiences on those topics or products. The views and opinions expressed on this website are purely our own.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Pricing and Availability</h2>
            <p>
              Please note that prices and availability of products are subject to change without notice. We do our best to keep information up to date, but we cannot guarantee that the price or availability at the time you read our content will be the same as when you visit the merchant's site.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions regarding this Affiliate Disclosure or your dealings with our website, please contact us at: <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:underline">{siteConfig.contactEmail}</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
