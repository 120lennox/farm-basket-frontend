import type { NextConfig } from "next";

const path = require('path')

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['i.pinimg.com', 'res.cloudinary.com'],  // Just the hostname, without https://
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['@/app'] = path.resolve(__dirname, 'app');
    return config;
  }
};

export default nextConfig;
