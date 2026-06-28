import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Scarsdale Home Addition | House Architecture & Construction, PLLC',
  description:
    'Home additions in Scarsdale, NY designed and built by a licensed architect and contractor. Second stories, primary suites, rear additions, and dormers. Free in-home consultation.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/scarsdale-addition' },
  openGraph: {
    title: 'Scarsdale Home Addition | House Architecture & Construction, PLLC',
    url: 'https://www.housearchitectureandconstruction.com/scarsdale-addition',
  },
}

export default function ScarsdalAdditionPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Scarsdale, NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Home Additions in Scarsdale, NY
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Expand your Scarsdale home with a thoughtfully designed addition — second stories, primary suite expansions, rear extensions, and more — designed and built by our licensed architect and contractor team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Adding to your Scarsdale home is one of the most significant investments you can make — and one that requires both architectural expertise and construction knowledge to execute correctly. At House Architecture & Construction, PLLC, we handle both sides under one roof. Principal Silvio M. Luca holds dual licensure as a New York State architect and general contractor, meaning the person who designs your addition is also the person responsible for building it.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              In Scarsdale, additions must comply with local zoning, setback requirements, and building codes — all of which we are deeply familiar with. We have filed and permitted numerous addition projects with the Village of Scarsdale's Building Department and know how to design additions that meet code while maximizing your usable space.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Whether you're looking to add a primary suite above your garage, expand your kitchen into a rear addition, or add a full second story, we design every addition to integrate seamlessly with your home's existing architecture — matching rooflines, materials, and proportions so the result looks like it was always part of the original home.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Get a Free Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner headline="Planning a Scarsdale Home Addition?" subhead="Call (914) 224-7383 or contact us online for a free in-home consultation." />
    </>
  )
}
