import { Metadata } from 'next'
import SEOLandingPage from '../components/SEOLandingPage'

export const metadata: Metadata = {
  title: 'White Plains Architect | House Architecture & Construction, PLLC — Westchester NY',
  description:
    'Licensed residential architect serving White Plains, NY. Custom home design, renovations, additions, and construction by House Architecture & Construction, PLLC. Free in-home consultations. Call (914) 224-7383.',
  openGraph: {
    title: 'White Plains Architect | House Architecture & Construction, PLLC',
    description: 'Licensed residential architect serving White Plains, NY. Free in-home consultations.',
    url: 'https://www.housearchitecturepllc.com/white-plains-architect',
  },
  alternates: { canonical: 'https://www.housearchitecturepllc.com/white-plains-architect' },
}

const serviceLinks = [
  { label: 'Architecture', href: '/architecture' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Additions', href: '/additions' },
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
  { label: 'Restorations', href: '/restorations' },
  { label: 'Living Areas', href: '/living-areas' },
  { label: 'Bedrooms', href: '/bedrooms' },
]

export default function WhitePlainsArchitectPage() {
  return (
    <SEOLandingPage
      h1="White Plains Residential Architect | House Architecture & Construction, PLLC"
      city="White Plains"
      intro="House Architecture & Construction, PLLC provides licensed residential architectural services in White Plains, NY — delivering custom home design, renovation architecture, and full construction management for Westchester County's county seat."
      paragraphs={[
        "White Plains is Westchester County's largest city and its governmental and commercial hub — but it is also home to extensive residential neighborhoods where homeowners are investing in renovation, expansion, and new construction. House Architecture & Construction, PLLC serves White Plains residents with the full range of residential architectural and construction services, bringing the same level of quality and personal attention to every project.",
        "Our architectural practice in White Plains encompasses new home design on vacant lots, renovation architecture for existing homes, addition design, and complete interior architectural redesign — including kitchen and bathroom renovation plans. As licensed architects, we prepare construction documents for permit submission to the City of White Plains and manage the approval process through to permit issuance.",
        "Our construction division then executes the approved designs with the precision that our architectural practice demands. This single-firm model eliminates the typical disconnects between designer and builder, ensuring that every decision made during design is properly reflected in the finished construction. The result is a home that matches the vision — and a client who is genuinely delighted with the outcome.",
        "We have completed architectural and construction projects in White Plains neighborhoods ranging from the established residential streets near the city center to the larger properties on White Plains's periphery. We offer free in-home consultations to White Plains homeowners — call (914) 224-7383 or contact us online to discuss your project.",
      ]}
      serviceLinks={serviceLinks}
      ctaHeadline="White Plains' Trusted Residential Architect"
    />
  )
}
