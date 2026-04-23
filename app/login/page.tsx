'use client';

import React, { useState } from 'react';
import Header from '../component/header';

export default function AuthPage() {
  // 1. State untuk menentukan tampilkan Login atau Register
  const [isLogin, setIsLogin] = useState(true);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // State tambahan untuk Register

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in:', { email, password });
    } else {
      console.log('Registering:', { name, email, password });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      
      <main className="flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl border border-zinc-100 transition-all duration-500">
          
          {/* Header Konten Berubah Dinamis */}
          <div className="text-center mb-10">
            <div className="inline-block w-12 h-12 bg-orange-500 rounded-xl mb-4 shadow-lg shadow-orange-500/20"></div>
            <h1 className="text-zinc-950 text-3xl font-black tracking-tighter uppercase">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-zinc-500 text-sm mt-2">
              {isLogin 
                ? 'Enter your credentials to access AeroSphere' 
                : 'Join us to explore the future of 3D vehicles'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Field Nama Hanya Muncul saat Register */}
            {!isLogin && (
              <div className="transition-all animate-in fade-in slide-in-from-top-2">
                <label className="block text-zinc-600 text-xs font-bold uppercase tracking-widest mb-2 ml-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
            )}

            <div>
              <label className="block text-zinc-600 text-xs font-bold uppercase tracking-widest mb-2 ml-1">
                Email Address
              </label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-zinc-600 text-xs font-bold uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-500/20"
            >
              {isLogin ? 'SIGN IN' : 'REGISTER NOW'}
            </button>
          </form>

          {/* Tombol Switch Mode */}
          <div className="mt-8 text-center border-t border-zinc-100 pt-6">
            <p className="text-zinc-500 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-orange-500 hover:underline font-bold transition-all"
              >
                {isLogin ? 'Register Here' : 'Login Here'}
              </button>
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}