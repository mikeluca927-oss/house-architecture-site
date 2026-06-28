'use client'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import CTABanner from './components/CTABanner'
import TestimonialCard from './components/TestimonialCard'
import CountUp from './components/CountUp'

const services = [
  {
    title: 'Architecture',
    href: '/architecture',
    description:
      'Comprehensive architectural design services for new homes, additions, and full-scale renovations — from initial concept and 3D renderings through construction documents and permitting.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M5 35L20 8l15 27H5z" />
        <path d="M13 35v-8h14v8" />
      </svg>
    ),
  },
  {
    title: 'New Construction',
    href: '/new-construction',
    description:
      'Complete ground-up custom home construction on vacant lots — from site planning and architectural design through project management, construction, and final walkthrough.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="5" y="20" width="30" height="15" />
        <path d="M5 20L20 8l15 12" />
        <path d="M16 35V26h8v9" />
      </svg>
    ),
  },
  {
    title: 'Renovations',
    href: '/renovations',
    description:
      'Full-scale home renovations transforming entire floors, wings, or whole residences. We coordinate every trade from structural work to finishes for a seamless result.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="6" y="6" width="28" height="28" rx="1" />
        <path d="M6 16h28M16 6v28" />
      </svg>
    ),
  },
  {
    title: 'Additions',
    href: '/additions',
    description:
      'Thoughtfully designed home additions — second stories, primary suite expansions, full floor additions — engineered to integrate seamlessly with your home\'s existing architecture.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="4" y="14" width="20" height="22" />
        <rect x="24" y="20" width="12" height="16" />
        <path d="M20 14v22" />
      </svg>
    ),
  },
  {
    title: 'Restorations',
    href: '/restorations',
    description:
      'Expert preservation and restoration of historic and period homes, restoring original character and architectural integrity while upgrading systems and finishes throughout.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="20" cy="20" r="13" />
        <circle cx="20" cy="20" r="6" />
        <path d="M20 7v6M20 27v6M7 20h6M27 20h6" />
      </svg>
    ),
  },
  {
    title: 'Interior Spaces',
    href: '/living-areas',
    description:
      'Complete interior fit-outs for kitchens, bathrooms, living areas, and bedrooms — designed and built as part of a whole-floor or whole-home scope.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="4" y="4" width="32" height="32" rx="1" />
        <path d="M4 18h32M18 4v14" />
        <rect x="22" y="22" width="10" height="10" />
      </svg>
    ),
  },
]

const projectCategories = [
  {
    title: 'Kitchens',
    href: '/kitchens',
    description: 'Custom kitchens designed as part of full-scale home projects',
    img: 'https://static.wixstatic.com/media/156c65_ed6b3e05306d4115a70d2f7cb6b53c73~mv2.jpg',
  },
  {
    title: 'Bathrooms',
    href: '/bathrooms',
    description: 'Luxury bathrooms built to the highest standard',
    img: 'https://static.wixstatic.com/media/156c65_f0f7a6665fd64123afbc4c377f98eaee~mv2.png',
  },
  {
    title: 'Bedrooms',
    href: '/bedrooms',
    description: 'Primary suites and bedroom renovations designed for comfort',
    img: '/projects/heathcote-classic/9.webp',
  },
  {
    title: 'Living Areas',
    href: '/living-areas',
    description: 'Open, thoughtfully designed living spaces for everyday life',
    img: 'https://static.wixstatic.com/media/156c65_7f68921c1cee4125bcf39463e4257038~mv2.jpg',
  },
]

function ParallaxSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const smoothY = useSpring(y, { stiffness: 60, damping: 20 })
  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  )
}

function RevealText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ServiceCard({ service, i }: { service: typeof services[0]; i: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={service.href}
        className="group relative block bg-cream p-6 md:p-10 h-full overflow-hidden border-b border-r border-charcoal/8"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="absolute inset-0 bg-charcoal"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 1 }}
        />
        <div className="relative z-10">
          <motion.span
            className="mb-5 block"
            animate={{ color: hovered ? '#C9A84C' : '#C9A84C' }}
          >
            {service.icon}
          </motion.span>
          <motion.h3
            className="font-cormorant text-2xl mb-3 transition-colors duration-300"
            animate={{ color: hovered ? '#F5F0E8' : '#2C2C2C' }}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className="font-inter text-sm leading-relaxed mb-6 transition-colors duration-300"
            animate={{ color: hovered ? 'rgba(245,240,232,0.6)' : 'rgba(44,44,44,0.55)' }}
          >
            {service.description}
          </motion.p>
          <motion.span
            className="font-inter text-xs tracking-widest uppercase text-gold block"
            animate={{ x: hovered ? 6 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Learn More &rarr;
          </motion.span>
        </div>
      </Link>
    </motion.div>
  )
}

