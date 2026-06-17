import { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'

export const metadata: Metadata = {
  title: 'Residential Architecture Westchester NY | House Architecture & Construction',
  description:
    'Licensed residential architect serving Westchester County, NY. Custom home design, renovation architecture, addition design, and construction documents. Free consultations.',
  openGraph: {
    title: 'Residential Architecture Westchester NY | House Architecture & Construction',
    url: 'https://www.housearchitecturepllc.com/architecture',
  },
  alternates: { canonical: 'https://www.housearchitecturepllc.com/architecture' },
}

const images = [
  {
    src: 'https://static.wixstatic.com/media/156c65_bb1bdd16b2624cafb7ace94eac17dc75~mv2.png',
    alt: 'Custom residential architecture design in Westchester County NY by House Architecture & Construction',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_8166eb3812b8463a91ad99b38647d9a1~mv2.png',
    alt: 'Home architecture and construction drawings for Westchester NY project',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_eade7054c7144cfa94dccb68d1e23ea3~mv2.jpeg',
    alt: 'Residential architecture project in Scarsdale NY by House Architecture & Construction PLLC',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_1665326616b54707953ce184441d2030~mv2.jpeg',
    alt: 'Architectural design for home renovation in Westchester County',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_d39595f810194df1b8710e54426c2333~mv2.png',
    alt: 'New home architecture and construction in Eastchester NY',
  },
]

const relatedServices = [
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Additions', href: '/additions' },
  { label: 'Restorations', href: '/restorations' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
]

export default function ArchitecturePage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Services</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Architecture &mdash; Home Additions, Renovations &amp; Custom Homes
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Whether you&rsquo;re expanding your home, renovating an existing space, or building a custom residence,
              our architectural design services are tailored to your goals, lifestyle, and property.
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
                We provide detailed construction drawings, permit plans, and project development services to help bring
                your vision from concept to reality with clarity and confidence.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                House Architecture &amp; Construction, PLLC is a licensed residential architecture firm based in
                Eastchester, NY, serving homeowners throughout Westchester County. Our architectural services encompass
                the full range of residential design — from custom new homes and major additions to renovation plans,
                interior architecture, and construction document packages for permit submission.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                What distinguishes our architectural practice is the integration of design with buildability. Because
                we are also a licensed general contractor, every architectural decision we make is grounded in
                construction reality. We don&rsquo;t design spaces that look beautiful on paper but present challenges
                in the field. Our drawings are precise, buildable, and designed to minimize change orders during
                construction.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                We have extensive experience navigating Westchester County&rsquo;s varied municipal approval processes
                — including the distinct requirements of Eastchester, Scarsdale, Bronxville, Larchmont, White Plains,
                and Yonkers. This local expertise means your project moves through the approval process efficiently.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Start Your Architectural Project
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-12">Architecture Projects</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <CTABanner headline="Start Your Architectural Project" subhead="Schedule a free in-home consultation with Silvio M. Luca." />
    </>
  )
}
