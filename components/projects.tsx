"use client"

import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

export default function Projects() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const projects = [
    {
      title: t("project1Title"),
      description: t("project1Desc"),
      technologies: ["OAuth 2.0", "REST API", "Apex", "Integration", "Jira API", "Middleware"],
      impact: t("project1Impact"),
      year: "2024-2025",
    },
    {
      title: t("project2Title"),
      description: t("project2Desc"),
      technologies: ["Lightning Web Components", "Apex", "REST/SOAP API", "Excel Processing", "Mass DML"],
      impact: t("project2Impact"),
      year: "2024",
    },
    {
      title: t("project3Title"),
      description: t("project3Desc"),
      technologies: ["Salesforce Flows", "Email-to-Case", "SOQL", "Record-Triggered Flows", "Assignment Rules"],
      impact: t("project3Impact"),
      year: "2024",
    },
    {
      title: t("project4Title"),
      description: t("project4Desc"),
      technologies: ["Batch Apex", "Schedulable Apex", "SOQL", "Governor Limits", "Error Handling"],
      impact: t("project4Impact"),
      year: "2023-2024",
    },
    {
      title: t("project5Title"),
      description: t("project5Desc"),
      technologies: ["Apex", "XML Parsing", "Email Services", "Dynamic SOQL", "Lead Management"],
      impact: t("project5Impact"),
      year: "2023",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("projectsTitle")}
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
            {t("projectsDescription")}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-border/50 hover:border-accent/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 pr-4">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-mono bg-muted/50 px-3 py-1 rounded-lg flex-shrink-0">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">{project.description}</p>

                  {project.impact && (
                    <div className="mb-6">
                      <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        {project.impact}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 hover:border-accent/30 hover:scale-105 transition-all duration-200 cursor-default"
                        style={{ animationDelay: `${i * 50}ms` }}
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
      </div>
    </section>
  )
}
