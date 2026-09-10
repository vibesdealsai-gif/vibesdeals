import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, products } from '@/lib/data';
import { ProductCard } from '@/components/ui/ProductCard';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  // Related products for demo (just grab the first 3 featured)
  const relatedProducts = products.filter(p => p.featured).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Article Header */}
      <div className="container mx-auto px-4 pt-12 pb-8 max-w-4xl text-center">
        <div className="mb-4">
          <Link href="/blog" className="text-orange-500 font-bold uppercase tracking-wider text-sm hover:underline">
            Shopping Guides
          </Link>
        </div>
        <h1 className="font-jakarta text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <span className="font-medium text-gray-900">By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 max-w-5xl mb-12">
        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 max-w-4xl flex flex-col lg:flex-row gap-12">
        <article className="lg:w-2/3 prose prose-lg max-w-none text-gray-700">
          <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-orange-400 pl-4 font-medium italic">
            {post.excerpt}
          </p>
          
          {/* Demo Content */}
          <h2>Introduction</h2>
          <p>
            {post.content} This is a placeholder for the full article content. In a production environment, this content would be pulled from a CMS or markdown files. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h3>What to Look For</h3>
          <ul>
            <li><strong>Quality:</strong> Always check the build materials.</li>
            <li><strong>Price:</strong> Compare prices across different retailers.</li>
            <li><strong>Reviews:</strong> Look for verified customer reviews.</li>
          </ul>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
            <h4 className="mt-0 text-gray-900">Affiliate Disclosure</h4>
            <p className="text-sm mb-0">
              Some of the links in this article may be affiliate links, which can provide compensation to us at no cost to you if you decide to purchase.
            </p>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="sticky top-24">
            <h3 className="font-bold text-xl text-gray-900 mb-6 pb-2 border-b border-gray-200">Featured Deals</h3>
            <div className="space-y-6">
              {relatedProducts.map(product => (
                <div key={product.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <Link href={`/product/${product.slug}`} className="block relative h-40 w-full bg-gray-50">
                     <Image src={product.image} alt={product.name} fill className="object-contain p-2" referrerPolicy="no-referrer" />
                  </Link>
                  <div className="p-4">
                    <Link href={`/product/${product.slug}`}>
                      <h4 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2 hover:text-blue-600">{product.name}</h4>
                    </Link>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-lg text-gray-900">${product.price.toFixed(2)}</span>
                      <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer" className="text-xs bg-orange-400 hover:bg-orange-500 text-[#131921] font-bold px-3 py-1.5 rounded transition-colors">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
