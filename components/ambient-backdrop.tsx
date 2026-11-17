"use client"

export default function AmbientBackdrop() {
  return (
    <div aria-hidden className="ambient-backdrop pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="ambient-wash absolute inset-0" />
      <div className="ambient-grid absolute inset-0" />
      <div className="ambient-noise absolute inset-0" />
    </div>
  )
}
