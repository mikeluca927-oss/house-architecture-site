import { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Meet Dr. Sean M. Rooney | Rooney Orthodontics — Mahopac, NY',
  description:
    'Learn about Dr. Sean M. Rooney, Board Certified Orthodontist and Mahopac native. Columbia University trained, Top Dentist in Hudson Valley 2008-2022, serving the community since 2007.',
}

const credentials = [
  'Board Certified by the American Board of Orthodontics (2004)',
  'Member, American Association of Orthodontists',
  'Member, World Federation of Orthodontists',
  'Member, American Dental Association',
  'Member, American Academy of Dental Sleep Medicine',
  'Member, Academy of Sports Dentistry',
  'Chairperson, Columbia University Orthodontic Alumni Executive Board',
  'President, Putnam County Dental Society',
]

const awards = [
  { year: '2008–2022', title: 'Top Dentist in Hudson Valley' },
  { year: '2017, 2018', title: 'Hudson Valley Parents Favorite Doc' },
  { year: '2000', title: 'Leadership Award — Dental Society of the State of New York' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal" aria-label="About header">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.4em] uppercase text-gold mb-4">About</p>
            <h1 className="font-cormorant text-4xl md:text-6xl text-cream leading-tight mb-6">
              Dr. Sean M. Rooney
            </h1>
            <p className="font-inter text-base text-cream/60 max-w-xl mx-auto leading-relaxed">
              Board Certified Orthodontist — Mahopac, NY
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://www.rooneyortho.com/assets/uploads/images/meet-dr-rooney.jpg"
                  alt="Dr. Sean M. Rooney — Board Certified Orthodontist, Mahopac NY"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold">Our Doctor</p>
                <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal leading-tight">
                  A Community-Committed Orthodontist
                </h2>
                <div className="space-y-4 font-inter text-sm text-charcoal/65 leading-relaxed">
                  <p>
                    Dr. Sean M. Rooney is a Board Certified Orthodontist and a proud native of Mahopac, New York, having graduated from Mahopac High School. Deeply rooted in this community, he opened his practice here in 2007 alongside his wife Jennifer — committed to serving the neighbors, families, and friends he has known his entire life.
                  </p>
                  <p>
                    Dr. Rooney earned his Bachelor of Arts in Physical Anthropology from the University of Buffalo, then went on to Columbia University School of Dental and Oral Surgery, where he graduated in 2000 and was honored with the Leadership Award by the Dental Society of the State of New York as Class President. He completed both a General Dentistry Residency and an Orthodontics Residency at Columbia University (2002–2004), where he now serves as Chairperson of the Orthodontic Alumni Executive Board.
                  </p>
                  <p>
                    Dr. Rooney has been selected as a Top Dentist in the Hudson Valley every year from 2008 to 2022, and was twice elected Hudson Valley Parents Favorite Doc. He serves as President of the Putnam County Dental Society and is deeply committed to continuing education in orthodontics, dental sleep medicine, and sports dentistry.
                  </p>
                  <p>
                    Outside the office, Dr. Rooney is a two-time Ironman triathlete, involved with the Mahopac Triathlon and the Ty Louis Campbell Foundation. He and Jennifer have three daughters: Emma, Addison, and Lia.
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-gold text-white font-inter text-xs tracking-[0.25em] uppercase px-8 py-3.5 hover:bg-gold/90 transition-colors"
                  >
                    Schedule a Consultation
                  </Link>
                  <Link
                    href="/what-sets-us-apart"
                    className="inline-block border border-charcoal/20 text-charcoal font-inter text-xs tracking-[0.25em] uppercase px-8 py-3.5 hover:border-gold hover:text-gold transition-colors"
                  >
                    What Sets Us Apart
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16 md:py-20 bg-charcoal/[0.03]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4 text-center">Education & Training</p>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal text-center mb-12 leading-tight">
              Columbia University Trained
            </h2>
          </ScrollReveal>
          <div className="space-y-0 divide-y divide-charcoal/10">
            {[
              { period: '1992–1996', school: 'Mahopac High School', detail: 'Mahopac, NY' },
              { period: '1996–2000', school: 'University of Buffalo', detail: 'Bachelor of Arts — Physical Anthropology' },
              { period: '2000', school: 'Columbia University School of Dental and Oral Surgery', detail: 'Doctor of Dental Surgery — Leadership Award, Class President' },
              { period: '2000–2001', school: 'Columbia University', detail: 'General Dentistry Residency' },
              { period: '2002–2004', school: 'Columbia University', detail: 'Orthodontics Residency — Board Certified 2004' },
            ].map((item, i) => (
              <ScrollReveal key={item.period} delay={i * 0.07}>
                <div className="flex gap-8 py-8">
                  <div className="w-28 flex-shrink-0">
                    <p className="font-inter text-xs tracking-widest uppercase text-gold">{item.period}</p>
                  </div>
                  <div>
                    <p className="font-cormorant text-xl text-charcoal mb-1">{item.school}</p>
                    <p className="font-inter text-sm text-charcoal/55">{item.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4 text-center">Recognition</p>
            <h2 className="font-cormorant text-3xl md:text-4xl text-cream text-center mb-12 leading-tight">Awards & Honors</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-10 h-px bg-gold mx-auto mb-4" />
                  <p className="font-inter text-xs tracking-widest uppercase text-gold mb-2">{a.year}</p>
                  <p className="font-cormorant text-xl text-cream">{a.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4 text-center">Credentials & Affiliations</p>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal text-center mb-12 leading-tight">
              Professional Memberships
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credentials.map((c, i) => (
              <ScrollReveal key={c} delay={i * 0.07}>
                <div className="flex items-start gap-4 bg-white p-6 border border-charcoal/8">
                  <span className="text-gold mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <p className="font-inter text-sm text-charcoal/70 leading-relaxed">{c}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliation Logos */}
      <section className="py-10 bg-charcoal/[0.03] border-t border-charcoal/10">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {['aao', 'abo', 'ada', 'wfo', 'sleep', 'sports'].map((logo) => (
            <img
              key={logo}
              src={`https://www.rooneyortho.com/assets/images/logos/${logo}.png`}
              alt={logo.toUpperCase()}
              className="h-10 md:h-14 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="font-inter text-sm text-white/80 mb-8">
              Schedule your complimentary consultation with Dr. Rooney today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-gold font-inter text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-white/90 transition-colors"
            >
              Book Free Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
