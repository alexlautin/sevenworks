import { FaRegCircleCheck } from "react-icons/fa6";

export default function Landing() {
    return (
        <div className="flex flex-row w-full min-h-screen justify-center items-center bg-gradient-to-b from-navy to-darkRed overflow-hidden">
            <div className="flex flex-col w-full h-full justify-center items-start gap-[32px] px-[100px] pb-[75px] text-offWhite">
                <h1 className="max-w-[700px] text-[60px] font-extrabold leading-tight tracking-wide">
                    Focus on your future, not formatting.
                </h1>
                <div className="w-[70%] h-[2px] bg-offWhite"></div>
                <div className="flex flex-col w-full h-fit place-content-center gap-[24px] py-[24px]">
                    <div className="flex flex-row justify-start items-center gap-[24px]">
                        <FaRegCircleCheck className="text-lightRed w-[30px] h-[30px]"/>
                        <p className="italic text-[22px] font-semibold text-offWhite">
                            Choose a fully customizable template
                        </p>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[24px]">
                        <FaRegCircleCheck className="text-lightRed w-[30px] h-[30px]"/>
                        <p className="italic text-[22px] font-semibold text-offWhite">
                            Pinpoint your weaknesses with AI
                        </p>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[24px]">
                        <FaRegCircleCheck className="text-lightRed w-[30px] h-[30px]"/>
                        <p className="italic text-[22px] font-semibold text-offWhite">
                            Save files to your account to edit later
                        </p>
                    </div>
                </div>
                <div className="flex flex-row w-fit h-fit gap-[12px] pl-[2px]">
                    <a href="/register/signup" className="font-medium text-[20px] text-offWhite hover:underline">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
}
