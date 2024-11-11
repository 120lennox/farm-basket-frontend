import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['i.pinimg.com', 'res.cloudinary.com'],  // Just the hostname, without https://
  }
};

export default nextConfig;
