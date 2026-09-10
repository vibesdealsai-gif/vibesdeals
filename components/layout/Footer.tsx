import Link from 'next/link';
import { Facebook, Instagram, Linkedin, PinIcon, Twitter } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-[#131921] text-gray-300 pt-16 pb-8 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-jakarta text-2xl font-bold text-white tracking-tight">
              Vibes<span className="text-orange-400">Deals</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href={siteConfig.links.home} className="hover:text-white hover:underline transition-all">Home</Link></li>
              <li><Link href={siteConfig.links.deals} className="hover:text-white hover:underline transition-all">Deals</Link></li>
              <li><Link href={siteConfig.links.bestSellers} className="hover:text-white hover:underline transition-all">Best Sellers</Link></li>
              <li><Link href={siteConfig.links.categories} className="hover:text-white hover:underline transition-all">Categories</Link></li>
              <li><Link href={siteConfig.links.blog} className="hover:text-white hover:underline transition-all">Blog</Link></li>
              <li><Link href={siteConfig.links.about} className="hover:text-white hover:underline transition-all">About Us</Link></li>
            </ul>
          </div>

          {/* Legal / Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Information</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href={siteConfig.links.contact} className="hover:text-white hover:underline transition-all">Contact Us</Link></li>
              <li><Link href={siteConfig.links.privacy} className="hover:text-white hover:underline transition-all">Privacy Policy</Link></li>
              <li><Link href={siteConfig.links.terms} className="hover:text-white hover:underline transition-all">Terms & Conditions</Link></li>
              <li><Link href={siteConfig.links.affiliateDisclosure} className="hover:text-white hover:underline transition-all">Affiliate Disclosure</Link></li>
              <li><Link href={siteConfig.links.disclaimer} className="hover:text-white hover:underline transition-all">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
            <div className="flex gap-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-orange-400 hover:text-[#131921] transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-orange-400 hover:text-[#131921] transition-all" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-orange-400 hover:text-[#131921] transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-orange-400 hover:text-[#131921] transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-4 text-xs text-gray-500">
              <p>Contact: {siteConfig.contactEmail}</p>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure Footer Note */}
        <div className="pt-8 border-t border-gray-800 text-xs text-center text-gray-500 max-w-3xl mx-auto mb-8">
          <p>{siteConfig.affiliateDisclosure}</p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
