import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Community Designs Engineering D.P.C. | Westchester, NY',
    template: '%s | Community Designs Engineering',
  },
  description:
    'Architectural and engineering design firm in Westchester, NY. Residential design, custom homes, and community-focused architecture by Adamo and Marco Maiorano.',
  metadataBase: new URL('https://www.communitydesignsdpc.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.communitydesignsdpc.com',
    siteName: 'Community Designs Engineering D.P.C.',
    title: 'Community Designs Engineering D.P.C. | Westchester, NY',
    description: 'Residential architecture and engineering design in Westchester, NY.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ArchitectOrDesignCompany',
  name: 'Community Designs Engineering D.P.C.',
  url: 'https://www.communitydesignsdpc.com',
  email: 'communitydesignsllc@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '439 White Plains Rd',
    addressLocality: 'Eastchester',
    addressRegion: 'NY',
    postalCode: '10709',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'Westchester County, NY' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter bg-white text-charcoal antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
