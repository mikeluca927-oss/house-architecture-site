import ScrollReveal from './ScrollReveal'

interface TestimonialCardProps {
  quote: string
  author: string
  location?: string
  delay?: number
}

export default function TestimonialCard({ quote, author, location, delay = 0 }: TestimonialCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <blockquote className="relative border border-gold/25 p-8 md:p-12">
        <span
          className="font-cormorant text-8xl text-gold/15 absolute top-2 left-6 leading-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p className="font-cormorant text-xl md:text-2xl text-charcoal leading-relaxed mb-6 pt-6 italic relative z-10">
          {quote}
        </p>
        <footer>
          <cite className="not-italic">
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-charcoal/70">{author}</span>
            {location && (
              <span className="font-inter text-xs text-charcoal/40 ml-3">&middot; {location}</span>
            )}
          </cite>
        </footer>
      </blockquote>
    </ScrollReveal>
  )
}
