/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // pdf.js lists the native `canvas` package as an optional Node dependency.
    // It is never used in the browser, and pnpm does not build it.
    config.resolve.alias = { ...config.resolve.alias, canvas: false };
    return config;
  },
}

module.exports = nextConfig
