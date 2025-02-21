import Logo from "../icons/tmpLogo";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-center items-center p-6 gap-4 bg-[#111111] text-white w-full h-fit text-offWhite fixed top-0 left-0 right-0 z-10 shadow-md">
            <div className="flex flex-row justify-between w-full items-center gap-8">
                <Logo />
                <nav className="flex flex-row gap-10 font-medium text-lg">
                    <a href="../templates" className="hover:text-teal-400 transition-colors duration-200">Resumes</a>
                    <a href="../templates" className="hover:text-teal-400 transition-colors duration-200">Cover Letters</a>
                    <a href="#" className="hover:text-teal-400 transition-colors duration-200">Examples</a>
                    <a href="#" className="hover:text-teal-400 transition-colors duration-200">About</a>
                </nav>
            </div>
            <div className="flex flex-row justify-end items-center gap-6 ml-auto">
                <a href="/register/login" className="text-teal-400 border-2 border-teal-400 px-6 py-2 rounded-lg whitespace-nowrap hover:bg-teal-400 hover:text-black transition-colors duration-200">
                    Log In
                </a>
                <a href="/register/signup" className="bg-teal-400 text-black border-2 border-teal-400 px-6 py-2 rounded-lg whitespace-nowrap hover:bg-teal-500 hover:border-teal-500 transition-colors duration-200">
                    Sign Up
                </a>
            </div>
        </div>
    );
}