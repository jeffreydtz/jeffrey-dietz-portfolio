"use client"

import { Building2 } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

export default function Experience() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

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
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("experienceTitle")}
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
            {t("experienceDescription")}
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative pl-8 md:pl-12 border-l-2 border-accent/30 hover:border-accent/60 transition-all duration-300"
              >
                {/* Animated dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-accent/70 border-4 border-background shadow-lg shadow-accent/20 group-hover:scale-125 transition-transform duration-300" />

                <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        {exp.logo ? (
                          <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center overflow-hidden p-2 group-hover:border-accent/50 group-hover:shadow-md transition-all duration-300">
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
                          <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                            <Building2 className="w-8 h-8 text-accent" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                            {exp.company}
                          </h3>
                          <p className="text-lg text-accent font-semibold">{exp.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground font-medium font-mono bg-muted/50 px-3 py-1 rounded-lg">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6 text-base">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {t("keyAchievements")}
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-3 group/item"
                          >
                            <span className="text-accent mt-1.5 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                            <span className="group-hover/item:text-foreground transition-colors duration-200">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-medium bg-accent/10 border border-accent/20 rounded-full text-foreground hover:bg-accent/20 hover:border-accent/30 hover:scale-105 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
