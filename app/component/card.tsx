import { 
  CpuChipIcon, 
  VariableIcon, 
  CubeTransparentIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Real-time 3D Rendering',
    description:
      'Rasakan detail presisi dari setiap sudut motor dengan teknologi Three.js terbaru langsung di browser Anda.',
    icon: CubeTransparentIcon,
    color: 'group-hover:text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)]',
    borderColor: 'group-hover:border-blue-500/50'
  },
  {
    name: 'High Performance',
    description:
      'Optimasi Next.js 16 memastikan transisi antar model 3D berjalan mulus tanpa lag di perangkat apapun.',
    icon: RocketLaunchIcon,
    color: 'group-hover:text-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.1)]',
    borderColor: 'group-hover:border-purple-500/50'
  },
  {
    name: 'Engine Specifications',
    description:
      'Data teknis yang akurat untuk setiap model, memberikan informasi mendalam bagi para antusias otomotif.',
    icon: CpuChipIcon,
    color: 'group-hover:text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.1)]',
    borderColor: 'group-hover:border-amber-500/50'
  },
  {
    name: 'Interactive Customization',
    description:
      'Kemampuan untuk mengeksplorasi komponen internal motor secara interaktif dan mendalam.',
    icon: VariableIcon,
    color: 'group-hover:text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]',
    borderColor: 'group-hover:border-emerald-500/50'
  },
]

export default function Card() {
  return (
    <div className="bg-zinc-950 py-24 sm:py-32 rounded-[2.5rem] my-10 relative overflow-hidden border border-zinc-900">
      {/* Background Neon Grid Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-500">
            AeroSphere Technology
          </h2>
          <p className="mt-3 text-4xl font-black tracking-tighter text-white sm:text-5xl uppercase italic">
            Engineered For Visual Speed
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-400 max-w-xl mx-auto font-medium">
            Kami menggabungkan seni otomotif dengan teknologi web modern untuk memberikan pengalaman visual yang belum pernah ada sebelumnya.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className={`relative flex flex-col justify-between p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm transition-all duration-500 group hover:-translate-y-2 hover:bg-zinc-900/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] ${feature.borderColor}`}
              >
                <div>
                  {/* Icon Box */}
                  <div className={`flex size-12 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 transition-all duration-500 group-hover:bg-zinc-950 group-hover:border-transparent ${feature.color}`}>
                    <feature.icon aria-hidden="true" className="size-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <dt className="mt-6 text-lg font-bold leading-7 text-white tracking-tight uppercase">
                    {feature.name}
                  </dt>

                  {/* Description */}
                  <dd className="mt-2 text-sm leading-6 text-zinc-400 font-normal">
                    {feature.description}
                  </dd>
                </div>

                {/* Garis aksen bawah/indikator futuristik */}
                <div className="mt-6 w-8 h-[2px] bg-zinc-800 rounded-full transition-all duration-500 group-hover:w-full group-hover:bg-zinc-700" />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}