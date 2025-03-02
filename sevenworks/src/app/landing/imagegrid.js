"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import "./landing.css"; // Keep this import if you need the CSS

const images = [
  "/sample-business-resume.png",
  "/sample-business-resume.png",
  "/sample-business-resume.png",
];

export default function AutoScrollImagesDown() {
  return (
    <>
      <div className="relative w-full h-[700px] overflow-hidden flex justify-center">
        <div className="fade-overlay top-0 h-[100px] w-full absolute z-10"></div>
        <div className="fade-overlay bottom-0 h-[100px] w-full absolute z-10"></div>
        <motion.div
          className="image-container"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            ease: "linear",
            duration: 20, // Adjust the duration as needed
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Resume ${index + 1}`}
                layout="responsive"
                width={400}
                height={500}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}