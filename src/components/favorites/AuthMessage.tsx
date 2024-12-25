import React from 'react';
import { Heart, LogIn } from 'lucide-react';

type Props = {
  onNavigateToProfile: () => void;
};

export default function AuthMessage({ onNavigateToProfile }: Props) {
  return (
    <div className="text-center text-gray-500 mt-12">
      <Heart size={48} className="mx-auto mb-4 text-gray-300" />
      <p className="text-lg font-medium mb-2">Connectez-vous pour accéder à vos favoris</p>
      <p className="text-sm mb-4">Enregistrez vos recettes préférées et retrouvez-les facilement</p>
      <button 
        onClick={onNavigateToProfile}
        className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
      >
        <LogIn className="mr-2" size={20} />
        Se connecter
      </button>
    </div>
  );
}