import { Recipe } from '../types/recipe';

const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;

export function getWeeklyRecipes(recipes: Recipe[]): Recipe[] {
  // Get the current week number (since epoch)
  const currentWeek = Math.floor(Date.now() / WEEK_IN_MS);
  
  // Use the week number as a seed for consistent weekly rotation
  const shuffledRecipes = [...recipes].sort(() => {
    // Generate a deterministic random number based on the week
    const random = Math.sin(currentWeek) * 10000;
    return random - Math.floor(random);
  });

  // Return 7 recipes for the week
  return shuffledRecipes.slice(0, 7);
}