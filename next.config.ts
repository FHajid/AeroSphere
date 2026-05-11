import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  // Kita hapus semua blok 'turbo' yang tadi bikin error
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf|bin)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;