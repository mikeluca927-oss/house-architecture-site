import { Metadata } from 'next'
import SEOLandingPage from '../components/SEOLandingPage'

export const metadata: Metadata = {
  title: 'Yonkers Contractor | House Architecture & Construction, PLLC — Westchester NY',
  description:
    'Licensed general contractor serving Yonkers, NY. Home renovations, additions, new construction, and remodeling by House Architecture & Construction, PLLC. Free in-home consultations. Call (914) 224-7383.',
  openGraph: {
    title: 'Yonkers Contractor | House Architecture & Construction, PLLC',
    description: 'Licensed general contractor serving Yonkers, NY. Free in-home consultations.',
    url: 'https://www.housearchitectureandconstruction.com/yonkers-contractor',
  },
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/yonkers-contractor' },
}

const serviceLinks = [
  { label: 'Renovations', href: '/renovations' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
  { label: 'Additions', href: '/additions' },
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Restorations', href: '/restorations' },
  { label: 'Living Areas', href: '/living-areas' },
  { label: 'Bedrooms', href: '/bedrooms' },
]

export default function YonkersContractorPage() {
  return (
    <SEOLandingPage
      h1="Yonkers Contractor | Home Renovations, Additions & New Construction"
      city="Yonkers"
      intro="House Architecture & Construction, PLLC provides licensed contracting and architectural design services to homeowners in Yonkers, NY — from kitchen and bath remodels to home additions and ground-up new construction."
      paragraphs={[
        "Yonkers is a diverse and dynamic city undergoing significant residential investment. Homeowners across Yonkers's many distinct neighborhoods — from the grand historic homes of Park Hill and the Hudson River waterfront to the more modest residential streets of East Yonkers — are reinvesting in their properties with renovations, additions, and new construction that reflect rising expectations for quality and design.",
        "House Architecture & Construction, PLLC brings Westchester's highest standard of residential architecture and construction to Yonkers projects. Our integrated model — architecture and construction under one roof — means Yonkers homeowners receive the design sophistication typically associated with high-end architecture firms, paired with the construction accountability that comes from a single contractor overseeing every aspect of the build.",
        "Our Yonkers contracting services include kitchen renovations, bathroom remodels, room additions, whole-home renovations, and ground-up new construction. We have experience navigating the City of Yonkers's permitting and building department requirements, and we handle all applications, inspections, and approvals on behalf of our clients.",
        "We offer free in-home consultations to Yonkers homeowners. Silvio Luca will visit your home, assess your space, and discuss your vision — then provide an honest recommendation for how to achieve your goals within your timeline and budget. Call (914) 224-7383 or contact us online to book your consultation.",
      ]}
      serviceLinks={serviceLinks}
      ctaHeadline="Yonkers' Trusted Architecture & Construction Team"
    />
  )
}
