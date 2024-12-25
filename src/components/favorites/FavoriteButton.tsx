import React from 'react';
import { Heart } from 'lucide-react';
import { Recipe } from '../../types/recipe';
import { useFavorites } from '../../hooks/useFavorites';
import { useAuth } from '../../context/AuthContext';

type Props = {
  recipe: Recipe;
  className?: string;
};

export default function FavoriteButton({ recipe, className = '' }: Props) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { user } = useAuth();
  const favorite = isFavorite(recipe.id);

  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) return;
    await toggleFavorite(recipe);
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors ${className}`}
      aria-label={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
    >
      <Heart
        size={20}
        className={`${
          favorite 
            ? 'fill-red-500 text-red-500' 
            : 'text-gray-600 hover:text-red-500'
        } transition-colors`}
      />
    </button>
  );
}