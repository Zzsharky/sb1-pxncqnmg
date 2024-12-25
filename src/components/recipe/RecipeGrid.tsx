import React from 'react';
import { Recipe } from '../../types/recipe';
import RecipeCard from './RecipeCard';

type Props = {
  recipes: Recipe[];
  onRecipeSelect: (recipe: Recipe) => void;
};

export default function RecipeGrid({ recipes, onRecipeSelect }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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