"use client";

import React, { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { createAssemblyMaterials } from "./AssemblyMaterials";

export interface AssemblyGeometryProps {
  pointer: { x: number; y: number };
  entranceProgress?: number;
  exploded?: boolean;
}

export function AssemblyGeometry({ pointer, exploded = false }: AssemblyGeometryProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const [activeTier, setActiveTier] = useState<number | null>(null);

  const materials = useMemo(() => createAssemblyMaterials(), []);

  // Shared Geometries
  const plateGeom1 = useMemo(() => new THREE.BoxGeometry(4.6, 0.26, 3.0), []);
  const plateGeom2 = useMemo(() => new THREE.BoxGeometry(3.8, 0.22, 2.5), []);
  const plateGeom3 = useMemo(() => new THREE.BoxGeometry(3.2, 0.18, 2.0), []);
  const railGeom = useMemo(() => new THREE.CylinderGeometry(0.045, 0.045, 2.6, 16), []);
  const busGeom = useMemo(() => new THREE.BoxGeometry(0.12, 0.08, 2.2), []);
  const coreGeom = useMemo(() => new THREE.CylinderGeometry(0.52, 0.52, 2.2, 32), []);
  const ringGeom = useMemo(() => new THREE.TorusGeometry(0.8, 0.028, 16, 64), []);
  const nodeGeom = useMemo(() => new THREE.CylinderGeometry(0.12, 0.12, 0.1, 16), []);
  const finGeom = useMemo(() => new THREE.BoxGeometry(0.04, 0.2, 0.6), []);

  // Smooth exploded view displacement interpolation
  const currentDisplacement = useRef(0);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Subtle pointer parallax response
    const targetRotY = pointer.x * 0.28;
    const targetRotX = -pointer.y * 0.2 + 0.12;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.06
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.06
    );

    // Exploded view expansion
    const targetDisplacement = exploded ? 0.75 : 0;
    currentDisplacement.current = THREE.MathUtils.lerp(
      currentDisplacement.current,
      targetDisplacement,
      0.08
    );

    // Gentle floating breathing oscillation
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.06;

    // Internal core gentle rotation
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.45;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.65;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x += delta * 0.55;
    }
  });

  const disp = currentDisplacement.current;

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0.15, -0.22, 0]}>
      
      {/* =================================================================
          LEVEL 1: FOUNDATION BEDROCK (Cloud Infrastructure & Global DevOps)
          Lower level: Resilient server blade array, cooling fins, fiber conduits
          ================================================================= */}
      <group 
        position={[0, -1.05 - disp * 0.6, 0]}
        onPointerOver={() => setActiveTier(1)}
        onPointerOut={() => setActiveTier(null)}
      >
        {/* Main ceramic foundation slab */}
        <mesh geometry={plateGeom1} material={materials.ceramicMaterial} castShadow receiveShadow />

        {/* Machined aerospace aluminum edge trim */}
        <mesh position={[0, -0.14, 0]}>
          <boxGeometry args={[4.64, 0.04, 3.04]} />
          <primitive object={materials.satinMetalMaterial} attach="material" />
        </mesh>

        {/* Server Blade Heatsink Fins (Precision Milled Array along rear) */}
        {[-1.8, -1.5, -1.2, -0.9, -0.6, 0.6, 0.9, 1.2, 1.5, 1.8].map((x, i) => (
          <mesh key={i} position={[x, 0.16, -1.0]} geometry={finGeom} material={materials.darkMetalMaterial} />
        ))}

        {/* High-speed fiber optic channels */}
        <mesh position={[0, 0.135, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[4.0, 0.08]} />
          <primitive object={materials.cyanAccentMaterial} attach="material" />
        </mesh>
        <mesh position={[1.4, 0.135, -0.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.5, 0.08]} />
          <primitive object={materials.cyanAccentMaterial} attach="material" />
        </mesh>

        {/* Telemetry sensor beacons (Live server status) */}
        <mesh position={[-1.8, 0.17, 1.0]} geometry={nodeGeom} material={materials.emeraldAccentMaterial} />
        <mesh position={[-1.4, 0.17, 1.0]} geometry={nodeGeom} material={materials.cyanAccentMaterial} />
        <mesh position={[1.8, 0.17, -1.0]} geometry={nodeGeom} material={materials.amberAccentMaterial} />

        {/* Level 1 Annotation */}
        <Html position={[-2.4, 0.2, 1.2]} center distanceFactor={12}>
          <div className={`pointer-events-none transition-all duration-300 font-mono text-[9px] font-bold px-2 py-0.5 rounded border whitespace-nowrap shadow-xs ${
            activeTier === 1 
              ? "bg-[#161B17] text-white border-emerald-400 scale-105" 
              : "bg-white/90 text-[#161B17] border-[#D5D7CE]"
          }`}>
            <span className="text-emerald-700 font-black mr-1">01</span>
            CLOUD & DEVOPS // 99.99% UPTIME
          </div>
        </Html>
      </group>

      {/* =================================================================
          CENTRAL ORCHESTRATION NEXUS (Autonomous AI Engine & Knowledge Graph)
          ================================================================= */}
      <group position={[0, 0, 0]}>
        <mesh ref={coreRef} geometry={coreGeom} material={materials.obsidianMaterial} />
        <mesh ref={ringRef1} position={[0, 0.2, 0]} geometry={ringGeom} material={materials.cyanAccentMaterial} />
        <mesh ref={ringRef2} position={[0, -0.4, 0]} geometry={ringGeom} material={materials.satinMetalMaterial} />
      </group>

      {/* =================================================================
          LEVEL 2: REASONING & AUTOMATION CORE (Translucent Glass Logic Prism)
          Middle level: Autonomous AI Decision Node & Connected Workflows
          ================================================================= */}
      <group 
        position={[0.55, -0.08, 0]}
        onPointerOver={() => setActiveTier(2)}
        onPointerOut={() => setActiveTier(null)}
      >
        {/* Translucent Frosted Glass Decision Slab */}
        <mesh geometry={plateGeom2} material={materials.frostedGlassMaterial} castShadow receiveShadow />

        {/* Satin base chassis rim */}
        <mesh position={[0, -0.12, 0]}>
          <boxGeometry args={[3.84, 0.04, 2.54]} />
          <primitive object={materials.satinMetalMaterial} attach="material" />
        </mesh>

        {/* Inlaid active reasoning bus channel */}
        <mesh position={[0.2, 0.115, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.0, 0.1]} />
          <primitive object={materials.cyanAccentMaterial} attach="material" />
        </mesh>

        {/* Neural logic unit cubes */}
        <mesh position={[1.2, 0.2, 0.7]}>
          <boxGeometry args={[0.32, 0.18, 0.32]} />
          <primitive object={materials.obsidianMaterial} attach="material" />
        </mesh>
        <mesh position={[1.2, 0.2, 0.2]}>
          <boxGeometry args={[0.32, 0.18, 0.32]} />
          <primitive object={materials.cyanAccentMaterial} attach="material" />
        </mesh>

        {/* Level 2 Annotation */}
        <Html position={[2.1, 0.2, 0.8]} center distanceFactor={12}>
          <div className={`pointer-events-none transition-all duration-300 font-mono text-[9px] font-bold px-2 py-0.5 rounded border whitespace-nowrap shadow-xs ${
            activeTier === 2 
              ? "bg-[#161B17] text-white border-cyan-400 scale-105" 
              : "bg-white/90 text-[#161B17] border-[#D5D7CE]"
          }`}>
            <span className="text-cyan-700 font-black mr-1">02</span>
            AI AGENTS // AUTONOMOUS REASONING
          </div>
        </Html>
      </group>

      {/* =================================================================
          LEVEL 3: USER APPLICATION INTERFACE (Living SaaS & Digital Products)
          Top level: Polished obsidian display slab & living client portals
          ================================================================= */}
      <group 
        position={[-0.55, 0.9 + disp * 0.6, 0]}
        onPointerOver={() => setActiveTier(3)}
        onPointerOut={() => setActiveTier(null)}
      >
        {/* Obsidian precision plate with chamfered clearcoat */}
        <mesh geometry={plateGeom3} material={materials.obsidianMaterial} castShadow receiveShadow />

        {/* Luminous cyan client application lead bar */}
        <mesh position={[-0.2, 0.105, -0.55]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.4, 0.14]} />
          <primitive object={materials.cyanAccentMaterial} attach="material" />
        </mesh>

        {/* Satin metallic bevel trim */}
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[3.24, 0.03, 2.04]} />
          <primitive object={materials.satinMetalMaterial} attach="material" />
        </mesh>

        {/* Micro terminal status LEDs */}
        <mesh position={[-1.1, 0.11, 0.6]} geometry={nodeGeom} material={materials.cyanAccentMaterial} />
        <mesh position={[-0.8, 0.11, 0.6]} geometry={nodeGeom} material={materials.emeraldAccentMaterial} />

        {/* Level 3 Annotation */}
        <Html position={[-2.0, 0.25, -0.6]} center distanceFactor={12}>
          <div className={`pointer-events-none transition-all duration-300 font-mono text-[9px] font-bold px-2 py-0.5 rounded border whitespace-nowrap shadow-xs ${
            activeTier === 3 
              ? "bg-[#161B17] text-white border-emerald-400 scale-105" 
              : "bg-white/90 text-[#161B17] border-[#D5D7CE]"
          }`}>
            <span className="text-emerald-700 font-black mr-1">03</span>
            DIGITAL PRODUCTS // CLIENT PORTALS
          </div>
        </Html>
      </group>

      {/* =================================================================
          PRECISION STRUCTURAL CONDUITS (Vertical Interconnecting Data Rails)
          ================================================================= */}
      <group>
        {/* Left vertical data rail */}
        <mesh position={[-1.5, -0.1, -0.7]} geometry={railGeom} material={materials.satinMetalMaterial} />
        {/* Right vertical data rail */}
        <mesh position={[1.5, -0.1, 0.7]} geometry={railGeom} material={materials.satinMetalMaterial} />
        {/* Diagonal crossover bus */}
        <mesh position={[0, 0.4, 0.5]} rotation={[0.4, 0.2, 0.3]} geometry={busGeom} material={materials.darkMetalMaterial} />
        <mesh position={[0, -0.6, -0.5]} rotation={[-0.4, -0.2, -0.3]} geometry={busGeom} material={materials.darkMetalMaterial} />
      </group>
    </group>
  );
}
