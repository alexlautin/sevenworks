"use client";
import { Markazi_Text } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import Link from "next/link";
import { useFormContext } from "./formcontext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import BusinessTemplate from "./business-template";

const NewPDFDownloadLink = dynamic(() => Promise.resolve(PDFDownloadLink), { ssr: false });

const markazi = Markazi_Text({
    subsets: ["latin"],
    variable: "--font-markazi",
});

async function handleSignOut(){
    try {
      await signOut(auth);
    } catch (error){
      console.error("Sign out error: ", error);
    }
  };

export default function Navbar() {
    const [fontSizeDropdownOpen, setFontSizeDropdownOpen] = useState(false);
    const [fontDropdownOpen, setFontDropdownOpen] = useState(false);
    const [showAutosave, setShowAutosave] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const { formData, setFormData} = useFormContext();
    

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setFontDropdownOpen(false);
                setFontSizeDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navRef]);

    function handleFontClick(value: string) {
        setFormData("font", value);
        console.log(formData);
    }

    return (
        <div className="bg-white">
            <div className="pt-18 pb-18 px-0">
                <nav ref={navRef} className="text-black grid grid-cols-3 items-center pt-2 pb-2 w-full text-nowrap font-semibold bg-[#E6E6E6] rounded-lg px-4">
                    <div className="flex items-center gap-6">
                        <Link href="/" className={`${markazi.className} text-3xl`}>SevenWorks</Link>
                    </div>
                    <div className="flex justify-center items-center gap-6">
                        <span className="flex items-center gap-2">
                            <Image src="/zoom-out.svg" alt="zoom out" width={24} height={24} className="hover:scale-110 transition-transform duration-200" />
                            <span className="text-black !text-black">Zoom</span>
                            <Image src="/zoom-in.svg" alt="zoom in" width={24} height={24} className="hover:scale-110 transition-transform duration-200" />
                        </span>
                        <span className="relative flex items-center gap-2 cursor-pointer transition-opacity duration-200" onClick={() => {
                            setFontDropdownOpen(!fontDropdownOpen);
                            setFontSizeDropdownOpen(false);
                        }}>
                            <div className="flex hover:opacity-65"> 
                                <span>Font</span>
                                <Image src="/chevron-down.svg" alt="chevron down" width={24} height={24}/>
                            </div>
                            {fontDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
                                    <ul className="py-2">
                                        <li className="px-4 py-1 hover:bg-gray-200 transition-colors duration-200 cursor-pointer font-[Arial]" onClick={() => handleFontClick("Arial")}>Arial</li>
                                        <li className="px-4 py-1 hover:bg-gray-200 transition-colors duration-200 cursor-pointer font-[Calibri]" onClick={() => handleFontClick("Calibri")}>Calibri</li>
                                        <li className="px-4 py-1 hover:bg-gray-200 transition-colors duration-200 cursor-pointer font-[TimesNewRoman]" onClick={() => handleFontClick("Times-Roman")}>Times New Roman</li>
                                        <li className="px-4 py-1 hover:bg-gray-200 transition-colors duration-200 cursor-pointer font-[CourierNew]" onClick={() => handleFontClick("Courier")}>Courier New</li>
                                    </ul>
                                </div>
                            )}
                        </span>
                        <span className="relative flex items-center gap-2 cursor-pointer" onClick={() => {
                            setFontSizeDropdownOpen(!fontSizeDropdownOpen);
                            setFontDropdownOpen(false);
                        }}>
                            <div className="flex hover:opacity-65"> 
                                <span>Font Size</span>
                                <Image src="/chevron-down.svg" alt="chevron down" width={24} height={24}/>
                            </div>
                            {fontSizeDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
                                    <ul className="py-2">
                                        <li className="px-4 py-1 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">Small</li>
                                        <li className="px-4 py-1 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">Medium</li>
                                        <li className="px-4 py-1 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">Large</li>
                                    </ul>
                                </div>
                            )}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src="/list.svg" alt="list" width={24} height={24} className="hover:scale-110 transition-transform duration-200 hover:opacity-65" />
                        <Image src="/link.svg" alt="link" width={24} height={24} className="hover:scale-110 transition-transform duration-200 hover:opacity-65" />
                        <div className="self-center h-6 border-r border-black"></div>
                        <div className={`flex items-center gap-2 ${showAutosave ? "" : "hover:opacity-65"} hover:scale-110 transition duration-200`} 
                            onClick={() => {setShowAutosave(!showAutosave);}}>
                            <Image src={showAutosave ? "/saveColored.svg" : "/save.svg"} alt="save" width={24} height={24} />
                        </div>
                        <Image src="/refresh-cw.svg" alt="refresh" width={24} height={24} className="hover:scale-110 transition-transform duration-200 hover:opacity-65" />
                        <NewPDFDownloadLink
                            document={<BusinessTemplate formData={formData} />}
                            fileName="exported_form.pdf"
                            className="hover:opacity-65 transition-opacity duration-200"
                        >
                            <Image src="/download.svg" alt="download" width={24} height={24} className="hover:scale-110 transition-transform duration-200" />
                        </NewPDFDownloadLink>
                        <Image src="/settings.svg" alt="settings" width={24} height={24} className="hover:scale-110 transition-transform duration-200 hover:opacity-65" />
                        <button onClick={handleSignOut} className="hover:underline hover:opacity-65 transition-opacity duration-200">
                            <Image src="/log-out.svg" alt="logout" width={24} height={24} className="hover:scale-110 transition-transform duration-200" /> 
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}
