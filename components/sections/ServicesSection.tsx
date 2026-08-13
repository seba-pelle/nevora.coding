'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, LayoutTemplate, RefreshCcw, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Siti vetrina',
    description:
      'Siti professionali per presentare la tua attività, i tuoi servizi e i tuoi contatti in modo chiaro e curato.',
    features: ['Design su misura', 'Struttura chiara', 'Ottimizzato per i motori di ricerca'],
    color: 'from-brand-primary to-blue-400',
    glow: 'group-hover:shadow-glow-blue',
  },
  {
    icon: LayoutTemplate,
    title: 'Landing page',
    description:
      "Pagine progettate per presentare un servizio o un'offerta in modo diretto, semplice ed efficace.",
    features: ['Focus su un obiettivo', 'Design pulito', 'Pronte per essere condivise'],
    color: 'from-purple-500 to-pink-500',
    glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
  },
  {
    icon: RefreshCcw,
    title: 'Restyling',
    description:
      'Riprogettazione di siti esistenti con un design più moderno, responsive e aggiornato.',
    features: ['Nuovo design', 'Contenuti riorganizzati', 'Codice più leggero'],
    color: 'from-brand-accent to-teal-400',
    glow: 'group-hover:shadow-glow-cyan',
  },
  {
    icon: Smartphone,
    title: 'Ottimizzazione mobile',
    description:
      'Esperienza curata su smartphone, tablet e desktop, perché la maggior parte dei visitatori arriva da mobile.',
    features: ['Layout responsive', 'Tempi di caricamento curati', 'Navigazione semplice'],
    color: 'from-orange-500 to-yellow-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servizi" ref={ref} className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/[0.08] text-xs text-text-secondary">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            Cosa realizzo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Servizi pensati
            <br />
            <span className="text-gradient">per attività locali.</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            Dal primo confronto alla pubblicazione, mi occupo di ogni aspetto dello sviluppo del tuo sito.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative glass border border-white/[0.06] rounded-2xl p-7 hover:border-white/[0.12] transition-all duration-300 ${service.glow} cursor-default`}
              >
                {/* Background glow on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-text-secondary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
