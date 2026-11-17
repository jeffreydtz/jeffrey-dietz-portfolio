"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(options: IntersectionObserverInit = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const threshold = options.threshold ?? 0.12
  const rootMargin = options.rootMargin ?? "0px 0px -12% 0px"
  const root = options.root ?? null

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold, rootMargin, root },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, root])

  return { ref, isVisible }
}
