'use client'
import { useState } from 'react'

const projectTypes = [
  'New Construction',
  'Renovation',
  'Addition',
  'Restoration',
  'Kitchen Remodel',
  'Bathroom Remodel',
  'Architecture Only',
  'Multiple Services',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('https://formspree.io/f/mqeoonzg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    })
    setLoading(false)
    if (res.ok) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-gold/30 p-8 md:p-12 text-center">
        <div className="w-10 h-px bg-gold mx-auto mb-6" aria-hidden="true" />
        <p className="font-cormorant text-3xl text-charcoal mb-4">Thank You</p>
        <p className="font-inter text-charcoal/60 leading-relaxed">
          We&rsquo;ve received your message and will be in touch shortly to schedule your free in-home consultation.
        </p>
        <p className="font-inter text-sm text-charcoal/40 mt-4">
          You can also reach us directly at{' '}
          <a href="tel:9142247383" className="text-gold hover:text-gold/80 transition-colors">
            (914) 224-7383
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label
          htmlFor="contact-name"
          className="block font-inter text-xs tracking-widest uppercase text-charcoal/50 mb-2"
        >
          Full Name <span className="text-gold">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-charcoal/20 bg-transparent px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal/30"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block font-inter text-xs tracking-widest uppercase text-charcoal/50 mb-2"
        >
          Email Address <span className="text-gold">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-charcoal/20 bg-transparent px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal/30"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="contact-phone"
          className="block font-inter text-xs tracking-widest uppercase text-charcoal/50 mb-2"
        >
          Phone Number
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-charcoal/20 bg-transparent px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal/30"
          placeholder="(914) 000-0000"
        />
      </div>

      <div>
        <label
          htmlFor="contact-project-type"
          className="block font-inter text-xs tracking-widest uppercase text-charcoal/50 mb-2"
        >
          Project Type <span className="text-gold">*</span>
        </label>
        <select
          id="contact-project-type"
          required
          value={form.projectType}
          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
          className="w-full border border-charcoal/20 bg-cream px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold transition-colors text-charcoal"
        >
          <option value="">Select project type</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block font-inter text-xs tracking-widest uppercase text-charcoal/50 mb-2"
        >
          Tell Us About Your Project
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-charcoal/20 bg-transparent px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-charcoal/30"
          placeholder="Describe your vision, timeline, budget range, and any other details..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold text-white font-inter text-xs tracking-[0.2em] uppercase py-4 hover:bg-gold/90 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Request Free Consultation'}
      </button>
    </form>
  )
}
