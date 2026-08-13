import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nevora Coding — Siti web moderni per attività locali',
  description: 'Creo siti web moderni, responsive e curati per attività locali, professionisti e piccole imprese.',
  keywords: ['siti web per ristoranti', 'siti web per parrucchieri', 'web design attività locali', 'sviluppo web', 'Next.js', 'React'],
  authors: [{ name: 'Nevora Coding' }],
  openGraph: {
    title: 'Nevora Coding — Siti web moderni per attività locali',
    description: 'Creo siti web moderni, responsive e curati per attività locali, professionisti e piccole imprese.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Nevora Coding',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nevora Coding',
    description: 'Creo siti web moderni, responsive e curati per attività locali, professionisti e piccole imprese.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
        {children}
      </body>
    </html>
  )
}
