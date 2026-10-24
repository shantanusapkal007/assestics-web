"use client";

import React, { useState, useEffect, useSyncExternalStore, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AssemblyGeometry } from "./AssemblyGeometry";
import { FlowParticles } from "./FlowParticles";
import { SceneFallback } from "./SceneFallback";
import { Layers, RotateCcw, Sparkles } from "lucide-react";

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
  const [isExploded, setIsExploded] = useState(false);

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
    <div className="relative w-full h-full min-h-[440px] md:min-h-[540px] flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-white via-[#FCFBF8] to-[#FAF9F5]">
      
      {/* Top 3D Telemetry & Controls Bar */}
      <div className="z-20 w-full flex items-center justify-between px-4 sm:px-6 pt-3 pb-2 border-b border-[var(--color-border)]/60 bg-white/70 backdrop-blur-xs font-mono text-[10px]">
        <div className="flex items-center gap-2 text-[#161B17]">
          <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="font-bold">LIVE 3D SYSTEM ARCHITECTURE</span>
          <span className="text-[#8E968F] hidden sm:inline">// WEBGL PBR</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Explode / Separate Layers Toggle */}
          <button
            type="button"
            onClick={() => setIsExploded((prev) => !prev)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border font-mono font-bold transition-all ${
              isExploded
                ? "bg-[#161B17] text-white border-[#161B17] shadow-xs"
                : "bg-white text-[#161B17] border-[var(--color-border-strong)] hover:border-cyan-600"
            }`}
            title="Separate layers to inspect internal components"
          >
            <Layers className="h-3 w-3 text-cyan-600" />
            <span>{isExploded ? "COLLAPSE" : "EXPLODE LAYERS"}</span>
          </button>
        </div>
      </div>

      {/* Main 3D Canvas Viewport */}
      <div className="relative flex-1 w-full h-full min-h-[360px] cursor-grab active:cursor-grabbing">
        <Suspense fallback={<SceneFallback />}>
          <Canvas
            shadows
            camera={{
              position: [0, 0.4, isMobile ? 8.2 : 6.8],
              fov: isMobile ? 48 : 40,
            }}
            dpr={isMobile ? [1, 1.5] : [1, 2]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
            }}
            className="w-full h-full"
          >
            {/* Smooth gentle orbit controls */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2 + 0.15}
              minPolarAngle={Math.PI / 4}
              rotateSpeed={0.6}
            />

            {/* Lighting */}
            <ambientLight intensity={0.9} color="#FCFBF8" />

            {/* Key Sun Light with soft directional shadows */}
            <directionalLight
              position={[5, 8, 6]}
              intensity={1.6}
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
              intensity={0.45}
              color="#EAE9E2"
            />

            {/* Cyan Rim Accent Light */}
            <pointLight
              position={[0, -1.5, 2]}
              intensity={2.4}
              color="#38D8E4"
              distance={7}
            />

            {/* Top Edge Highlight */}
            <pointLight
              position={[-2, 3, 2]}
              intensity={1.4}
              color="#38D8E4"
              distance={6}
            />

            {/* The Assembly Geometry & Particle Conduits */}
            <AssemblyGeometry pointer={pointer} exploded={isExploded} />
            <FlowParticles />
          </Canvas>
        </Suspense>
      </div>

      {/* Understandable Layer Legend Footer */}
      <div className="z-20 w-full px-4 sm:px-6 py-2.5 border-t border-[var(--color-border)]/70 bg-white/80 backdrop-blur-xs font-mono text-[9.5px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center sm:text-left">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-bold text-[#161B17]">01 CLOUD BEDROCK:</span>
            <span className="text-[#687069]">99.99% Uptime Hosting</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="h-2 w-2 rounded-full bg-cyan-500 shrink-0" />
            <span className="font-bold text-[#161B17]">02 REASONING CORE:</span>
            <span className="text-[#687069]">Autonomous AI Agents</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="h-2 w-2 rounded-full bg-[#161B17] shrink-0" />
            <span className="font-bold text-[#161B17]">03 APPLICATION:</span>
            <span className="text-[#687069]">Bespoke Web Systems</span>
          </div>
        </div>
      </div>
    </div>
  );
}
