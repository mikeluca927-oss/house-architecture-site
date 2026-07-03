import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Scarsdale Kitchen Renovation',
  description:
    'Custom kitchen renovations in Scarsdale, NY. Full kitchen remodels designed and built by a licensed architect and contractor. Free in-home consultation with no commitment required.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/scarsdale-kitchen-renovation' },
  openGraph: {
    title: 'Scarsdale Kitchen Renovation | House Architecture & Construction, PLLC',
    url: 'https://www.housearchitectureandconstruction.com/scarsdale-kitchen-renovation',
  },
}

export default function ScarsdalKitchenPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Scarsdale, NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Scarsdale Kitchen Renovations
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Custom kitchen remodeling in Scarsdale, NY — designed and built by the same licensed architect and contractor team, from concept through completion.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              The kitchen is the heart of the Scarsdale home — and it deserves the full attention of both an architect and a skilled builder. At House Architecture & Construction, PLLC, we bring both disciplines to every kitchen renovation we undertake. Our kitchens are designed from scratch, not assembled from a catalog, and every detail — from the placement of windows to the proportion of cabinetry to the flow of traffic through the space — is considered before a single wall is touched.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Many of the kitchens we renovate in Scarsdale involve structural changes — removing walls to open to dining or living areas, relocating islands, or expanding into adjacent spaces. Because our principal is a licensed architect, we can design and permit these structural modifications in-house, eliminating the need to coordinate between separate design and construction firms.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Our kitchen projects include custom cabinetry design and installation, stone countertop selection and fabrication coordination, appliance specification, tile and backsplash work, lighting design, and full mechanical, electrical, and plumbing coordination. We manage every subcontractor and every trade, so you have one point of contact throughout the entire process.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Schedule Your Free Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner headline="Redesign Your Scarsdale Kitchen" subhead="Call (914) 224-7383 for a free in-home kitchen consultation." />
    </>
  )
}
