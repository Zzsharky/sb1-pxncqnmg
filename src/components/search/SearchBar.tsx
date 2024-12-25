import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Recipe } from '../../types/recipe';
import { useSearch } from '../../hooks/useSearch';

type Props = {
  recipes: Recipe[];
  onRecipeSelect: (recipe: Recipe) => void;
};

export default function SearchBar({ recipes, onRecipeSelect }: Props) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchResults = useSearch(recipes, query);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
  };

  const handleSelect = (recipe: Recipe) => {
    onRecipeSelect(recipe);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative z-50">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Rechercher une recette..."
          className="w-full pl-10 pr-12 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {isOpen && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
          {searchResults.map(recipe => (
            <button
              key={recipe.id}
              onClick={() => handleSelect(recipe)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3"
            >
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium text-gray-900">{recipe.name}</h4>
                <p className="text-sm text-gray-500">{recipe.category}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}