import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Scarsdale General Contractor',
  description:
    'Licensed general contractor in Scarsdale, NY. Silvio M. Luca — NY State licensed architect and contractor — manages all trades for renovations, additions, and new construction. Free consultation.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/scarsdale-general-contractor' },
  openGraph: { title: 'Scarsdale General Contractor | House Architecture & Construction, PLLC', url: 'https://www.housearchitectureandconstruction.com/scarsdale-general-contractor' },
}

export default function ScarsdalGeneralContractorPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Scarsdale, NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Scarsdale General Contractor
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Licensed, insured, and Scarsdale-experienced. House Architecture & Construction, PLLC is the general contractor Scarsdale homeowners trust for renovations, additions, and custom builds.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <div className="border-t border-charcoal/10" />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Finding a reliable, licensed general contractor in Scarsdale is harder than it should be. Many homeowners hire contractors who are unfamiliar with Scarsdale's building department, don't have the right licenses, or lack the experience to manage complex residential projects. House Architecture & Construction, PLLC is different — our principal, Silvio M. Luca, holds a New York State general contractor license and has worked in Scarsdale for over 25 years.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              What sets us apart from other Scarsdale contractors is our in-house architectural capability. Silvio is also a licensed New York State architect — meaning we can design the project, file the permits, and build it ourselves. Most general contractors have to hire a separate architect and coordinate between firms. We handle everything in-house, which means faster timelines, tighter cost control, and a single person accountable for the entire project.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              We are fully licensed and insured in New York State and hold the Westchester County Home Improvement Contractor (HIC) license required for all residential work in the county. We pull all permits, manage all subcontractors, and supervise all work directly. Every project we take on in Scarsdale gets Silvio's personal attention.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link href="/contact" className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors">
                Get a Free Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTABanner headline="Scarsdale's Trusted General Contractor" subhead="Call (914) 224-7383 — licensed, insured, and ready to start." />
    </>
  )
}
