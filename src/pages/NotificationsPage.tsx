import React from 'react';
import { Bell } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      
      <div className="text-center text-gray-500 mt-12">
        <Bell size={48} className="mx-auto mb-4 text-gray-300" />
        <p>Aucune notification pour le moment</p>
        <p className="text-sm mt-2">Restez à l'écoute pour les nouvelles recettes et mises à jour</p>
      </div>
    </div>
  );
}