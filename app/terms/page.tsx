import { siteConfig } from '@/config/site';

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="font-jakarta text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Terms & Conditions</h1>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              This is a placeholder Terms & Conditions page for <strong>{siteConfig.name}</strong>.
            </p>
            <p>
              In a real production environment, you should replace this content with legally compliant Terms & Conditions that govern the use of your website.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use {siteConfig.name} if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">License</h2>
            <p>
              Unless otherwise stated, {siteConfig.name} and/or its licensors own the intellectual property rights for all material on {siteConfig.name}. All intellectual property rights are reserved.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>limit or exclude our or your liability for death or personal injury;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
