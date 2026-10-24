"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { EditorialEyebrow } from "@/components/ui/EditorialEyebrow";
import { 
  Crosshair, 
  ArrowDownRight, 
  Layers, 
  Workflow, 
  Radio, 
  Cpu,
  Compass,
  Zap
} from "lucide-react";
import { AgentNexusIcon } from "@/components/ui/ArchitecturalIcons";

export interface SectionBridgeProps {
  step?: string;
  tag?: string;
  title?: string;
  subtitle?: string;
  italicPrefix?: string;
  abstractPreview?: "capabilities" | "methodology" | "collaboration";
  className?: string;
  variant?: "default" | "accent" | "subtle";
  alignAperture?: "left" | "right" | "center";
}

/* =========================================================================
   Abstract Miniature Aperture Previews (Reveals what lies ahead in the next room)
   ========================================================================= */

// Preview for Section 01: The 4 Capabilities Architecture Matrix
function CapabilitiesAbstractPreview() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 rounded-xl bg-[var(--color-surface)]/90 border border-[var(--color-border)] shadow-sm backdrop-blur-md">
      <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
            01
          </span>
          <span className="font-mono text-[9px] font-bold tracking-widest text-[var(--color-brand-strong)] uppercase">
            WHAT WE OFFER
          </span>
        </div>
        <span className="font-mono text-[8px] text-[var(--color-text-tertiary)]">OVERVIEW</span>
      </div>

      {/* 4-Quadrant Geometric Interactive Schematic */}
      <div className="grid grid-cols-2 gap-2 my-2.5">
        <div className="p-2 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center gap-1.5">
          <AgentNexusIcon className="h-3.5 w-3.5 text-[var(--color-brand-strong)]" />
          <span className="font-mono text-[8.5px] font-bold text-[var(--color-text-primary)]">AI AGENTS</span>
        </div>
        <div className="p-2 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center gap-1.5">
          <Layers className="h-3 w-3 text-[#6366F1]" />
          <span className="font-mono text-[8.5px] font-bold text-[var(--color-text-primary)]">SOFTWARE</span>
        </div>
        <div className="p-2 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center gap-1.5">
          <Cpu className="h-3 w-3 text-emerald-600" />
          <span className="font-mono text-[8.5px] font-bold text-[var(--color-text-primary)]">CLOUD</span>
        </div>
        <div className="p-2 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center gap-1.5">
          <Workflow className="h-3 w-3 text-amber-600" />
          <span className="font-mono text-[8.5px] font-bold text-[var(--color-text-primary)]">SYSTEMS</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)] font-mono text-[8.5px] text-[var(--color-text-tertiary)]">
        <span>BUILT FOR YOUR TEAM</span>
        <ArrowDownRight className="h-3 w-3 text-[var(--color-brand-strong)]" />
      </div>
    </div>
  );
}

// Preview for Section 02: Continuous Delivery Pipeline
function MethodologyAbstractPreview() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 rounded-xl bg-[var(--color-surface)]/90 border border-[var(--color-border)] shadow-sm backdrop-blur-md">
      <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
            02
          </span>
          <span className="font-mono text-[9px] font-bold tracking-widest text-[#6366F1] uppercase">
            OUR 3-STEP PROCESS
          </span>
        </div>
        <span className="font-mono text-[8px] text-[var(--color-text-tertiary)]">METHOD</span>
      </div>

      {/* 3-Stage Linear Vector Laser Path */}
      <div className="my-2.5 px-1">
        <div className="flex items-center justify-between font-mono text-[8px] font-bold text-[var(--color-text-secondary)] mb-1.5">
          <span>01 UNDERSTAND</span>
          <span>02 BUILD</span>
          <span>03 LAUNCH</span>
        </div>
        <div className="relative w-full h-2 rounded-[2px] bg-[var(--color-canvas-secondary)] overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#818CF8] to-transparent"
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)] font-mono text-[8.5px] text-[var(--color-text-tertiary)]">
        <span>WEEKLY DEMOS · ON-TIME DELIVERY</span>
        <ArrowDownRight className="h-3 w-3 text-[#6366F1]" />
      </div>
    </div>
  );
}

