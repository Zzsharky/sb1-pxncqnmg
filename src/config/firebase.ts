import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBuRrmVim-qceL695EuKaXasqR3OjlNlFY",
  authDomain: "kaswila-7caa7.firebaseapp.com",
  projectId: "kaswila-7caa7",
  storageBucket: "kaswila-7caa7.firebasestorage.app",
  messagingSenderId: "675314422628",
  appId: "1:675314422628:web:5808ee7db093f848226071",
  measurementId: "G-F3958VXDXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;