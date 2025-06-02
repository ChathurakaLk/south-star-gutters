"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="relative">
      <nav className="flex justify-between items-center py-6 px-4">
        <h1 className="text-xl font-bold font-mono">Portfolio</h1>
        <div className="hidden sm:flex items-center gap-8">
          {navItems.map((item, i) => (
            <Link key={i} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white p-4 shadow-md z-50">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="block py-2 text-black font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
