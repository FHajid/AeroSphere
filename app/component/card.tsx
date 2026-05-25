'use client';

import { 
  CpuChipIcon, 
  PaintBrushIcon, // Mengganti VariableIcon agar lebih pas dengan 'Customization/Desain'
  CubeTransparentIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Real-time 3D Rendering',
    description:
      'Rasakan detail presisi dari setiap sudut kendaraan dengan teknologi Three.js terbaru langsung di browser Anda.',
    icon: CubeTransparentIcon,
    color: 'group-hover:text-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.08)]',
    borderColor: 'group-hover:border-orange-500/30'
  },
  {
    name: 'High Performance',
    description:
      'Optimasi Next.js memastikan transisi antar model 3D berjalan mulus tanpa lag di perangkat apapun.',
    icon: RocketLaunchIcon,
    color: 'group-hover:text-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.08)]',
    borderColor: 'group-hover:border-orange-500/30'
  },
  {
    name: 'Engine Specifications',
    description:
      'Data teknis yang akurat untuk setiap model, memberikan informasi mendalam bagi para antusias otomotif.',
    icon: CpuChipIcon,
    color: 'group-hover:text-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.08)]',
    borderColor: 'group-hover:border-orange-500/30'
  },
  {
    name: 'Interactive Customization',
    description:
      'Kemampuan untuk mengeksplorasi komponen internal dan mengubah warna aset secara interaktif.',
    icon: PaintBrushIcon,
    color: 'group-hover:text-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.08)]',
    borderColor: 'group-hover:border-orange-500/30'
  },
]

export default function Card() {
  return (
    <div className="bg-zinc-50 py-24 sm:py-32 rounded-[2.5rem] my-10 relative overflow-hidden border border-zinc-200/60">
      {/* Background Soft Radial Glow Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.03),transparent)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-400">
            AeroSphere Technology
          </h2>
          <p className="mt-3 text-4xl font-black tracking-tighter text-zinc-900 sm:text-5xl uppercase italic leading-none">
            Engineered For Visual Speed
          </p>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-zinc-500 max-w-xl mx-auto font-medium">
            Kami menggabungkan seni otomotif dengan teknologi web modern untuk memberikan pengalaman visual yang belum pernah ada sebelumnya.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className={`relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-zinc-200/60 transition-all duration-500 group hover:-translate-y-2 hover:border-orange-500/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] ${feature.borderColor}`}
              >
                <div>
                  {/* Icon Box */}
                  <div className={`flex size-12 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-200/80 text-zinc-500 transition-all duration-500 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-transparent ${feature.color}`}>
                    <feature.icon aria-hidden="true" className="size-5 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <dt className="mt-6 text-base font-black leading-tight text-zinc-900 tracking-tight uppercase italic">
                    {feature.name}
                  </dt>

                  {/* Description */}
                  <dd className="mt-2.5 text-xs leading-relaxed text-zinc-400 font-medium">
                    {feature.description}
                  </dd>
                </div>

                {/* Garis aksen bawah yang melebar saat di-hover */}
                <div className="mt-8 w-6 h-[2px] bg-zinc-200 rounded-full transition-all duration-500 group-hover:w-12 group-hover:bg-orange-500" />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}