// Preview for Section 03: Direct Collaboration & Production Scale
function CollaborationAbstractPreview() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 rounded-xl bg-[var(--color-surface)]/90 border border-[var(--color-border)] shadow-sm backdrop-blur-md">
      <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
            03
          </span>
          <span className="font-mono text-[9px] font-bold tracking-widest text-emerald-600 uppercase">
            WORK WITH US
          </span>
        </div>
        <span className="font-mono text-[8px] text-[var(--color-text-tertiary)]">LET&apos;S TALK</span>
      </div>

      {/* Direct Engineering Access */}
      <div className="my-2.5 p-2.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Radio className="h-3.5 w-3.5 text-emerald-600" />
          <div className="font-mono text-[9px] font-bold text-[var(--color-text-primary)]">
            DIRECT DEVELOPER ACCESS
          </div>
        </div>
        <span className="font-mono text-[8px] px-1.5 py-0.5 rounded-[2px] bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
          LIVE
        </span>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)] font-mono text-[8.5px] text-[var(--color-text-tertiary)]">
        <span>READY TO GET STARTED?</span>
        <ArrowDownRight className="h-3 w-3 text-emerald-600" />
      </div>
    </div>
  );
}

/* =========================================================================
   SectionBridge: The Haute Couture Section-to-Section Transition
   ========================================================================= */
