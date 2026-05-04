'use client';

import React, { useState } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Card from '../component/card';

// 1. Data Dummy - Nanti bisa kamu pindahkan ke file konstanta tersendiri
const allItems = [
  { id: 1, name: 'Porsche 911', category: 'Cars', type: 'Sport', image: '/porsche.jpg' },
  { id: 2, name: 'Honda Shadow', category: 'Motorcycles', type: 'Cruiser', image: '/shadow.jpg' },
  { id: 3, name: 'Honda CRF', category: 'Motorcycles', type: 'Offroad', image: '/crf.jpg' },
  { id: 4, name: 'Private Jet v.1', category: 'Airplanes', type: 'Luxury', image: '/jet.jpg' },
];

const plans = [
  {
    name: 'Explorer',
    price: 'Free',
    period: null,
    description: 'Cocok untuk pemula yang ingin melihat-lihat.',
    features: ['5 model 3D', 'Basic Viewer', 'Standard Specs'],
    cta: 'Mulai Gratis',
    highlight: false,
  },
  {
    name: 'Enthusiast',
    price: 'Rp 99rb',
    period: '/bln',
    description: 'Pengalaman mendalam untuk antusias otomotif.',
    features: ['Semua model 3D', 'Explode View', '4K Resolution', 'No Watermark'],
    cta: 'Pilih Paket',
    highlight: true,
  },
  {
    name: 'Studio',
    price: 'Rp 299rb',
    period: '/bln',
    description: 'Akses penuh untuk profesional dan bisnis.',
    features: ['Semua fitur Enthusiast', 'API Access', 'Custom Branding', 'Export Assets'],
    cta: 'Hubungi Kami',
    highlight: false,
  },
];

export default function ProductPage() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? allItems 
    : allItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="bg-zinc-950 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-500 font-mono tracking-[0.4em] uppercase text-xs mb-4">AeroSphere Catalog</p>
          <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
            THE <span className="text-orange-500">COLLECTION.</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Pilih kendaraan impianmu dan jelajahi setiap detail teknis dalam ruang tiga dimensi yang imersif.
          </p>
        </div>
      </section>

      {/* ── CATEGORY FILTER (Sticky) ── */}
      <section className="sticky top-[64px] z-30 bg-white/80 backdrop-blur-md border-b border-zinc-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-3 md:gap-6 overflow-x-auto whitespace-nowrap">
          {['All', 'Motorcycles', 'Cars', 'Airplanes'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                filter === cat 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item) => (
              <div key={item.id} className="group">
                <div className="aspect-[16/10] bg-zinc-50 rounded-[2rem] overflow-hidden relative border border-zinc-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/10 group-hover:border-orange-500/20">
                  {/* Visual Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center font-black text-zinc-200 text-4xl italic group-hover:scale-110 transition-transform duration-700">
                    {item.name}
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/60 transition-all duration-500 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase shadow-xl">
                      View 3D Mode
                    </button>
                  </div>
                </div>
                <div className="mt-6 px-2 flex justify-between items-end">
                  <div>
                    <span className="text-orange-500 text-[10px] font-black tracking-widest uppercase">{item.type}</span>
                    <h3 className="text-2xl font-black text-zinc-900 tracking-tighter leading-none mt-1">{item.name}</h3>
                  </div>
                  <div className="text-zinc-300 font-mono text-xs italic tracking-tighter">
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE CARD (Tengah) ── */}
      <div className="bg-zinc-50 border-y border-zinc-100">
        <Card />
      </div>

      {/* ── PRICING SECTION ── */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">Pricing Plan</h2>
            <p className="text-zinc-500">Pilih akses yang sesuai dengan kebutuhan eksplorasimu.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`p-8 rounded-[2rem] border transition-all duration-300 ${
                  plan.highlight 
                  ? 'bg-zinc-950 border-zinc-900 text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white border-zinc-100 text-zinc-900 hover:border-orange-500/30'
                }`}
              >
                <p className={`text-[10px] font-black tracking-[0.2em] uppercase mb-6 ${plan.highlight ? 'text-orange-500' : 'text-zinc-400'}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-zinc-500 text-sm">{plan.period}</span>
                </div>
                <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-xs font-medium">
                      <div className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? 'bg-orange-500' : 'bg-zinc-300'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold text-xs tracking-widest uppercase transition-all ${
                  plan.highlight 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}