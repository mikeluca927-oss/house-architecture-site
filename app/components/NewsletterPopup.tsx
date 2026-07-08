'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const STORAGE_KEY = 'newsletter-popup-dismissed'
const SHOW_DELAY_MS = 8000

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!visible) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [visible])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('https://formspree.io/f/mqeoonzg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email, _subject: 'Newsletter Signup' }),
    })
    setLoading(false)
    if (res.ok) {
      setSubmitted(true)
      localStorage.setItem(STORAGE_KEY, '1')
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="newsletter-popup-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative w-full max-w-md bg-cream p-8 sm:p-11 shadow-2xl"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gold" aria-hidden="true" />

            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-5 top-6 text-charcoal/40 hover:text-charcoal transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-10 h-px bg-gold mx-auto mb-6" aria-hidden="true" />
                <p className="font-cormorant text-3xl text-charcoal mb-3">You&rsquo;re In</p>
                <p className="font-inter text-sm text-charcoal/60 leading-relaxed">
                  Thanks for joining — we&rsquo;ll send renovation tips and project inspiration your way.
                </p>
              </div>
            ) : (
              <>
                <div className="w-10 h-px bg-gold mb-6" aria-hidden="true" />
                <p id="newsletter-popup-title" className="font-cormorant text-3xl sm:text-4xl text-charcoal mb-3 leading-tight">
                  Join Our Newsletter
                </p>
                <p className="font-inter text-sm text-charcoal/60 leading-relaxed mb-7">
                  Get renovation tips, project inspiration, and Westchester home ideas — straight to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full border border-charcoal/20 bg-transparent px-4 py-3.5 font-inter text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal/30"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gold text-white font-inter text-xs tracking-[0.2em] uppercase py-3.5 hover:bg-gold/90 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Joining...' : 'Join Our Newsletter'}
                  </button>
                </form>
                <p className="font-inter text-xs text-charcoal/30 mt-4 text-center">No spam. Unsubscribe anytime.</p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
