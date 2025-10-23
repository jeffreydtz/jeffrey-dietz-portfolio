"use client"

import { useLanguage } from "./language-context"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jeffrey Dietz.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="https://www.linkedin.com/in/jeffrey--dietz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {t("linkedIn")}
            </a>
            <a
              href="https://github.com/jeffrey-dietz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {t("gitHub")}
            </a>
            <a href="mailto:jeffreydietz33@gmail.com" className="hover:text-foreground transition-colors">
              {t("email")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
