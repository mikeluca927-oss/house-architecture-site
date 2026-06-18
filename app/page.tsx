import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from './components/ScrollReveal'
import CTABanner from './components/CTABanner'
import TestimonialCard from './components/TestimonialCard'

export const metadata: Metadata = {
  title: 'House Architecture & Construction, PLLC | Westchester NY Architect & Contractor',
  description:
    "Westchester County's premier residential architecture and construction firm. Custom homes, renovations, additions, kitchens, bathrooms, and more. Free consultations. Serving Eastchester, Scarsdale, Bronxville, and all of Westchester, NY.",
  keywords: [
    'architect Westchester NY',
    'home architect Westchester County',
    'residential architect Scarsdale NY',
    'custom home builder Westchester',
    'general contractor Westchester County NY',
    'home renovation Westchester',
    'home addition Westchester NY',
    'kitchen remodel Westchester',
    'bathroom remodel Westchester NY',
    'new construction Westchester County',
    'licensed architect New York',
    'House Architecture Construction PLLC',
    'Silvio Luca architect',
    'Bronxville renovation contractor',
    'Larchmont architect',
  ],
  openGraph: {
    title: 'House Architecture & Construction, PLLC | Westchester NY Architect & Contractor',
    description:
      "Westchester County's premier residential architecture and construction firm. Custom homes, renovations, additions, and more.",
    url: 'https://www.housearchitectureandconstruction.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'House Architecture & Construction, PLLC — Westchester NY' }],
  },
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com' },
}

const services = [
  {
    title: 'Architecture',
    href: '/architecture',
    description:
      'Comprehensive architectural design services for new homes, additions, and full-scale renovations — from initial concept and 3D renderings through construction documents and permitting.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M5 35L20 8l15 27H5z" />
        <path d="M13 35v-8h14v8" />
      </svg>
    ),
  },
  {
    title: 'New Construction',
    href: '/new-construction',
    description:
      'Complete ground-up custom home construction on vacant lots — from site planning and architectural design through project management, construction, and final walkthrough.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="5" y="20" width="30" height="15" />
        <path d="M5 20L20 8l15 12" />
        <path d="M16 35V26h8v9" />
      </svg>
    ),
  },
  {
    title: 'Renovations',
    href: '/renovations',
    description:
      'Full-scale home renovations transforming entire floors, wings, or whole residences. We coordinate every trade from structural work to finishes for a seamless result.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="6" y="6" width="28" height="28" rx="1" />
        <path d="M6 16h28M16 6v28" />
      </svg>
    ),
  },
  {
    title: 'Additions',
    href: '/additions',
    description:
      'Thoughtfully designed home additions — second stories, primary suite expansions, full floor additions — engineered to integrate seamlessly with your home\'s existing architecture.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="4" y="14" width="20" height="22" />
        <rect x="24" y="20" width="12" height="16" />
        <path d="M20 14v22" />
      </svg>
    ),
  },
  {
    title: 'Restorations',
    href: '/restorations',
    description:
      'Expert preservation and restoration of historic and period homes, restoring original character and architectural integrity while upgrading systems and finishes throughout.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="20" cy="20" r="13" />
        <circle cx="20" cy="20" r="6" />
        <path d="M20 7v6M20 27v6M7 20h6M27 20h6" />
      </svg>
    ),
  },
  {
    title: 'Interior Spaces',
    href: '/living-areas',
    description:
      'Complete interior fit-outs for kitchens, bathrooms, living areas, and bedrooms — designed and built as part of a whole-floor or whole-home scope.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="4" y="4" width="32" height="32" rx="1" />
        <path d="M4 18h32M18 4v14" />
        <rect x="22" y="22" width="10" height="10" />
      </svg>
    ),
  },
]

