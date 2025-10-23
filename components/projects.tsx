const projects = [
  {
    title: "LWC Excel Mass Upload System",
    description:
      "Developed a Lightning Web Component that allows users to upload Excel files for mass data loading. The component validates and processes data locally before sending to Apex backend, which creates records in bulk and integrates with external databases via Web Services. Reduced processing time by over 60%.",
    technologies: ["Lightning Web Components", "Apex", "REST/SOAP API", "Excel Processing", "Mass DML"],
    impact: "60%+ time reduction",
    year: "2024",
  },
  {
    title: "Email-to-Case & Lead Assignment Automation",
    description:
      "Designed automated logic to associate Accounts and Contacts to Cases created via email. System intelligently matches email senders with custom field 'Correo_electronico__c' on Account objects, prioritizing company accounts over personal accounts. Extended Salesforce's standard Email-to-Case flow.",
    technologies: ["Salesforce Flows", "Email-to-Case", "SOQL", "Record-Triggered Flows", "Assignment Rules"],
    impact: "Automated lead routing",
    year: "2024",
  },
  {
    title: "Batch Apex - CRM_RCCR_Saltos_Batch",
    description:
      "Built custom Batch Apex job to evaluate complex business logic on large record sets. Processes date-based calculations, state transitions, and performs bulk operations with optimized SOQL queries and error handling for daily scheduled execution.",
    technologies: ["Batch Apex", "Schedulable Apex", "SOQL", "Governor Limits", "Error Handling"],
    impact: "Automated daily processing",
    year: "2023-2024",
  },
  {
    title: "VW_EmailToLeadService_Fabrica - XML Lead Processing",
    description:
      "Implemented Apex service to process incoming emails containing XML attachments and automatically create Lead records. System reads, validates, and parses XML data dynamically, integrating Salesforce with external lead generation systems.",
    technologies: ["Apex", "XML Parsing", "Email Services", "Dynamic SOQL", "Lead Management"],
    impact: "Automated lead creation",
    year: "2023",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A selection of projects I've worked on, showcasing my expertise in Salesforce development and platform
          customization.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border hover:border-accent/50 bg-card hover:bg-muted/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>

              <p className="text-muted-foreground mb-3 leading-relaxed">{project.description}</p>

              {project.impact && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 rounded-full">
                    Impact: {project.impact}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
