"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { accountsEnabled } from "@/lib/config";
import { DemoRequired } from "./require-workspace";
import { Logo } from "./logo";

type Mode = "login" | "signup";

function friendly(e: unknown): string {
  const code = (e as { code?: string })?.code ?? "";
  if (code.includes("invalid-credential") || code.includes("wrong-password") || code.includes("user-not-found"))
    return "That email and password don't match an account.";
  if (code.includes("email-already-in-use")) return "There's already an account with that email. Try signing in.";
  if (code.includes("weak-password")) return "Use a password of at least 6 characters.";
  if (code.includes("popup-closed")) return "The sign-in window was closed before finishing.";
  if (code.includes("account-exists-with-different-credential")) return "That email already uses a different sign-in method.";
  return e instanceof Error ? e.message : "Something went wrong. Try again.";
}

export function AuthForm({ mode }: { mode: Mode }) {
  if (!accountsEnabled) {
    return <DemoRequired title={mode === "login" ? "Sign-in is turned off here" : "Sign-up is turned off here"} />;
  }
  return <AccountForm mode={mode} />;
}

function AccountForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const run = async (fn: () => Promise<unknown>) => {
    setBusy(true);
    setError(null);
    try {
      await fn();
      router.replace("/dashboard");
    } catch (e) {
      setError(friendly(e));
      setBusy(false);
    }
  };

  const withEmail = (e: FormEvent) => {
    e.preventDefault();
    run(async () => {
      const [{ getFirebaseAuth }, a] = await Promise.all([import("@/lib/firebase"), import("firebase/auth")]);
      const auth = getFirebaseAuth();
      if (mode === "login") return a.signInWithEmailAndPassword(auth, email, password);
      const cred = await a.createUserWithEmailAndPassword(auth, email, password);
      if (name.trim()) await a.updateProfile(cred.user, { displayName: name.trim() });
    });
  };

  const withProvider = (which: "google" | "github") =>
    run(async () => {
      const [fb, { signInWithPopup }] = await Promise.all([import("@/lib/firebase"), import("firebase/auth")]);
      return signInWithPopup(fb.getFirebaseAuth(), which === "google" ? fb.googleProvider() : fb.githubProvider());
    });

  return (
    <main className="mx-auto flex min-h-[calc(100dvh-var(--banner-h,0px))] max-w-sm flex-col justify-center px-4 py-12">
      <Logo className="self-center" />
      <div className="card mt-8 p-6 sm:p-8">
        <h1 className="font-display text-2xl font-semibold">{mode === "login" ? "Welcome back" : "Create your account"}</h1>
        <p className="mt-1 text-sm text-subtle">
          {mode === "login" ? "Sign in to keep working on your resumes." : "Save resumes and pick up where you left off."}
        </p>

        <div className="mt-6 grid gap-2">
          <button className="btn btn-secondary" disabled={busy} onClick={() => withProvider("google")}>
            <FaGoogle /> Continue with Google
          </button>
          <button className="btn btn-secondary" disabled={busy} onClick={() => withProvider("github")}>
            <FaGithub /> Continue with GitHub
          </button>
        </div>

        <div className="my-6 flex items-center gap-3 text-xs text-subtle">
          <span className="h-px flex-1 bg-line" /> or with email <span className="h-px flex-1 bg-line" />
        </div>

        <form onSubmit={withEmail} className="grid gap-4">
          {mode === "signup" && (
            <label>
              <span className="field-label">Name</span>
              <input className="field" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          )}
          <label>
            <span className="field-label">Email</span>
            <input className="field" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <span className="field-label">Password</span>
            <input
              className="field"
              type="password"
              required
              minLength={6}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button className="btn btn-primary" disabled={busy}>
            {busy ? "One moment…" : mode === "login" ? "Sign in" : "Create account"}
          </button>
        </form>
      </div>
      <p className="mt-6 text-center text-sm text-subtle">
        {mode === "login" ? "New here? " : "Already have an account? "}
        <Link href={mode === "login" ? "/register/signup" : "/register/login"} className="font-medium text-ink underline underline-offset-2">
          {mode === "login" ? "Create an account" : "Sign in"}
        </Link>
        {" · "}
        <Link href="/demo" className="font-medium text-ink underline underline-offset-2">
          Try the demo
        </Link>
      </p>
    </main>
  );
}
