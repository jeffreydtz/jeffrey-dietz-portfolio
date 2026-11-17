export type ProductLinks = {
  live?: string
  code?: string
  privateRepo?: boolean
}

export type ProductCopy = {
  title: string
  tagline: string
  description: string
  features: string[]
  status: string
}

export type Product = {
  id: string
  accent: string
  featured?: boolean
  screenshot?: string
  technologies: string[]
  links: ProductLinks
  en: ProductCopy
  es: ProductCopy
}

export const featuredProducts: Product[] = [
  {
    id: "zarix",
    accent: "#10b981",
    featured: true,
    screenshot: "/screenshots/zarix-home.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Gemini AI",
      "Telegram Bot",
      "Mercado Pago",
      "Vercel",
    ],
    links: { live: "https://zarix-phi.vercel.app", privateRepo: true },
    en: {
      title: "Zarix",
      tagline: "Personal finance AI app · engineering thesis",
      description:
        "Personal-finance app for Argentina: dashboard, movements, investments, budgets and shared expenses — plus a Telegram bot that logs expenses from plain text, voice notes or receipt photos. Also the subject of my Systems Engineering thesis at UAI.",
      features: [
        "AI Telegram bot: text, voice or receipt photo (Gemini)",
        "Supabase Auth + RLS, Mercado Pago billing",
        "Live dollar, crypto and stock data on scheduled crons",
        "Shared expenses via public links — guests need no account",
        "Engineering thesis (UAI) built on this product",
      ],
      status: "Live",
    },
    es: {
      title: "Zarix",
      tagline: "App de finanzas personales con IA · tesis de ingeniería",
      description:
        "App de finanzas personales para Argentina: dashboard, movimientos, inversiones, presupuestos y gastos compartidos — más un bot de Telegram que registra gastos desde texto, notas de voz o fotos de tickets. También es el tema de mi tesis de Ingeniería en Sistemas en UAI.",
      features: [
        "Bot de Telegram con IA: texto, voz o foto de ticket (Gemini)",
        "Supabase Auth + RLS, facturación con Mercado Pago",
        "Dólar, cripto y acciones en vivo con crons",
        "Gastos compartidos por link — sin cuenta para invitados",
        "Tesis de ingeniería (UAI) construida sobre este producto",
      ],
      status: "En vivo",
    },
  },
  {
    id: "matilda-pos",
    accent: "#d97706",
    featured: true,
    technologies: ["Next.js 16", "TypeScript", "Supabase", "Dexie / IndexedDB", "PWA", "Tiendanube"],
    links: { privateRepo: true },
    en: {
      title: "Matilda POS / Sherpa",
      tagline: "Offline-first PWA point of sale",
      description:
        "Point of sale and inventory for a clothing store. Installable PWA (phone and desktop), offline-first: it keeps working without internet, stores everything on device, and syncs when a connection is back. Central catalog on Supabase, with a Tiendanube import path.",
      features: [
        "Sell with mixed payments (cash, card, transfer, store credit)",
        "Daily cash drawer with a downloadable PDF close",
        "Size/color stock ledger, returns and store credit",
        "Offline-first via IndexedDB; Supabase sync when online",
        "Tiendanube catalog import",
      ],
      status: "Live · clothing store",
    },
    es: {
      title: "Matilda POS / Sherpa",
      tagline: "Punto de venta PWA offline-first",
      description:
        "Punto de venta e inventario para un local de ropa. PWA instalable (celular y PC), offline-first: funciona sin internet, guarda todo en el dispositivo y sincroniza cuando vuelve la conexión. Catálogo central en Supabase, con import desde Tiendanube.",
      features: [
        "Venta con pagos mixtos (efectivo, tarjeta, transferencia, cuenta corriente)",
        "Caja diaria con cierre en PDF descargable",
        "Stock por talle/color, cambios y saldo a favor",
        "Offline-first con IndexedDB; sync a Supabase cuando hay red",
        "Import de catálogo desde Tiendanube",
      ],
      status: "En vivo · local de ropa",
    },
  },
  {
    id: "beproplayer",
    accent: "#2e7dff",
    screenshot: "/screenshots/beproplayer-home.jpg",
    technologies: ["Python", "FastAPI", "Celery", "YOLO11", "PyTorch", "React", "Redis", "Docker"],
    links: { live: "https://beproplayer.vercel.app", privateRepo: true },
    en: {
      title: "BeProPlayer",
      tagline: "AI football video analysis",
      description:
        "Amateur players upload match footage, tap themselves on a tracked frame, and get a performance report — distance, sprints, top speed, heatmap — as PDF, CSV or a share link. Landing is public; the GPU pipeline runs locally.",
      features: [
        "Click-to-select player on the tracked video",
        "FastAPI + Celery backend, React web app",
        "PDF / CSV / share-link reports",
        "B2B white-label API keys, ES/EN",
      ],
      status: "Landing live · GPU pipeline local",
    },
    es: {
      title: "BeProPlayer",
      tagline: "Análisis de video de fútbol con IA",
      description:
        "Jugadores amateur suben el partido, se seleccionan tocando un frame trackeado y reciben un informe — distancia, sprints, velocidad máxima, heatmap — como PDF, CSV o link. La landing es pública; el pipeline GPU corre en local.",
      features: [
        "Selección del jugador tocando el video trackeado",
        "Backend FastAPI + Celery, webapp React",
        "Reportes PDF / CSV / link compartible",
        "API keys white-label B2B, ES/EN",
      ],
      status: "Landing en vivo · pipeline GPU local",
    },
  },
  {
    id: "colonos-3d",
    accent: "#eab308",
    technologies: ["TypeScript", "WebSocket", "Three.js", "Node.js", "Vite"],
    links: { code: "https://github.com/jeffreydtz/colonos-3d" },
    en: {
      title: "Colonos 3D",
      tagline: "Multiplayer 3D Catan-like game",
      description:
        "Browser multiplayer in the spirit of Catan: 3D board, 3 to 6 players, authoritative WebSocket server, bots to fill a table. Rooms live in memory — public repo, no hosted URL yet.",
      features: [
        "3–6 players, default table of 6",
        "Authoritative Node WebSocket server",
        "Bots to complete a table",
        "Public TypeScript repo",
      ],
      status: "Public repo",
    },
    es: {
      title: "Colonos 3D",
      tagline: "Juego 3D multijugador tipo Catán",
      description:
        "Multijugador en el navegador al estilo Catán: tablero 3D, 3 a 6 jugadores, servidor WebSocket autoritativo, bots para completar la mesa. Las salas viven en memoria — repo público, todavía sin URL hospedada.",
      features: [
        "3–6 jugadores, mesa de 6 por defecto",
        "Servidor Node WebSocket autoritativo",
        "Bots para completar la mesa",
        "Repo público en TypeScript",
      ],
      status: "Repo público",
    },
  },
  {
    id: "jeffrey-blog",
    accent: "#b45309",
    screenshot: "/screenshots/blog-home.jpg",
    technologies: ["Next.js", "TypeScript", "MDX", "Three.js", "Vercel"],
    links: { live: "https://jeffrey-blog-tau.vercel.app", code: "https://github.com/jeffreydtz/jeffrey-blog" },
    en: {
      title: "Jeffrey's Blog",
      tagline: "Vinyl / bookshelf personal blog",
      description:
        "Quiet editorial blog — essays in ES/EN, a 3D turntable, and a Goodreads-backed bookshelf. Content lives in git (MDX); writing is a commit.",
      features: [
        "Bilingual ES/EN, MDX in git",
        "3D vinyl turntable with official previews",
        "Reading shelf from the public Goodreads feed",
        "Full-text search",
      ],
      status: "Live",
    },
    es: {
      title: "Jeffrey's Blog",
      tagline: "Blog personal con vinilo y biblioteca",
      description:
        "Blog editorial silencioso — ensayos ES/EN, un tocadiscos 3D y un estante de lecturas anclado a Goodreads. El contenido vive en git (MDX); escribir es un commit.",
      features: [
        "Bilingüe ES/EN, MDX en git",
        "Tocadiscos 3D con previews oficiales",
        "Estante de lecturas desde el feed público de Goodreads",
        "Búsqueda full-text",
      ],
      status: "En vivo",
    },
  },
  {
    id: "salesforce-content-bot",
    accent: "#00a1e0",
    technologies: ["Node.js", "Claude API", "Puppeteer", "Telegram API", "LinkedIn API", "X API", "Supabase"],
    links: { privateRepo: true },
    en: {
      title: "Salesforce AI Content Bot",
      tagline: "Weekly Salesforce content pipeline",
      description:
        "Weekly pipeline: scrape Salesforce-ecosystem news, Claude writes posts and branded graphics, a human approves in Telegram, then it publishes to LinkedIn and X. A second Thursday pass writes a short Apex/LWC teaching post.",
      features: [
        "Monday news digest + Thursday teaching post",
        "Human approval gate in Telegram",
        "LinkedIn + X over OAuth",
        "Runs as a long-lived process",
      ],
      status: "Running weekly",
    },
    es: {
      title: "Salesforce AI Content Bot",
      tagline: "Pipeline semanal de contenido Salesforce",
      description:
        "Pipeline semanal: scrapea novedades del ecosistema Salesforce, Claude escribe posts e infografías, un humano aprueba en Telegram y publica en LinkedIn y X. Los jueves hay una segunda pasada educativa de Apex/LWC.",
      features: [
        "Digest del lunes + post educativo del jueves",
        "Aprobación humana en Telegram",
        "LinkedIn + X con OAuth",
        "Proceso de larga duración",
      ],
      status: "Corre cada semana",
    },
  },
]

