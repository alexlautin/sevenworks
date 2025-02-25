import { markazi } from "../layout";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-center items-center px-5 py-4 gap-4 bg-navy w-full h-fit text-offWhite fixed top-0 left-0 right-0 z-10">
            <div className="flex flex-row w-full items-center gap-6">
                <div className={markazi.className}>
                    <h1 className="text-3xl font-bold text-offWhite">SevenWorks</h1>
                </div>

                <div className="w-[2px] h-[35px] bg-offWhite opacity-[25%] rounded-[1px]"></div>

                <nav className="flex flex-row gap-6 font-medium text-md">
                    <a href="../templates" className="hover:scale-[105%] transition-all duration-200">Resumes</a>
                    <a href="../templates" className="hover:scale-[105%] transition-all duration-200">Cover Letters</a>
                    <a href="#" className="hover:scale-[105%] transition-all duration-200">Examples</a>
                    <a href="#" className="hover:scale-[105%] transition-all duration-200">About</a>
                    <a href="../editor" className="hover:scale-[105%] transition-all duration-200">TEMP Editor</a>
                </nav>
            </div>
            <div className="flex flex-row justify-end items-center gap-5 text-offWhite">
                <a href="/register/login" className="border-2 border-offWhite px-3 py-[6px] rounded-xl whitespace-nowrap hover:bg-lightRed hover:border-lightRed transition-all duration-200">
                    Log In
                </a>
                <a href="/register/signup" className="bg-lightRed border-2 border-lightRed px-3 py-[6px] rounded-xl whitespace-nowrap hover:bg-darkRed hover:border-darkRed transition-all duration-200">
                    Sign Up
                </a>
            </div>
        </div>
    );
}