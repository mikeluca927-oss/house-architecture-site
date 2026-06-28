import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Fox Meadow Scarsdale Renovation | House Architecture & Construction, PLLC',
  description:
    'Home renovations, additions, and architectural design in the Fox Meadow neighborhood of Scarsdale, NY. Licensed architect and contractor Silvio M. Luca. Free consultation.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/fox-meadow-renovation' },
  openGraph: { title: 'Fox Meadow Scarsdale Renovation | House Architecture & Construction, PLLC', url: 'https://www.housearchitectureandconstruction.com/fox-meadow-renovation' },
}

export default function FoxMeadowRenovationPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Fox Meadow, Scarsdale NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Fox Meadow Home Renovations &amp; Architecture
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Expert renovation, addition, and architectural design services in the Fox Meadow neighborhood of Scarsdale — one of Westchester County's most sought-after residential communities.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <div className="border-t border-charcoal/10" />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Fox Meadow is Scarsdale's most prestigious neighborhood — known for its grand homes, tree-lined streets, and exceptional proximity to the Scarsdale train station and village. The neighborhood's housing stock includes some of the finest Tudors, Colonials, Georgians, and mid-century homes in all of Westchester County, many of which are ideal candidates for thoughtful renovation and expansion.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              House Architecture & Construction, PLLC has completed renovation and addition projects in Fox Meadow and understands the neighborhood's character — its scale, its materials, its architectural details. We design renovations that honor these homes' original quality and scale, and we build them to last another generation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Our Fox Meadow services include whole-home renovations, primary suite additions, kitchen and bathroom remodels, second-story additions, and full custom home construction. Principal Silvio M. Luca is a licensed New York State architect and general contractor who personally oversees every project in Fox Meadow.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link href="/contact" className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors">
                Schedule a Fox Meadow Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTABanner headline="Renovating Your Fox Meadow Home?" subhead="Call (914) 224-7383 for a free in-home consultation with Silvio M. Luca." />
    </>
  )
}
