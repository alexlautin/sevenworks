"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import type { JSX } from "react";
import dynamic from "next/dynamic";
import BusinessTemplate from "./business_template";
import { useSearchParams } from "next/navigation";
import { useFormContext } from "../formcontext";
import { Worker } from '@react-pdf-viewer/core';
import { pdf } from '@react-pdf/renderer';
import { useZoom } from "../zoomcontext";
 
const ViewerNoSSR = dynamic(() => import('@react-pdf-viewer/core').then(mod => mod.Viewer), { ssr: false });
import '@react-pdf-viewer/core/lib/styles/index.css';
import { FaSearch, FaLightbulb, FaEdit } from "react-icons/fa";

const InputFields = () => {
  const searchParams = useSearchParams();
  const { formData, setFormData } = useFormContext();
  const { zoom } = useZoom();
  const initialTab = searchParams.get("tab") || "personal";
  const [activeTab, setActiveTab] = useState(initialTab);
  
  // References for PDF URLs and transitions
  const [primaryPdfUrl, setPrimaryPdfUrl] = useState<string | null>(null);
  const [secondaryPdfUrl, setSecondaryPdfUrl] = useState<string | null>(null);
  const [isPrimaryActive, setIsPrimaryActive] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  
  // Refs for tracking and cleanup
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimerRef = useRef<NodeJS.Timeout | null>(null);
  const previousFormDataRef = useRef(formData);
  const isFirstRender = useRef(true);


  // New state for custom personal fields
  const [customPersonalFields, setCustomPersonalFields] = useState<{ id: number; label: string; value: string }[]>([]);

  // Function to add a new custom field
  const addCustomField = () => {
    const newField = { id: Date.now(), label: "", value: "" };
    const updatedFields = [...customPersonalFields, newField];
    setCustomPersonalFields(updatedFields);
    setFormData("customPersonal", updatedFields);
  };

  // Function to handle changes to custom fields
  const handleCustomFieldChange = (id: number, key: "label" | "value", newValue: string) => {
    const updatedFields = customPersonalFields.map(field =>
      field.id === id ? { ...field, [key]: newValue } : field
    );
    setCustomPersonalFields(updatedFields);
    setFormData("customPersonal", updatedFields);
  };

  useEffect(() => {
    const tab = searchParams.get("tab") || "personal";
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  }, [activeTab, searchParams]);

  // Generate initial PDF on first load
  useEffect(() => {
    if (isFirstRender.current) {
      setIsGenerating(true); // Set generating state immediately
      // Small timeout to ensure UI renders before heavy PDF generation
      setTimeout(() => {
        generatePdf().then(() => {
          setInitialLoadComplete(true);
        });
        isFirstRender.current = false;
      }, 100);
    }
  }, []);

  // Function to generate a PDF without directly updating state
  const generatePdf = async () => {
    if (isGenerating && !isFirstRender.current) return;
    
    setIsGenerating(true);
    try {
      const blob = await pdf(<BusinessTemplate formData={formData} />).toBlob();
      const newUrl = URL.createObjectURL(blob);
      
      // Store the new PDF in the inactive slot
      if (isPrimaryActive) {
        // Clean up any existing secondary URL
        if (secondaryPdfUrl) {
          URL.revokeObjectURL(secondaryPdfUrl);
        }
        setSecondaryPdfUrl(newUrl);
      } else {
        // Clean up any existing primary URL
        if (primaryPdfUrl) {
          URL.revokeObjectURL(primaryPdfUrl);
        }
        setPrimaryPdfUrl(newUrl);
      }
      
      // Start transition if we have a PDF already displayed
      if ((primaryPdfUrl || secondaryPdfUrl) && !isFirstRender.current) {
        setIsTransitioning(true);
        
        // Wait for the new PDF to fully load before switching
        if (transitionTimerRef.current) {
          clearTimeout(transitionTimerRef.current);
        }
        
        transitionTimerRef.current = setTimeout(() => {
          setIsPrimaryActive(!isPrimaryActive);
          setIsTransitioning(false);
        }, 300); // Transition duration
      } else {
        // First load - no transition needed
        if (!primaryPdfUrl && !secondaryPdfUrl) {
          setPrimaryPdfUrl(newUrl);
          setIsPrimaryActive(true);
        }
      }
      
      // Save current form data to compare for future changes
      previousFormDataRef.current = {...formData};
      
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  // Check if form data has actually changed
  const hasFormDataChanged = useMemo(() => {
    if (isFirstRender.current) return true;
    
    // Do a deep comparison of current and previous form data
    const prevData = previousFormDataRef.current;
    const currData = formData;
    
    for (const key in currData) {
      if (JSON.stringify(currData[key]) !== JSON.stringify(prevData[key])) {
        return true;
      }
    }
    
    return false;
  }, [formData]);

  // Improved PDF generation with debouncing
  useEffect(() => {
    // Don't regenerate if form data hasn't changed or during initial load
    if (!hasFormDataChanged || isFirstRender.current) return;
    
    // Clear any existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    // Set a new timer
    debounceTimerRef.current = setTimeout(() => {
      generatePdf();
    }, 800);
    
    // Cleanup function
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [formData, hasFormDataChanged]);

  // Clean up URLs on component unmount
  useEffect(() => {
    return () => {
      if (primaryPdfUrl) {
        URL.revokeObjectURL(primaryPdfUrl);
      }
      if (secondaryPdfUrl) {
        URL.revokeObjectURL(secondaryPdfUrl);
      }
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(name, value);
  };

  const renderFields = () => {
    if (activeTab === "personal") {
      return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-lg transition transform p-6 border border-gray-300 flex flex-col flex-1 min-h-full">          
          <h1 className="text-black text-center">Personal Information</h1>
          {["firstName", "middleName", "lastName", "email", "phone", "address"].map((field) => (
            <div key={field} className="flex flex-col mt-2">
              <span className="text-xs font-bold text-[#848C8E]">
                {field.charAt(0).toUpperCase() + field.replace(/([A-Z])/g, ' $1').slice(1)}{" "}
                {field === "firstName" && <span className="text-red-500">*</span>}
              </span>
              <input
                type="text"
                name={field}
                value={typeof formData[field] === "string" ? formData[field] : ""}
                placeholder={field.charAt(0).toUpperCase() + field.replace(/([A-Z])/g, ' $1').slice(1)}
                onChange={handleInputChange}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
              />
            </div>
          ))}
          {customPersonalFields.map((field) => (
            <div key={field.id} className="flex flex-col mt-2">
              <span className="text-xs font-bold text-[#848C8E]">Custom Field Label</span>
              <input
                type="text"
                value={field.label}
                onChange={(e) => handleCustomFieldChange(field.id, "label", e.target.value)}
                placeholder="Custom Label"
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
              />
              <span className="text-xs font-bold text-[#848C8E] mt-2">Custom Field Value</span>
              <input
                type="text"
                value={field.value}
                onChange={(e) => handleCustomFieldChange(field.id, "value", e.target.value)}
                placeholder="Custom Value"
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
              />
            </div>
          ))}
          <div className="flex flex-col pt-3">
            <button
              onClick={addCustomField}
              className="border bg-[#435058] border-[#999999] shadow-md p-2 rounded-lg w-full hover:bg-[#1c2428] transition text-white"
            >
              + Add a New Element
            </button>
          </div>
        </div>
      );
    } else if (activeTab === "experience") {
      return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-lg transition transform p-6 border border-gray-300 flex flex-col flex-1 min-h-full">
          <h1 className="text-black text-center">Experience</h1>
          {(formData.experience || []).map((exp, index) => (
            <div key={index} className="flex flex-col mt-2">
              <span className="text-xs font-bold text-[#848C8E]">Job Title</span>
              <input
                type="text"
                name={`experience[${index}].title`}
                value={exp.title}
                onChange={handleInputChange}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
              />
              <span className="text-xs font-bold text-[#848C8E] mt-2">Company</span>
              <input
                type="text"
                name={`experience[${index}].company`}
                value={exp.company}
                onChange={handleInputChange}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
              />
              <span className="text-xs font-bold text-[#848C8E] mt-2">Years</span>
              <input
                type="text"
                name={`experience[${index}].years`}
                value={exp.years}
                onChange={handleInputChange}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
              />
            </div>
          ))}
        </div>
      );
    } else if (activeTab === "education") {
      return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-lg transition transform p-6 border border-gray-300 flex flex-col flex-1 min-h-full">
          <h1 className="text-black text-center">Education</h1>
          {(formData.education || []).map((edu, index) => (
            <div key={index} className="flex flex-col mt-2">
              <span className="text-xs font-bold text-[#848C8E]">Degree</span>
              <input
                type="text"
                name={`education[${index}].degree`}
                value={edu.degree}
                onChange={handleInputChange}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
              />
              <span className="text-xs font-bold text-[#848C8E] mt-2">Institution</span>
              <input
                type="text"
                name={`education[${index}].institution`}
                value={edu.institution}
                onChange={handleInputChange}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
              />
              <span className="text-xs font-bold text-[#848C8E] mt-2">Years</span>
              <input
                type="text"
                name={`education[${index}].years`}
                value={edu.years}
                onChange={handleInputChange}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
              />
            </div>
          ))}
        </div>
      );
    } else if (activeTab === "additional") {
      return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-lg transition transform p-6 border border-gray-300 flex flex-col flex-1 min-h-full">
          <h1 className="text-black text-center">Additional Information</h1>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E] h-32"
            placeholder="Enter any additional information here..."
          />
        </div>
      );
    }
  };

  return (
  <div className="bg-[#F8F8F8] flex w-full h-screen overflow-hidden">
        <div className="w-[38%] flex flex-col bg-[#F8F8F8] h-full overflow-auto">
        {renderFields()}
      </div>
        <div className="flex-1 overflow-auto bg-[#F8F8F8] h-full">
        <div className="w-full h-full flex flex-col">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <div className={`flex-1 overflow-auto max-h-full relative bg-[#F8F8F8]`}>
              {/* PDF content container with fade-in animation */}
              <div className={`w-full h-full ${initialLoadComplete ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 bg-[#F8F8F8]`}>
                  <div className="pdf-container bg-[#F8F8F8]" style={{ 
                minWidth: '100%', 
                minHeight: '100%', 
                width: zoom > 100 ? `${zoom}%` : '100%',
                height: '100%'
              }}>
                  {/* Primary PDF Layer */}
                  <div 
                    className={`absolute bg-[#F8F8F8] top-0 left-0 w-full h-full transition-opacity duration-300 ${
                      isPrimaryActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left' }}
                  >
                    {primaryPdfUrl && <ViewerNoSSR fileUrl={primaryPdfUrl} />}
                  </div>
                  
                  {/* Secondary PDF Layer */}
                  <div 
                    className={`absolute bg-[#F8F8F8] top-0 left-0 w-full h-full transition-opacity duration-300 ${
                      !isPrimaryActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left' }}
                  >
                    {secondaryPdfUrl && <ViewerNoSSR fileUrl={secondaryPdfUrl} />}
                  </div>
                </div>
              </div>
              
              {/* Initial loading indicator - shows before any PDF is ready */}
              <div 
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#F8F8F8]
                  ${initialLoadComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'} 
                  transition-opacity duration-500 z-20`}
              >
                <div className="text-center">
                  <div className="inline-block w-8 h-8 border-4 border-[#435058] border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600">Preparing your document...</p>
                </div>
              </div>
            </div>
          </Worker>
        </div>
      </div>
    </div>
  );
};


export default InputFields;

const RightView = ({
  features,
  expandedIndex,
  setExpandedIndex,
  exampleEdits,
}: {
  features: { title: string; description: string; buttonText: string }[];
  expandedIndex: number | null;
  setExpandedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  exampleEdits: { experience: { role: string; company: string; duration: string; location: string; descriptions: string[] }[] };
}) => {
  const featureIcons: Record<string, JSX.Element> = {
    "Resume Analysis": <FaSearch className="text-2xl text-[#435058] mb-2" />,
    "Content Suggestions": <FaLightbulb className="text-2xl text-[#435058] mb-2" />,
    "Formatting Tools": <FaEdit className="text-2xl text-[#435058] mb-2" />,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-[#F8F8F8] w-full min-h-[220px] rounded-lg flex flex-col items-center justify-between shadow-sm hover:shadow-md hover:scale-[1.01] transition transform p-6 border border-gray-100"
        >
          {featureIcons[feature.title]}
          <h2 className="text-base font-semibold text-gray-800 text-center">{feature.title}</h2>
          <p className="text-sm text-gray-600 mt-2 text-center">{feature.description}</p>
          <button
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className="mt-4 px-4 py-2 bg-[#435058] text-white rounded-lg hover:bg-[#1c2428] transition"
          >
            {feature.buttonText}
          </button>
          {expandedIndex === index && feature.title === "Content Suggestions" && (
            <div className="mt-4 w-full text-xs text-left bg-gray-100 text-black p-4 rounded space-y-4 overflow-y-auto max-h-60">
              {exampleEdits.experience.map((exp, idx) => (
                <div key={idx} className="border-b pb-2">
                  <div className="font-semibold text-sm">
                    {exp.role} — {exp.company}
                  </div>
                  <div className="text-gray-600 text-xs italic">
                    {exp.duration} | {exp.location}
                  </div>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {exp.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};