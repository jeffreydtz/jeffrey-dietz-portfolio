"use client"

import Image from "next/image"
import { useLanguage } from "./language-context"
import Reveal from "./reveal"

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      kind: "work" as const,
      company: "Accenture",
      logo: "/logos/accenture.jpeg",
      role: t("accentureRole"),
      period: t("accenturePeriod"),
      description: t("accentureDesc"),
      achievements: [t("accentureAch1"), t("accentureAch2"), t("accentureAch3"), t("accentureAch4")],
      technologies: ["Salesforce", "Agentforce", "Apex", "LWC", "Azure DevOps", "Consulting"],
    },
    {
      kind: "work" as const,
      company: "Avalian",
      logo: "/logos/avalian.png",
      role: t("avalianRole"),
      period: t("avalianPeriod"),
      description: t("avalianDesc"),
      achievements: [t("avalianAch1"), t("avalianAch2"), t("avalianAch3"), t("avalianAch4"), t("avalianAch5")],
      technologies: ["Apex", "LWC", "Flow Builder", "REST API", "Batch Apex", "SOQL"],
    },
    {
      kind: "work" as const,
      company: "Deloitte",
      logo: "/logos/deloitte.jpeg",
      role: t("deloitteRole"),
      period: t("deloittePeriod"),
      description: t("deloitteDesc"),
      achievements: [t("deloitteAch1"), t("deloitteAch2"), t("deloitteAch3"), t("deloitteAch4"), t("deloitteAch5")],
      technologies: ["Apex", "Visualforce", "Lightning Components", "Batch Apex", "Triggers", "SOQL"],
    },
    {
      kind: "work" as const,
      company: "LBO",
      logo: "/logos/lbo.png",
      role: t("lboRole"),
      period: t("lboPeriod"),
      description: t("lboDesc"),
      achievements: [t("lboAch1"), t("lboAch2"), t("lboAch3"), t("lboAch4")],
      technologies: ["Python", "React", "PostgreSQL", "REST APIs", "SQL", "ETL"],
    },
    {
      kind: "education" as const,
      company: "Universidad Abierta Interamericana",
      logo: "",
      role: t("educationTitle"),
      period: t("uaiPeriod"),
      description: t("educationCourses"),
      achievements: [],
      technologies: ["Systems Engineering"],
    },
    {
      kind: "education" as const,
      company: "Universidad Austral",
      logo: "",
      role: t("universityDegreeTitle"),
      period: t("australPeriod"),
      description: "",
      achievements: [],
      technologies: ["Programming"],
    },
  ]

  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <p className="micro-label mb-4 text-accent">02 · {t("experience")}</p>
          <h2 className="heading-3 mb-4">{t("experienceTitle")}</h2>
          <p className="body-3 mb-12 max-w-[680px] text-lg text-muted-foreground">{t("experienceDescription")}</p>

          <div className="grid gap-6">
            {experiences.map((exp) => (
              <article key={`${exp.company}-${exp.period}`} className="glass-card rounded-2xl p-6 md:p-8">
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {exp.logo ? (
                      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-2">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} company logo - ${exp.role} position at ${exp.company}`}
                          width={48}
                          height={48}
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-muted">
                        <span className="micro-label text-accent">EDU</span>
                      </div>
                    )}
                    <div>
                      {exp.kind === "education" ? (
                        <p className="micro-label mb-1 text-accent">{t("educationBadge")}</p>
                      ) : null}
                      <h3 className="heading-5">{exp.company}</h3>
                      <p className="title-2 mt-1 text-muted-foreground">{exp.role}</p>
                    </div>
                  </div>
                  <p className="micro-label rounded-lg border border-border bg-muted/60 px-3 py-2">{exp.period}</p>
                </div>

                {exp.description ? <p className="body-6 mb-6 text-muted-foreground">{exp.description}</p> : null}

                {exp.achievements.length > 0 ? (
                  <div className="mb-6">
                    <h4 className="micro-label mb-3 text-accent">{t("keyAchievements")}</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="body-6 flex items-start gap-3 text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