function ProjectCard({ cat, i }: { cat: typeof projectCategories[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={cat.href} className="group relative block aspect-video overflow-hidden">
        <motion.img
          src={cat.img}
          alt={`${cat.title} by House Architecture & Construction in Westchester County NY`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute bottom-0 left-0 p-5 md:p-8">
          <motion.h3
            className="font-cormorant text-3xl text-cream mb-2 leading-tight"
            initial={{ y: 8, opacity: 0.8 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {cat.title}
          </motion.h3>
          <motion.p
            className="font-inter text-sm text-cream/60 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {cat.description}
          </motion.p>
          <motion.span
            className="font-inter text-xs tracking-widest uppercase text-gold block"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.3 }}
          >
            View Projects &rarr;
          </motion.span>
        </div>
        {/* Shine sweep on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cream/8 to-transparent -skew-x-12"
          initial={{ x: '-150%' }}
          whileHover={{ x: '150%' }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
      </Link>
    </motion.div>
  )
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')

    const tryPlay = () => {
      video.muted = true
      video.play().catch(() => {})
    }

    if (video.readyState >= 3) {
      setVideoReady(true)
      tryPlay()
    }

    video.addEventListener('canplay', tryPlay)
    video.addEventListener('loadeddata', tryPlay)

    // Re-play when tab becomes visible again (iOS pauses background tabs)
    const handleVisibility = () => { if (!document.hidden) tryPlay() }
    document.addEventListener('visibilitychange', handleVisibility)

    // iOS fallback: force play on first user touch
    document.addEventListener('touchstart', tryPlay, { once: true })

    tryPlay()

    return () => {
      video.removeEventListener('canplay', tryPlay)
      video.removeEventListener('loadeddata', tryPlay)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '25%'])
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.08])

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden" aria-label="Hero">
        {/* Video background */}
        <motion.div className="absolute inset-0 bg-charcoal" style={{ y: heroY, scale: heroScale }}>
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            x-webkit-airplay="deny"
            style={{ opacity: videoReady ? 1 : 0, transition: 'opacity 0.6s ease' }}
            onCanPlay={() => setVideoReady(true)}
            onPlaying={() => setVideoReady(true)}
          />
          {/* Transparent overlay above video — prevents iOS Safari from showing native play button tap target */}
          <div className="absolute inset-0 z-[1]" aria-hidden="true" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/35 to-charcoal/75" />

        {/* Hero content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.p
            className="font-inter text-xs tracking-[0.5em] uppercase text-gold mb-6"
            initial={{ opacity: 0, letterSpacing: '0.8em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Westchester County, NY
          </motion.p>

          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-cormorant text-4xl md:text-7xl text-cream leading-tight"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Westchester&rsquo;s Premier<br />Architecture &amp; Construction Firm
            </motion.h1>
          </div>

          <motion.p
            className="font-inter text-lg md:text-xl text-cream/80 mb-3 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            From Conception to Completion
          </motion.p>
          <motion.p
            className="font-inter text-base text-cream/60 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          >
            Master Craftsmanship &middot; Timeless Detail &middot; Modern Functionality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="group relative inline-block overflow-hidden bg-gold text-white font-inter text-xs tracking-[0.25em] uppercase px-10 py-4"
            >
              <motion.span
                className="absolute inset-0 bg-charcoal"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <span className="relative z-10">Book a Free Consultation</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          aria-hidden="true"
        >
          <motion.div
            className="w-px bg-cream/40"
            animate={{ height: ['0px', '48px', '0px'], y: [0, 0, 48] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-cream/40 mt-2">Scroll</p>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-charcoal py-12 md:py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: 99, suffix: '+', label: 'Homes Transformed', duration: 2400 },
              { value: 25, suffix: '+', label: 'Years of Experience', duration: 1800 },
              { value: 100, suffix: '%', label: 'Residential Focus', duration: 2000 },
              { value: 5, suffix: '★', label: 'Client Satisfaction', duration: 1200 },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="py-10 px-6 text-center border-r border-cream/10 last:border-r-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-cormorant font-light leading-none mb-2 flex items-end justify-center">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    className="text-5xl md:text-7xl text-cream tabular-nums"
                  />
                </div>
                <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-14 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">
              House Architecture &amp; Construction, PLLC &mdash; Proudly Servicing Westchester and Surrounding Areas
            </p>
          </FadeUp>
          <RevealText delay={0.1}>
            <p className="font-cormorant text-2xl md:text-3xl text-charcoal leading-relaxed">
              We are a licensed architecture and construction firm delivering full-service residential projects
              throughout Westchester County. From architectural design and permitting to complete construction
              management, we handle every phase — whether you&rsquo;re building from the ground up, transforming an
              entire floor, or undertaking a full-scale renovation. From conception to completion, under one roof.
            </p>
          </RevealText>
          <FadeUp delay={0.3}>
            <div className="mt-8">
              <Link
                href="/about"
                className="group font-inter text-sm tracking-widest uppercase text-charcoal/60 hover:text-gold transition-colors border-b border-charcoal/20 pb-1 inline-flex items-center gap-2"
              >
                More About Us
                <motion.span whileHover={{ x: 4 }} className="inline-block transition-transform">→</motion.span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 md:py-24 bg-charcoal/[0.03]" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-3 text-center">What We Do</p>
          </FadeUp>
          <RevealText delay={0.1}>
            <h2 id="services-heading" className="font-cormorant text-3xl md:text-5xl text-charcoal text-center mb-10 md:mb-16 leading-tight">
              Architecture &amp; Construction Services
            </h2>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-charcoal/8">
            {services.map((service, i) => (
              <ServiceCard key={service.href} service={service} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT CATEGORIES ── */}
      <section className="py-16 md:py-24 bg-charcoal overflow-hidden" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10 md:mb-16">
            <div>
              <FadeUp>
                <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-3">Our Work</p>
              </FadeUp>
              <RevealText delay={0.1}>
                <h2 id="projects-heading" className="font-cormorant text-3xl md:text-5xl text-cream leading-tight">
                  Featured Project Categories
                </h2>
              </RevealText>
            </div>
            <FadeUp delay={0.3}>
              <Link
                href="/projects"
                className="hidden md:inline-block border border-cream/25 text-cream font-inter text-xs tracking-[0.2em] uppercase px-8 py-3 hover:border-gold hover:text-gold transition-colors"
              >
                View All
              </Link>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectCategories.map((cat, i) => (
              <ProjectCard key={cat.href} cat={cat} i={i} />
            ))}
          </div>
          <FadeUp delay={0.3}>
            <div className="text-center mt-10 md:hidden">
              <Link
                href="/projects"
                className="inline-block border border-cream/25 text-cream font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:border-gold hover:text-gold transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 md:py-24 bg-cream" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <RevealText>
            <h2 id="why-heading" className="font-cormorant text-3xl md:text-5xl text-charcoal text-center mb-10 md:mb-16 leading-tight">
              Why Choose House Architecture &amp; Construction
            </h2>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Free In-Home Consultations',
                description: 'We come to your home, assess your space, and provide honest recommendations — no commitment required.',
              },
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed and insured in New York State. Every project handled with complete professionalism and accountability.',
              },
              {
                title: 'Architecture + Construction Under One Roof',
                description: 'One firm, one vision, one point of contact. Architecture and construction aligned from day one.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="w-10 h-px bg-gold mx-auto mb-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                  aria-hidden="true"
                />
                <h3 className="font-cormorant text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                <p className="font-inter text-sm text-charcoal/55 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-24 bg-charcoal/[0.03]" aria-labelledby="testimonials-heading">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-10 text-center" id="testimonials-heading">
              Client Stories
            </p>
          </FadeUp>
          <div className="space-y-8">
            <TestimonialCard
              quote="We are a month or two away from moving into our dream home, built from the ground up on a vacant lot. Silvio has been integral in the design and inspiration for the home — but also in the execution of the process. The day to day management of a project of this size is no easy task. He has been flawless in assisting us in selecting the right subs, the timeliness of the process, to choosing the best materials. His eye for details and perfection are unmatched. Silvio treats every detail as if he's doing it for his own home — and we honestly feel that he cares to a level that we didn't think possible. When we began the process we heard all of the horror stories of building your own home. However with him in charge it really has been a joy and we have not really felt overwhelmed and stressed. He cares so much that we really can sit back and trust that he's on top of things. That trust is really the key to what makes Silvio great. With contractors you constantly have to worry if you're being taken for a ride — and whether their suggestions are truly in your best interests or theirs. He genuinely cares to get it right. You are just not going to find that anywhere else. In addition, his expertise is truly amazing. He thinks things through 5 steps in advance and anticipates any issue before it's an issue. This has made it so that during this entire process nothing has taken us by surprise. His estimates of cost are always exactly right, and nothing has gone over budget or caught us by surprise. To me, this is more than a job for Silvio. This is his passion and his love and we genuinely appreciate his efforts and his perfection and cannot imagine working with anyone else."
              author="House Architecture Client"
              location="Westchester County, NY"
            />
            <TestimonialCard
              quote="Silvio was an absolute pleasure to work with. You hear so many horror stories about contractors but Silvio was excellent and a perfectionist — he went above and beyond his contract work so we would be happy. I highly recommend him."
              author="House Architecture Client"
              location="Westchester County, NY"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
