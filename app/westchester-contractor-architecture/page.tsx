import { Metadata } from 'next'
import SEOLandingPage from '../components/SEOLandingPage'

export const metadata: Metadata = {
  title: 'Westchester County Architect & Contractor | House Architecture & Construction, PLLC',
  description:
    'Licensed architect and general contractor serving all of Westchester County, NY. Architecture, new construction, renovations, additions, kitchens, and bathrooms. House Architecture & Construction, PLLC. Free in-home consultations. Call (914) 224-7383.',
  openGraph: {
    title: 'Westchester County Architect & Contractor | House Architecture & Construction, PLLC',
    description: 'Licensed architect and general contractor serving all of Westchester County, NY.',
    url: 'https://www.housearchitectureandconstruction.com/westchester-contractor-architecture',
  },
  alternates: {
    canonical: 'https://www.housearchitectureandconstruction.com/westchester-contractor-architecture',
  },
}

const serviceLinks = [
  { label: 'Architecture', href: '/architecture' },
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Additions', href: '/additions' },
  { label: 'Restorations', href: '/restorations' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
  { label: 'Bedrooms', href: '/bedrooms' },
  { label: 'Living Areas', href: '/living-areas' },
]

export default function WestchesterContractorArchitecturePage() {
  return (
    <SEOLandingPage
      h1="Westchester County Architect & General Contractor — Architecture & Construction Under One Roof"
      city="Westchester County"
      intro="House Architecture & Construction, PLLC is Westchester County's only firm offering fully integrated residential architecture and general contracting services. One team. One point of accountability. From concept to completion."
      paragraphs={[
        "The most common frustration homeowners express about residential projects is the disconnect between their architect and their contractor. Designs that look beautiful on paper encounter unexpected construction challenges. Contractors interpret drawings differently than the architect intended. Change orders accumulate. The finished result falls short of the original vision. House Architecture & Construction, PLLC was founded specifically to solve this problem.",
        "By combining licensed architectural design with professional construction management under one roof, we eliminate the gap between intent and execution. Silvio Luca serves as both the architect and construction manager on every project, ensuring complete continuity of vision from the first sketch to the final walk-through. This integrated model delivers better results, on more predictable timelines, with fewer surprises.",
        "Our Westchester County service area spans the county's premier residential communities. We have active and completed projects in Eastchester, Scarsdale, Bronxville, Larchmont, White Plains, Pelham, New Rochelle, Tarrytown, Ossining, and beyond. Our deep familiarity with Westchester's varied municipalities means we understand the specific requirements of each jurisdiction.",
        "We offer free in-home consultations throughout Westchester County — no travel fees, no commitment. Whether you're contemplating a kitchen renovation or planning a ground-up custom home, the first step is a conversation. Call (914) 224-7383 or contact us online to schedule yours.",
      ]}
      serviceLinks={serviceLinks}
      ctaHeadline="Westchester's Integrated Architecture & Construction Firm"
    />
  )
}
