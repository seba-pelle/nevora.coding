'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Progetti', href: '#portfolio' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Come funziona', href: '#processo' },
  { label: 'Chi sono', href: '#chi-sono' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('#home')}
            className="flex items-center gap-2.5 group"
            aria-label="Torna alla home"
          >
            <div className="relative w-9 h-9 overflow-hidden rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/nevora-logo.jpg"
                alt="Nevora Coding logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              <span className="text-white">Nevora</span>
              <span className="text-gradient"> Coding</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="relative px-4 py-2 text-sm text-text-secondary hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04] group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-4 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('#contatti')}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg transition-all duration-200 shadow-glow-blue hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] active:scale-[0.98]"
            >
              <Zap className="w-3.5 h-3.5" />
              Parliamone
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-text-secondary hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-40 bg-bg-secondary/95 backdrop-blur-xl border-b border-white/[0.06] md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left px-4 py-3 text-text-secondary hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-white/[0.06]">
                <button
                  onClick={() => handleLinkClick('#contatti')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg transition-all duration-200"
                >
                  <Zap className="w-3.5 h-3.5" />
                  Parliamone
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
