import React from 'react'
import Header from '../component/header'
import Image from 'next/image'
import Footer from '../component/footer'
import Nakedbike from '../../public/Nakedbike.jpg'

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-[1100px] mx-auto px-6 py-20 text-zinc-900 font-sans">
        
        {/* HERO SECTION */}
        <section className="mb-24 relative">
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-orange-500 font-mono tracking-[0.3em] uppercase text-sm mb-2">Since 2026</p>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                ABOUT <span className="text-zinc-400">US.</span>
              </h1>
            </div>
            <p className="text-zinc-500 max-w-xs text-sm mb-2">
              AeroSphere adalah platform visualisasi kendaraan masa depan yang menggabungkan seni dan teknologi digital.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl shadow-2xl bg-zinc-100">
             {/* Aksen Overlay Oranye saat Hover */}
            <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
            
            <Image
              src={Nakedbike}
              alt="Yamaha Naked Bike"
              width={1100}
              height={600}
              className="object-cover w-full h-[500px] transition-transform duration-[1.5s] group-hover:scale-110"
              priority
            />
          </div>
        </section>

        {/* CORE PHILOSOPHY */}
        <section className="grid md:grid-cols-12 gap-12 mb-32 items-center">
          <div className="md:col-span-7 border-l-8 border-orange-500 pl-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-zinc-900">
              &quot;Kami percaya bahwa setiap putaran mesin adalah cerita tentang <span className="text-orange-500">kebebasan</span> dan presisi teknik yang luar biasa.&quot;
            </h2>
          </div>
          <div className="md:col-span-5">
            <h3 className="text-zinc-400 font-mono uppercase tracking-widest text-xs mb-4">Our Mission</h3>
            <p className="text-xl text-zinc-600 leading-relaxed font-light">
              Menghadirkan detail kendaraan yang tidak terjangkau oleh mata biasa melalui interaksi 3D yang presisi dan imersif.
            </p>
          </div>
        </section>

        {/* VALUES GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {[
            { title: 'Our Team', desc: 'Kumpulan desainer 3D dan engineer yang berdedikasi tinggi.' },
            { title: 'Our Values', desc: 'Inovasi tanpa batas, kejujuran dalam detail, dan performa maksimal.' },
            { title: 'Our Vision', desc: 'Menjadi standar global dalam industri visualisasi otomotif digital.' }
          ].map((item, idx) => (
            <div key={idx} className="relative group p-10 rounded-3xl bg-zinc-50 hover:bg-zinc-900 transition-all duration-500 border border-zinc-100">
              <span className="text-zinc-200 group-hover:text-zinc-800 text-6xl font-black absolute top-4 right-8 transition-colors">
                0{idx + 1}
              </span>
              <h3 className="text-2xl font-black mb-4 relative z-10 group-hover:text-white transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="text-zinc-500 relative z-10 group-hover:text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-6 w-0 group-hover:w-full h-1 bg-orange-500 transition-all duration-500" />
            </div>
          ))}
        </section>

      </main>

      <Footer />
    </div>
  )
}