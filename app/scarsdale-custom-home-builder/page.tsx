import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Scarsdale Custom Home Builder',
  description:
    'Custom home builder in Scarsdale, NY. Design and build your dream home from the ground up with licensed architect and contractor Silvio M. Luca. Free consultation.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/scarsdale-custom-home-builder' },
  openGraph: { title: 'Scarsdale Custom Home Builder | House Architecture & Construction, PLLC', url: 'https://www.housearchitectureandconstruction.com/scarsdale-custom-home-builder' },
}

export default function ScarsdalCustomHomePage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Scarsdale, NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Scarsdale Custom Home Builder
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Build a fully custom home in Scarsdale — designed by your architect, built by your contractor, both under one roof. From vacant lot to move-in ready.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <div className="border-t border-charcoal/10" />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Building a custom home in Scarsdale is the ultimate expression of how you want to live — and it deserves a builder who brings both architectural vision and construction precision to the table. House Architecture & Construction, PLLC has built custom homes throughout Scarsdale and Westchester County, and our design-build approach means the person who designs your home is the same person who builds it.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Our process begins with a thorough understanding of how you want to live in your new home — how you cook, entertain, work, and rest. From there, Silvio develops a design that responds to your lot, your lifestyle, and Scarsdale's architectural context. We handle all aspects of the Village of Scarsdale permit process and build the home under direct supervision from foundation to finishes.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Custom homes we've built in Scarsdale range from traditional Colonials and Tudors that blend seamlessly into the neighborhood's historic fabric to contemporary designs that bring clean lines and open plans to Scarsdale's residential streets. Whatever your vision, we have the architectural depth and construction expertise to realize it.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link href="/contact" className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors">
                Plan Your Custom Home
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
                href="/scarsdale-new-construction"
                className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                Scarsdale New Construction
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

      <CTABanner headline="Build Your Custom Home in Scarsdale" subhead="Call (914) 224-7383 for a free consultation with Silvio M. Luca." />
    </>
  )
}
