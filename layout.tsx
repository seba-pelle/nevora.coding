import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nevora-coding-bmm6.vercel.app'),

  title: 'Nevora Coding — Siti web moderni per attività locali',

  description:
    'Creo siti web moderni, responsive e curati per attività locali, professionisti e piccole imprese in Piemonte e in tutta Italia.',

  keywords: [
    'siti web Piemonte',
    'web designer Piemonte',
    'siti web Cuneo',
    'siti web per attività locali',
    'siti web per ristoranti',
    'siti web per parrucchieri',
    'web design attività locali',
    'sviluppo web',
  ],

  authors: [{ name: 'Nevora Coding' }],

  openGraph: {
    title: 'Nevora Coding — Siti web moderni per attività locali',
    description:
      'Creo siti web moderni, responsive e curati per attività locali, professionisti e piccole imprese in Piemonte e in tutta Italia.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Nevora Coding',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nevora Coding — Siti web moderni per attività locali',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nevora Coding',
    description:
      'Creo siti web moderni, responsive e curati per attività locali, professionisti e piccole imprese.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },
}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-bg-primary text-text-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Nevora Coding',
              description: 'Creo siti web moderni, responsive e curati per attività locali, professionisti e piccole imprese.',
              url: 'https://nevora-coding-bmm6.vercel.app',
              email: 'ciao@nevoracoding.it',
              sameAs: ['https://instagram.com/nevora.coding'],
              areaServed: 'IT',
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}