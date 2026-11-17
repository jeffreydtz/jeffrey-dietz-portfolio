"use client"

import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useInView } from "@/lib/use-in-view"
import { usePrefersReducedMotion } from "@/lib/use-motion-prefs"
import type { CloudNodeDef } from "@/lib/cloud-nodes"

export type { CloudNodeDef }

type OrchestratorCloudProps = {
  nodes: CloudNodeDef[]
  hoveredId?: string | null
  onNodeHover?: (id: string | null) => void
  onNodeSelect?: (id: string, target: string) => void
}

const ACCENT = "#7cff6b"
const CORE = "#f5f5f5"
const DUST = "#9b9b9b"

const AGENT_SLOTS: Array<[number, number, number]> = [
  [1.55, 0.95, 0.35],
  [-1.6, 0.7, 0.45],
  [1.15, -1.05, -0.4],
  [-1.05, -0.95, 0.7],
]

function gaussianSphere(count: number, radius: number, seed: number) {
  const positions = new Float32Array(count * 3)
  let s = seed
  const rand = () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
  for (let i = 0; i < count; i += 1) {
    const u = rand()
    const v = rand()
    const theta = u * Math.PI * 2
    const phi = Math.acos(2 * v - 1)
    const r = radius * Math.cbrt(rand())
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = r * Math.cos(phi)
  }
  return positions
}

function filament(from: THREE.Vector3, to: THREE.Vector3, count: number) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i += 1) {
    const t = i / (count - 1)
    const wobble = Math.sin(t * Math.PI) * 0.12
    positions[i * 3] = from.x + (to.x - from.x) * t + wobble * 0.4
    positions[i * 3 + 1] = from.y + (to.y - from.y) * t + wobble
    positions[i * 3 + 2] = from.z + (to.z - from.z) * t
  }
  return positions
}

function PointCloud({
  positions,
  color,
  size,
  opacity = 0.85,
}: {
  positions: Float32Array
  color: string
  size: number
  opacity?: number
}) {
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return g
  }, [positions])

  return (
    <points geometry={geom}>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Scene({
  agents,
  hoveredId,
  reducedMotion,
  onNodeHover,
  onNodeSelect,
}: {
  agents: CloudNodeDef[]
  hoveredId: string | null
  reducedMotion: boolean
  onNodeHover: (id: string | null) => void
  onNodeSelect: (id: string, target: string) => void
}) {
  const group = useRef<THREE.Group>(null)

  const corePts = useMemo(() => gaussianSphere(720, 0.72, 13), [])
  const haloPts = useMemo(() => gaussianSphere(280, 1.15, 97), [])
  const agentPts = useMemo(
    () => AGENT_SLOTS.map((slot, i) => ({ slot, points: gaussianSphere(180, 0.32, 21 + i * 17) })),
    [],
  )
  const filaments = useMemo(() => {
    const origin = new THREE.Vector3(0, 0, 0)
    return AGENT_SLOTS.map((slot) => filament(origin, new THREE.Vector3(...slot), 48))
  }, [])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    if (!reducedMotion) {
      group.current.rotation.y = t * 0.08 + state.pointer.x * 0.18
      group.current.rotation.x = Math.sin(t * 0.15) * 0.08 + state.pointer.y * 0.12
    }
  })

  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[2.4, 2.2, 3]} intensity={1.1} color={ACCENT} />
      <pointLight position={[-2.2, -1.4, 2]} intensity={0.55} color="#ffffff" />

      <group ref={group}>
        <PointCloud positions={haloPts} color={DUST} size={0.028} opacity={0.4} />
        <PointCloud positions={corePts} color={CORE} size={0.042} opacity={0.95} />
        <mesh>
          <sphereGeometry args={[0.26, 16, 16]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.92} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.55, 16, 16]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.12} />
        </mesh>

        {filaments.map((pts, i) => (
          <PointCloud key={`f-${i}`} positions={pts} color={ACCENT} size={0.016} opacity={0.45} />
        ))}

        {agentPts.map((agent, i) => {
          const node = agents[i]
          const active = node && hoveredId === node.id
          return (
            <group key={node?.id ?? i} position={agent.slot}>
              <PointCloud
                positions={agent.points}
                color={active ? ACCENT : CORE}
                size={active ? 0.045 : 0.034}
                opacity={0.9}
              />
              <mesh>
                <sphereGeometry args={[0.09, 12, 12]} />
                <meshBasicMaterial color={active ? ACCENT : CORE} transparent opacity={active ? 0.95 : 0.7} />
              </mesh>
              {node ? (
                <mesh
                  onPointerOver={(e) => {
                    e.stopPropagation()
                    onNodeHover(node.id)
                  }}
                  onPointerOut={(e) => {
                    e.stopPropagation()
                    onNodeHover(null)
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    onNodeSelect(node.id, node.target)
                  }}
                >
                  <sphereGeometry args={[0.28, 8, 8]} />
                  <meshBasicMaterial transparent opacity={0} />
                </mesh>
              ) : null}
            </group>
          )
        })}
      </group>
    </>
  )
}

export default function OrchestratorCloud({
  nodes,
  hoveredId = null,
  onNodeHover,
  onNodeSelect,
}: OrchestratorCloudProps) {
  const { ref, inView } = useInView()
  const reducedMotion = usePrefersReducedMotion()
  const agents = nodes.slice(0, 4)

  return (
    <div ref={ref} className="relative h-full w-full canvas-3d" data-hover={hoveredId ? "true" : "false"} aria-hidden="true">
      <Canvas
        dpr={[1, 1.35]}
        camera={{ position: [0, 0.15, 5.4], fov: 40 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "default",
          failIfMajorPerformanceCaveat: false,
          stencil: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
        frameloop={inView ? "always" : "never"}
      >
        <Suspense fallback={null}>
          <Scene
            agents={agents}
            hoveredId={hoveredId}
            reducedMotion={reducedMotion}
            onNodeHover={(id) => onNodeHover?.(id)}
            onNodeSelect={(id, target) => onNodeSelect?.(id, target)}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