export const moreProducts: Product[] = [
  {
    id: "f1-prode",
    accent: "#e10600",
    technologies: ["Flutter", "Django", "Python", "REST API"],
    links: { code: "https://github.com/jeffreydtz/f1prodeflutter", privateRepo: true },
    en: {
      title: "F1 Prode",
      tagline: "Formula 1 predictions",
      description:
        "Cross-platform F1 predictions: private tournaments, Top 10 / pole / fastest lap / DNF, live standings. Flutter client is public; Django API stays private.",
      features: ["Flutter client (public repo)", "Django REST API (private)", "Private tournaments"],
      status: "In development",
    },
    es: {
      title: "F1 Prode",
      tagline: "Pronósticos de Fórmula 1",
      description:
        "Pronósticos de F1 multiplataforma: torneos privados, Top 10 / pole / vuelta rápida / DNF, posiciones en vivo. El cliente Flutter es público; la API Django queda privada.",
      features: ["Cliente Flutter (repo público)", "API Django REST (privada)", "Torneos privados"],
      status: "En desarrollo",
    },
  },
  {
    id: "grok-trading-desk",
    accent: "#111827",
    technologies: ["Grok Bot", "Multi-agent prompts"],
    links: { privateRepo: true },
    en: {
      title: "Grok Trading Desk AR",
      tagline: "Multi-agent research desk",
      description:
        "Grok-agent desk for research and signals from Argentina (BYMA, CEDEAR, crypto, fixed income). Does not place orders.",
      features: ["CIO + researchers + risk", "No order execution", "Educational research only"],
      status: "Private",
    },
    es: {
      title: "Grok Trading Desk AR",
      tagline: "Mesa de research multi-agente",
      description:
        "Mesa de agentes Grok para research y señales desde Argentina (BYMA, CEDEAR, cripto, renta fija). No ejecuta órdenes.",
      features: ["CIO + researchers + risk", "Sin ejecución de órdenes", "Solo research educativo"],
      status: "Privado",
    },
  },
  {
    id: "agrosur",
    accent: "#14b8a6",
    screenshot: "/screenshots/agrosur-home.jpg",
    technologies: ["React", "TypeScript", "Vite", "Vercel"],
    links: { live: "https://agrosur-sa.vercel.app", code: "https://github.com/jeffreydtz/agrosur-sa" },
    en: {
      title: "AgroSur S.A.",
      tagline: "Organizational simulation",
      description:
        "Playable business simulation: 13 rounds running a Rosario grain brokerage through digital transformation.",
      features: ["13-round narrative sim", "React + Vite"],
      status: "Live",
    },
    es: {
      title: "AgroSur S.A.",
      tagline: "Simulación organizacional",
      description:
        "Simulación empresarial jugable: 13 rondas dirigiendo una corredora de granos rosarina en plena transformación digital.",
      features: ["Simulación narrativa de 13 rondas", "React + Vite"],
      status: "En vivo",
    },
  },
  {
    id: "proderefu",
    accent: "#c2410c",
    screenshot: "/screenshots/proderefu-home.jpg",
    technologies: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    links: { live: "https://proderefu.vercel.app", code: "https://github.com/jeffreydtz/proderefu" },
    en: {
      title: "Prode Mundial 2026",
      tagline: "Private World Cup predictions",
      description: "Invite-only prediction league for the 2026 World Cup.",
      features: ["Invite-only", "Live table"],
      status: "Live",
    },
    es: {
      title: "Prode Mundial 2026",
      tagline: "Prode privado del Mundial",
      description: "Prode solo con invitación para el Mundial 2026.",
      features: ["Solo invitación", "Tabla en vivo"],
      status: "En vivo",
    },
  },
  {
    id: "canchaya",
    accent: "#7c3aed",
    screenshot: "/screenshots/canchaya-home.jpg",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    links: { live: "https://cancha-ya-is.vercel.app", code: "https://github.com/jeffreydtz/CanchaYA-Front" },
    en: {
      title: "CanchaYA",
      tagline: "Sports court booking",
      description: "Frontend for a sports-court booking platform: search, instant reservation, premium booking UI.",
      features: ["Public Next.js frontend", "Court search and booking UI"],
      status: "Live",
    },
    es: {
      title: "CanchaYA",
      tagline: "Reserva de canchas",
      description: "Frontend de una plataforma de reserva de canchas: búsqueda, reserva instantánea, UI premium.",
      features: ["Frontend Next.js público", "UI de búsqueda y reserva"],
      status: "En vivo",
    },
  },
  {
    id: "contentforge",
    accent: "#64748b",
    technologies: ["Node.js", "Claude API"],
    links: { privateRepo: true },
    en: {
      title: "ContentForge",
      tagline: "White-label social content bots",
      description: "White-label engine for social-network content bots, configured per client.",
      features: ["White-label", "Per-client config"],
      status: "Private",
    },
    es: {
      title: "ContentForge",
      tagline: "Bots de contenido white-label",
      description: "Motor white-label para bots de contenido en redes, configurable por cliente.",
      features: ["White-label", "Config por cliente"],
      status: "Privado",
    },
  },
  {
    id: "zarix-ios",
    accent: "#0ea5e9",
    technologies: ["SwiftUI", "iOS"],
    links: { privateRepo: true },
    en: {
      title: "Zarix iOS",
      tagline: "Native SwiftUI companion",
      description: "Native iOS app for Zarix — personal finance in SwiftUI.",
      features: ["SwiftUI", "Companion to the web app"],
      status: "Private",
    },
    es: {
      title: "Zarix iOS",
      tagline: "Compañera nativa en SwiftUI",
      description: "App iOS nativa de Zarix — finanzas personales en SwiftUI.",
      features: ["SwiftUI", "Compañera de la web"],
      status: "Privado",
    },
  },
  {
    id: "agent-harness",
    accent: "#8b5cf6",
    technologies: ["Claude Code", "Multi-agent"],
    links: { privateRepo: true },
    en: {
      title: "Agent harness",
      tagline: "Spec-driven coding agents",
      description:
        "Multi-project coding harness: a parent orchestrator and specialist agents on a spec-driven loop.",
      features: ["Parent orchestrator", "Specialist agents", "Spec-driven workflow"],
      status: "Private",
    },
    es: {
      title: "Agent harness",
      tagline: "Agentes de código guiados por spec",
      description:
        "Harness de coding multi-proyecto: un orchestrator padre y agentes especialistas en un loop guiado por spec.",
      features: ["Orchestrator padre", "Agentes especialistas", "Workflow por spec"],
      status: "Privado",
    },
  },
]

