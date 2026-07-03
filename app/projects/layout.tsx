import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Westchester NY Architecture & Construction Project Portfolio',
  description:
    'Browse 100+ completed residential projects across Westchester County, NY — custom homes, whole-home renovations, additions, kitchens, and historic restorations by House Architecture & Construction, PLLC.',
  alternates: {
    canonical: 'https://www.housearchitectureandconstruction.com/projects',
  },
  openGraph: {
    title: 'Project Portfolio | House Architecture & Construction, PLLC',
    description:
      'Completed residential architecture and construction projects across Westchester County, NY — custom homes, renovations, additions, and restorations.',
    url: 'https://www.housearchitectureandconstruction.com/projects',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
