import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../hooks/useFavorites';
import EmptyFavorites from '../components/favorites/EmptyFavorites';
import FavoritesList from '../components/favorites/FavoritesList';
import AuthMessage from '../components/favorites/AuthMessage';
import { Recipe } from '../types/recipe';

type Props = {
  onRecipeSelect: (recipe: Recipe) => void;
  onNavigate: (page: 'home' | 'favorites' | 'profile') => void;
};

export default function FavoritesPage({ onRecipeSelect, onNavigate }: Props) {
  const { user } = useAuth();
  const { favorites } = useFavorites();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 pb-16 px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Mes Favoris</h1>
        <AuthMessage onNavigateToProfile={() => onNavigate('profile')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16 px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Mes Favoris</h1>
      
      {favorites.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <FavoritesList 
          recipes={favorites}
          onRecipeSelect={onRecipeSelect}
        />
      )}
    </div>
  );
}