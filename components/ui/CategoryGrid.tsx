import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import { Category } from '@/lib/types';

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {categories.map((category) => {
        // Dynamically get icon from lucide-react, fallback to box
        const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Box;

        return (
          <Link 
            key={category.slug}
            href={`/search?category=${category.slug}`}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-50 transition-colors">
              <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-orange-500 transition-colors" />
            </div>
            <span className="text-sm font-medium text-gray-800 text-center">{category.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
