import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Scarsdale Tudor Renovation',
  description:
    'Expert Tudor home renovation and restoration in Scarsdale, NY. Preserve original character while modernizing every system and interior. Licensed architect and contractor. Free consultation.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/scarsdale-tudor-renovation' },
  openGraph: { title: 'Scarsdale Tudor Renovation | House Architecture & Construction, PLLC', url: 'https://www.housearchitectureandconstruction.com/scarsdale-tudor-renovation' },
}

export default function ScarsdalTudorPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Scarsdale, NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Scarsdale Tudor Home Renovation
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Scarsdale's Tudor homes are architectural gems — and renovating them requires a team that understands their history, their structure, and how to bring them into the modern era without sacrificing what makes them special.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <div className="border-t border-charcoal/10" />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Scarsdale has one of the finest collections of Tudor Revival homes in Westchester County — built largely in the 1920s and 1930s, these homes feature steeply pitched rooflines, half-timbered facades, arched doorways, leaded glass windows, and stone or brick detailing that gives them an unmistakable character. Renovating a Tudor correctly requires deep familiarity with both the architectural vocabulary of the style and the construction methods of the era.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              House Architecture & Construction, PLLC has renovated multiple Tudor homes throughout Scarsdale — including projects in Heathcote, Edgewood, and Fox Meadow. Our approach is always to honor the original architectural intent while upgrading the home's systems, layouts, and finishes to meet modern expectations. We restore original plaster detailing, refurbish or replicate period millwork, and design additions that respect the Tudor roofline and massing.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Principal Silvio M. Luca is a licensed New York State architect with decades of experience working on historic Westchester homes. He understands how Tudor homes are built — their balloon or platform framing, their plaster-and-lath walls, their original mechanical systems — and how to renovate them efficiently and sympathetically.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link href="/contact" className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors">
                Consult on Your Tudor Renovation
              </Link>
            </div>
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
                href="/scarsdale-home-renovation"
                className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                Scarsdale Home Renovation
              </Link>
              <Link
                href="/scarsdale-luxury-renovation"
                className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                Scarsdale Luxury Renovation
              </Link>
              <Link
                href="/heathcote-renovation"
                className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                Heathcote Renovation
              </Link>
              <Link
                href="/edgewood-renovation"
                className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                Edgewood Renovation
              </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner headline="Renovate Your Scarsdale Tudor" subhead="Call (914) 224-7383 for a free in-home consultation." />
    </>
  )
}
