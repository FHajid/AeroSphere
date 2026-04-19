import React from 'react'
import Header from '../component/header'
import Card from '../component/card' // your existing feature card component

const plans = [
  {
    name: 'Explorer',
    price: 'Free',
    period: null,
    description: 'Cocok untuk pengguna yang ingin menjelajahi showcase motor 3D.',
    features: ['5 model 3D tersedia', 'Rotasi & zoom dasar', 'Spesifikasi mesin standar', 'Resolusi 1080p'],
    cta: 'Mulai gratis',
    highlight: false,
  },
  {
    name: 'Enthusiast',
    price: 'Rp 99.000',
    period: '/ bulan',
    description: 'Untuk para antusias otomotif yang ingin pengalaman lebih mendalam.',
    features: ['Semua model 3D', 'Eksplorasi komponen internal', 'Data teknis lengkap', 'Resolusi 4K', 'Tanpa watermark'],
    cta: 'Mulai sekarang',
    highlight: true,
  },
  {
    name: 'Studio',
    price: 'Rp 299.000',
    period: '/ bulan',
    description: 'Untuk profesional dan dealership yang butuh akses penuh.',
    features: ['Semua fitur Enthusiast', 'API akses', 'Custom branding', 'Prioritas support', 'Export 3D assets'],
    cta: 'Hubungi kami',
    highlight: false,
  },
]

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-32 flex flex-col items-center text-center gap-6">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-400">
            AeroSphere Technology
          </span>
          <h1 className="text-5xl sm:text-7xl font-medium tracking-tight text-zinc-900 leading-[1.05] max-w-4xl">
            See every motor in a new dimension
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-xl">
            Platform showcase motor 3D interaktif pertama di Indonesia. Jelajahi detail mesin,
            komponen, dan spesifikasi secara real-time langsung di browser Anda.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <button className="px-6 py-3 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-black transition-colors">
              Coba gratis
            </button>
            <button className="px-6 py-3 rounded-xl border border-zinc-200 text-zinc-700 text-sm font-medium hover:bg-zinc-50 transition-colors">
              Lihat demo →
            </button>
          </div>

          {/* Hero visual placeholder — replace with your Three.js canvas */}
          <div className="mt-12 w-full max-w-4xl aspect-[16/7] rounded-2xl border border-zinc-100 bg-zinc-50 flex items-center justify-center">
            <p className="text-sm text-zinc-300 tracking-wide uppercase">3D Viewer Canvas</p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="border-b border-zinc-100">
        <Card />
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 sm:py-32 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-400 mb-3">
              Pricing
            </p>
            <h2 className="text-4xl font-medium tracking-tight text-zinc-900 mb-4">
              Pilih paket yang tepat
            </h2>
            <p className="text-base text-zinc-500 max-w-md mx-auto leading-relaxed">
              Mulai gratis, upgrade kapan saja. Tidak ada biaya tersembunyi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`
                  relative flex flex-col gap-6 rounded-2xl p-8 border transition-all
                  ${plan.highlight
                    ? 'bg-zinc-900 border-zinc-900 text-white'
                    : 'bg-white border-zinc-100 hover:border-zinc-200'}
                `}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full bg-white text-zinc-900 border border-zinc-200 whitespace-nowrap">
                    Most popular
                  </span>
                )}

                <div>
                  <p className={`text-xs font-medium tracking-[0.12em] uppercase mb-3 ${plan.highlight ? 'text-zinc-400' : 'text-zinc-400'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-medium ${plan.highlight ? 'text-white' : 'text-zinc-900'}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-sm ${plan.highlight ? 'text-zinc-400' : 'text-zinc-400'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className={`mt-2 text-sm leading-relaxed ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.highlight ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      <svg className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-zinc-400' : 'text-zinc-400'}`} viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`
                    mt-2 w-full py-2.5 rounded-xl text-sm font-medium transition-colors
                    ${plan.highlight
                      ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                      : 'border border-zinc-200 text-zinc-700 hover:bg-zinc-50'}
                  `}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-100 bg-zinc-50 px-8 py-16 text-center flex flex-col items-center gap-6">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-400">
              Siap memulai?
            </p>
            <h2 className="text-4xl font-medium tracking-tight text-zinc-900 leading-tight">
              Jelajahi motor impian Anda<br />dalam dimensi baru
            </h2>
            <p className="text-base text-zinc-500 max-w-md leading-relaxed">
              Bergabung dengan ribuan antusias otomotif yang sudah menggunakan AeroSphere.
              Gratis untuk memulai, tanpa kartu kredit.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-6 py-3 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-black transition-colors">
                Mulai gratis sekarang
              </button>
              <button className="px-6 py-3 rounded-xl border border-zinc-200 text-zinc-700 text-sm font-medium hover:bg-white transition-colors">
                Pelajari lebih lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}