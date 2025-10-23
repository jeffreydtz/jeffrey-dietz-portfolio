"use client"

interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function About({ setActiveSection }: AboutProps) {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">About</h2>
            <nav className="space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </button>
            </nav>
          </div>

          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Salesforce Developer with <strong className="text-foreground">2+ years of continuous experience</strong> (since April 2023)
              building custom solutions on the Salesforce platform. My profile combines technical development expertise
              with analytical thinking and a strong orientation toward business process improvement.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans <strong className="text-foreground">Apex development</strong>, <strong className="text-foreground">Lightning Web Components</strong>,
              REST/SOAP integrations, and declarative automation (Flows, Process Builder). I've successfully delivered projects
              that reduced processing time by over 60% and automated complex business workflows in AMS environments.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond Salesforce, I have experience with Python/Django, Flutter, and full-stack development,
              which gives me a unique perspective when designing integrations and scalable solutions.
            </p>

            <div className="pt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Professional Focus</h3>
                <p className="text-muted-foreground">
                  Salesforce Developer | Analyst | Engineer specializing in enterprise automation,
                  custom integrations, and AMS (Application Management Services)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Education</h3>
                <p className="text-muted-foreground">
                  <strong>Systems Engineering</strong> (In Progress) - Universidad Abierta Interamericana (UAI)
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Courses: System Analysis & Design, Calculus II, Physics I, Communication Technologies II
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Certifications & Languages</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• <strong className="text-foreground">goFLUENT - C1 English Certification</strong> (CEFR C1.1, September 2025)</li>
                  <li>• Preparing for Salesforce Platform Developer I</li>
                  <li>• Bilingual: Spanish (Native) / English (C1 Professional)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Work Approach</h3>
                <p className="text-muted-foreground">
                  Strong analytical mindset with experience in Agile methodologies (Scrum), AMS support,
                  ticket management (Jira/ServiceNow), and cross-functional collaboration with business analysts and QA teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
