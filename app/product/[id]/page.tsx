'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../component/header';
import Footer from '../../component/footer';

// Import komponen 3D kamu
import Porsce911 from "../../component/3D/porsche911";
import HondaShadow from "../../component/3D/hondaShadow";
import Hondacrf from "../../component/3D/hondacrf";

// Data lokal untuk dicocokkan berdasarkan ID URL
const productsData = [
  { 
    id: 1, 
    name: '911 GT3 RS', 
    brand: 'Porsche', 
    cat: 'Cars', 
    speed: '312 km/h', 
    desc: 'Dirancang untuk performa murni di lintasan balap dengan aerodinamika tingkat tinggi dan mesin flat-six naturally aspirated.',
    model: <Porsce911/>
  },
  { 
    id: 2, 
    name: 'Rebel 500', 
    brand: 'Honda', 
    cat: 'Motorcycles', 
    speed: '160 km/h', 
    desc: 'Motor cruiser modern yang memadukan desain klasik dengan teknologi andal untuk kenyamanan berkendara harian maupun turing.',
    model: <HondaShadow/>
  },
  { 
    id: 3, 
    name: 'Cessna Citation', 
    brand: 'Textron', 
    cat: 'Airplanes', 
    speed: '848 km/h', 
    desc: 'Jet bisnis premium berkecepatan tinggi yang menawarkan kabin mewah serta efisiensi performa penerbangan jarak jauh.',
    model: <Hondacrf/> // Silakan ganti ke komponen Airplane kamu jika sudah ada
  },
  { 
    id: 4, 
    name: 'S 1000 RR', 
    brand: 'BMW', 
    cat: 'Motorcycles', 
    speed: '303 km/h', 
    desc: 'Superbike legendaris dengan teknologi kontrol traksi mutakhir dan mesin bertenaga buas untuk dominasi total di sirkuit.',
    model: <Hondacrf/> // Silakan ganti ke komponen BMW kamu jika sudah ada
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  
  // Mencari produk yang sesuai dengan ID dari URL params
  const product = productsData.find((p) => p.id === Number(params.id));

  // Jika produk tidak ditemukan
  if (!product) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center text-zinc-900">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/product" className="text-orange-500 font-bold hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-zinc-900 min-h-screen flex flex-col">
      <Header/>

      
      <main className="flex-grow pt-32 max-w-7xl w-full mx-auto px-6 pb-20">
        
        
        <Link href="/product" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-orange-500 transition-colors mb-12">
          ← Back to Catalogue
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
          <div className="bg-zinc-950 border border-zinc-900 rounded-[2rem] h-[400px] md:h-[550px] relative overflow-hidden shadow-inner flex items-center justify-center">
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent)] pointer-events-none" />
            
            <div className="w-full h-full outline-none">
              {product.model}
            </div>
          </div>

          
          <div className="space-y-8">
            <div>
              <span className="text-orange-600 font-mono text-sm font-bold tracking-widest uppercase block mb-2">
                {product.brand}  {product.cat}
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-zinc-900 leading-none">
                {product.name}
              </h1>
            </div>

            <p className="text-zinc-600 text-lg leading-relaxed font-medium">
              {product.desc}
            </p>

            
            <div className="grid grid-cols-2 gap-4 border-t border-b border-zinc-100 py-6">
              <div>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Performance</p>
                <p className="text-2xl font-black italic tracking-tight text-zinc-900 mt-1">{product.speed}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">File Format</p>
                <p className="text-2xl font-black italic tracking-tight text-zinc-900 mt-1">.GLTF / .GLB</p>
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-zinc-900 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-orange-500 transition-colors shadow-lg hover:shadow-orange-500/20">
                Open in AeroSphere Viewer
              </button>
              <button className="px-8 py-4 border border-zinc-200 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-zinc-50 transition-colors">
                Download Assets
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer/>
    </div>
  );
}