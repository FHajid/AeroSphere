import React from 'react'
import Header from '../component/header'
import Image from 'next/image'
import Footer from '../component/footer'
import Nakedbike from '../../public/Nakedbike.jpg'

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans">
      <Header />

      <main className="max-w-[1020px] mx-auto px-6 py-12">
        {/* HERO SECTION */}
        <section className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            ABOUT US
          </h1>
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={Nakedbike}
              alt="Yamaha Naked Bike"
              width={1020}
              height={500}
              style={{ width: '100%', height: 'auto' }}
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </section>

        {/* INTRO & MISSION SECTION */}
        <section className="grid md:grid-cols-2 gap-12 mb-20 items-start">
          <div className="border-l-4 border-zinc-900 pl-6">
            <h2 className="text-2xl md:text-3xl font-medium leading-relaxed italic">
             `&quot;` Kami percaya bahwa setiap putaran mesin adalah cerita tentang kebebasan dan presisi teknik yang luar biasa.`&quot;`
            </h2>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        {/* TEAM, VALUES, VISION (GRID SYSTEM) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:bg-zinc-100 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Our Team</h3>
            <p className="text-zinc-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:bg-zinc-100 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-zinc-600 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:bg-zinc-100 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-zinc-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}