const projectCategories = [
  {
    title: 'Kitchens',
    href: '/kitchens',
    description: 'Custom kitchens designed as part of full-scale home projects',
    img: 'https://static.wixstatic.com/media/156c65_ed6b3e05306d4115a70d2f7cb6b53c73~mv2.jpg',
  },
  {
    title: 'Bathrooms',
    href: '/bathrooms',
    description: 'Luxury bathrooms built to the highest standard',
    img: 'https://static.wixstatic.com/media/156c65_f0f7a6665fd64123afbc4c377f98eaee~mv2.png',
  },
  {
    title: 'Bedrooms',
    href: '/bedrooms',
    description: 'Primary suites and bedroom renovations designed for comfort',
    img: 'https://static.wixstatic.com/media/156c65_671bc7b162414601b06c197ac0db6f04~mv2.png',
  },
  {
    title: 'Living Areas',
    href: '/living-areas',
    description: 'Open, thoughtfully designed living spaces for everyday life',
    img: 'https://static.wixstatic.com/media/156c65_7f68921c1cee4125bcf39463e4257038~mv2.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        <Image
          src="https://static.wixstatic.com/media/156c65_9a776fc9aeae43969a654e26efbd034c~mv2.png"
          alt="Custom home architecture and construction in Westchester County NY by House Architecture & Construction PLLC"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.4em] uppercase text-gold mb-6">
              Westchester County, NY
            </p>
            <h1 className="font-cormorant text-4xl md:text-7xl text-cream leading-tight mb-4">
              Westchester&rsquo;s Premier Architecture &amp; Construction Firm
            </h1>
            <p className="font-inter text-lg md:text-xl text-cream/80 mb-3 tracking-wide">
              From Conception to Completion
            </p>
            <p className="font-inter text-base text-cream/60 mb-10">
              Master Craftsmanship &middot; Timeless Detail &middot; Modern Functionality
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-white font-inter text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-gold/90 transition-colors"
            >
              Book a Free Consultation
            </Link>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <div className="w-px h-12 bg-cream/30" />
          <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-cream/40">Scroll</p>
        </div>
      </section>

      {/* About blurb */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">
              House Architecture &amp; Construction, PLLC &mdash; Proudly Servicing Westchester and Surrounding Areas
            </p>
            <p className="font-cormorant text-2xl md:text-3xl text-charcoal leading-relaxed">
              We are a licensed architecture and construction firm delivering full-service residential projects
              throughout Westchester County. From architectural design and permitting to complete construction
              management, we handle every phase — whether you&rsquo;re building from the ground up, transforming an
              entire floor, or undertaking a full-scale renovation. From conception to completion, under one roof.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="font-inter text-sm tracking-widest uppercase text-charcoal/60 hover:text-gold transition-colors border-b border-charcoal/20 pb-1"
              >
                More About Us &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-charcoal/[0.03]" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-3 text-center">What We Do</p>
            <h2
              id="services-heading"
              className="font-cormorant text-3xl md:text-5xl text-charcoal text-center mb-10 md:mb-16 leading-tight"
            >
              Architecture &amp; Construction Services
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10">
            {services.map((service, i) => (
              <ScrollReveal key={service.href} delay={i * 0.07}>
                <Link
                  href={service.href}
                  className="group block bg-cream p-6 md:p-10 hover:bg-charcoal/[0.025] transition-colors h-full"
                >
                  <span className="text-gold mb-5 block">{service.icon}</span>
                  <h3 className="font-cormorant text-2xl text-charcoal mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm text-charcoal/55 leading-relaxed mb-6">{service.description}</p>
                  <span className="font-inter text-xs tracking-widest uppercase text-gold block group-hover:translate-x-1 transition-transform">
                    Learn More &rarr;
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 md:py-24 bg-charcoal" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-3">Our Work</p>
            <h2
              id="projects-heading"
              className="font-cormorant text-3xl md:text-5xl text-cream mb-10 md:mb-16 leading-tight"
            >
              Featured Project Categories
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectCategories.map((cat, i) => (
              <ScrollReveal key={cat.href} delay={i * 0.1}>
                <Link href={cat.href} className="group relative block aspect-video overflow-hidden">
                  <img
                    src={cat.img}
                    alt={`${cat.title} by House Architecture & Construction in Westchester County NY`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 md:p-8">
                    <h3 className="font-cormorant text-3xl text-cream mb-2 leading-tight">{cat.title}</h3>
                    <p className="font-inter text-sm text-cream/60 mb-4">{cat.description}</p>
                    <span className="font-inter text-xs tracking-widest uppercase text-gold group-hover:translate-x-1 transition-transform block">
                      View Projects &rarr;
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-block border border-cream/25 text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:border-gold hover:text-gold transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-cream" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2
              id="why-heading"
              className="font-cormorant text-3xl md:text-5xl text-charcoal text-center mb-10 md:mb-16 leading-tight"
            >
              Why Choose House Architecture &amp; Construction
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Free In-Home Consultations',
                description:
                  'We offer in-home consultations to help you turn your vision into reality. Our experts will come to your home to assess your needs and provide recommendations for your project.',
              },
              {
                title: 'Licensed & Insured',
                description:
                  'We are fully licensed and insured to give you peace of mind knowing that your project is in good hands throughout every phase of design and construction.',
              },
              {
                title: 'Architecture + Construction Under One Roof',
                description:
                  'Whether you need architectural plans, construction services, or a complete design-build solution, our team can assist with any phase of your project.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-10 h-px bg-gold mx-auto mb-6" aria-hidden="true" />
                  <h3 className="font-cormorant text-2xl text-charcoal mb-4">{item.title}</h3>
                  <p className="font-inter text-sm text-charcoal/55 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-charcoal/[0.03]" aria-labelledby="testimonials-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p
              className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-10 text-center"
              id="testimonials-heading"
            >
              Client Stories
            </p>
          </ScrollReveal>
          <div className="space-y-8">
            <TestimonialCard
              quote="We are a month or two away from moving into our dream home, built from the ground up on a vacant lot. Silvio has been integral in the design and inspiration for the home — but also in the execution of the process. The day to day management of a project of this size is no easy task. He has been flawless in assisting us in selecting the right subs, the timeliness of the process, to choosing the best materials. His eye for details and perfection are unmatched. Silvio treats every detail as if he's doing it for his own home — and we honestly feel that he cares to a level that we didn't think possible. When we began the process we heard all of the horror stories of building your own home. However with him in charge it really has been a joy and we have not really felt overwhelmed and stressed. He cares so much that we really can sit back and trust that he's on top of things. That trust is really the key to what makes Silvio great. With contractors you constantly have to worry if you're being taken for a ride — and whether their suggestions are truly in your best interests or theirs. He genuinely cares to get it right. You are just not going to find that anywhere else. In addition, his expertise is truly amazing. He thinks things through 5 steps in advance and anticipates any issue before it's an issue. This has made it so that during this entire process nothing has taken us by surprise. His estimates of cost are always exactly right, and nothing has gone over budget or caught us by surprise. To me, this is more than a job for Silvio. This is his passion and his love and we genuinely appreciate his efforts and his perfection and cannot imagine working with anyone else."
              author="House Architecture Client"
              location="Westchester County, NY"
            />
            <TestimonialCard
              quote="Silvio was an absolute pleasure to work with. You hear so many horror stories about contractors but Silvio was excellent and a perfectionist — he went above and beyond his contract work so we would be happy. I highly recommend him."
              author="House Architecture Client"
              location="Westchester County, NY"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
