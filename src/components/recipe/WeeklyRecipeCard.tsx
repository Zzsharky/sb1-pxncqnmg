import React from 'react';
import { Clock } from 'lucide-react';
import { Recipe } from '../../types/recipe';
import FavoriteButton from '../favorites/FavoriteButton';

type Props = {
  recipe: Recipe;
  day: string;
  onRecipeClick: (recipe: Recipe) => void;
};

export default function WeeklyRecipeCard({ recipe, day, onRecipeClick }: Props) {
  return (
    <div 
      onClick={() => onRecipeClick(recipe)}
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="relative">
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          className="w-full h-32 object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
            {day}
          </span>
        </div>
        <FavoriteButton
          recipe={recipe}
          className="absolute top-2 right-2"
        />
      </div>
      
      <div className="p-3">
        <h3 className="font-medium text-sm mb-1 line-clamp-1">{recipe.name}</h3>
        <div className="flex items-center text-xs text-gray-600">
          <Clock size={12} className="mr-1" />
          <span>{recipe.prepTime} + {recipe.cookTime}</span>
        </div>
      </div>
    </div>
  );
}