"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { User } from "firebase/auth";
import { accountsEnabled } from "@/lib/config";

interface AuthState {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthState>({ user: null, loading: accountsEnabled });

// Tracks the Firebase user. With accounts turned off it never touches Firebase.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({ user: null, loading: accountsEnabled });

  useEffect(() => {
    if (!accountsEnabled) return;
    let unsubscribe = () => {};
    Promise.all([import("@/lib/firebase"), import("firebase/auth")]).then(([{ getFirebaseAuth }, { onAuthStateChanged }]) => {
      unsubscribe = onAuthStateChanged(getFirebaseAuth(), (user) => setState({ user, loading: false }));
    });
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export async function signOutUser() {
  if (!accountsEnabled) return;
  const [{ getFirebaseAuth }, { signOut }] = await Promise.all([import("@/lib/firebase"), import("firebase/auth")]);
  await signOut(getFirebaseAuth());
}
