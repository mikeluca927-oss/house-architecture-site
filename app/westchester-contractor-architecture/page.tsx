import { Metadata } from 'next'
import SEOLandingPage from '../components/SEOLandingPage'

export const metadata: Metadata = {
  title: 'Westchester Contractor & Architect',
  description:
    'Licensed Westchester contractor and architect serving all of Westchester County, NY. New construction, renovations, additions, kitchens, and bathrooms — design and build under one roof. Free in-home consultations. Call (914) 224-7383.',
  openGraph: {
    title: 'Westchester Contractor & Architect | House Architecture & Construction, PLLC',
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
      h1="Westchester Contractor & Architect — Design & Construction Under One Roof"
      city="Westchester County"
      intro="House Architecture & Construction, PLLC is Westchester County's only firm offering fully integrated residential architecture and general contracting services. One team. One point of accountability. From concept to completion."
      paragraphs={[
        "The most common frustration homeowners express about residential projects is the disconnect between their architect and their contractor. Designs that look beautiful on paper encounter unexpected construction challenges. Contractors interpret drawings differently than the architect intended. Change orders accumulate. The finished result falls short of the original vision. House Architecture & Construction, PLLC was founded specifically to solve this problem.",
        "By combining licensed architectural design with professional construction management under one roof, we eliminate the gap between intent and execution. Silvio Luca serves as both the architect and construction manager on every project, ensuring complete continuity of vision from the first sketch to the final walk-through. This integrated model delivers better results, on more predictable timelines, with fewer surprises.",
        "Our Westchester County service area spans the county's premier residential communities. We have active and completed projects in Eastchester, Scarsdale, Bronxville, Larchmont, White Plains, Pelham, New Rochelle, Tarrytown, Ossining, and beyond. Our deep familiarity with Westchester's varied municipalities means we understand the specific requirements of each jurisdiction.",
        "Choosing a Westchester contractor means choosing someone who knows how this county actually builds. Every town and village here has its own building department, zoning code, and inspection process — the Village of Scarsdale reviews projects differently than the Town of Eastchester or the City of White Plains. Because we prepare the architectural drawings and file the permits ourselves, we design each project to move cleanly through its specific municipality from day one, rather than discovering local requirements after the contract is signed.",
        "The county's housing stock demands the same local fluency. Westchester homes range from 1920s Tudors and Colonials with plaster walls and original framing to mid-century splits and new custom construction. With more than 100 homes transformed across Westchester County over 25+ years, we have worked on nearly every housing type the county offers — and as both the architect and the general contractor of record, we anticipate structural realities in the drawings instead of encountering them mid-demolition.",
        "We offer free in-home consultations throughout Westchester County — no travel fees, no commitment. Whether you're contemplating a kitchen renovation or planning a ground-up custom home, the first step is a conversation. Call (914) 224-7383 or contact us online to schedule yours.",
      ]}
      serviceLinks={serviceLinks}
      ctaHeadline="Westchester's Integrated Architecture & Construction Firm"
    />
  )
}
