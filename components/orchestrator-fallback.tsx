"use client"

import { useMemo } from "react"
import type { CloudNodeDef } from "@/lib/cloud-nodes"

const SLOTS: Array<[number, number]> = [
  [61, 24],
  [24, 41],
  [76, 57],
  [39, 74],
]

function seededDots(cx: number, cy: number, count: number, radius: number, seed: number, squash = 0.88) {
  const dots: Array<{ x: number; y: number; r: number; o: number }> = []
  let s = seed
  const rand = () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
  for (let i = 0; i < count; i += 1) {
    const a = rand() * Math.PI * 2
    const d = radius * Math.pow(rand(), 0.62)
    dots.push({
      x: cx + Math.cos(a) * d,
      y: cy + Math.sin(a) * d * squash,
      r: 0.16 + rand() * 0.5,
      o: 0.16 + rand() * 0.62,
    })
  }
  return dots
}

export default function OrchestratorFallback({
  nodes,
  hoveredId,
  onNodeHover,
  onNodeSelect,
}: {
  nodes: CloudNodeDef[]
  hoveredId: string | null
  onNodeHover: (id: string | null) => void
  onNodeSelect: (id: string, target: string) => void
}) {
  const agents = nodes.slice(0, 4)
  const mist = useMemo(() => seededDots(50, 50, 160, 36, 3, 0.92), [])
  const core = useMemo(() => seededDots(50, 50, 280, 17, 13, 0.9), [])
  const clusters = useMemo(
    () => SLOTS.map((slot, i) => seededDots(slot[0], slot[1], 88, 8.2, 21 + i * 17, 0.86)),
    [],
  )

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-hidden="true">
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="48%" r="46%">
          <stop offset="0%" stopColor="#4f8cff" stopOpacity="0.22" />
          <stop offset="55%" stopColor="#4f8cff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#4f8cff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="48" r="36" fill="url(#coreGlow)" />
      {mist.map((dot, i) => (
        <circle key={`m-${i}`} cx={dot.x} cy={dot.y} r={dot.r * 0.7} fill="#8fb4ff" opacity={dot.o * 0.38} />
      ))}
      {core.map((dot, i) => (
        <circle key={`c-${i}`} cx={dot.x} cy={dot.y} r={dot.r} fill={i % 7 === 0 ? "#4f8cff" : "#f4f7ff"} opacity={dot.o} />
      ))}
      {clusters.map((dots, i) => {
        const node = agents[i]
        const active = node && hoveredId === node.id
        return (
          <g key={node?.id ?? i}>
            {dots.map((dot, j) => (
              <circle
                key={j}
                cx={dot.x}
                cy={dot.y}
                r={active ? dot.r * 1.18 : dot.r}
                fill={active ? "#4f8cff" : j % 5 === 0 ? "#8fb4ff" : "#f4f7ff"}
                opacity={active ? Math.min(1, dot.o + 0.2) : dot.o}
              />
            ))}
            {node ? (
              <circle
                cx={SLOTS[i][0]}
                cy={SLOTS[i][1]}
                r="10"
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => onNodeHover(node.id)}
                onMouseLeave={() => onNodeHover(null)}
                onClick={() => onNodeSelect(node.id, node.target)}
              />
            ) : null}
          </g>
        )
      })}
    </svg>
  )
}
