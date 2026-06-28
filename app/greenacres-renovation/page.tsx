import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Greenacres Scarsdale Renovation | House Architecture & Construction, PLLC',
  description:
    'Home renovations, additions, and architectural design in the Greenacres neighborhood of Scarsdale, NY. Licensed architect and contractor Silvio M. Luca. Free in-home consultation.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/greenacres-renovation' },
  openGraph: { title: 'Greenacres Scarsdale Renovation | House Architecture & Construction, PLLC', url: 'https://www.housearchitectureandconstruction.com/greenacres-renovation' },
}

export default function GreenacresRenovationPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Greenacres, Scarsdale NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Greenacres Home Renovations &amp; Architecture
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Full-service renovation, addition, and architectural design in Greenacres — serving one of Scarsdale's most established and family-friendly neighborhoods.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <div className="border-t border-charcoal/10" />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Greenacres is one of Scarsdale's most beloved neighborhoods — a diverse mix of architectural styles, great schools, and a tight-knit community feel. Homes in Greenacres range from charming Colonials and split-levels to mid-century ranches and classic Tudors, many of which are ready for a thoughtful renovation to bring them up to today's standards while preserving what makes them special.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              House Architecture & Construction, PLLC brings full architectural and construction services to Greenacres homeowners. Whether you're looking to expand a smaller Colonial with an addition, open up a mid-century ranch plan, or completely renovate a home from top to bottom, we have the design and construction expertise to make it happen — and we handle every step in-house from initial design through construction completion.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Principal Silvio M. Luca holds dual licensure as a New York State architect and general contractor. Every Greenacres project gets his personal attention — from the first design meeting through the final walkthrough.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link href="/contact" className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors">
                Schedule a Greenacres Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTABanner headline="Renovating Your Greenacres Home?" subhead="Call (914) 224-7383 for a free in-home consultation." />
    </>
  )
}
