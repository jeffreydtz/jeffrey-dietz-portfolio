"use client"

import { useState } from "react"
import Navigation, { SkipToContent } from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import CompaniesMarquee from "@/components/companies-marquee"
import Experience from "@/components/experience"
import SalesforceCases from "@/components/salesforce-cases"
import AiWorkflow from "@/components/ai-workflow"
import Products from "@/components/products"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AmbientBackdrop from "@/components/ambient-backdrop"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <>
      <SkipToContent />
      <main id="main" className="relative min-h-screen text-foreground">
        <AmbientBackdrop />
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <article itemScope itemType="https://schema.org/ProfilePage">
          <Hero />
          <About />
          <CompaniesMarquee />
          <Experience />
          <SalesforceCases />
          <AiWorkflow />
          <Products />
          <Skills />
          <Contact />
        </article>
        <Footer />
      </main>
    </>
  )
}
