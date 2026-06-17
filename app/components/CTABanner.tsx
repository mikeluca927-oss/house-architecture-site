import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

interface CTABannerProps {
  headline?: string
  subhead?: string
  buttonText?: string
}

export default function CTABanner({
  headline = "Let's Build Something Exceptional",
  subhead =
    "Schedule your free in-home consultation with Westchester's premier architecture & construction firm.",
  buttonText = 'Book a Free Consultation',
}: CTABannerProps) {
  return (
    <section className="bg-charcoal py-16 md:py-24" aria-label="Call to action">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-cormorant text-3xl md:text-5xl text-cream mb-4 tracking-wide leading-tight">
            {headline}
          </h2>
          <p className="font-inter text-cream/60 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">{subhead}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-block bg-gold text-white font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold/90 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
            >
              {buttonText}
            </Link>
            <a
              href="tel:9142247383"
              className="font-inter text-gold text-sm tracking-wider hover:text-gold/80 transition-colors"
            >
              (914) 224-7383
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
