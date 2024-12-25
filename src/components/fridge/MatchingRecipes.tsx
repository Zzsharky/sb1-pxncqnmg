import React from 'react';
import { Recipe } from '../../types/recipe';
import RecipeCard from '../recipe/RecipeCard';

type Props = {
  recipes: Recipe[];
  onRecipeSelect: (recipe: Recipe) => void;
};

export default function MatchingRecipes({ recipes, onRecipeSelect }: Props) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>Aucune recette ne correspond à vos ingrédients</p>
        <p className="text-sm mt-1">Essayez de sélectionner d'autres ingrédients</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">
        Recettes suggérées ({recipes.length})
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onRecipeClick={onRecipeSelect}
          />
        ))}
      </div>
    </div>
  );
}