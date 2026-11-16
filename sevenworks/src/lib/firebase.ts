// Firebase client, created lazily and only when it is configured and accounts are enabled.
// Nothing here runs in demo mode or on a portfolio deployment, so no network calls happen there.
import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { accountsEnabled, firebaseConfig } from "./config";

let app: FirebaseApp | null = null;

function firebaseApp(): FirebaseApp {
  if (!accountsEnabled) throw new Error("Accounts are turned off on this deployment.");
  if (!app) app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return app;
}

export const getFirebaseAuth = (): Auth => getAuth(firebaseApp());
export const getDb = (): Firestore => getFirestore(firebaseApp());
export const googleProvider = () => new GoogleAuthProvider();
export const githubProvider = () => new GithubAuthProvider();
