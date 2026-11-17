"use client"

import dynamic from "next/dynamic"
import { useLanguage } from "./language-context"
import Reveal from "./reveal"
import { useCanvasMode } from "@/lib/use-motion-prefs"

const CodeOrb = dynamic(() => import("./three/CodeOrb"), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-2xl bg-[#181818]/40" />,
})

export default function Skills() {
  const { t } = useLanguage()
  const canvasMode = useCanvasMode()

  const skillCategories = [
    {
      category: t("skillCat1"),
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
      category: t("skillCatAgentforce"),
      skills: [
        "Agentforce (Agents, Topics & Actions)",
        "Agentforce Scripting / Orchestrators",
        "Prompt Builder & Prompt Templates",
        "Models API",
        "Flow + Apex Agent Actions",
      ],
      highlight: true,
    },
    {
      category: t("skillCat2"),
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
      skills: [
        "Git",
        "GitHub",
        "Azure DevOps (Repos, Boards, User Stories)",
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
      skills: [
        "Grok Bot (multi-agent teams)",
        "Claude API (Anthropic SDK)",
        "Gemini API",
        "Agentic Pipelines & Multi-Agent Orchestration",
        "MCP (Model Context Protocol)",
        "Human-in-the-Loop Automation",
        "Computer Vision (YOLO11, Tracking, OCR)",
        "Prompt Engineering",
        "Claude Code / Copilot / AI Pair Programming",
      ],
      highlight: true,
    },
    {
      category: t("skillCat6"),
      skills: [
        "Python (Django, FastAPI)",
        "Next.js & React",
        "JavaScript / TypeScript",
        "Supabase (Postgres, Auth, RLS)",
        "PostgreSQL / SQLite",
        "Flutter (Mobile Development)",
        "Telegram Bots (Telegraf)",
        "Vercel & CI/CD",
      ],
    },
  ]

  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <div className="mb-12 grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="micro-label mb-4 text-accent">{"// 04 · Stack"}</p>
              <h2 className="heading-3">{t("skillsTitle")}</h2>
              <p className="body-3 mt-4 max-w-[680px] text-lg text-muted-foreground">{t("skillsDescription")}</p>
            </div>
            {canvasMode === "3d" ? (
              <div className="relative hidden aspect-square w-full max-w-[280px] md:block">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_60%)] blur-2xl" />
                <div className="glass-card absolute inset-0 rounded-2xl">
                  <CodeOrb />
                </div>
              </div>
            ) : null}
          </div>

          <div className="space-y-6">
            {skillCategories.map((category) => (
              <div
                key={category.category}
                className={`glass-card space-y-4 rounded-2xl p-6 md:p-8 ${category.highlight ? "shadow-[0_0_40px_-20px_var(--glow)]" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <h3 className="title-1">{category.category}</h3>
                  {category.highlight ? <span className="chip ml-auto text-accent">{t("newBadge")}</span> : null}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
