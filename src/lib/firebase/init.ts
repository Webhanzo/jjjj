// src/lib/firebase/init.ts
import { getApp, getApps, initializeApp, type FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// A function to check if all required Firebase config values are present.
const isConfigValid = (config: FirebaseOptions): boolean => {
    return Object.values(config).every(value => typeof value === 'string' && value.length > 0);
};

// Initialize Firebase.
// We only initialize the app if the config is valid and no app has been initialized yet.
const app = isConfigValid(firebaseConfig) && !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps().length ? getApp() : null;

// Conditionally export auth and db. They will be null if the app isn't initialized.
// Components using these should handle the null case gracefully if necessary.
const auth = app ? getAuth(app) : null;
const db = app ? getDatabase(app) : null;

// Log an error if the app could not be initialized.
// This is helpful for debugging configuration issues.
if (!app) {
  console.error("Firebase configuration is invalid or incomplete. Please check your environment variables.");
}

export { app, auth, db };
