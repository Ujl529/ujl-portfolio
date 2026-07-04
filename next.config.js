/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com", "raw.githubusercontent.com"],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "three"],
  },
};

module.exports = nextConfig;
