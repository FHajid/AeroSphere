import { 
  CpuChipIcon, 
  VariableIcon, 
  CubeTransparentIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/outline' // Pakai outline agar lebih clean

const features = [
  {
    name: 'Real-time 3D Rendering',
    description:
      'Rasakan detail presisi dari setiap sudut motor dengan teknologi Three.js terbaru langsung di browser Anda.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'High Performance',
    description:
      'Optimasi Next.js 16 memastikan transisi antar model 3D berjalan mulus tanpa lag di perangkat apapun.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Engine Specifications',
    description:
      'Data teknis yang akurat untuk setiap model, memberikan informasi mendalam bagi para antusias otomotif.',
    icon: CpuChipIcon,
  },
  {
    name: 'Interactive Customization',
    description:
      'Kemampuan untuk mengeksplorasi komponen internal motor secara interaktif dan mendalam.',
    icon: VariableIcon,
  },
]

export default function Card() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500">
            AeroSphere Technology
          </h2>
          <p className="mt-2 text-4xl font-black tracking-tighter text-zinc-900 sm:text-5xl">
            The Future of Automotive Showcase
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Kami menggabungkan seni otomotif dengan teknologi web modern untuk memberikan pengalaman visual yang belum pernah ada sebelumnya.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 group">
                <dt className="text-lg font-bold leading-7 text-zinc-900">
                  <div className="absolute top-0 left-0 flex size-12 items-center justify-center rounded-xl bg-zinc-900 transition-transform group-hover:scale-110 group-hover:bg-black">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-zinc-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}