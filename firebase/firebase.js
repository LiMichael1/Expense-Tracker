import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
  }

const app = initializeApp(firebaseConfig)

// Firestore
export const db = getFirestore(app)

// Analytics
export const analytics = getAnalytics(app)