import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
      {
        protocol: 'https',
        hostname: 'https://oao9e28k4psanad9.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
