'use client';

import React from 'react'
import Header from '../component/header'
import Image from 'next/image'
import Footer from '../component/footer'
import Nakedbike from '../../public/Nakedbike.jpg'

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen selection:bg-orange-500 selection:text-white">
      <Header />

      <main className="max-w-[1100px] mx-auto px-6 py-24 text-zinc-900 font-sans">
        
        {/* ── HERO SECTION ── */}
        <section className="mb-28 relative">
          <div className="flex flex-col md:flex-row items-baseline md:items-end justify-between mb-10 gap-6">
            <div>
              <p className="text-orange-600 font-mono tracking-[0.4em] uppercase text-xs font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 inline-block animate-pulse" />
                Since 2026 / AeroSphere
              </p>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase italic">
                ABOUT <span className="text-zinc-200 group-hover:text-zinc-300 transition-colors">US.</span>
              </h1>
            </div>
            <p className="text-zinc-500 max-w-sm text-sm leading-relaxed font-medium">
              AeroSphere adalah ekosistem visualisasi kendaraan masa depan yang menggabungkan presisi seni 3D dengan performa teknologi digital mutakhir.
            </p>
          </div>

          {/* Hero Banner Image */}
          <div className="group relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] bg-zinc-100 border border-zinc-200/50">
            {/* Aksen Overlay Oranye lembut saat Hover */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
            
            <Image
              src={Nakedbike}
              alt="Yamaha Naked Bike Showcase"
              width={1100}
              height={600}
              className="object-cover w-full h-[450px] md:h-[550px] transition-transform duration-[2s] ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
              priority
            />
          </div>
        </section>

        {/* ── CORE PHILOSOPHY ── */}
        <section className="grid md:grid-cols-12 gap-12 mb-36 items-center bg-zinc-50 p-10 md:p-16 rounded-[2.5rem] border border-zinc-100">
          <div className="md:col-span-7 border-l-4 md:border-l-8 border-orange-500 pl-6 md:pl-10">
            <h2 className="text-2xl md:text-4xl font-black leading-tight tracking-tight text-zinc-900 uppercase italic">
              &quot;Kami percaya bahwa setiap lekukan bodi dan putaran mesin adalah cerita tentang <span className="text-orange-600">kebebasan</span> serta kesempurnaan teknik.&quot;
            </h2>
          </div>
          <div className="md:col-span-5">
            <h3 className="text-orange-600 font-mono uppercase tracking-[0.3em] text-xs font-bold mb-3"> Our Mission</h3>
            <p className="text-lg text-zinc-500 leading-relaxed font-medium">
              Menghadirkan detail kendaraan makro yang tidak terjangkau oleh mata biasa melalui interaksi real-time WebGL yang presisi, ringan, dan imersif.
            </p>
          </div>
        </section>

        {/* ── VALUES GRID ── */}
        <section className="mb-12">
          <div className="mb-12">
            <h3 className="text-zinc-400 font-mono uppercase tracking-[0.3em] text-xs font-bold mb-2">Core Foundations</h3>
            <div className="h-[1px] w-full bg-zinc-100" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Our Team', desc: 'Kumpulan desainer 3D antusias, automotive geek, dan software engineer yang berdedikasi tinggi mengubah piksel menjadi kecepatan.' },
              { title: 'Our Values', desc: 'Inovasi tanpa batas pada performa rendering, kejujuran penuh dalam detail geometri mesh, dan optimasi tanpa kompromi.' },
              { title: 'Our Vision', desc: 'Menjadi standar global baru dan library utama pilihan kreator dalam industri visualisasi otomotif digital berbasis web.' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="relative group p-10 rounded-[2rem] bg-zinc-50/50 hover:bg-white transition-all duration-500 border border-zinc-200/40 hover:border-orange-500/20 hover:shadow-[0_20px_40px_rgba(249,115,22,0.03)] flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-xl font-black text-zinc-900 tracking-tight uppercase italic">
                      {item.title}
                    </h4>
                    <span className="text-zinc-200 font-mono text-xs font-bold bg-zinc-100 px-3 py-1 rounded-full group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                     0{idx + 1}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
                
                {/* Garis aksen bawah yang melebar estetik */}
                <div className="mt-8 w-6 h-[2px] bg-zinc-200 rounded-full transition-all duration-500 group-hover:w-full group-hover:bg-orange-500" />
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}