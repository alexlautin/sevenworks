"use client";
import { useState } from "react";
import BackArrow from "../../icons/backArrow";
import { useRouter } from "next/navigation";

export default function Signup() {
    //defaults
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    //Function is called when submit button pressed
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);

        //res stores result of the sign-up
        const res = await fetch("../../api/auth/register/signup", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(form),
        });

        const data = await res.json(); //contains all the json data of the result
        if (res.ok) {
            setPending(false);

            router.push("/register/login"); //account created successfully, redirect to login page
        } 
        else if (res.status === 400 || res.status === 500) {
            setError(data.message);
            setPending(false);
        }

    }

    return(
        <div className = "flex items-center h-screen bg-gradient-to-b from-navy to-darkRed overflow-hidden">
            <a href = "../../" className = "absolute left-2 top-2">
                <BackArrow />
            </a>
            <form className = "flex w-screen justify-center" onSubmit = {handleSubmit}>
                <div className = "flex flex-col w-[45%] h-[55%] bg-offWhite rounded-xl shadow-2xl py-4 px-6 gap-1 border-b-4 border-lightGray">
                    <h2 className = "text-[44px] font-extrabold text-navy">Create an Account</h2>
                    <div className = "w-[80%] h-[2px] bg-navy"></div>
                    <div className = "flex flex-col h-fit gap-1 mt-4">
                        <p className = "text-lightGray text-[20px] font-medium pl-1">Email</p>
                        <input type = "email" placeholder = "example@email.com" name = "email" disabled = {pending} 
                        value = {form.email} onChange = {(e) => setForm({...form, email:e.target.value})}
                        className = "w-[70%] h-[50px] rounded-xl pl-4 shadow-md text-navy invalid:border-darkRed"></input>
                    </div>
                    <div className = "flex flex-col h-fit gap-1 mt-4">
                        <p className = "text-lightGray text-[20px] font-medium pl-1">Password</p>
                        <input type = "password" placeholder = "password" name = "password" disabled = {pending} 
                        value = {form.password} onChange = {(e) => setForm({...form, password:e.target.value})}
                        className = "w-[70%] h-[50px] rounded-xl pl-4 shadow-md text-navy"></input>
                    </div>
                    <div className = "flex flex-col h-fit gap-1 mt-4 mb-6">
                        <p className = "text-lightGray text-[20px] font-medium pl-1">Confirm Password</p>
                        <input type = "password" placeholder = "confirm password" name = "password" disabled = {pending} 
                        value = {form.confirmPassword} onChange = {(e) => setForm({...form, confirmPassword:e.target.value})}
                        className = "w-[70%] h-[50px] rounded-xl pl-4 shadow-md text-navy"></input>
                    </div>
                    <button type = "submit" disabled = {pending}
                    className = "text-offWhite text-[20px] bg-lightRed w-fit px-4 py-2 rounded-lg hover:bg-darkRed">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}