import Check from "../icons/check";

export default function Landing() {
    return(
        <div className = "flex flex-row h-[700px] place-content-center gap-3 px-[100px] pb-[75px] bg-gradient-to-b from-navy to-darkRed">
            <div className = "flex flex-col w-full h-full justify-center items-start gap-[22px]">
                <h1 className = "max-w-[600px] text-[50px] text-offWhite font-extrabold">
                    Focus on your future, not formatting
                </h1>
                <div className = "w-[80%] h-[2px] bg-offWhite"></div>
                <div className = "flex flex-col w-full h-fit place-content-center gap-[20px] py-[20px]">
                    <div className = "flex flex-row justify-start items-center gap-[22px]">
                        <Check />
                        <p className = "italic text-[24px] font-bold text-offWhite">
                            Choose a fully customizable template
                        </p>
                    </div>
                    <div className = "flex flex-row justify-start items-center gap-[22px]">
                        <Check />
                        <p className = "italic text-[24px] font-bold text-offWhite">
                            Pinpoint your weaknesses with AI
                        </p>
                    </div>
                    <div className = "flex flex-row justify-start items-center gap-[22px]">
                        <Check />
                        <p className = "italic text-[24px] font-bold text-offWhite">
                            Save files to your account to edit later
                        </p>
                    </div>
                </div>
                <div className = "flex flex-row w-fit h-fit gap-[10px] pl-[2px]">
                    <button className = "font-medium text-[20px]">Get Started</button>
                </div>
            </div>

        </div>
    );
}