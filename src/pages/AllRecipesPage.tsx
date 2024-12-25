import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Recipe } from '../types/recipe';
import RecipeGrid from '../components/recipe/RecipeGrid';
import RecipeFilters from '../components/recipe/RecipeFilters';

type Props = {
  recipes: Recipe[];
  onRecipeSelect: (recipe: Recipe) => void;
  onBack: () => void;
};

export default function AllRecipesPage({ recipes, onRecipeSelect, onBack }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tout');
  
  const filteredRecipes = selectedCategory === 'Tout' 
    ? recipes
    : recipes.filter(recipe => {
        switch (selectedCategory) {
          case 'Déjeuner':
            return recipe.category === 'Entrée';
          case 'Dîner':
            return recipe.category === 'Plat Principal';
          case 'Dessert & Gâteaux':
            return recipe.category === 'Dessert';
          default:
            return true;
        }
      });

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Toutes les recettes</h1>
        
        <RecipeFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <RecipeGrid
          recipes={filteredRecipes}
          onRecipeSelect={onRecipeSelect}
        />
      </div>
    </div>
  );
}