import React, { useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Float,
  Html,
  OrbitControls,
  RoundedBox,
  Environment,
  Outlines,
} from '@react-three/drei'
import { motion } from 'framer-motion'

function ModuleMesh({ item, selected, onSelect, position }) {
  const isSelected = selected === item.id

  return (
    <group
      position={position}
      onClick={(e) => {
        e.stopPropagation()
        onSelect(item.id)
      }}
    >
      <RoundedBox
        args={item.scale}
        radius={0.08}
        smoothness={3}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={item.color}
          metalness={0.18}
          roughness={0.45}
          emissive={isSelected ? item.color : '#000000'}
          emissiveIntensity={isSelected ? 0.22 : 0}
        />

        {isSelected && (
          <Outlines
            thickness={0.05}
            color="#1f9d67"
            screenspace
          />
        )}
      </RoundedBox>

      {isSelected && (
        <Html
          center
          position={[0, 0.45, 0]}
          distanceFactor={5}
        >
          <div className="pointer-events-none whitespace-nowrap rounded-lg border border-emerald-200 bg-white/95 px-2 py-1 text-[9px] font-bold text-emerald-800 shadow-lg">
            {item.short}
          </div>
        </Html>
      )}
    </group>
  )
}

function Headset({
  selected,
  onSelect,
  items,
  positions,
}) {
  return (
    <group rotation={[0.08, -0.18, 0]}>

      {/* Main headset body */}
      <RoundedBox
        args={[3.1, 1.28, 1.28]}
        radius={0.35}
        smoothness={5}
        position={[0, -0.05, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color="#111a17"
          metalness={0.4}
          roughness={0.31}
        />
      </RoundedBox>

      {/* Front section */}
      <RoundedBox
        args={[2.05, 0.82, 1.05]}
        radius={0.28}
        smoothness={5}
        position={[0, -0.22, 0.66]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color="#1e2d28"
          metalness={0.25}
          roughness={0.28}
        />
      </RoundedBox>

      {/* Optical lenses */}
      <mesh position={[-0.78, -0.15, 1.18]}>
        <cylinderGeometry args={[0.36, 0.36, 0.08, 48]} />
        <meshStandardMaterial
          color="#cbd8d3"
          metalness={0.18}
          roughness={0.18}
        />
      </mesh>

      <mesh position={[0.78, -0.15, 1.18]}>
        <cylinderGeometry args={[0.36, 0.36, 0.08, 48]} />
        <meshStandardMaterial
          color="#cbd8d3"
          metalness={0.18}
          roughness={0.18}
        />
      </mesh>

      {/* Bottom detail */}
      <mesh position={[0, -0.68, 0.76]}>
        <boxGeometry args={[2.22, 0.14, 0.20]} />
        <meshStandardMaterial
          color="#0c1210"
          roughness={0.52}
        />
      </mesh>

      {/* Head strap */}
      <mesh position={[0, 0.72, -0.10]}>
        <boxGeometry args={[2.65, 0.12, 0.18]} />
        <meshStandardMaterial
          color="#202d28"
          roughness={0.65}
        />
      </mesh>

      {/* Internal mechanical details */}
      {[
        [0, 0.2, 0.05],
        [-0.85, 0.15, 0.05],
        [0.85, 0.15, 0.05],
        [0, -0.25, 0.05],
      ].map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.18, 0.08, 0.72]} />
          <meshStandardMaterial
            color="#293a33"
            roughness={0.7}
          />
        </mesh>
      ))}

      {/* Clickable modules */}
      {[
        'battery',
        'controller',
        'strap',
        'housing',
        'optical',
        'board',
      ].map((id) => {
        const item = items.find((x) => x.id === id)

        if (!item) return null

        return (
          <ModuleMesh
            key={item.id}
            item={item}
            selected={selected}
            onSelect={onSelect}
            position={positions[item.id] || item.position}
          />
        )
      })}
    </group>
  )
}

export default function VRViewer({
  items,
  selectedId,
  onSelect,
}) {
  const [explode, setExplode] = useState(false)

  const selected =
    items.find((item) => item.id === selectedId) ||
    items[0]

  const explodedPositions = useMemo(() => {
    const map = {}

    items.forEach((item, index) => {
      map[item.id] = explode
        ? [
            item.position[0] * 1.55,
            item.position[1] * 1.55 +
              (index % 2 ? 0.18 : -0.06),
            item.position[2] * 1.55,
          ]
        : item.position
    })

    return map
  }, [explode, items])

  return (
    <div className="panel relative h-[540px] overflow-hidden rounded-3xl bg-[#eef2ee]">

      {/* Header */}
      <div className="absolute left-5 top-5 z-10 max-w-xs">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
          Interactive 3D Hardware
        </div>

        <h3 className="text-lg font-black text-slate-900">
          Select a module
        </h3>

        <p className="text-xs leading-5 text-slate-500">
          Drag to rotate • scroll to zoom • click a module to inspect its research data.
        </p>
      </div>

      {/* Exploded View Button */}
      <div className="absolute right-5 top-5 z-10">
        <button
          onClick={() => setExplode((value) => !value)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm hover:border-emerald-300"
        >
          {explode ? 'Assemble' : 'Exploded View'}
        </button>
      </div>

      {/* 3D Scene */}
      <Canvas
        camera={{
          position: [4.7, 2.8, 5.8],
          fov: 42,
        }}
        shadows
      >
        <color
          attach="background"
          args={['#eef2ee']}
        />

        <ambientLight intensity={1.4} />

        <directionalLight
          position={[4, 5, 4]}
          intensity={3.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <directionalLight
          position={[-3, 1, 2]}
          intensity={1.2}
        />

        <Environment preset="studio" />

        <Float
          speed={1.1}
          rotationIntensity={0.06}
          floatIntensity={0.25}
        >
          <Headset
            selected={selectedId}
            onSelect={onSelect}
            items={items}
            positions={explodedPositions}
          />
        </Float>

        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.28}
          scale={7}
          blur={2.8}
          far={4}
        />

        <OrbitControls
          enablePan={false}
          minDistance={4}
          maxDistance={8}
          target={[0, 0, 0.2]}
        />
      </Canvas>

      {/* Selected module information */}
      {selected && (
        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="absolute bottom-4 left-4 right-4 rounded-2xl border border-slate-200 bg-white/92 p-4 shadow-lg backdrop-blur"
        >
          <div className="flex items-start justify-between gap-3">

            <div>
              <div className="text-sm font-black text-slate-900">
                {selected.name}
              </div>

              <div className="mt-1 text-xs text-slate-500">
                {selected.failure}
              </div>
            </div>

            <div className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
              Replaceable in prototype
            </div>

          </div>
        </motion.div>
      )}
    </div>
  )
}