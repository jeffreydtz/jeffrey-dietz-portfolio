export type WorkflowTeamCopy = {
  title: string
  summary: string
  roles: string[]
}

export type WorkflowTeam = {
  id: string
  accent: string
  en: WorkflowTeamCopy
  es: WorkflowTeamCopy
}

export const AI_FLEET_SIZE = 30

export const workflowTeams: WorkflowTeam[] = [
  {
    id: "pos",
    accent: "#f59e0b",
    en: {
      title: "Product team — POS startup",
      summary:
        "A Grok Bot team that designs, builds and reviews Matilda POS / Sherpa. The reviewer can HOLD a change instead of rubber-stamping it.",
      roles: [
        "CEO / orchestrator",
        "Senior developer",
        "Code & architecture reviewer (can HOLD)",
        "QA",
        "Product / UX",
        "Researcher",
      ],
    },
    es: {
      title: "Equipo de producto — startup POS",
      summary:
        "Un equipo en Grok Bot que diseña, construye y revisa Matilda POS / Sherpa. El reviewer puede hacer HOLD de un cambio en vez de aprobar en automático.",
      roles: [
        "CEO / orchestrator",
        "Senior developer",
        "Reviewer de código y arquitectura (puede hacer HOLD)",
        "QA",
        "Producto / UX",
        "Researcher",
      ],
    },
  },
  {
    id: "university",
    accent: "#6366f1",
    en: {
      title: "University team",
      summary: "Thesis, notes and a study plan — the same fleet, pointed at UAI coursework and the Zarix thesis.",
      roles: ["Thesis", "Notes", "Study plan"],
    },
    es: {
      title: "Equipo universidad",
      summary: "Tesis, apuntes y plan de estudio — la misma flota, apuntada a la cursada de UAI y a la tesis de Zarix.",
      roles: ["Tesis", "Apuntes", "Plan de estudio"],
    },
  },
  {
    id: "youtube",
    accent: "#ef4444",
    en: {
      title: "YouTube content team",
      summary: "A linear pipeline: research → boss → producer → voice. No auto-publish.",
      roles: ["Research", "Boss", "Producer", "Voice"],
    },
    es: {
      title: "Equipo de contenido YouTube",
      summary: "Un pipeline lineal: research → boss → producer → voice. Nada se publica solo.",
      roles: ["Research", "Boss", "Producer", "Voice"],
    },
  },
  {
    id: "radar",
    accent: "#06b6d4",
    en: {
      title: "Research / tech radar",
      summary: "Watches the stack I actually ship with — Salesforce, Agentforce, AI tooling — and files what is worth a closer look.",
      roles: ["Radar", "Briefs"],
    },
    es: {
      title: "Research / tech radar",
      summary: "Mira el stack con el que realmente shippeo — Salesforce, Agentforce, tooling de IA — y anota lo que merece una segunda mirada.",
      roles: ["Radar", "Briefs"],
    },
  },
  {
    id: "assistant",
    accent: "#a855f7",
    en: {
      title: "Personal assistant",
      summary: "Scheduling, follow-ups and the boring glue around the rest of the fleet.",
      roles: ["Inbox", "Follow-ups"],
    },
    es: {
      title: "Asistente personal",
      summary: "Agenda, follow-ups y el pegamento aburrido alrededor del resto de la flota.",
      roles: ["Inbox", "Follow-ups"],
    },
  },
  {
    id: "vps",
    accent: "#22c55e",
    en: {
      title: "VPS admin agent",
      summary: "Operates services on my own VPS — no public IPs or internal URLs here. Cloud coding agents open PRs; independent AI reviews cross-check each other so false positives get discarded before merge.",
      roles: ["VPS admin", "Cloud coding agents", "Independent AI review"],
    },
    es: {
      title: "Agente admin de VPS",
      summary: "Opera servicios en mi VPS — acá no van IPs públicas ni URLs internas. Los cloud coding agents abren PRs; reviews de IA independientes se cruzan para tirar falsos positivos antes del merge.",
      roles: ["Admin VPS", "Cloud coding agents", "Review de IA independiente"],
    },
  },
]
