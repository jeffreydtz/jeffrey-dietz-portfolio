"use client"

import { useEffect, useState } from "react"

function useMediaQuery(query: string, initial = false) {
  const [matches, setMatches] = useState(initial)

  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setMatches(mq.matches)
    onChange()
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [query])

  return matches
}

export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)")
}

export function useCoarsePointer() {
  return useMediaQuery("(pointer: coarse)")
}

export type CanvasMode = "pending" | "3d" | "fallback"

function isLowPowerDevice() {
  const nav = navigator as Navigator & {
    deviceMemory?: number
    connection?: { saveData?: boolean; effectiveType?: string }
  }
  const cores = nav.hardwareConcurrency ?? 8
  const memory = nav.deviceMemory
  const saveData = Boolean(nav.connection?.saveData)
  const slowNet = nav.connection?.effectiveType === "2g" || nav.connection?.effectiveType === "slow-2g"
  const smallViewport = window.matchMedia("(max-width: 767px)").matches
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const lowPower = saveData || slowNet || cores <= 2 || (memory !== undefined && memory <= 4)

  return reduced || smallViewport || lowPower
}

export function useCanvasMode() {
  const [mode, setMode] = useState<CanvasMode>("pending")

  useEffect(() => {
    const resolve = () => setMode(isLowPowerDevice() ? "fallback" : "3d")
    resolve()

    const mqMobile = window.matchMedia("(max-width: 767px)")
    const mqCoarse = window.matchMedia("(pointer: coarse)")
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    mqMobile.addEventListener("change", resolve)
    mqCoarse.addEventListener("change", resolve)
    mqReduced.addEventListener("change", resolve)
    return () => {
      mqMobile.removeEventListener("change", resolve)
      mqCoarse.removeEventListener("change", resolve)
      mqReduced.removeEventListener("change", resolve)
    }
  }, [])

  return mode
}
