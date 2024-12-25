import React from 'react';
import { Utensils, Cake } from 'lucide-react';

type Category = 'repas' | 'dessert';

type Props = {
  onSelectCategory: (category: Category) => void;
  onClose: () => void;
};

export default function CategorySelection({ onSelectCategory, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <button
            onClick={onClose}
            className="text-orange-500 font-medium"
          >
            Retour
          </button>
          <span className="font-medium">Choisir une catégorie</span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-4 space-y-4">
          <button
            onClick={() => onSelectCategory('repas')}
            className="w-full max-w-sm flex items-center justify-between p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors"
          >
            <span className="text-lg font-medium">Déjeuner & Dîner</span>
            <Utensils className="text-orange-500" size={24} />
          </button>

          <button
            onClick={() => onSelectCategory('dessert')}
            className="w-full max-w-sm flex items-center justify-between p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors"
          >
            <span className="text-lg font-medium">Dessert & Gâteaux</span>
            <Cake className="text-orange-500" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}