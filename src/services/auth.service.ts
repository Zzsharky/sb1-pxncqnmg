import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  sendEmailVerification,
  User as FirebaseUser,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { User } from '../context/AuthContext';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const mapFirebaseUser = (firebaseUser: FirebaseUser, newsletter?: boolean): User => ({
  id: firebaseUser.uid,
  name: firebaseUser.displayName || '',
  email: firebaseUser.email || '',
  photoUrl: firebaseUser.photoURL || undefined,
  provider: 'email',
  emailVerified: firebaseUser.emailVerified,
  newsletter
});

export const loginWithEmail = async (email: string, password: string): Promise<User> => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return mapFirebaseUser(result.user);
};

export const registerWithEmail = async (
  email: string, 
  password: string, 
  name: string,
  newsletter: boolean
): Promise<User> => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  
  // Save additional user data to Firestore
  await setDoc(doc(db, 'users', result.user.uid), {
    name,
    email,
    newsletter,
    createdAt: new Date().toISOString()
  });

  await sendEmailVerification(result.user);
  return mapFirebaseUser(result.user, newsletter);
};

export const resendVerificationEmail = async () => {
  if (auth.currentUser) {
    await sendEmailVerification(auth.currentUser);
  }
};

export const resetPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};

export const loginWithGoogle = async (): Promise<User> => {
  const result = await signInWithPopup(auth, googleProvider);
  return mapFirebaseUser(result.user);
};

export const loginWithFacebook = async (): Promise<User> => {
  const result = await signInWithPopup(auth, facebookProvider);
  return mapFirebaseUser(result.user);
};

export const logoutUser = () => signOut(auth);