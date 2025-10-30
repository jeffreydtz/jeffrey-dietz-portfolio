// SEO-optimized metadata for pages
export const generateProjectStructuredData = (projects: Array<{
  title: string
  description: string
  technologies: string[]
  impact: string
  year: string
}>) => {
  return projects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Salesforce Platform',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'Jeffrey Dietz',
    },
    datePublished: project.year,
    keywords: project.technologies.join(', '),
  }))
}

export const generateExperienceStructuredData = (experiences: Array<{
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}>) => {
  return experiences.map((exp) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: exp.role,
    description: exp.description,
    identifier: {
      '@type': 'PropertyValue',
      name: exp.company,
    },
    datePosted: exp.period.split(' - ')[0],
    validThrough: exp.period.includes('Present') ? undefined : exp.period.split(' - ')[1],
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: exp.company,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'AR',
      },
    },
    skills: exp.technologies,
    responsibilities: exp.achievements,
  }))
}

