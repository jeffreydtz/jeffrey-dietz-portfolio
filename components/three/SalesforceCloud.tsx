"use client"

import { Suspense, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Billboard,
  ContactShadows,
  Float,
  Html,
  MeshDistortMaterial,
  OrbitControls,
  Sparkles,
  Text,
} from "@react-three/drei"
import * as THREE from "three"
import { useInView } from "@/lib/use-in-view"
import { useCoarsePointer, usePrefersReducedMotion } from "@/lib/use-motion-prefs"

const SF_BLUE = "#00A1E0"
const SF_BLUE_DEEP = "#0070D2"
const SF_BLUE_LIGHT = "#7FD2F5"

export type CloudNodeDef = {
  id: string
  label: string
  hint: string
  target: string
}

type Lobe = { pos: [number, number, number]; radius: number; speed: number }

const LOBES: Lobe[] = [
  { pos: [-1.6, -0.1, 0], radius: 0.95, speed: 0.6 },
  { pos: [-0.55, 0.5, 0.1], radius: 1.15, speed: 0.8 },
  { pos: [0.6, 0.65, -0.05], radius: 1.05, speed: 0.7 },
  { pos: [1.7, 0.15, 0.05], radius: 0.9, speed: 0.5 },
  { pos: [-0.95, -0.55, 0.15], radius: 0.85, speed: 0.65 },
  { pos: [0.95, -0.45, 0.1], radius: 0.85, speed: 0.75 },
  { pos: [0.05, -0.6, 0], radius: 0.95, speed: 0.55 },
]

const NODE_ORBITS = [
  { orbit: 2.45, speed: 0.22, offset: 0.2, tilt: 0.42, color: "#00A1E0" },
  { orbit: 2.65, speed: 0.17, offset: 1.4, tilt: -0.2, color: "#7FD2F5" },
  { orbit: 2.35, speed: 0.25, offset: 2.6, tilt: 0.18, color: "#1B96FF" },
  { orbit: 2.75, speed: 0.15, offset: 3.7, tilt: -0.45, color: "#A78BFA" },
  { orbit: 2.55, speed: 0.2, offset: 5.0, tilt: 0.05, color: "#0D9DDA" },
]

type SalesforceCloudProps = {
  nodes: CloudNodeDef[]
  hoveredId?: string | null
  onNodeHover?: (id: string | null) => void
  onNodeSelect?: (id: string, target: string) => void
}

function CloudLobe({
  lobe,
  index,
  reducedMotion,
}: {
  lobe: Lobe
  index: number
  reducedMotion: boolean
}) {
  const ref = useRef<THREE.Mesh>(null)
  const basePos = useMemo(() => new THREE.Vector3(...lobe.pos), [lobe.pos])

  useFrame((state) => {
    if (!ref.current || reducedMotion) return
    const t = state.clock.elapsedTime
    ref.current.position.y = basePos.y + Math.sin(t * lobe.speed + index) * 0.05
    ref.current.position.x = basePos.x + Math.cos(t * lobe.speed * 0.7 + index) * 0.03
  })

  return (
    <mesh ref={ref} position={lobe.pos} castShadow receiveShadow>
      <sphereGeometry args={[lobe.radius, reducedMotion ? 32 : 64, reducedMotion ? 32 : 64]} />
      {reducedMotion ? (
        <meshStandardMaterial
          color={SF_BLUE}
          emissive={SF_BLUE_DEEP}
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.25}
        />
      ) : (
        <MeshDistortMaterial
          color={SF_BLUE}
          emissive={SF_BLUE_DEEP}
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.25}
          clearcoat={1}
          clearcoatRoughness={0.1}
          distort={0.22}
          speed={1.4}
        />
      )}
    </mesh>
  )
}

function CloudGroup({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    const targetX = reducedMotion ? 0 : state.pointer.y * 0.12
    const targetY = reducedMotion ? 0 : state.pointer.x * 0.22
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.06)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.06)
  })

  return (
    <group ref={group}>
      <Float
        speed={reducedMotion ? 0 : 1.2}
        rotationIntensity={reducedMotion ? 0 : 0.15}
        floatIntensity={reducedMotion ? 0 : 0.6}
      >
        <group scale={0.85}>
          {LOBES.map((lobe, i) => (
            <CloudLobe key={i} lobe={lobe} index={i} reducedMotion={reducedMotion} />
          ))}
          <mesh>
            <sphereGeometry args={[1.9, 32, 32]} />
            <meshBasicMaterial color={SF_BLUE_LIGHT} transparent opacity={0.08} />
          </mesh>
        </group>
      </Float>
    </group>
  )
}

function OrbitRing({
  radius,
  tilt,
  speed,
  color,
  reducedMotion,
}: {
  radius: number
  tilt: number
  speed: number
  color: string
  reducedMotion: boolean
}) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current || reducedMotion) return
    ref.current.rotation.z = state.clock.elapsedTime * speed
  })
  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.008, 16, 128]} />
        <meshBasicMaterial color={color} transparent opacity={0.45} />
      </mesh>
    </group>
  )
}

