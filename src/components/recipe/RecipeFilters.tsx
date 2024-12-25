import React from 'react';

const categories = ['Tout', 'Déjeuner', 'Dîner', 'Dessert & Gâteaux'];

type Props = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function RecipeFilters({ selectedCategory, onCategoryChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
            selectedCategory === category
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}