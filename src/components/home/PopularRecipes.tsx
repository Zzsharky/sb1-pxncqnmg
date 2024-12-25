import React from 'react';
import { Recipe } from '../../types/recipe';
import PopularRecipeCard from '../recipe/PopularRecipeCard';

type Props = {
  recipes: Recipe[];
  onRecipeClick: (recipe: Recipe) => void;
  onViewAll: () => void;
};

export default function PopularRecipes({ recipes, onRecipeClick, onViewAll }: Props) {
  const popularRecipes = recipes.slice(0, 3);

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recettes populaires</h2>
        <button 
          onClick={onViewAll}
          className="text-orange-500 hover:text-orange-600 font-medium"
        >
          Voir tout
        </button>
      </div>
      
      <div className="space-y-3">
        {popularRecipes.map((recipe) => (
          <PopularRecipeCard
            key={recipe.id}
            recipe={recipe}
            onRecipeClick={onRecipeClick}
          />
        ))}
      </div>
    </section>
  );
}