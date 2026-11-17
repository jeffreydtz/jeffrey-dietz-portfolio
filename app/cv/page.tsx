"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/links"

export default function CvPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground print:px-0 print:py-0">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-center justify-between gap-4 print:hidden">
          <Link href="/" className="btn-tertiary">
            ← {t("cvBack")}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button type="button" onClick={() => window.print()} className="btn-ghost">
              {t("downloadCv")}
            </button>
          </div>
        </div>

        <header className="mb-8 border-b border-border pb-6">
          <p className="micro-label mb-2 text-accent">{t("cvTitle")}</p>
          <h1 className="heading-3">Jeffrey Dietz</h1>
          <p className="title-2 mt-1 text-muted-foreground">{t("heroTitle")}</p>
          <p className="body-6 mt-4 max-w-[680px] text-muted-foreground">{t("heroDescription")}</p>
          <p className="mt-4 font-mono text-sm text-muted-foreground">
            {EMAIL} · {LINKEDIN_URL.replace("https://", "")} · {GITHUB_URL.replace("https://", "")}
          </p>
          <p className="caption-4 mt-2 text-muted-foreground print:hidden">{t("cvPrintHint")}</p>
        </header>

        <section className="mb-8">
          <h2 className="micro-label mb-3 text-accent">{t("experienceTitle")}</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="title-3">Accenture — {t("accentureRole")}</p>
              <p className="text-muted-foreground">{t("accenturePeriod")}</p>
              <p className="mt-1 text-muted-foreground">{t("accentureAch1")}</p>
            </li>
            <li>
              <p className="title-3">Avalian — {t("avalianRole")}</p>
              <p className="text-muted-foreground">{t("avalianPeriod")}</p>
            </li>
            <li>
              <p className="title-3">Deloitte — {t("deloitteRole")}</p>
              <p className="text-muted-foreground">{t("deloittePeriod")}</p>
            </li>
            <li>
              <p className="title-3">LBO — {t("lboRole")}</p>
              <p className="text-muted-foreground">{t("lboPeriod")}</p>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="micro-label mb-3 text-accent">{t("education")}</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <p className="title-3">{t("educationTitle")} — UAI</p>
              <p className="text-muted-foreground">{t("uaiPeriod")}</p>
            </li>
            <li>
              <p className="title-3">{t("universityDegreeTitle")} — Austral</p>
              <p className="text-muted-foreground">{t("australPeriod")}</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="micro-label mb-3 text-accent">{t("skillsTitle")}</h2>
          <p className="body-6 text-muted-foreground">
            Agentforce (orchestrators, scripting, Prompt Builder) · Apex · LWC · Integrations · Azure DevOps ·
            Grok Bot · Next.js · TypeScript · Python · Supabase · Computer vision
          </p>
        </section>
      </div>
    </main>
  )
}
