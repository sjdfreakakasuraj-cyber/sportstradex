/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  
  // Enable compression
  compress: true,
  
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Environment-specific configurations
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
};

export default nextConfig;
