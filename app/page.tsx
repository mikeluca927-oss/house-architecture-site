'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import CountUp from './components/CountUp'

const WX = 'https://static.wixstatic.com/media'

const projects = [
  {
    title: 'Beech Street',
    subtitle: 'Eastchester, NY',
    description: 'We transformed a neglected home on an oversized lot into three single family dwellings — reinventing the potential of a forgotten parcel.',
    hero: `${WX}/c78834_ea870e45f547401ea924d3f3aabea319~mv2_d_10000_4400_s_4_2.png/v1/fill/w_1600,h_700,al_c,q_85/image.png`,
    gallery: [
      `${WX}/c78834_71a41935c40d4feeb43a14203b81e54d~mv2_d_3876_1536_s_2.jpg/v1/fill/w_1200,h_700,al_c,q_85/image.jpg`,
      `${WX}/c78834_55e4b438cb6c4abd8228cdb7b0d0eccc~mv2_d_1537_2049_s_2.jpg/v1/fill/w_800,h_1000,al_c,q_85/image.jpg`,
    ],
    category: 'New Construction',
    year: '2023',
    num: '01',
  },
  {
    title: 'Rye Renovation',
    subtitle: 'Rye, NY',
    description: 'Our team redesigned a dark and dingy vacant home into a light-filled, sought-after design that breathes new life into the neighborhood.',
    hero: `${WX}/c78834_24f02381cc6e458eadc986394427fe07~mv2_d_2049_1537_s_2.jpg/v1/fill/w_1600,h_1000,al_c,q_85/image.jpg`,
    gallery: [
      `${WX}/c78834_8fa80a90caba45c39a9a40bda1f23d56~mv2_d_2049_1537_s_2.jpg/v1/fill/w_1200,h_900,al_c,q_85/image.jpg`,
      `${WX}/c78834_ffbdf1d4a2bb4a3a97a2810b768f5ccd~mv2.png/v1/fill/w_800,h_800,al_c,q_85/image.png`,
    ],
    category: 'Renovation',
    year: '2022',
    num: '02',
  },
  {
    title: 'Scarsdale Home',
    subtitle: 'Scarsdale, NY',
    description: 'Demolition of an existing structure paved the way for a new design by our team to come to life — a clean, contemporary residence.',
    hero: `${WX}/c78834_c1467462af134af68039f638fdd2859a~mv2_d_4800_3600_s_4_2.png/v1/fill/w_1600,h_1200,al_c,q_85/image.png`,
    gallery: [
      `${WX}/c78834_8e45da8201e94db9923246dc8414d447~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85/image.jpg`,
      `${WX}/c78834_2912555d87214d1faa72f54a86c56f61~mv2_d_2049_1537_s_2.jpg/v1/fill/w_1200,h_900,al_c,q_85/image.jpg`,
    ],
    category: 'New Construction',
    year: '2023',
    num: '03',
  },
]

const team = [
  {
    name: 'Adamo Maiorano',
    role: 'Architect',
    credential: 'New York Institute of Technology',
    bio: 'At a young age, Adamo discovered his love of architecture. After pursuing his degree at NYIT and gaining invaluable experience at local firms throughout Westchester County, he co-founded Community Designs Engineering with his brother Marco.',
    img: `${WX}/c78834_e61dce0ca09141ea9d18247a061d87e3~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85/image.jpg`,
  },
  {
    name: 'Marco Maiorano',
    role: 'Professional Engineer',
    credential: 'Manhattan College — Civil Engineering',
    bio: "Marco's background in Professional Engineering allowed the brothers to pursue the development of this firm together. His expertise in civil engineering ensures every structure is as sound as it is beautiful.",
    img: `${WX}/c78834_26b8b90d598d4c85bc77ee2790ea8fd6~mv2_d_1365_1365_s_2.jpg/v1/fill/w_800,h_800,al_c,q_85/image.jpg`,
  },
]

