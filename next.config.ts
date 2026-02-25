import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'placehold.co' },
    ],
  },
};

export default nextConfig;
