"use client";

import Check from "../icons/check";

export default function Landing() {
    return (
        <div className="flex flex-col w-full min-h-screen justify-center bg-[#111111] text-white overflow-hidden">
            <div className="flex flex-col w-full h-full justify-center items-start gap-[32px] px-[100px] pb-[75px]">
                <h1 className="max-w-[700px] text-[60px] font-extrabold text-offWhite leading-tight tracking-wide">
                    Focus on your future, not the formatting.
                </h1>
                <div className="w-[80%] h-[1px] bg-offWhite opacity-30"></div>
                <div className="flex flex-col w-full h-fit place-content-center gap-[24px] py-[24px]">
                    <div className="flex flex-row justify-start items-center gap-[24px]">
                        <Check />
                        <p className="italic text-[22px] font-semibold text-offWhite">
                            Choose a fully customizable template
                        </p>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[24px]">
                        <Check />
                        <p className="italic text-[22px] font-semibold text-offWhite">
                            Pinpoint your weaknesses with AI
                        </p>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[24px]">
                        <Check />
                        <p className="italic text-[22px] font-semibold text-offWhite">
                            Save files to your account to edit later
                        </p>
                    </div>
                </div>
                <div className="flex flex-row w-fit h-fit gap-[12px] pl-[2px]">
                    <a href="/register/signup" className="font-medium text-[20px] text-teal-400 hover:text-teal-300 transition-colors duration-300">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
}
