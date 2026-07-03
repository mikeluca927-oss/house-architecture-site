import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '../../../lib/blog'
import CTABanner from '../../components/CTABanner'

const IMAGE_POOL = [
  { src: '/projects/heathcote-classic/1.webp', alt: 'Heathcote Classic home renovation in Scarsdale NY — House Architecture & Construction' },
  { src: '/projects/heathcote-classic/3.webp', alt: 'Scarsdale home renovation interior by licensed architect Silvio M. Luca' },
  { src: '/projects/heathcote-classic/5.webp', alt: 'Custom home renovation Scarsdale Westchester County NY' },
  { src: '/projects/heathcote-classic/7.webp', alt: 'Luxury home renovation Westchester NY design-build firm' },
  { src: '/projects/barry-colonial/1.jpg', alt: 'Colonial home renovation Westchester County NY by House Architecture & Construction' },
  { src: '/projects/barry-colonial/3.jpg', alt: 'Residential architect Westchester NY — Colonial renovation project' },
  { src: '/projects/barry-colonial/5.jpg', alt: 'Home addition Westchester NY — licensed general contractor' },
  { src: '/projects/eastchester-colonial-revival/1.jpg', alt: 'Colonial Revival home renovation Eastchester NY' },
  { src: '/projects/eastchester-colonial-revival/2.jpg', alt: 'Historic home restoration Eastchester Westchester County' },
  { src: '/projects/pelham-brick-estate/1.jpg', alt: 'Pelham brick estate renovation — residential architect Westchester NY' },
  { src: '/projects/pelham-brick-estate/2.jpg', alt: 'Luxury renovation Pelham NY — design-build architect contractor' },
  { src: '/projects/scarsdale-residence/1.jpg', alt: 'Scarsdale home renovation by licensed architect — House Architecture & Construction' },
  { src: '/projects/scarsdale-residence/2.jpg', alt: 'Custom home renovation Scarsdale NY — Silvio M. Luca architect' },
  { src: '/projects/wilmot-manor/1.jpg', alt: 'Luxury home renovation Westchester County — design-build firm' },
  { src: '/projects/wilmot-manor/3.jpg', alt: 'High-end home renovation Westchester NY — licensed architect and contractor' },
  { src: '/projects/cushman-craftsman/1.jpg', alt: 'Craftsman home renovation Westchester NY — House Architecture & Construction' },
  { src: '/projects/reynal-crossing-tudor/1.jpg', alt: 'Tudor home renovation Scarsdale NY — historic restoration architect' },
  { src: '/projects/corell-tudor/1.jpg', alt: 'Tudor home renovation Westchester County — licensed architect contractor' },
  { src: '/projects/wildwood-colonial/1.jpg', alt: 'Colonial home renovation Westchester NY — residential design-build' },
  { src: '/projects/murry-shingle/1.jpg', alt: 'Shingle style home renovation Westchester County NY' },
]

function pickImages(slug: string, count: number) {
  // Deterministic shuffle based on slug so same post always gets same images
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0
  }
  const pool = [...IMAGE_POOL]
  const picked = []
  for (let i = 0; i < count; i++) {
    const idx = (hash + i * 7) % pool.length
    picked.push(pool.splice(idx % pool.length, 1)[0])
  }
  return picked
}

export const dynamicParams = true

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  const url = `https://www.housearchitectureandconstruction.com/blog/${post.slug}`
  const ogImage = pickImages(post.slug, 1)[0]
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: ['Silvio M. Luca'],
      images: [{ url: ogImage.src, width: 1200, height: 900, alt: ogImage.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

const SITE = 'https://www.housearchitectureandconstruction.com'

// Maps keywords in a post slug to the service and town pages most relevant
// to that post, so every article passes internal links to the money pages.
const RELATED_LINK_RULES: Array<{ match: RegExp; label: string; href: string }> = [
  { match: /kitchen/, label: 'Kitchen Renovations', href: '/kitchens' },
  { match: /bathroom/, label: 'Bathroom Renovations', href: '/bathrooms' },
  { match: /addition|second-story|primary-suite/, label: 'Home Additions', href: '/additions' },
  { match: /new-construction|new-home|custom-home/, label: 'New Home Construction', href: '/new-construction' },
  { match: /renovation|remodel/, label: 'Home Renovations', href: '/renovations' },
  { match: /restoration|historic|tudor|colonial/, label: 'Historic Restorations', href: '/restorations' },
  { match: /architect/, label: 'Architecture Services', href: '/architecture' },
  { match: /contractor/, label: 'Westchester Renovation Contractor', href: '/westchester-renovation-contractor' },
  { match: /eastchester/, label: 'Eastchester Contractor', href: '/eastchester-contractor' },
  { match: /scarsdale/, label: 'Scarsdale Home Renovation', href: '/scarsdale-home-renovation' },
  { match: /bronxville/, label: 'Bronxville Home Renovation', href: '/bronxville-home-renovation' },
  { match: /larchmont/, label: 'Larchmont Luxury Renovation', href: '/larchmont-luxury-renovation' },
  { match: /white-plains/, label: 'White Plains Architect', href: '/white-plains-architect' },
  { match: /yonkers/, label: 'Yonkers Contractor', href: '/yonkers-contractor' },
  { match: /westchester/, label: 'Westchester Architect & Contractor', href: '/westchester-contractor-architecture' },
]

const FALLBACK_LINKS = [
  { label: 'Architecture Services', href: '/architecture' },
  { label: 'Home Renovations', href: '/renovations' },
  { label: 'Our Project Portfolio', href: '/projects' },
]

function getRelatedLinks(slug: string): Array<{ label: string; href: string }> {
  const matched = RELATED_LINK_RULES.filter((r) => r.match.test(slug)).slice(0, 4)
  const links: Array<{ label: string; href: string }> = matched.map(({ label, href }) => ({ label, href }))
  for (const fb of FALLBACK_LINKS) {
    if (links.length >= 4) break
    if (!links.some((l) => l.href === fb.href)) links.push(fb)
  }
  return links
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const images = pickImages(post.slug, 3)
  const relatedLinks = getRelatedLinks(post.slug)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: images.map((img) => `${SITE}${img.src}`),
    author: {
      '@type': 'Person',
      name: 'Silvio M. Luca',
      jobTitle: 'Principal Architect & Licensed Contractor',
      url: `${SITE}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'House Architecture & Construction, PLLC',
      url: SITE,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE}/blog/${post.slug}`,
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="pt-36 pb-10 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="font-inter text-xs tracking-[0.2em] uppercase text-charcoal/40 hover:text-gold transition-colors mb-8 inline-block"
          >
            ← All Articles
          </Link>
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-gold mb-4">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl text-charcoal leading-tight mb-6">
            {post.title}
          </h1>
          <p className="font-inter text-lg text-charcoal/60 leading-relaxed border-t border-charcoal/10 pt-6">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div
          className="max-w-3xl mx-auto px-6 blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      <section className="pb-12 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-8 border border-charcoal/10">
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-charcoal/30 mb-5">
              Related Services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-sm text-charcoal/60 hover:text-gold transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block flex-shrink-0" aria-hidden="true" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-charcoal/30 mb-5">Our Work</p>
          <div className="grid grid-cols-3 gap-3">
            {images.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, 300px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
