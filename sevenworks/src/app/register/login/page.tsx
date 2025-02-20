"use client";
import { useState } from "react";
import BackArrow from "../../icons/backArrow";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {  

    //defaults
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    //Function is called upon submitting
    const handleSubmit = async function(e: React.FormEvent){
        e.preventDefault();
        setPending(true);

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.ok) {
            router.push("/");

        }
        else if (res?.status == 401) {
            setError("Invalid credentials");
            setPending(false);
        }
        else {
            setError("Something went wrong");
            setPending(false);
        }
    }

    return(
        <div className = "flex items-center h-screen bg-gradient-to-b from-navy to-darkRed overflow-hidden">
            <a href = "../../" className = "absolute left-2 top-2">
                <BackArrow />
            </a>
            <form className = "flex w-screen justify-center" onSubmit={handleSubmit}>
                <div className = "flex flex-col w-[45%] h-[55%] bg-offWhite rounded-xl shadow-2xl py-4 px-6 gap-1 border-b-4 border-lightGray">
                    <h2 className = "text-[44px] font-extrabold text-navy">Welcome Back</h2>
                    <div className = "w-[80%] h-[2px] bg-navy"></div>
                    <div className = "flex flex-col h-fit gap-1 mt-4">
                        <p className = "text-lightGray text-[20px] font-medium pl-1">Email</p>
                        <input type = "email" placeholder = "example@email.com" name = "email" disabled = {pending}
                        value = {email} onChange = {(e) => setEmail(e.target.value)}
                        className = "w-[70%] h-[50px] rounded-xl pl-4 shadow-md text-navy invalid:border-darkRed"></input>
                    </div>
                    <div className = "flex flex-col h-fit gap-1 mt-4 mb-6">
                        <p className = "text-lightGray text-[20px] font-medium pl-1">Password</p>
                        <input type = "password" placeholder = "password" name = "password" disabled = {pending}
                        value = {password} onChange = {(e) => setPassword(e.target.value)}
                        className = "w-[70%] h-[50px] rounded-xl pl-4 shadow-md text-navy"></input>
                        <a href = "#" className = "flex justify-end text-gray-500 text-[14px] w-[70%] hover:text-black">Forgot Password?</a>
                    </div>
                    <button type = "submit" disabled = {pending}
                    className = "text-offWhite text-[20px] bg-lightRed w-fit px-4 py-2 rounded-lg hover:bg-darkRed">
                        Log In
                    </button>
                    <p>{error}</p>
                </div>
            </form>
        </div>
    );
}