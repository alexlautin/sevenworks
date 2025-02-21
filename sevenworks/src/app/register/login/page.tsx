"use client";
import { useState } from "react";
import BackArrow from "../../icons/backArrow";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");
    const [resetMessage, setResetMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed up:", userCredential.user);
            setPending(false);
            router.push("/landing"); // Redirect to the landing page
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred");
            }
            setPending(false);
        }
    };

    const handlePasswordReset = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            setResetMessage("Password reset email sent!");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred");
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-navy to-darkRed">
            <a href="../../" className="absolute left-2 top-2">
                <BackArrow />
            </a>
            <form onSubmit={handleSubmit} className="flex flex-col w-[400px] bg-offWhite p-6 rounded-xl shadow-2xl border-b-4 border-lightGray">
                <h2 className="text-[32px] font-extrabold text-navy text-center">Welcome Back</h2>
                <div className="w-full h-[2px] bg-navy my-2"></div>
                
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-lightGray text-[16px] font-medium">Email</p>
                    <input 
                        type="email" 
                        placeholder="example@email.com" 
                        disabled={pending}
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-[50px] rounded-xl pl-4 shadow-md text-navy border border-gray-300 focus:ring-2 focus:ring-navy"
                    />
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-lightGray text-[16px] font-medium">Password</p>
                    <input 
                        type="password" 
                        placeholder="password" 
                        disabled={pending}
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-[50px] rounded-xl pl-4 shadow-md text-navy border border-gray-300 focus:ring-2 focus:ring-navy"
                    />
                    <button 
                        type="button" 
                        onClick={handlePasswordReset} 
                        className="text-gray-500 text-[14px] text-right hover:text-black"
                    >
                        Forgot Password?
                    </button>
                </div>

                <div className="flex justify-center mt-4">
                    <button 
                        type="submit" 
                        disabled={pending}
                        className="w-[80%] text-white text-[18px] bg-lightRed py-3 rounded-lg hover:bg-darkRed transition duration-200"
                    >
                        Log In
                    </button>
                </div>

                {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                {resetMessage && <p className="text-green-500 text-center mt-2">{resetMessage}</p>}
            </form>
        </div>
    );
}