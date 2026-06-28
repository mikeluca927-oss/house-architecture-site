import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Scarsdale Colonial Renovation | House Architecture & Construction, PLLC',
  description:
    'Colonial home renovation specialists in Scarsdale, NY. Additions, open-concept conversions, kitchen and bathroom remodels for Scarsdale Colonials. Licensed architect and contractor.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/scarsdale-colonial-renovation' },
  openGraph: { title: 'Scarsdale Colonial Renovation | House Architecture & Construction, PLLC', url: 'https://www.housearchitectureandconstruction.com/scarsdale-colonial-renovation' },
}

export default function ScarsdalColonialPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Scarsdale, NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Scarsdale Colonial Home Renovation
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Scarsdale's Colonial homes are beloved for their classic proportions and curb appeal. We specialize in expanding, modernizing, and transforming them — while keeping everything that makes a Colonial a Colonial.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <div className="border-t border-charcoal/10" />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Colonial homes are the most common architectural style in Scarsdale — and with good reason. Their symmetrical facades, center-hall plans, and classic proportions create homes that are both beautiful and functional. But many of Scarsdale's Colonials were built decades ago for a different era of living, and today's families need more open kitchens, larger primary suites, and better connection between indoor and outdoor spaces.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              House Architecture & Construction, PLLC has renovated and expanded dozens of Colonial homes throughout Scarsdale. Our most common Colonial projects include rear kitchen additions that open to the backyard, second-story primary suite additions, open-concept kitchen and family room conversions, full bathroom renovations, and complete whole-home updates. We've also built multiple side-hall and center-hall Colonial additions from the ground up in Scarsdale neighborhoods including Edgewood, Heathcote, and Fox Meadow.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Every Colonial renovation we design respects the home's original massing, roofline, and proportions. We don't tack additions onto Colonials — we design them to integrate, so the finished result looks like it was always there.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link href="/contact" className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors">
                Start Your Colonial Renovation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTABanner headline="Transform Your Scarsdale Colonial" subhead="Call (914) 224-7383 for a free in-home consultation." />
    </>
  )
}
