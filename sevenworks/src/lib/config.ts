// Deployment-wide switches, read from NEXT_PUBLIC_* env vars at build time.

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// True when the Firebase web config needed for Auth and Firestore is present.
export const firebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId,
);

// NEXT_PUBLIC_PORTFOLIO_MODE=true makes the deployment demo-only, even if Firebase keys are set.
export const portfolioMode = process.env.NEXT_PUBLIC_PORTFOLIO_MODE === "true";

// Sign-in, sign-up and saved resumes only work when Firebase is set up and portfolio mode is off.
export const accountsEnabled = firebaseConfigured && !portfolioMode;
