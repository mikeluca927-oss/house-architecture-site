import { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'

export const metadata: Metadata = {
  title: 'Historic Home Restorations Westchester NY | House Architecture & Construction',
  description:
    'Expert home restoration services in Westchester County, NY. Exterior restorations, structural repairs, interior renovations, and architectural preservation. Free in-home consultations.',
  openGraph: {
    title: 'Historic Home Restorations Westchester NY | House Architecture & Construction',
    url: 'https://www.housearchitecturepllc.com/restorations',
  },
  alternates: { canonical: 'https://www.housearchitecturepllc.com/restorations' },
}

const images = [
  {
    src: 'https://static.wixstatic.com/media/156c65_d05f54186ba74331b5971183683a705f~mv2.png',
    alt: 'Historic home restoration in Westchester County NY by House Architecture & Construction PLLC',
  },
]

const relatedServices = [
  { label: 'Architecture', href: '/architecture' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Additions', href: '/additions' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
]

export default function RestorationsPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Services</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Home Restorations in Westchester County, NY
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Our home restoration services help homeowners preserve and restore historic homes, period details, and
              aging structures throughout Westchester County. From exterior restorations and structural repairs to
              interior renovations and architectural preservation, we combine traditional craftsmanship with modern
              building practices.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            <ScrollReveal>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Westchester County&rsquo;s rich architectural heritage includes Victorian mansions, Tudor Revivals,
                Arts &amp; Crafts bungalows, Colonial period homes, and Georgian Revivals — each with its own
                vocabulary of detail, proportion, and material. House Architecture &amp; Construction, PLLC has the
                knowledge and skill to restore these homes properly, working within the spirit of the original
                architecture rather than overwriting it.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Our historic restoration projects begin with a thorough documentation and analysis of the existing
                structure. We identify what is original, what has been altered over time, and what the priorities are
                for restoration versus modernization. This assessment informs a restoration plan that balances
                preservation fidelity with the practical requirements of contemporary living.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                On the exterior, we source period-appropriate materials — custom millwork profiles, historically
                accurate window and door configurations, authentic masonry and cladding — to repair and restore
                original elements. On the interior, we preserve significant architectural features such as original
                plaster moldings, wood floors, wainscoting, and built-ins while sensitively introducing modern
                conveniences and updated mechanical systems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Many of our restoration projects also include code-required life safety upgrades, structural repairs,
                window replacements with historically appropriate profiles, and insulation retrofits that improve
                energy performance without compromising historic character.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Restore Your Historic Home
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-12">Restoration Projects</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative aspect-video overflow-hidden max-w-3xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl text-charcoal mb-8">Related Services</h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="font-inter text-xs tracking-[0.15em] uppercase border border-charcoal/20 px-6 py-3 hover:border-gold hover:text-gold transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Restore Your Historic Westchester Home" subhead="Schedule a free in-home consultation with our restoration team." />
    </>
  )
}
