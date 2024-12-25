import React from 'react';
import WeeklyRecipes from '../components/home/WeeklyRecipes';
import PopularRecipes from '../components/home/PopularRecipes';
import Header from '../components/layout/Header';
import { recipes } from '../data/recipes';
import { Recipe } from '../types/recipe';

type Props = {
  onRandomRecipe: () => void;
  onIngredientSearch: () => void;
  onRecipeSelect: (recipe: Recipe) => void;
  onViewAllRecipes: () => void;
};

export default function HomePage({ 
  onRandomRecipe, 
  onIngredientSearch, 
  onRecipeSelect,
  onViewAllRecipes 
}: Props) {
  return (
    <div className="pb-16">
      <Header
        onRandomRecipe={onRandomRecipe}
        onIngredientSearch={onIngredientSearch}
        onRecipeSelect={onRecipeSelect}
      />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <WeeklyRecipes 
          recipes={recipes} 
          onRecipeClick={onRecipeSelect}
        />
        <PopularRecipes 
          recipes={recipes} 
          onRecipeClick={onRecipeSelect}
          onViewAll={onViewAllRecipes}
        />
      </main>
    </div>
  );
}