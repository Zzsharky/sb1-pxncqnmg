import React from 'react';
import { Home, Heart, User } from 'lucide-react';
import BottomNavItem from './BottomNavItem';

type Props = {
  currentPage: 'home' | 'favorites' | 'profile';
  onNavigate: (page: 'home' | 'favorites' | 'profile') => void;
};

export default function BottomNav({ currentPage, onNavigate }: Props) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-around px-4 pb-safe">
      <BottomNavItem
        icon={Home}
        label="Accueil"
        isActive={currentPage === 'home'}
        onClick={() => onNavigate('home')}
      />
      <BottomNavItem
        icon={Heart}
        label="Favoris"
        isActive={currentPage === 'favorites'}
        onClick={() => onNavigate('favorites')}
      />
      <BottomNavItem
        icon={User}
        label="Profile"
        isActive={currentPage === 'profile'}
        onClick={() => onNavigate('profile')}
      />
    </nav>
  );
}