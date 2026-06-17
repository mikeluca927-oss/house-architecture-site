import { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'

export const metadata: Metadata = {
  title: 'Bedroom Renovation Westchester NY | House Architecture & Construction',
  description:
    'Custom bedroom remodeling services in Westchester County, NY. Primary suite renovations, custom closets, bedroom additions, and complete room transformations. Free in-home consultations.',
  openGraph: {
    title: 'Bedroom Renovation Westchester NY | House Architecture & Construction',
    url: 'https://www.housearchitecturepllc.com/bedrooms',
  },
  alternates: { canonical: 'https://www.housearchitecturepllc.com/bedrooms' },
}

const images = [
  {
    src: 'https://static.wixstatic.com/media/156c65_bb1c59b9fa3a4b84a336482c90453ab3~mv2.jpg',
    alt: 'Custom bedroom renovation in Westchester County NY by House Architecture & Construction',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_671bc7b162414601b06c197ac0db6f04~mv2.png',
    alt: 'Primary suite bedroom design by House Architecture & Construction PLLC in Westchester NY',
  },
]

const relatedServices = [
  { label: 'Bathrooms', href: '/bathrooms' },
  { label: 'Additions', href: '/additions' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Living Areas', href: '/living-areas' },
  { label: 'Architecture', href: '/architecture' },
]

export default function BedroomsPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Services</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Westchester Bedroom Renovations &amp; Custom Design
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Our bedroom remodeling services help homeowners create functional, comfortable, and beautifully designed
              living spaces. From primary suite renovations and custom closets to bedroom additions and complete room
              transformations, we provide expert design and construction services that enhance both comfort and home
              value.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            <ScrollReveal>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                From primary suite additions to complete bedroom renovations, House Architecture &amp; Construction,
                PLLC brings architectural precision and construction expertise to every sleeping space we create. We
                understand that bedrooms are deeply personal — they must reflect the tastes, routines, and comfort
                preferences of the people who inhabit them.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Our primary suite projects in Westchester County often combine bedroom renovations with adjacent
                bathroom redesigns and custom closet systems, creating a cohesive, hotel-quality retreat within your
                existing home. We specialize in seamlessly integrating these spaces so that the flow between bedroom,
                bath, and dressing area feels natural and considered.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                We take pride in the details: the proportion of windows to wall, the quality of trim work, the
                precision of built-in cabinetry, the placement of lighting. These are the elements that elevate a
                bedroom from functional to extraordinary.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Start Your Bedroom Renovation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-12">Bedroom Projects</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl text-charcoal mb-8">Related Services</h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="font-inter text-xs tracking-[0.15em] uppercase border border-charcoal/20 px-6 py-3 hover:border-gold hover:text-gold transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Create Your Perfect Bedroom Retreat" subhead="Book a free in-home consultation with our Westchester bedroom design team." />
    </>
  )
}
