import { useMemo } from 'react';
import { Recipe } from '../types/recipe';

export function useSearch(recipes: Recipe[], query: string) {
  return useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().split(' ');
    
    return recipes.filter(recipe => {
      const searchableText = [
        recipe.name,
        ...recipe.ingredients,
        recipe.category
      ].join(' ').toLowerCase();
      
      return searchTerms.every(term => searchableText.includes(term));
    }).slice(0, 5); // Limit to 5 results
  }, [recipes, query]);
}