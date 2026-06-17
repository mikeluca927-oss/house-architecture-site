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
    default: 'House Architecture & Construction, PLLC | Westchester NY Architect',
    template: '%s | House Architecture & Construction, PLLC',
  },
  description:
    'Award-winning residential architecture and construction firm serving Westchester County, NY. Custom homes, renovations, additions, kitchens, bathrooms, and more. Free in-home consultations.',
  metadataBase: new URL('https://www.housearchitecturepllc.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.housearchitecturepllc.com',
    siteName: 'House Architecture & Construction, PLLC',
    title: 'House Architecture & Construction, PLLC | Westchester NY Architect',
    description:
      'Award-winning residential architecture and construction firm serving Westchester County, NY.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'House Architecture & Construction, PLLC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Architecture & Construction, PLLC | Westchester NY Architect',
    description:
      'Award-winning residential architecture and construction firm serving Westchester County, NY.',
  },
  alternates: {
    canonical: 'https://www.housearchitecturepllc.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.housearchitecturepllc.com/#business',
  name: 'House Architecture & Construction, PLLC',
  description:
    'Residential architecture and construction firm serving Westchester County, NY. Custom homes, renovations, additions, kitchens, and bathrooms.',
  url: 'https://www.housearchitecturepllc.com',
  telephone: '+19142247383',
  email: 'Housearchitecture@msn.com',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '33 Ridge Street',
    addressLocality: 'Eastchester',
    addressRegion: 'NY',
    postalCode: '10709',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.0534,
    longitude: -73.8088,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Westchester County, NY',
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 41.0534,
      longitude: -73.8088,
    },
    geoRadius: '30000',
  },
  sameAs: ['https://www.instagram.com/housearchitecture.pllc/'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Architecture & Construction Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Architecture' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'New Construction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Renovations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Additions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Historic Restorations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Remodeling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Remodeling' } },
    ],
  },
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
      <body className="font-inter bg-cream text-charcoal antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
