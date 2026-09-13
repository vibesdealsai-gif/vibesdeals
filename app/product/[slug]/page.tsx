import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/ui/ProductCard';

const categoryNames: Record<string, string> = {
electronics: 'Electronics',
smartphones: 'Smartphones',
laptops: 'Laptops',
fashion: 'Fashion',
'home-kitchen': 'Home & Kitchen',
beauty: 'Beauty',
fitness: 'Fitness',
gaming: 'Gaming',
accessories: 'Accessories',
travel: 'Travel',
'office-products': 'Office Products',
'office-product': 'Office Products',
'trending-products': 'Trending Products',
'trending-product': 'Trending Products',
};

export function generateStaticParams() {
return Object.keys(categoryNames).map((slug) => ({
slug,
}));
}

export default async function CategoryPage({
params,
}: {
params: Promise<{ slug: string }>;
}) {
const { slug } = await params;

const categoryName = categoryNames[slug];

if (!categoryName) {
notFound();
}

let categoryProducts = products.filter(
(product) =>
product.category.toLowerCase() === categoryName.toLowerCase()
);

// Trending Products is based on the trending flag
if (categoryName === 'Trending Products') {
categoryProducts = products.filter((product) => product.trending);
}

return (
<main className="min-h-screen bg-gray-50 py-12">
<div className="container mx-auto px-4">

    <div className="mb-8">
      <Link
        href="/"
        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        ← Back to Home
      </Link>

      <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
        {categoryName}
      </h1>

      <p className="mt-2 text-gray-600">
        Explore the latest deals and products in {categoryName}.
      </p>
    </div>

    {categoryProducts.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    ) : (
      <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          No products found
        </h2>

        <p className="text-gray-500">
          There are currently no products in this category.
        </p>
      </div>
    )}

  </div>
</main>

);
}
