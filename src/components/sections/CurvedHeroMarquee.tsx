"use client";

import React, { useEffect, useRef } from "react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

export function CurvedHeroMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);
  const unitRef = useRef<SVGTSpanElement>(null);
  const ribbonPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const { gsap } = registerGSAP();

    const textPath = textPathRef.current;
    const unit = unitRef.current;
    const ribbonPath = ribbonPathRef.current;
    if (!textPath || !unit || !ribbonPath) return;

    // 1. Initial Ribbon Stroke Reveal (Draw from Left to Right with power2.out)
    const len = ribbonPath.getTotalLength();
    gsap.set(ribbonPath, { strokeDasharray: len, strokeDashoffset: len });
    gsap.to(ribbonPath, {
      strokeDashoffset: 0,
      duration: 1.4,
      ease: "power2.out",
      delay: 0.3,
    });

    // 2. Seamless Infinite Loop along the sculptured curve
    const unitLength = unit.getComputedTextLength() || 1400;
    const duration = unitLength / 55; // Smooth slow reading pace (reverse engineered from two26)

    const marqueeTween = gsap.to(textPath, {
      attr: { startOffset: -unitLength },
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    return () => {
      marqueeTween.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden pt-4 pb-6 sm:pb-8 select-none pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto overflow-visible block"
      >
        <defs>
          {/* Extended Sculptured Bezier Curve (Extends to x:5000 for seamless zero-pop loop) */}
          <path
            id="hero-curve-path"
            d="M -50 180 C 220 70, 520 40, 720 50 C 960 60, 1180 110, 1490 140 L 5000 500"
            fill="none"
          />

          {/* Ribbon Gradient */}
          <linearGradient id="marqueeRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891B2" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#38D8E4" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#0891B2" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* 1. Underlying Sculptural Ribbon Stroke */}
        <path
          ref={ribbonPathRef}
          d="M -50 180 C 220 70, 520 40, 720 50 C 960 60, 1180 110, 1490 140"
          stroke="url(#marqueeRibbonGrad)"
          strokeWidth="72"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* 2. Text Flowing Smoothly along the Sculptured Curve */}
        <text
          fill="#0891B2"
          fontSize="22"
          fontWeight="800"
          fontFamily="var(--font-mono, monospace)"
          letterSpacing="0.16em"
          style={{ dominantBaseline: "central", alignmentBaseline: "central" }}
          opacity="0.85"
        >
          <textPath
            ref={textPathRef}
            href="#hero-curve-path"
            startOffset="0"
            dominantBaseline="central"
            alignmentBaseline="central"
          >
            <tspan ref={unitRef}>
              CUSTOM SOFTWARE &nbsp;•&nbsp; AI AUTOMATION &nbsp;•&nbsp; FAST WEB APPS &nbsp;•&nbsp; RELIABLE CLOUD &nbsp;•&nbsp; CONNECTED SYSTEMS &nbsp;•&nbsp;
            </tspan>
            <tspan>
              CUSTOM SOFTWARE &nbsp;•&nbsp; AI AUTOMATION &nbsp;•&nbsp; FAST WEB APPS &nbsp;•&nbsp; RELIABLE CLOUD &nbsp;•&nbsp; CONNECTED SYSTEMS &nbsp;•&nbsp;
            </tspan>
            <tspan>
              CUSTOM SOFTWARE &nbsp;•&nbsp; AI AUTOMATION &nbsp;•&nbsp; FAST WEB APPS &nbsp;•&nbsp; RELIABLE CLOUD &nbsp;•&nbsp; CONNECTED SYSTEMS &nbsp;•&nbsp;
            </tspan>
            <tspan>
              CUSTOM SOFTWARE &nbsp;•&nbsp; AI AUTOMATION &nbsp;•&nbsp; FAST WEB APPS &nbsp;•&nbsp; RELIABLE CLOUD &nbsp;•&nbsp; CONNECTED SYSTEMS &nbsp;•&nbsp;
            </tspan>
          </textPath>
        </text>
      </svg>
    </div>
  );
}
