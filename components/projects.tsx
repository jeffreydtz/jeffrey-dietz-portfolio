const projects = [
  {
    title: "Custom CRM Integration",
    description:
      "Built a comprehensive CRM system integrating Salesforce with third-party APIs, handling 10,000+ daily transactions.",
    technologies: ["Apex", "REST API", "Lightning Web Components"],
    year: "2024",
  },
  {
    title: "Automated Workflow Engine",
    description:
      "Developed an advanced workflow automation system reducing manual processes by 80% and improving team productivity.",
    technologies: ["Apex Triggers", "Process Builder", "Flow"],
    year: "2023",
  },
  {
    title: "Lightning Dashboard Suite",
    description:
      "Created interactive dashboards and reports providing real-time insights into sales and customer data.",
    technologies: ["Lightning Components", "SOQL", "Analytics"],
    year: "2023",
  },
  {
    title: "Data Migration Platform",
    description: "Engineered a robust data migration tool for moving legacy systems to Salesforce with zero data loss.",
    technologies: ["Apex", "Batch Processing", "Data Loader"],
    year: "2022",
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

              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

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
