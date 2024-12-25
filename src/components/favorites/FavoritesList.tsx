import React from 'react';
import { Recipe } from '../../types/recipe';
import RecipeCard from '../recipe/RecipeCard';

type Props = {
  recipes: Recipe[];
  onRecipeSelect: (recipe: Recipe) => void;
};

export default function FavoritesList({ recipes, onRecipeSelect }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onRecipeClick={onRecipeSelect}
        />
      ))}
    </div>
  );
}