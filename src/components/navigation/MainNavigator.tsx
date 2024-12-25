import React from 'react';
import { BottomNavigation } from '@nativescript/core';
import { $TabStrip, $TabStripItem, $TabContentItem } from 'react-nativescript';
import { HomeScreen } from '../../screens/HomeScreen';
import { FavoritesScreen } from '../../screens/FavoritesScreen';
import { ProfileScreen } from '../../screens/ProfileScreen';
import { Home, Heart, User } from 'lucide-react';

export function MainNavigator() {
  return (
    <$BottomNavigation>
      <$TabStrip>
        <$TabStripItem>
          <$Label text="Accueil" />
          <$Image src={Home} />
        </$TabStripItem>
        <$TabStripItem>
          <$Label text="Favoris" />
          <$Image src={Heart} />
        </$TabStripItem>
        <$TabStripItem>
          <$Label text="Profile" />
          <$Image src={User} />
        </$TabStripItem>
      </$TabStrip>

      <$TabContentItem>
        <HomeScreen />
      </$TabContentItem>
      <$TabContentItem>
        <FavoritesScreen />
      </$TabContentItem>
      <$TabContentItem>
        <ProfileScreen />
      </$TabContentItem>
    </$BottomNavigation>
  );
}