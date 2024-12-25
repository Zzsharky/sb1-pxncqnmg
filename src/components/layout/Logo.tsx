import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <img 
        src="https://raw.githubusercontent.com/kaswila/assets/main/logo.png" 
        alt="Kaswila Logo" 
        className="h-40 w-auto object-contain" // Increased height from h-24 to h-40 (160px)
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = '/logo.png';
        }}
      />
    </div>
  );
}