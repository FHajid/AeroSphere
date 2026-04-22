'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../component/header';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Di sini nanti kamu masukkan logika backend (Firebase/Supabase/Auth.js)
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl">
          
          {/* Logo & Header */}
          <div className="text-center mb-10">
            <div className="inline-block w-12 h-12 bg-orange-500 rounded-xl mb-4"></div>
            <h1 className="text-white text-3xl font-black tracking-tighter">WELCOME BACK</h1>
            <p className="text-zinc-500 text-sm mt-2">Enter your credentials to access AeroSphere</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2 ml-1">
                Email Address
              </label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-white border border-zinc-800 rounded-xl text-gray-800 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-white text-xs font-bold uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-white border border-zinc-800 rounded-xl text-gray-800 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-500/20"
            >
              SIGN IN
            </button>
          </form>

          {/* Footer Login */}
          <div className="mt-8 text-center border-t border-zinc-900 pt-6">
            <p className="text-zinc-500 text-sm">
              Dont have an account?{' '}
              <Link href="/register" className="text-orange-500 hover:underline font-bold">
                Create one
              </Link>
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}