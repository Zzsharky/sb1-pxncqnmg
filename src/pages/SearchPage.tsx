import React from 'react';
import { Search } from 'lucide-react';

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 px-4 py-6">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Rechercher une recette..."
          className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
      
      <div className="text-center text-gray-500">
        <p>Commencez à taper pour rechercher des recettes</p>
      </div>
    </div>
  );
}