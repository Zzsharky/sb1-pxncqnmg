import React from 'react';
import { Clock, ChefHat } from 'lucide-react';
import { Recipe } from '../data/recipes';

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={recipe.imageUrl}
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.name}</h3>
        
        <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{recipe.prepTime} + {recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat size={16} />
            <span>{recipe.difficulty}</span>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-medium mb-2">Ingrédients:</h4>
          <div className="flex flex-wrap gap-1">
            {recipe.ingredients.map(ing => (
              <span
                key={ing}
                className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}