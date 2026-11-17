"use client"

import { useLanguage } from "./language-context"
import Reveal from "./reveal"

export default function About() {
  const { t } = useLanguage()

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <div className="space-y-6 md:col-span-4">
            <p className="micro-label text-accent">01</p>
            <h2 className="heading-3">{t("aboutTitle")}</h2>
            <nav className="space-y-2">
              {[
                { id: "experience", label: t("experience") },
                { id: "salesforce-cases", label: t("salesforceCasesNav") },
                { id: "workflow", label: t("workflowNav") },
                { id: "products", label: t("personalProjectsNav") },
                { id: "skills", label: t("skills") },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="title-4 block w-full rounded-lg px-3 py-2 text-left text-muted-foreground transition-colors duration-300 hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-6 md:col-span-8">
            <p className="body-3 text-lg text-muted-foreground">{t("aboutParagraph1")}</p>
            <p className="body-3 text-lg text-muted-foreground">{t("aboutParagraph2")}</p>
            <p className="body-3 text-lg text-muted-foreground">{t("aboutParagraph3")}</p>

            <div className="grid gap-4 pt-8">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="title-3 mb-3">{t("professionalFocus")}</h3>
                <p className="body-6 text-muted-foreground">{t("professionalFocusText")}</p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="title-3 mb-4">{t("education")}</h3>
                <div className="space-y-4">
                  <div className="rounded-xl border border-border p-4">
                    <p className="title-3">{t("educationTitle")}</p>
                    <p className="body-6 mt-1 text-muted-foreground">{t("educationSubtitle")}</p>
                    <p className="body-6 mt-2 text-muted-foreground">{t("educationCourses")}</p>
                  </div>
                  <div className="rounded-xl border border-border p-4">
                    <p className="title-3">{t("universityDegreeTitle")}</p>
                    <p className="body-6 mt-1 text-muted-foreground">{t("universityDegreeSubtitle")}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="title-3 mb-4">{t("certifications")}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="body-6">
                    <strong className="font-medium text-foreground">{t("certGoFluent")}</strong>
                  </li>
                  <li className="body-6">{t("certCambridge")}</li>
                  <li className="body-6">{t("certDELF")}</li>
                  <li className="body-6">{t("certSalesforce")}</li>
                  <li className="body-6 border-t border-border pt-3">
                    <strong className="font-medium text-foreground">{t("languagesBilingual")}</strong>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="title-3 mb-3">{t("workApproach")}</h3>
                <p className="body-6 text-muted-foreground">{t("workApproachText")}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
