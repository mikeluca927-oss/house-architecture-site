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
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every project begins with a free in-home consultation. We come to your Scarsdale home, assess the space, and provide honest recommendations — no commitment required. Call (914) 224-7383 to schedule.' },
    },
    {
      '@type': 'Question',
      name: 'Are you a licensed architect and contractor in New York?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Principal Silvio M. Luca holds dual licensure as a registered New York State architect and a licensed general contractor. We are fully insured and hold the Westchester County Home Improvement Contractor (HIC) license required for all residential work in the county.' },
    },
    {
      '@type': 'Question',
      name: 'What neighborhoods in Scarsdale do you serve?',
      acceptedAnswer: { '@type': 'Answer', text: 'We serve all of Scarsdale including Heathcote, Edgewood, Fox Meadow, Greenacres, Murray Hill, and the Scarsdale Village area. We have completed renovation and addition projects throughout every Scarsdale neighborhood.' },
    },
    {
      '@type': 'Question',
      name: 'What is a design-build firm and why is it better?',
      acceptedAnswer: { '@type': 'Answer', text: 'A design-build firm handles both architectural design and construction under one roof. At House Architecture & Construction, PLLC, your architect and your builder are the same person — Silvio M. Luca. This eliminates the miscommunication, change orders, and delays that happen when architecture and construction are handled by separate firms. It also means faster project delivery and tighter cost control, because designs are developed with real construction knowledge from day one.' },
    },
    {
      '@type': 'Question',
      name: 'Do you handle building permits in Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We prepare and file all architectural drawings and permit applications directly with the Village of Scarsdale Building Department. Our in-house licensed architect produces all required construction documents, elevations, and site plans. We handle all municipal coordination so you don\'t have to.' },
    },
    {
      '@type': 'Question',
      name: 'What types of home renovations do you do in Westchester County?',
      acceptedAnswer: { '@type': 'Answer', text: 'We handle full-scale home renovations, home additions, second-story additions, kitchen remodels, bathroom renovations, primary suite additions, historic restorations, open-concept conversions, basement finishing, and ground-up new construction throughout Westchester County, NY.' },
    },
    {
      '@type': 'Question',
      name: 'Do you renovate Tudor homes in Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We specialize in Tudor home renovation and restoration throughout Scarsdale. We understand the architectural character of Scarsdale\'s Tudor Revival homes — their half-timbered facades, steeply pitched rooflines, arched doorways, and original plaster detailing — and we renovate them in a way that preserves their historic character while upgrading systems, kitchens, bathrooms, and living spaces to modern standards.' },
    },
    {
      '@type': 'Question',
      name: 'Do you renovate Colonial homes in Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Colonial home renovation is one of our most common project types in Scarsdale. We specialize in rear kitchen additions, open-concept floor plan conversions, second-story primary suite additions, and complete whole-home renovations for Scarsdale\'s center-hall and side-hall Colonials.' },
    },
    {
      '@type': 'Question',
      name: 'Can you add a second story to my Scarsdale home?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Second-story additions are one of our core specialties throughout Scarsdale and Westchester County. We handle the full scope — structural engineering coordination, architectural design, Village of Scarsdale permit filing, and complete construction. Every second-story addition we design is engineered to match the existing home\'s roofline, materials, and proportions.' },
    },
    {
      '@type': 'Question',
      name: 'Do you build custom homes in Scarsdale from the ground up?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build fully custom homes in Scarsdale on vacant lots. Our process covers everything from site analysis and architectural design through Village of Scarsdale permit approvals, complete construction, and certificate of occupancy. As a design-build firm, we manage every phase under one contract.' },
    },
    {
      '@type': 'Question',
      name: 'How long has House Architecture & Construction been in business?',
      acceptedAnswer: { '@type': 'Answer', text: 'House Architecture & Construction, PLLC has over 25 years of experience in residential architecture and construction throughout Westchester County, NY. We have transformed more than 100 homes in the region.' },
    },
    {
      '@type': 'Question',
      name: 'Who is Silvio M. Luca?',
      acceptedAnswer: { '@type': 'Answer', text: 'Silvio M. Luca is the principal architect and licensed general contractor of House Architecture & Construction, PLLC. He holds dual licensure in New York State as both a registered architect and a general contractor — a rare combination that allows the firm to offer true design-build services. Silvio personally oversees every project the firm takes on.' },
    },
    {
      '@type': 'Question',
      name: 'What other towns in Westchester County do you serve besides Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'We serve all of Westchester County including Bronxville, Larchmont, Mamaroneck, Eastchester, Pelham, Pelham Manor, Rye, Harrison, White Plains, New Rochelle, Tarrytown, Ossining, Ardsley, Dobbs Ferry, Hastings-on-Hudson, Tuckahoe, and all surrounding communities.' },
    },
    {
      '@type': 'Question',
      name: 'Do you do kitchen renovations in Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kitchen renovation is one of our most requested services in Scarsdale. We handle full kitchen redesigns including structural changes, custom cabinetry, stone countertops, appliance coordination, tile and backsplash, lighting, and all mechanical, electrical, and plumbing work. We manage every trade in-house.' },
    },
    {
      '@type': 'Question',
      name: 'Do you do bathroom renovations in Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We design and build luxury bathroom renovations throughout Scarsdale — primary suites, spa-style master baths, guest bathrooms, and powder rooms. Services include full layout redesign, custom tile work, stone, custom vanities, fixtures, radiant heat, and all finish coordination.' },
    },
    {
      '@type': 'Question',
      name: 'Can you do a home addition in Heathcote, Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have completed multiple home addition projects in the Heathcote neighborhood of Scarsdale. We are experienced with Heathcote\'s mix of Colonial, Tudor, and Georgian homes, and we design additions that integrate seamlessly with each home\'s existing architecture. We handle all Village of Scarsdale permit filings for Heathcote projects.' },
    },
    {
      '@type': 'Question',
      name: 'Can you do a home renovation in Edgewood, Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have completed renovation and addition projects in the Edgewood neighborhood of Scarsdale, including the Edgewood Colonial Addition and Edgewood Restoration projects featured in our portfolio. We are familiar with Edgewood\'s Colonial and split-level homes and how to renovate them effectively.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work in Fox Meadow, Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We serve the Fox Meadow neighborhood of Scarsdale and have experience working with the large, architecturally distinguished homes in that area. Fox Meadow projects typically involve high-end renovations, additions, and custom home construction.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get started on a renovation or addition in Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'The easiest way to get started is to call us at (914) 224-7383 or fill out the contact form at housearchitectureandconstruction.com/contact. We will schedule a free in-home consultation at your Scarsdale home — no commitment required. From there, Silvio will assess your space and discuss your vision in detail.' },
    },
    {
      '@type': 'Question',
      name: 'Do you do open concept renovations in Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open-concept floor plan conversions are one of our most popular renovation services in Scarsdale. We handle structural wall removal, beam installation, floor plan reconfiguration, and all associated mechanical, electrical, and plumbing updates. As a licensed architect, Silvio M. Luca designs all structural modifications in-house.' },
    },
    {
      '@type': 'Question',
      name: 'Do you handle historic home restoration in Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We specialize in the preservation and restoration of Scarsdale\'s historic homes — Tudors, Colonials, Georgians, and Craftsman-style houses. Our restorations preserve original architectural character — plaster detailing, period millwork, original windows — while upgrading all systems to current code and modernizing kitchens, bathrooms, and living areas.' },
    },
    {
      '@type': 'Question',
      name: 'Are you the best architect in Scarsdale NY?',
      acceptedAnswer: { '@type': 'Answer', text: 'House Architecture & Construction, PLLC is one of Scarsdale\'s most experienced residential architecture and construction firms, with over 25 years of projects throughout Scarsdale and Westchester County. Our principal Silvio M. Luca holds dual licensure as both architect and general contractor, allowing us to offer full design-build services that most architecture firms cannot.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best general contractor in Scarsdale NY?',
      acceptedAnswer: { '@type': 'Answer', text: 'House Architecture & Construction, PLLC is a top-rated licensed general contractor in Scarsdale, NY. With over 25 years of experience and 100+ completed projects in Westchester County, we are known for precision craftsmanship, on-budget delivery, and a single point of accountability from design through construction. Call (914) 224-7383 for a free consultation.' },
    },
    {
      '@type': 'Question',
      name: 'Do you do primary suite additions in Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Primary suite additions are one of our signature project types throughout Scarsdale and Westchester County. We design and build complete primary suite wings including the bedroom, spa-style bathroom, and custom closet system — all integrated seamlessly into the existing home structure and architecture.' },
    },
    {
      '@type': 'Question',
      name: 'What is the process for a home renovation in Scarsdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our process begins with a free in-home consultation. From there, we develop a design concept, construction documents, and file permits with the Village of Scarsdale. Once approved, our construction team builds the project under Silvio\'s direct supervision. We handle every trade — structural, mechanical, electrical, plumbing, carpentry, and finishes — so you have one point of contact throughout.' },
    },
    {
      '@type': 'Question',
      name: 'Do you do renovations in Bronxville NY?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We serve Bronxville and have completed renovation and addition projects throughout the village. Bronxville homeowners appreciate our design-build approach — architecture and construction under one roof — and our familiarity with Bronxville\'s distinct architectural character and local building department.' },
    },
    {
      '@type': 'Question',
      name: 'Do you renovate homes in Larchmont NY?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We serve Larchmont and regularly complete renovation, addition, and new construction projects for Larchmont homeowners. We are experienced with Larchmont\'s Colonial, Tudor, and Victorian homes and the Town of Mamaroneck\'s permitting requirements.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work in Eastchester NY?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Eastchester is our home base — our office is located at 33 Ridge Street, Eastchester, NY 10709. We have completed numerous renovation, addition, and restoration projects throughout Eastchester and have deep relationships with the Town of Eastchester building department.' },
    },
    {
      '@type': 'Question',
      name: 'Can I see examples of your Scarsdale renovation work?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our project portfolio at housearchitectureandconstruction.com/projects includes completed projects throughout Scarsdale including the Heathcote Classic, Scarsdale Transitional, Scarsdale Tudor, Scarsdale Mediterranean, Edgewood Colonial Addition, Edgewood Restoration, Corell Tudor, Cushman Craftsman, Murry Shingle, Reynal Crossing Tudor, and Wildwood Colonial.' },
    },
    {
      '@type': 'Question',
      name: 'What makes House Architecture & Construction different from other Westchester contractors?',
      acceptedAnswer: { '@type': 'Answer', text: 'Three things set us apart: (1) Dual licensure — our principal is both a licensed architect and a licensed general contractor, which is rare in the industry. (2) True design-build delivery — architecture and construction under one contract, one person, one vision. (3) 100% residential focus — we only work on homes, which means our expertise, our subcontractor relationships, and our attention are entirely devoted to the residential environment.' },
    },
    {
      '@type': 'Question',
      name: 'How do I contact House Architecture & Construction?',
      acceptedAnswer: { '@type': 'Answer', text: 'Call us at (914) 224-7383, email Housearchitecture@msn.com, or fill out the contact form at housearchitectureandconstruction.com/contact. Our office is at 33 Ridge Street, Eastchester, NY 10709. We are available Monday–Friday 8AM–6PM and Saturday by appointment.' },
    },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'House Architecture & Construction, PLLC',
  url: 'https://www.housearchitectureandconstruction.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.housearchitectureandconstruction.com/projects?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.housearchitectureandconstruction.com' },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.housearchitectureandconstruction.com/projects' },
    { '@type': 'ListItem', position: 3, name: 'Contact', item: 'https://www.housearchitectureandconstruction.com/contact' },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
