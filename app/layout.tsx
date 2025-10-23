import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jeffrey Dietz | Salesforce Developer & Analyst',
  description: 'Salesforce Developer with 2+ years of experience specializing in Apex, Lightning Web Components, integrations, and automation. C1 English certified professional focused on building scalable enterprise solutions.',
  keywords: 'Salesforce Developer, Apex, Lightning Web Components, LWC, Salesforce Integration, Batch Apex, SOQL, REST API, Salesforce Analyst',
  authors: [{ name: 'Jeffrey Dietz' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Jeffrey Dietz | Salesforce Developer',
    description: 'Salesforce Developer specializing in Apex, LWC, and enterprise integrations',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
