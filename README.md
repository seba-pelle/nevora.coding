# Nevora Coding — Official Website

Sito ufficiale di Nevora Coding, studio digitale che realizza siti web, applicazioni web e videogiochi.

## Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animazioni**: Framer Motion
- **Icone**: Lucide React
- **Deploy**: Vercel

## Avvio locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Build di produzione

```bash
npm run build
npm start
```

## Deploy su Vercel

1. Collega il repository a Vercel
2. Le impostazioni sono già configurate in `vercel.json`
3. Clicca **Deploy**

## Struttura

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata SEO
│   ├── page.tsx            # Homepage
│   └── globals.css         # Stili globali + utility classes
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Header sticky con scroll effect
│   │   └── Footer.tsx      # Footer con link e social
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero fullscreen con dashboard mockup
│   │   ├── PortfolioSection.tsx # Progetto demo (Osteria Alba) + placeholder
│   │   ├── ServicesSection.tsx  # 4 servizi offerti
│   │   ├── ProcessSection.tsx   # Come funziona (4 step)
│   │   ├── AboutSection.tsx     # Chi sono / dietro Nevora Coding
│   │   ├── FAQSection.tsx       # Accordion FAQ
│   │   └── CTASection.tsx       # Call to action finale + contatti
│   └── ui/
│       └── BackToTop.tsx    # Pulsante torna in cima
├── hooks/
│   └── useScrolled.ts      # Hook per rilevare lo scroll
└── lib/
    └── utils.ts            # Utility functions (cn, formatNumber)
```

## Performance

Target Lighthouse: **99+** su tutte le metriche.

- Mobile-first responsive
- Font display:swap
- Immagini ottimizzate
- CSS purging via Tailwind
- Animazioni con `will-change` ottimizzato
- Reduced motion supportato

## Personalizzazione

- **Colori**: `tailwind.config.js` → `theme.extend.colors`
- **Contenuti**: direttamente nei file delle sezioni in `src/components/sections/`
- **Email**: cerca `ciao@nevoracoding.it` e sostituisci quando ne avrai una definitiva
- **Instagram**: `@nevora.coding` — cerca `instagram.com/nevora.coding` per aggiornare
- **Progetti demo**: in `PortfolioSection.tsx`, sostituisci i due placeholder "Prossimo progetto" man mano che pubblichi nuove demo
