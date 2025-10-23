"use client"

interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function About({ setActiveSection }: AboutProps) {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">About</h2>
            <nav className="space-y-4">
              <button
                onClick={() => setActiveSection("about")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => setActiveSection("projects")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection("skills")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </button>
            </nav>
          </div>

          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Salesforce developer with 5+ years of experience building custom solutions on the
              Salesforce platform. I specialize in creating efficient, scalable applications that drive business value.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across Apex development, Lightning Web Components, Salesforce configuration, and
              platform integration. I've worked with Fortune 500 companies and innovative startups to deliver
              enterprise-grade solutions.
            </p>

            <div className="pt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Current Role</h3>
                <p className="text-muted-foreground">Senior Salesforce Developer at Enterprise Solutions Inc.</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Certifications</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Salesforce Certified Platform Developer II</li>
                  <li>• Salesforce Certified Administrator</li>
                  <li>• Salesforce Certified Platform App Builder</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
