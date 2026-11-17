"use client"

import Image from "next/image"
import { useLanguage } from "./language-context"
import Reveal from "./reveal"
import TaglineReveal from "./tagline-reveal"

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
    <div className="glass-card flex shrink-0 items-center gap-5 rounded-2xl px-6 py-3">
      <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-border bg-background/80 p-2">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={40}
          height={40}
          className="object-contain opacity-80"
          loading="lazy"
        />
      </div>
      <div className="flex min-w-0 flex-col">
        <span className="title-3">{name}</span>
        <span className="micro-label truncate text-muted-foreground">{tag}</span>
      </div>
    </div>
  )
}

export default function CompaniesMarquee() {
  const { t } = useLanguage()

  const items = COMPANIES.map((company) => ({
    ...company,
    tag: t(company.tagKey),
  }))
  const track = [...items, ...items]

  return (
    <section aria-label={t("companiesMarqueeA11y")} className="relative overflow-hidden py-16 md:py-24">
      <Reveal className="section-inner px-4 sm:px-6 lg:px-8">
        <p className="chip mb-6">{t("companiesMarqueeBadge")}</p>
        <TaglineReveal text={t("companiesMarqueeTitle")} />
        <p className="body-6 mt-4 max-w-[680px] text-muted-foreground">{t("companiesMarqueeSubtitle")}</p>
      </Reveal>

      <div className="marquee relative mt-10">
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

      <p className="micro-label mt-6 px-4 text-center text-muted-foreground/70">{t("companiesMarqueeDisclaimer")}</p>
    </section>
  )
}
