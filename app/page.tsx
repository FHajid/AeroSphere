'use client';

import { useState } from 'react';
import Header from "./component/header";
import Card from "./component/card";

// Import komponen 3D kamu
import Porsce911 from "./component/3D/porsche911";
import HondaShadow from "./component/3D/hondaShadow";
import Hondacrf from "./component/3D/hondacrf";

export default function Home() {
  // 1. Setup State di sini
  const [index, setIndex] = useState(0);
  const models = [<Porsce911 key={0} />, <HondaShadow key={1} />, <Hondacrf key={2} />];
  const names = ["Porsche 911", "Honda Shadow", "Honda CRF"];

  // 2. Fungsi navigasi
  const next = () => setIndex((index + 1) % models.length);
  const prev = () => setIndex((index - 1 + models.length) % models.length);

  return (
    <main>
      <Header />

      {/* SECTION CAROUSEL 3D */}
      <section className="relative w-full h-[600px] bg-zinc-900 flex flex-col items-center justify-center">
        
        {/* Nama Model di Atas */}
        <div className="absolute top-10 z-10">
          <h2 className="text-black text-3xl font-bold tracking-widest">{names[index]}</h2>
        </div>

        {/* Tampilan Model 3D */}
        <div className="w-full h-full">
          {models[index]}
        </div>

        {/* Tombol Navigasi Kiri & Kanan */}
        <button 
          onClick={prev}
          className="absolute left-10 top-1/2 -translate-y-1/2 text-black text-5xl hover:scale-125 transition-transform p-4 z-20"
        >
          ‹
        </button>
        
        <button 
          onClick={next}
          className="absolute right-10 top-1/2 -translate-y-1/2 text-black text-5xl hover:scale-125 transition-transform p-4 z-20"
        >
          ›
        </button>

      </section>

      <Card />
    </main>
  );
}