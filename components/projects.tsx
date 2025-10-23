"use client"

import { useLanguage } from "./language-context"

export default function Projects() {
  const { t } = useLanguage()

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
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          {t("projectsTitle")}
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          {t("projectsDescription")}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border hover:border-accent/50 bg-card hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm text-muted-foreground font-mono">{project.year}</span>
              </div>

              <p className="text-muted-foreground mb-3 leading-relaxed">{project.description}</p>

              {project.impact && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20">
                    ✓ {project.impact}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
