"use client"

import { useEffect, useMemo, useState } from "react"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "./language-context"
import { cn } from "@/lib/utils"

const SECTION_IDS = [
  "about",
  "experience",
  "salesforce-cases",
  "workflow",
  "products",
  "skills",
  "contact",
] as const

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function SkipToContent() {
  const { t } = useLanguage()
  return (
    <a
      href="#about"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-accent-foreground"
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
      { id: "salesforce-cases", label: t("salesforceCasesNav") },
      { id: "workflow", label: t("workflowNav") },
      { id: "products", label: t("personalProjectsNav") },
      { id: "skills", label: t("skills") },
      { id: "contact", label: t("contact") },
    ],
    [t],
  )

  useEffect(() => {
    const hero = document.getElementById("hero")
    const heroObserver = hero
      ? new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
          threshold: 0,
          rootMargin: "-12px 0px 0px 0px",
        })
      : null
    if (hero && heroObserver) heroObserver.observe(hero)

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const id = visible[0]?.target.id
        if (id) setActiveSection(id)
      },
      { rootMargin: "-24% 0px -58% 0px", threshold: [0, 0.2, 0.5, 1] },
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) sectionObserver.observe(el)
    })

    return () => {
      heroObserver?.disconnect()
      sectionObserver.disconnect()
    }
  }, [setActiveSection])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

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
    <>
      <nav className="pointer-events-none fixed top-3 right-3 left-3 z-50 md:top-4">
        <div
          className={cn(
            "pointer-events-auto glass-nav mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl px-4 transition-shadow duration-300",
            scrolled && "shadow-[0_16px_48px_-24px_rgba(0,0,0,0.8)]",
          )}
        >
          <button type="button" onClick={handleHomeClick} className="group shrink-0" aria-label="Home">
            <span className="heading-6 tracking-tight text-foreground">JD</span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => handleNavClick(section.id)}
                aria-current={activeSection === section.id ? "true" : undefined}
                className={cn(
                  "title-4 rounded-lg px-3 py-2 transition-colors duration-300 focus-visible:outline-none",
                  activeSection === section.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {section.label}
              </button>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="relative h-10 w-10 rounded-lg"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "absolute top-3 left-2 h-0.5 w-6 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isOpen && "translate-y-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute top-[19px] left-2 h-0.5 w-6 bg-foreground transition-opacity duration-300",
                  isOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute top-[26px] left-2 h-0.5 w-6 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isOpen && "-translate-y-1.5 -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {isOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
          <div className="relative flex h-full flex-col px-6 pt-24 pb-8">
            {sections.map((section, index) => (
              <button
                key={section.id}
                type="button"
                onClick={() => handleNavClick(section.id)}
                aria-current={activeSection === section.id ? "true" : undefined}
                className={cn(
                  "menu-link-in heading-5 border-b border-border py-6 text-left",
                  activeSection === section.id ? "text-accent" : "text-foreground",
                )}
                style={{ animationDelay: `${Math.min(index * 60, 360)}ms` }}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}
