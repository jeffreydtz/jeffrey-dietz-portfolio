const personalProjects = [
  {
    title: "F1 Prode",
    tagline: "Formula 1 Predictions Platform",
    description:
      "Cross-platform mobile application for Formula 1 race predictions. Users compete in private tournaments by predicting Top 10 finishers, pole position, fastest lap, and DNFs. Features real-time standings, dynamic scoring system, and social competition.",
    features: [
      "Integration with public F1 API (Ergast API) for live race data",
      "Private tournament system with custom scoring rules",
      "Real-time leaderboards and user rankings",
      "Flutter UI with Django REST backend",
      "SQLite database for local caching and offline support",
    ],
    technologies: ["Flutter", "Django", "Python", "REST API", "SQLite", "F1 API"],
    status: "In Development",
    impact: "Product vision & full-stack architecture",
  },
  {
    title: "CanchaYa",
    tagline: "Sports Venue Booking System",
    description:
      "Academic project (UAI) for managing sports venue reservations with automatic turn confirmation and release system. Designed with UML modeling and object-oriented principles, following iterative development methodology.",
    features: [
      "Turn confirmation system with automatic release for unconfirmed bookings",
      "Multi-venue management with availability calendar",
      "User notification system for booking reminders",
      "Admin dashboard for venue and schedule management",
      "Iterative development with functional increments",
    ],
    technologies: ["UML", "Object-Oriented Design", "System Analysis", "Software Engineering"],
    status: "Academic Project (Completed)",
    impact: "Applied software engineering principles",
  },
]

export default function PersonalProjects() {
  return (
    <section id="personal-projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Personal Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Side projects that showcase my passion for software development, product thinking, and entrepreneurial spirit
          beyond corporate work.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {personalProjects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border hover:border-accent/50 bg-card transition-all duration-300"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">{project.tagline}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full whitespace-nowrap">
                    {project.status}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 rounded-full">
                    {project.impact}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
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
