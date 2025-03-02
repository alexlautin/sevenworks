// pages/dashboard.tsx
import React from "react";

// Sidebar Component
const Sidebar = () => (
    <aside className="w-64 h-screen bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav>
            <ul>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Home</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Resumes</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Settings</a>
                </li>
                <li className="mb-4">
                    <a href="/profile" className="hover:underline">Profile</a>
                </li>
            </ul>
        </nav>
    </aside>
);

// Resume Card Component
interface Resume {
    id: number;
    title: string;
    description: string;
}

const ResumeCard = ({ resume }: { resume: Resume }) => (
    <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-2">{resume.title}</h3>
        <p className="text-gray-700">{resume.description}</p>
    </div>
);

// Dashboard Page
const Dashboard = () => {
    const resumes: Resume[] = [
        { id: 1, title: "EXAMPLE 1", description: "Description 1." },
        { id: 2, title: "EXAMPLE 2", description: "Description 2." },
        { id: 3, title: "EXAMPLE 3", description: "Description 3." },
    
    ];

    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8 bg-gray-100 min-h-screen text-gray-800">
                <h1 className="text-3xl font-bold mb-8">Resumes</h1>
                <div className="space-y-6">
                    {resumes.map((resume) => (
                        <ResumeCard key={resume.id} resume={resume} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;