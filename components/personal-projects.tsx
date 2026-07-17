"use client"

import { ExternalLink, Github, Lock, Sparkles } from "lucide-react"
import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

type ProjectLinks = {
  live?: string
  code?: string
  privateRepo?: boolean
}

type ProjectContent = {
  title: string
  tagline: string
  description: string
  features: string[]
  status: string
  impact: string
}

type Project = {
  accent: string
  featured?: boolean
  technologies: string[]
  links: ProjectLinks
  en: ProjectContent
  es: ProjectContent
}

const personalProjects: Project[] = [
  {
    accent: "#10b981",
    featured: true,
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Gemini AI",
      "Telegram Bot",
      "Mercado Pago",
      "Vercel",
    ],
    links: { live: "https://zarix-phi.vercel.app", code: "https://github.com/jeffreydtz/zarix" },
    en: {
      title: "Zarix",
      tagline: "AI-Powered Personal Finance Platform",
      description:
        "Full personal-finance SaaS for Argentina: dashboard, movements, investments, budgets and shared expenses — plus a Telegram bot that logs expenses from plain text, voice notes or receipt photos using AI. Subscription billing through Mercado Pago.",
      features: [
        "AI Telegram bot: register expenses via text, voice or receipt photo (Gemini)",
        "65+ API routes on Next.js App Router with Supabase Auth + RLS",
        "Mercado Pago subscription billing with secure webhooks",
        "Live market data: dollar rates, crypto and stocks, on scheduled crons",
        "Tricount-style shared expenses via public links — guests need no account",
      ],
      status: "Live in Production",
      impact: "Real users, real money, shipped solo",
    },
    es: {
      title: "Zarix",
      tagline: "Plataforma de Finanzas Personales con IA",
      description:
        "SaaS completo de finanzas personales para Argentina: dashboard, movimientos, inversiones, presupuestos y gastos compartidos — más un bot de Telegram que registra gastos desde texto, notas de voz o fotos de tickets usando IA. Suscripciones con Mercado Pago.",
      features: [
        "Bot de Telegram con IA: registra gastos por texto, voz o foto de ticket (Gemini)",
        "65+ rutas API en Next.js App Router con Supabase Auth + RLS",
        "Facturación por suscripción con Mercado Pago y webhooks seguros",
        "Datos de mercado en vivo: dólar, cripto y acciones, con crons programados",
        "Gastos compartidos estilo Tricount vía links públicos — sin cuenta para invitados",
      ],
      status: "En Producción",
      impact: "Usuarios reales, dinero real, construido solo",
    },
  },
  {
    accent: "#2e7dff",
    technologies: ["Python", "FastAPI", "Celery", "YOLO11", "PyTorch", "React", "Redis", "Docker"],
    links: { privateRepo: true },
    en: {
      title: "BeProPlayer",
      tagline: "AI Football Video Analysis SaaS",
      description:
        '"Play like a pro. Get analyzed like one." Computer-vision platform where amateur players upload match footage, the pipeline detects and tracks every player, the user tap-selects themselves on frame, and gets a pro-style performance report — distance, sprints, top speed, heatmap — as PDF, CSV or share link.',
      features: [
        "CV pipeline: YOLO11 + SAHI detection, BoT-SORT tracking, team clustering, jersey OCR",
        "FastAPI + Celery backend with serverless GPU inference and React web app",
        "On-frame click-to-select player identification (corner-camera view)",
        "Resumable uploads, SSRF-guarded link ingestion, share-link lifecycle",
        "B2B white-label API keys and full ES/EN i18n",
      ],
      status: "MVP Built · GPU Pipeline in Progress",
      impact: "End-to-end product: research → CV → SaaS",
    },
    es: {
      title: "BeProPlayer",
      tagline: "SaaS de Análisis de Video de Fútbol con IA",
      description:
        '"Jugá como un pro. Analizate como uno." Plataforma de visión por computadora: jugadores amateur suben video del partido, el pipeline detecta y trackea a cada jugador, el usuario se selecciona tocando el frame y recibe un informe de rendimiento estilo profesional — distancia, sprints, velocidad máxima, heatmap — como PDF, CSV o link compartible.',
      features: [
        "Pipeline CV: detección YOLO11 + SAHI, tracking BoT-SORT, clustering de equipos, OCR de camisetas",
        "Backend FastAPI + Celery con inferencia GPU serverless y webapp React",
        "Identificación del jugador tocando el frame (vista cámara de esquina)",
        "Uploads reanudables, ingesta de links con protección SSRF, ciclo de vida de links compartidos",
        "API keys white-label B2B e i18n completo ES/EN",
      ],
      status: "MVP Construido · Pipeline GPU en Progreso",
      impact: "Producto de punta a punta: research → CV → SaaS",
    },
  },
  {
    accent: "#00a1e0",
    technologies: ["Node.js", "Claude API", "Puppeteer", "Telegram API", "LinkedIn API", "X API", "Supabase"],
    links: { privateRepo: true },
    en: {
      title: "Salesforce AI Content Bot",
      tagline: "Autonomous AI Content Pipeline",
      description:
        "Fully automated weekly pipeline: scrapes Salesforce ecosystem news, Claude generates Spanish posts and branded infographics, a human approves via Telegram, and it auto-publishes to LinkedIn and X with engagement metrics tracked in Supabase.",
      features: [
        "Claude API content generation with repeat-guard topic memory",
        "Branded infographics rendered with Puppeteer (retina, anti-overflow layout)",
        "Human-in-the-loop approval gate via Telegram before anything publishes",
        "LinkedIn + X publishing over OAuth, scheduled with cron",
        "Engagement metrics persisted in Supabase",
      ],
      status: "Running Weekly in Production",
      impact: "Agentic pipeline with human approval gate",
    },
    es: {
      title: "Salesforce AI Content Bot",
      tagline: "Pipeline Autónomo de Contenido con IA",
      description:
        "Pipeline semanal totalmente automatizado: scrapea noticias del ecosistema Salesforce, Claude genera posts en español e infografías con marca, un humano aprueba vía Telegram y publica automáticamente en LinkedIn y X con métricas de engagement en Supabase.",
      features: [
        "Generación de contenido con Claude API y memoria de temas anti-repetición",
        "Infografías con marca renderizadas con Puppeteer (retina, layout anti-desborde)",
        "Aprobación humana vía Telegram antes de publicar cualquier cosa",
        "Publicación en LinkedIn + X con OAuth, programada con cron",
        "Métricas de engagement persistidas en Supabase",
      ],
      status: "En Producción Semanal",
      impact: "Pipeline agéntico con aprobación humana",
    },
  },
  {
    accent: "#e10600",
    technologies: ["Flutter", "Django", "Python", "REST API", "SQLite", "F1 API"],
    links: {},
    en: {
      title: "F1 Prode",
      tagline: "Formula 1 Predictions Platform",
      description:
        "Cross-platform mobile app for Formula 1 race predictions: private tournaments where users predict Top 10 finishers, pole position, fastest lap and DNFs, with real-time standings and a dynamic scoring system.",
      features: [
        "Live race data from the public F1 API (Ergast)",
        "Private tournaments with custom scoring rules",
        "Real-time leaderboards and rankings",
        "Flutter UI with Django REST backend",
      ],
      status: "In Development",
      impact: "Product vision & full-stack architecture",
    },
    es: {
      title: "F1 Prode",
      tagline: "Plataforma de Pronósticos de Fórmula 1",
      description:
        "App móvil multiplataforma de pronósticos de Fórmula 1: torneos privados donde los usuarios predicen el Top 10, pole position, vuelta rápida y abandonos, con posiciones en tiempo real y sistema de puntaje dinámico.",
      features: [
        "Datos de carrera en vivo desde la API pública de F1 (Ergast)",
        "Torneos privados con reglas de puntaje personalizadas",
        "Tablas de posiciones y rankings en tiempo real",
        "UI en Flutter con backend Django REST",
      ],
      status: "En Desarrollo",
      impact: "Visión de producto y arquitectura full-stack",
    },
  },
]

