// Structured data component for SEO
"use client"

import { useEffect } from 'react'

interface StructuredDataProps {
  data: Record<string, any>
  id?: string
}

export default function StructuredData({ data, id }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id || 'structured-data'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById(id || 'structured-data')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [data, id])

  return null
}

