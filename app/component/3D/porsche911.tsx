'use client';

import { useGLTF, Stage, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function Model() {
  // Ganti 'nama_file_kamu.gltf' sesuai nama file asli di folder public/ThreeD/
  const { scene } = useGLTF('/ThreeD/porsche_911/scene.gltf'); 
  
  return <primitive object={scene} />;
}

export default function Porsce911() {
  return (
    <div className="w-full h-[500px] bg-zinc-100 rounded-2xl overflow-hidden shadow-inner">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <color attach="background" args={['#f4f4f5']} />
        
        {/* Suspense digunakan untuk menampilkan loading saat model diunduh */}
        <Suspense fallback={null}>
          {/* Stage memberikan pencahayaan dan bayangan otomatis yang bagus */}
          <Stage environment="city" intensity={0.5}>
            <Model />
          </Stage>
        </Suspense>

        {/* Supaya user bisa putar-putar motornya pakai mouse */}
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}