"use client"

import { useLanguage } from "./language-context"
import { cn } from "@/lib/utils"

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex items-center" role="group" aria-label={t("languageSwitcher")}>
      <div className="flex gap-1 rounded-lg border border-border bg-background/40 p-1">
        <button
          type="button"
          onClick={() => setLanguage("en")}
          aria-pressed={language === "en"}
          className={cn(
            "button-sm rounded-md px-3 py-2 transition-colors duration-300 focus-visible:outline-none",
            language === "en" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage("es")}
          aria-pressed={language === "es"}
          className={cn(
            "button-sm rounded-md px-3 py-2 transition-colors duration-300 focus-visible:outline-none",
            language === "es" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          ES
        </button>
      </div>
    </div>
  )
}
