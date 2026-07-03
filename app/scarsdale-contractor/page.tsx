import { Metadata } from 'next'
import SEOLandingPage from '../components/SEOLandingPage'

export const metadata: Metadata = {
  title: 'Scarsdale Contractor — Westchester NY',
  description:
    'Licensed general contractor serving Scarsdale, NY. Renovations, additions, new construction, and remodeling by House Architecture & Construction, PLLC. Free in-home consultations. Call (914) 224-7383.',
  openGraph: {
    title: 'Scarsdale Contractor | House Architecture & Construction, PLLC',
    description: 'Licensed general contractor serving Scarsdale, NY. Free in-home consultations.',
    url: 'https://www.housearchitectureandconstruction.com/scarsdale-contractor',
  },
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/scarsdale-contractor' },
}

const serviceLinks = [
  { label: 'Renovations', href: '/renovations' },
  { label: 'Additions', href: '/additions' },
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Restorations', href: '/restorations' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Bedrooms', href: '/bedrooms' },
  { label: 'Living Areas', href: '/living-areas' },
]

export default function ScarsdaleContractorPage() {
  return (
    <SEOLandingPage
      h1="Scarsdale General Contractor | Renovations, Additions & New Construction"
      city="Scarsdale"
      intro="House Architecture & Construction, PLLC is a licensed general contractor serving Scarsdale, NY homeowners with renovation, addition, and new construction services that reflect the high standards of this exceptional community."
      paragraphs={[
        "Scarsdale homeowners expect the best — in the quality of materials used, the precision of the workmanship, and the professionalism of the contractor they invite into their home. House Architecture & Construction, PLLC delivers on all three counts. We are a licensed and insured general contractor with a proven track record of delivering exceptional results on Scarsdale's most demanding residential projects.",
        "What makes us different from a typical general contractor is our integrated architecture and construction model. When you hire House Architecture & Construction, PLLC, you engage a firm that can both design your project and build it. This eliminates the friction between architect and contractor that often results in budget overruns, delays, and compromises to the original design intent.",
        "Our Scarsdale contracting services include kitchen renovations, bathroom remodels, home additions, whole-home renovations, historic restorations, and ground-up new construction. For each project type, we bring the same level of personal attention: Silvio Luca is present at every key milestone, from the initial consultation through the final inspection, ensuring that quality is never sacrificed for expediency.",
        "We know Scarsdale's neighborhoods and housing stock intimately, with completed projects in Fox Meadow, Heathcote, Edgewood, and Greenacres. Much of the village was built in the 1920s and 1930s — Tudors, Colonials, and Georgians with original plaster, slate roofs, and framing that differs from modern construction. Because your Scarsdale contractor is also a licensed architect, those period conditions are anticipated in the drawings before demolition begins, not discovered as change orders afterward.",
        "Every Scarsdale project moves through the Village of Scarsdale Building Department, and we handle that process end to end: architectural drawings, permit applications, and municipal coordination are all produced in-house. When the plan examiner requests a revision, it turns around in days rather than stalling while an outside architect fits it into their schedule. Our office is minutes away in Eastchester, so site visits and inspections never wait on a contractor driving in from another county.",
        "We are fully licensed in New York State and carry comprehensive general liability and workers' compensation insurance. We handle all permits and inspections required by the Village of Scarsdale. Free in-home consultations are available to Scarsdale homeowners — call (914) 224-7383 or contact us online to schedule yours.",
      ]}
      serviceLinks={serviceLinks}
      ctaHeadline="Scarsdale's Premier Licensed Contractor"
    />
  )
}
