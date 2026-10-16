"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createAssemblyMaterials } from "./AssemblyMaterials";

export interface AssemblyGeometryProps {
  pointer: { x: number; y: number };
  entranceProgress?: number; // 0 to 1
}

export function AssemblyGeometry({ pointer }: AssemblyGeometryProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  const materials = useMemo(() => createAssemblyMaterials(), []);

  // Shared Box & Cylinder Geometries
  const plateGeom1 = useMemo(() => new THREE.BoxGeometry(4.4, 0.26, 2.8), []);
  const plateGeom2 = useMemo(() => new THREE.BoxGeometry(3.6, 0.22, 2.4), []);
  const plateGeom3 = useMemo(() => new THREE.BoxGeometry(3.2, 0.2, 2.0), []);
  const railGeom = useMemo(() => new THREE.CylinderGeometry(0.04, 0.04, 2.4, 16), []);
  const busGeom = useMemo(() => new THREE.BoxGeometry(0.12, 0.08, 2.2), []);
  const coreGeom = useMemo(() => new THREE.CylinderGeometry(0.5, 0.5, 2.2, 32), []);
  const ringGeom = useMemo(() => new THREE.TorusGeometry(0.72, 0.03, 16, 64), []);
  const nodeGeom = useMemo(() => new THREE.CylinderGeometry(0.12, 0.12, 0.1, 16), []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Subtle pointer parallax response
    const targetRotY = pointer.x * 0.25;
    const targetRotX = -pointer.y * 0.18 + 0.12;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.05
    );

    // Gentle floating breathing oscillation
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.06;

    // Internal core gentle rotation
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.6;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0.15, -0.2, 0]}>
      {/* LEVEL 1: FOUNDATION PLATE (Lower level - Cloud Infrastructure & Systems) */}
      <group position={[0, -1.0, 0]}>
        {/* Main ceramic plate */}
        <mesh geometry={plateGeom1} material={materials.ceramicMaterial} castShadow receiveShadow />

        {/* Machined edge trim */}
        <mesh position={[0, -0.14, 0]}>
          <boxGeometry args={[4.44, 0.04, 2.84]} />
          <primitive object={materials.satinMetalMaterial} attach="material" />
        </mesh>

        {/* Inlaid brand cyan circuit channel */}
        <mesh position={[0, 0.135, 0.4]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.8, 0.08]} />
          <primitive object={materials.cyanAccentMaterial} attach="material" />
        </mesh>
        <mesh position={[1.2, 0.135, -0.3]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.4, 0.08]} />
          <primitive object={materials.cyanAccentMaterial} attach="material" />
        </mesh>

        {/* Telemetry sensor nodes */}
        <mesh position={[-1.6, 0.16, 0.8]} geometry={nodeGeom} material={materials.cyanAccentMaterial} />
        <mesh position={[-1.2, 0.16, 0.8]} geometry={nodeGeom} material={materials.satinMetalMaterial} />
        <mesh position={[1.6, 0.16, -0.8]} geometry={nodeGeom} material={materials.amberAccentMaterial} />
      </group>

      {/* CENTRAL ORCHESTRATION NEXUS (Vertical cylinder & rings) */}
      <group position={[0, 0, 0]}>
        <mesh ref={coreRef} geometry={coreGeom} material={materials.obsidianMaterial} />
        <mesh ref={ringRef1} position={[0, 0.2, 0]} geometry={ringGeom} material={materials.cyanAccentMaterial} />
        <mesh ref={ringRef2} position={[0, -0.4, 0]} geometry={ringGeom} material={materials.satinMetalMaterial} />
      </group>

      {/* LEVEL 2: BRAIN PLATE (Middle level - AI & Workflow Automation, offset right) */}
      <group position={[0.6, -0.1, 0]}>
        {/* Main ceramic plate */}
        <mesh geometry={plateGeom2} material={materials.ceramicMaterial} castShadow receiveShadow />

        {/* Satin base extrusion */}
        <mesh position={[0, -0.12, 0]}>
          <boxGeometry args={[3.64, 0.04, 2.44]} />
          <primitive object={materials.satinMetalMaterial} attach="material" />
        </mesh>

        {/* Inlaid active data channel */}
        <mesh position={[0.2, 0.115, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.8, 0.1]} />
          <primitive object={materials.cyanAccentMaterial} attach="material" />
        </mesh>

        {/* Logic unit cubes */}
        <mesh position={[1.1, 0.2, 0.6]}>
          <boxGeometry args={[0.3, 0.16, 0.3]} />
          <primitive object={materials.obsidianMaterial} attach="material" />
        </mesh>
        <mesh position={[1.1, 0.2, 0.1]}>
          <boxGeometry args={[0.3, 0.16, 0.3]} />
          <primitive object={materials.obsidianMaterial} attach="material" />
        </mesh>
      </group>

      {/* LEVEL 3: INTERFACE PLATE (Top level - Custom Software & Supply Chain, offset left) */}
      <group position={[-0.6, 0.85, 0]}>
        {/* Obsidian precision plate */}
        <mesh geometry={plateGeom3} material={materials.obsidianMaterial} castShadow receiveShadow />

        {/* Glowing cyan lead bar */}
        <mesh position={[-0.2, 0.11, -0.6]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.2, 0.14]} />
          <primitive object={materials.cyanAccentMaterial} attach="material" />
        </mesh>

        {/* Satin metallic bevel trim */}
        <mesh position={[0, -0.11, 0]}>
          <boxGeometry args={[3.24, 0.03, 2.04]} />
          <primitive object={materials.satinMetalMaterial} attach="material" />
        </mesh>

        {/* Micro terminal status LEDs */}
        <mesh position={[-1.1, 0.12, 0.6]} geometry={nodeGeom} material={materials.cyanAccentMaterial} />
        <mesh position={[-0.8, 0.12, 0.6]} geometry={nodeGeom} material={materials.cyanAccentMaterial} />
      </group>

      {/* PRECISION STRUCTURAL CONDUITS (Interconnecting vertical bus lines) */}
      <group>
        {/* Left vertical data rail */}
        <mesh position={[-1.5, -0.1, -0.7]} geometry={railGeom} material={materials.conduitMaterial} />
        {/* Right vertical data rail */}
        <mesh position={[1.5, -0.1, 0.7]} geometry={railGeom} material={materials.conduitMaterial} />
        {/* Diagonal crossover bus */}
        <mesh position={[0, 0.4, 0.5]} rotation={[0.4, 0.2, 0.3]} geometry={busGeom} material={materials.conduitMaterial} />
        <mesh position={[0, -0.6, -0.5]} rotation={[-0.4, -0.2, -0.3]} geometry={busGeom} material={materials.conduitMaterial} />
      </group>
    </group>
  );
}
