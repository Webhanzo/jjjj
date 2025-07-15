
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

// Function to initialize Firebase and return the app instance
function initializeFirebaseApp() {
  // Check if all required environment variables are present
  const requiredConfigKeys: (keyof FirebaseOptions)[] = ['apiKey', 'authDomain', 'projectId', 'databaseURL'];
  const missingKeys = requiredConfigKeys.filter(key => !firebaseConfig[key]);

  if (missingKeys.length > 0) {
    console.error(`Firebase configuration is incomplete. Missing keys: ${missingKeys.join(', ')}. Please check your .env file.`);
    // Return null or throw an error to prevent initialization with incomplete config
    return null;
  }

  // Initialize Firebase only if it hasn't been initialized yet
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  } else {
    return getApp();
  }
}

const app = initializeFirebaseApp();

// Initialize services only if the app was successfully initialized
const auth = app ? getAuth(app) : null;
const db = app ? getDatabase(app) : null;

if (!auth || !db) {
    console.error("Failed to initialize Firebase services. Auth or DB is null.");
}

export { app, auth, db };
