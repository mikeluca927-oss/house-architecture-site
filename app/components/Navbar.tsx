'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const links = [
    { label: 'Work', href: '/#projects' },
    { label: 'About', href: '/#about' },
    { label: 'Team', href: '/#team' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-charcoal/8' : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group" aria-label="Community Designs home">
          <span className={`font-cormorant text-xl font-semibold tracking-wide transition-colors ${scrolled ? 'text-charcoal' : 'text-cream'}`}>
            Community Designs
          </span>
          <span className={`block font-inter text-[9px] tracking-[0.35em] uppercase transition-colors ${scrolled ? 'text-charcoal/40' : 'text-cream/50'}`}>
            Engineering D.P.C.
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-inter text-[11px] tracking-[0.2em] uppercase transition-colors hover:text-gold ${
                scrolled ? 'text-charcoal/70' : 'text-cream/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:communitydesignsllc@gmail.com"
            className={`font-inter text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all hover:bg-gold hover:border-gold hover:text-white ${
              scrolled ? 'border-charcoal/20 text-charcoal/70' : 'border-cream/40 text-cream/80'
            }`}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className={`block w-6 h-px transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-2' : ''} ${scrolled ? 'bg-charcoal' : 'bg-cream'}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''} ${scrolled ? 'bg-charcoal' : 'bg-cream'}`} />
          <span className={`block w-6 h-px transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-2' : ''} ${scrolled ? 'bg-charcoal' : 'bg-cream'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-charcoal overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 py-10 flex flex-col gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-cormorant text-3xl text-cream hover:text-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:communitydesignsllc@gmail.com"
            className="font-inter text-xs tracking-[0.2em] uppercase text-gold mt-4 border-t border-cream/10 pt-8"
            onClick={() => setMobileOpen(false)}
          >
            communitydesignsllc@gmail.com
          </a>
        </div>
      </div>
    </nav>
  )
}
