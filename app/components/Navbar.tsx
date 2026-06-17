'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const services = [
  { label: 'Architecture', href: '/architecture' },
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Additions', href: '/additions' },
  { label: 'Restorations', href: '/restorations' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
  { label: 'Bedrooms', href: '/bedrooms' },
  { label: 'Living Areas', href: '/living-areas' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-cream shadow-sm`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group" aria-label="House Architecture & Construction home">
          <span
            className="font-cormorant text-2xl font-semibold text-gold tracking-widest uppercase group-hover:opacity-80 transition-opacity"
          >
            House
          </span>
          <span className="font-inter text-[10px] tracking-[0.22em] uppercase transition-colors group-hover:text-gold text-charcoal/70">
            Architecture &amp; Construction
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {(['/', '/projects'] as const).map((href, i) => (
            <Link
              key={href}
              href={href}
              className="font-inter text-xs tracking-widest uppercase hover:text-gold transition-colors text-charcoal"
            >
              {i === 0 ? 'Home' : 'Projects'}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (closeTimer.current) clearTimeout(closeTimer.current)
              setServicesOpen(true)
            }}
            onMouseLeave={() => {
              closeTimer.current = setTimeout(() => setServicesOpen(false), 100)
            }}
          >
            <button
              className="font-inter text-xs tracking-widest uppercase hover:text-gold transition-colors flex items-center gap-1.5 text-charcoal"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="currentColor"
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              >
                <path d="M0 0l5 6 5-6H0z" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-cream border border-charcoal/10 shadow-xl py-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-5 py-2.5 font-inter text-xs tracking-wider text-charcoal hover:text-gold hover:bg-charcoal/5 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="font-inter text-xs tracking-widest uppercase hover:text-gold transition-colors text-charcoal"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-inter text-xs tracking-widest uppercase hover:text-gold transition-colors text-charcoal"
          >
            Contact
          </Link>
          <a
            href="tel:9142247383"
            className="font-inter text-sm text-gold font-medium tracking-wider hover:text-gold/80 transition-colors border-l pl-8 border-charcoal/20"
          >
            (914) 224-7383
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 origin-center bg-charcoal ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 bg-charcoal ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 origin-center bg-charcoal ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-cream border-t border-charcoal/10 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          <Link
            href="/"
            className="font-inter text-sm tracking-widest uppercase hover:text-gold transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="font-inter text-sm tracking-widest uppercase hover:text-gold transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Projects
          </Link>
          <div>
            <button
              className="font-inter text-sm tracking-widest uppercase flex items-center gap-2 hover:text-gold transition-colors w-full"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="currentColor"
                className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              >
                <path d="M0 0l5 6 5-6H0z" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 mt-3 flex flex-col gap-3 border-l border-gold/30">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="font-inter text-sm text-charcoal/70 hover:text-gold transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/about"
            className="font-inter text-sm tracking-widest uppercase hover:text-gold transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-inter text-sm tracking-widest uppercase hover:text-gold transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <a
            href="tel:9142247383"
            className="font-inter text-base text-gold font-medium border-t border-charcoal/10 pt-5"
          >
            (914) 224-7383
          </a>
        </div>
      </div>
    </nav>
  )
}
