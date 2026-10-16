"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function FlowParticles() {
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  // 3 distinct 3D data pathways connecting the assembly
  const curves = useMemo(() => {
    // Curve 1: From Lower Plate, through Central Core, into Upper Plate
    const c1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.4, -0.9, 0.4),
      new THREE.Vector3(-0.6, -0.6, 0.2),
      new THREE.Vector3(0, -0.1, 0),
      new THREE.Vector3(0.4, 0.4, -0.2),
      new THREE.Vector3(-0.4, 0.95, -0.3),
    ]);

    // Curve 2: From Middle Plate, through Core, down to Foundation
    const c2 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.4, 0.0, 0.3),
      new THREE.Vector3(0.7, 0.1, 0.1),
      new THREE.Vector3(0, 0.2, 0),
      new THREE.Vector3(-0.6, -0.4, -0.4),
      new THREE.Vector3(1.0, -0.9, -0.5),
    ]);

    // Curve 3: Peripheral monitoring loop
    const c3 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.8, 0.9, 0.4),
      new THREE.Vector3(1.2, 0.3, 0.6),
      new THREE.Vector3(0.8, -0.8, 0.5),
      new THREE.Vector3(-1.2, -0.8, -0.5),
    ]);
    c3.closed = true;

    return [c1, c2, c3];
  }, []);

  // 12 particles distributed across the curves
  const particleCount = 12;
  const particleData = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      curveIndex: i % 3,
      speed: 0.12 + (i % 4) * 0.03,
      offset: i / particleCount,
    }));
  }, []);

  const particleGeometry = useMemo(
    () => new THREE.SphereGeometry(0.045, 12, 12),
    []
  );

  const particleMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#38D8E4"),
      }),
    []
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    particleData.forEach((p, idx) => {
      const mesh = meshRefs.current[idx];
      if (!mesh) return;

      const curve = curves[p.curveIndex];
      const t = (time * p.speed + p.offset) % 1;
      const point = curve.getPointAt(t);

      mesh.position.copy(point);

      // Subtle pulse in scale
      const s = 1 + Math.sin(time * 4 + idx) * 0.25;
      mesh.scale.set(s, s, s);
    });
  });

  return (
    <group>
      {particleData.map((_, idx) => (
        <mesh
          key={idx}
          ref={(el) => {
            meshRefs.current[idx] = el;
          }}
          geometry={particleGeometry}
          material={particleMaterial}
        />
      ))}
    </group>
  );
}
