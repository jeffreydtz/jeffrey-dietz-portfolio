"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About setActiveSection={setActiveSection} />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
