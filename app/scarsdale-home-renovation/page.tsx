import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Scarsdale Home Renovation',
  description:
    'Expert home renovation services in Scarsdale, NY. Full-scale renovations, additions, kitchens, bathrooms, and complete home transformations by licensed architect and contractor Silvio M. Luca. Free consultation.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/scarsdale-home-renovation' },
  openGraph: {
    title: 'Scarsdale Home Renovation | House Architecture & Construction, PLLC',
    url: 'https://www.housearchitectureandconstruction.com/scarsdale-home-renovation',
  },
}

export default function ScarsdalRenovationPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Scarsdale, NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Scarsdale Home Renovation Experts
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              House Architecture & Construction, PLLC delivers full-scale home renovations throughout Scarsdale, NY. From whole-floor transformations to complete home overhauls, we manage every phase — architecture, permits, and construction — under one roof.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Scarsdale homeowners demand the highest standard — and that's exactly what we deliver. Our principal, Silvio M. Luca, is a licensed architect and licensed general contractor in New York State, giving us the unique ability to take your renovation from initial design concept through final construction without ever changing firms or losing continuity of vision.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              We have completed dozens of renovation projects throughout Scarsdale — from the Fox Meadow and Greenacres neighborhoods to Heathcote and Edgewood. We understand the architectural character of Scarsdale's housing stock: the Tudors, Colonials, Georgians, and mid-century homes that define the area, and how to renovate them in a way that honors their original character while bringing them fully up to modern standards.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Our renovation services in Scarsdale include kitchen remodels, bathroom renovations, primary suite additions, second-story additions, open-concept floor plan conversions, basement finishing, and complete whole-home renovations. Every project begins with a free in-home consultation — we come to your home, assess the space, and provide honest recommendations with no commitment required.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-10">Our Scarsdale Renovation Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Full Home Renovations', desc: 'Complete transformation of entire homes — every floor, every room, every system.' },
              { title: 'Kitchen Remodeling', desc: 'Custom kitchens designed and built to the highest standard, from layout through all finishes.' },
              { title: 'Bathroom Renovations', desc: 'Luxury primary suites, spa bathrooms, guest baths, and powder rooms.' },
              { title: 'Home Additions', desc: 'Second stories, primary suite additions, rear extensions, and dormers.' },
              { title: 'Open Concept Conversions', desc: 'Structural wall removal and floor plan reconfiguration for modern living.' },
              { title: 'Historic Restorations', desc: 'Preservation and modernization of Scarsdale\'s Tudor, Colonial, and Georgian homes.' },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="border-l-2 border-gold pl-6">
                  <h3 className="font-cormorant text-xl text-charcoal mb-2">{s.title}</h3>
                  <p className="font-inter text-sm text-charcoal/60 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Ready to Renovate Your Scarsdale Home?" subhead="Call (914) 224-7383 for a free in-home consultation. No commitment required." />
    </>
  )
}
