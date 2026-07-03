import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Draft Preview',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DraftHeroLayout({ children }: { children: React.ReactNode }) {
  return children
}
