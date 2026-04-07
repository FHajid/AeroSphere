import React from 'react'
import Header from '../component/header'
import Image from 'next/image'

import Nakedbike from '../../public/Nakedbike.jpg'



export default function aboutPage() {
  return (
    <>
    
    <Header />

    <main style={{ fontFamily: 'sans-serif', maxWidth: '1020px', margin: '0 auto', padding: '1.5rem ' }}>
            
      <section>
        <h1 className='text-6xl'>ABOUT US</h1>

        <Image
          src={Nakedbike}
          alt="Naked Bike"
          width={920} 
          height={400}
          // Tambahkan ini supaya lebarnya full dan tingginya otomatis (aspect ratio terjaga)
          style={{ width: '100%', height: 'auto' }} 
          className="rounded md:rounded-lg object-cover mt-4 mb-4" 
          priority // Tambahkan ini kalau gambarnya ada di bagian paling atas (Hero)
        />
      </section>

      <section className='flex item-center'>
      
      <div>
        
        <h2 className='text-3xl m-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h2>
      </div>

      <div>
        <h2 className='text-4xl m-4'>Our Mission</h2>
        <p className='text-lg m-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      </section>

      
    </main>
    
    
    </>
  )
}
