import { getPostBySlug } from '../../../../lib/blog'
import { notFound } from 'next/navigation'

function htmlToMarkdown(html: string): string {
  return html
    .replace(/<h2>(.*?)<\/h2>/g, '\n\n## $1\n\n')
    .replace(/<h3>(.*?)<\/h3>/g, '\n\n### $1\n\n')
    .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g, '[$2]($1)')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  const markdown = [
    `# ${post.title}`,
    ``,
    `> ${post.excerpt}`,
    ``,
    `**Published:** ${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
    `**Source:** https://www.housearchitectureandconstruction.com/blog/${post.slug}`,
    ``,
    `---`,
    ``,
    htmlToMarkdown(post.content),
    ``,
    `---`,
    ``,
    `*House Architecture & Construction, PLLC — Licensed architect and general contractor serving Westchester County, NY. Call (914) 224-7383 for a free consultation.*`,
  ].join('\n')

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
