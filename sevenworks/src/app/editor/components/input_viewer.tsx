"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
// import type { JSX } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useFormContext } from "../formcontext";
import { Worker } from '@react-pdf-viewer/core';
import { pdf } from '@react-pdf/renderer';
import { useZoom } from "../zoomcontext";
import { onAuthStateChanged } from "firebase/auth";

const ViewerNoSSR = dynamic(() => import('@react-pdf-viewer/core').then(mod => mod.Viewer), { ssr: false });
import '@react-pdf-viewer/core/lib/styles/index.css';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/app/lib/firebase";
import { useResume } from "@/app/resumeContext";

// Define interfaces for form data
interface ExperienceEntry {
  title: string;
  company: string;
  years: string;
}
interface EducationEntry {
  degree: string;
  institution: string | undefined;
  years: string;
}

const InputFields = () => {
  const searchParams = useSearchParams();
  const { formData, setFormData } = useFormContext();
  const { zoom } = useZoom();
  const initialTab = searchParams?.get("tab") || "personal";
  const [activeTab, setActiveTab] = useState(initialTab);

  // References for PDF URLs and transitions
  const [primaryPdfUrl, setPrimaryPdfUrl] = useState<string | null>(null);
  const [secondaryPdfUrl, setSecondaryPdfUrl] = useState<string | null>(null);
  const [isPrimaryActive, setIsPrimaryActive] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  // TemplateID from user session and template function to retrieve templates
  const template = useResume();
  const [templateID, setTemplateID] = useState<string | null>(null);

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

  // Add new experience entry
  const addExperience = () => {
    const updated = [...(Array.isArray(formData.experience) ? formData.experience : []), { title: '', company: '', years: '' }];
    setFormData('experience', updated);
  };

  // Add new education entry
  const addEducation = () => {
    const updated = Array.isArray(formData.education) 
      ? [...formData.education, { degree: '', institution: '', years: '' }] 
      : [{ degree: '', institution: '', years: '' }];
    setFormData('education', updated);
  };

  // Handle experience field change
  const handleExperienceChange = (idx: number, key: keyof ExperienceEntry, value: string) => {
    const updated = Array.isArray(formData.experience) ? [...formData.experience] : [];
    updated[idx][key] = value;
    setFormData('experience', updated);
  };

  // Handle education field change
  const handleEducationChange = (idx: number, key: keyof EducationEntry, value: string) => {
    const updated = Array.isArray(formData.education) ? [...formData.education] : [];
    updated[idx][key] = value;
    setFormData('education', updated);
  };

  // Add new leadership entry
  const addLeadership = () => {
    const updated = Array.isArray(formData.leadership) 
      ? [...formData.leadership, { title: '', description: '' }] 
      : [{ title: '', description: '' }];
    setFormData('leadership', updated);
  };

  // Handle leadership field change
  const handleLeadershipChange = (idx: number, key: 'title' | 'description', value: string) => {
    const updated = Array.isArray(formData.leadership) ? [...formData.leadership] : [];
    // If editing a placeholder row, expand the array
    while (updated.length <= idx) {
      updated.push({ title: '', description: '' });
    }
    updated[idx][key] = value;
    setFormData('leadership', updated);
  };

  // Add new honor entry
  const addHonor = () => {
    const updated = Array.isArray(formData.honorsList) ? [...formData.honorsList, { honor: '' }] : [{ honor: '' }];
    setFormData('honorsList', updated);
  };

  // Handle honor field change
  const handleHonorsChange = (idx: number, value: string) => {
      const updated = Array.isArray(formData.honorsList) ? [...formData.honorsList] : [];
      while (updated.length <= idx) {
        updated.push({ honor: '' });
      }
      updated[idx] = { honor: value as string };
      setFormData('honorsList', updated);
    };

  useEffect(() => {
    const tab = searchParams?.get("tab") || "personal";
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  }, [activeTab, searchParams]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user){
            try {
                const sessionData = (await getDoc(doc(db, "sessions", user.uid))).data();

                if (!sessionData){
                    throw new Error("Error retrieving session data");
                }

                const sessionTemplateID = sessionData.templateID;
                setTemplateID(sessionTemplateID);
            } catch(error) {
                console.error("Error fetching templateID:", error);
            }
        }
    });

    return () => unsubscribe();
  }, []);

  // Generate initial PDF on first load
  useEffect(() => {
    if (!templateID) return;

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
  }, [templateID]);

  // Ensure at least 2 leadership and 2 honors entries to start (but not in render!)
  useEffect(() => {
    if (activeTab === "leadership" && (!Array.isArray(formData.leadership) || formData.leadership.length === 0)) {
      setFormData('leadership', [{ title: '', description: '' }, { title: '', description: '' }]);
    }
    if (activeTab === "honors" && (!Array.isArray(formData.honorsList) || formData.honorsList.length === 0)) {
      setFormData('honorsList', [{ honor: '' }, { honor: '' }]);
    }
  }, [activeTab]);

  // Function to generate a PDF without directly updating state
  const generatePdf = async () => {
    if (isGenerating && !isFirstRender.current) return;

    setIsGenerating(true);
    try {
      const stringifiedFormData = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [key, Array.isArray(value) ? JSON.stringify(value) : String(value)])
      );
      const blob = await pdf(template(templateID, stringifiedFormData)).toBlob();
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
        // Wait for the new PDF to fully load before switching
        if (transitionTimerRef.current) {
          clearTimeout(transitionTimerRef.current);
        }

        transitionTimerRef.current = setTimeout(() => {
          setIsPrimaryActive(!isPrimaryActive);
        }, 300); // Transition duration
      } else {
        // First load - no transition needed
        if (!primaryPdfUrl && !secondaryPdfUrl) {
          setPrimaryPdfUrl(newUrl);
          setIsPrimaryActive(true);
        }
      }

      // Save current form data to compare for future changes
      previousFormDataRef.current = { ...formData };

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

    // Set a new timer with a short debounce for instant feedback
    debounceTimerRef.current = setTimeout(() => {
      generatePdf();
    }, 100); // 100ms debounce for more responsive updates

    // Cleanup function
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
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
        <div className="bg-white rounded-lg shadow-lg hover:shadow-lg transition transform p-6 border border-gray-300 flex flex-col flex-1 max-h-screen overflow-auto pb-20">
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
          {(Array.isArray(formData.experience) ? formData.experience : []).map((exp, idx) => (
            <div key={idx} className="flex flex-col mt-2 border-b pb-2">
              <span className="text-xs font-bold text-[#848C8E]">Job Title</span>
              <input
                type="text"
                value={typeof exp.title === "string" ? exp.title : ""}
                onChange={e => handleExperienceChange(idx, 'title', e.target.value)}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
                placeholder="Job Title"
              />
              <span className="text-xs font-bold text-[#848C8E] mt-2">Company</span>
              <input
                type="text"
                value={typeof exp.company === "string" ? exp.company : ""}
                onChange={e => handleExperienceChange(idx, 'company', e.target.value)}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
                placeholder="Company"
              />
              <span className="text-xs font-bold text-[#848C8E] mt-2">Years</span>
              <input
                type="text"
                value={typeof exp.years === "string" ? exp.years : ""}
                onChange={e => handleExperienceChange(idx, 'years', e.target.value)}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
                placeholder="Years"
              />
            </div>
          ))}
          <button
            onClick={addExperience}
            className="border bg-[#435058] border-[#999999] shadow-md p-2 rounded-lg w-full hover:bg-[#1c2428] transition text-white mt-4"
          >
            + Add Experience
          </button>
        </div>
      );
    } else if (activeTab === "education") {
      return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-lg transition transform p-6 border border-gray-300 flex flex-col flex-1 min-h-full">
          <h1 className="text-black text-center">Education</h1>
          {(formData.education && Array.isArray(formData.education) ? formData.education : []).map((edu, idx) => (
            <div key={idx} className="flex flex-col mt-2 border-b pb-2">
              <span className="text-xs font-bold text-[#848C8E]">Degree</span>
              <input
                type="text"
                value={typeof edu.degree === "string" ? edu.degree : ''}
                onChange={e => handleEducationChange(idx, 'degree', e.target.value)}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
                placeholder="Degree"
              />
              <span className="text-xs font-bold text-[#848C8E] mt-2">Institution</span>
              <input
                type="text"
                value={typeof edu.institution === "string" ? edu.institution : ''}
                onChange={e => handleEducationChange(idx, 'institution', e.target.value)}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
                placeholder="Institution"
              />
              <span className="text-xs font-bold text-[#848C8E] mt-2">Years</span>
              <input
                type="text"
                value={typeof edu.years === 'string' ? edu.years : ''}
                onChange={e => handleEducationChange(idx, 'years', e.target.value)}
                className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
                placeholder="Years"
              />
            </div>
          ))}
          <button
            onClick={addEducation}
            className="border bg-[#435058] border-[#999999] shadow-md p-2 rounded-lg w-full hover:bg-[#1c2428] transition text-white mt-4"
          >
            + Add Education
          </button>
        </div>
      );
    } else if (activeTab === "additional") {
      return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-lg transition transform p-6 border border-gray-300 flex flex-col flex-1 min-h-full">
          <h1 className="text-black text-center">Additional Skills & Interests</h1>
          <div className="mt-4">
          <span className="text-xs font-bold text-[#848C8E]">Additional Skills & Interests</span>
            <textarea
              name="skillsInterests"
              value={typeof formData.skillsInterests === 'string' ? formData.skillsInterests : ''}
              onChange={handleInputChange}
              className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E] h-20"
              placeholder="List your skills, languages, interests, etc..."
            />
          </div>
        </div>
      );
    } else if (activeTab === "leadership") {
      const leadershipEntries = Array.isArray(formData.leadership) ? formData.leadership : [];
      const showEmpty = leadershipEntries.length === 0 || leadershipEntries.every(l => !l.title && !l.description);
      const displayLeadership = showEmpty ? [{ title: '', description: '' }, { title: '', description: '' }] : leadershipEntries;
      const leadershipFields = [
        { key: 'title', label: 'Title' },
        { key: 'description', label: 'Description' }
      ];
      return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-lg transition transform p-6 border border-gray-300 flex flex-col flex-1 min-h-full">
          <h1 className="text-black text-center">Leadership & Community Engagement</h1>
          {displayLeadership.map((lead, idx) => (
            <div key={idx} className="flex flex-col mt-2 border-b pb-2">
              {leadershipFields.map(field => (
                <React.Fragment key={field.key}>
                  <span className={`text-xs font-bold text-[#848C8E]${field.key === 'description' ? ' mt-2' : ''}`}>{field.label}</span>
                  <input
                    type="text"
                    value={typeof lead[field.key] === 'string' ? (lead[field.key] as string) : ''}
                    onChange={e => handleLeadershipChange(idx, field.key as 'title' | 'description', e.target.value)}
                    className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
                    placeholder={field.label}
                  />
                </React.Fragment>
              ))}
            </div>
          ))}
          <button
            onClick={addLeadership}
            className="border bg-[#435058] border-[#999999] shadow-md p-2 rounded-lg w-full hover:bg-[#1c2428] transition text-white mt-4"
          >
            + Add Leadership
          </button>
        </div>
      );
    } else if (activeTab === "honors") {
      const honorsEntries = Array.isArray(formData.honorsList) ? formData.honorsList : [];
      const showEmpty = honorsEntries.length === 0 || honorsEntries.every(h => !h.honor);
      const displayHonors = showEmpty ? [{ honor: '' }, { honor: '' }] : honorsEntries;
      const honorsFields = [
        { key: 'honor', label: 'Honor' }
      ];
      return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-lg transition transform p-6 border border-gray-300 flex flex-col flex-1 min-h-full">
          <h1 className="text-black text-center">Honors</h1>
          {displayHonors.map((honorObj, idx) => (
            <div key={idx} className="flex flex-col mt-2 border-b pb-2">
              {honorsFields.map(field => (
                <React.Fragment key={field.key}>
                  <span className="text-xs font-bold text-[#848C8E]">{field.label}</span>
                  <input
                    type="text"
                    value={typeof honorObj.honor === 'string' ? honorObj.honor : ''}
                    onChange={e => handleHonorsChange(idx, e.target.value)}
                    className="border bg-[#E6E6E6] border-[#999999] shadow-md p-2 rounded-lg w-full text-[#848C8E]"
                    placeholder="Honor, Award, or Recognition"
                  />
                </React.Fragment>
              ))}
            </div>
          ))}
          <button
            onClick={addHonor}
            className="border bg-[#435058] border-[#999999] shadow-md p-2 rounded-lg w-full hover:bg-[#1c2428] transition text-white mt-4"
          >
            + Add Honor
          </button>
        </div>
      );
    }
  };

  return (
    <div className="bg-[#F8F8F8] flex w-full h-full overflow-hidden">
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