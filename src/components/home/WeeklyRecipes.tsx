import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Recipe } from '../../types/recipe';
import WeeklyRecipeCard from '../recipe/WeeklyRecipeCard';
import { getWeeklyRecipes } from '../../utils/weeklyRecipes';

type Props = {
  recipes: Recipe[];
  onRecipeClick: (recipe: Recipe) => void;
};

const DAYS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

export default function WeeklyRecipes({ recipes, onRecipeClick }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const weeklyRecipes = getWeeklyRecipes(recipes);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2 >= DAYS.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? DAYS.length - 2 : prev - 2));
  };

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recettes de la semaine</h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[0, 1].map((offset) => {
          const dayIndex = (currentIndex + offset) % DAYS.length;
          const recipe = weeklyRecipes[dayIndex];
          return (
            <WeeklyRecipeCard
              key={dayIndex}
              recipe={recipe}
              day={DAYS[dayIndex]}
              onRecipeClick={onRecipeClick}
            />
          );
        })}
      </div>
    </section>
  );
}