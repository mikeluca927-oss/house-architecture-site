import { Metadata } from 'next'
import SEOLandingPage from '../components/SEOLandingPage'

export const metadata: Metadata = {
  title: 'Larchmont Luxury Home Renovation | House Architecture & Construction, PLLC — Westchester NY',
  description:
    'Luxury home renovation in Larchmont, NY. High-end renovations, additions, and new construction by a licensed architect and contractor. House Architecture & Construction, PLLC. Free in-home consultations. Call (914) 224-7383.',
  openGraph: {
    title: 'Larchmont Luxury Home Renovation | House Architecture & Construction, PLLC',
    description: 'Luxury home renovation in Larchmont, NY. Free in-home consultations.',
    url: 'https://www.housearchitecturepllc.com/larchmont-luxury-renovation',
  },
  alternates: { canonical: 'https://www.housearchitecturepllc.com/larchmont-luxury-renovation' },
}

const serviceLinks = [
  { label: 'Renovations', href: '/renovations' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
  { label: 'Additions', href: '/additions' },
  { label: 'Restorations', href: '/restorations' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Bedrooms', href: '/bedrooms' },
  { label: 'Living Areas', href: '/living-areas' },
]

export default function LarchmontLuxuryRenovationPage() {
  return (
    <SEOLandingPage
      h1="Larchmont Luxury Home Renovation by House Architecture & Construction, PLLC"
      city="Larchmont"
      intro="House Architecture & Construction, PLLC delivers high-end residential renovations in Larchmont, NY — combining architectural vision with precision construction to create homes of exceptional quality and lasting value."
      paragraphs={[
        "Larchmont is a Westchester village of considerable charm — a waterfront community of varied architectural styles, strong neighborhood character, and homeowners who take genuine pride in the quality of their homes. When Larchmont residents undertake renovation work, they expect a level of craft and design sophistication that most contractors cannot deliver. House Architecture & Construction, PLLC can.",
        "Our luxury renovation approach in Larchmont begins with understanding what makes a home great — not just visually, but spatially and experientially. We ask how you move through the house, how you use each room, where natural light matters most, and what finishes feel right for your lifestyle. From those conversations, we develop renovation plans that address form and function simultaneously.",
        "Our Larchmont projects have included kitchen renovations with custom cabinetry and restaurant-grade appliances, primary suite renovations combining new bathrooms with enlarged bedroom footprints and custom closets, living room and dining room renovations that open floor plans and introduce architectural detail, and complete whole-home renovations that transform dated interiors into sophisticated, contemporary living spaces.",
        "For each project, our integrated architecture and construction model ensures that the vision we develop with you is the result you receive. Silvio Luca is personally involved from first consultation through final walkthrough. We offer free in-home consultations to Larchmont homeowners — call (914) 224-7383 or reach us online to get started.",
      ]}
      serviceLinks={serviceLinks}
      ctaHeadline="Elevate Your Larchmont Home"
    />
  )
}
