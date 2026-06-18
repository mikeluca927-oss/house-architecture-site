import Link from 'next/link'

const serviceLinks = [
  { label: 'Architecture', href: '/architecture' },
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Additions', href: '/additions' },
  { label: 'Restorations', href: '/restorations' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
  { label: 'Bedrooms', href: '/bedrooms' },
  { label: 'Living Areas', href: '/living-areas' },
]

const seoLinks = [
  { label: 'Scarsdale Architect', href: '/scarsdale-architect' },
  { label: 'Scarsdale Contractor', href: '/scarsdale-contractor' },
  { label: 'Bronxville Home Renovation', href: '/bronxville-home-renovation' },
  { label: 'Larchmont Luxury Renovation', href: '/larchmont-luxury-renovation' },
  { label: 'Westchester Contractor', href: '/westchester-contractor-architecture' },
  { label: 'Westchester Home Remodeling', href: '/westchester-home-remodeling' },
  { label: 'Westchester Renovation', href: '/westchester-renovation-contractor' },
  { label: 'White Plains Architect', href: '/white-plains-architect' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80" aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <p className="font-cormorant text-2xl text-gold tracking-widest uppercase leading-none">House</p>
              <p className="font-inter text-[10px] tracking-[0.22em] uppercase text-cream/50 mt-0.5">
                Architecture &amp; Construction
              </p>
            </div>
            <p className="font-inter text-sm text-cream/50 leading-relaxed mb-5">
              Westchester County's premier residential architecture and construction firm. From conception to completion.
            </p>
            <a
              href="https://www.instagram.com/housearchitecture.pllc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cream/50 hover:text-gold transition-colors"
              aria-label="House Architecture & Construction on Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @housearchitecture.pllc
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-cormorant text-lg text-cream tracking-widest uppercase mb-5">Navigation</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Projects', href: '/projects' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-cream/50 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-cormorant text-lg text-cream tracking-widest uppercase mb-5">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-cream/50 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Service Areas */}
          <div>
            <h3 className="font-cormorant text-lg text-cream tracking-widest uppercase mb-5">Contact</h3>
            <address className="not-italic space-y-3 mb-8">
              <p className="font-inter text-sm text-cream/50 leading-relaxed">
                33 Ridge Street
                <br />
                Eastchester, NY 10709
              </p>
              <a
                href="tel:9142247383"
                className="font-inter text-sm text-gold hover:text-gold/80 transition-colors block"
              >
                (914) 224-7383
              </a>
              <a
                href="mailto:Housearchitecture@msn.com"
                className="font-inter text-sm text-cream/50 hover:text-gold transition-colors block break-all"
              >
                Housearchitecture@msn.com
              </a>
            </address>

            <h4 className="font-cormorant text-base text-cream tracking-wider uppercase mb-3">Service Areas</h4>
            <ul className="space-y-1.5">
              {seoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-xs text-cream/35 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-cream/30">
            &copy; {new Date().getFullYear()} House Architecture &amp; Construction, PLLC. All rights reserved.
          </p>
          <p className="font-inter text-xs text-cream/30">Licensed &amp; Insured | Westchester County, NY</p>
        </div>
      </div>
    </footer>
  )
}
