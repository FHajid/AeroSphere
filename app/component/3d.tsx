'use client'; // Wajib karena pakai browser API (window/document)
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCube() {
  // 1. Buat referensi untuk container div
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 2. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Masukkan canvas ke dalam div referensi kita
    containerRef.current.appendChild(renderer.domElement);

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

    // 5. Cleanup (Sangat Penting di React agar tidak memory leak)
    return () => {
      renderer.setAnimationLoop(null);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-screen" />;
}