import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-lg">
        <p className="font-cormorant text-8xl text-gold/20 leading-none mb-4">404</p>
        <h1 className="font-cormorant text-4xl text-charcoal mb-4">Page Not Found</h1>
        <p className="font-inter text-charcoal/55 mb-10 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist. It may have been moved, renamed, or removed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-block bg-charcoal text-cream font-inter text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-charcoal/90 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="font-inter text-sm text-gold hover:text-gold/80 transition-colors tracking-wider"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
