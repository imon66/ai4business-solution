import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0D0118',
}

export const metadata: Metadata = {
  title: 'AI4Business Solutions | AI-Powered Digital Solutions',
  description: 'We build premium AI solutions and digital experiences for forward-thinking businesses. Transform your business with cutting-edge technology.',
  keywords: ['AI solutions', 'web development', 'digital transformation', 'machine learning', 'business automation', 'India', 'Kolkata'],
  authors: [{ name: 'AI4Business Solutions' }],
  creator: 'AI4Business Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ai4business.solutions',
    siteName: 'AI4Business Solutions',
    title: 'AI4Business Solutions | AI-Powered Digital Solutions',
    description: 'We build premium AI solutions and digital experiences for forward-thinking businesses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI4Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI4Business Solutions | AI-Powered Digital Solutions',
    description: 'We build premium AI solutions and digital experiences for forward-thinking businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton phoneNumber="+919457811378" />
      </body>
    </html>
  )
}
