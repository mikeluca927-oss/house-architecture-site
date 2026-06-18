import { Metadata } from 'next'
import ScrollReveal from '../components/ScrollReveal'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Community Designs Engineering D.P.C.',
  description:
    'Contact Community Designs Engineering D.P.C. to start your residential design project in Westchester County, NY.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 md:pt-48 pb-16 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <ScrollReveal>
            <p className="font-inter text-[10px] tracking-[0.4em] uppercase text-gold mb-5">Let's Work Together</p>
            <h1 className="font-cormorant text-5xl md:text-7xl text-cream font-light leading-tight mb-6">
              Start a Project
            </h1>
            <p className="font-inter text-base text-cream/50 max-w-lg leading-relaxed">
              Contact Community Designs Engineering D.P.C. to discuss your residential design project in Westchester County.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-20">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.15}>
              <div className="space-y-10">
                <div>
                  <h2 className="font-cormorant text-3xl text-charcoal font-light mb-8">Contact Information</h2>
                  <div className="space-y-6">
                    <div>
                      <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-gold mb-2">Email</p>
                      <a
                        href="mailto:communitydesignsllc@gmail.com"
                        className="font-inter text-charcoal/70 hover:text-gold transition-colors text-sm"
                      >
                        communitydesignsllc@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-gold mb-2">Address</p>
                      <address className="not-italic font-inter text-charcoal/60 leading-relaxed text-sm">
                        439 White Plains Rd<br />
                        Eastchester, NY 10709<br />
                        Westchester County
                      </address>
                    </div>
                    <div>
                      <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-gold mb-2">Follow</p>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors"
                      >
                        Instagram →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-charcoal/10 pt-8">
                  <h3 className="font-cormorant text-2xl text-charcoal font-light mb-3">Service Area</h3>
                  <p className="font-inter text-sm text-charcoal/50 leading-relaxed">
                    We serve clients throughout Westchester County and surrounding areas — including Eastchester, Scarsdale, Rye, White Plains, and beyond.
                  </p>
                </div>

                <div className="bg-charcoal p-8">
                  <p className="font-cormorant text-xl text-cream font-light leading-relaxed italic mb-4">
                    "We treat each client and project as if they were our own."
                  </p>
                  <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold">
                    — The Maiorano Brothers
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
