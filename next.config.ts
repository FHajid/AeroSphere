import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf|bin)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;