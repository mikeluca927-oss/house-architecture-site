// Pricing engine — calibrated from 62 real HAC projects
// Uses rough carpentry labor as a size proxy and interpolates all costs from
// actual medians grouped by job size bracket.
//
// Bracket medians (RC Labor anchor → other cost medians):
//   Small  (RC Labor ~$4,500):  small bathroom/kitchen jobs
//   Medium (RC Labor ~$15,000): modest additions, basement, partial reno
//   Large  (RC Labor ~$35,000): full additions, major reno
//   XL     (RC Labor ~$67,500): new construction / large additions

export interface ProjectAnswers {
  projectType: string
  sqft: number
  stories: number
  hasNewFoundation: boolean
  hasExcavation: boolean
  hasDrywells: boolean
  hasNewRoof: boolean
  roofSqft: number
  exteriorFinish: string[]
  hasPvcSoffits: boolean
  windowCount: number
  windowBrand: string
  hasKitchen: boolean
  bathroomCount: number
  hasPlumbing: boolean
  plumbingScope: string
  hasElectrical: boolean
  hasHvac: boolean
  hasGasLine: boolean
  hasDemolition: boolean
  demoSqft: number
  finishLevel: string
  hasDriveway: boolean
  hasPatio: boolean
  hasCabinets: boolean
  hasInsulation: boolean
  architectureIncluded: boolean
}

export const DEFAULT_ANSWERS: ProjectAnswers = {
  projectType: 'addition',
  sqft: 500,
  stories: 1,
  hasNewFoundation: true,
  hasExcavation: true,
  hasDrywells: false,
  hasNewRoof: true,
  roofSqft: 600,
  exteriorFinish: ['hardiplank'],
  hasPvcSoffits: true,
  windowCount: 6,
  windowBrand: 'andersen',
  hasKitchen: false,
  bathroomCount: 1,
  hasPlumbing: true,
  plumbingScope: 'partial',
  hasElectrical: true,
  hasHvac: false,
  hasDemolition: true,
  demoSqft: 200,
  finishLevel: 'standard',
  hasDriveway: false,
  hasPatio: false,
  hasCabinets: false,
  hasInsulation: true,
  architectureIncluded: true,
  hasGasLine: false,
}

// ── Bracket lookup table (all values are medians from real project data) ──────
// rcLabor is the anchor; everything else is the median at that bracket.
const BRACKETS = [
  {
    rcLabor: 4_500,
    demo: 4_000, arch: 2_500, storm: 900, insurance: 1_250,
    foundation: 600, excavation: 600, drywells: 500,
    hardiplank: 1_300, soffits: 2_000, roofing: 1_200,
    rcMat: 2_200, sheetrock: 4_000, insulation: 1_200,
    intTrim: 3_000, intPaint: 4_000,
    plumbing: 6_100, electrical: 4_900, windows: 800,
  },
  {
    rcLabor: 15_000,
    demo: 6_500, arch: 12_000, storm: 1_500, insurance: 2_750,
    foundation: 15_500, excavation: 3_750, drywells: 5_000,
    hardiplank: 11_500, soffits: 4_500, roofing: 5_000,
    rcMat: 15_000, sheetrock: 7_500, insulation: 5_500,
    intTrim: 7_000, intPaint: 7_000,
    plumbing: 10_250, electrical: 6_500, windows: 2_500,
  },
  {
    rcLabor: 35_000,
    demo: 14_000, arch: 16_000, storm: 1_500, insurance: 2_750,
    foundation: 24_500, excavation: 7_500, drywells: 9_000,
    hardiplank: 43_000, soffits: 13_750, roofing: 14_000,
    rcMat: 35_000, sheetrock: 16_900, insulation: 14_500,
    intTrim: 20_000, intPaint: 15_000,
    plumbing: 16_500, electrical: 23_300, windows: 29_500,
  },
  {
    rcLabor: 67_500,
    demo: 14_000, arch: 22_000, storm: 2_500, insurance: 5_000,
    foundation: 38_500, excavation: 13_750, drywells: 14_000,
    hardiplank: 30_750, soffits: 28_250, roofing: 32_600,
    rcMat: 70_000, sheetrock: 33_500, insulation: 43_750,
    intTrim: 24_500, intPaint: 24_000,
    plumbing: 42_000, electrical: 45_000, windows: 45_000,
  },
]