const stats = [
  { value: 99, suffix: '+', label: 'Homes Transformed', duration: 2400 },
  { value: 25, suffix: '+', label: 'Years of Experience', duration: 1800 },
  { value: 100, suffix: '%', label: 'Residential Focus', duration: 2000 },
  { value: 5, suffix: '★', label: 'Client Satisfaction', duration: 1200 },
]

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const smoothY = useSpring(y, { stiffness: 80, damping: 25 })

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
      <motion.div style={{ y: smoothY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0])

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] flex flex-col items-start justify-end overflow-hidden" aria-label="Hero">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src={`${WX}/c78834_11237d10674b4a1dbf43b116d777cc1a~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01/image.jpg`}
            alt="Community Designs Engineering — Westchester, NY architecture"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/10" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-20 md:pb-28"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-[10px] tracking-[0.5em] uppercase text-gold mb-5"
          >
            Lower Westchester, New York
          </motion.p>

          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-cormorant text-6xl md:text-8xl lg:text-[10rem] text-cream leading-none font-light"
            >
              Design That
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="font-cormorant text-6xl md:text-8xl lg:text-[10rem] text-cream leading-none font-light italic"
            >
              Builds Community
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-sm md:text-base text-cream/60 mb-10 max-w-lg leading-relaxed"
          >
            An influential design engineering firm planning and designing inspirational structures with people in mind.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-3 bg-gold text-white font-inter text-[11px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-gold/90 transition-all duration-300"
            >
              View Our Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-cream/30 text-cream font-inter text-[11px] tracking-[0.3em] uppercase px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Start a Project
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-3"
          aria-hidden="true"
        >
          <motion.div
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-16 bg-cream/30"
          />
          <p className="font-inter text-[9px] tracking-[0.4em] uppercase text-cream/30">Scroll</p>
        </motion.div>
      </section>

      {/* ── STATS / COUNTER SECTION ── */}
      <section className="py-0 bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Marquee */}
          <div className="border-b border-cream/10 py-5 overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="flex gap-12 whitespace-nowrap"
            >
              {Array(6).fill(null).map((_, i) => (
                <span key={i} className="font-cormorant text-sm tracking-[0.4em] uppercase text-cream/20 flex-shrink-0">
                  House Architecture & Construction &nbsp;·&nbsp; Westchester County &nbsp;·&nbsp; Residential Architecture &nbsp;·&nbsp; New York &nbsp;·&nbsp;
                </span>
              ))}
            </motion.div>
          </div>

          {/* Counter grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="py-12 px-6 md:px-10 text-center group"
              >
                <div className="font-cormorant font-light leading-none mb-3 flex items-end justify-center">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    className="text-6xl md:text-8xl text-cream tabular-nums"
                  />
                </div>
                <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-gold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-28 md:py-44 bg-cream overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} custom={0} className="font-inter text-[10px] tracking-[0.4em] uppercase text-gold mb-6">
                About the Firm
              </motion.p>
              <motion.h2 variants={fadeUp} custom={0.05} className="font-cormorant text-4xl md:text-6xl text-charcoal leading-tight mb-8 font-light">
                Architecture<br />With Purpose
              </motion.h2>
              <motion.p variants={fadeUp} custom={0.1} className="font-inter text-base text-charcoal/55 leading-relaxed mb-5">
                Community Designs Engineering D.P.C. was founded by brothers Adamo and Marco Maiorano — combining architecture and civil engineering under one roof. The firm focuses primarily on residential design in Westchester County.
              </motion.p>
              <motion.p variants={fadeUp} custom={0.15} className="font-inter text-base text-charcoal/55 leading-relaxed mb-10">
                With each project, the ideas and dreams of clients are realized, making homes into places for memories. Every design is crafted to enhance not only the client's space, but the community as a whole — both aesthetically and environmentally.
              </motion.p>
              <motion.div variants={fadeUp} custom={0.2}>
                <Link
                  href="/#team"
                  className="font-inter text-[11px] tracking-[0.3em] uppercase text-charcoal border-b border-charcoal/20 pb-1 hover:text-gold hover:border-gold transition-colors"
                >
                  Meet the Team →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <ParallaxImage
                src={`${WX}/c78834_e61dce0ca09141ea9d18247a061d87e3~mv2.jpg/v1/fill/w_900,h_1100,al_c,q_85/image.jpg`}
                alt="Adamo Maiorano — Architect"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-8">
                <p className="font-cormorant text-xl text-cream">Adamo Maiorano</p>
                <p className="font-inter text-xs tracking-widest uppercase text-gold">Architect, Co-Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-28 md:py-40 bg-white" id="projects">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="flex items-end justify-between mb-20"
          >
            <div>
              <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
                Recent Work
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-cormorant text-4xl md:text-6xl text-charcoal font-light leading-tight">
                Featured Projects
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="hidden md:block font-inter text-xs text-charcoal/35 max-w-xs text-right leading-relaxed">
              Residential design across Westchester County, New York
            </motion.p>
          </motion.div>

          <div className="space-y-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden cursor-pointer"
              >
                {/* Main hero image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: i === 0 ? '21/9' : '16/7' }}>
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={project.hero}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-8 md:p-12">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                      className="font-inter text-[9px] tracking-[0.4em] uppercase text-gold mb-2"
                    >
                      {project.category} · {project.year}
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.1 + 0.4 }}
                      className="font-cormorant text-4xl md:text-6xl text-cream font-light leading-none mb-1"
                    >
                      {project.title}
                    </motion.h3>
                    <p className="font-inter text-xs tracking-widest text-cream/50 uppercase mb-4">
                      {project.subtitle}
                    </p>
                    <p className="font-inter text-sm text-cream/70 leading-relaxed max-w-md hidden md:block">
                      {project.description}
                    </p>
                  </div>

                  <div className="absolute top-8 right-10 font-cormorant text-9xl text-cream/8 font-light leading-none select-none">
                    {project.num}
                  </div>
                </div>

                {/* Gallery strip */}
                <div className="grid grid-cols-2 gap-1 mt-1">
                  {project.gallery.map((img, j) => (
                    <div key={j} className="relative overflow-hidden" style={{ aspectRatio: '16/7' }}>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0"
                      >
                        <img src={img} alt={`${project.title} — view ${j + 1}`} className="w-full h-full object-cover" />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY STRIP ── */}
      <section className="py-24 bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-cormorant text-3xl md:text-5xl lg:text-6xl text-cream/80 font-light leading-relaxed text-center max-w-4xl mx-auto">
              "We treat each client and project as if they were our own. Come join the{' '}
              <motion.span
                className="text-gold italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Community.
              </motion.span>
              "
            </p>
            <div className="text-center mt-10">
              <Link
                href="/contact"
                className="font-inter text-[11px] tracking-[0.35em] uppercase text-cream/40 border-b border-cream/15 pb-1 hover:text-gold hover:border-gold transition-colors"
              >
                Give us a call →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-28 md:py-44 bg-cream overflow-hidden" id="team">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mb-20"
          >
            <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              The People Behind the Work
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-cormorant text-4xl md:text-6xl text-charcoal font-light leading-tight">
              Meet the Team
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-charcoal/20"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="px-1">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-cormorant text-3xl text-charcoal font-light">{member.name}</h3>
                    <span className="font-inter text-[9px] tracking-[0.3em] uppercase text-gold">{member.role}</span>
                  </div>
                  <p className="font-inter text-xs tracking-wide text-charcoal/35 mb-4 uppercase">{member.credential}</p>
                  <p className="font-inter text-sm text-charcoal/55 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-40 overflow-hidden" aria-label="Call to action">
        <div className="absolute inset-0">
          <ParallaxImage
            src={`${WX}/c78834_c1467462af134af68039f638fdd2859a~mv2_d_4800_3600_s_4_2.png/v1/fill/w_1920,h_900,al_c,q_85/image.png`}
            alt="Scarsdale elevation design"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/82" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.4em] uppercase text-gold mb-6">
              Ready to Build
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-cormorant text-5xl md:text-7xl text-cream font-light leading-tight mb-6">
              Let's Design Something<br />Worth Building
            </motion.h2>
            <motion.p variants={fadeUp} className="font-inter text-sm text-cream/50 mb-12 leading-relaxed max-w-xl mx-auto">
              Contact Community Designs Engineering D.P.C. to discuss your next residential project in Westchester County.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gold text-white font-inter text-[11px] tracking-[0.3em] uppercase px-12 py-5 hover:bg-gold/90 transition-all duration-300"
              >
                Get in Touch
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
