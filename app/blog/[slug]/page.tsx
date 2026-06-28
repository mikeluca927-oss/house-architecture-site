import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '../../../lib/blog'
import CTABanner from '../../components/CTABanner'

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

      <CTABanner />
    </>
  )
}
