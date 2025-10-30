import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jeffreydietz.dev'
const siteName = 'Jeffrey Dietz | Salesforce Developer & Analyst'
const defaultDescription = 'Salesforce Developer with 2+ years of experience specializing in Apex, Lightning Web Components, integrations, and automation. C1 English certified professional focused on building scalable enterprise solutions.'
const defaultKeywords = 'Salesforce Developer, Apex, Lightning Web Components, LWC, Salesforce Integration, Batch Apex, SOQL, REST API, Salesforce Analyst, Salesforce Consultant, Enterprise Salesforce Solutions, Salesforce Automation, CRM Developer, Salesforce Platform Developer, Argentina Salesforce Developer, Remote Salesforce Developer'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: 'Jeffrey Dietz', url: 'https://www.linkedin.com/in/jeffrey--dietz' }],
  creator: 'Jeffrey Dietz',
  publisher: 'Jeffrey Dietz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'es': '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: defaultDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jeffrey Dietz - Salesforce Developer & Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: defaultDescription,
    creator: '@jeffreydietz',
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
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'Technology',
  classification: 'Professional Portfolio',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD Structured Data for Person/Professional
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jeffrey Dietz',
    jobTitle: 'Salesforce Developer & Analyst',
    worksFor: {
      '@type': 'Organization',
      name: 'Accenture',
      url: 'https://www.accenture.com',
    },
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'Universidad Abierta Interamericana',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'AR',
        },
      },
      {
        '@type': 'Organization',
        name: 'Universidad Austral',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'AR',
        },
      },
    ],
    email: 'jeffreydietz33@gmail.com',
    url: siteUrl,
    sameAs: [
      'https://www.linkedin.com/in/jeffrey--dietz',
      'https://github.com/jeffrey-dietz',
    ],
    knowsAbout: [
      'Salesforce',
      'Apex',
      'Lightning Web Components',
      'Salesforce Integration',
      'REST API',
      'SOQL',
      'Batch Apex',
      'Salesforce Automation',
      'CRM Development',
      'Enterprise Solutions',
      'Python',
      'JavaScript',
      'React',
      'Next.js',
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'Spanish',
        identifier: 'es',
      },
      {
        '@type': 'Language',
        name: 'English',
        identifier: 'en',
      },
      {
        '@type': 'Language',
        name: 'French',
        identifier: 'fr',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AR',
      addressLocality: 'Argentina',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Language Proficiency',
        recognizedBy: {
          '@type': 'Organization',
          name: 'goFLUENT',
        },
        name: 'C1 English Certification (CEFR C1.1)',
        dateCreated: '2025-09-01',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Language Proficiency',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Cambridge Assessment English',
        },
        name: 'Cambridge First Certificate (FCE) - B2 English',
        dateCreated: '2018-01-01',
      },
    ],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    description: defaultDescription,
    url: siteUrl,
    author: {
      '@type': 'Person',
      name: 'Jeffrey Dietz',
    },
    inLanguage: ['en', 'es'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const professionalProfileJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: siteName,
    description: defaultDescription,
    url: siteUrl,
    mainEntity: {
      '@type': 'Person',
      name: 'Jeffrey Dietz',
      jobTitle: 'Salesforce Developer & Analyst',
      worksFor: {
        '@type': 'Organization',
        name: 'Accenture',
      },
      hasOccupation: {
        '@type': 'Occupation',
        occupationLocation: {
          '@type': 'Country',
          name: 'Argentina',
        },
        skills: [
          'Salesforce Development',
          'Apex Programming',
          'Lightning Web Components',
          'Salesforce Integration',
          'REST API',
          'SOQL',
          'Batch Apex',
          'Salesforce Automation',
          'CRM Development',
          'Enterprise Solutions',
          'Python',
          'JavaScript',
          'React',
          'Next.js',
        ],
      },
    },
  }

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="color-scheme" content="dark light" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalProfileJsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
