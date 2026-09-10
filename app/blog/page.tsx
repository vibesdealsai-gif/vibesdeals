import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="font-jakarta text-4xl font-bold text-gray-900 mb-4">Shopping Guides & Deals</h1>
          <p className="text-gray-600 text-lg">
            Expert tips, buying guides, and insider secrets to help you shop smarter and find the absolute best deals online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
              <Link href={`/blog/${post.slug}`} className="block relative h-56 w-full overflow-hidden">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-xs text-orange-500 font-bold uppercase tracking-wider bg-orange-50 px-2 py-1 rounded">Guide</div>
                  <span className="text-xs text-gray-500 font-medium">{post.date}</span>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="block mb-3">
                  <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-blue-600 hover:text-blue-800">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