export function SectionBridge({
  step = "01",
  tag = "CONTINUOUS ARCHITECTURE",
  title = "Modular Digital Systems",
  subtitle = "Where strategic concepts transform into hardened, production-grade business tools.",
  italicPrefix = "Translating vision into",
  abstractPreview = "capabilities",
  className,
  variant = "default",
  alignAperture,
}: SectionBridgeProps) {
  const isApertureLeft = alignAperture ? alignAperture === "left" : step === "02";
  const bridgeRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const pulseRef = useRef<SVGCircleElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const apertureRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!bridgeRef.current) return;

      // 1. Horizontal Parallax Drift on the Colossal Watermark
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { xPercent: -12 },
          {
            xPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: bridgeRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      }

      // 2. Vertical Conduit Vector Laser Scrub
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { strokeDashoffset: 140 },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: bridgeRef.current,
              start: "top 90%",
              end: "bottom 40%",
              scrub: 0.4,
            },
          }
        );
      }

      if (pulseRef.current) {
        gsap.fromTo(
          pulseRef.current,
          { cy: 8, opacity: 0.2, scale: 0.8 },
          {
            cy: 110,
            opacity: 1,
            scale: 1.3,
            ease: "none",
            scrollTrigger: {
              trigger: bridgeRef.current,
              start: "top 90%",
              end: "bottom 40%",
              scrub: 0.4,
            },
          }
        );
      }

      // 3. Staggered Entrance Reveal for Content Elements
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bridgeRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 4. Aperture Preview Card Entrance
      if (apertureRef.current) {
        gsap.fromTo(
          apertureRef.current,
          { opacity: 0, x: 28, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            delay: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bridgeRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    { scope: bridgeRef }
  );

  return (
    <div
      ref={bridgeRef}
      className={cn(
        "relative overflow-hidden py-16 sm:py-20 lg:py-28 select-none border-y border-[var(--color-border)]/60 bg-[var(--color-canvas)]",
        className
      )}
      aria-label={`Transition to ${title}`}
    >
      {/* =========================================================================
          1. Colossal Horizontal Watermark Word drifting with scroll velocity
          (Right Hemisphere / DOVV Studio inspiration)
          ========================================================================= */}
      <div
        ref={watermarkRef}
        className="hidden sm:block pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 right-0 whitespace-nowrap z-0 select-none opacity-[0.038] text-[var(--color-text-primary)] font-heading font-black text-[9rem] sm:text-[13rem] lg:text-[18rem] tracking-tight uppercase"
        aria-hidden="true"
      >
        {tag}
      </div>

      {/* =========================================================================
          2. Localized Chromatic Aurora Glow
          ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div
          className="w-[600px] h-[220px] rounded-full blur-[110px] opacity-25"
          style={{
            background:
              variant === "accent"
                ? "radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(56,218,228,0.2) 50%, transparent 75%)"
                : "radial-gradient(circle, rgba(56,218,228,0.25) 0%, rgba(8,145,178,0.15) 50%, transparent 75%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* =========================================================================
            3. Asymmetric 3-Column Architectural Composition
            Left: Coordinates & Conduit · Center: Typographic Collision · Right: Aperture Reveal
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Conduit & Origin Wing */}
          <div className={cn(
            "lg:col-span-3 flex flex-wrap sm:flex-nowrap lg:flex-col items-center lg:items-start justify-between gap-3 sm:gap-4",
            isApertureLeft ? "order-2 lg:order-3 lg:items-end text-right" : "order-1"
          )}>
            {/* Phase Badge & Spinning Crosshair */}
            <div className={cn("flex items-center gap-2.5", isApertureLeft && "lg:flex-row-reverse")}>
              <span className="flex items-center justify-center h-7 w-7 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-brand-strong)] shadow-xs">
                <Crosshair className="h-3.5 w-3.5 animate-radar-sweep" />
              </span>
              <div>
                <span className="block font-mono text-[10px] font-black tracking-widest text-[var(--color-brand-strong)] uppercase">
                  PHASE // {step}
                </span>
                <span className="block font-mono text-[9px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
                  + 48.1351° N ({isApertureLeft ? "EGRESS" : "INGRESS"})
                </span>
              </div>
            </div>

            {/* Vertical Conduit Vector */}
            <div className={cn("hidden lg:flex items-center gap-3 mt-4", isApertureLeft && "flex-row-reverse")}>
              <svg
                width="24"
                height="116"
                viewBox="0 0 24 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
              >
                {/* Baseline Guide */}
                <line
                  x1="12"
                  y1="0"
                  x2="12"
                  y2="116"
                  stroke="var(--color-border)"
                  strokeWidth="1.25"
                  strokeDasharray="3 3"
                  opacity="0.6"
                />
                {/* Active Animated Laser Conduit */}
                <line
                  ref={lineRef}
                  x1="12"
                  y1="4"
                  x2="12"
                  y2="112"
                  stroke="url(#bridgeConduitGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="140"
                  strokeDashoffset="140"
                />
                {/* Pulse Particle */}
                <circle
                  ref={pulseRef}
                  cx="12"
                  cy="8"
                  r="3.5"
                  fill="#38D8E4"
                />
                {/* Bottom Anchor Node */}
                <circle cx="12" cy="112" r="3.5" fill="var(--color-surface)" stroke="#0891B2" strokeWidth="1.75" />

                <defs>
                  <linearGradient id="bridgeConduitGrad" x1="12" y1="0" x2="12" y2="116" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0891B2" />
                    <stop offset="50%" stopColor="#38D8E4" />
                    <stop offset="100%" stopColor="#0891B2" />
                  </linearGradient>
                </defs>
              </svg>

              <span className="font-mono text-[9px] text-[var(--color-text-tertiary)] uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 opacity-60">
                CONTINUOUS_SYSTEM_FLOW
              </span>
            </div>
          </div>

          {/* Center Monolith (6 Cols): The Typographic Clash & Contrast */}
          <div ref={contentRef} className={cn("lg:col-span-6 flex flex-col justify-center", isApertureLeft ? "order-1 lg:order-2" : "order-2")}>
            {/* Architectural Eyebrow Marker */}
            <div className="mb-3.5">
              <EditorialEyebrow step={step} label={tag} variant="plate" />
            </div>

            {/* Line 1: Expressive Editorial Italic Serif (Playfair Display) */}
            <div className="font-serif italic font-normal text-2xl sm:text-3xl lg:text-4xl text-[var(--color-brand-strong)] tracking-wide">
              {italicPrefix}
            </div>

            {/* Line 2: Colossal Monumental Grotesk (Space Grotesk Black) */}
            <h3 className="mt-1 font-heading font-black text-2xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase tracking-[-0.035em] text-[var(--color-text-primary)] leading-[1.08]">
              {title}
            </h3>

            {/* Line 3: Mathematical Monospace Descriptor */}
            <p className="mt-4 font-mono text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
              // {subtitle}
            </p>
          </div>

          {/* Abstract Aperture Preview Lens (Reveals upcoming room) */}
          <div ref={apertureRef} className={cn("lg:col-span-3 w-full", isApertureLeft ? "order-3 lg:order-1" : "order-3")}>
            <div className="w-full min-h-[140px] transform hover:-translate-y-1 transition-transform duration-300">
              {abstractPreview === "capabilities" && <CapabilitiesAbstractPreview />}
              {abstractPreview === "methodology" && <MethodologyAbstractPreview />}
              {abstractPreview === "collaboration" && <CollaborationAbstractPreview />}
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