type BracketKey = keyof (typeof BRACKETS)[0]

function lerp(x: number, x0: number, x1: number, y0: number, y1: number): number {
  if (x1 === x0) return y0
  const t = Math.max(0, Math.min(1, (x - x0) / (x1 - x0)))
  return y0 + t * (y1 - y0)
}

function lookup(rcLabor: number, key: BracketKey): number {
  const n = BRACKETS.length
  if (rcLabor <= BRACKETS[0].rcLabor) return BRACKETS[0][key] as number
  if (rcLabor >= BRACKETS[n - 1].rcLabor) return BRACKETS[n - 1][key] as number
  for (let i = 0; i < n - 1; i++) {
    const a = BRACKETS[i], b = BRACKETS[i + 1]
    if (rcLabor >= a.rcLabor && rcLabor <= b.rcLabor) {
      return lerp(rcLabor, a.rcLabor, b.rcLabor, a[key] as number, b[key] as number)
    }
  }
  return 0
}

function r(n: number, step = 250): number {
  if (n <= 0) return 0
  return Math.round(n / step) * step
}

// Finish level multipliers — only applied to finish-sensitive items
const FM: Record<string, number> = { basic: 0.80, standard: 1.0, highend: 1.30 }

// RC Labor $/sf by project type — reflects actual structural complexity
// Addition/New Construction needs full framing, roof, etc. → $26/sf
// Basement/Kitchen is just interior stud walls → ~$14/sf
const RC_LABOR_RATE: Record<string, number> = {
  addition:        26,
  new_construction: 28,
  full_reno:       18,
  partial_reno:    14,
  basement:        13,
  garage:          20,
  kitchen_bath:    10,
}

// Whether the job needs permits / structural engineer
const NEEDS_PERMIT = new Set(['addition', 'new_construction', 'full_reno', 'garage'])
const NEEDS_STRUCT_ENG = new Set(['addition', 'new_construction', 'garage'])

