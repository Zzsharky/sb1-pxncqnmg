import React, { useState } from 'react';
import { ArrowLeft, Clock, Star, ChefHat, Timer, Share2, Check, X } from 'lucide-react';
import { Recipe } from '../../types/recipe';
import FavoriteButton from '../favorites/FavoriteButton';

type Props = {
  recipe: Recipe;
  onBack: () => void;
};

export default function RecipeDetail({ recipe, onBack }: Props) {
  const [showShareToast, setShowShareToast] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShare = async () => {
    try {
      // Check if Web Share API is supported AND we're in a secure context
      if (navigator.share && window.isSecureContext) {
        await navigator.share({
          title: recipe.name,
          text: `Découvrez la recette de ${recipe.name} sur Kaswila !`,
          url: window.location.href
        });
        setShareSuccess(true);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        setShareSuccess(true);
      }
    } catch (error) {
      // Handle user cancellation or other errors gracefully
      if (error instanceof Error && error.name !== 'AbortError') {
        setShareSuccess(false);
      }
    }

    // Show toast
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Toast Notification */}
      {showShareToast && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
          ${shareSuccess ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}
          px-4 py-2 rounded-lg shadow-lg flex items-center gap-2`}
        >
          {shareSuccess ? (
            <>
              <Check size={16} className="text-green-500" />
              <span>Lien copié avec succès !</span>
            </>
          ) : (
            <>
              <X size={16} className="text-red-500" />
              <span>Impossible de partager le lien</span>
            </>
          )}
        </div>
      )}

      <div className="relative">
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={handleShare}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Partager la recette"
          >
            <Share2 size={20} className="text-gray-600" />
          </button>
          <FavoriteButton
            recipe={recipe}
            className="shadow-lg"
          />
        </div>
      </div>

      {/* Rest of the component remains unchanged */}
      <div className="px-4 py-6">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-bold">{recipe.name}</h1>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">4.5</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center bg-orange-100 px-3 py-1 rounded-full">
            <Clock size={16} className="text-orange-500 mr-1" />
            <span className="text-sm">Préparation: {recipe.prepTime}</span>
          </div>
          <div className="flex items-center bg-orange-100 px-3 py-1 rounded-full">
            <Timer size={16} className="text-orange-500 mr-1" />
            <span className="text-sm">Cuisson: {recipe.cookTime}</span>
          </div>
          <div className="flex items-center bg-orange-100 px-3 py-1 rounded-full">
            <ChefHat size={16} className="text-orange-500 mr-1" />
            <span className="text-sm">{recipe.difficulty}</span>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Ingrédients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Préparation</h2>
          <ol className="space-y-6">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                  {recipe.instructionDetails?.[index] && (
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {recipe.instructionDetails[index]}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}