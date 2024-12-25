import React from 'react';
import Logo from './Logo';
import SearchBar from '../search/SearchBar';
import SearchButtons from '../search/SearchButtons';
import { Recipe } from '../../types/recipe';
import { recipes } from '../../data/recipes';

type Props = {
  onRandomRecipe: () => void;
  onIngredientSearch: () => void;
  onRecipeSelect: (recipe: Recipe) => void;
};

export default function Header({ onRandomRecipe, onIngredientSearch, onRecipeSelect }: Props) {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col space-y-4">
          <div className="w-full flex justify-center">
            <Logo />
          </div>
          <SearchBar 
            recipes={recipes} 
            onRecipeSelect={onRecipeSelect} 
          />
          <SearchButtons
            onRandomRecipe={onRandomRecipe}
            onIngredientSearch={onIngredientSearch}
          />
        </div>
      </div>
    </header>
  );
}