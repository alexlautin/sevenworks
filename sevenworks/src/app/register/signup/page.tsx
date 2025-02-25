// filepath: /Users/alexlautin/Documents/GitHub/sevenworks/sevenworks/src/app/register/signup/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { IoIosArrowBack } from "react-icons/io";

export default function Signup() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [pending, setPending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            setPending(false);
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
            console.log("User signed up:", userCredential.user); // Now the variable is "used"
            setPending(false);
            router.push("/register/login");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred");
            }
            setPending(false);
        }
        
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-navy to-darkRed">
            <a href="../../" className="absolute left-2 top-3">
                <IoIosArrowBack className="text-offWhite text-[45px] hover:text-neutral-400"/>
            </a>
            <form onSubmit={handleSubmit} className="flex flex-col w-[450px] bg-offWhite p-6 rounded-xl shadow-2xl border-b-4 border-lightGray">
                <h2 className="text-[32px] font-extrabold text-navy text-center">Create an Account</h2>

                <div className="flex justify-center">
                    <div className="w-[90%] h-[2px] bg-navy mt-2 mb-5"></div>
                </div>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <div className="flex flex-col h-fit gap-1">
                    <p className="text-lightGray text-[16px] font-medium pl-1">Email</p>
                    <input
                        type="email"
                        placeholder="example@email.com"
                        name="email"
                        disabled={pending}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full h-[50px] rounded-xl pl-4 shadow-md text-navy border border-gray-200"
                    />
                </div>
                <div className="flex flex-col h-fit gap-1 mt-5">
                    <p className="text-lightGray text-[16px] font-medium pl-1">Password</p>
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        disabled={pending}
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="w-full h-[50px] rounded-xl pl-4 shadow-md text-navy border border-gray-200"
                    />
                </div>
                <div className="flex flex-col h-fit gap-1 mt-5">
                    <p className="text-lightGray text-[16px] font-medium pl-1">Confirm Password</p>
                    <input
                        type="password"
                        placeholder="confirm password"
                        name="confirmPassword"
                        disabled={pending}
                        value={form.confirmPassword}
                        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                        className="w-full h-[50px] rounded-xl pl-4 shadow-md text-navy border border-gray-200"
                    />
                </div>
                <div className="flex justify-center mt-12">
                    <button
                        type="submit"
                        disabled={pending}
                        className="w-[80%] text-offWhite text-[18px] bg-lightRed py-3 rounded-lg hover:bg-darkRed transition duration:200"
                    >
                        Sign Up
                    </button>
                </div>
                <p className="text-[14px] text-gray-500 text-center mt-2">
                    Already have an account?&nbsp;
                    <a href="./login" className="text-sky-600 hover:underline">Log in</a>
                </p>
            </form>
        </div>
    );
}