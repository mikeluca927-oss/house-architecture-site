import fs from 'fs'
import path from 'path'

export interface BlogPost {
  title: string
  slug: string
  date: string
  excerpt: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  const dir = path.join(process.cwd(), 'content/blog')
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .reverse()
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf-8')
      return JSON.parse(raw) as BlogPost
    })
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null
}
