import React from 'react';
import { useAuth } from '../../context/AuthContext';

export default function SocialLogin() {
  const { loginWithGoogle, loginWithFacebook } = useAuth();

  return (
    <div className="space-y-3">
      <button
        onClick={loginWithGoogle}
        className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="w-5 h-5"
        />
        Continuer avec Google
      </button>

      <button
        onClick={loginWithFacebook}
        className="w-full flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2 px-4 rounded-lg hover:bg-[#1864D9] transition-colors"
      >
        <img
          src="https://www.facebook.com/favicon.ico"
          alt="Facebook"
          className="w-5 h-5"
        />
        Continuer avec Facebook
      </button>
    </div>
  );
}