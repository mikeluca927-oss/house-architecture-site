import { Metadata } from 'next'
import SEOLandingPage from '../components/SEOLandingPage'

export const metadata: Metadata = {
  title: 'Westchester Renovation Contractor',
  description:
    'Licensed renovation contractor serving Westchester County, NY. Home renovations, additions, and remodeling with architectural design included. House Architecture & Construction, PLLC. Free in-home consultations. Call (914) 224-7383.',
  openGraph: {
    title: 'Westchester Renovation Contractor | House Architecture & Construction, PLLC',
    description: 'Licensed renovation contractor serving Westchester County, NY.',
    url: 'https://www.housearchitectureandconstruction.com/westchester-renovation-contractor',
  },
  alternates: {
    canonical: 'https://www.housearchitectureandconstruction.com/westchester-renovation-contractor',
  },
}

const serviceLinks = [
  { label: 'Renovations', href: '/renovations' },
  { label: 'Additions', href: '/additions' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Restorations', href: '/restorations' },
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Living Areas', href: '/living-areas' },
  { label: 'Bedrooms', href: '/bedrooms' },
]

export default function WestchesterRenovationContractorPage() {
  return (
    <SEOLandingPage
      h1="Westchester Renovation Contractor — Architecture-Led Home Renovation Services"
      city="Westchester County"
      intro="House Architecture & Construction, PLLC is a licensed renovation contractor serving all of Westchester County, NY. Our unique architecture-led approach ensures that every renovation project we deliver is precisely designed, expertly built, and true to the original vision."
      paragraphs={[
        "Choosing a renovation contractor in Westchester County requires careful consideration. Not all contractors operate with the same commitment to quality, transparency, and communication. At House Architecture & Construction, PLLC, we have built our reputation on all three — delivering renovation projects that meet or exceed our clients' expectations, on time and within the agreed budget.",
        "Our renovation contracting services in Westchester County are distinguished by one key advantage: integrated architectural design. Rather than hiring an architect separately and then shopping the plans to contractors, our clients work with one firm that provides both services. This means the design is developed with full awareness of construction costs and methods, producing a project that is both beautifully designed and practically achievable.",
        "We have completed renovation projects across Westchester County's diverse communities — from performing whole-home renovations in Scarsdale to restoring historic Colonials in Larchmont and modernizing post-war homes in White Plains. Each project received the same personal attention from Silvio Luca and the same commitment to craftsmanship from our construction team.",
        "We are fully licensed and insured in New York State. We obtain all required permits from Westchester County municipalities and manage all inspections through to the issuance of a certificate of occupancy or final sign-off. Free in-home consultations are available throughout Westchester — call (914) 224-7383 or reach us online to schedule yours.",
      ]}
      serviceLinks={serviceLinks}
      ctaHeadline="Westchester's Architecture-Led Renovation Contractor"
    />
  )
}
