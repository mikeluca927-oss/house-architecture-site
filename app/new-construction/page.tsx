import { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'

export const metadata: Metadata = {
  title: 'New Home Construction Westchester NY',
  description:
    'Custom new home design and construction throughout Westchester County. Site planning, architectural design, project management, and construction. Free consultations.',
  openGraph: {
    title: 'New Home Construction Westchester NY | House Architecture & Construction',
    url: 'https://www.housearchitectureandconstruction.com/new-construction',
  },
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/new-construction' },
}

const images = [
  {
    src: 'https://static.wixstatic.com/media/156c65_9a776fc9aeae43969a654e26efbd034c~mv2.png',
    alt: 'Custom new home construction in Westchester County NY by House Architecture & Construction PLLC',
  },
]

const relatedServices = [
  { label: 'Architecture', href: '/architecture' },
  { label: 'Additions', href: '/additions' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
]

export default function NewConstructionPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Services</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Custom New Home Construction in Westchester, NY
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Build your dream home with confidence. House Architecture &amp; Construction, PLLC provides custom home
              design and new construction services throughout Westchester County. From site planning and architectural
              design to project management and construction, we help homeowners create timeless residences tailored to
              their lifestyle, budget, and vision.
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
                House Architecture &amp; Construction, PLLC specializes in ground-up custom home construction
                throughout Westchester County, NY. Our integrated architecture and construction model means you work
                with one team from the first sketch to the final inspection — eliminating the coordination gaps that
                typically arise when architect and builder are separate firms.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Our new construction process begins with a thorough site analysis to understand zoning requirements,
                setbacks, topography, views, and solar orientation. This informs the architectural design, which we
                develop collaboratively with each client through schematic design, design development, and construction
                documents. We handle all municipal permitting and approvals for Westchester County municipalities.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Our construction management expertise ensures that the project is built on schedule, within budget, and
                to the quality standards our designs demand. Silvio Luca is personally present on every job site to
                ensure that the execution matches the vision.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                We have built custom homes in Scarsdale, Bronxville, Larchmont, White Plains, Eastchester,
                and communities throughout Westchester County. Each home is a one-of-a-kind creation, designed for the
                specific site and the specific family who will live there.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Build Your Dream Home
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-12">New Construction Projects</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative aspect-video overflow-hidden max-w-3xl">
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

      <CTABanner headline="Build Your Dream Home From the Ground Up" subhead="Schedule a free consultation with Silvio M. Luca about your new construction project." />
    </>
  )
}
