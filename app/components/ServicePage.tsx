import ScrollReveal from './ScrollReveal'
import CTABanner from './CTABanner'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

interface ServicePageProps {
  title: string
  headline: string
  intro: string
  body: string[]
  projects: Array<{ name: string; category: string; location: string }>
  relatedServices: Array<{ label: string; href: string }>
  ctaHeadline?: string
}

export default function ServicePage({
  headline,
  intro,
  body,
  projects,
  relatedServices,
  ctaHeadline,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Services</p>
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
              {headline}
            </h1>
            <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">{intro}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      {/* Body Content */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {body.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="font-inter text-charcoal/70 leading-relaxed text-lg">{paragraph}</p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal/90 transition-colors focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2"
              >
                Book a Free Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects */}
      {projects.length > 0 && (
        <section className="py-24 bg-charcoal/[0.03]">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-12">Featured Projects</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <ProjectCard name={p.name} category={p.category} location={p.location} index={i} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-24 bg-cream">
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

      <CTABanner headline={ctaHeadline} />
    </>
  )
}
