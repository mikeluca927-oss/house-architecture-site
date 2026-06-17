'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import { projects } from './data'

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-3">Portfolio</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6">
              Westchester Architecture & Construction Projects
            </h1>
            <p className="font-inter text-lg text-charcoal/60 max-w-2xl">
              A curated selection of residential architecture and construction projects across Westchester County — from ground-up custom homes to full-scale renovations and additions. Click any project to view the full gallery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={`/projects/${project.slug}`} className="block group relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.cover}
                    alt={`${project.name} — architecture and construction project in ${project.location} by House Architecture & Construction PLLC`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/75 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="font-cormorant text-xl text-cream mb-1">{project.name}</h2>
                    <p className="font-inter text-sm text-cream/60 mb-3">{project.location}</p>
                    <p className="font-inter text-xs tracking-widest uppercase text-gold">
                      View {project.images.length} Photos →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal text-center">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-cormorant text-3xl text-cream mb-4">Create your dream home.</p>
            <p className="font-inter text-cream/60 mb-8">Tell us about your project today.</p>
            <a href="/contact" className="inline-block bg-gold text-white font-inter text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold/90 transition-colors">
              Schedule A Free Consultation
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
