export const CASE_AREAS = [
  "Agentforce",
  "Apex",
  "LWC",
  "Integrations",
  "Service",
  "Sales",
] as const

export type CaseArea = (typeof CASE_AREAS)[number]

export type CaseStatus = "production" | "comingSoon"

export type SalesforceCaseCopy = {
  title: string
  client: string
  problem: string
  approach: string
  designDecisions: string
  outcome: string
  badge: string
}

export type SalesforceCase = {
  id: string
  status: CaseStatus
  areas: CaseArea[]
  stack: string[]
  en: SalesforceCaseCopy
  es: SalesforceCaseCopy
}

export const salesforceCases: SalesforceCase[] = [
  {
    id: "agentforce-multi-agent",
    status: "production",
    areas: ["Agentforce", "Apex", "LWC"],
    stack: ["Agentforce", "Agentforce Scripting", "Apex", "Lightning Web Components"],
    en: {
      title: "Agentforce orchestrator — 4 sub-agents",
      client: "Enterprise client",
      problem:
        "A single general-purpose assistant was a poor fit for an enterprise Salesforce org: requests spanned different domains, and routing them by hand did not scale.",
      approach:
        "Built one orchestrator agent that manages four specialized sub-agents. This was among the first orchestrators built on Salesforce. Later migrated the setup from the legacy Agent Builder to Agentforce scripting mode so routing and actions are explicit instead of prompt-guessed.",
      designDecisions:
        "One orchestrator, four specialists — not every topic stuffed into a single agent. Scripting mode replaced the older builder so hand-offs are deterministic. Apex and LWC still own side effects and the operator UI.",
      outcome:
        "In production. Scripting mode made the system more deterministic: accuracy went from about 60% to 91%, with an average response time of about 30 seconds.",
      badge: "In production",
    },
    es: {
      title: "Orchestrator Agentforce — 4 sub-agentes",
      client: "Cliente enterprise",
      problem:
        "Un asistente genérico no alcanzaba en un org Salesforce enterprise: los pedidos cruzaban dominios distintos y enrutarlos a mano no escalaba.",
      approach:
        "Armé un agente orchestrator que gestiona cuatro sub-agentes especializados. Fue de los primeros orchestrators construidos sobre Salesforce. Después migré el setup del Agent Builder legacy al modo scripting de Agentforce, para que el routing y las acciones queden explícitos en vez de adivinados por el prompt.",
      designDecisions:
        "Un orchestrator, cuatro especialistas — no todos los topics metidos en un solo agente. El modo scripting reemplazó al builder anterior para que los pases sean determinísticos. Apex y LWC siguen dueños de los side effects y de la UI de operación.",
      outcome:
        "En producción. El modo scripting lo volvió más determinístico: la accuracy pasó de alrededor del 60% al 91%, con un tiempo de respuesta promedio de unos 30 s.",
      badge: "En producción",
    },
  },
  {
    id: "opportunity-document-intelligence",
    status: "production",
    areas: ["Agentforce", "Sales"],
    stack: ["Agentforce", "Prompt Builder", "Prompt Templates", "Opportunity"],
    en: {
      title: "Document intelligence on Opportunity",
      client: "Enterprise client",
      problem:
        "Teams working an Opportunity still had to open the attached documents — RFPs and similar — and read them by hand before they could answer a business question.",
      approach:
        "Documents attached to an Opportunity trigger Prompt Templates that analyze them and store the insights. An Agentforce agent then answers business questions grounded on that knowledge, so nobody has to read the docs first.",
      designDecisions:
        "Extraction lives in Prompt Templates at attach-time, not in a long chat. The agent answers from stored insights instead of re-parsing files on every question. Grounding stays on the Opportunity, not on a generic knowledge dump.",
      outcome:
        "In production. RFP and deal questions can be asked against the Opportunity without reading the attachments first.",
      badge: "In production",
    },
    es: {
      title: "Inteligencia de documentos en Opportunity",
      client: "Cliente enterprise",
      problem:
        "Quien trabajaba una Opportunity todavía tenía que abrir los documentos adjuntos — RFPs y similares — y leerlos a mano antes de poder responder una pregunta de negocio.",
      approach:
        "Los documentos adjuntos a una Opportunity disparan Prompt Templates que los analizan y guardan los insights. Un agente de Agentforce responde después preguntas de negocio ancladas a ese conocimiento, sin que nadie tenga que leer los docs primero.",
      designDecisions:
        "La extracción vive en Prompt Templates al adjuntar, no en un chat largo. El agente responde desde insights guardados en vez de re-parsear archivos en cada pregunta. El grounding se queda en la Opportunity, no en un dump genérico de knowledge.",
      outcome:
        "En producción. Se pueden preguntar RFPs y deals contra la Opportunity sin leer los adjuntos primero.",
      badge: "En producción",
    },
  },
  {
    id: "fraud-chargeback",
    status: "production",
    areas: ["Apex", "Service"],
    stack: ["Apex", "Triggers", "Visualforce", "Lightning Components", "COBOL APIs"],
    en: {
      title: "Fraud and chargeback workflow",
      client: "Bank",
      problem:
        "Fraud alerts and chargebacks were landing in Salesforce without a structured path from intake to resolution, and the system of record still lived on the bank's legacy COBOL stack.",
      approach:
        "Implemented a custom workflow with Apex and Triggers driving the state machine, Visualforce for the operational screens that already existed, and Lightning Components for the newer case-handling UI. Salesforce talks to the bank's legacy COBOL-based APIs for the systems that still own the money movement.",
      designDecisions:
        "Kept the lifecycle in Apex so status changes stay server-side and auditable. Triggers enforce transitions instead of relying on page-level clicks. COBOL APIs stay behind Apex callouts so Lightning never talks to the mainframe directly. Visualforce was adapted where the banking project still needed it; Lightning Components cover the newer surfaces.",
      outcome:
        "In production. Fraud and chargeback work follows a defined path in Salesforce while still settling against the COBOL APIs.",
      badge: "In production",
    },
    es: {
      title: "Flujo de fraude y contracargos",
      client: "Banco",
      problem:
        "Las alertas de fraude y los contracargos llegaban a Salesforce sin un camino estructurado de intake a resolución, y el sistema de record todavía vivía en el stack COBOL legacy del banco.",
      approach:
        "Implementé un flujo custom con Apex y Triggers manejando la máquina de estados, Visualforce para las pantallas operativas que ya existían y Lightning Components para la UI más nueva de gestión de casos. Salesforce habla con las APIs COBOL legacy del banco para los sistemas que todavía son dueños del movimiento de dinero.",
      designDecisions:
        "Dejé el ciclo de vida en Apex para que los cambios de estado queden del lado servidor y sean auditables. Los triggers fuerzan las transiciones en lugar de depender de clicks en la página. Las APIs COBOL quedan detrás de callouts Apex para que Lightning nunca hable directo con el mainframe. Visualforce se adaptó donde el proyecto bancario todavía lo necesitaba; Lightning Components cubre las superficies nuevas.",
      outcome:
        "En producción. El trabajo de fraude y contracargos sigue un camino definido en Salesforce y sigue asentando contra las APIs COBOL.",
      badge: "En producción",
    },
  },
  {
    id: "jira-salesforce",
    status: "production",
    areas: ["Integrations", "Service"],
    stack: ["OAuth 2.0", "Named Credentials", "Apex", "REST API", "Jira API"],
    en: {
      title: "Jira–Salesforce integration",
      client: "Prepaga",
      problem:
        "Support and delivery were splitting work between Jira issues and Salesforce cases, so status and ownership drifted between the two systems.",
      approach:
        "Developed a bidirectional integration between Jira and Salesforce using OAuth 2.0 authentication. Implemented secure token management, automated ticket synchronization, and real-time status updates. The system automatically creates Salesforce cases from Jira issues and keeps data consistent across both platforms.",
      designDecisions:
        "OAuth 2.0 plus Named Credentials keep secrets out of Apex and make token refresh a platform concern. Sync is case-centric in Salesforce and issue-centric in Jira, with status mapping in one place so neither side invents a parallel workflow.",
      outcome:
        "In production. Ticket creation and status updates move between Jira and Salesforce without a manual copy step, so the workflow stays aligned.",
      badge: "In production",
    },
    es: {
      title: "Integración Jira–Salesforce",
      client: "Prepaga",
      problem:
        "Soporte y delivery partían el trabajo entre issues de Jira y casos de Salesforce, y el estado y la ownership se desalineaban entre los dos sistemas.",
      approach:
        "Desarrollé una integración bidireccional entre Jira y Salesforce usando autenticación OAuth 2.0. Implementé gestión segura de tokens, sincronización automática de tickets y actualizaciones de estado en tiempo real. El sistema crea automáticamente casos de Salesforce desde issues de Jira y mantiene consistencia de datos entre ambas plataformas.",
      designDecisions:
        "OAuth 2.0 más Named Credentials dejan los secretos fuera de Apex y hacen del refresh de tokens un tema de plataforma. La sync es case-centric en Salesforce e issue-centric en Jira, con el mapeo de estados en un solo lugar para que ningún lado invente un flujo paralelo.",
      outcome:
        "En producción. La creación de tickets y las actualizaciones de estado se mueven entre Jira y Salesforce sin un copy manual, y el flujo queda alineado.",
      badge: "En producción",
    },
  },
  {
    id: "lwc-excel-opportunities",
    status: "production",
    areas: ["LWC", "Apex", "Sales"],
    stack: ["Lightning Web Components", "Apex", "REST/SOAP API", "Excel Processing", "Mass DML"],
    en: {
      title: "Bulk Excel opportunity load",
      client: "Prepaga",
      problem:
        "Sales ops needed to load opportunities from Excel in bulk. The existing path was slow and pushed validation too late, after the file had already hit the server.",
      approach:
        "Developed a Lightning Web Component that allows users to upload Excel files for mass data loading. The component validates and processes data locally before sending to an Apex backend, which creates records in bulk and integrates with external databases via Web Services.",
      designDecisions:
        "Validate in the LWC first so bad rows never consume Apex limits. Apex owns bulk DML and the external callouts, with the Excel parse kept on the client so the server only sees a clean payload.",
      outcome:
        "In production. Reduced processing time by over 60% compared with the previous load path.",
      badge: "In production",
    },
    es: {
      title: "Carga masiva de oportunidades desde Excel",
      client: "Prepaga",
      problem:
        "Sales ops necesitaba cargar oportunidades desde Excel en masa. El camino anterior era lento y validaba demasiado tarde, cuando el archivo ya había pegado en el servidor.",
      approach:
        "Desarrollé un Lightning Web Component que permite a los usuarios subir archivos Excel para carga masiva de datos. El componente valida y procesa datos localmente antes de enviarlos al backend Apex, que crea registros en masa e integra con bases de datos externas vía Web Services.",
      designDecisions:
        "Validar primero en el LWC para que las filas malas no consuman límites de Apex. Apex queda dueño del DML masivo y de los callouts externos, y el parse de Excel se queda en el cliente para que el servidor solo reciba un payload limpio.",
      outcome:
        "En producción. Redujo el tiempo de procesamiento en más del 60% respecto del camino de carga anterior.",
      badge: "En producción",
    },
  },
  {
    id: "email-to-case",
    status: "production",
    areas: ["Service", "Apex"],
    stack: ["Email-to-Case", "Apex", "SOQL", "Record-Triggered Flows", "Assignment Rules"],
    en: {
      title: "Email-to-Case with account and contact matching",
      client: "Prepaga",
      problem:
        "Cases created from email often arrived unlinked. Agents then had to hunt for the right Account and Contact, including company vs personal accounts.",
      approach:
        "Designed automated logic to associate Accounts and Contacts to Cases created via email. The system matches email senders with custom fields on Account objects, prioritizing company accounts over personal accounts, and extends Salesforce's standard Email-to-Case flow.",
      designDecisions:
        "Stay on top of the standard Email-to-Case path instead of replacing it. Matching prefers company Accounts when the same address could resolve both ways, and assignment stays in the usual rules so routing does not fork.",
      outcome:
        "In production. Inbound email cases land already tied to the right Account and Contact, so agents start on the work instead of the lookup.",
      badge: "In production",
    },
    es: {
      title: "Email-to-Case con matching de cuentas y contactos",
      client: "Prepaga",
      problem:
        "Los casos creados por email a menudo llegaban sin vincular. Después había que buscar a mano la Account y el Contact correctos, incluyendo cuentas empresa vs. personales.",
      approach:
        "Diseñé lógica automatizada para asociar Cuentas y Contactos a Casos creados vía email. El sistema empareja remitentes de email con campos personalizados en objetos Account, priorizando cuentas corporativas sobre cuentas personales, y extiende el flujo estándar Email-to-Case de Salesforce.",
      designDecisions:
        "Me apoyé en el Email-to-Case estándar en lugar de reemplazarlo. El matching prefiere Accounts empresa cuando la misma dirección podría resolver las dos, y la assignment se queda en las reglas de siempre para no bifurcar el routing.",
      outcome:
        "En producción. Los casos de email inbound llegan atados a la Account y al Contact correctos, y el equipo arranca en el trabajo en lugar de en la búsqueda.",
      badge: "En producción",
    },
  },
  {
    id: "batch-apex-engine",
    status: "production",
    areas: ["Apex"],
    stack: ["Batch Apex", "Schedulable Apex", "SOQL", "Governor Limits", "Error Handling"],
    en: {
      title: "Batch Apex processing engine",
      client: "Bank",
      problem:
        "Complex business logic had to run over large record sets on a daily cadence, where a one-shot transaction would hit governor limits.",
      approach:
        "Built a custom Batch Apex job to evaluate complex business logic on large record sets. It processes date-based calculations, state transitions, and bulk operations with optimized SOQL queries and error handling for daily scheduled execution.",
      designDecisions:
        "Schedulable Apex kicks off the job once a day. Each batch stays inside governor limits with scoped SOQL, and errors are captured per scope so one bad record does not kill the run.",
      outcome:
        "In production. Daily processing runs on a schedule instead of a manual kick-off, with bulk-safe calculations and state transitions.",
      badge: "In production",
    },
    es: {
      title: "Motor de procesamiento Batch Apex",
      client: "Banco",
      problem:
        "Había que evaluar lógica de negocio compleja sobre grandes conjuntos de registros todos los días, y una transacción de un solo golpe se iba a ir de governor limits.",
      approach:
        "Construí un job personalizado de Batch Apex para evaluar lógica de negocio compleja en grandes conjuntos de registros. Procesa cálculos basados en fechas, transiciones de estado y realiza operaciones masivas con consultas SOQL optimizadas y manejo de errores para ejecución diaria programada.",
      designDecisions:
        "Schedulable Apex dispara el job una vez al día. Cada batch se queda dentro de los governor limits con SOQL acotado, y los errores se capturan por scope para que un registro malo no baje toda la corrida.",
      outcome:
        "En producción. El procesamiento diario corre en un schedule en lugar de un disparo manual, con cálculos y transiciones de estado seguros a volumen.",
      badge: "En producción",
    },
  },
  {
    id: "xml-lead-processing",
    status: "production",
    areas: ["Apex", "Integrations"],
    stack: ["Apex", "XML Parsing", "Email Services", "Dynamic SOQL", "Lead Management"],
    en: {
      title: "XML lead processing service",
      client: "Enterprise client",
      problem:
        "Leads arrived as XML attachments on inbound email, and turning those files into Salesforce records was still a manual parse.",
      approach:
        "Implemented an Apex service to process incoming emails containing XML attachments and automatically create Lead records. The system reads, validates, and parses XML data dynamically, integrating Salesforce with external lead-generation systems.",
      designDecisions:
        "Stay on Salesforce email services instead of a custom inbound server. Dynamic parse so the XML shape can move without a full rewrite. Invalid payloads fail closed instead of creating half-leads.",
      outcome:
        "In production. Inbound XML becomes Lead records without a manual copy step.",
      badge: "In production",
    },
    es: {
      title: "Servicio de procesamiento XML de leads",
      client: "Cliente enterprise",
      problem:
        "Los leads llegaban como adjuntos XML en emails inbound, y pasar esos archivos a registros de Salesforce seguía siendo un parse manual.",
      approach:
        "Implementé un servicio Apex para procesar emails entrantes con archivos adjuntos XML y crear automáticamente registros Lead. El sistema lee, valida y parsea datos XML dinámicamente, integrando Salesforce con sistemas externos de generación de leads.",
      designDecisions:
        "Me apoyé en los email services de Salesforce en vez de un servidor inbound custom. Parse dinámico para que la forma del XML pueda moverse sin un rewrite completo. Los payloads inválidos fallan cerrados en vez de crear half-leads.",
      outcome:
        "En producción. El XML inbound se vuelve registros Lead sin un copy manual.",
      badge: "En producción",
    },
  },
  {
    id: "salesforce-content-bot",
    status: "production",
    areas: ["Integrations"],
    stack: ["Node.js", "Claude API", "Puppeteer", "Telegram API", "LinkedIn API", "X API", "Supabase"],
    en: {
      title: "Salesforce AI Content Bot",
      client: "Own project",
      problem:
        "Keeping a weekly Salesforce-ecosystem content cadence by hand meant scraping, writing, designing, and publishing across LinkedIn and X every week.",
      approach:
        "Fully automated weekly pipeline: scrapes Salesforce ecosystem news, Claude generates Spanish posts and branded infographics, a human approves via Telegram, and it auto-publishes to LinkedIn and X with engagement metrics tracked in Supabase.",
      designDecisions:
        "Claude generates copy with a repeat-guard on topics. Infographics render in Puppeteer with a retina, anti-overflow layout. Nothing publishes until a human approves in Telegram. LinkedIn and X publishing uses OAuth on a cron; engagement metrics persist in Supabase.",
      outcome:
        "In production. The pipeline runs weekly with a human approval gate, so publishing stays on cadence without skipping the review step.",
      badge: "In production",
    },
    es: {
      title: "Salesforce AI Content Bot",
      client: "Proyecto propio",
      problem:
        "Mantener a mano una cadencia semanal de contenido del ecosistema Salesforce significaba scrapear, escribir, diseñar y publicar en LinkedIn y X todas las semanas.",
      approach:
        "Pipeline semanal totalmente automatizado: scrapea noticias del ecosistema Salesforce, Claude genera posts en español e infografías con marca, un humano aprueba vía Telegram y publica automáticamente en LinkedIn y X con métricas de engagement en Supabase.",
      designDecisions:
        "Claude genera el copy con un guard anti-repetición de temas. Las infografías se renderizan con Puppeteer (retina, layout anti-desborde). Nada se publica hasta que un humano aprueba en Telegram. LinkedIn y X salen por OAuth en un cron; las métricas de engagement quedan en Supabase.",
      outcome:
        "En producción. El pipeline corre todas las semanas con una puerta de aprobación humana, así que la publicación mantiene cadencia sin saltear la revisión.",
      badge: "En producción",
    },
  },
  {
    id: "agentforce-demo",
    status: "comingSoon",
    areas: ["Agentforce"],
    stack: ["Agentforce", "Developer Edition"],
    en: {
      title: "Agentforce demo (Developer Edition)",
      client: "Public demo",
      problem:
        "Most Agentforce work lives inside client orgs, so there is no public place yet to click through an agent I designed.",
      approach:
        "A self-contained Agentforce demo on a Developer Edition org, documented so someone can follow the agents, topics, and actions without client data.",
      designDecisions:
        "Developer Edition only — no client metadata, no production credentials. The demo will stay small enough to walk through in a sitting.",
      outcome:
        "Coming soon. No public link yet.",
      badge: "Coming soon",
    },
    es: {
      title: "Demo Agentforce (Developer Edition)",
      client: "Demo pública",
      problem:
        "La mayor parte del trabajo con Agentforce vive en orgs de cliente, y todavía no hay un lugar público para recorrer un agente que yo haya diseñado.",
      approach:
        "Una demo autocontenida de Agentforce en un org Developer Edition, documentada para poder seguir agentes, topics y actions sin datos de cliente.",
      designDecisions:
        "Solo Developer Edition — sin metadata de cliente ni credenciales de producción. La demo se va a quedar chica, para recorrerla de una sentada.",
      outcome:
        "Próximamente. Todavía no hay link público.",
      badge: "Próximamente",
    },
  },
  {
    id: "sfdx-apex-tests",
    status: "comingSoon",
    areas: ["Apex"],
    stack: ["SFDX", "Apex", "Apex Tests"],
    en: {
      title: "Public SFDX repo with Apex tests",
      client: "Public repo",
      problem:
        "The Apex I ship for clients stays in private orgs, so there is no public repo a reviewer can clone to see how I test.",
      approach:
        "A public SFDX project with Apex tests that show the patterns I use — bulk-safe classes, trigger handlers, and meaningful assertions — without any client metadata.",
      designDecisions:
        "Tests first, no org-specific objects. The repo will be something you can push to a scratch org, not a dump of a production package.",
      outcome:
        "Coming soon. No public link yet.",
      badge: "Coming soon",
    },
    es: {
      title: "Repo SFDX público con tests de Apex",
      client: "Repo público",
      problem:
        "El Apex que entrego para clientes se queda en orgs privadas, y no hay un repo público que alguien pueda clonar para ver cómo testeo.",
      approach:
        "Un proyecto SFDX público con tests de Apex que muestren los patrones que uso — clases bulk-safe, trigger handlers y assertions con sustancia — sin metadata de cliente.",
      designDecisions:
        "Tests primero, sin objetos de un org puntual. El repo va a ser algo que se pueda pushear a un scratch org, no un dump de un package de producción.",
      outcome:
        "Próximamente. Todavía no hay link público.",
      badge: "Próximamente",
    },
  },
]
