"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/links"

export default function CvPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-10 print:px-0 print:py-0">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-10 print:hidden">
          <Link href="/" className="text-sm text-accent hover:underline">
            ← {t("cvBack")}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 rounded-lg border border-border text-sm font-semibold hover:border-accent/50"
            >
              {t("downloadCv")}
            </button>
          </div>
        </div>

        <header className="border-b border-border pb-6 mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-2">{t("cvTitle")}</p>
          <h1 className="text-4xl font-bold">Jeffrey Dietz</h1>
          <p className="text-lg text-accent mt-1">{t("heroTitle")}</p>
          <p className="text-sm text-muted-foreground mt-4 max-w-2xl">{t("heroDescription")}</p>
          <p className="text-sm font-mono text-muted-foreground mt-4">
            {EMAIL} · {LINKEDIN_URL.replace("https://", "")} · {GITHUB_URL.replace("https://", "")}
          </p>
          <p className="text-xs text-muted-foreground mt-2 print:hidden">{t("cvPrintHint")}</p>
        </header>

        <section className="mb-8">
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">{t("experienceTitle")}</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="font-semibold">Accenture — {t("accentureRole")}</p>
              <p className="text-muted-foreground">{t("accenturePeriod")}</p>
              <p className="text-muted-foreground mt-1">{t("accentureAch1")}</p>
            </li>
            <li>
              <p className="font-semibold">Avalian — {t("avalianRole")}</p>
              <p className="text-muted-foreground">{t("avalianPeriod")}</p>
            </li>
            <li>
              <p className="font-semibold">Deloitte — {t("deloitteRole")}</p>
              <p className="text-muted-foreground">{t("deloittePeriod")}</p>
            </li>
            <li>
              <p className="font-semibold">LBO — {t("lboRole")}</p>
              <p className="text-muted-foreground">{t("lboPeriod")}</p>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">{t("education")}</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <p className="font-semibold">{t("educationTitle")} — UAI</p>
              <p className="text-muted-foreground">{t("uaiPeriod")}</p>
            </li>
            <li>
              <p className="font-semibold">{t("universityDegreeTitle")} — Austral</p>
              <p className="text-muted-foreground">{t("australPeriod")}</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">{t("skillsTitle")}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Agentforce (orchestrators, scripting, Prompt Builder) · Apex · LWC · Integrations · Azure DevOps ·
            Grok Bot · Next.js · TypeScript · Python · Supabase · Computer vision
          </p>
        </section>
      </div>
    </main>
  )
}
