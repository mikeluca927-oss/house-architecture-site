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
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.housearchitectureandconstruction.com/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const images = pickImages(post.slug, 3)

  return (
    <>
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
