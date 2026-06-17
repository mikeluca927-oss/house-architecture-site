import { Metadata } from 'next'
import SEOLandingPage from '../components/SEOLandingPage'

export const metadata: Metadata = {
  title: 'Scarsdale Architect | House Architecture & Construction, PLLC — Westchester NY',
  description:
    'Licensed residential architect serving Scarsdale, NY. Custom home design, renovations, additions, and construction by House Architecture & Construction, PLLC. Free in-home consultations. Call (914) 224-7383.',
  openGraph: {
    title: 'Scarsdale Architect | House Architecture & Construction, PLLC',
    description: 'Licensed residential architect serving Scarsdale, NY. Free in-home consultations.',
    url: 'https://www.housearchitecturepllc.com/scarsdale-architect',
  },
  alternates: { canonical: 'https://www.housearchitecturepllc.com/scarsdale-architect' },
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

export default function ScarsdaleArchitectPage() {
  return (
    <SEOLandingPage
      h1="Scarsdale Architect & Home Design by House Architecture & Construction, PLLC"
      city="Scarsdale"
      intro="House Architecture & Construction, PLLC provides licensed residential architectural services to homeowners in Scarsdale, NY — one of Westchester County's most architecturally distinguished communities."
      paragraphs={[
        "Scarsdale is home to some of the finest residential architecture in the New York metropolitan area. Its tree-lined streets are graced by gracious Colonials, stately Tudors, elegant Georgians, and ambitious contemporary homes — each representing the aspirations of the families who built them. House Architecture & Construction, PLLC has the expertise to design and build within this context with the sensitivity and skill it demands.",
        "As a licensed architect based in nearby Eastchester, Silvio Luca and his team have deep familiarity with Scarsdale's distinct neighborhoods, zoning regulations, and architectural review requirements. Whether your project requires approval from the Scarsdale Board of Architectural Review or simply compliance with village setback and coverage requirements, we navigate these processes with expertise gained from years of working in the area.",
        "Our architectural services in Scarsdale encompass the full range of residential design: custom new homes on vacant lots, major renovations that reimagine the interior while preserving or enhancing the exterior, additions that expand living space without compromising the original architecture, kitchen and bathroom redesigns, and whole-home historic restorations. Every project is designed with the same commitment to precision, craftsmanship, and client satisfaction.",
        "We offer free in-home consultations to Scarsdale homeowners. There is no commitment required — just an honest conversation about your home, your vision, and how we can help you realize it. Call us at (914) 224-7383 or complete the contact form to schedule your consultation.",
      ]}
      serviceLinks={serviceLinks}
      ctaHeadline="Scarsdale's Trusted Architecture & Construction Firm"
    />
  )
}
