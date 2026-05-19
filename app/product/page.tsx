'use client';

import React, { useState } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Card from '../component/card';
import Link from 'next/link';

const products = [
  { id: 1, name: '911 GT3 RS', brand: 'Porsche', cat: 'Cars', price: 'Premium', speed: '312 km/h' },
  { id: 2, name: 'Rebel 500', brand: 'Honda', cat: 'Motorcycles', price: 'Free', speed: '160 km/h' },
  { id: 3, name: 'Cessna Citation', brand: 'Textron', cat: 'Airplanes', price: 'Enterprise', speed: '848 km/h' },
  { id: 4, name: 'S 1000 RR', brand: 'BMW', cat: 'Motorcycles', price: 'Premium', speed: '303 km/h' },
];

export default function ProductPageV2() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All' ? products : products.filter(p => p.cat === activeTab);

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-blue-600 selection:text-white">
      <Header />

      {/* ── FUTURISTIC HERO ── */}
      <section className="pt-44 pb-20 px-6 border-b border-zinc-900 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-8xl text-white font-black italic tracking-tighter leading-none mb-6 uppercase">
              Precision <br /> 
              <span className="text-transparent text-outline">Engineering</span>
            </h1>
            <p className="text-zinc-400 font-mono text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
               Digital Assets for the next generation of 3D visualization.
            </p>
          </div>
          
          {/* Tabs Navigation - Mobile Friendly Grid */}
          <div className="grid grid-cols-2 sm:flex gap-2 w-full md:w-auto pt-4 md:pt-0">
            {['All', 'Cars', 'Motorcycles', 'Airplanes'].map((t) => (
              <button 
                key={t}
                onClick={() => setActiveTab(t)}
                className={`text-[10px] tracking-[0.2em] uppercase font-bold px-5 py-3 rounded-xl border transition-all duration-300 ${
                  activeTab === t 
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                    : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 backdrop-blur-sm hover:border-zinc-600 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENTO PRODUCT GRID (LIGHT MODE + DYNAMIC ROUTING) ── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((p, index) => (
            <Link 
              href={`/product/${p.id}`} 
              key={p.id} 
              className={`group relative overflow-hidden bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 min-h-[380px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:border-orange-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] ${
                index === 0 ? 'sm:col-span-2 md:col-span-2' : ''
              }`}
            >
              {/* Card Header Info */}
              <div className="z-10">
                <span className="text-orange-600 font-mono text-xs font-bold tracking-widest block mb-3 uppercase">
                  {p.brand} <span className="text-zinc-300 mx-1">/</span> {p.cat}
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none text-zinc-900 group-hover:text-orange-600 transition-colors">
                  {p.name}
                </h2>
              </div>

              {/* Dekorasional - Big Watermark Number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[16rem] font-black text-zinc-900 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none select-none">
                0{p.id}
              </div>

              {/* Card Footer Info */}
              <div className="z-10 flex justify-between items-end pt-12">
                <div className="space-y-1">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Top Speed</p>
                  <p className="font-mono text-2xl text-zinc-800 tracking-tight">{p.speed}</p>
                </div>
                
                {/* Interactive Arrow Button (Diubah jadi div agar tidak ada konflik button di dalam tautan) */}
                <div className="h-12 w-12 rounded-2xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-500 shadow-sm">
                   <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-45 transition-transform duration-500">
                      <path d="M1 14L14 1M14 1H5M14 1V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                   </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── NEON INFO STRIP (MARQUEE) ── */}
      <div className="bg-blue-600 py-4 overflow-hidden border-y border-blue-700 shadow-[0_0_30px_rgba(37,99,235,0.25)] relative z-20">
        <div className="flex gap-20 animate-marquee whitespace-nowrap font-black uppercase italic tracking-wider text-black text-xl">
          <span>Realistic Textures • 4K Assets • Ready for AeroSphere Viewer • High Poly Count • Optimized Mesh • </span>
          <span>Realistic Textures • 4K Assets • Ready for AeroSphere Viewer • High Poly Count • Optimized Mesh • </span>
        </div>
      </div>

      {/* ── PREMIUM PRICING ── */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl text-white font-black uppercase italic tracking-tighter mb-6 leading-tight">
              A Subscription <br />
              <span className="text-blue-500">Built for Creators</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg mb-12 max-w-md font-medium leading-relaxed">
              Dapatkan akses tak terbatas ke semua library model 3D premium kami dengan satu harga tetap. Tanpa biaya tersembunyi.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-zinc-900 pt-10">
              <div>
                <p className="text-4xl font-black text-white italic">120+</p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-2">Premium Assets</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white italic">Weekly</p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-2">New Updates</p>
              </div>
            </div>
          </div>

          {/* Pricing Box - Glassmorphism Card */}
          <div className="bg-zinc-900/30 border border-zinc-900 p-8 md:p-12 rounded-[2rem] relative overflow-hidden backdrop-blur-sm shadow-2xl">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-5 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-bl-2xl shadow-md">
              Most Popular
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Master Access</h3>
            <p className="text-zinc-400 text-xs md:text-sm mb-10 font-medium">Semua yang kamu butuhkan untuk proyek visualisasi profesional.</p>
            
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-5xl md:text-6xl font-black tracking-tighter italic text-white">Rp 149rb</span>
              <span className="text-zinc-500 font-mono text-sm">/mo</span>
            </div>

            <ul className="space-y-4 mb-12">
              {['Unlimited 3D Downloads', 'Commercial License', 'Priority Support', 'Raw Files Access (.obj, .fbx)'].map((list) => (
                <li key={list} className="flex items-center gap-3 text-sm text-zinc-300 border-b border-zinc-900/60 pb-3.5 last:border-0 last:pb-0 font-medium">
                  <span className="text-blue-500 font-bold">✓</span> {list}
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-black py-4.5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <Card />
      <Footer />

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1.5px #2563eb;
          color: transparent;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}