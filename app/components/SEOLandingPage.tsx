import ScrollReveal from './ScrollReveal'
import CTABanner from './CTABanner'
import Link from 'next/link'

interface SEOLandingPageProps {
  h1: string
  city: string
  intro: string
  paragraphs: string[]
  serviceLinks: Array<{ label: string; href: string }>
  ctaHeadline?: string
}

export default function SEOLandingPage({
  h1,
  city,
  intro,
  paragraphs,
  serviceLinks,
  ctaHeadline,
}: SEOLandingPageProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'House Architecture & Construction, PLLC',
    description: `Residential architecture and construction serving ${city} and Westchester County, NY.`,
    url: 'https://www.housearchitecturepllc.com',
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
      { '@type': 'City', name: city },
      { '@type': 'AdministrativeArea', name: 'Westchester County, NY' },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Serving {city} &amp; Westchester County
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">{h1}</h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">{intro}</p>
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

      {/* Content */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="font-inter text-charcoal/70 leading-relaxed text-lg">{p}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Internal links box */}
          <ScrollReveal delay={0.4}>
            <div className="mt-12 p-8 md:p-10 border border-charcoal/10">
              <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-6">
                Our Services in {city}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        headline={ctaHeadline ?? `Work With ${city}'s Premier Architecture Firm`}
        subhead={`House Architecture & Construction, PLLC serves ${city} homeowners with free in-home consultations. Call (914) 224-7383 or book online today.`}
      />
    </>
  )
}
