"use client"

import { useLanguage } from "./language-context"
import Reveal from "./reveal"
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
    <div className="overflow-hidden rounded-xl border border-border bg-background/80">
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#313131]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#313131]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#313131]" />
        </span>
        {domain ? (
          <span className="micro-label ml-2 flex-1 truncate rounded-md bg-background/60 px-3 py-1 text-center text-muted-foreground">
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
          className="aspect-[16/10] max-h-[480px] w-full object-cover object-top"
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
          className="btn-ghost"
        >
          {t("liveApp")}
        </a>
      ) : null}
      {product.links.code ? (
        <a
          href={product.links.code}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          {t("viewCode")}
        </a>
      ) : null}
      {product.links.privateRepo ? (
        <span className="chip">{t("privateRepo")}</span>
      ) : null}
    </div>
  )
}

export default function Products() {
  const { t, language } = useLanguage()

  return (
    <section id="products" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <p className="micro-label mb-4 text-accent">{t("productsKicker")}</p>
          <h2 className="heading-3 mb-4">{t("personalProjectsTitle")}</h2>
          <p className="body-3 mb-12 max-w-[680px] text-lg text-muted-foreground">{t("personalProjectsDescription")}</p>

          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProducts.map((project) => {
              const content = project[language]
              return (
                <article
                  key={project.id}
                  className={`glass-card rounded-2xl p-8 ${project.featured ? "lg:col-span-2" : ""}`}
                >
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
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="heading-5">{content.title}</h3>
                      <p className="title-4 mt-1 text-muted-foreground">{content.tagline}</p>
                    </div>
                    <span className="chip">{content.status}</span>
                  </div>
                  <p className="body-6 mb-6 text-muted-foreground">{content.description}</p>
                  {content.features.length > 0 ? (
                    <ul className={`mb-6 gap-2 ${project.featured ? "grid gap-x-8 md:grid-cols-2" : "space-y-2"}`}>
                      {content.features.map((feature) => (
                        <li key={feature} className="body-6 flex items-start gap-3 text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
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
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-20">
            <h3 className="heading-4 mb-3">{t("sideProjectsTitle")}</h3>
            <p className="body-6 mb-10 max-w-[680px] text-muted-foreground">{t("sideProjectsDescription")}</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {moreProducts.map((project) => {
                const content = project[language]
                return (
                  <article key={project.id} className="glass-card overflow-hidden rounded-2xl">
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
                      <h4 className="title-1">{content.title}</h4>
                      <p className="title-4 mt-1 mb-3 text-muted-foreground">{content.tagline}</p>
                      <p className="body-6 mb-4 text-muted-foreground">{content.description}</p>
                      <div className="mb-4">
                        <ProductLinks product={project} />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="chip">
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
            <h3 className="heading-6 mb-2">{t("earlyWorkTitle")}</h3>
            <p className="body-6 mb-6 text-muted-foreground">{t("earlyWorkDescription")}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {earlyWork.map((project) => {
                const content = project[language]
                return (
                  <a
                    key={project.id}
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-xl p-4"
                  >
                    <p className="title-3">{content.title}</p>
                    <p className="caption-4 mt-1 text-muted-foreground">{content.tagline}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
