import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Required if using Next.js images
  },
};

export default nextConfig;
