'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram, Mail, ArrowRight } from 'lucide-react'

const footerLinks = [
  { label: 'Progetti', href: '#portfolio' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Chi sono', href: '#chi-sono' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Footer() {
  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-bg-secondary border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/nevora-logo.jpg"
                  alt="Nevora Coding logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-semibold">
                <span className="text-white">Nevora</span>
                <span className="text-gradient"> Coding</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Siti web moderni, veloci e curati nei dettagli per attività locali e professionisti.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Navigazione</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contatti</h3>
            <div className="space-y-3">
              <a
                href="mailto:ciao@nevoracoding.it"
                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-brand-primary/40 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                ciao@nevoracoding.it
              </a>
              <a
                href="https://instagram.com/nevora.coding"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-brand-primary/40 transition-colors">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                @nevora.coding
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Nevora Coding. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-1 text-xs text-text-muted">
            <span>Fatto con</span>
            <span className="text-brand-primary">♥</span>
            <span>in Italia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
