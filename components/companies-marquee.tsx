"use client"

import Image from "next/image"
import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

const COMPANIES = [
  {
    name: "Accenture",
    logo: "/logos/accenture.jpeg",
    tagKey: "companyTagAccenture" as const,
  },
  {
    name: "Avalian",
    logo: "/logos/avalian.png",
    tagKey: "companyTagAvalian" as const,
  },
  {
    name: "Deloitte",
    logo: "/logos/deloitte.jpeg",
    tagKey: "companyTagDeloitte" as const,
  },
  {
    name: "LBO",
    logo: "/logos/lbo.png",
    tagKey: "companyTagLbo" as const,
  },
] as const

function LogoCard({
  name,
  logo,
  tag,
}: {
  name: string
  logo: string
  tag: string
}) {
  return (
    <div className="group flex shrink-0 items-center gap-5 px-6 py-3 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-accent/40 hover:bg-card/50 transition-all duration-300">
      <div className="relative w-14 h-14 rounded-xl bg-background/80 border border-border/50 flex items-center justify-center overflow-hidden p-2 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_-8px_var(--accent)] transition-all duration-300">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={40}
          height={40}
          className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-base font-semibold text-foreground/90 group-hover:text-accent transition-colors duration-300">
          {name}
        </span>
        <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/80 truncate">
          {tag}
        </span>
      </div>
    </div>
  )
}

export default function CompaniesMarquee() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const items = COMPANIES.map((company) => ({
    ...company,
    tag: t(company.tagKey),
  }))
  const track = [...items, ...items]

  return (
    <section
      aria-label={t("companiesMarqueeA11y")}
      className="relative py-16 md:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[11px] font-mono uppercase tracking-[0.2em] text-accent mb-4">
            <span aria-hidden>✦</span>
            {t("companiesMarqueeBadge")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-balance mb-3">
            {t("companiesMarqueeTitle")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            {t("companiesMarqueeSubtitle")}
          </p>
        </div>
      </div>

      <div className="marquee relative">
        <div className="marquee-track gap-6 px-4">
          {track.map((company, i) => (
            <LogoCard
              key={`${company.name}-${i}`}
              name={company.name}
              logo={company.logo}
              tag={company.tag}
            />
          ))}
        </div>
      </div>

      <p className="text-center text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground/50 mt-6 px-4">
        {t("companiesMarqueeDisclaimer")}
      </p>
    </section>
  )
}
