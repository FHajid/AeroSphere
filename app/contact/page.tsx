import React from 'react'
import Header from '../component/header'

export default function contactPage() {
  return (

    <div className="min-h-screen text-black bg-white">
        <Header />

        <section className='flex flex-col md:flex-row items-center justify-center bg-gray-200 rounded-xl m-6 md:my-12 md:mx-80 min-h-[750px] gap-8 '>
        
        <div className='flex flex-col items-center text-center w-full md:w-1/2 max-w-2xl' >
          <h1 className='text-4xl md:text-6xl font-bold m-4 uppercase tracking-tighter'>GET IN TOUCH</h1>
          <p className='text-xl md:text-2xl m-4 opacity-80'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          </p>
        </div>

        <div className='flex flex-col items-stretch w-full md:w-1/2 max-w-md bg-white p-8 rounded-2xl shadow-sm' >
          <label className="font-semibold ml-1">Name</label>
          <input className="mt-1 mb-4 p-3 border rounded " type="text" placeholder="Enter your name" />
          
          <label className="font-semibold ml-1">Email</label>
          <input className="mt-1 mb-4 p-3 border border rounded" type="email" placeholder="Enter your email" />
          
          <label className="font-semibold ml-1">Message</label>
          <textarea className="mt-1 mb-6 p-3 border border rounded" placeholder="Enter your message"></textarea>
          
          <button className="bg-black text-white py-3 rounded-lg font-bold hover:bg-zinc-800 transition-colors">
            Send Message
          </button>
        </div>


        </section>

    
    </div>

    

  )
}
