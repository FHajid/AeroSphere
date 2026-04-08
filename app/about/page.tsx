import React from 'react'
import Header from '../component/header'
import Image from 'next/image'

import Nakedbike from '../../public/Nakedbike.jpg'



export default function aboutPage() {
  return (
    <div className="bg-white min-h-screen text-black">
    
    <Header />

    <main 
    style={{ fontFamily: 'sans-serif', maxWidth: '1020px', margin: '0 auto', padding: '1.5rem ' }}>
            
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

      <section className="flex items-center">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className='text-3xl m-4'>Our Team</h2>
          <p className='text-lg m-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="bg-gray-200 p-4 rounded-lg ml-4">
          <h2 className='text-3xl m-4'>Our Values</h2>
          <p className='text-lg m-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="bg-gray-200 p-4 rounded-lg ml-4">
          <h2 className='text-3xl m-4'>Our Vision</h2>
          <p className='text-lg m-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

      </section>

    <section className='item-center text-center p-4 bg-gray-100'>
      
      <p className='text-4xl m-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <h1 className='text-7xl'>Contact US</h1>
    </section>

    </main>
    
    

    </div>
  )
}
