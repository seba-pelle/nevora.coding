'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleContact = () => {
    const el = document.querySelector('#contatti')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} id="contatti" className="relative py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-brand-primary/10 via-brand-accent/5 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/[0.08] text-xs text-text-secondary">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Disponibile — Accettiamo nuovi progetti
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Hai un&apos;idea per il
            <br />
            <span className="text-gradient">tuo prossimo sito?</span>
          </h2>

          <p className="text-text-secondary text-lg max-w-lg mx-auto leading-relaxed">
            Raccontami la tua attività e vediamo insieme come trasformarla
            in una presenza online più moderna.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button
              onClick={handleContact}
              className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold rounded-xl transition-all duration-200 shadow-glow-blue hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] active:scale-[0.98] text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Parliamone
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="mailto:ciao@nevoracoding.it"
              className="flex items-center justify-center gap-2 px-8 py-3.5 glass border border-white/[0.1] hover:border-white/[0.2] text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] text-sm"
            >
              <Mail className="w-4 h-4" />
              ciao@nevoracoding.it
            </a>
          </div>

          {/* Trust line */}
          <div className="flex items-center justify-center gap-6 pt-4">
            {['Confronto diretto con me', 'Senza impegno', 'Preventivo gratuito'].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-xs text-text-muted">
                <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
