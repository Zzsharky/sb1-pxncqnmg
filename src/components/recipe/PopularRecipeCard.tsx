import React from 'react';
import { Clock } from 'lucide-react';
import { Recipe } from '../../types/recipe';
import FavoriteButton from '../favorites/FavoriteButton';

type Props = {
  recipe: Recipe;
  onRecipeClick: (recipe: Recipe) => void;
};

export default function PopularRecipeCard({ recipe, onRecipeClick }: Props) {
  return (
    <div 
      onClick={() => onRecipeClick(recipe)}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex">
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          className="w-24 h-24 object-cover"
        />
        <div className="flex-1 p-3 relative">
          <FavoriteButton
            recipe={recipe}
            className="absolute top-2 right-2"
          />
          <div className="pr-8">
            <h3 className="font-medium text-sm mb-2 line-clamp-1">{recipe.name}</h3>
            <div className="flex items-center text-xs text-gray-500">
              <Clock size={12} className="mr-1" />
              <span>{recipe.prepTime} + {recipe.cookTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}