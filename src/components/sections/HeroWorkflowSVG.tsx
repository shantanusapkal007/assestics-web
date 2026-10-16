"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

export function HeroWorkflowSVG() {
  const containerRef = useRef<SVGSVGElement>(null);
  const pulseMarkerRef = useRef<SVGCircleElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!containerRef.current) return;

      const primaryPaths = containerRef.current.querySelectorAll(".hero-path-primary");
      const secondaryPaths = containerRef.current.querySelectorAll(".hero-path-secondary");
      const nodes = containerRef.current.querySelectorAll(".hero-node");
      const labels = containerRef.current.querySelectorAll(".hero-label");
      const pulses = containerRef.current.querySelectorAll(".hero-pulse");

      // Prepare paths for drawing
      primaryPaths.forEach((path) => {
        const p = path as SVGPathElement;
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      secondaryPaths.forEach((path) => {
        const p = path as SVGPathElement;
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      gsap.set(nodes, { scale: 0.8, opacity: 0, transformOrigin: "center center" });
      gsap.set(labels, { opacity: 0, y: 8 });

      // Master entrance timeline
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(primaryPaths, {
        strokeDashoffset: 0,
        duration: 1.4,
        stagger: 0.25,
        ease: "power2.inOut",
      })
        .to(
          nodes,
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "back.out(1.5)",
          },
          "-=0.9"
        )
        .to(
          labels,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .to(
          secondaryPaths,
          {
            strokeDashoffset: 0,
            duration: 1.0,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          pulses,
          {
            opacity: 1,
            duration: 0.4,
          },
          "-=0.2"
        );

      // Continuous traveling pulse along the primary pipeline
      if (pulseMarkerRef.current) {
        gsap.to(pulseMarkerRef.current, {
          motionPath: {
            path: "#main-pipeline-path",
            align: "#main-pipeline-path",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
          },
          repeat: -1,
          duration: 4.8,
          ease: "none",
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
      {/* Top subtle system bar */}
      <div className="mb-4 flex items-center justify-between border-b border-[var(--color-border)] pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brand-primary)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-brand-primary)]" />
          </span>
          <span className="font-mono text-xs font-semibold tracking-wider text-[var(--color-text-secondary)] uppercase">
            SYSTEM TOPOLOGY · VERIFIED WORKFLOW
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--color-text-tertiary)]">
          <span>LATENCY: ZERO-LOSS</span>
          <span>·</span>
          <span>PROTOCOL: SECURE MESH</span>
        </div>
      </div>

      <svg
        ref={containerRef}
        viewBox="0 0 640 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full select-none"
        aria-label="Assestics Systems Connectivity Diagram"
      >
        <defs>
          <linearGradient id="cyanLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38D8E4" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#38D8E4" stopOpacity="1" />
            <stop offset="100%" stopColor="#0891B2" stopOpacity="0.9" />
          </linearGradient>
          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background Grid Accent Lines */}
        <line x1="80" y1="40" x2="80" y2="400" stroke="#E2E3DC" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
        <line x1="320" y1="40" x2="320" y2="400" stroke="#E2E3DC" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
        <line x1="560" y1="40" x2="560" y2="400" stroke="#E2E3DC" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
        <line x1="40" y1="120" x2="600" y2="120" stroke="#E2E3DC" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
        <line x1="40" y1="300" x2="600" y2="300" stroke="#E2E3DC" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

        {/* Primary Main Pipeline Path: 80,120 -> 320,120 -> 320,300 -> 560,300 */}
        <path
          id="main-pipeline-path"
          d="M 80 120 C 180 120, 220 120, 320 120 C 320 180, 320 240, 320 300 C 420 300, 480 300, 560 300"
          stroke="url(#cyanLineGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          className="hero-path-primary"
        />

        {/* Secondary Integration Branch 1: Data lake to AI core */}
        <path
          d="M 80 240 C 160 240, 240 180, 320 120"
          stroke="#E2E3DC"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3 3"
          className="hero-path-secondary"
        />

        {/* Secondary Integration Branch 2: API Mesh to ERP & Telemetry */}
        <path
          d="M 320 300 C 320 360, 240 380, 160 380"
          stroke="#E2E3DC"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3 3"
          className="hero-path-secondary"
        />

        {/* Terminal Line downward connecting to Section 03 */}
        <path
          d="M 560 300 L 560 440"
          stroke="#38D8E4"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="hero-path-primary"
        />

        {/* Traveling Signal Pulse via pure SVG animation */}
        <circle r="5" fill="#38D8E4" filter="url(#cyanGlow)" className="hero-pulse">
          <animateMotion
            path="M 80 120 C 180 120, 220 120, 320 120 C 320 180, 320 240, 320 300 C 420 300, 480 300, 560 300"
            dur="4.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="3" fill="#FFFFFF" className="hero-pulse">
          <animateMotion
            path="M 80 120 C 180 120, 220 120, 320 120 C 320 180, 320 240, 320 300 C 420 300, 480 300, 560 300"
            dur="4.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Secondary Traveling Pulse on Return Branch */}
        <circle r="3.5" fill="#0891B2" opacity="0.8">
          <animateMotion
            path="M 320 300 C 320 360, 240 380, 160 380"
            dur="3.8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Node 1: Ingest (80, 120) */}
        <g className="hero-node" transform="translate(80, 120)">
          <rect x="-36" y="-20" width="72" height="40" rx="8" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="4" fill="#38D8E4" />
          <text x="0" y="4" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#202722]">01</text>
        </g>
        <g className="hero-label">
          <text x="80" y="160" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#202722]">INPUT / DATA</text>
          <text x="80" y="174" textAnchor="middle" className="font-mono text-[9px] fill-[#687069]">Telemetry · Streams</text>
        </g>

        {/* Secondary Node: Warehouse/DB (80, 240) */}
        <g className="hero-node" transform="translate(80, 240)">
          <circle cx="0" cy="0" r="16" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="4" fill="#687069" />
        </g>
        <g className="hero-label">
          <text x="80" y="272" textAnchor="middle" className="font-mono text-[10px] font-semibold fill-[#202722]">STORAGE</text>
        </g>

        {/* Node 2: AI Core (320, 120) */}
        <g className="hero-node" transform="translate(320, 120)">
          <rect x="-44" y="-22" width="88" height="44" rx="10" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2" />
          <circle cx="0" cy="0" r="6" fill="#38D8E4" opacity="0.3" />
          <circle cx="0" cy="0" r="3" fill="#0891B2" />
          <text x="0" y="4" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#202722]">02</text>
        </g>
        <g className="hero-label">
          <text x="320" y="86" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#202722]">AI AGENT CORE</text>
          <text x="320" y="72" textAnchor="middle" className="font-mono text-[9px] fill-[#0891B2] font-semibold">REASONING & ROUTING</text>
        </g>

        {/* Node 3: Integration Mesh (320, 300) */}
        <g className="hero-node" transform="translate(320, 300)">
          <rect x="-44" y="-22" width="88" height="44" rx="10" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="3" fill="#202722" />
          <text x="0" y="4" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#202722]">03</text>
        </g>
        <g className="hero-label">
          <text x="320" y="342" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#202722]">API & CLOUD MESH</text>
          <text x="320" y="356" textAnchor="middle" className="font-mono text-[9px] fill-[#687069]">CI/CD · Microservices</text>
        </g>

        {/* Secondary Node: ERP & Telemetry (160, 380) */}
        <g className="hero-node" transform="translate(160, 380)">
          <rect x="-40" y="-18" width="80" height="36" rx="6" fill="#F3F2ED" stroke="#E2E3DC" strokeWidth="1" />
          <text x="0" y="4" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#202722]">ERP SYNC</text>
        </g>
        <g className="hero-label">
          <text x="160" y="412" textAnchor="middle" className="font-mono text-[9px] fill-[#687069]">Operations & Inventory</text>
        </g>

        {/* Node 4: Autonomous Operations (560, 300) */}
        <g className="hero-node" transform="translate(560, 300)">
          <rect x="-48" y="-24" width="96" height="48" rx="12" fill="#FFFFFF" stroke="#0891B2" strokeWidth="2" />
          <circle cx="0" cy="0" r="5" fill="#38D8E4" />
          <text x="0" y="4" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#202722]">04</text>
        </g>
        <g className="hero-label">
          <text x="560" y="260" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#0891B2]">AUTONOMOUS OPS</text>
          <text x="560" y="246" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-[#202722]">RESOLVED OUTCOME</text>
        </g>
      </svg>

      {/* Bottom system status bar */}
      <div className="mt-3 flex items-center justify-between border-t border-[var(--color-border)] pt-3 text-[11px] text-[var(--color-text-secondary)]">
        <span className="font-mono">SIGNAL: CONNECTED</span>
        <span className="font-mono text-[var(--color-brand-strong)]">CONTINUOUS FLOW ENERGISED</span>
      </div>
    </div>
  );
}
