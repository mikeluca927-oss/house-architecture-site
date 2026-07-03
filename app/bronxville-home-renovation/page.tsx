import { Metadata } from 'next'
import SEOLandingPage from '../components/SEOLandingPage'

export const metadata: Metadata = {
  title: 'Bronxville Home Renovation — Westchester NY',
  description:
    'Luxury home renovation in Bronxville, NY. Whole-home and partial renovations by a licensed architect and contractor. House Architecture & Construction, PLLC. Free in-home consultations. Call (914) 224-7383.',
  openGraph: {
    title: 'Bronxville Home Renovation | House Architecture & Construction, PLLC',
    description: 'Luxury home renovation in Bronxville, NY. Free in-home consultations.',
    url: 'https://www.housearchitectureandconstruction.com/bronxville-home-renovation',
  },
  alternates: { canonical: 'https://www.housearchitectureandconstruction.com/bronxville-home-renovation' },
}

const serviceLinks = [
  { label: 'Renovations', href: '/renovations' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Bathrooms', href: '/bathrooms' },
  { label: 'Additions', href: '/additions' },
  { label: 'Restorations', href: '/restorations' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Living Areas', href: '/living-areas' },
  { label: 'Bedrooms', href: '/bedrooms' },
]

export default function BronxvilleHomeRenovationPage() {
  return (
    <SEOLandingPage
      h1="Bronxville Home Renovation | Architecture & Construction by House Architecture, PLLC"
      city="Bronxville"
      intro="House Architecture & Construction, PLLC brings award-winning design and precision construction to Bronxville home renovations. From kitchen and bath remodels to whole-home transformations, we deliver results that honor this village's exceptional architectural character."
      paragraphs={[
        "Bronxville is one of Westchester County's most coveted communities — a compact, walkable village of remarkable architectural cohesion. Its homes, many dating from the late 19th and early 20th centuries, set a high standard for design quality that renovation work must respect. House Architecture & Construction, PLLC understands this context deeply, and our Bronxville renovation work reflects it.",
        "Our renovation projects in Bronxville range from targeted kitchen and bathroom renovations to comprehensive whole-home transformations. For older Bronxville homes, we often address the full scope of what modern renovation requires: updating mechanical systems while preserving period finishes, opening floor plans while maintaining structural integrity, and improving energy performance without altering historic character.",
        "Our integrated architecture and construction approach is particularly valuable in Bronxville, where renovation projects often require sensitive coordination between new and existing elements. Because we design and build under one roof, every spatial and structural decision is made with full knowledge of both the design intent and the construction constraints. The result is a renovation that looks right and performs perfectly.",
        "We serve Bronxville homeowners with free in-home consultations — an opportunity to walk your home with Silvio Luca, discuss your vision, and receive an honest, expert assessment of what's possible. There is no cost and no commitment. Call (914) 224-7383 or contact us online to schedule your visit.",
      ]}
      serviceLinks={serviceLinks}
      ctaHeadline="Transform Your Bronxville Home"
    />
  )
}
