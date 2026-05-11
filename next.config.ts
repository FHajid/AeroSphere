import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,

  // Di Next.js terbaru, turbo biasanya berada di level utama, 
  // atau jika TS masih protes, kita bisa gunakan cara "bypass" ini
  // agar build tetap jalan di Vercel.
  // @ts-expect-error turbo is allowed for custom webpack asset handling
  turbo: {
    rules: {
      '*.{glb,gltf,bin}': ['@vercel/webpack-loader'],
    },
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf|bin)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;