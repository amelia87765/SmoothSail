import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/partnerzy',
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
