'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { label: 'Homepage', href: '../' },
  { label: 'Product',  href: '../product' },
  { label: 'About',    href: '../about' },
  { label: 'Contact',  href: '../contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white relative z-10">

      {/* ── Desktop nav ── */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">

        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#">
            <span className="sr-only">AeroSphere</span>
            <img
              alt="AeroSphere"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden -m-2.5 p-2.5 text-zinc-400 hover:text-zinc-600"
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="size-6" aria-hidden="true" />
        </button>

        {/* Links (desktop only) */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
              {label}
            </a>
          ))}
        </div>

        {/* Log in (desktop only) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
            Log in →
          </a>
        </div>

      </nav>

      {/* ── Mobile drawer ── */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-100">

          {/* Drawer top bar */}
          <div className="flex items-center justify-between">
            <a href="#">
              <span className="sr-only">AeroSphere</span>
              <Image
                alt="AeroSphere"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '32px' }}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-zinc-500 hover:text-zinc-900"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>

          {/* Drawer links */}
          <nav className="mt-8 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Drawer log in */}
          <div className="mt-6 pt-6 border-t border-zinc-100">
            <a
              href="/login"
              className="block w-full rounded-xl bg-zinc-900 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-black transition-colors"
            >
              Log in
            </a>
          </div>

        </DialogPanel>
      </Dialog>

    </header>
  )
}