import { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'
import TestimonialCard from '../components/TestimonialCard'

export const metadata: Metadata = {
  title: 'About Silvio M. Luca — Licensed Architect & Contractor',
  description:
    'Meet Silvio M. Luca — architect and builder, Pratt Institute graduate. House Architecture & Construction, PLLC serves Westchester County with master craftsmanship and timeless design.',
  openGraph: {
    title: 'About House Architecture & Construction, PLLC',
    description: 'Meet Silvio M. Luca — architect and builder serving Westchester County, NY.',
    url: 'https://www.housearchitectureandconstruction.com/about',
  },
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/about' },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-14 md:pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Story</p>
            <h1 className="font-cormorant text-4xl md:text-6xl text-charcoal mb-6 leading-tight">
              About House Architecture &amp; Construction, PLLC
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      {/* Firm Story */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-6">Our Firm</h2>
              <p className="font-inter text-charcoal/65 leading-relaxed mb-5">
                At House Architecture &amp; Construction, PLLC, we pride ourselves on providing master craftsmanship,
                timeless design, and modern functionality for all of our projects. Providing service in the Westchester
                County and surrounding areas, we specialize in new construction, renovations, and restoration.
              </p>
              <p className="font-inter text-charcoal/65 leading-relaxed mb-5">
                Led by Silvio M. Luca, architect and builder, we ensure that every project is completed from conception
                to completion with the highest quality and attention to detail.
              </p>
              <p className="font-inter text-charcoal/65 leading-relaxed">
                At House Architecture &amp; Construction, PLLC, we stand behind the quality of our work. We ensure that
                every project is completed to the highest level of quality and attention to detail. If you are not
                completely satisfied with our work, we will do everything we can to make it right.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <img
              src="https://static.wixstatic.com/media/156c65_273a8b4652cb41a7ad400606032d82bb~mv2.png"
              alt="House Architecture & Construction PLLC project in Westchester County NY"
              className="w-full aspect-[4/3] object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-charcoal/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-4xl text-charcoal text-center mb-4">Our Process</h2>
            <p className="font-inter text-charcoal/60 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
              Our process starts with a thorough preconstruction design phase. This allows us to ensure that the design
              meets your vision and budget. We then provide a detailed design and construction estimate, so you know
              exactly what to expect.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Architecture',
                desc: 'While designing the home, we work closely with our clients to understand their vision and ensure that the design meets their needs. We provide detailed plans and 3D renderings to help you visualize the final product.',
              },
              {
                num: '02',
                title: 'Design & Construction Estimate',
                desc: 'Our design and construction estimate is a detailed breakdown of all the costs associated with your project. We provide a transparent breakdown of all the costs, so you know exactly what to expect.',
              },
              {
                num: '03',
                title: 'On-Site Consultations',
                desc: 'Throughout the construction process, we provide on-site consultations to ensure that everything is going smoothly. We keep you informed every step of the way, so you know exactly what is happening with your project.',
              },
              {
                num: '04',
                title: 'The Finishing Touches',
                desc: 'We believe that the finishing touches are what make a project truly great. We pay attention to every detail to ensure that every aspect of your project is perfect.',
              },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="border-t-2 border-gold pt-6">
                  <span className="font-cormorant text-4xl text-gold/30">{step.num}</span>
                  <h3 className="font-cormorant text-xl text-charcoal mt-2 mb-3">{step.title}</h3>
                  <p className="font-inter text-sm text-charcoal/60 leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Silvio Luca Bio */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <img
              src="https://static.wixstatic.com/media/156c65_38c9d822ab924b78b4be3c67ab4d225f~mv2.png"
              alt="Silvio M. Luca — Principal Architect and Builder, House Architecture & Construction PLLC, Eastchester NY"
              className="w-full max-w-md aspect-square object-cover object-top"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Principal &amp; Founder</p>
              <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-6">Silvio M. Luca</h2>
              <p className="font-inter text-charcoal/65 leading-relaxed mb-5">
                I&rsquo;ve always known that I wanted to be an architect and builder. I earned my degree from Pratt
                Institute, where I not only gained knowledge but also nurtured my passion for design and construction.
              </p>
              <p className="font-inter text-charcoal/65 leading-relaxed mb-5">
                What sets me apart is my down-to-earth approach and my unwavering commitment to excellence — I have a
                keen eye for perfection. I&rsquo;m not just in the business of building houses; I&rsquo;m in the
                business of building people&rsquo;s dream homes.
              </p>
              <p className="font-inter text-charcoal/65 leading-relaxed mb-5">
                My work exemplifies my dedication to turning those dreams into reality. Each project I undertake is a
                canvas where I fulfill the aspirations of my clients into a tangible, breathtaking reality. Our projects
                serve as a testament to my unwavering passion for this craft.
              </p>
              <p className="font-inter text-charcoal/65 leading-relaxed mb-8">
                I look forward to working with you and making your dream home a reality.
              </p>
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

      {/* Project photos grid */}
      <section className="py-16 md:py-24 bg-charcoal/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl text-charcoal mb-12">Our Work</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                src: 'https://static.wixstatic.com/media/156c65_f3de0c61e7cd4715848f34c0e7cb17ed~mv2.jpeg',
                alt: 'Custom home architecture project in Westchester County NY',
              },
              {
                src: 'https://static.wixstatic.com/media/156c65_95194bbbebc0437580a1b5b84868cef3~mv2.jpeg',
                alt: 'Residential construction project by House Architecture & Construction PLLC',
              },
              {
                src: 'https://static.wixstatic.com/media/156c65_a96ec8007c6444f5abb654d1dc9b1989~mv2.png',
                alt: 'Home renovation project in Westchester County NY',
              },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <img src={img.src} alt={img.alt} className="w-full aspect-square object-cover" />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/projects"
                className="font-inter text-sm tracking-widest uppercase border border-charcoal/20 px-8 py-3 hover:border-gold hover:text-gold transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-cream" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2
              id="values-heading"
              className="font-cormorant text-4xl md:text-5xl text-charcoal text-center mb-16 leading-tight"
            >
              Our Core Values
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                value: 'Precision',
                description:
                  'Every measurement, material, and decision is made with exactness. We believe precision in the details defines the quality of the whole.',
              },
              {
                value: 'Craftsmanship',
                description:
                  'We work with skilled tradespeople who share our commitment to quality. The difference between ordinary and extraordinary is the level of craft applied.',
              },
              {
                value: 'Trust',
                description:
                  'Building a home requires trust. We earn it through transparency, consistent communication, and by delivering on every promise we make.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.value} delay={i * 0.15}>
                <div className="border-t-2 border-gold pt-8">
                  <h3 className="font-cormorant text-3xl text-charcoal mb-4">{item.value}</h3>
                  <p className="font-inter text-sm text-charcoal/55 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-charcoal/[0.03]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-10 text-center">
              Client Stories
            </p>
          </ScrollReveal>
          <TestimonialCard
            quote="We are a month or two away from moving into our dream home, built from the ground up on a vacant lot. Silvio has been integral in the design and inspiration for the home — but also in the execution of the process. His eye for details and perfection are unmatched. Silvio treats every detail as if he's doing it for his own home."
            author="House Architecture Client"
            location="Westchester County, NY"
          />
        </div>
      </section>

      <CTABanner
        headline="Ready to Build With Us?"
        subhead="Schedule your free in-home consultation with Silvio M. Luca."
      />
    </>
  )
}
