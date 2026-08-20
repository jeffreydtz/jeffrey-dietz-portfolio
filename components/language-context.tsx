"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { Language, translations, TranslationKey } from "@/lib/translations"

const LANG_KEY = "jd-lang"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function readStoredLanguage(): Language {
  const stored = window.localStorage.getItem(LANG_KEY)
  if (stored === "en" || stored === "es") return stored
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const lang = readStoredLanguage()
    setLanguageState(lang)
    document.documentElement.lang = lang
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    window.localStorage.setItem(LANG_KEY, lang)
    document.documentElement.lang = lang
  }, [])

  const t = useCallback((key: TranslationKey): string => {
    return translations[language][key]
  }, [language])

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
