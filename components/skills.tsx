"use client"

import { Sparkles } from "lucide-react"
import { useLanguage } from "./language-context"

export default function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      category: t("skillCat1"),
      icon: "⚡",
      skills: [
        "Apex",
        "Lightning Web Components (LWC)",
        "Aura Components",
        "SOQL / SOSL",
        "Batch Apex",
        "Schedulable Apex",
        "Triggers & Classes",
        "Visualforce",
        "OAuth 2.0",
      ],
    },
    {
      category: t("skillCat2"),
      icon: "🔧",
      skills: [
        "Flows (Screen, Record-Triggered, Scheduled)",
        "Process Builder",
        "Workflows",
        "Validation Rules",
        "Record Types & Page Layouts",
        "Email-to-Case",
        "Assignment Rules",
      ],
    },
    {
      category: t("skillCat3"),
      icon: "🔗",
      skills: [
        "REST API",
        "SOAP Web Services",
        "External Database Integration",
        "XML/JSON Parsing",
        "n8n (Automation Platform)",
        "Callouts & HTTP Requests",
        "Jira API Integration",
        "Middleware",
      ],
    },
    {
      category: t("skillCat4"),
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "Bitbucket",
        "VS Code + SFDX CLI",
        "Jira / ServiceNow (AMS)",
        "Agile / Scrum",
        "Unit Testing",
        "Code Review & Documentation",
      ],
    },
    {
      category: t("skillCat5"),
      icon: "🤖",
      skills: [
        "Claude AI",
        "ChatGPT",
        "GitHub Copilot",
        "AI-Assisted Development",
        "Prompt Engineering",
        "AI Code Review",
        "AI Pair Programming",
      ],
      highlight: true,
    },
    {
      category: t("skillCat6"),
      icon: "💻",
      skills: [
        "Python & Django",
        "Flutter (Mobile Development)",
        "JavaScript / TypeScript",
        "PostgreSQL / SQLite",
        "HTML / CSS",
        "Next.js & React",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            {t("skillsTitle")}
          </h2>
          <Sparkles className="w-8 h-8 text-accent animate-pulse" />
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          {t("skillsDescription")}
        </p>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                category.highlight
                  ? "border-accent/50 bg-gradient-to-br from-accent/5 to-transparent shadow-lg shadow-accent/5"
                  : "border-border bg-card/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                {category.highlight && (
                  <span className="ml-auto px-3 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full border border-accent/30">
                    {t("newBadge")}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:border-accent/50 hover:shadow-sm transition-all duration-200 cursor-default"
                  >
                    {skill}
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
