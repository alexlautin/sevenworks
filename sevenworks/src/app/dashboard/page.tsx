"use client";

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Markazi_Text } from "next/font/google";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { signOut } from "firebase/auth";


const markazi = Markazi_Text({
  subsets: ["latin"],
  variable: "--font-markazi",
});


async function handleSignOut(){
  try {
    await signOut(auth);
  } catch (error){
    console.error("Sign out error: ", error);
  }
};

// Sidebar Component
const Sidebar = () => {

  return (
    <aside className="w-64 h-screen bg-navy text-offWhite p-6 fixed">
      <div className="flex flex-row w-full items-center mb-2">
        <div className={markazi.className}>
          <Link href="/" className="text-3xl font-bold text-offWhite hover:underline">
            SevenWorks
          </Link>
        </div>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/templates" className="hover:underline">
              Resumes
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/editor" className="hover:underline">
              Editor
            </Link>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">Settings</a>
          </li>
          <li className="mb-4">
            <Link href="/profile" className="hover:underline">
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <button onClick={handleSignOut} className="hover:underline">
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
};

interface Resume {
  id: string;
  title: string;
  description: string;
  image?: string;
}

// ResumeCard Component using Next.js <Image>
const ResumeCard = ({ resume }: { resume: Resume }) => (
  <div className="flex flex-col items-center w-full max-w-xs">
    {/* Document Thumbnail */}
    <div className="relative w-full aspect-[8.5/11] bg-white rounded-md shadow hover:shadow-lg overflow-hidden">
      {resume.image && (
        <Image
          src={resume.image}
          alt={resume.title}
          fill
          className="object-cover"
        />
      )}
    </div>

    {/* Title & Description */}
    <div className="mt-2 text-center">
      <h3 className="text-sm font-semibold">{resume.title}</h3>
      <p className="text-xs text-gray-600">{resume.description}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  // Two separate state variables for each section
  const [templateResumes, setTemplateResumes] = useState<Resume[]>([]);
  const [editingResumes, setEditingResumes] = useState<Resume[]>([]);

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push("/register/login");
    }
  }, [user, loading, router]);

  // Fetch resumes for "Resume Templates" from Firestore collection "resume_templates"
  useEffect(() => {
    const fetchTemplateResumes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "resume_templates"));
        const templatesData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.name,
            description: data.category,
            image: "/sample-business-resume.png",
          };
        });
        setTemplateResumes(templatesData);
      } catch (error) {
        console.error("Error fetching resume templates:", error);
      }
    };

    fetchTemplateResumes();
  }, []);

  // Fetch resumes for "Editing Resumes" from Firestore collection "editing_resumes"
  useEffect(() => {
    const fetchEditingResumes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "editing_resumes"));
        const editingData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.name,
            description: data.category,
            image: "/sample-business-resume.png",
          };
        });
        setEditingResumes(editingData);
      } catch (error) {
        console.error("Error fetching editing resumes:", error);
      }
    };

    fetchEditingResumes();
  }, []);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <div className="text-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
          <h2 className="text-xl font-semibold">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 h-screen p-8 bg-gray-100 text-navy ml-64 overflow-y-auto">
        {/* Resume Templates Section (Horizontal Scrolling) */}
        <h1 className="text-3xl font-bold mb-8">Resume Templates</h1>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {templateResumes.map((resume) => (
            <div key={resume.id} className="flex-none w-full max-w-xs">
              <ResumeCard resume={resume} />
            </div>
          ))}
        </div>

        {/* Editing Resumes Section */}
        <h1 className="text-3xl font-bold my-8">Editing Resumes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {editingResumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
