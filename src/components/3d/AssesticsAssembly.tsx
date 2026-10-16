"use client";

import React, { useState, useEffect, useSyncExternalStore, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AssemblyGeometry } from "./AssemblyGeometry";
import { FlowParticles } from "./FlowParticles";
import { SceneFallback } from "./SceneFallback";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeMobile(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getMobileSnapshot() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

function checkWebGLSnapshot() {
  if (typeof window === "undefined") return true;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function AssesticsAssembly() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );

  const isMobile = useSyncExternalStore(
    subscribeMobile,
    getMobileSnapshot,
    () => false
  );

  const webglSupported = useSyncExternalStore(
    () => () => {},
    checkWebGLSnapshot,
    () => true
  );

  useEffect(() => {
    if (!isMobile) {
      const handlePointerMove = (e: PointerEvent) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setPointer({ x, y });
      };
      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }
  }, [isMobile]);

  if (!webglSupported || prefersReducedMotion) {
    return <SceneFallback />;
  }

  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-[560px] flex items-center justify-center">
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          shadows
          camera={{
            position: [0, 0.4, isMobile ? 8.2 : 6.8],
            fov: isMobile ? 48 : 42,
          }}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          className="w-full h-full pointer-events-none"
        >
          {/* Lighting */}
          <ambientLight intensity={0.85} color="#FCFBF8" />

          {/* Key Sun Light with soft shadows */}
          <directionalLight
            position={[5, 8, 6]}
            intensity={1.4}
            color="#FFFFFF"
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={0.5}
            shadow-camera-far={25}
            shadow-camera-left={-4}
            shadow-camera-right={4}
            shadow-camera-top={4}
            shadow-camera-bottom={-4}
            shadow-bias={-0.0005}
          />

          {/* Secondary Warm Fill Light */}
          <directionalLight
            position={[-6, -4, -4]}
            intensity={0.4}
            color="#EAE9E2"
          />

          {/* Cyan Rim Accent Light */}
          <pointLight
            position={[0, -1.5, 2]}
            intensity={2.2}
            color="#38D8E4"
            distance={7}
          />

          {/* Top Edge Highlight */}
          <pointLight
            position={[-2, 3, 2]}
            intensity={1.2}
            color="#38D8E4"
            distance={6}
          />

          {/* The Assembly Geometry & Particles */}
          <AssemblyGeometry pointer={pointer} />
          <FlowParticles />
        </Canvas>
      </Suspense>
    </div>
  );
}
