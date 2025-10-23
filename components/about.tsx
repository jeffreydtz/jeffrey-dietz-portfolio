"use client"

import { useLanguage } from "./language-context"

interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function About({ setActiveSection }: AboutProps) {
  const { t } = useLanguage()

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">{t("aboutTitle")}</h2>
            <nav className="space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("experience")}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("projects")}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("skills")}
              </button>
            </nav>
          </div>

          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{t("aboutParagraph1")}</p>

            <p className="text-lg text-muted-foreground leading-relaxed">{t("aboutParagraph2")}</p>

            <p className="text-lg text-muted-foreground leading-relaxed">{t("aboutParagraph3")}</p>

            <div className="pt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">{t("professionalFocus")}</h3>
                <p className="text-muted-foreground">{t("professionalFocusText")}</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">{t("education")}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">{t("educationTitle")}</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">{t("educationSubtitle")}</p>
                    <p className="text-muted-foreground text-sm mt-1 italic">{t("educationCourses")}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">{t("universityDegreeTitle")}</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">{t("universityDegreeSubtitle")}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">{t("certifications")}</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">{t("certGoFluent")}</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>{t("certCambridge")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>{t("certDELF")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>{t("certSalesforce")}</span>
                  </li>
                  <li className="flex items-start mt-3">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">{t("languagesBilingual")}</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">{t("workApproach")}</h3>
                <p className="text-muted-foreground">{t("workApproachText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
