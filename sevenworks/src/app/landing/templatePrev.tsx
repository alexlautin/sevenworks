"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/sample-business-resume.png",
  "/sample-business-resume.png",
  "/sample-business-resume.png",
];

export default function TemplatePreview() {
  return (
    <>
      <div className="flex flex-col items-center pt-10 gap-6 bg-gray-100 min-h-screen w-full">
        <div className="flex py-1 gap-2 justify-center text-center">
          <h2 className="text-[40px] font-extrabold leading-tight">
            <span className="text-blue-900">Templates for your</span>
            <span className="italic text-red-500"> every need</span>
          </h2>
        </div>

        <div className="w-[80%] h-[2px] bg-gray-300"></div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-screen-xl px-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[28rem] md:h-[32rem] overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={src}
                alt={`Template ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="/templates"
          className="text-black text-lg font-medium hover:text-black transition"
        >
          See all templates →
        </a>
      </div>
    </>
  );
}