import React from 'react';

const categories = ['Tout', 'Petit déjeuner', 'Déjeuner', 'Dîner', 'Dessert & Gâteaux'];

export default function CategoryTabs() {
  return (
    <div className="overflow-x-auto flex space-x-4 py-4">
      {categories.map((category, index) => (
        <button
          key={category}
          className={`px-6 py-2.5 rounded-full whitespace-nowrap font-semibold text-sm transition-colors ${
            index === 0
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