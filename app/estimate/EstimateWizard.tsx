'use client'

import { useState, useMemo, useCallback } from 'react'
import { SECTIONS, ValueType } from './lineItems'
import { ProjectAnswers, DEFAULT_ANSWERS, generateEstimate } from './pricing'

// ─── Types ────────────────────────────────────────────────────────────────────

interface ItemValue {
  type: ValueType | 'empty'
  amount?: string
  note: string
}

interface ProjectInfo {
  clientName: string
  address: string
  date: string
}

type AllValues = Record<string, ItemValue>
type Step = 'info' | 'questions' | 'estimate' | 'summary'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseAmount(v: ItemValue): number {
  if (v.type !== 'amount' && v.type !== 'allowance') return 0
  const n = parseFloat(v.amount?.replace(/,/g, '') || '0')
  return isNaN(n) ? 0 : n
}

function fmt(n: number): string {
  return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 })
}

function displayValue(v: ItemValue): string {
  if (v.type === 'empty') return '—'
  if (v.type === 'amount') return v.amount ? fmt(parseFloat(v.amount.replace(/,/g, '') || '0')) : '—'
  if (v.type === 'allowance') return v.amount ? `${fmt(parseFloat(v.amount.replace(/,/g, '') || '0'))} (Allow.)` : 'Allowance'
  if (v.type === 'tbd') return 'TBD'
  if (v.type === 'nic') return 'NIC'
  if (v.type === 'owner') return 'By Owner'
  return '—'
}

function rawToItemValue(raw: number | string): ItemValue {
  if (raw === 'tbd') return { type: 'tbd', note: '' }
  if (raw === 'owner') return { type: 'owner', note: '' }
  if (raw === 'nic') return { type: 'nic', note: '' }
  if (typeof raw === 'number' && raw > 0) return { type: 'amount', amount: raw.toString(), note: '' }
  return { type: 'empty', note: '' }
}

// ─── Question Helpers ─────────────────────────────────────────────────────────

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
        active ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
      }`}
    >
      {label}
    </button>
  )
}

function Toggle({ label, value, onChange, sub }: { label: string; value: boolean; onChange: (v: boolean) => void; sub?: string }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl border transition-all text-left ${
        value ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
      }`}
    >
      <div>
        <span className="text-sm font-semibold">{label}</span>
        {sub && <p className={`text-xs mt-0.5 ${value ? 'text-gray-300' : 'text-gray-400'}`}>{sub}</p>}
      </div>
      <span className={`text-lg ${value ? 'text-white' : 'text-gray-300'}`}>{value ? '✓' : '+'}</span>
    </button>
  )
}

function NumStepper({ label, value, onChange, min, max, step, unit }: {
  label: string; value: number; onChange: (v: number) => void
  min: number; max: number; step: number; unit?: string
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl">
      <span className="text-sm font-semibold text-gray-800">{label}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - step))}
          className="w-8 h-8 rounded-lg bg-gray-100 text-gray-700 font-bold text-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
        >−</button>
        <span className="text-base font-bold text-gray-900 min-w-[3rem] text-center">
          {value.toLocaleString()}{unit}
        </span>
        <button
          onClick={() => onChange(Math.min(max, value + step))}
          className="w-8 h-8 rounded-lg bg-gray-100 text-gray-700 font-bold text-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
        >+</button>
      </div>
    </div>
  )
}

// ─── Project type presets ────────────────────────────────────────────────────
// Auto-configures answers when project type is selected

