import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function EmailVerification() {
  const { user, resendVerification } = useAuth();
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  if (!user || user.emailVerified) {
    return null;
  }

  const handleResend = async () => {
    setIsResending(true);
    try {
      await resendVerification();
      setResendSuccess(true);
      setTimeout(() => setResendSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to resend verification email:', error);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
      <div className="flex items-start">
        <Mail className="h-5 w-5 text-yellow-400 mt-0.5" />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Vérification de l'email requise
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Un email de vérification a été envoyé à {user.email}.
              Veuillez vérifier votre boîte de réception et cliquer sur le lien de vérification.
            </p>
          </div>
          <div className="mt-3">
            <button
              onClick={handleResend}
              disabled={isResending || resendSuccess}
              className="text-sm font-medium text-yellow-800 hover:text-yellow-900 disabled:opacity-50"
            >
              {isResending ? 'Envoi en cours...' : 
               resendSuccess ? 'Email envoyé !' : 
               'Renvoyer l\'email de vérification'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}