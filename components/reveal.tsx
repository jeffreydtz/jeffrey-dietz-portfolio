"use client"

import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { usePrefersReducedMotion } from "@/lib/use-motion-prefs"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

export default function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode
  className?: string
  delayMs?: number
}) {
  const { ref, isVisible } = useScrollAnimation()
  const reduced = usePrefersReducedMotion()
  const style: CSSProperties | undefined = delayMs ? { transitionDelay: `${delayMs}ms` } : undefined

  return (
    <div
      ref={ref}
      className={cn("reveal", (isVisible || reduced) && "is-visible", className)}
      style={style}
    >
      {children}
    </div>
  )
}
