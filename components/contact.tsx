"use client"

import { useState } from "react"
import { useLanguage } from "./language-context"
import Reveal from "./reveal"
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/links"

export default function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="micro-label mb-4 text-accent">05 · {t("contact")}</p>
          <h2 className="heading-3 mb-4">{t("contactTitle")}</h2>
          <p className="body-3 mb-8 text-lg text-muted-foreground">{t("contactDescription")}</p>

          <p className="mb-10">
            <a href={`mailto:${EMAIL}`} className="font-mono text-sm text-accent md:text-base">
              {EMAIL}
            </a>
          </p>

          <div className="mb-12 flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
            <a href={`mailto:${EMAIL}`} className="btn-primary px-6 py-3">
              {t("sendEmail")}
            </a>
            <button type="button" onClick={copyEmail} className="btn-ghost px-6 py-3">
              {copied ? t("emailCopied") : t("copyEmail")}
            </button>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost px-6 py-3">
              {t("viewLinkedIn")}
            </a>
            <a href="/cv" className="btn-ghost px-6 py-3">
              {t("viewCv")}
            </a>
          </div>

          <div className="mb-12 flex justify-center gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl px-4 py-3 title-4"
              aria-label="LinkedIn"
            >
              {t("linkedIn")}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl px-4 py-3 title-4"
              aria-label="GitHub"
            >
              {t("gitHub")}
            </a>
            <a href={`mailto:${EMAIL}`} className="glass-card rounded-xl px-4 py-3 title-4" aria-label="Email">
              {t("email")}
            </a>
          </div>

          <div className="space-y-4 border-t border-border pt-8">
            <p className="body-6 text-muted-foreground">
              <strong className="font-medium text-foreground">{t("location")}</strong> {t("locationValue")}
            </p>
            <p className="body-6 text-muted-foreground">
              <strong className="font-medium text-foreground">{t("languages")}</strong> {t("languagesValue")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
