import { Recipe } from '../types/recipe';

const FAVORITES_KEY = 'recipe_favorites';

export function getStoredFavorites(): Recipe[] {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function storeFavorites(favorites: Recipe[]): void {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Failed to store favorites:', error);
  }
}