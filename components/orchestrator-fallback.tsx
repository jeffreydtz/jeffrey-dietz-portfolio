"use client"

import type { CloudNodeDef } from "@/lib/cloud-nodes"
import { cn } from "@/lib/utils"
import { usePrefersReducedMotion } from "@/lib/use-motion-prefs"

const SLOTS = [
  { x: 78, y: 22 },
  { x: 18, y: 28 },
  { x: 80, y: 74 },
  { x: 22, y: 78 },
]

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
  const reduced = usePrefersReducedMotion()
  const agents = nodes.slice(0, 4)

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-hidden="true">
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7cff6b" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#7cff6b" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="30" fill="url(#coreGlow)" />
      {agents.map((node, i) => {
        const slot = SLOTS[i]
        return (
          <line
            key={`l-${node.id}`}
            x1="50"
            y1="50"
            x2={slot.x}
            y2={slot.y}
            stroke="#7cff6b"
            strokeOpacity={hoveredId === node.id ? 0.9 : 0.45}
            strokeWidth="0.5"
          />
        )
      })}
      <circle cx="50" cy="50" r="5" fill="#7cff6b" />
      <circle cx="50" cy="50" r="9" fill="none" stroke="#f5f5f5" strokeOpacity="0.55" strokeWidth="0.5" />
      <text x="50" y="62" textAnchor="middle" fill="#f5f5f5" fontSize="3.2" fontFamily="ui-monospace, monospace">
        ORCH
      </text>
      {agents.map((node, i) => {
        const slot = SLOTS[i]
        const active = hoveredId === node.id
        return (
          <g key={node.id}>
            <circle
              cx={slot.x}
              cy={slot.y}
              r={active ? 4 : 3.2}
              fill={active ? "#7cff6b" : "#f5f5f5"}
              className={cn(!reduced && "transition-[r,fill] duration-300")}
            />
            <text
              x={slot.x}
              y={slot.y + 8}
              textAnchor="middle"
              fill="#b8b8b8"
              fontSize="3"
              fontFamily="ui-monospace, monospace"
            >
              {node.label}
            </text>
            <circle
              cx={slot.x}
              cy={slot.y}
              r="9"
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => onNodeHover(node.id)}
              onMouseLeave={() => onNodeHover(null)}
              onClick={() => onNodeSelect(node.id, node.target)}
            />
          </g>
        )
      })}
    </svg>
  )
}