export const earlyWork: Product[] = [
  {
    id: "calc-trip",
    accent: "#78716c",
    technologies: ["Python"],
    links: { code: "https://github.com/jeffreydtz/calc-trip" },
    en: {
      title: "calc-trip",
      tagline: "Trip cash reconcilation",
      description: "Small CLI that asks what you spent on a trip versus what you brought, and checks the cash in hand.",
      features: [],
      status: "Public",
    },
    es: {
      title: "calc-trip",
      tagline: "Cuadre de plata de un viaje",
      description: "CLI chico que pregunta gastos de un viaje versus lo que llevaste, y chequea el efectivo en mano.",
      features: [],
      status: "Público",
    },
  },
  {
    id: "webscrapping-cursos",
    accent: "#78716c",
    technologies: ["Python"],
    links: { code: "https://github.com/jeffreydtz/webscrapping_info_cursos" },
    en: {
      title: "Course info scraper",
      tagline: "Syllabus and pricing",
      description: "Scrapes syllabus and pricing from two Python programming courses.",
      features: [],
      status: "Public",
    },
    es: {
      title: "Scraper de cursos",
      tagline: "Temario y precios",
      description: "Scrapea temario y precios de dos cursos de programación en Python.",
      features: [],
      status: "Público",
    },
  },
  {
    id: "cnv-scrapping",
    accent: "#78716c",
    technologies: ["Python"],
    links: { code: "https://github.com/jeffreydtz/cnv_scrapping" },
    en: {
      title: "CNV scraper",
      tagline: "Registered producers",
      description: "Scrapes the CNV site for legal-person producing agents.",
      features: [],
      status: "Public",
    },
    es: {
      title: "Scraper CNV",
      tagline: "Agentes productores",
      description: "Scrapea el sitio de CNV para traer agentes productores persona jurídica.",
      features: [],
      status: "Público",
    },
  },
  {
    id: "team-laika",
    accent: "#78716c",
    technologies: ["Django", "React"],
    links: { code: "https://github.com/jeffreydtz/TeamLaika" },
    en: {
      title: "TeamLaika",
      tagline: "Early Django + React CRUD",
      description: "Early Django + React CRUD for cakes with a description per item.",
      features: [],
      status: "Public",
    },
    es: {
      title: "TeamLaika",
      tagline: "CRUD temprano Django + React",
      description: "CRUD temprano en Django + React de tortas, con descripción de cada una.",
      features: [],
      status: "Público",
    },
  },
]
