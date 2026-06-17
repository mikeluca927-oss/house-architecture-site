import { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'

export const metadata: Metadata = {
  title: 'Kitchen Renovation Westchester NY | House Architecture & Construction',
  description:
    'Custom kitchen remodeling services in Westchester County, NY. From custom cabinetry to complete kitchen redesigns. Free in-home consultations.',
  openGraph: {
    title: 'Kitchen Renovation Westchester NY | House Architecture & Construction',
    url: 'https://www.housearchitecturepllc.com/kitchens',
  },
  alternates: { canonical: 'https://www.housearchitecturepllc.com/kitchens' },
}

const images = [
  {
    src: 'https://static.wixstatic.com/media/156c65_ed6b3e05306d4115a70d2f7cb6b53c73~mv2.jpg',
    alt: 'Custom kitchen renovation in Scarsdale NY by House Architecture & Construction',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_21fea21bc31542d99cfe4baae7ddbbd2~mv2.png',
    alt: 'Modern kitchen design in Westchester County NY',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_be82467756ad4b308a7f44c642ab4509~mv2.jpeg',
    alt: 'Kitchen remodel with custom cabinetry in Westchester NY',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_3e16fe1129694e56bab16cda22d235c6~mv2.webp',
    alt: 'Luxury kitchen renovation in Westchester County',
  },
  {
    src: 'https://static.wixstatic.com/media/156c65_ca0334ffa31a40d48aff877bc7e03137~mv2.jpg',
    alt: 'Kitchen design and construction by House Architecture & Construction PLLC',
  },
]

const relatedServices = [
  { label: 'Bathrooms', href: '/bathrooms' },
  { label: 'Living Areas', href: '/living-areas' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Additions', href: '/additions' },
]

export default function KitchensPage() {
  return (
    <>
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Services</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              Westchester Kitchen Renovations &amp; Custom Design
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
              Our kitchen work is typically part of a larger whole-floor or whole-home project — allowing us to design
              and build kitchens that integrate seamlessly with the surrounding spaces. The result is a kitchen that
              doesn&rsquo;t just look exceptional in isolation, but functions as the natural heart of the entire home.
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
                Because our kitchen projects are embedded within larger renovations, new construction, or full-floor
                reconfigurations, we have the ability to rethink the layout, adjacencies, and flow of the entire space —
                not just what goes inside the kitchen walls. Every kitchen we design and build is tailored to the unique
                lifestyle, taste, and requirements of the homeowner.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                Our approach combines architectural thinking with construction expertise — meaning your kitchen is
                designed not just to look beautiful, but to function flawlessly for decades. We handle everything from
                concept and permitting through final installation, coordinating every trade as part of a unified
                project scope.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="font-inter text-charcoal/70 leading-relaxed text-lg">
                At House Architecture &amp; Construction, PLLC, kitchen design is never templated. Whether your kitchen
                is part of a ground-up new build or a full-floor renovation, we begin with a thorough understanding of
                how you cook, entertain, and live. From there, we develop a design that is both visually compelling and
                functionally exceptional — layouts that maximize flow, storage solutions that eliminate clutter, and
                material selections that balance beauty with durability.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors"
              >
                Start Your Kitchen Remodel
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-12">Kitchen Projects</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative aspect-[4/3] overflow-hidden">
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

      <CTABanner headline="Ready to Renovate Your Kitchen?" subhead="Book a free in-home consultation with our Westchester kitchen design team." />
    </>
  )
}
