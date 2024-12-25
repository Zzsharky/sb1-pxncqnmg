import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function RegisterForm() {
  const { register, error } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [termsError, setTermsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTermsError(false);

    if (!acceptTerms) {
      setTermsError(true);
      return;
    }

    setIsLoading(true);
    try {
      await register(email, password, name, acceptNewsletter);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nom
        </label>
        <div className="relative">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Votre nom"
            required
          />
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="your@email.com"
            required
          />
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mot de passe
        </label>
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="••••••••"
            required
            minLength={6}
          />
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="terms" className="text-sm text-gray-700">
              J'accepte les{' '}
              <a 
                href="https://kaswila.com/conditions-generales-dutilisation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600"
              >
                conditions générales d'utilisation
              </a>
              {' '}et la{' '}
              <a 
                href="https://kaswila.com/politique-de-protection-des-donnees-de-lapplication-kaswila/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600"
              >
                politique de protection des données
              </a>
            </label>
          </div>
        </div>
        {termsError && (
          <p className="text-red-500 text-sm">
            Vous devez accepter les conditions générales pour continuer
          </p>
        )}

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="newsletter"
              type="checkbox"
              checked={acceptNewsletter}
              onChange={(e) => setAcceptNewsletter(e.target.checked)}
              className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="newsletter" className="text-sm text-gray-700">
              J'accepte de recevoir le menu de la semaine et les nouveautés sur l'application (recettes & fonctionnalités) par mail
            </label>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Inscription...' : 'S\'inscrire'}
      </button>
    </form>
  );
}