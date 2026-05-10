'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Tambahkan framer-motion jika ada
import Header from "./component/header";
import Card from "./component/card";
import Footer from "./component/footer";

import Porsce911 from "./component/3D/porsche911";
import HondaShadow from "./component/3D/hondaShadow";
import Hondacrf from "./component/3D/hondacrf";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const models = [<Porsce911 key={0} />, <HondaShadow key={1} />, <Hondacrf key={2} />];
  const names = ["Porsche 911", "Honda Shadow", "Honda CRF"];
  const details = ["Carrera S - Flat-six engine", "VT750C - American Classic", "CRF450R - Performance Dirt"];

  const next = () => setIndex((index + 1) % models.length);
  const prev = () => setIndex((index - 1 + models.length) % models.length);

  return (
    <main className="bg-white min-h-screen font-sans antialiased selection:bg-zinc-800 selection:text-white">
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>

      <section className="relative w-full h-[90vh] bg-zinc-950 flex flex-col items-center justify-between overflow-hidden pt-24">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-500/10 blur-[120px] rounded-full" />
        </div>

        {/* Title Area */}
        <div className="relative z-10 text-center px-4">
          <p className="text-zinc-500 text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4 font-bold">
            Aerosphere Engineering
          </p>
          <div className="overflow-hidden">
            <h2 className="text-white text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              {names[index]}
            </h2>
          </div>
          <p className="text-zinc-400 mt-4 font-mono text-sm tracking-widest opacity-70">
            {details[index]}
          </p>
        </div>

        {/* Model Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing transform scale-110 md:scale-125">
           {/* Animasi transisi model */}
           <div className="w-full h-full transition-all duration-700 ease-in-out">
            {models[index]}
           </div>
        </div>

        {/* Navigation UI */}
        <div className="relative z-20 w-full max-w-7xl px-6 pb-12 flex items-end justify-between">
          <div className="flex gap-4">
            <button onClick={prev} className="group p-4 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all">
              <span className="block w-6 h-6 border-l-2 border-t-2 border-white rotate-[-45deg] group-hover:scale-110 transition-transform origin-center ml-2" />
            </button>
            <button onClick={next} className="group p-4 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all">
              <span className="block w-6 h-6 border-r-2 border-t-2 border-white rotate-[45deg] group-hover:scale-110 transition-transform origin-center mr-2" />
            </button>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-baseline gap-1">
              <span className="text-white text-4xl font-black italic">0{index + 1}</span>
              <span className="text-zinc-600 text-sm">/ 0{models.length}</span>
            </div>
            <div className="w-32 h-[2px] bg-zinc-800">
              <div 
                className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-700" 
                style={{ width: `${((index + 1) / models.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
                Crafting perfection through <span className="text-zinc-400 italic">3D Precision.</span>
              </h3>
            </div>
            <button className="px-8 py-4 bg-zinc-950 text-white rounded-full font-bold hover:bg-zinc-800 transition-colors uppercase text-sm tracking-widest">
              Explore Specs
            </button>
          </div>
          <Card />
        </div>
      </div>

      <Footer />
    </main>
  );
}