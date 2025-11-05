'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function CloudParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const timeRef = useRef(0)

  // Create cloud-shaped particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3)

    for (let i = 0; i < 2000; i++) {
      // Create a cloud-like distribution
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 2 + Math.random() * 1.5

      // Flatten it to look more cloud-like
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = (radius * Math.sin(phi) * Math.sin(theta)) * 0.6
      const z = (radius * Math.cos(phi)) * 0.8

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }

    return positions
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return

    timeRef.current += 0.01

    // Smooth floating animation
    pointsRef.current.rotation.y = timeRef.current * 0.15
    pointsRef.current.rotation.x = Math.sin(timeRef.current * 0.3) * 0.1
    pointsRef.current.position.y = Math.sin(timeRef.current * 0.5) * 0.3

    // Mouse interaction
    const { mouse } = state
    pointsRef.current.rotation.y += mouse.x * 0.05
    pointsRef.current.rotation.x += mouse.y * 0.05
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#00d4ff"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function FloatingCubes() {
  const groupRef = useRef<THREE.Group>(null)

  const cubes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2
      const radius = 4
      return {
        position: [
          Math.cos(angle) * radius,
          Math.sin(i * 0.5) * 2,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
        scale: 0.15 + Math.random() * 0.1,
      }
    })
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += 0.002

    groupRef.current.children.forEach((child: THREE.Object3D, i: number) => {
      child.rotation.x += 0.01
      child.rotation.y += 0.01
      child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.001
    })
  })

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <mesh key={i} position={cube.position} rotation={cube.rotation} scale={cube.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#0176d3"
            emissive="#00a1e0"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
            wireframe
          />
        </mesh>
      ))}
    </group>
  )
}

function SalesforceLogo3D() {
  const logoRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!logoRef.current) return
    logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
    logoRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
  })

  return (
    <group ref={logoRef}>
      {/* Salesforce cloud representation */}
      <mesh position={[0, 0, 0]} scale={1.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#00a1e0"
          emissive="#0176d3"
          emissiveIntensity={0.8}
          transparent
          opacity={0.3}
          wireframe={false}
        />
      </mesh>

      {/* Inner glow sphere */}
      <mesh position={[0, 0, 0]} scale={0.8}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  )
}

export default function SalesforceCloud3D() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <color attach="background" args={['transparent']} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#0176d3" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#00a1e0"
        />

        {/* 3D Elements */}
        <SalesforceLogo3D />
        <CloudParticles />
        <FloatingCubes />

        {/* Sparkles for extra glamour */}
        <Sparkles
          count={100}
          scale={10}
          size={2}
          speed={0.4}
          opacity={0.6}
          color="#00d4ff"
        />

        {/* Stars background */}
        <Stars
          radius={50}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Allow user to interact with mouse */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
