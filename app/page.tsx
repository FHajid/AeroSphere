'use client';

import { useState } from 'react';
import Header from "./component/header";
import Card from "./component/card";
import Footer from "./component/footer";
import Testimonial from "./component/testimonial"; // Tambahkan testimonial

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
    <main className="bg-white min-h-screen font-sans antialiased selection:bg-orange-500 selection:text-white">
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>

      {/* ── HERO SECTION (DARK MODE PRESERVED FOR 3D CONTRAST) ── */}
      <section className="relative w-full h-[110vh] bg-zinc-950 flex flex-col items-center justify-between overflow-hidden">
        {/* Background Decor - Changed to Orange Glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/20 blur-[120px] rounded-full" />
        </div>

        {/* Title Area */}
        <div className="relative z-10 text-center px-4 pt-32 md:pt-40">
          <p className="text-orange-500 text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4 font-black italic">
             AeroSphere Engineering
          </p>
          <div className="overflow-hidden">
            <h2 className="text-white text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-none transition-all duration-500">
              {names[index]}
            </h2>
          </div>
          <p className="text-zinc-500 mt-4 font-mono text-sm tracking-widest opacity-80">
            {details[index]}
          </p>
        </div>

        {/* Model Container - Fixed height typo */}
        <div className="relative z-10 w-full flex items-center justify-center flex-1">
          <div className="w-full h-[400px] md:h-[600px] transition-all duration-700 ease-in-out transform scale-110">
            {models[index]}
          </div>
        </div>

        {/* Navigation UI */}
        <div className="relative z-20 w-full max-w-7xl px-6 pb-12 md:pb-16 flex items-center justify-between">
          <div className="flex gap-4">
            <button 
              onClick={prev} 
              className="group p-5 md:p-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/50 hover:bg-orange-500/10 transition-all active:scale-90 flex items-center justify-center"
              aria-label="Previous"
            >
              <div className="w-4 h-4 border-l-2 border-t-2 border-white -rotate-45 ml-1 transition-colors group-hover:border-orange-500" />
            </button>

            <button 
              onClick={next} 
              className="group p-5 md:p-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/50 hover:border-orange-500/10 transition-all active:scale-90 flex items-center justify-center"
              aria-label="Next"
            >
              <div className="w-4 h-4 border-r-2 border-t-2 border-white rotate-45 mr-1 transition-colors group-hover:border-orange-500" />
            </button>
          </div>

          {/* Info Progress - Updated to Orange */}
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-baseline gap-1">
              <span className="text-white text-4xl md:text-5xl font-black italic">0{index + 1}</span>
              <span className="text-zinc-700 text-sm font-bold">/ 0{models.length}</span>
            </div>
            <div className="w-24 md:w-40 h-[2px] bg-zinc-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.8)] transition-all duration-700 ease-out" 
                style={{ width: `${((index + 1) / models.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTION ── */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h3 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter leading-[0.9] uppercase italic">
                Crafting perfection through <span className="text-zinc-200">3D Precision.</span>
              </h3>
              <p className="mt-6 text-zinc-500 font-medium max-w-md">
                Kami menggabungkan estetika otomotif dengan optimasi WebGL untuk pengalaman visual tanpa hambatan.
              </p>
            </div>
            <button className="group relative px-10 py-5 bg-zinc-950 text-white rounded-2xl font-black hover:bg-orange-600 transition-all duration-300 uppercase text-xs tracking-[0.2em] italic overflow-hidden">
              <span className="relative z-10">Explore Specs //</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
          
          <Card />
        </div>
        
        {/* Tambahkan Testimonial untuk Social Proof */}
        <Testimonial />
      </div>

      <Footer />
    </main>
  );
}