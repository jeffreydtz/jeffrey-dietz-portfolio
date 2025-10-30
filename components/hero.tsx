"use client"

import Image from "next/image"
import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

export default function Hero() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={ref}
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-accent mb-2 inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  {t("hello")}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                {t("heroTitle")}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {t("heroDescription")}
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-4 py-2 bg-gradient-to-r from-accent/20 to-accent/10 text-accent rounded-full font-medium border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 cursor-default">
                {t("accentureBadge")}
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-accent/20 to-accent/10 text-accent rounded-full font-medium border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 cursor-default">
                {t("experienceBadge")}
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-accent/20 to-accent/10 text-accent rounded-full font-medium border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 cursor-default">
                {t("englishBadge")}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">{t("viewWork")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-border rounded-xl font-semibold hover:bg-muted hover:border-accent/50 transition-all duration-300 hover:scale-105"
              >
                {t("getInTouch")}
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-full aspect-square group">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Main card */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 rounded-3xl border border-border/50 backdrop-blur-sm flex items-center justify-center p-8 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
                <div className="text-center space-y-6">
                  <div className="flex justify-center mb-4 relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl animate-pulse" />
                    <Image
                      src="/logos/salesforce.jpeg"
                      alt="Salesforce CRM platform logo - Jeffrey Dietz specializes in Salesforce development, Apex, Lightning Web Components, and enterprise integrations"
                      width={120}
                      height={120}
                      className="object-contain relative z-10 drop-shadow-lg"
                      priority
                    />
                  </div>
                  <p className="text-foreground font-semibold text-lg">{t("salesforceEcosystem")}</p>
                  <div className="flex flex-wrap gap-2 justify-center px-4">
                    {["Apex", "LWC", "Flows", "APIs", "Integration"].map((tech, i) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full font-medium border border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-105 cursor-default"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
