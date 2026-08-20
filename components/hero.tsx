"use client"

import dynamic from "next/dynamic"
import { useCallback, useMemo, useRef, useState } from "react"
import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"
import { useCoarsePointer } from "@/lib/use-motion-prefs"
import type { CloudNodeDef } from "./three/SalesforceCloud"

const SalesforceCloud = dynamic(() => import("./three/SalesforceCloud"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-[#00A1E0]/20 blur-2xl animate-pulse" />
    </div>
  ),
})

const MARQUEE_ITEMS = [
  "Apex",
  "Lightning Web Components",
  "Agentforce",
  "Flows",
  "REST API",
  "OAuth 2.0",
  "Batch Apex",
  "SOQL",
  "Claude API",
  "MCP",
  "Computer Vision",
  "Python",
  "FastAPI",
  "Next.js",
  "TypeScript",
  "Supabase",
  "AI Agents",
]

function MagneticButton({
  children,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode
  onClick: () => void
  variant?: "primary" | "ghost"
}) {
  const ref = useRef<HTMLButtonElement>(null)

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = "translate(0px, 0px)"
  }

  const base =
    "relative px-8 py-4 rounded-xl font-semibold transition-[transform,box-shadow,background] duration-300 will-change-transform overflow-hidden"
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:shadow-[0_0_40px_-5px_var(--accent)] glow-edge"
      : "border border-border/70 hover:border-accent/60 bg-background/50 backdrop-blur-md text-foreground hover:bg-muted/60"

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${styles}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()
  const coarse = useCoarsePointer()
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const cloudNodes: CloudNodeDef[] = useMemo(
    () => [
      { id: "apex", label: "Apex", hint: t("cloudNodeApexHint"), target: "skills" },
      { id: "lwc", label: "LWC", hint: t("cloudNodeLwcHint"), target: "skills" },
      { id: "flows", label: "Flows", hint: t("cloudNodeFlowsHint"), target: "skills" },
      { id: "agentforce", label: "Agentforce", hint: t("cloudNodeAgentforceHint"), target: "skills" },
      { id: "apis", label: "APIs", hint: t("cloudNodeApisHint"), target: "projects" },
    ],
    [t],
  )

  return (
    <section id="hero" className="relative px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[92vh] flex items-center pt-8 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          {/* LEFT: copy */}
          <div
            ref={ref}
            className={`space-y-7 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border/60 bg-background/40 backdrop-blur-md text-xs font-mono tracking-wider uppercase text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-accent">{t("hello")}</span>
              <span className="text-border">/</span>
              <span>Salesforce × AI × Systems Eng.</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.02] tracking-tight">
              <span className="shimmer-text">{t("heroTitle")}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {t("heroDescription")}
            </p>

            <div className="flex flex-wrap gap-2.5 text-sm">
              {[t("accentureBadge"), t("experienceBadge"), t("aiBadge"), t("englishBadge")].map((b, i) => (
                <span
                  key={i}
                  className="group px-4 py-2 rounded-full font-medium border border-accent/25 bg-gradient-to-br from-accent/15 to-transparent text-accent backdrop-blur-md hover:border-accent/60 hover:shadow-[0_0_20px_-5px_var(--accent)] transition-all duration-300 cursor-default"
                >
                  <span className="opacity-70 mr-1.5 text-[10px] font-mono">{String(i + 1).padStart(2, "0")}</span>
                  {b}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <MagneticButton onClick={() => scrollToSection("projects")} variant="primary">
                {t("viewWork")}
                <span aria-hidden className="ml-1">→</span>
              </MagneticButton>
              <MagneticButton onClick={() => scrollToSection("contact")} variant="ghost">
                {t("getInTouch")}
              </MagneticButton>
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-3 pt-6 max-w-lg">
              {[
                { k: t("heroStat1k"), v: t("heroStat1v") },
                { k: t("heroStat2k"), v: t("heroStat2v") },
                { k: t("heroStat3k"), v: t("heroStat3v") },
              ].map((s, i) => (
                <div
                  key={i}
                  className="px-4 py-3 rounded-xl border border-border/50 bg-card/40 backdrop-blur-md hover:border-accent/40 transition-colors"
                >
                  <div className="text-2xl font-bold bg-gradient-to-br from-foreground to-accent/80 bg-clip-text text-transparent">
                    {s.k}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: 3D Salesforce cloud */}
          <div className="relative w-full aspect-square max-w-[640px] mx-auto mb-10">
            <p className="sr-only">{t("cloudA11y")}</p>

            {/* Glow halo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(159,228,248,0.45),transparent_60%)] blur-2xl pointer-events-none" />

            {/* Frame */}
            <div className="absolute inset-0 rounded-[2rem] border border-[#00A1E0]/20 backdrop-blur-[2px] pointer-events-none" />

            {/* Corner tickmarks */}
            {[
              "top-3 left-3 border-t border-l",
              "top-3 right-3 border-t border-r",
              "bottom-3 left-3 border-b border-l",
              "bottom-3 right-3 border-b border-r",
            ].map((c, i) => (
              <span
                key={i}
                className={`absolute w-5 h-5 border-[#00A1E0]/60 pointer-events-none ${c}`}
              />
            ))}

            {/* HUD top label */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-[#00A1E0]/10 border border-[#00A1E0]/30 text-[10px] font-mono uppercase tracking-[0.2em] text-[#7FD2F5] pointer-events-none">
              ☁ Salesforce · Cloud Stack
            </div>

            {/* HUD bottom chips — keyboard/touch counterpart to 3D nodes */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-wrap gap-2 justify-center max-w-[90%] pointer-events-none">
              {cloudNodes.map((node) => {
                const active = hoveredNode === node.id
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => scrollToSection(node.target)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onFocus={() => setHoveredNode(node.id)}
                    onBlur={() => setHoveredNode(null)}
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-full border backdrop-blur-md transition-all duration-200 pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A1E0]/80 ${
                      active
                        ? "border-[#00A1E0] bg-[#00A1E0]/25 text-white shadow-[0_0_16px_-4px_#00A1E0] scale-105"
                        : "border-[#00A1E0]/40 bg-background/70 text-[#7FD2F5] hover:border-[#00A1E0]/80"
                    }`}
                  >
                    {node.label}
                  </button>
                )
              })}
            </div>

            <div className="relative w-full h-full">
              <SalesforceCloud
                nodes={cloudNodes}
                hoveredId={hoveredNode}
                onNodeHover={setHoveredNode}
                onNodeSelect={(_id, target) => scrollToSection(target)}
              />
            </div>

            <p className="absolute -bottom-8 left-0 right-0 text-center text-xs text-muted-foreground font-mono pointer-events-none">
              {coarse ? t("cloudHintMobile") : t("cloudHintDesktop")}
            </p>
          </div>
        </div>

        {/* Marquee ticker */}
        <div className="mt-20 marquee border-y border-border/40 py-4 bg-background/30 backdrop-blur-sm">
          <div className="marquee-track gap-12">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-12 text-sm font-mono uppercase tracking-[0.25em] text-muted-foreground"
              >
                {item}
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
