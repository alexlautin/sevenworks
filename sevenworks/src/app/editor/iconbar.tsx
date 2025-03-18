"use client";

import React from 'react';
import Link from 'next/link';
import { useState, useRef, useEffect } from "react";

const IconBar = () => {

  const [sections, setSections] = useState<React.JSX.Element[]>([]);


  const addSection = () => {
    const newSection = (
      <div key={sections.length} className="pr-2 pl-2 flex items-center justify-center">
      <img src="/user.svg" alt="user" className="w-8 h-8" style={{ filter: 'invert(29%) sepia(14%) saturate(1580%) hue-rotate(175deg) brightness(92%) contrast(88%)' }} />
      </div>
    );
    setSections([...sections, newSection]);
  };

  const [overlay, setOverlay] = useState<React.JSX.Element[]>([]);
  const [isCreateNewSectionOverlayVisible, setCreateNewSectionOverlay] = useState(false);
  const [isNewSectionIconOverlayVisible, setNewSectionIconOverlay] = useState(false);
  const newSectionOverlayRef = useRef<HTMLDivElement>(null);

  const displayCreateNewSectionOverlay = () => {
    setCreateNewSectionOverlay((prev) => !prev);
  };

  const displayNewSectionIconOverlay = () => {
    setNewSectionIconOverlay((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (newSectionOverlayRef.current && !newSectionOverlayRef.current.contains(event.target as Node)) {
        setCreateNewSectionOverlay(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex-none w-[70] h-full p-2 rounded-lg bg-[#E6E6E6]">
      {/* vertical stack */}
      <div className="flex flex-col gap-4 h-full">
      {sections}
        <div className="p-0.5 flex items-center justify-center">
          <Link href="/editor?tab=personal#personal-section">
            <img
              src="/user.svg"
              alt="user"
              className="w-8 h-8"
              style={{ filter: 'invert(29%) sepia(14%) saturate(1580%) hue-rotate(175deg) brightness(92%) contrast(88%)' }}
            />
          </Link>
        </div>
        <div className="p-0.5 flex items-center justify-center">
          <Link href="/editor?tab=phone#phone-section">
            <img
              src="/phone.svg"
              alt="phone"
              className="w-8 h-8"
              style={{ filter: 'invert(29%) sepia(14%) saturate(1580%) hue-rotate(175deg) brightness(92%) contrast(88%)' }}
            />
          </Link>
        </div>
        <div className="p-0.5 flex items-center justify-center">
          <Link href="/editor?tab=book#book-section">
            <img
              src="/book-open.svg"
              alt="open book"
              className="w-8 h-8"
              style={{ filter: 'invert(29%) sepia(14%) saturate(1580%) hue-rotate(175deg) brightness(92%) contrast(88%)' }}
            />
          </Link>
        </div>
        <div className="p-0.5 flex items-center justify-center">
          <Link href="/editor?tab=work#work-section">
            <img
              src="/briefcase.svg"
              alt="briefcase"
              className="w-8 h-8"
              style={{ filter: 'invert(29%) sepia(14%) saturate(1580%) hue-rotate(175deg) brightness(92%) contrast(88%)' }}
            />
          </Link>
        </div>
        <div className="p-0.5 flex items-center justify-center">
          <Link href="/editor?tab=award#award-section">
            <img
              src="/award.svg"
              alt="award"
              className="w-8 h-8"
              style={{ filter: 'invert(29%) sepia(14%) saturate(1580%) hue-rotate(175deg) brightness(92%) contrast(88%)' }}
            />
          </Link>
        </div>
        <div className="p-0.5 flex items-center justify-center">
          <Link href="/editor?tab=add#add-section">
            <img
              src="/plus-square.svg"
              alt="plus square"
              className="w-8 h-8"
              style={{ filter: 'invert(29%) sepia(14%) saturate(1580%) hue-rotate(175deg) brightness(92%) contrast(88%)' }}
            />
          </Link>
        </div>
        <div className="mt-auto p-0.5 flex items-center justify-center">
          <Link href="/dashboard">
            <img
              src="/chevron-left.svg"
              alt="chevron left"
              className="w-8 h-8"
              style={{ filter: 'invert(29%) sepia(14%) saturate(1580%) hue-rotate(175deg) brightness(92%) contrast(88%)' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IconBar;