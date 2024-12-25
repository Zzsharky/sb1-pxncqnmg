import React from 'react';
import { $FlexboxLayout, $StackLayout, $Label } from 'react-nativescript';
import { AuthProvider } from '../context/AuthContext';
import { UserProvider } from '../context/UserContext';
import { FavoritesProvider } from '../context/FavoritesContext';
import { MainNavigator } from './navigation/MainNavigator';

export function AppContainer() {
  return (
    <AuthProvider>
      <UserProvider>
        <FavoritesProvider>
          <MainNavigator />
        </FavoritesProvider>
      </UserProvider>
    </AuthProvider>
  );
}