"use client"

import { Building2 } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "./language-context"

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      company: "Accenture",
      logo: "/logos/accenture.jpeg",
      role: t("accentureRole"),
      period: t("accenturePeriod"),
      description: t("accentureDesc"),
      achievements: [
        t("accentureAch1"),
        t("accentureAch2"),
        t("accentureAch3"),
        t("accentureAch4"),
      ],
      technologies: ["Salesforce", "Apex", "LWC", "Enterprise Architecture", "Consulting", "Digital Transformation"],
    },
    {
      company: "Avalian",
      logo: "/logos/avalian.png",
      role: t("avalianRole"),
      period: t("avalianPeriod"),
      description: t("avalianDesc"),
      achievements: [
        t("avalianAch1"),
        t("avalianAch2"),
        t("avalianAch3"),
        t("avalianAch4"),
        t("avalianAch5"),
      ],
      technologies: ["Apex", "LWC", "Flow Builder", "REST API", "Batch Apex", "SOQL"],
    },
    {
      company: "Deloitte",
      logo: "/logos/deloitte.jpeg",
      role: t("deloitteRole"),
      period: t("deloittePeriod"),
      description: t("deloitteDesc"),
      achievements: [
        t("deloitteAch1"),
        t("deloitteAch2"),
        t("deloitteAch3"),
        t("deloitteAch4"),
        t("deloitteAch5"),
      ],
      technologies: ["Apex", "Visualforce", "Lightning Components", "Batch Apex", "Triggers", "SOQL"],
    },
    {
      company: "LBO",
      logo: "/logos/lbo.png",
      role: t("lboRole"),
      period: t("lboPeriod"),
      description: t("lboDesc"),
      achievements: [
        t("lboAch1"),
        t("lboAch2"),
        t("lboAch3"),
        t("lboAch4"),
      ],
      technologies: ["Python", "React", "PostgreSQL", "REST APIs", "SQL", "ETL"],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t("experienceTitle")}</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          {t("experienceDescription")}
        </p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-accent/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>

              <div className="mb-4">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    {exp.logo ? (
                      <div className="w-16 h-16 rounded-lg bg-background border border-border flex items-center justify-center overflow-hidden p-2">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-accent" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                      <p className="text-lg text-accent font-semibold">{exp.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground font-medium font-mono">{exp.period}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">{t("keyAchievements")}</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-muted border border-border rounded-full text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
