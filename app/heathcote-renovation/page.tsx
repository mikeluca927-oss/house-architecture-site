import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Heathcote Scarsdale Renovation & Architect',
  description:
    'Home renovations, additions, and architectural design in the Heathcote neighborhood of Scarsdale, NY. Licensed architect and contractor Silvio M. Luca. Free in-home consultation.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/heathcote-renovation' },
  openGraph: {
    title: 'Heathcote Scarsdale Renovation & Architect | House Architecture & Construction',
    url: 'https://www.housearchitectureandconstruction.com/heathcote-renovation',
  },
}

export default function HeathcoteRenovationPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Heathcote, Scarsdale NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Heathcote Home Renovations &amp; Architecture
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              House Architecture & Construction, PLLC specializes in renovations, additions, and custom architectural design in the Heathcote neighborhood of Scarsdale, NY — one of Westchester County's most distinguished residential communities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Heathcote is one of Scarsdale's most coveted neighborhoods — known for its large lots, mature trees, and a rich mix of architectural styles including Colonials, Tudors, Georgians, and mid-century homes. We have completed multiple renovation and addition projects in Heathcote and understand the neighborhood's character, its architectural language, and the Village of Scarsdale's permitting expectations for homes in this area.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Our principal, Silvio M. Luca, holds dual licensure as both a registered New York State architect and a licensed general contractor. This means the same person who designs your Heathcote renovation is responsible for building it — eliminating the miscommunication, change orders, and delays that often arise when architecture and construction are handled by separate firms.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              We've worked on a wide range of Heathcote projects — from expanding and modernizing classic Colonial floor plans to adding primary suite wings, finishing basements, renovating kitchens and bathrooms, and undertaking full whole-home transformations. Every project begins with a free in-home consultation where we come to your Heathcote home, assess the space, and discuss your vision with no commitment required.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Schedule a Free Heathcote Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-10">What We Do in Heathcote</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Whole-Home Renovations', desc: 'Complete floor-by-floor or whole-home transformations that modernize your Heathcote home while preserving its original character.' },
              { title: 'Home Additions', desc: 'Second stories, rear extensions, primary suite additions, and garage expansions — designed to integrate seamlessly with your existing home.' },
              { title: 'Kitchen Renovations', desc: 'Custom kitchen redesigns including structural wall removal, custom cabinetry, stone countertops, and complete finish coordination.' },
              { title: 'Bathroom Renovations', desc: 'Primary suites, spa-style baths, and complete bathroom overhauls to the highest standard.' },
              { title: 'Architectural Design & Permits', desc: 'Full architectural services including drawings, 3D renderings, and Village of Scarsdale permit filing.' },
              { title: 'Historic Restorations', desc: 'Preservation and modernization of Heathcote\'s historic Colonial, Tudor, and Georgian homes.' },
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

      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl text-charcoal mb-6">Featured Heathcote Project</h2>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Our Heathcote Classic project in Scarsdale is one of our most comprehensive renovation undertakings — a full transformation of a classic Heathcote home that touched every room, every system, and every finish. The project included a kitchen renovation, primary suite redesign, bathroom overhauls, new flooring throughout, and a complete exterior refresh. View the project in our <Link href="/projects/heathcote-classic" className="text-gold underline underline-offset-2">portfolio</Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="p-8 md:p-10 border border-charcoal/10">
              <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-6">More Scarsdale Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4">
              <Link
                href="/scarsdale-contractor"
                className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                Scarsdale Contractor
              </Link>
              <Link
                href="/scarsdale-tudor-renovation"
                className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                Scarsdale Tudor Renovation
              </Link>
              <Link
                href="/scarsdale-luxury-renovation"
                className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                Scarsdale Luxury Renovation
              </Link>
              <Link
                href="/scarsdale-home-renovation"
                className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                Scarsdale Home Renovation
              </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner headline="Renovating Your Heathcote Home?" subhead="Call (914) 224-7383 for a free in-home consultation with Silvio M. Luca." />
    </>
  )
}
