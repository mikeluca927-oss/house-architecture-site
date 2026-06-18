import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects } from '../data'
import ProjectGallery from './ProjectGallery'

const SITE = 'https://www.housearchitectureandconstruction.com'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return {}

  const title = `${project.name} | House Architecture & Construction, PLLC`
  const description = `View photos of the ${project.name} project by House Architecture & Construction, PLLC — residential architecture and construction in ${project.location}. ${project.images.length} photos.`
  const url = `${SITE}/projects/${project.slug}`

  return {
    title,
    description,
    keywords: [
      project.name,
      project.location,
      'residential architecture Westchester NY',
      'home construction Westchester',
      'custom home builder Westchester County',
      'House Architecture Construction PLLC',
    ],
    openGraph: {
      title,
      description,
      url,
      images: [{ url: project.cover, width: 1200, height: 800, alt: `${project.name} — House Architecture & Construction` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: { canonical: url },
  }
}

export default function ProjectGalleryPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) notFound()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE}/projects` },
      { '@type': 'ListItem', position: 3, name: project.name, item: `${SITE}/projects/${project.slug}` },
    ],
  }

  const galleryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${project.name} — Project Photos`,
    description: `Residential architecture and construction project by House Architecture & Construction, PLLC in ${project.location}.`,
    url: `${SITE}/projects/${project.slug}`,
    author: {
      '@type': 'Organization',
      name: 'House Architecture & Construction, PLLC',
      url: SITE,
    },
    image: project.images.map((src, i) => ({
      '@type': 'ImageObject',
      contentUrl: src.startsWith('http') ? src : `${SITE}${src}`,
      name: `${project.name} — photo ${i + 1}`,
      description: `${project.name} project in ${project.location} by House Architecture & Construction, PLLC`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }} />
      <ProjectGallery project={project} />
    </>
  )
}
