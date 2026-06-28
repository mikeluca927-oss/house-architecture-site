import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Scarsdale Design Build Firm | House Architecture & Construction, PLLC',
  description:
    'Scarsdale\'s premier design-build firm. Licensed architect and general contractor Silvio M. Luca handles design, permits, and construction under one roof. Free in-home consultation.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/scarsdale-design-build' },
  openGraph: { title: 'Scarsdale Design Build Firm | House Architecture & Construction, PLLC', url: 'https://www.housearchitectureandconstruction.com/scarsdale-design-build' },
}

export default function ScarsdalDesignBuildPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Scarsdale, NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Scarsdale Design-Build Firm
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              The only Scarsdale firm where your architect and your builder are the same person. Design, permits, and construction — all under one roof, from conception to completion.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <div className="border-t border-charcoal/10" />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Design-build is the smarter way to renovate or build in Scarsdale. Instead of hiring an architect, waiting months for drawings, shopping those drawings to contractors, and then managing two separate firms through construction — you work with one team, one contract, and one point of accountability from the first meeting through the final walkthrough.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              House Architecture & Construction, PLLC is Scarsdale's true design-build firm. Our principal, Silvio M. Luca, holds dual licensure as a registered New York State architect and a licensed general contractor — a rare combination that allows us to offer complete design-build services under a single license, a single contract, and a single vision.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              For Scarsdale homeowners, this means no gap between what was designed and what gets built. No change orders because the contractor "didn't know" what the architect intended. No delays while firms coordinate. Just a seamless process where design decisions are made with full construction knowledge, and construction is executed with full design intent.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link href="/contact" className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors">
                Start Your Design-Build Project
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-10">Why Design-Build Wins in Scarsdale</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'One Point of Contact', desc: 'You deal with one firm, one principal, one contract — no finger-pointing between architect and contractor.' },
              { title: 'Faster Delivery', desc: 'Construction planning begins during design, not after. Projects move faster from approval to completion.' },
              { title: 'Built-In Cost Control', desc: 'Designs are developed with real construction costs in mind — no expensive surprises when bids come in.' },
              { title: 'Village Permit Expertise', desc: 'We file directly with the Village of Scarsdale building department and know how to get approvals efficiently.' },
              { title: 'Seamless Execution', desc: 'The person who designed your home is on-site during construction ensuring every detail is built as intended.' },
              { title: 'Full Scope Capability', desc: 'From architectural drawings and structural engineering coordination to finishes and certificate of occupancy.' },
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
      <CTABanner headline="Scarsdale's Design-Build Specialists" subhead="Call (914) 224-7383 for a free in-home consultation. No commitment required." />
    </>
  )
}
