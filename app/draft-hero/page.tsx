'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function DraftHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="relative bg-black">
      {/* Draft badge */}
      <div className="fixed top-16 right-4 z-[100] bg-gold text-white font-inter text-[10px] tracking-widest uppercase px-3 py-1.5">
        Draft Preview
      </div>

      {/* ── HERO ── */}
      <section className="relative h-screen overflow-hidden bg-black">

        {/* Video — autoplays, loops, smooth */}
        <video
          ref={videoRef}
          src="/mock.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/65 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />

        {/* ── TEXT + BUTTONS — centered, always visible ── */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">

          <motion.p
            className="font-inter text-[10px] tracking-[0.55em] uppercase text-white/75 mb-5 flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block w-6 h-px bg-gold" />
            New Construction · Westchester, NY
            <span className="inline-block w-6 h-px bg-gold" />
          </motion.p>

          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-cormorant font-light text-white leading-none"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)' }}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Built to Last.
            </motion.h1>
          </div>

          <motion.p
            className="font-cormorant italic text-white/65 font-light mb-8"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            Architecture &amp; construction, from conception to completion.
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="font-inter text-[10px] tracking-[0.45em] uppercase text-white bg-gold/90 hover:bg-gold px-10 py-4 transition-colors duration-300"
            >
              Book a Consultation
            </Link>
            <Link
              href="/projects"
              className="font-inter text-[10px] tracking-[0.35em] uppercase text-white/70 hover:text-white transition-colors duration-300"
            >
              Our Work →
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-px bg-white/40 origin-top"
            animate={{ scaleY: [0, 1, 0], y: [0, 0, 44] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
            style={{ height: 44 }}
          />
          <p className="font-inter text-[9px] tracking-[0.45em] uppercase text-white/40 mt-1">Scroll</p>
        </motion.div>

        {/* Bottom label */}
        <motion.p
          className="absolute bottom-8 left-8 z-20 font-inter text-[9px] tracking-[0.35em] uppercase text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          House Architecture &amp; Construction, PLLC
        </motion.p>
      </section>
    </div>
  )
}