const PROJECT_PRESETS: Record<string, Partial<ProjectAnswers>> = {
  addition: {
    hasNewFoundation: true, hasExcavation: true, hasDrywells: false,
    hasNewRoof: true, roofSqft: 600, exteriorFinish: ['hardiplank'],
    hasPvcSoffits: true, windowCount: 6, windowBrand: 'andersen',
    hasDemolition: true, demoSqft: 200, architectureIncluded: true,
    hasInsulation: true,
  },
  new_construction: {
    hasNewFoundation: true, hasExcavation: true, hasDrywells: true,
    hasNewRoof: true, roofSqft: 1200, exteriorFinish: ['hardiplank'],
    hasPvcSoffits: true, windowCount: 12, windowBrand: 'andersen',
    hasDemolition: false, demoSqft: 0, architectureIncluded: true,
    hasInsulation: true,
  },
  full_reno: {
    hasNewFoundation: false, hasExcavation: false, hasDrywells: false,
    hasNewRoof: false, roofSqft: 0, exteriorFinish: [],
    hasPvcSoffits: false, windowCount: 0,
    hasDemolition: true, demoSqft: 400, architectureIncluded: true,
    hasInsulation: true,
  },
  partial_reno: {
    hasNewFoundation: false, hasExcavation: false, hasDrywells: false,
    hasNewRoof: false, roofSqft: 0, exteriorFinish: [],
    hasPvcSoffits: false, windowCount: 0,
    hasDemolition: true, demoSqft: 150, architectureIncluded: false,
    hasInsulation: false,
  },
  basement: {
    hasNewFoundation: false, hasExcavation: false, hasDrywells: false,
    hasNewRoof: false, roofSqft: 0, exteriorFinish: [],
    hasPvcSoffits: false, windowCount: 0,
    hasDemolition: true, demoSqft: 100, architectureIncluded: false,
    hasInsulation: true, stories: 1,
    bathroomCount: 0, hasPlumbing: false, hasHvac: false, hasKitchen: false, hasCabinets: false,
  },
  garage: {
    hasNewFoundation: true, hasExcavation: true, hasDrywells: false,
    hasNewRoof: true, roofSqft: 500, exteriorFinish: ['hardiplank'],
    hasPvcSoffits: true, windowCount: 2, windowBrand: 'andersen',
    hasDemolition: false, demoSqft: 0, architectureIncluded: false,
    hasInsulation: false, hasKitchen: false, bathroomCount: 0,
    hasPlumbing: false, hasHvac: false,
  },
  kitchen_bath: {
    hasNewFoundation: false, hasExcavation: false, hasDrywells: false,
    hasNewRoof: false, roofSqft: 0, exteriorFinish: [],
    hasPvcSoffits: false, windowCount: 0,
    hasDemolition: true, demoSqft: 100, architectureIncluded: false,
    hasInsulation: false, hasKitchen: true, bathroomCount: 1, hasCabinets: true,
  },
}

// Which project types involve exterior work
const EXTERIOR_TYPES = new Set(['addition', 'new_construction', 'garage'])
// Which project types need site/foundation questions
const FOUNDATION_TYPES = new Set(['addition', 'new_construction', 'garage'])

// ─── Questions Step ───────────────────────────────────────────────────────────

