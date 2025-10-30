"use client"

import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function About({ setActiveSection }: AboutProps) {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          ref={ref}
          className={`grid md:grid-cols-3 gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t("aboutTitle")}
            </h2>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("experience")}
                className="group block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-muted/50 hover:translate-x-1"
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t("experience")}
                </span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="group block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-muted/50 hover:translate-x-1"
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t("projects")}
                </span>
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="group block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-muted/50 hover:translate-x-1"
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t("skills")}
                </span>
              </button>
            </nav>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t("aboutParagraph1")}</p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t("aboutParagraph2")}</p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t("aboutParagraph3")}</p>
            </div>

            <div className="pt-8 space-y-8">
              <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-300">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {t("professionalFocus")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("professionalFocusText")}</p>
              </div>

              <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-300">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {t("education")}
                </h3>
                <div className="space-y-4">
                  <div className="pl-4 border-l-2 border-accent/30">
                    <p className="text-foreground font-medium">{t("educationTitle")}</p>
                    <p className="text-muted-foreground text-sm mt-1">{t("educationSubtitle")}</p>
                    <p className="text-muted-foreground text-sm mt-2 italic">{t("educationCourses")}</p>
                  </div>
                  <div className="pl-4 border-l-2 border-accent/30">
                    <p className="text-foreground font-medium">{t("universityDegreeTitle")}</p>
                    <p className="text-muted-foreground text-sm mt-1">{t("universityDegreeSubtitle")}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-300">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {t("certifications")}
                </h3>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1.5">▹</span>
                    <span>
                      <strong className="text-foreground">{t("certGoFluent")}</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1.5">▹</span>
                    <span>{t("certCambridge")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1.5">▹</span>
                    <span>{t("certDELF")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1.5">▹</span>
                    <span>{t("certSalesforce")}</span>
                  </li>
                  <li className="flex items-start gap-3 pt-2 border-t border-border/50 mt-3">
                    <span className="text-accent mt-1.5">▹</span>
                    <span>
                      <strong className="text-foreground">{t("languagesBilingual")}</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 backdrop-blur-sm hover:border-accent/30 transition-all duration-300">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {t("workApproach")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("workApproachText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
