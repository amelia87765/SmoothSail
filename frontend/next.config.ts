import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/strefyczasowe',
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
