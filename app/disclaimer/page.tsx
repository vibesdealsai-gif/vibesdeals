import { siteConfig } from '@/config/site';

export default function DisclaimerPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="font-jakarta text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Disclaimer</h1>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              The information contained on <strong>{siteConfig.name}</strong> is for general information purposes only.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">No Professional Advice</h2>
            <p>
              The information provided by {siteConfig.name} is not intended to be a substitute for professional advice. Always seek the advice of a qualified professional with any questions you may have regarding a particular subject.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Accuracy of Information</h2>
            <p>
              While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">External Links</h2>
            <p>
              Through this website you are able to link to other websites which are not under the control of {siteConfig.name}. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
