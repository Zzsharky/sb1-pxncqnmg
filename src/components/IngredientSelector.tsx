import React from 'react';
import { Ingredient } from '../data/ingredients';
import { X } from 'lucide-react';

type Props = {
  ingredients: Ingredient[];
  selectedIngredients: string[];
  onSelect: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function IngredientSelector({ ingredients, selectedIngredients, onSelect, onRemove }: Props) {
  const categories = Array.from(new Set(ingredients.map(i => i.category)));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {selectedIngredients.map(id => {
          const ingredient = ingredients.find(i => i.id === id);
          return (
            <span
              key={id}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
            >
              {ingredient?.name}
              <button
                onClick={() => onRemove(id)}
                className="ml-2 hover:text-green-900"
              >
                <X size={14} />
              </button>
            </span>
          );
        })}
      </div>

      {categories.map(category => (
        <div key={category} className="space-y-2">
          <h3 className="font-medium capitalize">{category.replace('-', ' ')}</h3>
          <div className="flex flex-wrap gap-2">
            {ingredients
              .filter(i => i.category === category)
              .map(ingredient => (
                <button
                  key={ingredient.id}
                  onClick={() => onSelect(ingredient.id)}
                  disabled={selectedIngredients.includes(ingredient.id)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedIngredients.includes(ingredient.id)
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {ingredient.name}
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}