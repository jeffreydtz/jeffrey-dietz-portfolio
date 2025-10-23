import Image from "next/image"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-accent mb-2">Hello, I'm Jeffrey Dietz</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">Salesforce Developer & Analyst</h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Salesforce Developer at <strong className="text-foreground">Accenture</strong>, building scalable enterprise solutions with 2+ years of continuous experience.
              Specialized in Apex development, Lightning Web Components, API integrations, and digital transformation.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Accenture</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">2+ Years Experience</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">C1 English</span>
            </div>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-full aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-border/50 flex items-center justify-center p-8">
              <div className="text-center space-y-6">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/logos/salesforce.jpeg"
                    alt="Salesforce"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-muted-foreground font-semibold text-lg">Salesforce Ecosystem</p>
                <div className="flex flex-wrap gap-2 justify-center px-4">
                  <span className="text-xs px-3 py-1.5 bg-background/50 rounded-full font-medium">Apex</span>
                  <span className="text-xs px-3 py-1.5 bg-background/50 rounded-full font-medium">LWC</span>
                  <span className="text-xs px-3 py-1.5 bg-background/50 rounded-full font-medium">Flows</span>
                  <span className="text-xs px-3 py-1.5 bg-background/50 rounded-full font-medium">APIs</span>
                  <span className="text-xs px-3 py-1.5 bg-background/50 rounded-full font-medium">Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
