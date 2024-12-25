import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  loginWithEmail, 
  registerWithEmail, 
  loginWithGoogle, 
  loginWithFacebook,
  logoutUser,
  resendVerificationEmail,
  resetPassword
} from '../services/auth.service';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export type User = {
  id: string;
  name: string;
  email: string;
  photoUrl?: string;
  provider: 'email' | 'google' | 'facebook';
  emailVerified: boolean;
  newsletter?: boolean;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, newsletter: boolean) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  logout: () => Promise<void>;
  resendVerification: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || '',
          email: firebaseUser.email || '',
          photoUrl: firebaseUser.photoURL || undefined,
          provider: 'email',
          emailVerified: firebaseUser.emailVerified
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      const user = await loginWithEmail(email, password);
      setUser(user);
    } catch (err) {
      setError('Email ou mot de passe incorrect');
      throw err;
    }
  };

  const register = async (email: string, password: string, name: string, newsletter: boolean) => {
    try {
      setError(null);
      const user = await registerWithEmail(email, password, name, newsletter);
      setUser(user);
    } catch (err) {
      setError('Erreur lors de l\'inscription');
      throw err;
    }
  };

  const handleSocialLogin = async (provider: () => Promise<User>) => {
    try {
      setError(null);
      const user = await provider();
      setUser(user);
    } catch (err) {
      setError('Erreur de connexion');
      throw err;
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user,
        isLoading,
        error,
        login,
        register,
        loginWithGoogle: () => handleSocialLogin(loginWithGoogle),
        loginWithFacebook: () => handleSocialLogin(loginWithFacebook),
        logout: logoutUser,
        resendVerification: resendVerificationEmail,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}