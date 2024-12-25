import { useState, useEffect } from 'react';
import { Recipe } from '../types/recipe';
import { useAuth } from '../context/AuthContext';
import { db } from '../config/firebase';
import { 
  collection, 
  query, 
  where, 
  onSnapshot,
  addDoc,
  deleteDoc,
  getDocs
} from 'firebase/firestore';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }

    const q = query(
      collection(db, 'favorites'),
      where('userId', '==', user.id)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const favoritesData = snapshot.docs.map(doc => doc.data().recipe as Recipe);
      setFavorites(favoritesData);
    });

    return () => unsubscribe();
  }, [user]);

  const toggleFavorite = async (recipe: Recipe) => {
    if (!user) return;

    const q = query(
      collection(db, 'favorites'),
      where('userId', '==', user.id),
      where('recipeId', '==', recipe.id)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // Add to favorites
      await addDoc(collection(db, 'favorites'), {
        userId: user.id,
        recipeId: recipe.id,
        recipe,
        createdAt: new Date().toISOString()
      });
    } else {
      // Remove from favorites
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
    }
  };

  const isFavorite = (recipeId: string) => {
    return favorites.some(recipe => recipe.id === recipeId);
  };

  return { favorites, toggleFavorite, isFavorite };
}