import Link from "next/link"

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100dvh] items-center px-4 sm:px-6 lg:px-8">
      <div className="ambient-noise pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[680px]">
        <p className="micro-label mb-4 text-accent">404</p>
        <h1 className="heading-2 hero-heading mb-4">Page not found</h1>
        <p className="body-3 mb-8 text-muted-foreground">
          This URL is not part of the portfolio. Head back to the home page to keep reading.
        </p>
        <Link href="/" className="btn-primary px-6 py-3">
          Back to portfolio
        </Link>
      </div>
    </main>
  )
}
