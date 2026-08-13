'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Play } from 'lucide-react'
import { useEffect, useRef } from 'react'

// Animated grid background
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-primary/[0.12] via-transparent to-transparent" style={{ backgroundPosition: '50% -20%', backgroundSize: '100% 80%' }} />
      
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)',
        }}
      />

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-primary/10 blur-[120px] -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-accent/10 blur-[100px] translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}

// Floating dashboard mockup
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-primary/20 to-transparent blur-3xl scale-125" />
      
      {/* Main card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative glass border border-white/[0.08] rounded-2xl p-5 shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
      >
        {/* Header bar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 h-5 bg-white/[0.04] rounded-md mx-2 flex items-center justify-center">
            <span className="text-[10px] text-text-muted font-mono">tuosito.it</span>
          </div>
          <div className="w-5 h-5 rounded-md bg-white/[0.04] flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm bg-brand-primary/40" />
          </div>
        </div>

        {/* Stat row */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { label: 'Performance', value: '99', color: 'text-green-400' },
            { label: 'SEO', value: '100', color: 'text-brand-primary' },
            { label: 'Accessibilità', value: '98', color: 'text-brand-accent' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-3 text-center">
              <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] text-text-muted mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Chart bars */}
        <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-3 mb-3">
          <div className="flex items-end gap-1.5 h-14">
            {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.1 * i, duration: 0.6, ease: 'easeOut' }}
                className="flex-1 rounded-sm bg-gradient-to-t from-brand-primary/60 to-brand-accent/40"
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[9px] text-text-muted">Gen</span>
            <span className="text-[9px] text-text-muted">Dic</span>
          </div>
        </div>

        {/* Status row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] text-text-secondary">Sistema online</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent" />
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-brand-accent to-purple-500 -ml-1" />
            <div className="w-4 h-4 rounded-full bg-bg-secondary border border-white/10 -ml-1 flex items-center justify-center">
              <span className="text-[8px] text-text-secondary">+5</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge 1 */}
      <motion.div
        animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -top-4 -right-4 glass border border-white/[0.08] rounded-xl px-3 py-2 flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 text-green-400" />
        </div>
        <div>
          <div className="text-[11px] font-semibold text-white">Design curato</div>
          <div className="text-[9px] text-text-muted">Nei minimi dettagli</div>
        </div>
      </motion.div>

      {/* Floating badge 2 */}
      <motion.div
        animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-4 -left-4 glass border border-white/[0.08] rounded-xl px-3 py-2 flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-lg bg-brand-primary/20 flex items-center justify-center">
          <Play className="w-3 h-3 text-brand-primary fill-brand-primary" />
        </div>
        <div>
          <div className="text-[11px] font-semibold text-white">Performance</div>
          <div className="text-[9px] text-text-muted">Al centro del progetto</div>
        </div>
      </motion.div>
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-white/[0.08] text-xs text-text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                Studio digitale • Disponibile per nuovi progetti
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]">
                <span className="text-white">Siti web moderni</span>
                <br />
                <span className="text-white">per attività che </span>
                <span className="text-gradient">vogliono</span>
                <br />
                <span className="text-white">distinguersi.</span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Creo siti web moderni, veloci e responsive per{' '}
              <span className="text-white font-medium">attività locali e professionisti</span>: ristoranti, negozi, artigiani, B&B e molto altro.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() => handleScroll('#portfolio')}
                className="group flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white font-medium rounded-xl transition-all duration-200 shadow-glow-blue hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] active:scale-[0.98] text-sm"
              >
                Scopri i progetti
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
              <button
                onClick={() => handleScroll('#contatti')}
                className="flex items-center justify-center gap-2 px-6 py-3 glass border border-white/[0.1] hover:border-white/[0.2] text-white font-medium rounded-xl transition-all duration-200 active:scale-[0.98] text-sm"
              >
                Parliamone
              </button>
            </motion.div>

            {/* Honest positioning line */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 justify-center lg:justify-start pt-2"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex-shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              </div>
              <p className="text-xs text-text-muted text-left">
                Sviluppo curato personalmente, senza intermediari.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
