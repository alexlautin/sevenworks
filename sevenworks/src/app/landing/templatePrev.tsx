export default function TemplatePreview() {
    return (
        <div className="flex flex-col w-full min-h-screen justify-center bg-[#111111] text-white overflow-hidden">
            <div className="flex flex-col w-full h-full justify-center items-start gap-[32px] px-[100px] pb-[75px]">
                <h2 className="max-w-[700px] text-[60px] font-extrabold text-offWhite leading-tight tracking-wide">
                    Templates for your <span className="italic text-lightRed">every need</span>
                </h2>
            </div>
        </div>
    );
}