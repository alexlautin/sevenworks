// src/app/profile/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, updateProfile, updateEmail, User } from "firebase/auth";
import { app } from "../lib/firebase"; // adjust the import to your Firebase initialization file

const ProfilePage = () => {
  const auth = getAuth(app);
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || "");
        setEmail(currentUser.email || "");
      } else {
        // Redirect to login if not authenticated
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, router]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      if (user) {
        // Update displayName if changed
        if (user.displayName !== displayName) {
          await updateProfile(user, { displayName });
        }
        // Update email if changed
        if (user.email !== email) {
          await updateEmail(user, email);
        }
        setMessage("Profile updated successfully.");
      }
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message || "Failed to update profile.");
      } else {
        setError("Failed to update profile.");
      }
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-gray-800">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Your Profile</h1>
      {error && <p className="mb-4 text-gray-800">{error}</p>}
      {message && <p className="mb-4 text-gray-800">{message}</p>}
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Display Name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800"
            placeholder="Enter your display name"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800"
            placeholder="Enter your email address"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;