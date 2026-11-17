"use client"

import dynamic from "next/dynamic"
import { useCallback, useMemo, useState } from "react"
import { useLanguage } from "./language-context"
import OrchestratorFallback from "./orchestrator-fallback"
import { useCanvasMode } from "@/lib/use-motion-prefs"
import type { CloudNodeDef } from "@/lib/cloud-nodes"

const OrchestratorCloud = dynamic(() => import("./three/OrchestratorCloud"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
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
  "Grok Bot",
  "Azure DevOps",
  "PWA",
]

export default function Hero() {
  const { t } = useLanguage()
  const canvasMode = useCanvasMode()
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
      { id: "apis", label: "APIs", hint: t("cloudNodeApisHint"), target: "salesforce-cases" },
    ],
    [t],
  )

  const visualNodes = cloudNodes.filter((node) => node.id !== "agentforce")
  const hovered = cloudNodes.find((node) => node.id === hoveredNode)
  const badges = [t("accentureBadge"), t("experienceBadge"), t("aiBadge"), t("englishBadge")]

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8"
    >
      <div className="section-inner">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-8 lg:col-span-6">
            <p className="micro-label text-muted-foreground">
              <span className="text-foreground">{t("hello")}</span>
              <span className="mx-3 text-border">·</span>
              <span>{t("heroEyebrow")}</span>
            </p>

            <h1 className="heading-1 hero-heading max-w-[680px] text-5xl sm:text-6xl lg:text-7xl">
              {t("heroTitle")}
            </h1>

            <p className="body-3 max-w-[680px] text-lg text-muted-foreground">{t("heroDescription")}</p>

            <p className="micro-label max-w-[680px] text-muted-foreground">{badges.join("  ·  ")}</p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button type="button" onClick={() => scrollToSection("products")} className="btn-primary px-6 py-3">
                {t("viewWork")}
                <span aria-hidden>→</span>
              </button>
              <button type="button" onClick={() => scrollToSection("contact")} className="btn-tertiary">
                {t("getInTouch")}
              </button>
              <a href="/cv" className="btn-tertiary">
                {t("viewCv")}
              </a>
            </div>

            <div className="grid max-w-lg grid-cols-3 gap-8 pt-4">
              {[
                { k: t("heroStat1k"), v: t("heroStat1v") },
                { k: t("heroStat2k"), v: t("heroStat2v") },
                { k: t("heroStat3k"), v: t("heroStat3v") },
              ].map((stat) => (
                <div key={stat.v}>
                  <div className="metric-k">{stat.k}</div>
                  <div className="micro-label mt-1 text-muted-foreground">{stat.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[640px] lg:col-span-6">
            <p className="sr-only">{t("cloudA11y")}</p>
            <div className="relative aspect-square w-full">
              <div className="pointer-events-none absolute inset-8 rounded-full bg-[radial-gradient(circle_at_50%_50%,color-mix(in_srgb,var(--accent)_10%,transparent),transparent_68%)] blur-3xl" />
              <div className="absolute inset-0">
                <OrchestratorFallback
                  nodes={visualNodes}
                  hoveredId={hoveredNode}
                  onNodeHover={setHoveredNode}
                  onNodeSelect={(_id, target) => scrollToSection(target)}
                />
                {canvasMode === "3d" ? (
                  <div className="absolute inset-0">
                    <OrchestratorCloud
                      nodes={visualNodes}
                      hoveredId={hoveredNode}
                      onNodeHover={setHoveredNode}
                      onNodeSelect={(_id, target) => scrollToSection(target)}
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
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
                    className={`micro-label transition-colors duration-300 focus-visible:outline-none ${
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {node.label}
                  </button>
                )
              })}
            </div>
            <p className="micro-label mt-2 text-center text-muted-foreground/80">
              {hovered ? hovered.hint : canvasMode === "3d" ? t("cloudHintDesktop") : t("cloudHintMobile")}
            </p>
          </div>
        </div>

        <div className="marquee mt-16 border-y border-border/70 py-4">
          <div className="marquee-track gap-12">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={`${item}-${i}`} className="micro-label flex items-center gap-12 text-muted-foreground">
                {item}
                <span className="h-1 w-1 rounded-full bg-foreground/30" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
