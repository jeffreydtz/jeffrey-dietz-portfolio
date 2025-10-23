"use client"

import { useLanguage } from "./language-context"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex gap-1 bg-muted rounded-lg p-1">
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
            language === "en"
              ? "bg-accent text-accent-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("es")}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
            language === "es"
              ? "bg-accent text-accent-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          ES
        </button>
      </div>
    </div>
  )
}
