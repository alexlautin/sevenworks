/** @type {import('next').NextConfig} */
const nextConfig = {
  // The repo root has an unrelated package-lock.json; keep tracing scoped to this app.
  outputFileTracingRoot: __dirname,
  eslint: {
    // Lint runs separately (`pnpm lint`) so a style warning never blocks a deploy.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // pdf.js lists the native `canvas` package as an optional Node dependency.
    // It is never used in the browser, and pnpm does not build it.
    config.resolve.alias = { ...config.resolve.alias, canvas: false };
    return config;
  },
};

module.exports = nextConfig;
