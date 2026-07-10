import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Scarsdale New Home Construction',
  description:
    'Custom home construction in Scarsdale, NY. Ground-up new homes designed and built by licensed architect Silvio M. Luca. Architecture, permits, and full construction under one roof.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/scarsdale-new-construction' },
  openGraph: {
    title: 'Scarsdale New Home Construction | House Architecture & Construction, PLLC',
    url: 'https://www.housearchitectureandconstruction.com/scarsdale-new-construction',
  },
}

export default function ScarsdalNewConstructionPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Scarsdale, NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Custom Home Construction in Scarsdale, NY
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Build your dream home on a Scarsdale lot with a team that handles everything — architectural design, Village permitting, and complete construction — under one roof.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Building a custom home in Scarsdale is a complex undertaking — one that demands both architectural vision and construction precision. House Architecture & Construction, PLLC has completed ground-up residential projects throughout Scarsdale and Westchester County, managing every phase from site planning and architectural design through Village of Scarsdale permit approvals, construction, and final certificate of occupancy.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Scarsdale's Village building department has specific requirements for new construction — setbacks, lot coverage limits, architectural review, and material standards — that require an experienced local team to navigate efficiently. Our principal, Silvio M. Luca, has worked with Scarsdale's building department on multiple projects and understands how to design homes that meet approval requirements without sacrificing design quality.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Our new construction projects begin with a thorough site analysis and programming conversation — understanding how you want to live in the home before we ever put pencil to paper. From there, we develop schematic designs, 3D visualizations, full construction documents, and manage all permit filings. Once approved, our construction team builds the home under Silvio's direct supervision, ensuring that the vision designed on paper is executed exactly as intended.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Start Your Scarsdale Build
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
                href="/scarsdale-architect"
                className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                Scarsdale Architect
              </Link>
              <Link
                href="/scarsdale-custom-home-builder"
                className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                Scarsdale Custom Home Builder
              </Link>
              <Link
                href="/scarsdale-design-build"
                className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                Scarsdale Design-Build Firm
              </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner headline="Build Your Dream Home in Scarsdale" subhead="Call (914) 224-7383 for a free consultation on your new construction project." />
    </>
  )
}
