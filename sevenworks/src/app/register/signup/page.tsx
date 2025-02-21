"use client";
import { useState } from "react";
import BackArrow from "../../icons/backArrow";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase"; // Adjust the path based on your file structure
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function Signup() {
    const [form, setForm] = useState({
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
            const user = userCredential.user;
            setPending(false);
            router.push("/register/login");
        } catch (error: any) {
            setError(error.message);
            setPending(false);
        }
    };

    return (
        <div className="flex items-center h-screen bg-gradient-to-b from-navy to-darkRed overflow-hidden">
            <a href="../../" className="absolute left-2 top-2">
                <BackArrow />
            </a>
            <form className="flex w-screen justify-center" onSubmit={handleSubmit}>
                <div className="flex flex-col w-[45%] h-[55%] bg-offWhite rounded-xl shadow-2xl py-4 px-6 gap-1 border-b-4 border-lightGray">
                    <h2 className="text-[44px] font-extrabold text-navy">Create an Account</h2>
                    <div className="w-[80%] h-[2px] bg-navy"></div>
                    <div className="flex flex-col h-fit gap-1 mt-4">
                        <p className="text-lightGray text-[20px] font-medium pl-1">Email</p>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            name="email"
                            disabled={pending}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-[70%] h-[50px] rounded-xl pl-4 shadow-md text-navy invalid:border-darkRed"
                        />
                    </div>
                    <div className="flex flex-col h-fit gap-1 mt-4">
                        <p className="text-lightGray text-[20px] font-medium pl-1">Password</p>
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            disabled={pending}
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            className="w-[70%] h-[50px] rounded-xl pl-4 shadow-md text-navy"
                        />
                    </div>
                    <div className="flex flex-col h-fit gap-1 mt-4 mb-6">
                        <p className="text-lightGray text-[20px] font-medium pl-1">Confirm Password</p>
                        <input
                            type="password"
                            placeholder="confirm password"
                            name="confirmPassword"
                            disabled={pending}
                            value={form.confirmPassword}
                            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                            className="w-[70%] h-[50px] rounded-xl pl-4 shadow-md text-navy"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={pending}
                        className="text-offWhite text-[20px] bg-lightRed w-fit px-4 py-2 rounded-lg hover:bg-darkRed"
                    >
                        Sign Up
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
            </form>
        </div>
    );
}