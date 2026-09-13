import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, products } from '@/lib/data';

export function generateStaticParams() {
return blogPosts.map((post) => ({
slug: post.slug,
}));
}

function renderContent(content: string) {
// HTML content ko directly render karo.
// Rockwell jaise articles ke liye ye format use hoga.
if (
content.includes('<p>') ||
content.includes('<h2>') ||
content.includes('<h3>') ||
content.includes('<ul>') ||
content.includes('<ol>')
) {
return (
<div
className="
text-gray-700
[&_p]:mb-5
[&_p]:leading-8
[&_h2]:text-2xl
[&_h2]:md:text-3xl
[&_h2]:font-bold
[&_h2]:text-gray-900
[&_h2]:mt-10
[&_h2]:mb-5
[&_h3]:text-xl
[&_h3]:md:text-2xl
[&_h3]:font-bold
[&_h3]:text-gray-900
[&_h3]:mt-8
[&_h3]:mb-4
[&_h4]:text-lg
[&_h4]:font-bold
[&_h4]:text-gray-900
[&_h4]:mt-6
[&_h4]:mb-3
[&_ul]:list-disc
[&_ul]:pl-6
[&_ul]:mb-6
[&_ol]:list-decimal
[&_ol]:pl-6
[&_ol]:mb-6
[&_li]:mb-2
[&_li]:leading-7
[&_strong]:font-bold
[&_strong]:text-gray-900
[&_em]:italic
[&_hr]:my-8
[&_hr]:border-gray-200
[&_blockquote]:border-l-4
[&_blockquote]:border-orange-400
[&_blockquote]:pl-5
[&_blockquote]:italic
"
dangerouslySetInnerHTML={{ __html: content }}
/>
);
}

// Existing plain text / Markdown blog support
const lines = content.trim().split('\n');
const elements: React.ReactNode[] = [];

let listItems: string[] = [];
let listType: 'ul' | 'ol' | null = null;

const flushList = () => {
if (listItems.length === 0 || !listType) return;

const items = listItems;

elements.push(
  listType === 'ul' ? (
    <ul
      key={`ul-${elements.length}`}
      className="list-disc pl-6 mb-6 space-y-2"
    >
      {items.map((item, index) => (
        <li key={index} className="leading-7">
          {formatInline(item)}
        </li>
      ))}
    </ul>
  ) : (
    <ol
      key={`ol-${elements.length}`}
      className="list-decimal pl-6 mb-6 space-y-2"
    >
      {items.map((item, index) => (
        <li key={index} className="leading-7">
          {formatInline(item.replace(/^[0-9]+\.\s*/, ''))}
        </li>
      ))}
    </ol>
  )
);

listItems = [];
listType = null;

};

lines.forEach((line, index) => {
const trimmed = line.trim();

if (!trimmed) {
  flushList();
  return;
}

if (trimmed === '---') {
  flushList();

  elements.push(
    <hr
      key={`hr-${index}`}
      className="my-8 border-gray-200"
    />
  );

  return;
}

if (trimmed.startsWith('### ')) {
  flushList();

  elements.push(
    <h3
      key={`h3-${index}`}
      className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4"
    >
      {formatInline(trimmed.replace(/^###\s+/, ''))}
    </h3>
  );

  return;
}

if (trimmed.startsWith('## ')) {
  flushList();

  elements.push(
    <h2
      key={`h2-${index}`}
      className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-5"
    >
      {formatInline(trimmed.replace(/^##\s+/, ''))}
    </h2>
  );

  return;
}

if (trimmed.startsWith('# ')) {
  flushList();

  elements.push(
    <h2
      key={`h1-${index}`}
      className="text-3xl md:text-4xl font-bold text-gray-900 mt-10 mb-5"
    >
      {formatInline(trimmed.replace(/^#\s+/, ''))}
    </h2>
  );

  return;
}

if (trimmed.startsWith('- ')) {
  if (listType !== 'ul') {
    flushList();
    listType = 'ul';
  }

  listItems.push(trimmed.replace(/^-+\s+/, ''));
  return;
}

if (/^[0-9]+\.\s+/.test(trimmed)) {
  if (listType !== 'ol') {
    flushList();
    listType = 'ol';
  }

  listItems.push(trimmed);
  return;
}

flushList();

elements.push(
  <p
    key={`p-${index}`}
    className="mb-5 leading-8 text-gray-700"
  >
    {formatInline(trimmed)}
  </p>
);

});

flushList();

return elements;
}

function formatInline(text: string): React.ReactNode {
const parts = text.split(/(**.*?**)/g);

return parts.map((part, index) => {
if (part.startsWith('') && part.endsWith('')) {
return (
<strong
key={index}
className="font-bold text-gray-900"
>
{part.slice(2, -2)}
</strong>
);
}

return part;

});
}

export default async function BlogPostPage({
params,
}: {
params: Promise<{ slug: string }>;
}) {
const resolvedParams = await params;

const post = blogPosts.find(
(p) => p.slug === resolvedParams.slug
);

if (!post) {
notFound();
}

const relatedProducts = products
.filter((p) => p.featured)
.slice(0, 3);

return (
<div className="bg-white min-h-screen pb-16">

  {/* Article Header */}
  <div className="container mx-auto px-4 pt-12 pb-8 max-w-4xl text-center">

    <div className="mb-4">
      <Link
        href="/blog"
        className="text-orange-500 font-bold uppercase tracking-wider text-sm hover:underline"
      >
        Shopping Guides
      </Link>
    </div>

    <h1 className="font-jakarta text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
      {post.title}
    </h1>

    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
      <span className="font-medium text-gray-900">
        By {post.author}
      </span>

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
      />

    </div>

  </div>

  {/* Content Area */}
  <div className="container mx-auto px-4 max-w-6xl flex flex-col lg:flex-row gap-12">

    {/* Article */}
    <article className="lg:w-2/3 prose prose-lg max-w-none">

      {/* Excerpt */}
      <div className="text-xl text-gray-600 mb-10 border-l-4 border-orange-400 pl-5 font-medium italic leading-8">
        {post.excerpt}
      </div>

      {/* Article Content */}
      <div className="text-gray-700">
        {renderContent(post.content)}
      </div>

      {/* Affiliate Disclosure */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-10">

        <h4 className="mt-0 text-gray-900 font-bold text-lg">
          Affiliate Disclosure
        </h4>

        <p className="text-sm mb-0 leading-6 text-gray-600">
          Some of the links in this article may be affiliate links,
          which can provide compensation to us at no additional cost
          to you if you decide to purchase.
        </p>

      </div>

    </article>

    {/* Sidebar */}
    <aside className="lg:w-1/3">

      <div className="sticky top-24">

        <h3 className="font-bold text-xl text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Featured Deals
        </h3>

        <div className="space-y-6">

          {relatedProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col"
            >

              <Link
                href={`/product/${product.slug}`}
                className="block relative h-40 w-full bg-gray-50"
              >

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-2"
                />

              </Link>

              <div className="p-4">

                <Link href={`/product/${product.slug}`}>
                  <h4 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2 hover:text-blue-600">
                    {product.name}
                  </h4>
                </Link>

                <div className="flex justify-between items-center mt-2">

                  <span className="font-bold text-lg text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>

                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-orange-400 hover:bg-orange-500 text-[#131921] font-bold px-3 py-1.5 rounded transition-colors"
                  >
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
