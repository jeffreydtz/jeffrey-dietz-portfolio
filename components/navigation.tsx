"use client"

import { useEffect, useMemo, useState } from "react"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "./language-context"

const SECTION_IDS = ["about", "experience", "projects", "personal-projects", "skills", "contact"] as const

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function SkipToContent() {
  const { t } = useLanguage()
  return (
    <a
      href="#about"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-accent-foreground focus:font-semibold"
    >
      {t("skipToContent")}
    </a>
  )
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  const sections = useMemo(
    () => [
      { id: "about", label: t("about") },
      { id: "experience", label: t("experience") },
      { id: "projects", label: t("projects") },
      { id: "personal-projects", label: t("personalProjectsNav") },
      { id: "skills", label: t("skills") },
      { id: "contact", label: t("contact") },
    ],
    [t],
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const currentSection = SECTION_IDS.find((id) => {
        const element = document.getElementById(id)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [setActiveSection])

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleHomeClick = () => {
    setIsOpen(false)
    setActiveSection("about")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg"
          : "bg-background/95 backdrop-blur-sm border-b border-border/30"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={handleHomeClick} className="flex-shrink-0 group" aria-label="Home">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent group-hover:from-accent/90 group-hover:via-accent/70 group-hover:to-accent/50 transition-all duration-300">
              JD
            </h1>
          </button>

          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                aria-current={activeSection === section.id ? "true" : undefined}
                className={`text-sm font-medium transition-all duration-300 relative group focus-visible:outline-none focus-visible:text-accent ${
                  activeSection === section.id ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{section.label}</span>
                {activeSection === section.id ? (
                  <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent animate-in slide-in-from-left" />
                ) : null}
                <span className="absolute inset-0 bg-accent/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors relative"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-0 left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />
                <span
                  className={`absolute top-2.5 left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top duration-300">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                aria-current={activeSection === section.id ? "true" : undefined}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-accent/10 text-accent border-l-4 border-accent"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  )
}
