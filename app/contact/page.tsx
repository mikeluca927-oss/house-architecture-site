import { Metadata } from 'next'
import ScrollReveal from '../components/ScrollReveal'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact | House Architecture & Construction, PLLC — Free Consultation',
  description:
    'Contact House Architecture & Construction, PLLC for a free in-home consultation. Serving all of Westchester County, NY. Call (914) 224-7383 or send a message online.',
  openGraph: {
    title: 'Contact | House Architecture & Construction, PLLC',
    description: 'Schedule your free in-home consultation. Westchester County, NY.',
    url: 'https://www.housearchitectureandconstruction.com/contact',
  },
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Get In Touch</p>
            <h1 className="font-cormorant text-4xl md:text-6xl text-charcoal mb-6 leading-tight">
              Start Your Westchester Architecture Project
            </h1>
            <p className="font-inter text-lg text-charcoal/60 max-w-xl leading-relaxed">
              Contact House Architecture &amp; Construction, PLLC for a free in-home consultation. We serve all of
              Westchester County, NY — with no commitment required to get started.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      {/* Contact Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="space-y-10">
                <div>
                  <h2 className="font-cormorant text-2xl text-charcoal mb-5">Contact Information</h2>
                  <div className="space-y-5">
                    <div>
                      <p className="font-inter text-xs tracking-widest uppercase text-charcoal/40 mb-1.5">Phone</p>
                      <a
                        href="tel:9142247383"
                        className="font-inter text-charcoal hover:text-gold transition-colors"
                      >
                        (914) 224-7383
                      </a>
                    </div>
                    <div>
                      <p className="font-inter text-xs tracking-widest uppercase text-charcoal/40 mb-1.5">Email</p>
                      <a
                        href="mailto:Housearchitecture@msn.com"
                        className="font-inter text-charcoal hover:text-gold transition-colors break-all"
                      >
                        Housearchitecture@msn.com
                      </a>
                    </div>
                    <div>
                      <p className="font-inter text-xs tracking-widest uppercase text-charcoal/40 mb-1.5">
                        Address
                      </p>
                      <address className="not-italic font-inter text-charcoal/70 leading-relaxed">
                        33 Ridge Street
                        <br />
                        Eastchester, NY 10709
                      </address>
                    </div>
                    <div>
                      <p className="font-inter text-xs tracking-widest uppercase text-charcoal/40 mb-1.5">
                        Instagram
                      </p>
                      <a
                        href="https://www.instagram.com/housearchitecture.pllc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-charcoal hover:text-gold transition-colors"
                      >
                        @housearchitecture.pllc
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-charcoal/10 pt-8">
                  <h3 className="font-cormorant text-xl text-charcoal mb-3">Service Area</h3>
                  <p className="font-inter text-sm text-charcoal/55 leading-relaxed">
                    We serve homeowners throughout Westchester County, NY, including Eastchester, Scarsdale,
                    Bronxville, Larchmont, White Plains, Pelham, New Rochelle, Tarrytown, and all
                    surrounding communities.
                  </p>
                </div>

                <div className="border-t border-charcoal/10 pt-8">
                  <h3 className="font-cormorant text-xl text-charcoal mb-3">Free In-Home Consultations</h3>
                  <p className="font-inter text-sm text-charcoal/55 leading-relaxed">
                    Every project begins with a complimentary in-home consultation — no commitment required. We come
                    to your home, assess your space, and discuss your vision so we can provide an honest,
                    personalized recommendation.
                  </p>
                </div>

                <div className="bg-charcoal/[0.03] border border-charcoal/10 p-6">
                  <p className="font-inter text-xs tracking-widest uppercase text-charcoal/40 mb-1">Hours</p>
                  <p className="font-inter text-sm text-charcoal/70">
                    Monday – Friday: 8:00 AM – 6:00 PM
                    <br />
                    Saturday: By appointment
                    <br />
                    Sunday: Closed
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
