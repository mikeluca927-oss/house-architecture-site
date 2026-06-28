import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Scarsdale Luxury Home Renovation | House Architecture & Construction, PLLC',
  description:
    'High-end luxury home renovations in Scarsdale, NY. Whole-home transformations, primary suites, designer kitchens, and architectural additions by licensed architect Silvio M. Luca.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/scarsdale-luxury-renovation' },
  openGraph: { title: 'Scarsdale Luxury Home Renovation | House Architecture & Construction, PLLC', url: 'https://www.housearchitectureandconstruction.com/scarsdale-luxury-renovation' },
}

export default function ScarsdalLuxuryRenovationPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Scarsdale, NY</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Luxury Home Renovations in Scarsdale
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Scarsdale's finest homes deserve the finest renovation team. We design and build high-end residential renovations that elevate every space — from the entrance foyer to the primary suite.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <div className="border-t border-charcoal/10" />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Scarsdale is home to some of the most beautiful and architecturally significant residences in Westchester County — and the homeowners who live in them expect a renovation team that matches that standard. House Architecture & Construction, PLLC brings architectural precision and construction craftsmanship to every luxury renovation we undertake in Scarsdale.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Our luxury renovation projects in Scarsdale typically involve whole-home scopes — full kitchen redesigns with custom cabinetry and stone, primary suite additions with spa bathrooms and custom closets, living area transformations with coffered ceilings and millwork, and complete exterior refreshes. We work with the finest materials, the most skilled tradespeople, and an architectural eye that elevates every detail.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Principal Silvio M. Luca personally oversees every luxury project we take on in Scarsdale. His dual background as a licensed architect and licensed contractor means he sees each project through both lenses simultaneously — ensuring that the design is buildable, the construction is faithful to the design, and the result is a home that exceeds your expectations.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10">
              <Link href="/contact" className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors">
                Begin Your Luxury Renovation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTABanner headline="Elevate Your Scarsdale Home" subhead="Call (914) 224-7383 for a private consultation with Silvio M. Luca." />
    </>
  )
}
