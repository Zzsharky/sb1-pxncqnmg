import React, { useState, useMemo } from 'react';
import { X } from 'lucide-react';
import { ingredients } from '../../data/ingredients';
import { recipes } from '../../data/recipes';
import { Recipe } from '../../types/recipe';
import IngredientSelector from './IngredientSelector';
import MatchingRecipes from './MatchingRecipes';

type Props = {
  onClose: () => void;
  onRecipeSelect: (recipe: Recipe) => void;
};

export default function FridgeRecipeFinder({ onClose, onRecipeSelect }: Props) {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const matchingRecipes = useMemo(() => {
    if (selectedIngredients.length === 0) return [];

    return recipes.filter(recipe => {
      const recipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
      const selectedIngs = selectedIngredients.map(id => {
        const ingredient = ingredients.find(i => i.id === id);
        return ingredient?.name.toLowerCase() || '';
      });

      // Calculate how many selected ingredients are in the recipe
      const matchCount = selectedIngs.filter(ing => 
        recipeIngredients.some(recipeIng => recipeIng.includes(ing))
      ).length;

      // Return true if at least 50% of selected ingredients are in the recipe
      return matchCount >= (selectedIngs.length / 2);
    });
  }, [selectedIngredients]);

  const handleIngredientSelect = (id: string) => {
    setSelectedIngredients(prev => [...prev, id]);
  };

  const handleIngredientRemove = (id: string) => {
    setSelectedIngredients(prev => prev.filter(i => i !== id));
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <button
            onClick={onClose}
            className="text-orange-500 font-medium flex items-center"
          >
            <X className="mr-1" size={20} />
            Retour
          </button>
          <span className="font-medium">Mon Frigo</span>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <IngredientSelector
            ingredients={ingredients}
            selectedIngredients={selectedIngredients}
            onSelect={handleIngredientSelect}
            onRemove={handleIngredientRemove}
          />

          {selectedIngredients.length > 0 && (
            <MatchingRecipes
              recipes={matchingRecipes}
              onRecipeSelect={onRecipeSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
}