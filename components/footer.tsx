"use client"

import { useLanguage } from "./language-context"
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/links"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="body-6 text-muted-foreground">
          © {currentYear} Jeffrey Dietz. {t("builtWith")}
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-foreground">
            {t("linkedIn")}
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-foreground">
            {t("gitHub")}
          </a>
          <a href="/cv" className="transition-colors duration-300 hover:text-foreground">
            {t("viewCv")}
          </a>
          <a href="mailto:jeffreydietz33@gmail.com" className="transition-colors duration-300 hover:text-foreground">
            {t("email")}
          </a>
        </div>
      </div>
    </footer>
  )
}
