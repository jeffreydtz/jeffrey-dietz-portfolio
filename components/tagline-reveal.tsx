"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { usePrefersReducedMotion } from "@/lib/use-motion-prefs"

export default function TaglineReveal({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLParagraphElement>(null)
  const [activeCount, setActiveCount] = useState(0)
  const words = text.split(" ")
  const shown = reduced ? words.length : activeCount

  useEffect(() => {
    if (reduced) return
    const node = ref.current
    if (!node) return

    let intervalId: number | undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        let i = 0
        intervalId = window.setInterval(() => {
          i += 1
          setActiveCount(i)
          if (i >= words.length && intervalId) window.clearInterval(intervalId)
        }, 70)
        observer.disconnect()
      },
      { threshold: 0.35, rootMargin: "0px 0px -20% 0px" },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      if (intervalId) window.clearInterval(intervalId)
    }
  }, [reduced, words.length])

  return (
    <p ref={ref} className={cn("heading-3 max-w-[680px] text-balance", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className={cn("tagline-word", index < shown && "is-on")}>
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  )
}
