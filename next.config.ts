import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Optimasi untuk Project 3D AeroSphere */
  
  // 1. Mengizinkan file besar (seperti model .gltf/.glb) untuk di-cache dengan benar
  compress: true,

  // 2. Jika kamu menggunakan gambar eksternal untuk tekstur (opsional)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Mengizinkan semua source (hati-hati untuk produksi)
      },
    ],
  },

  // 3. Memastikan Webpack mengenali file .glb, .gltf, dan .bin sebagai aset
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf|bin)$/,
      type: 'asset/resource',
    });

    return config;
  },
};

export default nextConfig;