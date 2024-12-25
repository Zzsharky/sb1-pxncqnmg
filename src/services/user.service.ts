import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { UserProfile } from '../context/UserContext';

export const saveUserProfile = async (userId: string, profile: UserProfile) => {
  const userRef = doc(db, 'users', userId);
  await setDoc(userRef, {
    ...profile,
    updatedAt: new Date().toISOString(),
  }, { merge: true });
};

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  const userRef = doc(db, 'users', userId);
  const docSnap = await getDoc(userRef);
  return docSnap.exists() ? docSnap.data() as UserProfile : null;
};

export const updateUserProfile = async (userId: string, updates: Partial<UserProfile>) => {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, {
    ...updates,
    updatedAt: new Date().toISOString(),
  });
};