'use client';

import React from 'react';

const testimonials = [
  {
    quote: "Aset .glb dari AeroSphere bener-bener ringan banget! Biasanya web saya langsung drop FPS-nya pas nge-load model mobil, tapi di sini mesh-nya udah di-optimize buat WebGL.",
    name: "Rian Kurnia",
    role: "Front-end Developer",
    company: "PixelCraft Studio",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "Sebagai 3D Artist, saya sangat terbantu dengan kualitas tekstur 4K yang disediakan. Top speed dan detail mesinnya akurat, pas banget buat kebutuhan visualisasi prototipe.",
    name: "Aris Munandar",
    role: "3D Generalist",
    company: "Veloce Motion",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "Langganan Master Access bener-bener worth it. Update asetnya mingguan dan format filenya langsung siap pakai tanpa perlu saya tweak lagi di Blender. Gila sih!",
    name: "Siti Rahma",
    role: "UI/UX Designer",
    company: "AeroTech Indonesia",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonial() {
  return (
    <section className="py-24 bg-white text-zinc-900 border-t border-zinc-100 relative overflow-hidden">
      {/* Dekorasi Glow Oranye Halus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-orange-600 mb-3">
             Community Feedback
          </h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-zinc-900 leading-none">
            Trusted by Next-Gen Creators
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="bg-zinc-50 border border-zinc-200/60 p-8 rounded-[2rem] flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:border-orange-500/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
            >
              {/* Bagian Isi Review */}
              <div>
                {/* Rating Bintang Oranye */}
                <div className="flex gap-1 mb-6 text-orange-500 text-lg">
                  {'★'.repeat(5)}
                </div>
                
                <p className="text-zinc-600 text-sm leading-relaxed font-medium italic">
                 &qout {t.quote} &qout;
                </p>
              </div>

              {/* Bagian Profil User */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-zinc-200/50">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-11 h-11 rounded-full object-cover border border-zinc-200 shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-black text-zinc-900 tracking-tight uppercase">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    {t.role} <span className="text-zinc-300 mx-0.5">@</span> <span className="text-zinc-500 font-sans font-bold">{t.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}