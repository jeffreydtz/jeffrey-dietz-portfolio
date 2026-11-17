"use client"

import { ExternalLink, Github, Lock, Sparkles } from "lucide-react"
import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"
import { earlyWork, featuredProducts, moreProducts, type Product } from "@/lib/products"

function BrowserFrame({
  src,
  alt,
  href,
  domain,
}: {
  src: string
  alt: string
  href?: string
  domain?: string
}) {
  const frame = (
    <div className="rounded-xl overflow-hidden border border-border/60 bg-background/80 shadow-lg transition-all duration-500 group-hover:shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/60 border-b border-border/50">
        <span className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </span>
        {domain ? (
          <span className="ml-2 flex-1 text-center text-[11px] font-mono text-muted-foreground truncate bg-background/60 rounded-md px-3 py-0.5">
            {domain}
          </span>
        ) : null}
      </div>
      <div className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element -- local screenshots, object-top crop */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full aspect-[16/10] max-h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  )
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
      {frame}
    </a>
  ) : (
    frame
  )
}

function ProductLinks({ product }: { product: Product }) {
  const { t } = useLanguage()
  return (
    <div className="flex flex-wrap items-center gap-2">
      {product.links.live ? (
        <a
          href={product.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 hover:scale-105"
          style={{
            color: product.accent,
            borderColor: `${product.accent}55`,
            backgroundColor: `${product.accent}1a`,
          }}
        >
          <ExternalLink className="w-3.5 h-3.5" />
          {t("liveApp")}
        </a>
      ) : null}
      {product.links.code ? (
        <a
          href={product.links.code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-border/60 text-foreground bg-background/60 hover:border-accent/50 transition-all duration-300 hover:scale-105"
        >
          <Github className="w-3.5 h-3.5" />
          {t("viewCode")}
        </a>
      ) : null}
      {product.links.privateRepo ? (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-border/50 text-muted-foreground bg-background/40">
          <Lock className="w-3.5 h-3.5" />
          {t("privateRepo")}
        </span>
      ) : null}
    </div>
  )
}

export default function Products() {
  const { t, language } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="products"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent">{t("productsKicker")}</span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("personalProjectsTitle")}
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl text-lg">{t("personalProjectsDescription")}</p>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProducts.map((project) => {
              const content = project[language]
              return (
                <article
                  key={project.id}
                  style={{ "--project-accent": project.accent } as React.CSSProperties}
                  className={`group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 overflow-hidden hover:border-[color:color-mix(in_oklab,var(--project-accent)_60%,transparent)] hover:shadow-[0_25px_60px_-12px_color-mix(in_oklab,var(--project-accent)_25%,transparent)] ${
                    project.featured ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                  />
                  <div className="relative z-10">
                    {project.screenshot ? (
                      <div className="mb-8">
                        <BrowserFrame
                          src={project.screenshot}
                          alt={`${content.title} — ${content.tagline}`}
                          href={project.links.live}
                          domain={project.links.live?.replace(/^https?:\/\//, "")}
                        />
                      </div>
                    ) : null}
                    <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground transition-colors duration-300 group-hover:text-[color:var(--project-accent)]">
                          {content.title}
                        </h3>
                        <p className="text-sm font-medium mt-1" style={{ color: project.accent }}>
                          {content.tagline}
                        </p>
                      </div>
                      <span
                        className="px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap border"
                        style={{
                          color: project.accent,
                          borderColor: `${project.accent}33`,
                          backgroundColor: `${project.accent}1a`,
                        }}
                      >
                        {content.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-base">{content.description}</p>
                    {content.features.length > 0 ? (
                      <ul className={`mb-6 gap-2 ${project.featured ? "grid md:grid-cols-2 gap-x-8" : "space-y-2"}`}>
                        {content.features.map((feature) => (
                          <li key={feature} className="text-sm text-muted-foreground flex items-start gap-3">
                            <span className="mt-1.5" style={{ color: project.accent }}>
                              ▹
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="mb-6">
                      <ProductLinks product={project} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-full border"
                          style={{
                            color: project.accent,
                            borderColor: `${project.accent}33`,
                            backgroundColor: `${project.accent}14`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              {t("sideProjectsTitle")}
            </h3>
            <p className="text-muted-foreground mb-10 max-w-2xl">{t("sideProjectsDescription")}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {moreProducts.map((project) => {
                const content = project[language]
                return (
                  <article
                    key={project.id}
                    style={{ "--project-accent": project.accent } as React.CSSProperties}
                    className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  >
                    {project.screenshot ? (
                      <div className="p-6 pb-0">
                        <BrowserFrame
                          src={project.screenshot}
                          alt={`${content.title} — ${content.tagline}`}
                          href={project.links.live}
                          domain={project.links.live?.replace(/^https?:\/\//, "")}
                        />
                      </div>
                    ) : null}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-foreground">{content.title}</h4>
                      <p className="text-sm font-medium mt-1 mb-3" style={{ color: project.accent }}>
                        {content.tagline}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{content.description}</p>
                      <div className="mb-4">
                        <ProductLinks product={project} />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] font-medium rounded-full border"
                            style={{
                              color: project.accent,
                              borderColor: `${project.accent}33`,
                              backgroundColor: `${project.accent}14`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold mb-2">{t("earlyWorkTitle")}</h3>
            <p className="text-sm text-muted-foreground mb-6">{t("earlyWorkDescription")}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {earlyWork.map((project) => {
                const content = project[language]
                return (
                  <a
                    key={project.id}
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-border/50 bg-card/40 hover:border-accent/40 transition-colors"
                  >
                    <p className="font-semibold text-foreground">{content.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{content.tagline}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
