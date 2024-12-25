import React, { useState } from 'react';
import { X, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Recipe } from '../../types/recipe';
import { useSwipeable } from 'react-swipeable';
import FavoriteButton from '../favorites/FavoriteButton';

type Props = {
  recipes: Recipe[];
  category: 'repas' | 'dessert';
  onClose: () => void;
  onViewRecipe: (recipe: Recipe) => void;
};

export default function RandomRecipeSwiper({ recipes, category, onClose, onViewRecipe }: Props) {
  const filteredRecipes = recipes.filter(recipe => {
    if (category === 'dessert') {
      return recipe.category === 'Dessert';
    }
    return recipe.category === 'Plat Principal';
  });

  const [currentRecipe, setCurrentRecipe] = useState(() => {
    const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
    return filteredRecipes[randomIndex];
  });

  const showNextRecipe = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * filteredRecipes.length);
    } while (filteredRecipes[randomIndex].id === currentRecipe.id);
    setCurrentRecipe(filteredRecipes[randomIndex]);
  };

  const handlers = useSwipeable({
    onSwipedLeft: showNextRecipe,
    onSwipedRight: showNextRecipe,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  if (filteredRecipes.length === 0) {
    return (
      <div className="fixed inset-0 bg-white z-50">
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={onClose}
              className="text-orange-500 font-medium flex items-center"
            >
              <X className="mr-1" size={20} />
              Retour
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center p-4 text-center">
            <p className="text-gray-500">
              Aucune recette disponible dans cette catégorie pour le moment.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={onClose}
            className="text-orange-500 font-medium flex items-center"
          >
            <X className="mr-1" size={20} />
            Retour
          </button>
          <span className="font-medium">
            {category === 'repas' ? 'Déjeuner & Dîner' : 'Dessert & Gâteaux'}
          </span>
        </div>

        <div 
          {...handlers}
          className="flex-1 flex flex-col px-4 relative"
        >
          {/* Navigation Arrows */}
          <button
            onClick={showNextRecipe}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            aria-label="Recette précédente"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button
            onClick={showNextRecipe}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            aria-label="Recette suivante"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          <div className="relative flex-1 rounded-2xl overflow-hidden mb-4">
            <img
              src={currentRecipe.imageUrl}
              alt={currentRecipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h1 className="text-xl font-bold text-white mb-2">{currentRecipe.name}</h1>
              <div className="flex items-center text-white/90 text-sm">
                <Clock size={16} className="mr-1" />
                <span>{currentRecipe.prepTime} + {currentRecipe.cookTime}</span>
              </div>
            </div>
            <FavoriteButton 
              recipe={currentRecipe}
              className="absolute bottom-4 right-4 shadow-lg"
            />
          </div>

          <div className="flex gap-3 mb-6">
            <button
              onClick={showNextRecipe}
              className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 rounded-full font-medium"
            >
              Autre
            </button>
            <button
              onClick={() => onViewRecipe(currentRecipe)}
              className="flex-1 py-3 px-6 bg-orange-500 text-white rounded-full font-medium"
            >
              Voir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}