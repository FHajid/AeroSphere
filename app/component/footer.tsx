import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* TOP SECTION: Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-6">
              READY TO BUILD YOUR <span className="text-orange-500 text-glow">DREAM MACHINE?</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Mari berkolaborasi untuk mewujudkan visualisasi 3D kendaraan impian Anda dengan teknologi web terdepan.
            </p>
          </div>
          
          <Link 
            href="/contact" 
            className="group relative px-12 py-6 bg-white text-black font-bold text-xl rounded-full overflow-hidden transition-all hover:bg-orange-500 hover:text-white"
          >
            CONTACT US
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </div>

        <hr className="border-zinc-800 mb-12" />

        {/* BOTTOM SECTION: Links & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center text-white font-bold text-xs">A</div>
            <span className="font-bold tracking-widest text-white">AEROSPHERE</span>
          </div>

          <div className="flex gap-8">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link href="/product" className="hover:text-orange-500 transition-colors">Products</Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
          </div>

          <p>© 2026 AeroSphere. Built for the future.</p>
        </div>
      </div>
    </footer>
  )
}