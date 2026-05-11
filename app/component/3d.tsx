'use client'; 

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCube() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Copy ref ke variabel lokal (Solusi buat warning Vercel tadi)
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    // 2. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Gunakan currentContainer, bukan containerRef.current secara langsung
    currentContainer.appendChild(renderer.domElement);

    // 3. Create Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // 4. Animation Loop
    function animate(time: number) {
      cube.rotation.x = time / 2000;
      cube.rotation.y = time / 1000;
      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    // 5. Cleanup (Sangat Aman)
    return () => {
      renderer.setAnimationLoop(null);
      // Gunakan variabel lokal yang sudah kita simpan tadi
      if (currentContainer) {
        currentContainer.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose(); // Tambahkan ini juga biar memori bersih total
    };
  }, []);

  return <div ref={containerRef} className="w-full h-screen bg-black" />;
}