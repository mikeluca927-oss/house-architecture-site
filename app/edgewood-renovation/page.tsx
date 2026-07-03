import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Edgewood Scarsdale Renovation & Architect | House Architecture & Construction',
  description:
    'Home renovations, additions, and architectural design in the Edgewood neighborhood of Scarsdale, NY. Licensed architect and contractor Silvio M. Luca. Free in-home consultation.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/edgewood-renovation' },
  openGraph: {
    title: 'Edgewood Scarsdale Renovation & Architect | House Architecture & Construction',
    url: 'https://www.housearchitectureandconstruction.com/edgewood-renovation',
  },
}

export default function EdgewoodRenovationPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Edgewood, Scarsdale NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Edgewood Home Renovations &amp; Architecture
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Licensed architectural design and construction services in the Edgewood neighborhood of Scarsdale, NY — from full-scale renovations and additions to new construction and historic restoration.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Edgewood is one of Scarsdale's most established and architecturally rich neighborhoods. Its streets are lined with beautifully built homes — Colonials, Tudors, split-levels, and ranches — many of which are ripe for thoughtful renovation and expansion. House Architecture & Construction, PLLC has deep roots in Edgewood, having completed renovation, addition, and restoration projects throughout the neighborhood.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Our approach in Edgewood is always to work with the home's existing architecture, not against it. When we renovate an Edgewood Colonial, we look at how the original architect proportioned the spaces, where natural light enters, and how the home relates to its lot — and we design additions and renovations that feel like they belong. The result is a home that looks and feels cohesive, not patchworked.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Principal Silvio M. Luca holds dual licensure as a New York State architect and general contractor. For Edgewood homeowners, this means a single point of contact who is accountable for both the design and the construction of your project — from the first sketch through the final certificate of occupancy.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Every Edgewood project moves through the Village of Scarsdale Building Department, and we handle that process end to end — architectural drawings, permit applications, and municipal coordination are all done in-house. Because the same firm designs and builds the project, there is no gap between what gets drawn and what gets built: budgets are grounded in real construction knowledge from the first sketch, and schedules don't stall waiting on an outside architect's revisions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.32}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Schedule a Free Edgewood Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-10">Our Edgewood Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Full Home Renovations', desc: 'Whole-home transformations that update every room while preserving the character that makes Edgewood homes special.' },
              { title: 'Additions & Expansions', desc: 'Second stories, primary suite additions, rear extensions, and garage builds — designed to match the original architecture.' },
              { title: 'Kitchen & Bath Remodels', desc: 'Custom kitchens and luxury bathroom renovations built to the highest standards of craftsmanship.' },
              { title: 'Open Concept Conversions', desc: 'Structural modifications to open floor plans — walls removed, spaces connected, layouts transformed.' },
              { title: 'Architectural Design & Permits', desc: 'Full in-house architectural services: drawings, 3D renderings, and permit filings with the Village of Scarsdale.' },
              { title: 'Colonial & Tudor Restorations', desc: 'Expert restoration of Edgewood\'s historic Colonial and Tudor homes — preserving character, upgrading systems.' },
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
            <h2 className="font-cormorant text-3xl text-charcoal mb-6">Featured Edgewood Projects</h2>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              We have completed multiple projects in Edgewood including the <Link href="/projects/edgewood-colonial-addition" className="text-gold underline underline-offset-2">Edgewood Colonial Addition</Link> — a full rear addition that expanded the home's living and dining areas — and the <Link href="/projects/edgewood-restoration" className="text-gold underline underline-offset-2">Edgewood Restoration</Link>, a comprehensive preservation and upgrade of a classic Edgewood home. Both projects are featured in our portfolio.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner headline="Renovating Your Edgewood Home?" subhead="Call (914) 224-7383 for a free in-home consultation with Silvio M. Luca." />
    </>
  )
}
