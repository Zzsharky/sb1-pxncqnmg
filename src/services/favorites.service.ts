import { 
  doc, 
  setDoc, 
  deleteDoc, 
  collection, 
  query, 
  where, 
  getDocs 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Recipe } from '../types/recipe';

export const addToFavorites = async (userId: string, recipe: Recipe) => {
  const favoriteRef = doc(db, 'favorites', `${userId}_${recipe.id}`);
  await setDoc(favoriteRef, {
    userId,
    recipeId: recipe.id,
    recipe,
    createdAt: new Date().toISOString()
  });
};

export const removeFromFavorites = async (userId: string, recipeId: string) => {
  const favoriteRef = doc(db, 'favorites', `${userId}_${recipeId}`);
  await deleteDoc(favoriteRef);
};

export const getUserFavorites = async (userId: string): Promise<Recipe[]> => {
  const favoritesRef = collection(db, 'favorites');
  const q = query(favoritesRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map(doc => doc.data().recipe as Recipe);
};