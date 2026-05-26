"use client"

import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sparkles, Environment, ContactShadows } from "@react-three/drei"
import * as THREE from "three"

const SF_BLUE = "#00A1E0"
const SF_BLUE_DEEP = "#0070D2"
const SF_BLUE_LIGHT = "#7FD2F5"

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

function CloudLobe({ lobe, index }: { lobe: Lobe; index: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const basePos = useMemo(() => new THREE.Vector3(...lobe.pos), [lobe.pos])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const drift = Math.sin(t * lobe.speed + index) * 0.05
    ref.current.position.y = basePos.y + drift
    ref.current.position.x = basePos.x + Math.cos(t * lobe.speed * 0.7 + index) * 0.03
  })

  return (
    <mesh ref={ref} position={lobe.pos} castShadow receiveShadow>
      <sphereGeometry args={[lobe.radius, 64, 64]} />
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
    </mesh>
  )
}

function CloudGroup() {
  const group = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.rotation.y = Math.sin(t * 0.25) * 0.18
    group.current.rotation.x = Math.cos(t * 0.2) * 0.06
  })

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6}>
      <group ref={group} scale={0.85}>
        {LOBES.map((lobe, i) => (
          <CloudLobe key={i} lobe={lobe} index={i} />
        ))}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1.9, 32, 32]} />
          <meshBasicMaterial color={SF_BLUE_LIGHT} transparent opacity={0.08} />
        </mesh>
      </group>
    </Float>
  )
}

function OrbitRing({ radius, tilt, speed, color }: { radius: number; tilt: number; speed: number; color: string }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current) return
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

export default function SalesforceCloud() {
  return (
    <div className="relative w-full h-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0.2, 6.2], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.45} />
          <directionalLight position={[4, 6, 4]} intensity={1.4} color={SF_BLUE_LIGHT} />
          <pointLight position={[-4, -2, -3]} intensity={1.8} color={SF_BLUE} />
          <pointLight position={[0, 0, 4]} intensity={0.9} color={"#ffffff"} />

          <CloudGroup />

          <OrbitRing radius={2.7} tilt={1.2} speed={0.18} color={SF_BLUE_LIGHT} />
          <OrbitRing radius={3.1} tilt={-0.8} speed={-0.12} color={SF_BLUE} />
          <OrbitRing radius={3.5} tilt={0.5} speed={0.08} color={SF_BLUE_DEEP} />

          <Sparkles count={60} scale={6} size={2.5} speed={0.35} color={SF_BLUE_LIGHT} opacity={0.7} />
          <Sparkles count={30} scale={4} size={1.5} speed={0.5} color={"#ffffff"} opacity={0.45} />

          <ContactShadows position={[0, -2, 0]} opacity={0.35} scale={8} blur={2.5} far={4} color={SF_BLUE_DEEP} />

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
