import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export const signUpFBTest = async (data) => {
  const { email, password } = data;
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    console.log(cred.user);
  } catch (error) {
    console.log(error);
  }
};

export const signInFBTest = async ({ email, password }) => {
  try {
    const user2 = await signInWithEmailAndPassword(auth, email, password);
    onAuthStateChanged(auth, (user) =>
      console.log(`auth state chaged ${user.email}`)
    );
    return user2;
  } catch (error) {
    console.log(error);
  }
};

export const subscribeToUserChanges = (setCurrentUser) => {
  return onAuthStateChanged(auth, (currentUser) => {
    setCurrentUser(currentUser);
  });
};
