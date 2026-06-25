export type ValueType = 'amount' | 'tbd' | 'nic' | 'owner' | 'allowance' | 'included'

export interface LineItem {
  id: string
  label: string
  defaultType?: ValueType
  note?: string
  placeholder?: number
}

export interface Section {
  id: string
  label: string
  items: LineItem[]
}

export const SECTIONS: Section[] = [
  {
    id: 'preconstruction',
    label: 'Pre-Construction & Soft Costs',
    items: [
      { id: 'demolition', label: 'Demolition', placeholder: 10000 },
      { id: 'architecture', label: 'Architecture', placeholder: 16000 },
      { id: 'structural_engineer', label: 'Structural Engineer', defaultType: 'tbd' },
      { id: 'filing_fee', label: 'Filing Fee', defaultType: 'owner' },
      { id: 'storm_erosion', label: 'Storm / Erosion Engineer', placeholder: 3000 },
      { id: 'insurances', label: 'Insurances', placeholder: 2750 },
    ],
  },
  {
    id: 'siteWork',
    label: 'Site Work',
    items: [
      { id: 'scaffolding', label: 'Scaffolding' },
      { id: 'portasan', label: 'Porta-San', placeholder: 900, note: 'Duration?' },
      { id: 'carts', label: 'Dumpster / Carts', placeholder: 10000 },
      { id: 'site_prep', label: 'Site Prep', placeholder: 500 },
      { id: 'general_conditions', label: 'General Conditions', placeholder: 450 },
      { id: 'trucking', label: 'Trucking' },
      { id: 'excavation', label: 'Excavation / Trucking', placeholder: 7500 },
      { id: 'drywells', label: 'Drywells', placeholder: 12000 },
      { id: 'sitework_trench', label: 'Sitework / Drainage Trench', placeholder: 3500 },
      { id: 'steps', label: 'Steps' },
      { id: 'patio', label: 'Patio / Flatwork', defaultType: 'nic' },
      { id: 'driveway', label: 'Asphalt Driveway', placeholder: 8500 },
      { id: 'stone_veneer', label: 'Stone Veneer' },
    ],
  },
  {
    id: 'foundation',
    label: 'Foundation & Structure',
    items: [
      { id: 'concrete_foundations', label: 'Concrete Foundations / Footings', placeholder: 25000 },
      { id: 'concrete_slabs', label: 'Concrete Slabs', defaultType: 'allowance' },
      { id: 'cmu_walls', label: 'CMU Walls' },
      { id: 'waterproofing', label: 'Waterproofing', placeholder: 2500 },
      { id: 'stucco_base', label: 'Stucco at Base', placeholder: 2500 },
      { id: 'structural_steel', label: 'Structural Steel / Columns / Plates', placeholder: 3500 },
      { id: 'temporary_shoring', label: 'Temporary Shoring', placeholder: 425 },
    ],
  },
  {
    id: 'exterior',
    label: 'Exterior',
    items: [
      { id: 'hardiplank_siding', label: 'Hardiplank Siding', placeholder: 45000 },
      { id: 'stucco', label: 'Stucco', placeholder: 22500 },
      { id: 'pvc_soffits_fascias', label: 'PVC Soffits / Fascias', placeholder: 16000 },
      { id: 'pvc_corner_boards', label: 'PVC Corner Boards', placeholder: 7500 },
      { id: 'pvc_window_trim', label: 'Window Trim — Exterior PVC', placeholder: 10500 },
      { id: 'copper_flashing', label: 'Copper Flashing / Cricket', placeholder: 1000 },
      { id: 'masonry_chimney', label: 'Masonry Chimney Raise', placeholder: 7500 },
      { id: 'windows', label: 'Andersen Windows', defaultType: 'allowance', placeholder: 43500 },
      { id: 'window_install', label: 'Exterior Door / Window Installation', placeholder: 4000 },
      { id: 'exterior_front_door', label: 'Exterior Front Door' },
      { id: 'roofing', label: 'Asphalt Shingle Roofing', placeholder: 23500 },
      { id: 'exterior_painting', label: 'Exterior Painting (PVC work only)', placeholder: 6500 },
    ],
  },
  {
    id: 'interiorRough',
    label: 'Interior — Rough',
    items: [
      { id: 'rough_carpentry_material', label: 'Rough Carpentry Material', defaultType: 'allowance', placeholder: 24000 },
      { id: 'rough_carpentry_labor', label: 'Rough Carpentry Labor', placeholder: 25000 },
      { id: 'insulation', label: 'Insulation', placeholder: 14000 },
      { id: 'sheetrock', label: 'Gypsum Board / Sheetrock', placeholder: 15000 },
    ],
  },
  {
    id: 'interiorFinish',
    label: 'Interior — Finish',
    items: [
      { id: 'interior_trim', label: 'Interior Trim Work', defaultType: 'allowance', placeholder: 10000 },
      { id: 'interior_doors', label: 'Interior Doors', defaultType: 'allowance', placeholder: 6500 },
      { id: 'door_install', label: 'Interior Door Installation', placeholder: 1500 },
      { id: 'basement_door', label: 'Basement Door', placeholder: 500 },
      { id: 'cabinets', label: 'Kitchen Cabinets', defaultType: 'allowance', placeholder: 25000 },
      { id: 'appliances', label: 'Appliances', defaultType: 'owner' },
      { id: 'tile_labor', label: 'Tile Labor', defaultType: 'allowance', placeholder: 10000 },
      { id: 'flooring', label: 'Flooring', placeholder: 3500 },
      { id: 'interior_painting', label: 'Interior Painting', placeholder: 17000 },
    ],
  },
  {
    id: 'mep',
    label: 'Mechanical / Electrical / Plumbing',
    items: [
      { id: 'plumbing', label: 'Plumbing', placeholder: 16000 },
      { id: 'underground_plumbing', label: 'Underground Plumbing', defaultType: 'tbd' },
      { id: 'relocate_water_gas', label: 'Relocate Water / Gas Lines' },
      { id: 'gas_line', label: 'Gas Line', placeholder: 1000 },
      { id: 'electrical', label: 'Electrical', defaultType: 'tbd' },
      { id: 'hvac', label: 'HVAC', defaultType: 'tbd' },
    ],
  },
]
