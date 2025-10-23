const skillCategories = [
  {
    category: "Languages & Frameworks",
    skills: ["Apex", "JavaScript", "TypeScript", "Lightning Web Components", "Visualforce"],
  },
  {
    category: "Salesforce Tools",
    skills: ["Process Builder", "Flow", "Workflows", "Batch Apex", "Scheduled Actions", "REST API"],
  },
  {
    category: "Integration & Data",
    skills: ["REST/SOAP APIs", "Data Loader", "ETL", "Middleware Integration", "Database Design"],
  },
  {
    category: "Development Practices",
    skills: ["Unit Testing", "Git", "CI/CD", "Agile", "Code Review", "Documentation"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Skills & Expertise</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A comprehensive overview of my technical skills and areas of expertise in Salesforce development.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:border-accent/50 transition-colors"
                  >
                    {skill}
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
