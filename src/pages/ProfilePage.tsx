import React from 'react';
import { useAuth } from '../context/AuthContext';
import AuthPage from './AuthPage';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileForm from '../components/profile/ProfileForm';

export default function ProfilePage() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <ProfileHeader />
      <div className="px-4 py-6 space-y-4">
        <ProfileForm />
      </div>
    </div>
  );
}