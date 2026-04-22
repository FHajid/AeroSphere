'use client';

import React from 'react'
import Header from '../component/header'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        {/* Kontainer Utama */}
        <section className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200 border border-zinc-100">
          
          {/* SISI KIRI: Branding & Info */}
          <div className="w-full lg:w-5/12 bg-zinc-950 p-10 md:p-16 flex flex-col justify-between text-white relative overflow-hidden">
            {/* Dekorasi Aksen Orange */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
            
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
                GET IN <span className="text-orange-500">TOUCH.</span>
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Punya pertanyaan tentang model 3D atau ingin berkolaborasi dalam proyek otomotif berikutnya? Kami siap membantu Anda.
              </p>
            </div>

            <div className="mt-12 space-y-6 relative z-10">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Email Us</p>
                <p className="text-xl font-medium">hello@aerosphere.com</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Location</p>
                <p className="text-xl font-medium">Batam, Indonesia / Remote</p>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Form */}
          <div className="w-full lg:w-7/12 p-10 md:p-16 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-zinc-900 mb-2 uppercase tracking-wide">Full Name</label>
                  <input 
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-zinc-900" 
                    type="text" 
                    placeholder="Farhan Hajid" 
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-zinc-900 mb-2 uppercase tracking-wide">Email Address</label>
                  <input 
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-zinc-900" 
                    type="email" 
                    placeholder="farhan@example.com" 
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-bold text-zinc-900 mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  rows={5}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-zinc-900 resize-none" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button className="w-full md:w-max px-12 py-4 bg-zinc-950 text-white rounded-full font-bold text-lg hover:bg-orange-500 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-orange-500/20">
                Send Message
              </button>
            </form>
          </div>

        </section>
      </main>
    </div>
  )
}