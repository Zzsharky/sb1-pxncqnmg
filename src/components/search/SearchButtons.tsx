import React from 'react';
import { Refrigerator, Shuffle } from 'lucide-react';

type Props = {
  onRandomRecipe: () => void;
  onIngredientSearch: () => void;
};

export default function SearchButtons({ onRandomRecipe, onIngredientSearch }: Props) {
  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={onIngredientSearch}
        className="flex-1 flex items-center justify-center gap-2 bg-[#31B057] text-white py-3 px-4 rounded-lg hover:bg-[#2a9b4d] transition-colors font-semibold"
      >
        <Refrigerator size={20} />
        <span>Frigo</span>
      </button>
      
      <button
        onClick={onRandomRecipe}
        className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
      >
        <Shuffle size={20} />
        <span>وش نطيبو ليوم ؟</span>
      </button>
    </div>
  );
}