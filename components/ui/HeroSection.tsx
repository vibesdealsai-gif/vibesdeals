import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative w-full bg-[#131921] overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-orange-500 to-transparent blur-3xl transform skew-x-12"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-blue-500 to-transparent blur-3xl transform -skew-x-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-400/10 text-orange-400 font-bold tracking-wide text-xs md:text-sm uppercase mb-6 border border-orange-400/20">
            🔥 Handpicked Offers Daily
          </span>
          <h1 className="font-jakarta text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Find the Best Deals<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              in One Place
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
            Discover trending products, amazing offers and carefully selected deals from popular online stores.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link 
              href="#deals" 
              className="w-full sm:w-auto px-8 py-4 bg-orange-400 hover:bg-orange-500 text-[#131921] font-bold rounded-lg text-lg transition-colors text-center shadow-lg shadow-orange-500/20"
            >
              Explore Deals
            </Link>
            <Link 
              href="/search?sort=bestseller" 
              className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg text-lg transition-colors border border-gray-700 text-center"
            >
              View Best Sellers
            </Link>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-lg md:max-w-none relative h-[300px] md:h-[450px]">
          {/* Using a visually interesting placeholder for the hero */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
             <Image 
                src="https://picsum.photos/seed/shopping/800/600" 
                alt="Shopping Deals" 
                fill
                className="object-cover opacity-80 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 grid grid-cols-2 gap-4 p-6 w-full h-full">
                {/* Abstract UI elements mimicking products */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col justify-end border border-white/5 shadow-2xl transform hover:-translate-y-2 transition-transform">
                  <div className="w-full h-24 bg-white/20 rounded-lg mb-3"></div>
                  <div className="w-3/4 h-3 bg-white/40 rounded-full mb-2"></div>
                  <div className="w-1/2 h-3 bg-orange-400/80 rounded-full"></div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col justify-end border border-white/5 shadow-2xl transform translate-y-8 hover:translate-y-6 transition-transform">
                  <div className="w-full h-24 bg-white/20 rounded-lg mb-3"></div>
                  <div className="w-full h-3 bg-white/40 rounded-full mb-2"></div>
                  <div className="w-2/3 h-3 bg-orange-400/80 rounded-full"></div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
