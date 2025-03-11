"use client";
import React, { useState } from "react";
//import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';
import BusinessTemplate from "../TEST-TEMPLATES/business-template";

const LazyPDFDownloadLink = React.lazy(() =>
    import("@react-pdf/renderer").then((mod) => ({
      default: mod.PDFDownloadLink,
    }))
  );
  
  const LazyBlobProvider = React.lazy(() =>
    import("@react-pdf/renderer").then((mod) => ({
      default: mod.BlobProvider,
    }))
  );
  

export default function Demo() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        content: "",
    })

    return(
        <div className="flex flex-row w-screen h-screen justify-between bg-white">
            <div className="flex flex-col gap-2 p-6">
                <input
                    className="border-[2px] border-gray-400 px-2 rounded-md text-gray-700"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    placeholder="first name"
                    name="firstName"
                />
                <input
                    className="border-[2px] border-gray-400 px-2 rounded-md text-gray-700"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    placeholder="last name"
                    name="lastName"
                />
                <textarea
                    className="border-[2px] border-gray-400 px-2 rounded-md resize-none text-gray-700"
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    placeholder="content"
                    name="content"
                />
                <LazyPDFDownloadLink 
                    document={<BusinessTemplate form={form} />}
                    fileName="test.pdf"
                    className="px-4 py-2 bg-blue-500 text-white text-center rounded"
                >
                    Export to PDF
                </LazyPDFDownloadLink>
            </div>
            <div className="flex justify-center items-center w-full h-screen bg-offWhite">
               <LazyBlobProvider document={<BusinessTemplate form={form} />}>
               {({ url, loading, error }) => {
                    if (loading) return 'Loading document...';
                    if (error) return 'Error generating PDF';
                // Append #toolbar=0 to try to hide browser toolbar (supported in some browsers)
                    return (
                        <iframe
                        src={`${url}#toolbar=0`}
                        style={{ width: "100%", height: "100%", backgroundColor: "white"}}
                        title="PDF Preview"
                        />
                    );
                }}
               </LazyBlobProvider>
            </div>
        </div>
    )
}