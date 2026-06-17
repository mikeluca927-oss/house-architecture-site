import { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'

export const metadata: Metadata = {
  title: 'Bathroom Renovation Westchester NY | House Architecture & Construction',
  description:
    'Luxury bathroom remodeling services in Westchester County, NY. Custom showers, primary suite renovations, vanity upgrades, and complete bathroom redesigns. Free in-home consultations.',
  openGraph: {
    title: 'Bathroom Renovation Westchester NY | House Architecture & Construction',
    url: 'https://www.housearchitecturepllc.com/bathrooms',
  },
  alternates: { canonical: 'https://www.housearchitecturepllc.com/bathrooms' },
}

const images = [
  {
    src: 'https://static.wixstatic.com/media/156c65_9f40bb90831b45748658860b34cb5447~mv2.jpg',
    alt: 'Luxury bathroom renovation in Westchester County NY by House Architecture & Construction',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_4ab8adc0afa047169e00b1239d94f443~mv2.webp',
    alt: 'Custom bathroom remodel with spa features in Westchester NY',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_f0f7a6665fd64123afbc4c377f98eaee~mv2.png',
    alt: 'Bathroom design and construction by House Architecture & Construction PLLC',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_25370e6ae61d4a59ae7bd36c113021d7~mv2.png',
    alt: 'Primary bathroom renovation in Scarsdale NY',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_5601da2a6fdc424191dafaf433d5e0b4~mv2.jpg',
    alt: 'Modern bathroom design in Westchester County',
  },
]

const relatedServices = [
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bedrooms', href: '/bedrooms' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Additions', href: '/additions' },
  { label: 'Architecture', href: '/architecture' },
]

export default function BathroomsPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Services</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Westchester Bathroom Renovations &amp; Custom Design
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Our bathroom remodeling services help homeowners create beautiful, functional spaces that enhance comfort
              and increase home value. Whether you&rsquo;re planning a bathroom renovation, custom shower installation,
              luxury primary bathroom remodel, vanity upgrade, or complete bathroom redesign, our team provides expert
              design and construction services from concept to completion.
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
                A well-designed bathroom is one of the highest-impact investments a Westchester homeowner can make —
                both in terms of daily quality of life and long-term property value. At House Architecture &amp;
                Construction, PLLC, we approach every bathroom project as an opportunity to create a space that is
                simultaneously beautiful, functional, and enduring.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Our bathroom renovations range from full gut-and-rebuild projects to targeted upgrades that deliver
                maximum impact. We work with premium tile suppliers, custom vanity makers, and top-tier fixture brands
                to source materials that meet our quality standards and your aesthetic vision. Heated floors, frameless
                glass enclosures, freestanding soaking tubs, and bespoke millwork are just a few of the details we
                commonly incorporate.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Our process is straightforward: we start with a free in-home consultation, develop a design concept and
                budget, and then manage every aspect of the construction process from permits through completion. You
                receive a finished bathroom that matches the vision — without the typical stress of managing multiple
                contractors.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Start Your Bathroom Renovation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-12">Bathroom Projects</h2>
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

      <CTABanner headline="Design Your Dream Bathroom" subhead="Book a free in-home consultation with our Westchester bathroom design team." />
    </>
  )
}
