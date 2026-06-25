import { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'

export const metadata: Metadata = {
  title: 'Living Area Renovation Westchester NY | House Architecture & Construction',
  description:
    'Custom living room, family room, and mudroom remodeling services in Westchester County, NY. Open-concept renovations, custom built-ins, and complete living area remodels. Free in-home consultations.',
  openGraph: {
    title: 'Living Area Renovation Westchester NY | House Architecture & Construction',
    url: 'https://www.housearchitectureandconstruction.com/living-areas',
  },
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/living-areas' },
}

const images = [
  {
    src: 'https://static.wixstatic.com/media/156c65_019e959f39e349ef8082f41c3c8405db~mv2.png',
    alt: 'Custom living room renovation in Westchester County NY by House Architecture & Construction',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_997420f98187487d96d93f378abc204d~mv2.jpg',
    alt: 'Open-concept living area remodel in Westchester NY',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_7f68921c1cee4125bcf39463e4257038~mv2.jpg',
    alt: 'Great room design and construction in Westchester County',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_110b23d333a645edb3bf24c87bbddc59~mv2.png',
    alt: 'Family room renovation by House Architecture & Construction PLLC',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_b8e4cc76b76d43cfbe0dc05bf4a62be7~mv2.jpg',
    alt: 'Living area addition and renovation in Westchester NY',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_b02717f8e5a34104a2b53581f6b5bdb2~mv2.png',
    alt: 'Custom living space design in Eastchester Westchester County NY',
  },
]

const relatedServices = [
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bedrooms', href: '/bedrooms' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Additions', href: '/additions' },
  { label: 'Architecture', href: '/architecture' },
]

export default function LivingAreasPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Services</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Westchester Living Area Renovations &amp; Custom Design
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Our living room, family room, and mudroom remodeling services help homeowners create beautiful, functional
              spaces for relaxing, entertaining, and everyday living. From open-concept renovations and custom built-ins
              to complete living area remodels, we provide expert design and construction services that improve both the
              comfort and value of your home.
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
                The living room, great room, or family room is often the first space guests experience and the center
                of daily life for the homeowners who live there. At House Architecture &amp; Construction, PLLC, we
                approach living area design with a deep understanding of spatial flow, natural light, acoustics, and
                the relationship between indoor and outdoor space.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Our Westchester living area projects range from opening up closed floor plans to create the open-concept
                spaces modern homeowners prefer, to restoring formal living rooms in historic homes to their original
                grandeur. We also design and build custom built-in cabinetry, coffered ceilings, wainscoting, and
                fireplace surrounds that give living spaces architectural character and warmth.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Whether we&rsquo;re reconfiguring a dated floor plan, adding a great room addition, or finishing a
                basement into a family living space, our integrated architecture and construction approach ensures that
                every structural and aesthetic decision supports the overall design intent. Silvio Luca personally
                oversees each project from concept through completion.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Transform Your Living Space
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-12">Living Area Projects</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt} loading="lazy" decoding="async"
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

      <CTABanner headline="Transform Your Living Space" subhead="Book a free in-home consultation with our Westchester living area design team." />
    </>
  )
}
