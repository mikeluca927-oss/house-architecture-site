import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Fox Meadow Scarsdale Renovation',
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
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Renovating in Fox Meadow means working within the Village of Scarsdale's permitting and review process. Because our architectural drawings, permit applications, and construction are all handled in-house, Fox Meadow homeowners avoid the back-and-forth between separate architects and contractors that so often stalls projects. We prepare the construction documents, file directly with the Village of Scarsdale Building Department, and manage every trade on site — one contract, one point of accountability, from the first sketch to the certificate of occupancy.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.32}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Many of Fox Meadow's homes were built in the 1920s and 1930s, which means renovation work here often involves more than finishes: original plaster walls, aging mechanical and electrical systems, and framing methods that differ from modern construction. As both a licensed architect and licensed general contractor, Silvio designs with these realities in mind — so structural surprises are anticipated in the drawings, not discovered mid-construction.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="mt-10">
              <Link href="/contact" className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors">
                Schedule a Fox Meadow Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-10">Our Fox Meadow Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Full Home Renovations', desc: 'Whole-home transformations for Fox Meadow\u2019s Tudors, Colonials, and Georgians \u2014 updated for modern living without losing period character.', href: '/renovations' },
              { title: 'Additions & Expansions', desc: 'Primary suite wings, second stories, and rear extensions engineered to match the scale and materials of the original home.', href: '/additions' },
              { title: 'Kitchen Remodels', desc: 'Custom kitchens with cabinetry, stone, lighting, and full mechanical coordination \u2014 designed and built under one roof.', href: '/kitchens' },
              { title: 'Bathroom Renovations', desc: 'Spa-quality primary baths, guest baths, and powder rooms built to the highest standard of finish.', href: '/bathrooms' },
              { title: 'Architectural Design & Permits', desc: 'In-house drawings, 3D renderings, and direct permit filing with the Village of Scarsdale Building Department.', href: '/architecture' },
              { title: 'Historic Restorations', desc: 'Preservation of original detail \u2014 plaster, millwork, leaded glass \u2014 with fully modernized systems behind the walls.', href: '/restorations' },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="border-l-2 border-gold pl-6">
                  <h3 className="font-cormorant text-xl text-charcoal mb-2">
                    <Link href={s.href} className="hover:text-gold transition-colors">{s.title}</Link>
                  </h3>
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
            <h2 className="font-cormorant text-3xl text-charcoal mb-6">Serving All of Scarsdale</h2>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Beyond Fox Meadow, we work throughout Scarsdale \u2014 including <Link href="/heathcote-renovation" className="text-gold underline underline-offset-2">Heathcote</Link>, <Link href="/edgewood-renovation" className="text-gold underline underline-offset-2">Edgewood</Link>, and <Link href="/greenacres-renovation" className="text-gold underline underline-offset-2">Greenacres</Link>. Explore our <Link href="/scarsdale-home-renovation" className="text-gold underline underline-offset-2">Scarsdale home renovation</Link> services or view completed work in our <Link href="/projects" className="text-gold underline underline-offset-2">project portfolio</Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner headline="Renovating Your Fox Meadow Home?" subhead="Call (914) 224-7383 for a free in-home consultation with Silvio M. Luca." />
    </>
  )
}
