"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";
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
  Zap,
  ArrowRight
} from "lucide-react";
import { AgentNexusIcon } from "@/components/ui/ArchitecturalIcons";
import { MaterialField } from "@/components/ui/MaterialField";

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
   Abstract Miniature Aperture Previews (Tactile interactive lens into next room)
   ========================================================================= */

// Preview for Section 01: The 4 Capabilities Architecture Matrix
function CapabilitiesAbstractPreview() {
  return (
    <div className="group relative w-full h-full flex flex-col justify-between p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-subtle hover:border-[var(--color-brand-strong)] transition-all duration-400">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
            01
          </span>
          <span className="font-mono text-[10px] font-bold tracking-widest text-[var(--color-brand-strong)] uppercase">
            WHAT WE OFFER
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[8.5px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider">
            4 PILLARS ACTIVE
          </span>
        </div>
      </div>

      {/* 4-Quadrant Geometric Interactive Schematic */}
      <div className="grid grid-cols-2 gap-2.5 my-3">
        <div className="p-2.5 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5">
          <AgentNexusIcon className="h-3.5 w-3.5 text-[var(--color-brand-strong)] shrink-0" />
          <span className="font-mono text-[9px] font-bold text-[var(--color-text-primary)]">AI AGENTS</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5">
          <Layers className="h-3.5 w-3.5 text-[#6366F1] shrink-0" />
          <span className="font-mono text-[9px] font-bold text-[var(--color-text-primary)]">SOFTWARE</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5">
          <Cpu className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span className="font-mono text-[9px] font-bold text-[var(--color-text-primary)]">CLOUD</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5">
          <Workflow className="h-3.5 w-3.5 text-amber-600 shrink-0" />
          <span className="font-mono text-[9px] font-bold text-[var(--color-text-primary)]">SYSTEMS</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2.5 border-t border-[var(--color-border)] font-mono text-[9px] text-[var(--color-text-secondary)]">
        <span>EXPLORE CAPABILITIES MATRIX</span>
        <ArrowDownRight className="h-3.5 w-3.5 text-[var(--color-brand-strong)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
      </div>
    </div>
  );
}

// Preview for Section 02: Continuous Delivery Pipeline
function MethodologyAbstractPreview() {
  return (
    <div className="group relative w-full h-full flex flex-col justify-between p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-subtle hover:border-[#818CF8] transition-all duration-400">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
            02
          </span>
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#6366F1] uppercase">
            OUR 3-STEP PROCESS
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#818CF8] animate-pulse" />
          <span className="font-mono text-[8.5px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider">
            WEEKLY PROGRESS
          </span>
        </div>
      </div>

      {/* 3-Stage Linear Vector Laser Path */}
      <div className="my-3 px-1">
        <div className="flex items-center justify-between font-mono text-[8.5px] font-bold text-[var(--color-text-secondary)] mb-2">
          <span className="text-[var(--color-brand-strong)]">01 UNDERSTAND</span>
          <span className="text-[#6366F1]">02 BUILD</span>
          <span className="text-emerald-600">03 LAUNCH</span>
        </div>
        <div className="relative w-full h-2.5 rounded-full bg-[var(--color-canvas-secondary)] overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#818CF8] to-transparent"
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-2.5 border-t border-[var(--color-border)] font-mono text-[9px] text-[var(--color-text-secondary)]">
        <span>WEEKLY DEMOS · PRODUCTION READY</span>
        <ArrowDownRight className="h-3.5 w-3.5 text-[#6366F1] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
      </div>
    </div>
  );
}

// Preview for Section 03: Direct Collaboration & Production Scale
function CollaborationAbstractPreview() {
  return (
    <div className="group relative w-full h-full flex flex-col justify-between p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-subtle hover:border-emerald-500 transition-all duration-400">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
            03
          </span>
          <span className="font-mono text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
            DIRECT ENGAGEMENT
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[8.5px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded uppercase">
            OPEN SLOTS
          </span>
        </div>
      </div>

      {/* Direct Engineering Access Specimen */}
      <div className="my-3 p-3 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Radio className="h-4 w-4 text-emerald-600 shrink-0" />
          <div>
            <div className="font-mono text-[9.5px] font-bold text-[var(--color-text-primary)]">
              DIRECT DEVELOPER ACCESS
            </div>
            <div className="font-mono text-[8.5px] text-[var(--color-text-tertiary)] mt-0.5">
              Zero middlemen · Weekly working code
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2.5 border-t border-[var(--color-border)] font-mono text-[9px] text-[var(--color-text-secondary)]">
        <span>LET&apos;S DISCUSS YOUR PROJECT</span>
        <ArrowDownRight className="h-3.5 w-3.5 text-emerald-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
      </div>
    </div>
  );
}

/* =========================================================================
   SectionBridge: Architectural Transition Room with Spatial Conduit
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
  const ingressLineRef = useRef<HTMLDivElement>(null);
  const egressLineRef = useRef<HTMLDivElement>(null);
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
          { xPercent: isApertureLeft ? 8 : -8 },
          {
            xPercent: isApertureLeft ? -8 : 8,
            ease: "none",
            scrollTrigger: {
              trigger: bridgeRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      }

      // 2. Continuous Ingress Laser Conduit Scrub
      if (ingressLineRef.current) {
        const line = ingressLineRef.current.querySelector(".conduit-track");
        const pulse = ingressLineRef.current.querySelector(".conduit-pulse");
        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: bridgeRef.current,
                start: "top 95%",
                end: "top 45%",
                scrub: 0.35,
              },
            }
          );
        }
        if (pulse) {
          gsap.fromTo(
            pulse,
            { y: 0, opacity: 0.2 },
            {
              y: 50,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: bridgeRef.current,
                start: "top 95%",
                end: "top 45%",
                scrub: 0.35,
              },
            }
          );
        }
      }

      // 3. Egress Laser Conduit Scrub (draws downward into the incoming section)
      if (egressLineRef.current) {
        const line = egressLineRef.current.querySelector(".conduit-track");
        const pulse = egressLineRef.current.querySelector(".conduit-pulse");
        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: bridgeRef.current,
                start: "center 70%",
                end: "bottom 30%",
                scrub: 0.35,
              },
            }
          );
        }
        if (pulse) {
          gsap.fromTo(
            pulse,
            { y: 0, opacity: 0.2 },
            {
              y: 45,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: bridgeRef.current,
                start: "center 70%",
                end: "bottom 30%",
                scrub: 0.35,
              },
            }
          );
        }
      }

      // 4. Staggered Entrance Reveal for Content Elements
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: bridgeRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 5. Aperture Preview Card Entrance
      if (apertureRef.current) {
        gsap.fromTo(
          apertureRef.current,
          { opacity: 0, x: isApertureLeft ? -24 : 24, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            delay: 0.12,
            ease: "power3.out",
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
        "relative overflow-hidden py-14 sm:py-20 lg:py-24 select-none bg-[var(--color-canvas)] border-y border-[var(--color-border)]/50",
        className
      )}
      aria-label={`Transition to ${title}`}
    >
      <MaterialField variant="bridge" />
      {/* 1. Colossal Horizontal Watermark Word drifting with scroll velocity */}
      <div
        ref={watermarkRef}
        className="hidden sm:block pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 right-0 whitespace-nowrap z-0 select-none opacity-[0.035] text-[var(--color-text-primary)] font-heading font-black text-[9rem] sm:text-[13rem] lg:text-[18rem] tracking-tight uppercase"
        aria-hidden="true"
      >
        {tag}
      </div>

      {/* 2. Localized Chromatic Aurora Atmosphere */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div
          className="w-[700px] h-[260px] rounded-full blur-[120px] opacity-25"
          style={{
            background:
              variant === "accent"
                ? "radial-gradient(circle, rgba(99,102,241,0.28) 0%, rgba(56,218,228,0.18) 50%, transparent 75%)"
                : "radial-gradient(circle, rgba(56,218,228,0.22) 0%, rgba(8,145,178,0.12) 50%, transparent 75%)",
          }}
        />
      </div>

      {/* 3. Top Architectural Bridge Ingress Terminal */}
      <div
        ref={ingressLineRef}
        className="pointer-events-none absolute top-0 left-0 right-0 flex justify-center z-10"
        aria-hidden="true"
      >
        <div className="relative flex flex-col items-center">
          <div className="relative w-[2px] h-10 sm:h-14 overflow-hidden">
            <div
              className="conduit-track w-full h-full origin-top"
              style={{
                background:
                  variant === "accent"
                    ? "linear-gradient(to bottom, rgba(99,102,241,0.2) 0%, #6366F1 80%, #38D8E4 100%)"
                    : "linear-gradient(to bottom, rgba(8,145,178,0.2) 0%, #0891B2 80%, #38D8E4 100%)",
              }}
            />
            <div
              className="conduit-pulse absolute top-0 left-[-3px] w-2 h-2 rounded-full bg-[#38D8E4] shadow-[0_0_8px_#38D8E4]"
            />
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        {/* Architectural Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Typographic Monolith (7 cols on desktop) */}
          <div
            ref={contentRef}
            className={cn(
              "lg:col-span-7 flex flex-col justify-center",
              isApertureLeft ? "order-1 lg:order-2" : "order-1"
            )}
          >
            {/* Architectural Eyebrow Marker with CAD Crosshair */}
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center h-6 w-6 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-brand-strong)] shadow-2xs">
                <Crosshair className="h-3 w-3 animate-radar-sweep" />
              </span>
              <EditorialEyebrow step={step} label={tag} variant="plate" />
              <span className="hidden sm:inline font-mono text-[9px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
                + 48.1351° N ({isApertureLeft ? "EGRESS" : "INGRESS"})
              </span>
            </div>

            {/* Line 1: Expressive Editorial Italic Serif (Playfair Display) */}
            <div className="font-serif italic font-normal text-2xl sm:text-3xl lg:text-[2.2rem] text-[var(--color-brand-strong)] tracking-wide leading-tight">
              {italicPrefix}
            </div>

            {/* Line 2: Colossal Monumental Grotesk (Space Grotesk Black) */}
            <h3 className="mt-1.5 font-heading font-black text-2xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] uppercase tracking-[-0.035em] text-[var(--color-text-primary)] leading-[1.06]">
              {title}
            </h3>

            {/* Line 3: Mathematical Monospace Descriptor */}
            <p className="mt-4 font-mono text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              // {subtitle}
            </p>
          </div>

          {/* Abstract Aperture Preview Lens (5 cols on desktop) */}
          <div
            ref={apertureRef}
            className={cn(
              "lg:col-span-5 w-full",
              isApertureLeft ? "order-2 lg:order-1" : "order-2"
            )}
          >
            <div className="relative">
              {/* Corner CAD Registration Crosshairs */}
              <span className="pointer-events-none absolute -top-1.5 -left-1.5 font-mono text-[9px] text-[var(--color-border-strong)] select-none">+</span>
              <span className="pointer-events-none absolute -top-1.5 -right-1.5 font-mono text-[9px] text-[var(--color-border-strong)] select-none">+</span>
              <span className="pointer-events-none absolute -bottom-1.5 -left-1.5 font-mono text-[9px] text-[var(--color-border-strong)] select-none">+</span>
              <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 font-mono text-[9px] text-[var(--color-border-strong)] select-none">+</span>

              <div className="w-full transform hover:-translate-y-1 transition-transform duration-300">
                {abstractPreview === "capabilities" && <CapabilitiesAbstractPreview />}
                {abstractPreview === "methodology" && <MethodologyAbstractPreview />}
                {abstractPreview === "collaboration" && <CollaborationAbstractPreview />}
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* 4. Bottom Architectural Bridge Egress Terminal */}
      <div
        ref={egressLineRef}
        className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center z-10"
        aria-hidden="true"
      >
        <div className="relative flex flex-col items-center">
          <div className="relative w-[2px] h-10 sm:h-14 overflow-hidden">
            <div
              className="conduit-track w-full h-full origin-top"
              style={{
                background:
                  variant === "accent"
                    ? "linear-gradient(to bottom, #6366F1 0%, #38D8E4 80%, rgba(56,216,228,0.2) 100%)"
                    : "linear-gradient(to bottom, #0891B2 0%, #38D8E4 80%, rgba(56,216,228,0.2) 100%)",
              }}
            />
            <div
              className="conduit-pulse absolute top-0 left-[-3px] w-2 h-2 rounded-full bg-[#38D8E4] shadow-[0_0_8px_#38D8E4]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
