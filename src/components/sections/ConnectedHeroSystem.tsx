"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SystemPillar {
  id: string;
  tag: string;
  title: string;
  metric: string;
  description: string;
  href: string;
  x: number;
  y: number;
}

const PILLARS: SystemPillar[] = [
  {
    id: "ai",
    tag: "01 // COGNITIVE",
    title: "AI",
    metric: "RAG · AGENTS",
    description: "Multi-agent autonomous decision loops and conversational WhatsApp assistants.",
    href: "/services/ai-automation",
    x: 120,
    y: 70,
  },
  {
    id: "software",
    tag: "02 // APPLICATION",
    title: "SOFTWARE",
    metric: "FULL-STACK · APIS",
    description: "High-performance web applications, bespoke business platforms, and mobile apps.",
    href: "/services/software-engineering",
    x: 480,
    y: 70,
  },
  {
    id: "automation",
    tag: "03 // INTEGRATION",
    title: "AUTOMATION",
    metric: "EVENT-DRIVEN",
    description: "Eliminating manual coordination with webhook pipelines and zero-latency data sync.",
    href: "/services/ai-automation",
    x: 120,
    y: 260,
  },
  {
    id: "cloud",
    tag: "04 // INFRASTRUCTURE",
    title: "CLOUD",
    metric: "K8S · TERRAFORM",
    description: "Declarative infrastructure as code with automated zero-downtime canary deployments.",
    href: "/services/cloud-devops",
    x: 480,
    y: 260,
  },
];

export function ConnectedHeroSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!svgRef.current) return;

      const paths = svgRef.current.querySelectorAll(".system-conduit-path");
      paths.forEach((path) => {
        const p = path as SVGPathElement;
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 1.8,
        stagger: 0.15,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 shadow-xs"
    >
      {/* Topology Header Indicator */}
      <div className="mb-4 flex items-center justify-between border-b border-[var(--color-border)] pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brand-primary)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-brand-primary)]" />
          </span>
          <span className="font-mono text-xs font-semibold tracking-wider text-[var(--color-text-secondary)] uppercase">
            CONNECTED TOPOLOGY · 4 DISCIPLINES
          </span>
        </div>
        <div className="font-mono text-[11px] text-[var(--color-brand-strong)] font-semibold">
          SYNCHRONIZED CORE
        </div>
      </div>

      {/* SVG Conduits Layer (Connecting the 4 Disciplines) */}
      <div className="relative">
        <svg
          ref={svgRef}
          viewBox="0 0 600 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id="heroConduitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38D8E4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0891B2" stopOpacity="1" />
              <stop offset="100%" stopColor="#38D8E4" stopOpacity="0.8" />
            </linearGradient>
            <filter id="conduitGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Conduit Guides */}
          <line x1="150" y1="75" x2="450" y2="75" stroke="#E2E3DC" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="150" y1="255" x2="450" y2="255" stroke="#E2E3DC" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="150" y1="75" x2="150" y2="255" stroke="#E2E3DC" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="450" y1="75" x2="450" y2="255" stroke="#E2E3DC" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Central Diagonal Mesh Conduits */}
          <path
            d="M 150 75 C 250 75, 350 255, 450 255"
            stroke="url(#heroConduitGrad)"
            strokeWidth="2"
            fill="none"
            className="system-conduit-path"
          />
          <path
            d="M 150 255 C 250 255, 350 75, 450 75"
            stroke="url(#heroConduitGrad)"
            strokeWidth="2"
            fill="none"
            className="system-conduit-path"
          />

          {/* Central Nexus Core */}
          <circle cx="300" cy="165" r="28" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2" />
          <circle cx="300" cy="165" r="10" fill="#0891B2" />
          <circle cx="300" cy="165" r="38" stroke="#E2E3DC" strokeWidth="1" strokeDasharray="4 4" />

          {/* Traveling Data Pulse Packets */}
          <circle r="4" fill="#38D8E4" filter="url(#conduitGlow)">
            <animateMotion
              path="M 150 75 C 250 75, 350 255, 450 255"
              dur="3.8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="4" fill="#0891B2" filter="url(#conduitGlow)">
            <animateMotion
              path="M 150 255 C 250 255, 350 75, 450 75"
              dur="4.2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* 4 Interactive Discipline Nodes */}
        <div className="relative z-10 grid grid-cols-2 gap-6 sm:gap-8 py-2">
          {PILLARS.map((pillar) => {
            const isHovered = hoveredPillar === pillar.id;
            return (
              <Link
                key={pillar.id}
                href={pillar.href}
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
                className={cn(
                  "group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 transition-all duration-300",
                  isHovered
                    ? "border-[var(--color-brand-primary)] bg-[var(--color-canvas)] shadow-md translate-y-[-2px]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-brand-primary)]/70 hover:bg-[var(--color-canvas)]"
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-[var(--color-brand-strong)]">
                      {pillar.tag}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[var(--color-text-tertiary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-brand-strong)]" />
                  </div>

                  <h3 className="mt-2 font-heading text-xl sm:text-2xl font-black tracking-tight text-[var(--color-text-primary)]">
                    {pillar.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-[var(--color-text-secondary)] line-clamp-2">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-[var(--color-border)]/50 pt-2 font-mono text-[10px] text-[var(--color-text-tertiary)]">
                  <span>{pillar.metric}</span>
                  <span className="text-[var(--color-brand-strong)] font-semibold">ONLINE →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-3 text-[11px] text-[var(--color-text-secondary)]">
        <span className="font-mono">STATE: CONTINUOUS RESOLUTION</span>
        <span className="font-mono text-[var(--color-brand-strong)]">ZERO FRAGMENTATION</span>
      </div>
    </div>
  );
}
