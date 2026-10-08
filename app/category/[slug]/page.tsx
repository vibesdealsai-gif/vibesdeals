import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
  'trending-products': 'Trending Products',
};

const validSlugs = Object.keys(categoryNames);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const categoryName = categoryNames[slug];

  if (!categoryName) {
    return {};
  }

  return {
    title: `${categoryName} Deals & Best Products | Vibes Deals`,
    description: `Explore the best ${categoryName.toLowerCase()} products, deals and shopping recommendations at Vibes Deals.`,
    alternates: {
      canonical: `/category/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return validSlugs.map((slug) => ({
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

  let categoryProducts = products;

  if (
    categoryName !== 'Trending Products' &&
    categoryName !== 'Office Products'
  ) {
    categoryProducts = products.filter(
      (product) =>
        product.category.toLowerCase() === categoryName.toLowerCase()
    );
  }

  if (categoryName === 'Office Products') {
    categoryProducts = products.filter(
      (product) =>
        product.category.toLowerCase() === 'office products'
    );
  }

  if (categoryName === 'Trending Products') {
    categoryProducts = products.filter(
      (product) => product.trending === true
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="font-jakarta text-3xl md:text-4xl font-bold text-gray-900">
            {categoryName}
          </h1>

          <p className="text-gray-500 mt-2">
            Explore the best {categoryName.toLowerCase()} products and deals.
          </p>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              No products found
            </h2>

            <p className="text-gray-500 mt-2">
              There are currently no products available in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
