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
    heroDescription: "Salesforce Developer at Accenture, building scalable enterprise solutions with 2+ years of continuous experience. Specialized in Apex development, Lightning Web Components, API integrations, and digital transformation.",
    viewWork: "View My Work",
    getInTouch: "Get in Touch",
    salesforceEcosystem: "Salesforce Ecosystem",

    // About
    aboutTitle: "About",
    professionalFocus: "Professional Focus",
    education: "Education",
    certifications: "Certifications & Languages",
    workApproach: "Work Approach",

    // Experience
    experienceTitle: "Professional Experience",
    experienceDescription: "My professional journey working with leading companies, building Salesforce solutions and enterprise applications.",
    keyAchievements: "Key Achievements:",

    // Projects
    projectsTitle: "Featured Projects",
    projectsDescription: "A selection of projects I've worked on, showcasing my expertise in Salesforce development and platform customization.",

    // Personal Projects
    personalProjectsTitle: "Personal Projects",
    personalProjectsDescription: "Side projects that showcase my passion for software development, product thinking, and entrepreneurial spirit beyond corporate work.",
    keyFeatures: "Key Features:",

    // Skills
    skillsTitle: "Skills & Expertise",
    skillsDescription: "A comprehensive overview of my technical skills and areas of expertise in Salesforce development.",

    // Contact
    contactTitle: "Let's Work Together",
    contactDescription: "I'm always interested in hearing about new Salesforce projects and opportunities. Whether you need a developer for enterprise solutions, integrations, or process automation, feel free to reach out.",
    sendEmail: "Send Email",
    viewLinkedIn: "View LinkedIn",
    location: "Location",
    locationValue: "Available for remote opportunities worldwide",
    languages: "Languages",
    languagesValue: "Spanish (Native) | English (C1 - goFLUENT Certified)",
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
    heroDescription: "Desarrollador Salesforce en Accenture, construyendo soluciones empresariales escalables con más de 2 años de experiencia continua. Especializado en desarrollo Apex, Lightning Web Components, integraciones API y transformación digital.",
    viewWork: "Ver Mi Trabajo",
    getInTouch: "Contactar",
    salesforceEcosystem: "Ecosistema Salesforce",

    // About
    aboutTitle: "Sobre mí",
    professionalFocus: "Enfoque Profesional",
    education: "Educación",
    certifications: "Certificaciones e Idiomas",
    workApproach: "Metodología de Trabajo",

    // Experience
    experienceTitle: "Experiencia Profesional",
    experienceDescription: "Mi trayectoria profesional trabajando con empresas líderes, construyendo soluciones Salesforce y aplicaciones empresariales.",
    keyAchievements: "Logros Destacados:",

    // Projects
    projectsTitle: "Proyectos Destacados",
    projectsDescription: "Una selección de proyectos en los que he trabajado, demostrando mi experiencia en desarrollo y personalización de la plataforma Salesforce.",

    // Personal Projects
    personalProjectsTitle: "Proyectos Personales",
    personalProjectsDescription: "Proyectos paralelos que demuestran mi pasión por el desarrollo de software, pensamiento de producto y espíritu emprendedor más allá del trabajo corporativo.",
    keyFeatures: "Características Principales:",

    // Skills
    skillsTitle: "Habilidades y Experiencia",
    skillsDescription: "Una visión completa de mis habilidades técnicas y áreas de especialización en desarrollo Salesforce.",

    // Contact
    contactTitle: "Trabajemos Juntos",
    contactDescription: "Siempre estoy interesado en conocer nuevos proyectos y oportunidades en Salesforce. Ya sea que necesites un desarrollador para soluciones empresariales, integraciones o automatización de procesos, no dudes en contactarme.",
    sendEmail: "Enviar Email",
    viewLinkedIn: "Ver LinkedIn",
    location: "Ubicación",
    locationValue: "Disponible para oportunidades remotas en todo el mundo",
    languages: "Idiomas",
    languagesValue: "Español (Nativo) | Inglés (C1 - Certificado goFLUENT)",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