export function generateEstimate(a: ProjectAnswers): Record<string, number | string> {
  const fm = FM[a.finishLevel] ?? 1.0
  const sqft = a.sqft
  const laborRate = RC_LABOR_RATE[a.projectType] ?? 20

  // RC Labor is the core size driver — rate varies by project type
  const rcLaborEst = sqft * laborRate * fm

  // Helper: interpolate from bracket table and round
  const get = (key: BracketKey, multiplier = 1.0, step = 250): number =>
    r(lookup(rcLaborEst, key) * multiplier, step)

  // Project type flags — declared here so they can be used throughout
  const isBasement    = a.projectType === 'basement'
  const isKitchenBath = a.projectType === 'kitchen_bath'
  const isInteriorOnly = isBasement || isKitchenBath || a.projectType === 'partial_reno'

  const res: Record<string, number | string> = {}

  // ── PRE-CONSTRUCTION ──────────────────────────────────────────────────────

  // Demo scales with actual demo sqft, not project sqft
  // Small: ~$4k, Medium: ~$6.5k, Large: ~$14k at typical demo
  // Rough: $6–9/sf of demo area, minimum from bracket
  res.demolition = a.hasDemolition
    ? r(Math.max(get('demo') * 0.5, a.demoSqft * 7), 500)
    : 0

  // Architecture: median $2.5k (small), $12k (medium), $16k (large)
  // Architecture: basement/small interior jobs floor at $4,400 (dad's actual)
  // Additions/new construction scale with bracket ($12k–$16k+)
  res.architecture = a.architectureIncluded
    ? isInteriorOnly
      ? r(Math.max(4_400, sqft * 14 * fm), 500)
      : get('arch', fm, 500)
    : 0

  res.structural_engineer = NEEDS_STRUCT_ENG.has(a.projectType) ? 'tbd' : 0
  res.filing_fee = NEEDS_PERMIT.has(a.projectType) ? 'owner' : 0

  // Storm/erosion: flat $900–$1,500 for most jobs
  // Storm/erosion only applies when breaking ground (excavation/foundation)
  res.storm_erosion = (a.hasExcavation || a.hasNewFoundation) && sqft >= 400 ? get('storm', 1, 250) : 0

  // Insurance: $1,250–$2,750 for most jobs
  res.insurances = get('insurance', 1, 250)

  // ── SITE WORK ─────────────────────────────────────────────────────────────

  // Scaffolding: median $750 across all projects, only if 2+ stories
  res.scaffolding = a.stories > 1 ? 750 : 0

  // Portasan: median $750 across all projects
  res.portasan = 750

  // Carts: median $1,800 — modest scaling
  // Carts: $1,000 baseline (dad's actual)
  res.carts = r(Math.max(1_000, rcLaborEst * 0.05))

  res.site_prep = 500
  res.general_conditions = 450
  res.trucking = 0

  // Excavation: $600 (small) → $7,500 (large) → $13,750 (XL)
  res.excavation = a.hasExcavation ? get('excavation', 1, 500) : 0

  // Drywells: $500 → $5,000 → $9,000 → $14,000
  res.drywells = a.hasDrywells ? get('drywells', 1, 500) : 0

  res.sitework_trench = a.hasDrywells ? r(Math.min(3_500, get('drywells') * 0.4), 500) : 0
  res.steps = 0
  res.patio = a.hasPatio ? 'nic' : 0

  // Driveway: median $8,500 across projects
  res.driveway = a.hasDriveway ? 8_500 : 0
  res.stone_veneer = 0

  // ── FOUNDATION ────────────────────────────────────────────────────────────

  // Concrete foundations: $600 (small) → $15,500 → $24,500 → $38,500
  res.concrete_foundations = a.hasNewFoundation
    ? get('foundation', a.stories > 1 ? 1.15 : 1.0, 500)
    : 0

  res.concrete_slabs = 0
  res.cmu_walls = 0

  // Waterproofing: median $1,500
  res.waterproofing = a.hasNewFoundation ? 1_500 : 0

  // Stucco at base: median $1,250
  res.stucco_base = a.hasNewFoundation ? 1_250 : 0

  // Structural steel: only for addition/new construction/garage
  res.structural_steel = !isInteriorOnly ? r(Math.max(500, rcLaborEst * 0.08), 250) : 0

  // Temporary shoring: only when doing structural/foundation work
  res.temporary_shoring = !isInteriorOnly ? 750 : 0

  // ── EXTERIOR ──────────────────────────────────────────────────────────────

  // Hardiplank: $1,300 → $11,500 → $43,000 — large jump at bigger jobs
  res.hardiplank_siding = a.exteriorFinish.includes('hardiplank')
    ? get('hardiplank', fm, 500)
    : 0

  // Stucco: typically partial/accent; median $2,500 across all projects
  res.stucco = a.exteriorFinish.includes('stucco')
    ? r(Math.max(2_500, rcLaborEst * 0.15 * fm), 500)
    : 0

  // PVC Soffits/Fascias: $2,000 → $4,500 → $13,750 → $28,250
  res.pvc_soffits_fascias = a.hasPvcSoffits ? get('soffits', fm, 500) : 0

  // PVC Corner Boards: about 40% of soffits cost (from data)
  res.pvc_corner_boards = a.hasPvcSoffits
    ? r(get('soffits') * 0.40 * fm, 500)
    : 0

  // Window trim PVC: median $4,750, scales with window count
  res.pvc_window_trim = a.windowCount > 0
    ? r(a.windowCount * 450 * fm, 250)
    : 0

  // Copper flashing: median $3,000 (n=44, very consistent)
  // Only on exterior/roofing jobs — median $3,000
  res.copper_flashing = a.hasNewRoof ? 3_000 : 0

  res.masonry_chimney = 0

  // Windows: $800 → $2,500 → $29,500 — huge jump at large jobs (Andersen)
  // Window count also matters: use per-window rate × count, bounded by bracket
  const windowBracket = get('windows', fm, 500)
  const windowPerUnit = a.windowBrand === 'andersen' ? 2_500 * fm : 1_500 * fm
  res.windows = a.windowCount > 0
    ? r(Math.min(windowBracket * 1.2, Math.max(windowBracket * 0.5, a.windowCount * windowPerUnit)), 500)
    : 0

  // Window/door install: median $3,500
  res.window_install = a.windowCount > 0 ? r(a.windowCount * 400, 250) : 0

  res.exterior_front_door = 0

  // Roofing: $1,200 → $5,000 → $14,000 → $32,600
  // Also driven by actual roof sqft: median ~$17/sf
  res.roofing = a.hasNewRoof
    ? r(Math.max(get('roofing'), a.roofSqft * 16), 500)
    : 0

  // Exterior painting: median $5,000
  res.exterior_painting = a.hasPvcSoffits ? r(Math.max(2_000, rcLaborEst * 0.12 * fm), 500) : 0

  // ── INTERIOR — ROUGH ──────────────────────────────────────────────────────

  // RC Material: basement is just stud walls — very little material (~$1/sf)
  // Calibrated: 300sf basement = $200 material (dad's actual)
  // Additions/new construction scale with bracket
  // RC Material: basement = just stud wall lumber ~$0.7/sf (300sf = $200, dad's actual)
  res.rough_carpentry_material = isInteriorOnly
    ? r(Math.max(200, sqft * 0.7 * fm), 100)
    : get('rcMat', fm, 500)

  // RC Labor: calibrated — basement $13/sf = 300sf → $3,900 ≈ $4,000 ✓
  // Addition at $26/sf = 500sf → $13,000 ✓
  res.rough_carpentry_labor = r(rcLaborEst, 500)

  // Insulation: calibrated — 300sf basement = $2,500 → $8/sf ✓
  // Addition/new construction scales with bracket (higher due to exterior walls)
  res.insulation = a.hasInsulation
    ? isInteriorOnly
      ? r(Math.max(1_000, sqft * 8 * fm), 250)
      : get('insulation', fm, 500)
    : 0

  // Sheetrock: calibrated — 300sf basement = $2,800 → $9/sf ✓
  // Addition/new construction uses bracket (more complex, multiple layers, etc.)
  res.sheetrock = isInteriorOnly
    ? r(Math.max(1_500, sqft * 9 * fm), 250)
    : get('sheetrock', fm, 500)

  // ── INTERIOR — FINISH ─────────────────────────────────────────────────────

  // Interior trim: basement minimal; additions bracket-based
  res.interior_trim = isInteriorOnly
    ? r(Math.max(500, sqft * 5 * fm), 250)
    : get('intTrim', fm, 500)

  // Interior doors: per door ~$600
  const doorCount = Math.max(
    isBasement ? 1 : 2,
    a.bathroomCount + (isBasement ? 1 : a.stories * 2) + (a.hasKitchen ? 1 : 0)
  )
  res.interior_doors = r(doorCount * 600 * fm, 250)
  res.door_install = r(Math.max(250, doorCount * 200), 250)
  res.basement_door = 0

  // Cabinets
  res.cabinets = a.hasKitchen || a.hasCabinets
    ? r(Math.max(5_000, 10_000 * fm), 500)
    : 0
  res.appliances = a.hasKitchen ? 'owner' : 0

  // Tile labor
  res.tile_labor = a.bathroomCount > 0
    ? r(Math.max(2_000, a.bathroomCount * 4_500 * fm), 500)
    : 0

  // Flooring: ~$7/sf
  res.flooring = r(Math.max(1_500, sqft * 7 * fm), 250)

  // Interior painting: calibrated — 300sf basement = $1,500 → $5/sf ✓
  // Additions/renovations higher (multiple coats, trim, ceilings)
  res.interior_painting = isInteriorOnly
    ? r(Math.max(1_000, sqft * 5 * fm), 250)
    : get('intPaint', fm, 500)

  // ── MEP ───────────────────────────────────────────────────────────────────

  // Plumbing
  res.plumbing = a.hasPlumbing
    ? r(
        a.plumbingScope === 'full'
          ? get('plumbing') * 1.2 + a.bathroomCount * 2_500
          : get('plumbing') * 0.7 + a.bathroomCount * 1_500,
        500
      )
    : 0

  res.underground_plumbing = a.hasPlumbing && !isInteriorOnly ? 'tbd' : 0
  res.relocate_water_gas = 0
  res.gas_line = a.hasGasLine ? 3_000 : 0

  // Electrical: calibrated — basement $3,500–4,000; bracket for larger jobs
  // 300sf basement at $13/sf via bracket was too high → use $12/sf for interior-only
  res.electrical = a.hasElectrical
    ? isInteriorOnly
      ? r(Math.max(3_500, sqft * 12 * fm), 500)
      : get('electrical', fm, 500)
    : 0

  // HVAC: basement $3,500–4,000 (dad's actual); larger jobs TBD until scoped
  res.hvac = a.hasHvac
    ? isBasement
      ? r(Math.max(3_500, sqft * 12 * fm), 500)
      : 'tbd'
    : 0

  return res
}
