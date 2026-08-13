'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, PenTool, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: 'Parliamo',
    description:
      'Mi racconti la tua attività e cosa vuoi ottenere dal nuovo sito. Un primo confronto per capire le tue esigenze.',
    color: 'from-brand-primary to-blue-400',
  },
  {
    icon: PenTool,
    title: 'Progettiamo',
    description:
      'Definiamo insieme struttura, stile e contenuti, così sai già cosa aspettarti prima di iniziare.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code2,
    title: 'Realizziamo',
    description:
      'Creo il sito e lavoriamo insieme sulle modifiche, con aggiornamenti chiari lungo il percorso.',
    color: 'from-brand-accent to-teal-400',
  },
  {
    icon: Rocket,
    title: 'Online',
    description:
      'Il progetto viene pubblicato e reso disponibile online, pronto per essere trovato dai tuoi clienti.',
    color: 'from-green-400 to-emerald-500',
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="processo" ref={ref} className="relative py-24 bg-bg-secondary/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/[0.08] text-xs text-text-secondary">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            Come funziona
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Un percorso semplice
            <br />
            <span className="text-gradient">dall&apos;idea al sito online.</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            Quattro passaggi chiari, senza sorprese, dal primo contatto alla pubblicazione.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px">
            <div className="h-full bg-gradient-to-r from-brand-primary/40 via-brand-accent/40 to-green-400/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group"
                >
                  {/* Step number + icon */}
                  <div className="flex flex-col items-center lg:items-start mb-5 relative z-10">
                    <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-bg-primary border border-white/[0.1] flex items-center justify-center text-[10px] font-bold text-text-secondary">
                        {i + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 text-center lg:text-left">
                    <h3 className="text-base font-semibold text-white">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
