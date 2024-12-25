import React from 'react';
import { Heart } from 'lucide-react';

export default function EmptyFavorites() {
  return (
    <div className="text-center text-gray-500 mt-12">
      <Heart size={48} className="mx-auto mb-4 text-gray-300" />
      <p>Vous n'avez pas encore de recettes favorites</p>
      <p className="text-sm mt-2">Explorez des recettes et ajoutez-les à vos favoris</p>
    </div>
  );
}