import { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'

export const metadata: Metadata = {
  title: 'Home Additions Westchester NY | House Architecture & Construction',
  description:
    'Custom home additions in Westchester County, NY. Second stories, kitchen expansions, living area additions. Design, permitting, and construction services. Free in-home consultations.',
  openGraph: {
    title: 'Home Additions Westchester NY | House Architecture & Construction',
    url: 'https://www.housearchitecturepllc.com/additions',
  },
  alternates: { canonical: 'https://www.housearchitecturepllc.com/additions' },
}

const relatedServices = [
  { label: 'Architecture', href: '/architecture' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bedrooms', href: '/bedrooms' },
]

export default function AdditionsPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Services</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Home Additions in Westchester County, NY
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Planning a home addition in Westchester County? We design and build custom home additions that provide
              the extra space your family needs while maintaining the architectural integrity of your home. Whether
              you&rsquo;re adding a second story, expanding your kitchen, or creating a new living area, our team can
              assist with design, permitting, and construction.
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
                A home addition is one of the most complex residential construction challenges: it must expand your
                living space while respecting — and ideally enhancing — the existing architecture. At House
                Architecture &amp; Construction, PLLC, we approach every addition with a deep understanding of the
                existing structure, the neighborhood context, and the homeowner&rsquo;s long-term vision for the
                property.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Our addition projects in Westchester County encompass a wide range of typologies: kitchen expansions
                that push into the rear yard, two-story additions that add bedrooms above and living space below,
                master suite additions above garages, in-law suites that provide independent living with interior
                connectivity, and sunroom additions that blur the boundary between indoors and out.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Because we design and build under one roof, the structural and architectural decisions for your addition
                are made simultaneously — not sequentially. This means the connection between old and new is always
                resolved in the design phase, before construction begins. The result is an addition with proper
                structural support, seamless roofline integration, and finishes that match or complement the existing
                home.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                We handle all aspects of the addition process: architectural design, engineering coordination, permit
                applications, and full construction management. We serve homeowners throughout Westchester County,
                including Scarsdale, Bronxville, Larchmont, Eastchester, White Plains, and Yonkers.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Expand Your Home
              </Link>
            </div>
          </ScrollReveal>
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

      <CTABanner headline="Expand Your Home With a Custom Addition" subhead="Schedule a free in-home consultation about your Westchester home addition." />
    </>
  )
}
