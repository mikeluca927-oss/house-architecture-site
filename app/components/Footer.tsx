import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-cormorant text-3xl text-cream tracking-wide leading-none mb-2">
              Community<br />Designs
            </p>
            <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              Engineering D.P.C.
            </p>
            <p className="font-inter text-sm text-cream/40 leading-relaxed max-w-xs">
              An influential design engineering firm in lower Westchester, New York — planning and designing inspirational structures with people in mind.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: 'Our Work', href: '/#projects' },
                { label: 'About the Firm', href: '/#about' },
                { label: 'Meet the Team', href: '/#team' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-inter text-sm text-cream/50 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Contact</h3>
            <address className="not-italic space-y-3">
              <p className="font-inter text-sm text-cream/50 leading-relaxed">
                439 White Plains Rd<br />
                Eastchester, NY 10709
              </p>
              <a
                href="mailto:communitydesignsllc@gmail.com"
                className="font-inter text-sm text-cream/50 hover:text-gold transition-colors block"
              >
                communitydesignsllc@gmail.com
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm text-cream/50 hover:text-gold transition-colors block"
              >
                Instagram →
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-cream/25">
            &copy; {new Date().getFullYear()} Community Designs Engineering D.P.C. All rights reserved.
          </p>
          <p className="font-inter text-xs text-cream/25">
            Westchester County, New York
          </p>
        </div>
      </div>
    </footer>
  )
}
