/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone build for Docker deployments
  output: 'standalone',
  
  // Enable image optimization
  images: {
    domains: ['localhost'],
  },
  
  // Enable compression
  compress: true,
  
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Environment-specific configurations
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
};

export default nextConfig;
