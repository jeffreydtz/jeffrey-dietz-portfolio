"use client"

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react"
import { X } from "lucide-react"
import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"
import {
  CASE_AREAS,
  salesforceCases,
  type CaseArea,
  type SalesforceCase,
  type SalesforceCaseCopy,
} from "@/lib/salesforce-cases"

type FilterValue = "all" | CaseArea

function CaseBadge({ status, label }: { status: SalesforceCase["status"]; label: string }) {
  if (status === "comingSoon") {
    return (
      <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300">
        {label}
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      {label}
    </span>
  )
}

function CaseField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5 flex items-center gap-2">
        <span className="w-1 h-1 rounded-full bg-accent" />
        {label}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  )
}

function StackChips({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}

function CaseDetailModal({
  caseStudy,
  copy,
  onClose,
  labels,
}: {
  caseStudy: SalesforceCase
  copy: SalesforceCaseCopy
  onClose: () => void
  labels: {
    problem: string
    approach: string
    design: string
    outcome: string
    stack: string
    close: string
  }
}) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        aria-label={labels.close}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border/50 bg-card/95 backdrop-blur-md shadow-2xl shadow-accent/10"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 pb-4 bg-card/95 backdrop-blur-md border-b border-border/40">
          <div className="space-y-3 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <CaseBadge status={caseStudy.status} label={copy.badge} />
              <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-3 py-1 rounded-lg">
                {copy.client}
              </span>
            </div>
            <h3 id={titleId} className="text-2xl font-bold text-foreground text-balance">
              {copy.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 p-2 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-accent/50 hover:bg-accent/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={labels.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <CaseField label={labels.problem}>{copy.problem}</CaseField>
          <CaseField label={labels.approach}>{copy.approach}</CaseField>
          <CaseField label={labels.design}>{copy.designDecisions}</CaseField>
          <CaseField label={labels.outcome}>{copy.outcome}</CaseField>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              {labels.stack}
            </h4>
            <StackChips stack={caseStudy.stack} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SalesforceCases() {
  const { t, language } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()
  const [filter, setFilter] = useState<FilterValue>("all")
  const [openId, setOpenId] = useState<string | null>(null)

  const labels = {
    problem: t("salesforceCasesProblem"),
    approach: t("salesforceCasesApproach"),
    design: t("salesforceCasesDesign"),
    outcome: t("salesforceCasesOutcome"),
    stack: t("salesforceCasesStack"),
    close: t("salesforceCasesClose"),
  }

  const visibleCases = useMemo(
    () =>
      filter === "all"
        ? salesforceCases
        : salesforceCases.filter((item) => item.areas.includes(filter)),
    [filter],
  )

  const openCase = openId ? salesforceCases.find((item) => item.id === openId) : undefined
  const openCopy = openCase?.[language]

  const open = useCallback((id: string) => setOpenId(id), [])
  const close = useCallback(() => setOpenId(null), [])

  return (
    <section
      id="salesforce-cases"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
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
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent">
              {t("salesforceCasesKicker")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("salesforceCasesTitle")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl text-lg">{t("salesforceCasesDescription")}</p>

          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label={t("salesforceCasesFiltersLabel")}>
            <button
              type="button"
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                filter === "all"
                  ? "bg-accent text-accent-foreground border-accent shadow-md shadow-accent/20"
                  : "bg-card/50 text-muted-foreground border-border/50 hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {t("salesforceCasesFilterAll")}
            </button>
            {CASE_AREAS.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => setFilter(area)}
                aria-pressed={filter === area}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                  filter === area
                    ? "bg-accent text-accent-foreground border-accent shadow-md shadow-accent/20"
                    : "bg-card/50 text-muted-foreground border-border/50 hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {area}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visibleCases.map((item) => {
              const copy = item[language]
              const comingSoon = item.status === "comingSoon"
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => open(item.id)}
                  className={`group relative text-left p-8 rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-500 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    comingSoon
                      ? "border-dashed border-border/70 hover:border-amber-500/40"
                      : "border-border/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 pr-2">
                        {copy.title}
                      </h3>
                      <CaseBadge status={item.status} label={copy.badge} />
                    </div>

                    <p className="text-sm font-mono text-muted-foreground">{copy.client}</p>

                    <div className="space-y-4">
                      <CaseField label={labels.problem}>
                        <span className="line-clamp-3">{copy.problem}</span>
                      </CaseField>
                      <CaseField label={labels.approach}>
                        <span className="line-clamp-3">{copy.approach}</span>
                      </CaseField>
                      <CaseField label={labels.design}>
                        <span className="line-clamp-3">{copy.designDecisions}</span>
                      </CaseField>
                      <CaseField label={labels.outcome}>
                        <span className="line-clamp-3">{copy.outcome}</span>
                      </CaseField>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {labels.stack}
                      </h4>
                      <StackChips stack={item.stack} />
                    </div>

                    <p className="text-xs font-medium text-accent/80 group-hover:text-accent">
                      {t("salesforceCasesOpenHint")}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {openCase && openCopy ? (
        <CaseDetailModal caseStudy={openCase} copy={openCopy} onClose={close} labels={labels} />
      ) : null}
    </section>
  )
}
