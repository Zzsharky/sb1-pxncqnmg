import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { getUserProfile, saveUserProfile, updateUserProfile } from '../services/user.service';

export type UserProfile = {
  name: string;
  email: string;
  address: string;
  photoUrl: string | null;
  updatedAt?: string;
};

type UserContextType = {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  updatePhoto: (photoUrl: string) => Promise<void>;
  isLoading: boolean;
};

const defaultProfile: UserProfile = {
  name: '',
  email: '',
  address: '',
  photoUrl: null,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [isLoading, setIsLoading] = useState(true);

  // Load user profile from Firebase when user changes
  useEffect(() => {
    async function loadProfile() {
      if (!user) {
        setProfile(defaultProfile);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const userProfile = await getUserProfile(user.id);
        
        if (userProfile) {
          setProfile(userProfile);
        } else {
          // Create initial profile if it doesn't exist
          const initialProfile = {
            ...defaultProfile,
            name: user.name,
            email: user.email,
            photoUrl: user.photoUrl || null,
          };
          await saveUserProfile(user.id, initialProfile);
          setProfile(initialProfile);
        }
      } catch (error) {
        console.error('Error loading user profile:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProfile();
  }, [user]);

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return;

    try {
      const updatedProfile = { ...profile, ...updates };
      await updateUserProfile(user.id, updates);
      setProfile(updatedProfile);
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };

  const updatePhoto = async (photoUrl: string) => {
    if (!user) return;

    try {
      await updateProfile({ photoUrl });
    } catch (error) {
      console.error('Error updating photo:', error);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ profile, updateProfile, updatePhoto, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}