"use client"

import { useEffect, useRef } from "react"

export default function AmbientBackdrop() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let cx = tx
    let cy = ty

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const tick = () => {
      cx += (tx - cx) * 0.08
      cy += (ty - cy) * 0.08
      el.style.setProperty("--spot-x", `${cx}px`)
      el.style.setProperty("--spot-y", `${cy}px`)
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
    }
  }, [])

  return (
    <div ref={ref} aria-hidden className="ambient-backdrop fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="ambient-grid absolute inset-0" />
      <div className="ambient-spot absolute inset-0" />
      <div className="ambient-aurora absolute inset-0" />
      <div className="ambient-noise absolute inset-0" />
    </div>
  )
}
