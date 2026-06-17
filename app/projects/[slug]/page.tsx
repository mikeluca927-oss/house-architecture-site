'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '../data'

export default function ProjectGalleryPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) notFound()

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex(i => i === null ? null : (i - 1 + project.images.length) % project.images.length)
  const next = () => setLightboxIndex(i => i === null ? null : (i + 1) % project.images.length)

  return (
    <>
      {/* Header */}
      <section className="pt-28 md:pt-36 pb-8 md:pb-12 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.2em] uppercase text-charcoal/40 hover:text-gold transition-colors mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Projects
          </Link>
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-3">Portfolio</p>
          <h1 className="font-cormorant text-4xl md:text-6xl text-charcoal mb-3">{project.name}</h1>
          <p className="font-inter text-sm text-charcoal/50 tracking-wider">{project.location} — {project.images.length} Photos</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.images.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="group relative w-full overflow-hidden block"
                  style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
                  aria-label={`View photo ${i + 1} of ${project.name}`}
                >
                  <img
                    src={src}
                    alt={`${project.name} — photo ${i + 1} of ${project.images.length}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
                      width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-cormorant text-3xl text-cream mb-4">Inspired by this project?</p>
          <p className="font-inter text-cream/60 mb-8">Let&apos;s talk about what we can build together.</p>
          <a href="/contact" className="inline-block bg-gold text-white font-inter text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold/90 transition-colors">
            Schedule A Free Consultation
          </a>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: 'rgba(28,28,28,0.97)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-10 p-2"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Title */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
              <p className="font-cormorant text-xl text-cream">{project.name}</p>
              <p className="font-inter text-xs text-cream/50 tracking-wider">
                {lightboxIndex + 1} / {project.images.length}
              </p>
            </div>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="relative max-w-5xl max-h-[80vh] w-full mx-16 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={project.images[lightboxIndex]}
                alt={`${project.name} — photo ${lightboxIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>

            {/* Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors p-3 z-10"
                  onClick={e => { e.stopPropagation(); prev() }}
                  aria-label="Previous"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors p-3 z-10"
                  onClick={e => { e.stopPropagation(); next() }}
                  aria-label="Next"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={e => { e.stopPropagation(); setLightboxIndex(i) }}
                      className={`h-1.5 rounded-full transition-all ${i === lightboxIndex ? 'bg-gold w-4' : 'bg-cream/30 w-1.5'}`}
                      aria-label={`Go to photo ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
