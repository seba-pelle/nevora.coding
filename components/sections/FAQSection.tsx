'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Quanto costa un sito web?',
    answer: 'Il prezzo varia in base alla complessità del progetto: numero di pagine, funzionalità richieste e tempo necessario. Dopo una prima chiacchierata sulla tua attività, ti preparo un preventivo su misura, chiaro e senza sorprese.',
  },
  {
    question: 'Quanto tempo richiede la realizzazione?',
    answer: 'Dipende dal progetto: un sito vetrina semplice richiede meno tempo di una web app con più funzionalità. Ne parliamo insieme all\u2019inizio e ti do una stima realistica prima di partire.',
  },
  {
    question: 'Sei all\u2019inizio, perché dovrei fidarmi?',
    answer: 'Perché sono trasparente su questo: Nevora Coding è un progetto giovane e in questo momento ho un progetto demo pubblico che puoi vedere e valutare direttamente. Non ho clienti da esibire, ma ci metto la massima cura in ogni sito che realizzo, e lavori direttamente con me dall\u2019inizio alla fine.',
  },
  {
    question: 'Realizzi progetti completamente personalizzati?',
    answer: 'Sì. Non uso template predefiniti: ogni sito viene costruito su misura in base alla tua attività, al tuo stile e ai tuoi contenuti.',
  },
  {
    question: 'Offri assistenza dopo la pubblicazione del sito?',
    answer: 'Sì, resto disponibile per piccole modifiche e per rispondere a dubbi dopo il lancio. Se hai bisogno di un supporto più continuativo, ne parliamo insieme e troviamo la soluzione più adatta.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 + 0.2, duration: 0.5 }}
      className="border-b border-white/[0.06] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className={`text-sm font-medium transition-colors duration-200 ${open ? 'text-white' : 'text-text-secondary group-hover:text-white'}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 ml-4 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 ${open ? 'bg-brand-primary/20 text-brand-primary' : 'bg-white/[0.04] text-text-muted group-hover:bg-white/[0.08]'}`}
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-text-secondary leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" ref={ref} className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/[0.08] text-xs text-text-secondary">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              Domande frequenti
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Hai dei dubbi?
              <br />
              <span className="text-gradient">Ti rispondo io.</span>
            </h2>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="glass border border-white/[0.06] rounded-2xl px-6"
          >
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
