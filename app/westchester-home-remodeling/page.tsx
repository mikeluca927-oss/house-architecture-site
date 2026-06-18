import { Metadata } from 'next'
import SEOLandingPage from '../components/SEOLandingPage'

export const metadata: Metadata = {
  title: 'Westchester Home Remodeling | House Architecture & Construction, PLLC',
  description:
    'Expert home remodeling throughout Westchester County, NY. Kitchens, bathrooms, living areas, additions, and whole-home remodels by a licensed architect and contractor. Free in-home consultations. Call (914) 224-7383.',
  openGraph: {
    title: 'Westchester Home Remodeling | House Architecture & Construction, PLLC',
    description: 'Expert home remodeling throughout Westchester County, NY.',
    url: 'https://www.housearchitectureandconstruction.com/westchester-home-remodeling',
  },
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/westchester-home-remodeling' },
}

const serviceLinks = [
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
  { label: 'Living Areas', href: '/living-areas' },
  { label: 'Bedrooms', href: '/bedrooms' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Additions', href: '/additions' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Restorations', href: '/restorations' },
]

export default function WestchesterHomRemodelingPage() {
  return (
    <SEOLandingPage
      h1="Westchester Home Remodeling — Kitchens, Bathrooms, Living Spaces & More"
      city="Westchester County"
      intro="House Architecture & Construction, PLLC delivers exceptional home remodeling throughout Westchester County, NY. We remodel kitchens, bathrooms, living areas, bedrooms, and entire homes — with the architectural sophistication and construction quality that Westchester homeowners deserve."
      paragraphs={[
        "Home remodeling in Westchester County is a significant investment — and the firm you choose to execute it has an enormous impact on the outcome. At House Architecture & Construction, PLLC, we approach every remodeling project with the same rigor we bring to major new construction: thorough planning, precise execution, and an unwavering commitment to quality.",
        "Our kitchen remodeling projects transform dated, dysfunctional kitchens into spaces that are both beautiful and highly functional — custom cabinetry, premium appliances, stone countertops, and thoughtful lighting design. Our bathroom remodels create spa-quality retreats within existing footprints or expanded layouts. Our living area remodels open up closed floor plans, introduce architectural detail, and create the comfortable, elegant spaces that Westchester families aspire to.",
        "What distinguishes our remodeling work is the architectural oversight that shapes every project. Silvio Luca reviews and directs every design decision, ensuring that the choices made in any one space support the aesthetic coherence of the whole home. This prevents the fragmented, piecemeal look that results when rooms are remodeled independently without a unifying design vision.",
        "We serve homeowners throughout Westchester County, including Eastchester, Scarsdale, Bronxville, Larchmont, White Plains, Pelham, and New Rochelle. All projects begin with a free in-home consultation — call (914) 224-7383 or contact us online to schedule yours today.",
      ]}
      serviceLinks={serviceLinks}
      ctaHeadline="Start Your Westchester Home Remodel"
    />
  )
}
