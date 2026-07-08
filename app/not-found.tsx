'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center" aria-label="Page not found">
      <img
        src="/projects/pelham-brick-estate/1.jpg"
        alt="Pelham Brick Estate — House Architecture & Construction"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-charcoal/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/60" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-28 pt-36">
        <motion.p
          className="font-inter text-xs tracking-[0.5em] uppercase text-gold mb-5"
          initial={{ opacity: 0, letterSpacing: '0.8em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          404 &middot; Page Not Found
        </motion.p>

        <div className="overflow-hidden mb-5">
          <motion.h1
            className="font-cormorant text-3xl md:text-5xl text-cream leading-tight"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            You Might Not Have Found That Page &mdash;<br />
            But You Found Westchester&rsquo;s Premier<br />
            Architecture &amp; Construction Firm
          </motion.h1>
        </div>

        <motion.p
          className="font-inter text-base text-cream/60 mb-8 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Since you&rsquo;re here, let&rsquo;s talk about your next project instead.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/"
            className="inline-block bg-gold text-white font-inter text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-gold/90 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="font-inter text-sm text-cream/70 hover:text-cream transition-colors tracking-wider"
          >
            Contact Us &rarr;
          </Link>
        </motion.div>

        <motion.a
          href="tel:9142247383"
          className="block font-inter text-sm text-gold hover:text-gold/80 transition-colors tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          (914) 224-7383
        </motion.a>
      </div>
    </section>
  )
}
