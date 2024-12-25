import React from 'react';
import { LucideIcon } from 'lucide-react';

type Props = {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick: () => void;
};

export default function BottomNavItem({ icon: Icon, label, isActive = false, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex-1 flex flex-col items-center justify-center py-2"
    >
      <Icon
        size={24}
        className={`mb-1 transition-colors ${
          isActive ? 'text-orange-500' : 'text-gray-500'
        }`}
      />
      <span
        className={`text-xs transition-colors ${
          isActive ? 'text-orange-500 font-medium' : 'text-gray-500'
        }`}
      >
        {label}
      </span>
    </button>
  );
}