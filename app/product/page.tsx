'use client';

import React, { useState } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Card from '../component/card';

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
    <div className="bg-[#f4f4f4] text-zinc-100 min-h-screen selection:bg-orange-500 selection:text-white">
      <Header />

      {/* ── MINIMALIST HERO ── */}
      <section className="pt-40 pb-20 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl text-zinc-900 font-black italic tracking-tighter leading-none mb-6 uppercase">
              Precision <br /> 
              <span className="text-orange-500 text-outline">Engineering</span>
            </h1>
            <p className="text-zinc-500 font-medium text-lg italic uppercase tracking-widest">
              Digital Assets for the next generation of visualization.
            </p>
          </div>
          <div className="flex gap-4 pb-2">
            {['All', 'Cars', 'Motorcycles', 'Airplanes'].map((t) => (
              <button 
                key={t}
                onClick={() => setActiveTab(t)}
                className={`text-[10px] tracking-[0.3em] uppercase font-bold px-4 py-2 border transition-all ${
                  activeTab === t ? 'bg-white text-black border-white' : 'border-zinc-800 text-zinc-500 hover:border-zinc-500'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENTO PRODUCT GRID ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-[#515151]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {filtered.map((p, index) => (
            <div 
              key={p.id} 
              className={`group relative overflow-hidden bg-zinc-900/50 border border-zinc-800 p-8 min-h-[400px] flex flex-col justify-between transition-all hover:bg-zinc-900 hover:border-orange-500/50 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="z-10">
                <span className="text-orange-500 font-mono text-xs tracking-tighter block mb-2">{p.brand} {'//'} {p.cat}</span>
                <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none">{p.name}</h2>
              </div>

              {/* Dekorasional - Angka Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[15rem] font-black group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                0{p.id}
              </div>

              <div className="z-10 flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Top Speed</p>
                  <p className="font-mono text-xl">{p.speed}</p>
                </div>
                <button className="h-12 w-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
                   <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-45 transition-transform">
                      <path d="M1 14L14 1M14 1H5M14 1V10" stroke="currentColor" strokeWidth="2" />
                   </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <div className="bg-orange-500 py-4 overflow-hidden border-y border-orange-600">
        <div className="flex gap-20 animate-marquee whitespace-nowrap font-black uppercase italic tracking-tighter text-black text-2xl">
          <span>Realistic Textures • 4K Assets • Ready for AeroSphere Viewer • High Poly Count • Optimized Mesh • </span>
          <span>Realistic Textures • 4K Assets • Ready for AeroSphere Viewer • High Poly Count • Optimized Mesh • </span>
        </div>
      </div>

      {/* ── CLEAN PRICING ── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl text-zinc-900 font-black uppercase italic tracking-tighter mb-6 leading-tight">
              A Subscription <br />
              <span className="text-orange-500">Built for Creators</span>
            </h2>
            <p className="text-zinc-600 text-lg mb-10 max-w-md">
              Dapatkan akses tak terbatas ke semua library model 3D premium kami dengan satu harga tetap. Tanpa biaya tersembunyi.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-zinc-800 pt-10">
              <div>
                <p className="text-3xl font-bold">120+</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Premium Assets</p>
              </div>
              <div>
                <p className="text-3xl font-bold">Weekly</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mt-2">New Updates</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">
              Most Popular
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">Master Access</h3>
            <p className="text-zinc-500 text-sm mb-8">Semua yang kamu butuhkan untuk proyek visualisasi profesional.</p>
            
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-6xl font-black tracking-tighter italic">Rp 149rb</span>
              <span className="text-zinc-500 font-mono">/mo</span>
            </div>

            <ul className="space-y-4 mb-12">
              {['Unlimited 3D Downloads', 'Commercial License', 'Priority Support', 'Raw Files Access (.obj, .fbx)'].map((list) => (
                <li key={list} className="flex items-center gap-3 text-sm border-b border-zinc-800 pb-3 last:border-0">
                  <span className="text-orange-500">✓</span> {list}
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-black py-5 font-black uppercase tracking-widest hover:bg-orange-500 transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <Card />
      <Footer />

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1px #f97316;
          color: transparent;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}