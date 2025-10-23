export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-accent mb-2">Welcome</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">Salesforce Developer</h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building scalable, enterprise-grade solutions on the Salesforce platform. Specialized in Apex, Lightning,
              and platform customization.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                View My Work
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-full aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-border/50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">☁️</div>
                <p className="text-muted-foreground">Salesforce Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
