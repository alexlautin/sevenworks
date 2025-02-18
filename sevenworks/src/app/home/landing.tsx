import Check from "../icons/check";
import { HeaderSimple } from "./HeaderSimple";

export default function Landing() {
<<<<<<< HEAD
    return (
        <div className="flex flex-col w-full min-h-screen bg-cover bg-center bg-gradient-to-b from-navy to-darkRed overflow-hidden" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
            <HeaderSimple />
            <div className="flex flex-col w-full h-full justify-center items-start gap-[22px] px-[100px] pb-[75px]">
                <h1 className="max-w-[600px] text-[50px] text-offWhite font-extrabold">
=======
    // my favorite function
    return(
        <div className = "flex flex-row w-full h-screen place-content-center gap-3 px-[100px] pb-[75px] bg-cover bg-gradient-to-b from-navy to-darkRed">
            <div className = "flex flex-col w-full justify-center items-start gap-[22px]">
                <h1 className = "max-w-[600px] text-[50px] text-offWhite font-extrabold">
>>>>>>> 1e9479eea0329735e8da4ceb3da09561efc8a3f6
                    Focus on your future, not formatting
                </h1>
                <div className="w-[80%] h-[2px] bg-offWhite"></div>
                <div className="flex flex-col w-full h-fit place-content-center gap-[20px] py-[20px]">
                    <div className="flex flex-row justify-start items-center gap-[22px]">
                        <Check />
                        <p className="italic text-[24px] font-bold text-offWhite">
                            Choose a fully customizable template
                        </p>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[22px]">
                        <Check />
                        <p className="italic text-[24px] font-bold text-offWhite">
                            Pinpoint your weaknesses with AI
                        </p>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[22px]">
                        <Check />
                        <p className="italic text-[24px] font-bold text-offWhite">
                            Save files to your account to edit later
                        </p>
                    </div>
                </div>
<<<<<<< HEAD
                <div className="flex flex-row w-fit h-fit gap-[10px] pl-[2px]">
                    <button className="font-medium text-[20px]">Get Started</button>
=======
                <div className = "flex flex-row w-fit h-fit gap-[10px] pl-[2px]">
                    <a href = "#" className = "font-medium text-[20px]">Get Started</a>
>>>>>>> 1e9479eea0329735e8da4ceb3da09561efc8a3f6
                </div>
            </div>
        </div>
    );
}