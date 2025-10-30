"use client"

import { Mail, Linkedin, Github } from "lucide-react"
import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

export default function Contact() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-50 pointer-events-none" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("contactTitle")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            {t("contactDescription")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:jeffreydietz33@gmail.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105 overflow-hidden flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span className="relative z-10">{t("sendEmail")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeffrey--dietz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-border rounded-xl font-semibold hover:bg-muted hover:border-accent/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              {t("viewLinkedIn")}
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://www.linkedin.com/in/jeffrey--dietz"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-card/50 border border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            <a
              href="https://github.com/jeffrey-dietz"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-card/50 border border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            <a
              href="mailto:jeffreydietz33@gmail.com"
              className="group p-3 rounded-full bg-card/50 border border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 space-y-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">{t("location")}</strong> {t("locationValue")}
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">{t("languages")}</strong> {t("languagesValue")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
