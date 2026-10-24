"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

export type DisciplineId = "ai" | "software" | "automation" | "cloud";

export function HeroSignalWeave() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pulseRef = useRef<SVGCircleElement>(null);
  const [hoveredId, setHoveredId] = useState<DisciplineId | null>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();
      setIsReducedMotion(reduced);
      if (reduced) return;

      const { gsap } = registerGSAP();
      if (!svgRef.current) return;

      const spinePath = svgRef.current.querySelector<SVGPathElement>("#heroMainSignalSpine");
      if (spinePath) {
        const length = spinePath.getTotalLength();
        gsap.set(spinePath, { strokeDasharray: length, strokeDashoffset: length });
      }

      // Stage 3 — Complementary Directional Mask Reveals for the 4 Disciplines
      const maskAi = svgRef.current.querySelector("#mask-rect-ai");
      const maskSoftware = svgRef.current.querySelector("#mask-rect-software");
      const maskAutomation = svgRef.current.querySelector("#mask-rect-automation");
      const maskCloud = svgRef.current.querySelector("#mask-rect-cloud");

      gsap.set(maskAi, { scaleY: 0, transformOrigin: "top" });
      gsap.set(maskSoftware, { scaleX: 0, transformOrigin: "left" });
      gsap.set(maskAutomation, { scaleX: 0, transformOrigin: "right" });
      gsap.set(maskCloud, { scaleY: 0, transformOrigin: "bottom" });

      const tl = gsap.timeline({ delay: 0.25 });

      // Sequence complementary masks with subtle overlap
      tl.to(maskAi, { scaleY: 1, duration: 0.65, ease: "power3.out" })
        .to(maskSoftware, { scaleX: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
        .to(maskAutomation, { scaleX: 1, duration: 0.7, ease: "power3.out" }, "-=0.45")
        .to(maskCloud, { scaleY: 1, duration: 0.65, ease: "power3.out" }, "-=0.4");

      // Stage 4 — The Single Brand Signal Path draws itself progressively
      if (spinePath) {
        tl.to(
          spinePath,
          {
            strokeDashoffset: 0,
            duration: 1.15,
            ease: "power2.inOut",
          },
          "-=0.35"
        );
      }

      // Stage 5 — Single travelling highlight appears
      if (pulseRef.current) {
        gsap.fromTo(
          pulseRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, delay: 0.2 }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full select-none"
      aria-label="Assestics Signal Specimen: Kinetic Typographic Disciplines"
    >
      <div className="relative w-full aspect-[680/440]">
        <svg
          ref={svgRef}
          viewBox="0 0 680 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Primary Brand Signal Thread Gradient */}
            <linearGradient id="signalThreadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38D8E4" />
              <stop offset="45%" stopColor="#0891B2" />
              <stop offset="100%" stopColor="#38D8E4" />
            </linearGradient>

            {/* Subtle Pulse Glow */}
            <filter id="threadGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Complementary Directional Masks for the 4 Disciplines */}
            {/* 01. AI: Revealed from top-to-bottom */}
            <clipPath id="mask-ai">
              <rect id="mask-rect-ai" x="40" y="20" width="160" height="120" />
            </clipPath>

            {/* 02. SOFTWARE: Revealed from left-to-right */}
            <clipPath id="mask-software">
              <rect id="mask-rect-software" x="220" y="70" width="440" height="110" />
            </clipPath>

            {/* 03. AUTOMATION: Revealed from right-to-left */}
            <clipPath id="mask-automation">
              <rect id="mask-rect-automation" x="80" y="210" width="360" height="110" />
            </clipPath>

            {/* 04. CLOUD: Revealed from bottom-to-top */}
            <clipPath id="mask-cloud">
              <rect id="mask-rect-cloud" x="430" y="230" width="240" height="110" />
            </clipPath>
          </defs>

          {/* Genuine Brand Motif (Staggered horizontal bars from logo geometry, faint aesthetic backdrop) */}
          <g opacity="0.25" className="pointer-events-none">
            <rect x="535" y="24" width="70" height="4" rx="2" fill="#38D8E4" />
            <rect x="572" y="34" width="55" height="4" rx="2" fill="#0891B2" />
            <rect x="550" y="44" width="40" height="4" rx="2" fill="#38D8E4" />
          </g>

          {/* ============================================================ */}
          {/* The Single Brand Signal Path: A sculptured cubic bezier spine */}
          {/* ============================================================ */}
          <g className="pointer-events-none">
            <path
              id="heroMainSignalSpine"
              d="M 35 125 C 115 125, 170 170, 240 170 C 340 170, 480 170, 560 155 C 640 140, 655 240, 560 270 C 520 285, 470 330, 400 330 C 310 330, 240 310, 150 310 C 80 310, 110 395, 230 405 C 290 410, 320 420, 340 440"
              stroke="url(#signalThreadGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Single Restrained Travelling Highlight along the thread */}
            {!isReducedMotion && (
              <circle
                ref={pulseRef}
                r="4.5"
                fill="#38D8E4"
                stroke="#0891B2"
                strokeWidth="1.5"
                filter="url(#threadGlow)"
              >
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href="#heroMainSignalSpine" />
                </animateMotion>
              </circle>
            )}

            {/* Exit marker directly connecting down to Section 02 bridge at (340, 440) */}
            <circle cx="340" cy="436" r="3.5" fill="#0891B2" />
          </g>

          {/* ============================================================ */}
          {/* Expressive Typographic Field (AI, SOFTWARE, AUTOMATION, CLOUD) */}
          {/* Each masked with its own complementary directional aperture  */}
          {/* ============================================================ */}

          {/* 01. AI (Compact, Emphatic Accent) */}
          <g
            clipPath="url(#mask-ai)"
            className="anchor-ai cursor-pointer select-none outline-none focus:outline-none"
            onMouseEnter={() => setHoveredId("ai")}
            onMouseLeave={() => setHoveredId(null)}
            tabIndex={0}
            role="button"
            aria-label="AI capability"
          >
            <text
              x="60"
              y="58"
              fontFamily="var(--font-mono, monospace)"
              fontSize="10.5"
              fontWeight="700"
              letterSpacing="0.14em"
              fill={hoveredId === "ai" ? "#0891B2" : "#8E968F"}
              className="transition-colors duration-200"
            >
              01 // COGNITIVE
            </text>
            <text
              x="60"
              y="104"
              fontFamily="var(--font-display, Space Grotesk, sans-serif)"
              fontSize="52"
              fontWeight="900"
              letterSpacing="-0.03em"
              stroke="#FCFBF8"
              strokeWidth="6"
              paintOrder="stroke fill"
              strokeLinejoin="round"
              fill={hoveredId === "ai" ? "#0891B2" : "#202722"}
              opacity={hoveredId && hoveredId !== "ai" ? "0.6" : "1"}
              className="transition-all duration-300"
            >
              AI
            </text>
            {hoveredId === "ai" && (
              <rect x="60" y="112" width="75" height="3" fill="#0891B2" rx="1.5" />
            )}
          </g>

          {/* 02. SOFTWARE (Principal Horizontal Anchor) */}
          <g
            clipPath="url(#mask-software)"
            className="anchor-software cursor-pointer select-none outline-none focus:outline-none"
            onMouseEnter={() => setHoveredId("software")}
            onMouseLeave={() => setHoveredId(null)}
            tabIndex={0}
            role="button"
            aria-label="Software capability"
          >
            <text
              x="230"
              y="112"
              fontFamily="var(--font-mono, monospace)"
              fontSize="10.5"
              fontWeight="700"
              letterSpacing="0.14em"
              fill={hoveredId === "software" ? "#0891B2" : "#8E968F"}
              className="transition-colors duration-200"
            >
              02 // APPLICATION PLATFORMS
            </text>
            <text
              x="230"
              y="154"
              fontFamily="var(--font-display, Space Grotesk, sans-serif)"
              fontSize="54"
              fontWeight="900"
              letterSpacing="0.16em"
              stroke="#FCFBF8"
              strokeWidth="6"
              paintOrder="stroke fill"
              strokeLinejoin="round"
              fill={hoveredId === "software" ? "#0891B2" : "#202722"}
              opacity={hoveredId && hoveredId !== "software" ? "0.6" : "1"}
              className="transition-all duration-300"
            >
              SOFTWARE
            </text>
            {hoveredId === "software" && (
              <rect x="230" y="162" width="360" height="3" fill="#0891B2" rx="1.5" />
            )}
          </g>

          {/* 03. AUTOMATION (Architectural Contrasting Line) */}
          <g
            clipPath="url(#mask-automation)"
            className="anchor-automation cursor-pointer select-none outline-none focus:outline-none"
            onMouseEnter={() => setHoveredId("automation")}
            onMouseLeave={() => setHoveredId(null)}
            tabIndex={0}
            role="button"
            aria-label="Automation capability"
          >
            <text
              x="120"
              y="250"
              fontFamily="var(--font-mono, monospace)"
              fontSize="10.5"
              fontWeight="700"
              letterSpacing="0.14em"
              fill={hoveredId === "automation" ? "#0891B2" : "#8E968F"}
              className="transition-colors duration-200"
            >
              03 // WORKFLOW PIPELINES
            </text>
            <text
              x="120"
              y="288"
              fontFamily="var(--font-display, Space Grotesk, sans-serif)"
              fontSize="38"
              fontWeight="800"
              letterSpacing="0.1em"
              stroke="#FCFBF8"
              strokeWidth="6"
              paintOrder="stroke fill"
              strokeLinejoin="round"
              fill={hoveredId === "automation" ? "#0891B2" : "#202722"}
              opacity={hoveredId && hoveredId !== "automation" ? "0.6" : "1"}
              className="transition-all duration-300"
            >
              AUTOMATION
            </text>
            {hoveredId === "automation" && (
              <rect x="120" y="296" width="280" height="2.5" fill="#0891B2" rx="1.25" />
            )}
          </g>

          {/* 04. CLOUD (Foundational Lower Quadrant Anchor) */}
          <g
            clipPath="url(#mask-cloud)"
            className="anchor-cloud cursor-pointer select-none outline-none focus:outline-none"
            onMouseEnter={() => setHoveredId("cloud")}
            onMouseLeave={() => setHoveredId(null)}
            tabIndex={0}
            role="button"
            aria-label="Cloud capability"
          >
            <text
              x="450"
              y="272"
              fontFamily="var(--font-mono, monospace)"
              fontSize="10.5"
              fontWeight="700"
              letterSpacing="0.14em"
              fill={hoveredId === "cloud" ? "#0891B2" : "#8E968F"}
              className="transition-colors duration-200"
            >
              04 // INFRASTRUCTURE
            </text>
            <text
              x="450"
              y="308"
              fontFamily="var(--font-display, Space Grotesk, sans-serif)"
              fontSize="40"
              fontWeight="900"
              letterSpacing="0.18em"
              stroke="#FCFBF8"
              strokeWidth="6"
              paintOrder="stroke fill"
              strokeLinejoin="round"
              fill={hoveredId === "cloud" ? "#0891B2" : "#202722"}
              opacity={hoveredId && hoveredId !== "cloud" ? "0.6" : "1"}
              className="transition-all duration-300"
            >
              CLOUD
            </text>
            {hoveredId === "cloud" && (
              <rect x="450" y="316" width="165" height="2.5" fill="#0891B2" rx="1.25" />
            )}
          </g>
        </svg>
      </div>

      {/* Screen Reader Semantic Listing */}
      <div className="sr-only">
        <h2>Assestics Core Disciplines</h2>
        <ul>
          <li>AI: Cognitive reasoning and autonomous agents</li>
          <li>SOFTWARE: Bespoke application platforms and typed APIs</li>
          <li>AUTOMATION: Event-driven continuous integration and workflow pipelines</li>
          <li>CLOUD: Scalable cloud infrastructure and zero-downtime delivery</li>
        </ul>
      </div>
    </div>
  );
}
