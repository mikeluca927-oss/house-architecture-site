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
  verification: {
    other: {
      'msvalidate.01': '8AE384EFA2FE45683BB0FC8DD5F28DCB',
    },
  },
  title: {
    default: 'House Architecture & Construction, PLLC | Westchester NY Architect',
    template: '%s | House Architecture & Construction, PLLC',
  },
  description:
    'Award-winning residential architecture and construction firm serving Westchester County, NY. Custom homes, renovations, additions, kitchens, bathrooms, and more. Free in-home consultations.',
  metadataBase: new URL('https://www.housearchitectureandconstruction.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.housearchitectureandconstruction.com',
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
    canonical: 'https://www.housearchitectureandconstruction.com',
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
  '@id': 'https://www.housearchitectureandconstruction.com/#business',
  name: 'House Architecture & Construction, PLLC',
  description:
    'Residential architecture and construction firm serving Westchester County, NY. Custom homes, renovations, additions, kitchens, and bathrooms.',
  url: 'https://www.housearchitectureandconstruction.com',
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
  areaServed: [
    { '@type': 'City', name: 'Eastchester', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Scarsdale', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Bronxville', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Larchmont', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'White Plains', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'New Rochelle', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Pelham', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Tarrytown', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Ossining', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Mamaroneck', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Rye', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'AdministrativeArea', name: 'Westchester County, NY' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 41.0534,
      longitude: -73.8088,
    },
    geoRadius: '30000',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '12',
    reviewCount: '12',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Westchester Homeowner' },
      reviewBody: 'Silvio treats every detail as if he\'s doing it for his own home. His estimates of cost are always exactly right, and nothing has gone over budget or caught us by surprise.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Westchester Homeowner' },
      reviewBody: 'Silvio was an absolute pleasure to work with. He went above and beyond his contract work so we would be happy. I highly recommend him.',
    },
  ],
  employee: {
    '@type': 'Person',
    name: 'Silvio M. Luca',
    jobTitle: 'Principal Architect & Licensed Contractor',
    worksFor: { '@type': 'Organization', name: 'House Architecture & Construction, PLLC' },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'Licensed Architect, New York State' },
      { '@type': 'EducationalOccupationalCredential', name: 'Licensed General Contractor, New York' },
    ],
  },
  sameAs: ['https://www.instagram.com/housearchitecture.pllc/'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Architecture & Construction Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Architecture', areaServed: 'Westchester County, NY' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Home Construction', areaServed: 'Westchester County, NY' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Renovations', areaServed: 'Westchester County, NY' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Additions', areaServed: 'Westchester County, NY' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Historic Restorations', areaServed: 'Westchester County, NY' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Remodeling', areaServed: 'Westchester County, NY' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Remodeling', areaServed: 'Westchester County, NY' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bedroom Design & Renovation', areaServed: 'Westchester County, NY' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Living Area Design', areaServed: 'Westchester County, NY' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you offer free consultations in Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every project begins with a free in-home consultation. We come to your Scarsdale home, assess the space, and provide honest recommendations — no commitment required.' },
    },
    {
      '@type': 'Question',
      name: 'Are you a licensed architect and contractor in New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Principal Silvio M. Luca holds dual licensure as a registered New York State architect and a licensed general contractor. We are also fully insured and hold the Westchester County Home Improvement Contractor (HIC) license.' },
    },
    {
      '@type': 'Question',
      name: 'What areas of Scarsdale do you serve?',
      acceptedAnswer: { '@type': 'Answer', text: 'We serve all of Scarsdale including Heathcote, Edgewood, Fox Meadow, Greenacres, and Murray Hill. We also serve all of Westchester County including Bronxville, Larchmont, Mamaroneck, Eastchester, Pelham, Rye, White Plains, and New Rochelle.' },
    },
    {
      '@type': 'Question',
      name: 'What is a design-build firm?',
      acceptedAnswer: { '@type': 'Answer', text: 'A design-build firm handles both architectural design and construction under one roof. At House Architecture & Construction, PLLC, your architect and your builder are the same person — eliminating miscommunication, change orders, and delays that happen when design and construction are separate.' },
    },
    {
      '@type': 'Question',
      name: 'Do you handle building permits in Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We prepare and file all architectural drawings and permit applications directly with the Village of Scarsdale Building Department and all other Westchester municipalities. Our in-house architect produces all required documents.' },
    },
    {
      '@type': 'Question',
      name: 'What types of home renovations do you do in Westchester County?',
      acceptedAnswer: { '@type': 'Answer', text: 'We handle full-scale home renovations, home additions, second-story additions, kitchen remodels, bathroom renovations, primary suite additions, historic restorations, and ground-up new construction throughout Westchester County, NY.' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
