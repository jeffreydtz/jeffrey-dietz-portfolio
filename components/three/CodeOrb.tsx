"use client"

import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text, Icosahedron, Sparkles } from "@react-three/drei"
import * as THREE from "three"

const ACCENT = "#5B8DEF"
const ACCENT_DEEP = "#3B5BDB"
const GLOW = "#9FB8FF"

const SYMBOLS = ["{ }", "</>", "()", "=>", "[ ]", ";", "&&", "||", "++", "//"]

function FloatingSymbol({ text, orbit, speed, offset, tilt }: { text: string; orbit: number; speed: number; offset: number; tilt: number }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * speed + offset
    ref.current.position.x = Math.cos(t) * orbit
    ref.current.position.z = Math.sin(t) * orbit
    ref.current.position.y = Math.sin(t * 0.7 + offset) * 0.35 + tilt
    ref.current.lookAt(0, ref.current.position.y, 0)
    ref.current.rotateY(Math.PI)
  })
  return (
    <group ref={ref}>
      <Text fontSize={0.22} color={GLOW} anchorX="center" anchorY="middle" outlineWidth={0.005} outlineColor={ACCENT_DEEP}>
        {text}
      </Text>
    </group>
  )
}

function CoreOrb() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.x = t * 0.25
    ref.current.rotation.y = t * 0.35
  })

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
      <group>
        <Icosahedron ref={ref} args={[1.05, 1]}>
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT_DEEP}
            emissiveIntensity={0.6}
            wireframe
            roughness={0.4}
            metalness={0.8}
          />
        </Icosahedron>
        <Icosahedron args={[0.85, 4]}>
          <meshStandardMaterial
            color={ACCENT_DEEP}
            emissive={ACCENT}
            emissiveIntensity={0.4}
            transparent
            opacity={0.35}
            roughness={0.1}
            metalness={1}
          />
        </Icosahedron>
        <mesh>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshBasicMaterial color={GLOW} />
        </mesh>
      </group>
    </Float>
  )
}

function CircuitRing() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = state.clock.elapsedTime * 0.15
    ref.current.rotation.x = Math.PI / 2
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.4, 0.012, 16, 256]} />
      <meshBasicMaterial color={ACCENT} transparent opacity={0.55} />
    </mesh>
  )
}

export default function CodeOrb() {
  const symbols = useMemo(() => {
    return SYMBOLS.map((s, i) => ({
      text: s,
      orbit: 1.75 + (i % 3) * 0.25,
      speed: 0.25 + (i % 4) * 0.07,
      offset: (i / SYMBOLS.length) * Math.PI * 2,
      tilt: ((i % 5) - 2) * 0.18,
    }))
  }, [])

  return (
    <div className="relative w-full h-full">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5.5], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[3, 3, 3]} intensity={2} color={ACCENT} />
          <pointLight position={[-3, -2, 2]} intensity={1.4} color={GLOW} />

          <CoreOrb />
          <CircuitRing />

          {symbols.map((s, i) => (
            <FloatingSymbol key={i} {...s} />
          ))}

          <Sparkles count={50} scale={5} size={1.8} speed={0.4} color={GLOW} opacity={0.6} />
        </Suspense>
      </Canvas>
    </div>
  )
}