export default function PersonalProjects() {
  const { t, language } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="personal-projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent">// Products · AI</span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("personalProjectsTitle")}
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl text-lg">{t("personalProjectsDescription")}</p>

          <div className="grid lg:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => {
              const content = project[language]
              return (
                <div
                  key={index}
                  style={{ "--project-accent": project.accent } as React.CSSProperties}
                  className={`group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 overflow-hidden hover:border-[color:color-mix(in_oklab,var(--project-accent)_60%,transparent)] hover:shadow-[0_25px_60px_-12px_color-mix(in_oklab,var(--project-accent)_25%,transparent)] ${
                    project.featured ? "lg:col-span-2" : ""
                  }`}
                >
                  {/* Accent top edge */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                  />
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(600px circle at 20% 0%, ${project.accent}14, transparent 60%)` }}
                  />

                  <div className="relative z-10">
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

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: project.accent }} />
                        {t("keyFeatures")}
                      </h4>
                      <ul className={`gap-2 ${project.featured ? "grid md:grid-cols-2 gap-x-8" : "space-y-2 flex flex-col"}`}>
                        {content.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-3 group/item">
                            <span
                              className="mt-1.5 group-hover/item:scale-110 transition-transform duration-200"
                              style={{ color: project.accent }}
                            >
                              ▹
                            </span>
                            <span className="group-hover/item:text-foreground transition-colors duration-200">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        {content.impact}
                      </span>

                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 hover:scale-105"
                          style={{
                            color: project.accent,
                            borderColor: `${project.accent}55`,
                            backgroundColor: `${project.accent}1a`,
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t("liveApp")}
                        </a>
                      )}
                      {project.links.code && (
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border border-border/60 text-foreground bg-background/60 hover:border-accent/50 transition-all duration-300 hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          {t("viewCode")}
                        </a>
                      )}
                      {project.links.privateRepo && (
                        <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-border/50 text-muted-foreground bg-background/40 cursor-default">
                          <Lock className="w-3.5 h-3.5" />
                          {t("privateRepo")}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 hover:scale-105 cursor-default"
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
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
