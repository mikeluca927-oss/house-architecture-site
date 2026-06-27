import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '../../lib/blog'
import CTABanner from '../components/CTABanner'

export const metadata: Metadata = {
  title: 'Blog | Westchester Home Architecture & Construction Tips',
  description:
    'Expert advice on home renovations, additions, architecture, and construction in Westchester County, NY from House Architecture & Construction, PLLC.',
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="pt-36 pb-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4">Insights</p>
          <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
            Architecture &amp; Construction Insights
          </h1>
          <p className="font-inter text-lg text-charcoal/60 leading-relaxed max-w-2xl">
            Expert guidance on home renovations, additions, and architectural design in Westchester County, NY.
          </p>
        </div>
      </section>

      <div className="border-t border-charcoal/10" />

      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="font-inter text-charcoal/50">No posts yet — check back soon.</p>
          ) : (
            <div className="divide-y divide-charcoal/10">
              {posts.map((post) => (
                <article key={post.slug} className="py-10 group">
                  <Link href={`/blog/${post.slug}`}>
                    <p className="font-inter text-xs tracking-[0.2em] uppercase text-gold mb-3">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="font-inter text-base text-charcoal/60 leading-relaxed mb-4 max-w-2xl">
                      {post.excerpt}
                    </p>
                    <span className="font-inter text-xs tracking-[0.2em] uppercase text-charcoal/40 group-hover:text-gold transition-colors duration-300">
                      Read Article →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
