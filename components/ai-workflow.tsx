"use client"

import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"
import { AI_FLEET_SIZE, workflowTeams } from "@/lib/ai-workflow"

export default function AiWorkflow() {
  const { t, language } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="workflow"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent">
              {t("workflowKicker")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("workflowTitle")}
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl text-lg">{t("workflowDescription")}</p>

          <div className="mb-12 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 md:p-8 overflow-hidden">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-6 text-center">
              {t("workflowDiagramLabel")}
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="px-6 py-3 rounded-full border border-accent/40 bg-accent/10 text-sm font-semibold text-accent shadow-[0_0_32px_-12px_var(--accent)]">
                {t("workflowFleetHub").replace("{n}", String(AI_FLEET_SIZE))}
              </div>
              <div className="h-6 w-px bg-gradient-to-b from-accent/60 to-border" />
              <div className="grid sm:grid-cols-3 gap-3 w-full">
                {["pos", "university", "youtube"].map((id) => {
                  const team = workflowTeams.find((item) => item.id === id)
                  if (!team) return null
                  const copy = team[language]
                  return (
                    <div
                      key={id}
                      className="rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-center"
                    >
                      <p className="text-sm font-semibold text-foreground">{copy.title}</p>
                      <p className="text-[11px] font-mono text-muted-foreground mt-1">
                        {copy.roles.join(" → ")}
                      </p>
                    </div>
                  )
                })}
              </div>
              <div className="h-6 w-px bg-gradient-to-b from-border to-accent/40" />
              <div className="grid sm:grid-cols-3 gap-3 w-full">
                {["radar", "assistant", "vps"].map((id) => {
                  const team = workflowTeams.find((item) => item.id === id)
                  if (!team) return null
                  const copy = team[language]
                  return (
                    <div
                      key={id}
                      className="rounded-xl border border-dashed border-border/70 bg-background/30 px-4 py-3 text-center"
                    >
                      <p className="text-sm font-semibold text-foreground">{copy.title}</p>
                    </div>
                  )
                })}
              </div>
              <div className="h-6 w-px bg-gradient-to-b from-accent/40 to-accent/80" />
              <div className="w-full rounded-xl border border-accent/30 bg-accent/5 px-4 py-3 text-center">
                <p className="text-sm font-medium text-foreground">{t("workflowReviewFlow")}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {workflowTeams.map((team) => {
              const copy = team[language]
              return (
                <article
                  key={team.id}
                  className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-8 right-8 h-px opacity-70"
                    style={{ background: `linear-gradient(90deg, transparent, ${team.accent}, transparent)` }}
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{copy.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{copy.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {copy.roles.map((role) => (
                      <span
                        key={role}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-full border"
                        style={{
                          color: team.accent,
                          borderColor: `${team.accent}44`,
                          backgroundColor: `${team.accent}14`,
                        }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