function QuestionsStep({ answers, onChange, onNext, onBack }: {
  answers: ProjectAnswers
  onChange: (a: Partial<ProjectAnswers>) => void
  onNext: () => void
  onBack: () => void
}) {
  const [page, setPage] = useState(0)

  const isExterior = EXTERIOR_TYPES.has(answers.projectType)
  const isFoundation = FOUNDATION_TYPES.has(answers.projectType)

  function applyPreset(typeId: string) {
    const preset = PROJECT_PRESETS[typeId] ?? {}
    onChange({ projectType: typeId, ...preset })
  }

  // Fixed 4-page structure: 0=basics, 1=foundation, 2=exterior, 3=interior/MEP
  // Navigation skips pages that are irrelevant
  const PAGE_COUNT = 4
  const isLast = page === PAGE_COUNT - 1

  // Which pages are active (non-skipped) for progress bar
  const activePages = [0, ...(isFoundation ? [1] : []), ...(isExterior ? [2] : []), PAGE_COUNT - 1]
    .filter((v, i, a) => a.indexOf(v) === i)

  function goNext() {
    let next = page + 1
    while (next < PAGE_COUNT - 1 && !activePages.includes(next)) next++
    if (next >= PAGE_COUNT) onNext()
    else setPage(next)
  }
  function goPrev() {
    let prev = page - 1
    while (prev > 0 && !activePages.includes(prev)) prev--
    setPage(Math.max(0, prev))
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Progress — only show active pages */}
      <div className="flex items-center gap-1.5 mb-6">
        <button onClick={onBack} className="text-xs text-gray-400 hover:text-gray-600 mr-2">← Back</button>
        {activePages.map((pg) => (
          <div key={pg} className={`flex-1 h-1 rounded-full transition-all ${pg <= page ? 'bg-gray-900' : 'bg-gray-200'}`} />
        ))}
      </div>

      {/* Page content — fixed indices, always rendered, scrolled into view */}
      <div className="min-h-[400px]">

        {/* Page 0 — always shown */}
        {page === 0 && (
          <div className="space-y-4">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">What type of project?</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'addition', label: 'House Addition' },
                  { id: 'full_reno', label: 'Full Renovation' },
                  { id: 'partial_reno', label: 'Partial Renovation' },
                  { id: 'new_construction', label: 'New Construction' },
                  { id: 'basement', label: 'Basement Finish' },
                  { id: 'garage', label: 'Garage' },
                  { id: 'kitchen_bath', label: 'Kitchen / Bath' },
                ].map((t) => (
                  <Chip key={t.id} label={t.label} active={answers.projectType === t.id}
                    onClick={() => applyPreset(t.id)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Square footage of the work area</p>
              <div className="px-4 py-4 bg-white border border-gray-200 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-black text-gray-900">{answers.sqft.toLocaleString()}</span>
                  <span className="text-sm text-gray-400">sq ft</span>
                </div>
                <input type="range" min={100} max={5000} step={50} value={answers.sqft}
                  onChange={(e) => onChange({ sqft: parseInt(e.target.value) })}
                  className="w-full accent-gray-900" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>100</span><span>5,000 sq ft</span></div>
              </div>
            </div>
            {!['basement', 'kitchen_bath'].includes(answers.projectType) && (
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Number of stories</p>
                <div className="flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <Chip key={s} label={`${s} ${s === 1 ? 'Story' : 'Stories'}`} active={answers.stories === s} onClick={() => onChange({ stories: s })} />
                  ))}
                </div>
              </div>
            )}
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Interior finish level</p>
              <div className="flex gap-2">
                {[{ id: 'basic', label: 'Basic' }, { id: 'standard', label: 'Standard' }, { id: 'highend', label: 'High-End' }].map((f) => (
                  <Chip key={f.id} label={f.label} active={answers.finishLevel === f.id} onClick={() => onChange({ finishLevel: f.id })} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Page 1 — Site & Foundation (addition, new construction, garage only) */}
        {page === 1 && isFoundation && (
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Site & Foundation</p>
            <Toggle label="Demolition" sub="Remove existing structure or walls"
              value={answers.hasDemolition} onChange={(v) => onChange({ hasDemolition: v })} />
            {answers.hasDemolition && (
              <NumStepper label="Demo area (sq ft)" value={answers.demoSqft} onChange={(v) => onChange({ demoSqft: v })}
                min={50} max={5000} step={50} unit=" sf" />
            )}
            <Toggle label="Excavation" sub="Dig for new foundation or footings"
              value={answers.hasExcavation} onChange={(v) => onChange({ hasExcavation: v })} />
            <Toggle label="New Foundation / Footings" sub="Poured concrete footings and foundation walls"
              value={answers.hasNewFoundation} onChange={(v) => onChange({ hasNewFoundation: v })} />
            <Toggle label="Drywells" sub="Storm water management"
              value={answers.hasDrywells} onChange={(v) => onChange({ hasDrywells: v })} />
            <Toggle label="Architecture included" sub="Design, drawings & permitting"
              value={answers.architectureIncluded} onChange={(v) => onChange({ architectureIncluded: v })} />
          </div>
        )}

        {/* Page 2 — Exterior (addition, new construction, garage only) */}
        {page === 2 && isExterior && (
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Exterior</p>
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2">Exterior finish (select all that apply)</p>
              <div className="flex flex-wrap gap-2">
                {[{ id: 'hardiplank', label: 'Hardiplank Siding' }, { id: 'stucco', label: 'Stucco' }, { id: 'stone', label: 'Stone Veneer' }].map((e) => (
                  <Chip key={e.id} label={e.label} active={answers.exteriorFinish.includes(e.id)}
                    onClick={() => {
                      const cur = answers.exteriorFinish
                      onChange({ exteriorFinish: cur.includes(e.id) ? cur.filter(x => x !== e.id) : [...cur, e.id] })
                    }} />
                ))}
              </div>
            </div>
            <Toggle label="PVC Soffits, Fascias & Trim" sub="Includes corner boards and exterior PVC trim"
              value={answers.hasPvcSoffits} onChange={(v) => onChange({ hasPvcSoffits: v })} />
            <Toggle label="New Roof Section" value={answers.hasNewRoof} onChange={(v) => onChange({ hasNewRoof: v })} />
            {answers.hasNewRoof && (
              <NumStepper label="Roof area (sq ft)" value={answers.roofSqft} onChange={(v) => onChange({ roofSqft: v })}
                min={100} max={4000} step={50} unit=" sf" />
            )}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2">Windows</p>
              <NumStepper label="Number of windows" value={answers.windowCount} onChange={(v) => onChange({ windowCount: v })} min={0} max={40} step={1} />
              {answers.windowCount > 0 && (
                <div className="flex gap-2 mt-2">
                  <Chip label="Andersen" active={answers.windowBrand === 'andersen'} onClick={() => onChange({ windowBrand: 'andersen' })} />
                  <Chip label="Other brand" active={answers.windowBrand === 'other'} onClick={() => onChange({ windowBrand: 'other' })} />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Page 3 — Interior & MEP (always last) */}
        {page === 3 && (
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Interior & MEP</p>
            {!isFoundation && (
              <>
                <Toggle label="Demolition" sub="Remove walls, floors, ceilings"
                  value={answers.hasDemolition} onChange={(v) => onChange({ hasDemolition: v })} />
                {answers.hasDemolition && (
                  <NumStepper label="Demo area (sq ft)" value={answers.demoSqft} onChange={(v) => onChange({ demoSqft: v })}
                    min={50} max={2000} step={50} unit=" sf" />
                )}
                <Toggle label="Architecture / Drawings" sub="Drawings & permitting"
                  value={answers.architectureIncluded} onChange={(v) => onChange({ architectureIncluded: v })} />
              </>
            )}
            <Toggle label="Kitchen" sub="Includes cabinets, counters, appliances scope"
              value={answers.hasKitchen} onChange={(v) => onChange({ hasKitchen: v })} />
            {answers.hasKitchen && (
              <Toggle label="Kitchen cabinets in contract" sub="Or will owner supply?"
                value={answers.hasCabinets} onChange={(v) => onChange({ hasCabinets: v })} />
            )}
            <NumStepper label="Bathrooms" value={answers.bathroomCount} onChange={(v) => onChange({ bathroomCount: v })} min={0} max={6} step={1} />
            <Toggle label="Insulation" value={answers.hasInsulation} onChange={(v) => onChange({ hasInsulation: v })} />
            <div className="pt-1">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">MEP</p>
              <div className="space-y-2">
                <Toggle label="Plumbing" value={answers.hasPlumbing} onChange={(v) => onChange({ hasPlumbing: v })} />
                {answers.hasPlumbing && (
                  <div className="flex gap-2 pl-2">
                    <Chip label="Full" active={answers.plumbingScope === 'full'} onClick={() => onChange({ plumbingScope: 'full' })} />
                    <Chip label="Partial" active={answers.plumbingScope === 'partial'} onClick={() => onChange({ plumbingScope: 'partial' })} />
                  </div>
                )}
                <Toggle label="Electrical" value={answers.hasElectrical} onChange={(v) => onChange({ hasElectrical: v })} />
                <Toggle label="HVAC" sub="Will show as TBD — mark when scoped"
                  value={answers.hasHvac} onChange={(v) => onChange({ hasHvac: v })} />
                <Toggle label="Gas Line" value={answers.hasGasLine} onChange={(v) => onChange({ hasGasLine: v })} />
              </div>
            </div>
            {isExterior && (
              <>
                <Toggle label="New Driveway" value={answers.hasDriveway} onChange={(v) => onChange({ hasDriveway: v })} />
                <Toggle label="Patio / Flatwork" sub="Will show as NIC" value={answers.hasPatio} onChange={(v) => onChange({ hasPatio: v })} />
              </>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mt-8">
        {page > 0 && (
          <button onClick={goPrev}
            className="flex-1 py-3.5 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            ← Previous
          </button>
        )}
        <button onClick={isLast ? onNext : goNext}
          className="flex-1 py-3.5 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-700 transition-colors">
          {isLast ? 'Generate Estimate →' : 'Next →'}
        </button>
      </div>
    </div>
  )
}

// ─── Value Input (used in estimate step) ────────────────────────────────────

function ValueInput({ value, onChange }: { value: ItemValue; onChange: (v: ItemValue) => void }) {
  const isAmount = value.type === 'amount' || value.type === 'allowance'

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-1.5">
        <button onClick={() => onChange({ ...value, type: value.type === 'amount' ? 'empty' : 'amount' })}
          className={`px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all ${value.type === 'amount' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-gray-600 border-gray-300 hover:border-emerald-400'}`}>$</button>
        {(['tbd', 'nic', 'owner'] as ValueType[]).map((t) => (
          <button key={t} onClick={() => onChange({ ...value, type: value.type === t ? 'empty' : t })}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${value.type === t ? 'bg-slate-700 text-white border-slate-700' : 'bg-white text-gray-600 border-gray-300 hover:border-slate-400'}`}>
            {t === 'tbd' ? 'TBD' : t === 'nic' ? 'NIC' : 'Owner'}
          </button>
        ))}
        <button onClick={() => onChange({ ...value, type: value.type === 'allowance' ? 'empty' : 'allowance' })}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${value.type === 'allowance' ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-gray-600 border-gray-300 hover:border-amber-400'}`}>
          Allow.
        </button>
      </div>
      {isAmount && (
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
          <input type="number" inputMode="numeric" placeholder="0" value={value.amount || ''}
            onChange={(e) => onChange({ ...value, amount: e.target.value })}
            className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent" />
        </div>
      )}
    </div>
  )
}

function LineItemRow({ label, value, onChange, note }: { label: string; value: ItemValue; onChange: (v: ItemValue) => void; note?: string }) {
  const [showNote, setShowNote] = useState(false)
  const hasValue = value.type !== 'empty'

  return (
    <div className={`border rounded-xl p-4 transition-all ${hasValue ? 'border-gray-200 bg-white' : 'border-dashed border-gray-200 bg-gray-50/50'}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <span className={`text-sm font-semibold ${hasValue ? 'text-gray-900' : 'text-gray-500'}`}>{label}</span>
          {note && <p className="text-xs text-gray-400 mt-0.5">{note}</p>}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {hasValue && (
            <span className={`text-sm font-bold ${value.type === 'amount' || value.type === 'allowance' ? 'text-emerald-700' : 'text-slate-600'}`}>
              {displayValue(value)}
            </span>
          )}
          <button onClick={() => setShowNote(!showNote)} className="text-gray-300 hover:text-gray-500 text-xs">
            {value.note ? '📝' : '+note'}
          </button>
        </div>
      </div>
      <ValueInput value={value} onChange={onChange} />
      {showNote && (
        <input type="text" placeholder="Scope note…" value={value.note}
          onChange={(e) => onChange({ ...value, note: e.target.value })}
          className="mt-2 w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" />
      )}
    </div>
  )
}

// ─── Summary View ─────────────────────────────────────────────────────────────

function SummaryView({ project, answers, values, onBack }: {
  project: ProjectInfo; answers: ProjectAnswers; values: AllValues; onBack: () => void
}) {
  const total = SECTIONS.flatMap(s => s.items).reduce((sum, i) => sum + parseAmount(values[i.id] || { type: 'empty', note: '' }), 0)

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8 print:mb-4">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">House Architecture & Construction, PLLC</p>
        <h2 className="text-2xl font-bold text-gray-900">{project.clientName || 'Estimate'}</h2>
        <p className="text-gray-500 text-sm">{project.address}</p>
        <p className="text-gray-400 text-xs mt-1">{project.date} · {answers.sqft.toLocaleString()} sq ft · {answers.stories === 1 ? '1 Story' : `${answers.stories} Stories`}</p>
      </div>

      {SECTIONS.map((section) => {
        const sectionItems = section.items.filter(i => (values[i.id]?.type || 'empty') !== 'empty')
        if (sectionItems.length === 0) return null
        const sectionTotal = sectionItems.reduce((sum, i) => sum + parseAmount(values[i.id] || { type: 'empty', note: '' }), 0)
        return (
          <div key={section.id} className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">{section.label}</h3>
              {sectionTotal > 0 && <span className="text-xs font-semibold text-gray-500">{fmt(sectionTotal)}</span>}
            </div>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              {sectionItems.map((item, idx) => {
                const v = values[item.id] || { type: 'empty', note: '' }
                return (
                  <div key={item.id} className={`flex items-start justify-between px-4 py-3 ${idx < sectionItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div>
                      <p className="text-sm text-gray-800 font-medium">{item.label}</p>
                      {v.note && <p className="text-xs text-gray-400 mt-0.5">{v.note}</p>}
                    </div>
                    <span className={`text-sm font-semibold ml-4 flex-shrink-0 ${v.type === 'amount' || v.type === 'allowance' ? 'text-gray-900' : 'text-gray-500'}`}>
                      {displayValue(v)}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}

      <div className="mt-6 border-2 border-gray-900 rounded-xl p-5 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">TOTAL CONTRACT</span>
        <span className="text-2xl font-black text-gray-900">{fmt(total)}</span>
      </div>

      <div className="mt-8 flex gap-3 print:hidden">
        <button onClick={onBack} className="flex-1 py-3 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
          ← Edit
        </button>
        <button onClick={() => window.print()} className="flex-1 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors">
          Print / Save PDF
        </button>
      </div>
    </div>
  )
}

// ─── Main Wizard ──────────────────────────────────────────────────────────────

export default function EstimateWizard() {
  const [step, setStep] = useState<Step>('info')
  const [project, setProject] = useState<ProjectInfo>({
    clientName: '',
    address: '',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  })
  const [answers, setAnswers] = useState<ProjectAnswers>(DEFAULT_ANSWERS)
  const [values, setValues] = useState<AllValues>({})

  const updateAnswers = useCallback((partial: Partial<ProjectAnswers>) => {
    setAnswers(prev => ({ ...prev, ...partial }))
  }, [])

  function generateAndAdvance() {
    const raw = generateEstimate(answers)
    const newValues: AllValues = {}
    SECTIONS.forEach(s => s.items.forEach(item => {
      const prev = values[item.id]
      // Keep any manual edits; only auto-fill if untouched
      if (prev && prev.type !== 'empty') {
        newValues[item.id] = prev
      } else {
        newValues[item.id] = rawToItemValue(raw[item.id] ?? 0)
      }
    }))
    setValues(newValues)
    setStep('estimate')
  }

  const total = useMemo(() =>
    SECTIONS.flatMap(s => s.items).reduce((sum, i) => sum + parseAmount(values[i.id] || { type: 'empty', note: '' }), 0)
  , [values])

  const filledCount = useMemo(() =>
    SECTIONS.flatMap(s => s.items).filter(i => (values[i.id]?.type || 'empty') !== 'empty').length
  , [values])

  // ── Info Step ──────────────────────────────────────────────────────────────
  if (step === 'info') {
    return (
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">House Architecture & Construction, PLLC</p>
          <h1 className="text-3xl font-black text-gray-900 mb-2">New Estimate</h1>
          <p className="text-gray-500 text-sm">Enter client details to begin.</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Client / Residence Name</label>
            <input type="text" placeholder="e.g. Smith Residence" value={project.clientName}
              onChange={e => setProject({ ...project, clientName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Property Address</label>
            <input type="text" placeholder="e.g. 15 Wakefield Road, Scarsdale, NY" value={project.address}
              onChange={e => setProject({ ...project, address: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Date</label>
            <input type="date"
              onChange={e => {
                if (e.target.value) {
                  const d = new Date(e.target.value + 'T00:00:00')
                  setProject({ ...project, date: d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) })
                }
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            <p className="text-xs text-gray-400 mt-1">{project.date}</p>
          </div>
          <button onClick={() => setStep('questions')}
            disabled={!project.clientName && !project.address}
            className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-base hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed mt-2">
            Next: Project Questions →
          </button>
        </div>
      </div>
    )
  }

  // ── Questions Step ─────────────────────────────────────────────────────────
  if (step === 'questions') {
    return (
      <div className="max-w-lg mx-auto">
        <div className="mb-6">
          <h1 className="text-xl font-black text-gray-900">{project.clientName || 'Estimate'}</h1>
          <p className="text-sm text-gray-400">{project.address}</p>
        </div>
        <QuestionsStep
          answers={answers}
          onChange={updateAnswers}
          onNext={generateAndAdvance}
          onBack={() => setStep('info')}
        />
      </div>
    )
  }

  // ── Summary Step ───────────────────────────────────────────────────────────
  if (step === 'summary') {
    return <SummaryView project={project} answers={answers} values={values} onBack={() => setStep('estimate')} />
  }

  // ── Estimate Step ──────────────────────────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <button onClick={() => setStep('questions')} className="text-xs text-gray-400 hover:text-gray-600 mb-1">← Re-answer questions</button>
          <h1 className="text-xl font-black text-gray-900">{project.clientName || 'Estimate'}</h1>
          <p className="text-sm text-gray-400">{project.address} · {answers.sqft.toLocaleString()} sf</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black text-emerald-700">{fmt(total)}</p>
          <p className="text-xs text-gray-400">{filledCount} line items</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-800">
        <strong>Review the auto-generated estimate below.</strong> Adjust any number, mark items TBD/NIC/Owner, or add scope notes.
      </div>

      <div className="space-y-8">
        {SECTIONS.map((section) => {
          // Split into filled items and truly empty items
          const filledItems = section.items.filter(i => (values[i.id]?.type || 'empty') !== 'empty')
          const emptyItems = section.items.filter(i => (values[i.id]?.type || 'empty') === 'empty')
          // Hide the entire section if nothing is filled in
          if (filledItems.length === 0) return null
          const sectionTotal = filledItems.reduce((sum, i) => sum + parseAmount(values[i.id] || { type: 'empty', note: '' }), 0)
          return (
            <div key={section.id}>
              <div className="flex items-center justify-between mb-3 sticky top-0 bg-gray-50 py-2 z-10 -mx-2 px-2 rounded-lg">
                <h2 className="text-xs font-black uppercase tracking-widest text-gray-500">{section.label}</h2>
                {sectionTotal > 0 && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">{fmt(sectionTotal)}</span>
                )}
              </div>
              <div className="space-y-2">
                {/* Show filled items first */}
                {filledItems.map((item) => (
                  <LineItemRow
                    key={item.id}
                    label={item.label}
                    note={item.note}
                    value={values[item.id] || { type: 'empty', note: '' }}
                    onChange={(v) => setValues(prev => ({ ...prev, [item.id]: v }))}
                  />
                ))}
                {/* Collapsed empty items — tap to expand */}
                {emptyItems.length > 0 && (
                  <details className="group">
                    <summary className="text-xs text-gray-400 cursor-pointer hover:text-gray-600 px-2 py-1 list-none flex items-center gap-1">
                      <span className="group-open:hidden">+ {emptyItems.length} more items not included</span>
                      <span className="hidden group-open:inline">− hide</span>
                    </summary>
                    <div className="space-y-2 mt-2">
                      {emptyItems.map((item) => (
                        <LineItemRow
                          key={item.id}
                          label={item.label}
                          note={item.note}
                          value={values[item.id] || { type: 'empty', note: '' }}
                          onChange={(v) => setValues(prev => ({ ...prev, [item.id]: v }))}
                        />
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Sticky bottom bar */}
      <div className="sticky bottom-0 mt-8 -mx-4 px-4 py-4 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400">Total Estimate</p>
            <p className="text-xl font-black text-gray-900">{fmt(total)}</p>
          </div>
          <button onClick={() => setStep('summary')}
            className="flex-1 max-w-xs py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-700 transition-colors">
            Review & Print →
          </button>
        </div>
      </div>
    </div>
  )
}
