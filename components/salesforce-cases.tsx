"use client"

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react"
import { useLanguage } from "./language-context"
import Reveal from "./reveal"
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
    return <span className="chip">{label}</span>
  }

  return (
    <span className="chip gap-2 text-accent">
      <span className="h-2 w-2 rounded-full bg-accent" />
      {label}
    </span>
  )
}

function CaseField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="micro-label mb-2 text-accent">{label}</h4>
      <p className="body-6 text-muted-foreground">{children}</p>
    </div>
  )
}

function StackChips({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span key={tech} className="chip">
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
      <button type="button" className="absolute inset-0 bg-black/80 backdrop-blur-sm" aria-label={labels.close} onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="glass-card relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-[#181818]/90 p-6 pb-4 backdrop-blur-md">
          <div className="space-y-3 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <CaseBadge status={caseStudy.status} label={copy.badge} />
              <span className="micro-label rounded-lg bg-muted px-3 py-2 text-muted-foreground">{copy.client}</span>
            </div>
            <h3 id={titleId} className="heading-5 text-balance">
              {copy.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="btn-ghost shrink-0 px-3 py-2"
            aria-label={labels.close}
          >
            {labels.close}
          </button>
        </div>

        <div className="space-y-6 p-6">
          <CaseField label={labels.problem}>{copy.problem}</CaseField>
          <CaseField label={labels.approach}>{copy.approach}</CaseField>
          <CaseField label={labels.design}>{copy.designDecisions}</CaseField>
          <CaseField label={labels.outcome}>{copy.outcome}</CaseField>
          <div>
            <h4 className="micro-label mb-3 text-accent">{labels.stack}</h4>
            <StackChips stack={caseStudy.stack} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SalesforceCases() {
  const { t, language } = useLanguage()
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
    () => (filter === "all" ? salesforceCases : salesforceCases.filter((item) => item.areas.includes(filter))),
    [filter],
  )

  const openCase = openId ? salesforceCases.find((item) => item.id === openId) : undefined
  const openCopy = openCase?.[language]

  const open = useCallback((id: string) => setOpenId(id), [])
  const close = useCallback(() => setOpenId(null), [])

  return (
    <section id="salesforce-cases" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <p className="micro-label mb-4 text-accent">{t("salesforceCasesKicker")}</p>
          <h2 className="heading-3 mb-4">{t("salesforceCasesTitle")}</h2>
          <p className="body-3 mb-8 max-w-[680px] text-lg text-muted-foreground">{t("salesforceCasesDescription")}</p>

          <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label={t("salesforceCasesFiltersLabel")}>
            <button
              type="button"
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
              className={filter === "all" ? "btn-primary" : "btn-ghost"}
            >
              {t("salesforceCasesFilterAll")}
            </button>
            {CASE_AREAS.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => setFilter(area)}
                aria-pressed={filter === area}
                className={filter === area ? "btn-primary" : "btn-ghost"}
              >
                {area}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {visibleCases.map((item) => {
              const copy = item[language]
              const comingSoon = item.status === "comingSoon"
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => open(item.id)}
                  className={`glass-card group rounded-2xl p-8 text-left focus-visible:outline-none ${
                    comingSoon ? "border-dashed" : ""
                  }`}
                >
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="heading-6 pr-2">{copy.title}</h3>
                      <CaseBadge status={item.status} label={copy.badge} />
                    </div>
                    <p className="micro-label text-muted-foreground">{copy.client}</p>
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
                      <h4 className="micro-label mb-3 text-accent">{labels.stack}</h4>
                      <StackChips stack={item.stack} />
                    </div>
                    <p className="caption-4 text-muted-foreground group-hover:text-foreground">{t("salesforceCasesOpenHint")}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </Reveal>
      </div>

      {openCase && openCopy ? (
        <CaseDetailModal caseStudy={openCase} copy={openCopy} onClose={close} labels={labels} />
      ) : null}
    </section>
  )
}
