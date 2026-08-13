'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

interface Project {
  image: string
  category: string
  title: string
  description: string
  tags: string[]
  url: string
}

const projects: Project[] = [
  {
    image: '/osteria-alba.jpg',
    category: 'Ristorante · Demo',
    title: 'Osteria Alba',
    description:
      'Sito web demo per un ristorante piemontese contemporaneo, con menu, galleria, storia del locale e sistema di richiesta prenotazione.',
    tags: ['Menu digitale', 'Galleria', 'Prenotazioni'],
    url: 'https://demoosteriaalba-lqwa6r4bv-sebapelle.vercel.app/',
  },
  {
    image: '/nero-barber-club.jpg',
    category: 'Barber shop · Demo',
    title: 'Nero Barber Club',
    description:
      'Sito web demo per un barber shop contemporaneo, con servizi, galleria, presentazione del locale e sistema di prenotazione.',
    tags: ['Servizi', 'Galleria', 'Prenotazioni'],
    url: 'https://nero-barber-club-demo.vercel.app/',
  },
  {
    image: '/casa-nivea.jpg',
    category: 'Hospitality · Demo',
    title: 'Casa Nivea',
    description:
      'Sito web demo per una country house nelle Langhe, con camere, esperienze, galleria fotografica e richiesta di prenotazione.',
    tags: ['Camere', 'Esperienze', 'Galleria'],
    url: 'https://casa-nivea-demo.vercel.app/',
  },
]

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const reversed = index % 2 === 1

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-10 sm:py-14 border-b border-white/[0.06] last:border-0"
    >
      {/* Image */}
      <div
        className={`relative lg:col-span-7 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.08] group-hover:border-white/[0.18] transition-all duration-500 shadow-card group-hover:shadow-card-hover">
          <Image
            src={project.image}
            alt={`Anteprima del sito ${project.title}`}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Visit badge on hover */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 text-bg-primary text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Visita il progetto
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className={`lg:col-span-5 space-y-4 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-primary">
            Demo
          </span>
          <span className="text-xs text-text-muted">{project.category}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-md">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-brand-primary group-hover:text-brand-accent transition-colors pt-2">
          Visita il progetto
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>
      </div>
    </motion.a>
  )
}

export default function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" ref={ref} className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/[0.08] text-xs text-text-secondary">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            Progetti in evidenza
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Progetti
            <br />
            <span className="text-gradient">selezionati.</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            Una selezione di progetti dimostrativi creati per mostrare approcci, stili e soluzioni diverse.
          </p>
        </motion.div>

        {/* Editorial project list */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 sm:mt-20 glass border border-white/[0.08] rounded-2xl p-8 sm:p-12 text-center space-y-5"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Vuoi un sito come questo?
          </h3>
          <p className="text-text-secondary max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Raccontami la tua attività. Possiamo progettare insieme una presenza online moderna, veloce e pensata per i tuoi clienti.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contatti')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-medium rounded-xl transition-all duration-200 hover:shadow-glow-blue active:scale-[0.98] text-sm"
          >
            Richiedi un preventivo gratuito
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
