"use client"

import { Sparkles } from "lucide-react"
import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

export default function Skills() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

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
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden">
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
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              {t("skillsTitle")}
            </h2>
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
            {t("skillsDescription")}
          </p>

          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`group space-y-4 p-6 md:p-8 rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
                  category.highlight
                    ? "border-accent/50 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent shadow-lg shadow-accent/10 hover:shadow-xl hover:shadow-accent/20"
                    : "border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/30 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">{category.category}</h3>
                  {category.highlight && (
                    <span className="ml-auto px-3 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full border border-accent/30 animate-pulse">
                      {t("newBadge")}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg text-sm font-medium text-foreground hover:border-accent/50 hover:bg-accent/5 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${i * 30}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
