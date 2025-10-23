import { Building2, MapPin } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    company: "Accenture",
    logo: "/logos/accenture.jpeg",
    role: "Salesforce Developer",
    period: "Nov 2025 - Present",
    location: "Remote",
    description:
      "Joining Accenture to work on enterprise Salesforce implementations and digital transformation projects for global clients. Bringing 2+ years of Salesforce development experience to deliver innovative solutions.",
    achievements: [
      "Working on large-scale Salesforce implementations for Fortune 500 clients",
      "Contributing to digital transformation initiatives across multiple industries",
      "Leveraging Apex, LWC, and integration expertise for complex business requirements",
      "Collaborating with global teams on enterprise-grade solutions",
    ],
    technologies: ["Salesforce", "Apex", "LWC", "Enterprise Architecture", "Consulting", "Digital Transformation"],
  },
  {
    company: "Avalian",
    logo: "/logos/avalian.png",
    role: "Salesforce Developer",
    period: "Aug 2024 - Oct 2025",
    location: "Remote",
    description:
      "Developed and implemented advanced Salesforce solutions, specializing in process automation using Apex, Lightning Web Components, and Flow Builder.",
    achievements: [
      "Implemented REST API integrations for external database connectivity",
      "Developed custom Apex logic to optimize execution times for high-volume processes",
      "Enhanced Email-to-Case process, automating account and contact assignment",
      "Worked in Agile environment managing AMS tickets, releases, and testing",
      "Supervised data quality in critical flows and prevented duplicates",
    ],
    technologies: ["Apex", "LWC", "Flow Builder", "REST API", "Batch Apex", "SOQL"],
  },
  {
    company: "Deloitte",
    logo: "/logos/deloitte.jpeg",
    role: "Salesforce Developer & Analyst",
    period: "Apr 2023 - Aug 2024",
    location: "Hybrid",
    description:
      "Implemented critical functionalities using Apex, Visualforce, and Lightning Components for large-scale banking projects handling thousands of records.",
    achievements: [
      "Participated in large-scale banking projects with massive data volumes",
      "Implemented triggers and Batch Apex for mass data management",
      "Adapted Visualforce components to Lightning Experience",
      "Collaborated directly with global functional teams",
      "Improved performance of critical processes, reducing user errors",
    ],
    technologies: ["Apex", "Visualforce", "Lightning Components", "Batch Apex", "Triggers", "SOQL"],
  },
  {
    company: "LBO",
    logo: "/logos/lbo.png",
    role: "Full-Stack Developer",
    period: "Oct 2022 - Mar 2023",
    location: "Remote",
    description:
      "Developed a full-stack solution (Python, React) to optimize the management and visualization of financial data.",
    achievements: [
      "Designed and implemented React dashboards for real-time data visualization",
      "Optimized SQL queries and ETL processes for financial analysis",
      "Applied MVC patterns and consumed external APIs",
      "First approach to building scalable solutions outside Salesforce environment",
    ],
    technologies: ["Python", "React", "PostgreSQL", "REST APIs", "SQL", "ETL"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Professional Experience</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          My professional journey working with leading companies, building Salesforce solutions and enterprise
          applications.
        </p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-accent/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>

              <div className="mb-4">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    {exp.logo ? (
                      <div className="w-16 h-16 rounded-lg bg-background border border-border flex items-center justify-center overflow-hidden p-2">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-accent" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                      <p className="text-lg text-accent font-semibold">{exp.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 justify-end">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-muted border border-border rounded-full text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
