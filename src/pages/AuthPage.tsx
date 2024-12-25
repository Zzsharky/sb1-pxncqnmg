import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import ResetPassword from '../components/auth/ResetPassword';
import EmailVerification from '../components/auth/EmailVerification';
import SocialLogin from '../components/auth/SocialLogin';

type AuthMode = 'login' | 'register' | 'reset';

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>('login');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full mx-auto space-y-8">
          <EmailVerification />
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              {mode === 'login' ? 'Connexion' : 
               mode === 'register' ? 'Inscription' : 
               'Réinitialiser le mot de passe'}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {mode === 'login' ? (
                <>
                  Pas encore de compte ?{' '}
                  <button
                    onClick={() => setMode('register')}
                    className="text-orange-500 hover:text-orange-600 font-medium"
                  >
                    S'inscrire
                  </button>
                </>
              ) : mode === 'register' ? (
                <>
                  Déjà un compte ?{' '}
                  <button
                    onClick={() => setMode('login')}
                    className="text-orange-500 hover:text-orange-600 font-medium"
                  >
                    Se connecter
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setMode('login')}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Retour à la connexion
                </button>
              )}
            </p>
          </div>

          <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
            {mode === 'login' && (
              <>
                <LoginForm />
                <div className="mt-4 text-center">
                  <button
                    onClick={() => setMode('reset')}
                    className="text-sm text-orange-500 hover:text-orange-600"
                  >
                    Mot de passe oublié ?
                  </button>
                </div>
              </>
            )}
            {mode === 'register' && <RegisterForm />}
            {mode === 'reset' && <ResetPassword />}
            
            {mode !== 'reset' && (
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Ou continuer avec
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <SocialLogin />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}