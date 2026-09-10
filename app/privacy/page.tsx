import { siteConfig } from '@/config/site';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="font-jakarta text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Privacy Policy</h1>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              This is a placeholder Privacy Policy for <strong>{siteConfig.name}</strong>.
            </p>
            <p>
              In a real production environment, you should replace this content with a legally compliant Privacy Policy that accurately describes how your website collects, uses, maintains, and discloses information collected from users.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Information Collection</h2>
            <p>
              We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Cookies and Web Beacons</h2>
            <p>
              Our Site may use "cookies" to enhance User experience. Users' web browsers place cookies on their hard drive for record-keeping purposes and sometimes to track information about them. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Third-Party Websites</h2>
            <p>
              Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contacting Us</h2>
            <p>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:underline">{siteConfig.contactEmail}</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
