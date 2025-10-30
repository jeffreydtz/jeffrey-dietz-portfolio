"use client"

import { useScrollAnimation } from "@/lib/use-scroll-animation"

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
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="personal-projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Personal Projects
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
            Side projects that showcase my passion for software development, product thinking, and entrepreneurial spirit
            beyond corporate work.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-border/50 hover:border-accent/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-accent font-medium mt-1">{project.tagline}</p>
                      </div>
                      <span className="px-4 py-2 text-xs font-semibold bg-accent/10 text-accent rounded-full whitespace-nowrap border border-accent/20">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6 text-base">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-3 group/item">
                            <span className="text-accent mt-1.5 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                            <span className="group-hover/item:text-foreground transition-colors duration-200">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        {project.impact}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 hover:border-accent/30 hover:scale-105 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
