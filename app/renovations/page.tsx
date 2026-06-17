import { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'

export const metadata: Metadata = {
  title: 'Home Renovations Westchester NY | House Architecture & Construction',
  description:
    'Whole-home and partial home renovation services in Westchester County, NY. Kitchen remodels, bathroom renovations, basement finishing, and complete home renovations. Free in-home consultations.',
  openGraph: {
    title: 'Home Renovations Westchester NY | House Architecture & Construction',
    url: 'https://www.housearchitecturepllc.com/renovations',
  },
  alternates: { canonical: 'https://www.housearchitecturepllc.com/renovations' },
}

const relatedServices = [
  { label: 'Architecture', href: '/architecture' },
  { label: 'Additions', href: '/additions' },
  { label: 'Restorations', href: '/restorations' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
]

export default function RenovationsPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Services</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Home Renovations in Westchester County, NY
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              We specialize in full-scale home renovations — entire floors, whole wings, or complete whole-home
              transformations. Whether you&rsquo;re reconfiguring your entire first floor, opening up a second story,
              or undertaking a top-to-bottom gut renovation, we provide expert architectural design, permitting, and
              construction management from start to finish.
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
                Home renovation in Westchester County presents unique opportunities and challenges. The region&rsquo;s
                housing stock spans multiple eras and architectural styles — from Victorians and Colonials to
                mid-century Ranches and contemporary builds. At House Architecture &amp; Construction, PLLC, we have
                the expertise to renovate homes of any era, respecting their character while bringing them into
                alignment with modern expectations for space, light, and performance.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Our renovation work operates at full scale — from comprehensive whole-home renovations that touch every
                space in the house, to full-floor reconfigurations that reimagine how an entire level lives and flows.
                We bring the same architectural rigor and construction discipline to every project, regardless of scope.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                For whole-home renovations, our integrated architectural design and construction management approach is
                particularly valuable. We develop a master plan for the entire home before any work begins, ensuring
                that decisions made in one area of the house support — rather than conflict with — changes being made
                elsewhere.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                We handle all aspects of the renovation process: structural assessments, architectural design, permit
                applications, utility upgrades, and complete construction management. Silvio Luca is personally
                involved in every project from first consultation through final walkthrough.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Start Your Home Renovation
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

      <CTABanner headline="Start Your Home Renovation" subhead="Schedule a free in-home consultation with our Westchester renovation team." />
    </>
  )
}
