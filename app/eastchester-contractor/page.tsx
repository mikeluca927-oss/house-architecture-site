import { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '../components/CTABanner'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Eastchester Contractor | House Architecture & Construction, PLLC',
  description:
    'Licensed general contractor and architect based in Eastchester, NY at 33 Ridge Street. Renovations, additions, kitchens, bathrooms, and new construction. Free in-home consultation. Call (914) 224-7383.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/eastchester-contractor' },
  openGraph: {
    title: 'Eastchester Contractor | House Architecture & Construction, PLLC',
    description:
      'Licensed general contractor and architect based in Eastchester, NY. Free in-home consultations.',
    url: 'https://www.housearchitectureandconstruction.com/eastchester-contractor',
  },
}

const SITE = 'https://www.housearchitectureandconstruction.com'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'House Architecture & Construction, PLLC',
  description:
    'Licensed general contractor and residential architect headquartered in Eastchester, NY, serving Eastchester, Tuckahoe, Bronxville, and all of Westchester County.',
  url: `${SITE}/eastchester-contractor`,
  telephone: '+19142247383',
  email: 'Housearchitecture@msn.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '33 Ridge Street',
    addressLocality: 'Eastchester',
    addressRegion: 'NY',
    postalCode: '10709',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Eastchester' },
    { '@type': 'City', name: 'Tuckahoe' },
    { '@type': 'City', name: 'Bronxville' },
    { '@type': 'AdministrativeArea', name: 'Westchester County, NY' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Eastchester Contractor' },
  ],
}

const services = [
  { title: 'Full Home Renovations', desc: 'Whole-home transformations for Eastchester\u2019s Colonials, Tudors, capes, and split-levels \u2014 modernized inside without losing the character outside.', href: '/renovations' },
  { title: 'Additions & Expansions', desc: 'Second stories, primary suites, rear extensions, and dormers \u2014 designed and engineered in-house, built by the same firm.', href: '/additions' },
  { title: 'Kitchen Remodels', desc: 'Custom kitchens with full design, cabinetry, stone, lighting, and mechanical coordination under one contract.', href: '/kitchens' },
  { title: 'Bathroom Renovations', desc: 'Primary baths, hall baths, and powder rooms built to a luxury standard of finish.', href: '/bathrooms' },
  { title: 'Architectural Design & Permits', desc: 'In-house drawings, 3D renderings, and direct permit filing with the Town of Eastchester Building Department.', href: '/architecture' },
  { title: 'New Construction', desc: 'Ground-up custom homes on Eastchester lots \u2014 from site planning and zoning analysis through the certificate of occupancy.', href: '/new-construction' },
]

export default function EastchesterContractorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Based in Eastchester, NY
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Eastchester Contractor &mdash; Licensed Architect &amp; Builder
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              House Architecture &amp; Construction, PLLC is a licensed general contractor and architecture firm headquartered at 33 Ridge Street in Eastchester, NY. When you hire us, you hire a contractor whose office is in your own town.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-block bg-gold text-white font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold/90 transition-colors"
              >
                Book a Free Consultation
              </Link>
              <a
                href="tel:9142247383"
                className="font-inter text-charcoal text-sm tracking-wider flex items-center gap-2 hover:text-gold transition-colors"
              >
                (914) 224-7383
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ScrollReveal>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Most contractors serving Eastchester drive in from somewhere else. We don&rsquo;t. Our office sits at 33 Ridge Street, minutes from Lake Isle, the Mill Road corridor, and Eastchester&rsquo;s schools. Principal Silvio M. Luca &mdash; a New York State licensed architect and licensed general contractor &mdash; has spent more than 25 years designing and building homes in this town and the surrounding villages of Tuckahoe and Bronxville. That proximity matters in practical ways: faster site visits, quicker responses when a question comes up mid-construction, and a reputation in the community we protect on every job.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              It also matters at the building department. Every Eastchester renovation, addition, or new build runs through the Town of Eastchester Building Department, and we have filed and carried projects through that office for years. We know its submission requirements, inspection sequence, and zoning particulars &mdash; including the differences between the Town of Eastchester and the incorporated villages of Tuckahoe and Bronxville, each of which has its own building department and code enforcement. Because our architectural drawings and permit applications are produced in-house, there is no waiting on an outside architect for revisions when the plan examiner asks for a change.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              Eastchester&rsquo;s housing stock rewards a contractor who is also an architect. Much of the town was built out in the 1920s through 1950s &mdash; brick Tudors and Colonials near Bronxville, capes and split-levels toward New Rochelle Road &mdash; and these homes often carry original plaster, aging mechanicals, and framing that differs from modern construction. Silvio designs with those realities anticipated in the drawings, so structural conditions are planned for rather than discovered mid-demolition. Our <Link href="/projects/eastchester-colonial-revival" className="text-gold underline underline-offset-2">Eastchester Colonial Revival</Link> project is a good example: a comprehensive renovation that modernized the home&rsquo;s systems and layout while preserving the period architecture that gives the street its character.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              As a design-build firm, we carry your project under one contract from the first sketch to the certificate of occupancy: architectural design, permit filing, construction, and every trade on site, with a single point of accountability. We are fully licensed in New York State and carry comprehensive general liability and workers&rsquo; compensation insurance. With more than 100 homes transformed across Westchester County, our longest-standing relationships are here in Eastchester &mdash; and free in-home consultations for Eastchester homeowners are usually scheduled within days, not weeks. Call (914) 224-7383 or <Link href="/contact" className="text-gold underline underline-offset-2">contact us online</Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-10">
              Contracting Services in Eastchester
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.href} delay={i * 0.07}>
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
            <h2 className="font-cormorant text-3xl text-charcoal mb-6">
              Serving Eastchester &amp; Neighboring Communities
            </h2>
            <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
              From our Eastchester office we also serve <Link href="/bronxville-home-renovation" className="text-gold underline underline-offset-2">Bronxville</Link>, Tuckahoe, <Link href="/scarsdale-contractor" className="text-gold underline underline-offset-2">Scarsdale</Link>, and the rest of <Link href="/westchester-contractor-architecture" className="text-gold underline underline-offset-2">Westchester County</Link>. See completed work in our <Link href="/projects" className="text-gold underline underline-offset-2">project portfolio</Link>, or learn more about our <Link href="/architecture" className="text-gold underline underline-offset-2">architecture services</Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        headline="Hiring a Contractor in Eastchester?"
        subhead="Our office is at 33 Ridge Street — call (914) 224-7383 for a free in-home consultation with Silvio M. Luca."
      />
    </>
  )
}
