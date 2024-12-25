import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import FavoritesPage from './pages/FavoritesPage';
import AllRecipesPage from './pages/AllRecipesPage';
import RecipeDetail from './components/recipe/RecipeDetail';
import RandomRecipeSwiper from './components/recipe/RandomRecipeSwiper';
import CategorySelection from './components/recipe/CategorySelection';
import FridgeRecipeFinder from './components/fridge/FridgeRecipeFinder';
import BottomNav from './components/layout/BottomNav/BottomNav';
import { recipes } from './data/recipes';
import { Recipe } from './types/recipe';

type Page = 'home' | 'favorites' | 'profile' | 'all-recipes';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showRandomRecipe, setShowRandomRecipe] = useState(false);
  const [showCategorySelection, setShowCategorySelection] = useState(false);
  const [showFridgeRecipes, setShowFridgeRecipes] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'repas' | 'dessert'>('repas');

  const handleRandomRecipe = () => {
    setShowCategorySelection(true);
  };

  const handleCategorySelect = (category: 'repas' | 'dessert') => {
    setSelectedCategory(category);
    setShowCategorySelection(false);
    setShowRandomRecipe(true);
  };

  const handleFridgeRecipes = () => {
    setShowFridgeRecipes(true);
  };

  const handleRecipeSelect = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setShowRandomRecipe(false);
    setShowFridgeRecipes(false);
  };

  const handleViewAllRecipes = () => {
    setCurrentPage('all-recipes');
  };

  const renderPage = () => {
    if (selectedRecipe) {
      return (
        <RecipeDetail
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return (
          <>
            <HomePage
              onRandomRecipe={handleRandomRecipe}
              onIngredientSearch={handleFridgeRecipes}
              onRecipeSelect={handleRecipeSelect}
              onViewAllRecipes={handleViewAllRecipes}
            />
            {showCategorySelection && (
              <CategorySelection
                onSelectCategory={handleCategorySelect}
                onClose={() => setShowCategorySelection(false)}
              />
            )}
            {showRandomRecipe && (
              <RandomRecipeSwiper
                recipes={recipes}
                category={selectedCategory}
                onClose={() => setShowRandomRecipe(false)}
                onViewRecipe={handleRecipeSelect}
              />
            )}
            {showFridgeRecipes && (
              <FridgeRecipeFinder
                onClose={() => setShowFridgeRecipes(false)}
                onRecipeSelect={handleRecipeSelect}
              />
            )}
          </>
        );
      case 'favorites':
        return (
          <FavoritesPage 
            onRecipeSelect={handleRecipeSelect}
            onNavigate={setCurrentPage}
          />
        );
      case 'profile':
        return <ProfilePage />;
      case 'all-recipes':
        return (
          <AllRecipesPage
            recipes={recipes}
            onRecipeSelect={handleRecipeSelect}
            onBack={() => setCurrentPage('home')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
      <BottomNav
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
    </div>
  );
}

export default App;