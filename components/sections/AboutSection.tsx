'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const tools = ['HTML', 'CSS', 'JavaScript', 'Sviluppo AI-assisted', 'Vercel', 'Responsive Design']

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="chi-sono" ref={ref} className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start"
        >
          {/* Avatar / logo mark */}
          <div className="flex md:block justify-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/[0.08] flex-shrink-0">
              <Image src="/nevora-logo.jpg" alt="Nevora Coding" fill className="object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/[0.08] text-xs text-text-secondary">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              Dietro Nevora Coding
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Chi c&apos;è dietro <span className="text-gradient">il progetto.</span>
            </h2>

            <p className="text-text-secondary text-base leading-relaxed max-w-2xl">
              Sono Seba, un giovane web developer appassionato di tecnologia, design e intelligenza artificiale.
              Ho creato Nevora Coding per trasformare idee e attività locali in siti web moderni, semplici da
              utilizzare e curati nei dettagli. Sono all&apos;inizio di questo percorso, e ogni progetto che
              realizzo lo tratto con la stessa cura che vorrei per la mia attività.
            </p>

            {/* Tools */}
            <div className="pt-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-3">
                Strumenti che utilizzo
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-text-secondary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
