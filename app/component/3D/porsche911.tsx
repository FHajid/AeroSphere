'use client';

import { useGLTF, Stage, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function Model() {
  const { scene } = useGLTF('/ThreeD/porsche_911/scene.gltf'); 
  
  return <primitive object={scene} />;
}

export default function Porsce911() {
  return (
    <div className="w-full h-[500px] bg-zinc-100 rounded-2xl overflow-hidden shadow-inner">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <color attach="background" args={['#f4f4f5']} />        
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}