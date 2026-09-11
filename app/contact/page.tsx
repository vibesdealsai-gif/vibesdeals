'use client';

import { siteConfig } from '@/config/site';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-jakarta text-4xl font-bold text-center text-gray-900 mb-4">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a question about a deal, need help finding a product, or want to
          partner with us? We'd love to hear from you.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* Contact Info Sidebar */}
            <div className="bg-[#131921] p-10 text-white md:w-1/3">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider font-semibold">
                    Email Us
                  </p>

                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-orange-400 hover:underline break-all"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                    Follow Us
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={siteConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      Twitter/X
                    </a>

                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      Facebook
                    </a>

                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700">
                  <h4 className="font-bold text-lg mb-2">
                    Vibes<span className="text-orange-400">Deals</span>
                  </h4>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    Discover great deals and shop smarter with our curated
                    product recommendations.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 md:w-2/3">

              <form
                action="/contact-form.php"
                method="POST"
                className="space-y-6"
              >

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-shadow"
                      placeholder="john@example.com"
                    />
                  </div>

                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-shadow"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-shadow resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-400 hover:bg-orange-500 text-[#131921] font-bold text-lg py-4 rounded-lg transition-colors shadow-sm"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
