export default function TemplatePreview() {
    return(
        <div className = "flex flex-col items-center pt-10 gap-6 h-screen bg-offWhite">
            <div className = "flex py-1 gap-2 justify-center">
                <h2 className = "text-[38px] font-extrabold">
                    <span className = "text-navy">Templates for your</span> 
                    <span className = "italic text-lightRed"> every need</span>
                </h2>
            </div>
            <div className = "w-[65%] h-[2px] bg-lightGray"></div>
        </div>
    );
}