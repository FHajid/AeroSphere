'use client';

import { useState } from 'react';
import Header from "./component/header";
import Card from "./component/card";

// Import komponen 3D kamu
import Porsce911 from "./component/3D/porsche911";
import HondaShadow from "./component/3D/hondaShadow";
import Hondacrf from "./component/3D/hondacrf";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const models = [<Porsce911 key={0} />, <HondaShadow key={1} />, <Hondacrf key={2} />];
  const names = ["Porsche 911", "Honda Shadow", "Honda CRF"];

  const next = () => setIndex((index + 1) % models.length);
  const prev = () => setIndex((index - 1 + models.length) % models.length);

  return (
  <main className="bg-white min-h-screen">
    {/* Fix 1: give Header a stacking context above the 3D section */}
    <div className="relative z-10">
      <Header />
    </div>

    <section className="relative w-full min-h-[80vh] bg-zinc-950 flex flex-col items-center overflow-hidden">
      <div className="py-12 text-center">          
        <p className="text-zinc-500 text-sm tracking-[0.3em] uppercase mb-2">Featured Model</p>
        <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter transition-all duration-500">
          {names[index]}
        </h2>
      </div>

      {/* Fix 2: z-0 keeps this overlay from leaking outside the section */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-black opacity-50" />

      {/* Fix 3: z-10 so the 3D model renders above the overlay */}
      <div className="relative z-10 flex-1 w-full cursor-grab active:cursor-grabbing">
        {models[index]}
      </div>

      {/* Fix 4: same for nav buttons */}
      <div className="relative z-10 py-12 flex items-center gap-8">
        <button 
          onClick={prev}
          className="group flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">‹</span>
        </button>
        <div className="flex flex-col items-center">
          <span className="text-white font-mono text-lg">0{index + 1}</span>
          <div className="w-12 h-[1px] bg-zinc-700 my-1">
            <div 
              className="h-full bg-white transition-all duration-500" 
              style={{ width: `${((index + 1) / models.length) * 100}%` }}
            />
          </div>
          <span className="text-zinc-600 font-mono text-xs">0{models.length}</span>
        </div>
        <button 
          onClick={next}
          className="group flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          <span className="text-2xl group-hover:translate-x-1 transition-transform">›</span>
        </button>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-6 py-20">
      <Card />
    </div>
  </main>
);
}