function TechNode({
  node,
  orbit,
  hovered,
  reducedMotion,
  onHover,
  onSelect,
}: {
  node: CloudNodeDef
  orbit: (typeof NODE_ORBITS)[number]
  hovered: boolean
  reducedMotion: boolean
  onHover: (id: string | null) => void
  onSelect: () => void
}) {
  const ref = useRef<THREE.Group>(null)
  const scale = useRef(1)
  const pulse = useRef(0)

  useFrame((state) => {
    if (!ref.current) return
    const t = reducedMotion ? orbit.offset : state.clock.elapsedTime * orbit.speed + orbit.offset
    ref.current.position.x = Math.cos(t) * orbit.orbit
    ref.current.position.z = Math.sin(t) * orbit.orbit
    ref.current.position.y = Math.sin(t * 0.7) * (reducedMotion ? 0 : 0.28) + orbit.tilt

    const target = hovered ? 1.55 : 1
    scale.current = THREE.MathUtils.lerp(scale.current, target, 0.12)
    if (pulse.current > 0) {
      pulse.current = Math.max(0, pulse.current - 0.016)
      scale.current += Math.sin(pulse.current * 18) * 0.12
    }
    ref.current.scale.setScalar(scale.current)
  })

  return (
    <group ref={ref}>
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation()
          onHover(node.id)
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          onHover(null)
        }}
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation()
          pulse.current = 0.4
          onSelect()
        }}
      >
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial
          color={orbit.color}
          emissive={orbit.color}
          emissiveIntensity={hovered ? 1.4 : 0.55}
          roughness={0.25}
          metalness={0.6}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color={orbit.color} transparent opacity={hovered ? 0.22 : 0.08} />
      </mesh>
      <Billboard follow>
        <Text
          position={[0, 0.28, 0]}
          fontSize={0.16}
          color={hovered ? "#ffffff" : SF_BLUE_LIGHT}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.008}
          outlineColor="#041018"
        >
          {node.label}
        </Text>
      </Billboard>
      {hovered ? (
        <Html center position={[0, 0.52, 0]} distanceFactor={7} style={{ pointerEvents: "none" }} zIndexRange={[20, 0]}>
          <div className="whitespace-nowrap rounded-md border border-[#00A1E0]/45 bg-[#041018]/90 px-2.5 py-1 text-[10px] font-mono text-[#7FD2F5] shadow-lg backdrop-blur-md">
            {node.hint}
          </div>
        </Html>
      ) : null}
    </group>
  )
}

function Scene({
  nodes,
  hoveredId,
  reducedMotion,
  coarse,
  onNodeHover,
  onNodeSelect,
}: {
  nodes: CloudNodeDef[]
  hoveredId: string | null
  reducedMotion: boolean
  coarse: boolean
  onNodeHover: (id: string | null) => void
  onNodeSelect: (id: string, target: string) => void
}) {
  const [dragging, setDragging] = useState(false)
  const interacting = dragging || Boolean(hoveredId)

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 6, 4]} intensity={1.4} color={SF_BLUE_LIGHT} />
      <pointLight position={[-4, -2, -3]} intensity={1.8} color={SF_BLUE} />
      <pointLight position={[0, 0, 4]} intensity={0.9} color="#ffffff" />

      <CloudGroup reducedMotion={reducedMotion} />

      {nodes.map((node, i) => (
        <TechNode
          key={node.id}
          node={node}
          orbit={NODE_ORBITS[i] ?? NODE_ORBITS[0]}
          hovered={hoveredId === node.id}
          reducedMotion={reducedMotion}
          onHover={onNodeHover}
          onSelect={() => onNodeSelect(node.id, node.target)}
        />
      ))}

      <OrbitRing radius={2.7} tilt={1.2} speed={0.18} color={SF_BLUE_LIGHT} reducedMotion={reducedMotion} />
      <OrbitRing radius={3.1} tilt={-0.8} speed={-0.12} color={SF_BLUE} reducedMotion={reducedMotion} />
      <OrbitRing radius={3.5} tilt={0.5} speed={0.08} color={SF_BLUE_DEEP} reducedMotion={reducedMotion} />

      {reducedMotion ? null : (
        <>
          <Sparkles count={48} scale={6} size={2.5} speed={0.35} color={SF_BLUE_LIGHT} opacity={0.7} />
          <Sparkles count={24} scale={4} size={1.5} speed={0.5} color="#ffffff" opacity={0.45} />
        </>
      )}

      <ContactShadows position={[0, -2, 0]} opacity={0.35} scale={8} blur={2.5} far={4} color={SF_BLUE_DEEP} />

      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        enableRotate={!coarse}
        autoRotate={!reducedMotion && !interacting}
        autoRotateSpeed={0.55}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.65}
        onStart={() => setDragging(true)}
        onEnd={() => setDragging(false)}
      />
    </>
  )
}

export default function SalesforceCloud({
  nodes,
  hoveredId = null,
  onNodeHover,
  onNodeSelect,
}: SalesforceCloudProps) {
  const { ref, inView } = useInView()
  const reducedMotion = usePrefersReducedMotion()
  const coarse = useCoarsePointer()

  return (
    <div ref={ref} className="relative h-full w-full canvas-3d" data-hover={hoveredId ? "true" : "false"} aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.2, 6.2], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={inView ? "always" : "never"}
      >
        <Suspense fallback={null}>
          <Scene
            nodes={nodes}
            hoveredId={hoveredId}
            reducedMotion={reducedMotion}
            coarse={coarse}
            onNodeHover={(id) => onNodeHover?.(id)}
            onNodeSelect={(id, target) => onNodeSelect?.(id, target)}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
