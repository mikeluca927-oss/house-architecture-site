'use client'
import { useState } from 'react'

interface ProjectCardProps {
  name: string
  category: string
  location: string
  aspectRatio?: string
  index?: number
}

const bgColors = [
  'bg-stone-200',
  'bg-neutral-200',
  'bg-zinc-200',
  'bg-slate-200',
  'bg-gray-200',
  'bg-stone-300',
]

export default function ProjectCard({
  name,
  category,
  location,
  aspectRatio = 'aspect-[4/3]',
  index = 0,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)
  const bg = bgColors[index % bgColors.length]

  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${aspectRatio}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="img"
      aria-label={`${name} — ${category} project in ${location}`}
    >
      {/* Placeholder background */}
      <div className={`absolute inset-0 ${bg}`} />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />

      {/* Category tag */}
      <div className="absolute top-4 left-4 bg-gold px-3 py-1 z-10">
        <span className="font-inter text-[10px] tracking-widest uppercase text-white">{category}</span>
      </div>

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-charcoal/85 flex flex-col justify-end p-6 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="font-cormorant text-xl text-cream mb-1 leading-tight">{name}</h3>
        <p className="font-inter text-sm text-cream/60">{location}</p>
      </div>
    </div>
  )
}
