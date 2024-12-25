import React from 'react';
import { Camera, User } from 'lucide-react';
import { useUser } from '../../context/UserContext';

export default function ProfileHeader() {
  const { profile, updatePhoto } = useUser();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-orange-500 text-white py-8 px-4">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <div className="w-full h-full rounded-full overflow-hidden bg-white">
          {profile.photoUrl ? (
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <User size={40} className="text-orange-500" />
            </div>
          )}
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg text-orange-500 hover:bg-orange-50 transition-colors"
        >
          <Camera size={16} />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="hidden"
        />
      </div>
      <h1 className="text-2xl font-bold text-center">{profile.name}</h1>
    </div>
  );
}