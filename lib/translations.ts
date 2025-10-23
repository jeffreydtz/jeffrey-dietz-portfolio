export const translations = {
  en: {
    // Navigation
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",

    // Hero
    hello: "Hello, I'm Jeffrey Dietz",
    heroTitle: "Salesforce Developer & Analyst",
    heroDescription:
      "Salesforce Developer at Accenture, building scalable enterprise solutions with 2+ years of continuous experience. Specialized in Apex development, Lightning Web Components, API integrations, and digital transformation.",
    accentureBadge: "Accenture",
    experienceBadge: "2+ Years Experience",
    englishBadge: "C1 English",
    viewWork: "View My Work",
    getInTouch: "Get in Touch",
    salesforceEcosystem: "Salesforce Ecosystem",

    // About
    aboutTitle: "About",
    aboutParagraph1:
      "I'm a passionate Salesforce Developer with 2+ years of continuous experience (since April 2023) building custom solutions on the Salesforce platform. My profile combines technical development expertise with analytical thinking and a strong orientation toward business process improvement.",
    aboutParagraph2:
      "My expertise spans Apex development, Lightning Web Components, REST/SOAP integrations, and declarative automation (Flows, Process Builder). I've successfully delivered projects that reduced processing time by over 60% and automated complex business workflows in AMS environments.",
    aboutParagraph3:
      "Beyond Salesforce, I have experience with Python/Django, Flutter, and full-stack development, which gives me a unique perspective when designing integrations and scalable solutions.",
    professionalFocus: "Professional Focus",
    professionalFocusText:
      "Salesforce Developer | Analyst | Engineer specializing in enterprise automation, custom integrations, and AMS (Application Management Services)",
    education: "Education",
    educationTitle: "Systems Engineering",
    educationSubtitle: "(In Progress, expected completion end of 2027) - Universidad Abierta Interamericana (UAI)",
    educationCourses: "Courses: System Analysis & Design, Calculus II, Physics I, Communication Technologies II",
    universityDegreeTitle: "University Technician in Programming",
    universityDegreeSubtitle: "(Completed 2021-2023) - Universidad Austral",
    certifications: "Certifications & Languages",
    certGoFluent: "goFLUENT - C1 English Certification (CEFR C1.1, September 2025)",
    certCambridge: "Cambridge First Certificate (FCE) - B2 English (2018)",
    certDELF: "DELF A2 - French (Ministère Français de l'Éducation Nationale)",
    certSalesforce: "Preparing for Salesforce Platform Developer I",
    languagesBilingual: "Multilingual: Spanish (Native) | English (C1) | French (A2)",
    workApproach: "Work Approach",
    workApproachText:
      "Strong analytical mindset with experience in Agile methodologies (Scrum), AMS support, ticket management (Jira/ServiceNow), and cross-functional collaboration with business analysts and QA teams.",

    // Experience
    experienceTitle: "Professional Experience",
    experienceDescription:
      "My professional journey working with leading companies, building Salesforce solutions and enterprise applications.",
    keyAchievements: "Key Achievements:",

    // Accenture
    accentureRole: "Salesforce Developer",
    accenturePeriod: "Nov 2025 - Present",
    accentureDesc: "Joining Accenture to work on enterprise Salesforce implementations and digital transformation projects for global clients. Bringing 2+ years of Salesforce development experience to deliver innovative solutions.",
    accentureAch1: "Working on large-scale Salesforce implementations for Fortune 500 clients",
    accentureAch2: "Contributing to digital transformation initiatives across multiple industries",
    accentureAch3: "Leveraging Apex, LWC, and integration expertise for complex business requirements",
    accentureAch4: "Collaborating with global teams on enterprise-grade solutions",

    // Avalian
    avalianRole: "Salesforce Developer",
    avalianPeriod: "Aug 2024 - Oct 2025",
    avalianDesc: "Developed and implemented advanced Salesforce solutions, specializing in process automation using Apex, Lightning Web Components, and Flow Builder.",
    avalianAch1: "Implemented REST API integrations for external database connectivity",
    avalianAch2: "Developed custom Apex logic to optimize execution times for high-volume processes",
    avalianAch3: "Enhanced Email-to-Case process, automating account and contact assignment",
    avalianAch4: "Worked in Agile environment managing AMS tickets, releases, and testing",
    avalianAch5: "Supervised data quality in critical flows and prevented duplicates",

    // Deloitte
    deloitteRole: "Salesforce Developer & Analyst",
    deloittePeriod: "Apr 2023 - Aug 2024",
    deloitteDesc: "Implemented critical functionalities using Apex, Visualforce, and Lightning Components for large-scale banking projects handling thousands of records.",
    deloitteAch1: "Participated in large-scale banking projects with massive data volumes",
    deloitteAch2: "Implemented triggers and Batch Apex for mass data management",
    deloitteAch3: "Adapted Visualforce components to Lightning Experience",
    deloitteAch4: "Collaborated directly with global functional teams",
    deloitteAch5: "Improved performance of critical processes, reducing user errors",

    // LBO
    lboRole: "Full-Stack Developer",
    lboPeriod: "Oct 2022 - Mar 2023",
    lboDesc: "Developed a full-stack solution (Python, React) to optimize the management and visualization of financial data.",
    lboAch1: "Designed and implemented React dashboards for real-time data visualization",
    lboAch2: "Optimized SQL queries and ETL processes for financial analysis",
    lboAch3: "Applied MVC patterns and consumed external APIs",
    lboAch4: "First approach to building scalable solutions outside Salesforce environment",

    // Projects
    projectsTitle: "Featured Projects",
    projectsDescription:
      "A selection of projects I've worked on, showcasing my expertise in Salesforce development and platform customization.",

    // Project 1
    project1Title: "Jira-Salesforce OAuth Integration",
    project1Desc: "Developed a bidirectional integration between Jira and Salesforce using OAuth 2.0 authentication. Implemented secure token management, automated ticket synchronization, and real-time status updates. System automatically creates Salesforce cases from Jira issues and maintains data consistency across both platforms.",
    project1Impact: "Seamless workflow automation",

    // Project 2
    project2Title: "LWC Excel Mass Upload System",
    project2Desc: "Developed a Lightning Web Component that allows users to upload Excel files for mass data loading. The component validates and processes data locally before sending to Apex backend, which creates records in bulk and integrates with external databases via Web Services. Reduced processing time by over 60%.",
    project2Impact: "60%+ time reduction",

    // Project 3
    project3Title: "Email-to-Case & Lead Assignment Automation",
    project3Desc: "Designed automated logic to associate Accounts and Contacts to Cases created via email. System intelligently matches email senders with custom fields on Account objects, prioritizing company accounts over personal accounts. Extended Salesforce's standard Email-to-Case flow.",
    project3Impact: "Automated lead routing",

    // Project 4
    project4Title: "Batch Apex Processing Engine",
    project4Desc: "Built custom Batch Apex job to evaluate complex business logic on large record sets. Processes date-based calculations, state transitions, and performs bulk operations with optimized SOQL queries and error handling for daily scheduled execution.",
    project4Impact: "Automated daily processing",

    // Project 5
    project5Title: "XML Lead Processing Service",
    project5Desc: "Implemented Apex service to process incoming emails containing XML attachments and automatically create Lead records. System reads, validates, and parses XML data dynamically, integrating Salesforce with external lead generation systems.",
    project5Impact: "Automated lead creation",

    // Skills categories
    skillCat1: "Salesforce Development",
    skillCat2: "Salesforce Configuration & Automation",
    skillCat3: "Integration & APIs",
    skillCat4: "Version Control & Development Tools",
    skillCat5: "AI & Modern Development",
    skillCat6: "Additional Technologies",
    newBadge: "NEW",

    // Personal Projects
    personalProjectsTitle: "Personal Projects",
    personalProjectsDescription:
      "Side projects that showcase my passion for software development, product thinking, and entrepreneurial spirit beyond corporate work.",
    keyFeatures: "Key Features:",
    status: "Status:",

    // Skills
    skillsTitle: "Skills & Expertise",
    skillsDescription:
      "A comprehensive overview of my technical skills and areas of expertise in Salesforce development and modern technologies.",

    // Contact
    contactTitle: "Let's Work Together",
    contactDescription:
      "I'm always interested in hearing about new Salesforce projects and opportunities. Whether you need a developer for enterprise solutions, integrations, or process automation, feel free to reach out.",
    sendEmail: "Send Email",
    viewLinkedIn: "View LinkedIn",
    location: "Location",
    locationValue: "Available for remote opportunities worldwide",
    languages: "Languages",
    languagesValue: "Spanish (Native) | English (C1 - goFLUENT Certified)",

    // Footer
    builtWith: "Built with Next.js & Tailwind CSS.",
    linkedIn: "LinkedIn",
    gitHub: "GitHub",
    email: "Email",
  },
  es: {
    // Navigation
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",

    // Hero
    hello: "Hola, soy Jeffrey Dietz",
    heroTitle: "Desarrollador y Analista Salesforce",
    heroDescription:
      "Desarrollador Salesforce en Accenture, construyendo soluciones empresariales escalables con más de 2 años de experiencia continua. Especializado en desarrollo Apex, Lightning Web Components, integraciones API y transformación digital.",
    accentureBadge: "Accenture",
    experienceBadge: "2+ Años de Experiencia",
    englishBadge: "Inglés C1",
    viewWork: "Ver Mi Trabajo",
    getInTouch: "Contactar",
    salesforceEcosystem: "Ecosistema Salesforce",

    // About
    aboutTitle: "Sobre mí",
    aboutParagraph1:
      "Soy un Desarrollador Salesforce apasionado con más de 2 años de experiencia continua (desde abril 2023) construyendo soluciones personalizadas en la plataforma Salesforce. Mi perfil combina experiencia técnica en desarrollo con pensamiento analítico y una fuerte orientación hacia la mejora de procesos de negocio.",
    aboutParagraph2:
      "Mi experiencia abarca desarrollo Apex, Lightning Web Components, integraciones REST/SOAP y automatización declarativa (Flows, Process Builder). He entregado exitosamente proyectos que redujeron el tiempo de procesamiento en más del 60% y automatizaron flujos de trabajo empresariales complejos en entornos AMS.",
    aboutParagraph3:
      "Más allá de Salesforce, tengo experiencia con Python/Django, Flutter y desarrollo full-stack, lo que me da una perspectiva única al diseñar integraciones y soluciones escalables.",
    professionalFocus: "Enfoque Profesional",
    professionalFocusText:
      "Desarrollador | Analista | Ingeniero Salesforce especializado en automatización empresarial, integraciones personalizadas y AMS (Application Management Services)",
    education: "Educación",
    educationTitle: "Ingeniería en Sistemas",
    educationSubtitle: "(En Curso, finalización esperada a fines de 2027) - Universidad Abierta Interamericana (UAI)",
    educationCourses:
      "Materias: Análisis y Diseño de Sistemas, Cálculo II, Física I, Tecnologías de las Comunicaciones II",
    universityDegreeTitle: "Técnico Universitario en Programación",
    universityDegreeSubtitle: "(Completado 2021-2023) - Universidad Austral",
    certifications: "Certificaciones e Idiomas",
    certGoFluent: "goFLUENT - Certificación Inglés C1 (CEFR C1.1, Septiembre 2025)",
    certCambridge: "Cambridge First Certificate (FCE) - Inglés B2 (2018)",
    certDELF: "DELF A2 - Francés (Ministère Français de l'Éducation Nationale)",
    certSalesforce: "Preparando certificación Salesforce Platform Developer I",
    languagesBilingual: "Multilingüe: Español (Nativo) | Inglés (C1) | Francés (A2)",
    workApproach: "Metodología de Trabajo",
    workApproachText:
      "Mentalidad analítica fuerte con experiencia en metodologías Ágiles (Scrum), soporte AMS, gestión de tickets (Jira/ServiceNow) y colaboración multifuncional con analistas de negocio y equipos de QA.",

    // Experience
    experienceTitle: "Experiencia Profesional",
    experienceDescription:
      "Mi trayectoria profesional trabajando con empresas líderes, construyendo soluciones Salesforce y aplicaciones empresariales.",
    keyAchievements: "Logros Destacados:",

    // Accenture
    accentureRole: "Desarrollador Salesforce",
    accenturePeriod: "Nov 2025 - Presente",
    accentureDesc: "Uniéndome a Accenture para trabajar en implementaciones empresariales de Salesforce y proyectos de transformación digital para clientes globales. Aportando más de 2 años de experiencia en desarrollo Salesforce para entregar soluciones innovadoras.",
    accentureAch1: "Trabajando en implementaciones de Salesforce a gran escala para clientes Fortune 500",
    accentureAch2: "Contribuyendo a iniciativas de transformación digital en múltiples industrias",
    accentureAch3: "Aprovechando experiencia en Apex, LWC e integraciones para requisitos empresariales complejos",
    accentureAch4: "Colaborando con equipos globales en soluciones de nivel empresarial",

    // Avalian
    avalianRole: "Desarrollador Salesforce",
    avalianPeriod: "Ago 2024 - Oct 2025",
    avalianDesc: "Desarrollé e implementé soluciones avanzadas de Salesforce, especializándome en automatización de procesos usando Apex, Lightning Web Components y Flow Builder.",
    avalianAch1: "Implementé integraciones REST API para conectividad con bases de datos externas",
    avalianAch2: "Desarrollé lógica personalizada en Apex para optimizar tiempos de ejecución en procesos de alto volumen",
    avalianAch3: "Mejoré el proceso Email-to-Case, automatizando la asignación de cuentas y contactos",
    avalianAch4: "Trabajé en ambiente Ágil gestionando tickets AMS, releases y testing",
    avalianAch5: "Supervisé la calidad de datos en flujos críticos y previne duplicados",

    // Deloitte
    deloitteRole: "Desarrollador y Analista Salesforce",
    deloittePeriod: "Abr 2023 - Ago 2024",
    deloitteDesc: "Implementé funcionalidades críticas usando Apex, Visualforce y Lightning Components para proyectos bancarios a gran escala manejando miles de registros.",
    deloitteAch1: "Participé en proyectos bancarios a gran escala con volúmenes masivos de datos",
    deloitteAch2: "Implementé triggers y Batch Apex para gestión masiva de datos",
    deloitteAch3: "Adapté componentes Visualforce a Lightning Experience",
    deloitteAch4: "Colaboré directamente con equipos funcionales globales",
    deloitteAch5: "Mejoré el rendimiento de procesos críticos, reduciendo errores de usuario",

    // LBO
    lboRole: "Desarrollador Full-Stack",
    lboPeriod: "Oct 2022 - Mar 2023",
    lboDesc: "Desarrollé una solución full-stack (Python, React) para optimizar la gestión y visualización de datos financieros.",
    lboAch1: "Diseñé e implementé dashboards en React para visualización de datos en tiempo real",
    lboAch2: "Optimicé consultas SQL y procesos ETL para análisis financiero",
    lboAch3: "Apliqué patrones MVC y consumí APIs externas",
    lboAch4: "Primera experiencia construyendo soluciones escalables fuera del entorno Salesforce",

    // Projects
    projectsTitle: "Proyectos Destacados",
    projectsDescription:
      "Una selección de proyectos en los que he trabajado, demostrando mi experiencia en desarrollo y personalización de la plataforma Salesforce.",

    // Project 1
    project1Title: "Integración OAuth Jira-Salesforce",
    project1Desc: "Desarrollé una integración bidireccional entre Jira y Salesforce usando autenticación OAuth 2.0. Implementé gestión segura de tokens, sincronización automática de tickets y actualizaciones de estado en tiempo real. El sistema crea automáticamente casos de Salesforce desde issues de Jira y mantiene consistencia de datos entre ambas plataformas.",
    project1Impact: "Automatización fluida del flujo de trabajo",

    // Project 2
    project2Title: "Sistema de Carga Masiva Excel LWC",
    project2Desc: "Desarrollé un Lightning Web Component que permite a los usuarios subir archivos Excel para carga masiva de datos. El componente valida y procesa datos localmente antes de enviarlos al backend Apex, que crea registros en masa e integra con bases de datos externas vía Web Services. Redujo el tiempo de procesamiento en más del 60%.",
    project2Impact: "Reducción de tiempo del 60%+",

    // Project 3
    project3Title: "Automatización Email-to-Case y Asignación de Leads",
    project3Desc: "Diseñé lógica automatizada para asociar Cuentas y Contactos a Casos creados vía email. El sistema empareja inteligentemente remitentes de email con campos personalizados en objetos Account, priorizando cuentas corporativas sobre cuentas personales. Extendí el flujo estándar Email-to-Case de Salesforce.",
    project3Impact: "Enrutamiento automático de leads",

    // Project 4
    project4Title: "Motor de Procesamiento Batch Apex",
    project4Desc: "Construí un job personalizado de Batch Apex para evaluar lógica de negocio compleja en grandes conjuntos de registros. Procesa cálculos basados en fechas, transiciones de estado y realiza operaciones masivas con consultas SOQL optimizadas y manejo de errores para ejecución diaria programada.",
    project4Impact: "Procesamiento diario automatizado",

    // Project 5
    project5Title: "Servicio de Procesamiento XML de Leads",
    project5Desc: "Implementé un servicio Apex para procesar emails entrantes con archivos adjuntos XML y crear automáticamente registros Lead. El sistema lee, valida y parsea datos XML dinámicamente, integrando Salesforce con sistemas externos de generación de leads.",
    project5Impact: "Creación automática de leads",

    // Skills categories
    skillCat1: "Desarrollo Salesforce",
    skillCat2: "Configuración y Automatización Salesforce",
    skillCat3: "Integración y APIs",
    skillCat4: "Control de Versiones y Herramientas de Desarrollo",
    skillCat5: "IA y Desarrollo Moderno",
    skillCat6: "Tecnologías Adicionales",
    newBadge: "NUEVO",

    // Personal Projects
    personalProjectsTitle: "Proyectos Personales",
    personalProjectsDescription:
      "Proyectos paralelos que demuestran mi pasión por el desarrollo de software, pensamiento de producto y espíritu emprendedor más allá del trabajo corporativo.",
    keyFeatures: "Características Principales:",
    status: "Estado:",

    // Skills
    skillsTitle: "Habilidades y Experiencia",
    skillsDescription:
      "Una visión completa de mis habilidades técnicas y áreas de especialización en desarrollo Salesforce y tecnologías modernas.",

    // Contact
    contactTitle: "Trabajemos Juntos",
    contactDescription:
      "Siempre estoy interesado en conocer nuevos proyectos y oportunidades en Salesforce. Ya sea que necesites un desarrollador para soluciones empresariales, integraciones o automatización de procesos, no dudes en contactarme.",
    sendEmail: "Enviar Email",
    viewLinkedIn: "Ver LinkedIn",
    location: "Ubicación",
    locationValue: "Disponible para oportunidades remotas en todo el mundo",
    languages: "Idiomas",
    languagesValue: "Español (Nativo) | Inglés (C1 - Certificado goFLUENT)",

    // Footer
    builtWith: "Construido con Next.js & Tailwind CSS.",
    linkedIn: "LinkedIn",
    gitHub: "GitHub",
    email: "Email",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
