"use client"

import { useLanguage } from "./language-context"
import Reveal from "./reveal"
import { AI_FLEET_SIZE, workflowTeams } from "@/lib/ai-workflow"

export default function AiWorkflow() {
  const { t, language } = useLanguage()

  return (
    <section id="workflow" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <p className="micro-label mb-4 text-accent">{t("workflowKicker")}</p>
          <h2 className="heading-3 mb-4">{t("workflowTitle")}</h2>
          <p className="body-3 mb-12 max-w-[680px] text-lg text-muted-foreground">{t("workflowDescription")}</p>

          <div className="glass-card mb-12 overflow-hidden rounded-2xl p-6 md:p-8">
            <p className="micro-label mb-6 text-center text-accent">{t("workflowDiagramLabel")}</p>
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-lg border border-border bg-muted/40 px-6 py-3 title-4">
                {t("workflowFleetHub").replace("{n}", String(AI_FLEET_SIZE))}
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="grid w-full gap-3 sm:grid-cols-3">
                {["pos", "university", "youtube"].map((id) => {
                  const team = workflowTeams.find((item) => item.id === id)
                  if (!team) return null
                  const copy = team[language]
                  return (
                    <div key={id} className="rounded-xl border border-border bg-background/50 px-4 py-3 text-center">
                      <p className="title-4">{copy.title}</p>
                      <p className="micro-label mt-1 text-muted-foreground">{copy.roles.join(" → ")}</p>
                    </div>
                  )
                })}
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="grid w-full gap-3 sm:grid-cols-3">
                {["radar", "assistant", "vps"].map((id) => {
                  const team = workflowTeams.find((item) => item.id === id)
                  if (!team) return null
                  const copy = team[language]
                  return (
                    <div key={id} className="rounded-xl border border-dashed border-border bg-background/30 px-4 py-3 text-center">
                      <p className="title-4">{copy.title}</p>
                    </div>
                  )
                })}
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="w-full rounded-xl border border-accent/30 bg-accent/5 px-4 py-3 text-center">
                <p className="body-5">{t("workflowReviewFlow")}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {workflowTeams.map((team) => {
              const copy = team[language]
              return (
                <article key={team.id} className="glass-card rounded-2xl p-6">
                  <h3 className="title-1 mb-2">{copy.title}</h3>
                  <p className="body-6 mb-4 text-muted-foreground">{copy.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {copy.roles.map((role) => (
                      <span key={role} className="chip">
                        {role}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
