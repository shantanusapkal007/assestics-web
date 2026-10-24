"use client";

import React, { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { KineticText } from "@/components/motion/KineticText";
import { processChapters } from "@/content/process";
import { ProcessVisualStage } from "@/components/sections/ProcessVisualStage";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { EditorialEyebrow } from "@/components/ui/EditorialEyebrow";
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Activity, 
  Clock, 
  Terminal,
  Compass,
  Workflow,
  Radio
} from "lucide-react";

export function Process() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const currentChapter = processChapters[activeChapterIndex] || processChapters[0];

  // Keyboard navigation for chapters
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveChapterIndex((prev) => (prev + 1) % processChapters.length);
      } else if (e.key === "ArrowLeft") {
        setActiveChapterIndex((prev) => (prev - 1 + processChapters.length) % processChapters.length);
      } else if (e.key === "1") {
        setActiveChapterIndex(0);
      } else if (e.key === "2") {
        setActiveChapterIndex(1);
      } else if (e.key === "3") {
        setActiveChapterIndex(2);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!containerRef.current) return;

      // Header entrance animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative overflow-hidden bg-[var(--color-canvas)] transition-colors duration-1000 py-16 sm:py-24 lg:py-32"
      aria-labelledby="process-title"
    >
      {/* =========================================================================
          1. Architectural Top Catenary Dome Boundary (DOVV Studio inspiration)
          Framing the journey section with organic curved architectural tension
          ========================================================================= */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 text-[var(--color-canvas-secondary)] opacity-40"
        >
          <path
            d="M 0 0 C 480 50, 960 50, 1440 0 L 1440 0 L 0 0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* =========================================================================
          2. Living Atmospheric Chromatic Aurora Field
          Dynamically shifts ambient hue based on active chapter
          ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none -z-10">
        {/* Active Ambient Aura Sphere 1 */}
        <div
          className="absolute -top-32 left-1/4 w-[750px] h-[750px] rounded-full blur-[140px] opacity-[0.16] transition-all duration-1000 ease-out animate-aurora-pulse"
          style={{
            background:
              activeChapterIndex === 0
                ? "radial-gradient(circle, #38D8E4 0%, #0891B2 60%, transparent 80%)"
                : activeChapterIndex === 1
                ? "radial-gradient(circle, #818CF8 0%, #4F46E5 60%, transparent 80%)"
                : "radial-gradient(circle, #34D399 0%, #059669 60%, transparent 80%)",
          }}
        />

        {/* Active Ambient Aura Sphere 2 */}
        <div
          className="absolute -bottom-40 right-10 w-[650px] h-[650px] rounded-full blur-[130px] opacity-[0.12] transition-all duration-1000 ease-out"
          style={{
            background:
              activeChapterIndex === 0
                ? "radial-gradient(circle, #0891B2 0%, #0E7490 60%, transparent 80%)"
                : activeChapterIndex === 1
                ? "radial-gradient(circle, #38D8E4 0%, #6366F1 60%, transparent 80%)"
                : "radial-gradient(circle, #F59E0B 0%, #10B981 60%, transparent 80%)",
          }}
        />

        {/* Architectural 12-Column Fine Line Coordinates */}
        <div className="mx-auto max-w-[1400px] h-full px-4 sm:px-6 lg:px-8 xl:px-12 opacity-35">
          <div className="grid h-full w-full grid-cols-4 lg:grid-cols-12">
            <div className="border-r border-[var(--color-border)]/40" />
            <div className="hidden border-r border-[var(--color-border)]/40 lg:block lg:col-span-2" />
            <div className="border-r border-[var(--color-border)]/40 lg:col-span-3" />
            <div className="border-r border-[var(--color-border)]/40 lg:col-span-3" />
            <div className="border-r border-[var(--color-border)]/40 lg:col-span-3" />
          </div>
        </div>
      </div>

      <Container>
        {/* =========================================================================
            3. Monumental Section Header with Haute Couture Typography
            ========================================================================= */}
        <div ref={headerRef} className="relative z-10 max-w-4xl mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-4">
            <EditorialEyebrow step="02" label="HOW WE DO IT // OUR 3-STEP PROCESS" variant="plate" />
          </div>

          <h2
            id="process-title"
            className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-[var(--color-text-primary)] leading-[1.05]"
          >
            <KineticText triggerOnScroll>How we take your idea to launch.</KineticText>
          </h2>

          <p className="mt-5 text-lg sm:text-xl leading-relaxed text-[var(--color-text-secondary)] font-normal max-w-2xl">
            We keep our process straightforward: we understand what you need, build it in weekly testable sprints, and launch with full support.
          </p>
        </div>

        {/* =========================================================================
            4. High-End Architectural Navigation Console (Haute Couture Stage Deck)
            Large tactile tabs with active glowing indicators & spring physics
            ========================================================================= */}
        <div className="hidden lg:block relative mb-12 sm:mb-16 z-20">
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 rounded-2xl bg-[var(--color-surface)]/90 border border-[var(--color-border)] shadow-elevated backdrop-blur-md"
            role="tablist"
            aria-label="Delivery Methodology Phases"
          >
            {processChapters.map((chapter, idx) => {
              const isActive = idx === activeChapterIndex;
              return (
                <button
                  key={chapter.number}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`phase-panel-${chapter.number}`}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={cn(
                    "relative group flex flex-col items-start p-4 sm:p-5 rounded-xl text-left transition-all duration-300 outline-none",
                    isActive
                      ? "bg-[var(--color-canvas)] border border-[var(--color-border-strong)] shadow-subtle"
                      : "hover:bg-[var(--color-surface-muted)]/40 border border-transparent"
                  )}
                >
                  {/* Top Bar with Number & Duration */}
                  <div className="w-full flex items-center justify-between">
                    <span
                      className={cn(
                        "font-mono text-xs font-black tracking-wider transition-colors",
                        isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-tertiary)]"
                      )}
                    >
                      {chapter.number} // 03
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[10px] font-black px-2 py-0.5 rounded-[2px] tracking-wider uppercase transition-all",
                        isActive
                          ? "bg-[#161B17] text-white border border-[#161B17]"
                          : "text-[var(--color-text-tertiary)] bg-transparent"
                      )}
                    >
                      {chapter.duration}
                    </span>
                  </div>

                  {/* Monumental Phase Title */}
                  <div className="mt-3">
                    <span
                      className={cn(
                        "block font-heading text-xl sm:text-2xl font-bold tracking-tight transition-colors",
                        isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]"
                      )}
                    >
                      {chapter.title}
                    </span>
                    <span
                      className={cn(
                        "block font-mono text-[11px] tracking-wide mt-0.5 transition-colors",
                        isActive ? "text-[var(--color-brand-strong)] font-semibold" : "text-[var(--color-text-tertiary)]"
                      )}
                    >
                      {chapter.subtitle}
                    </span>
                  </div>

                  {/* Active Neon Glow Accent Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activePhaseUnderline"
                      className="absolute bottom-0 left-4 right-4 h-[2px] rounded-[1px]"
                      style={{
                        background:
                          idx === 0
                            ? "linear-gradient(90deg, #38D8E4, #0891B2)"
                            : idx === 1
                            ? "linear-gradient(90deg, #818CF8, #4F46E5)"
                            : "linear-gradient(90deg, #34D399, #059669)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            5. Desktop Haute Couture Architectural Stage (lg+)
            Dynamic Alternating Spatial Choreography with Spring Physics
            Step 01: Text Left, Visual Right
            Step 02: Visual Left, Text Right (Dynamic Inversion)
            Step 03: Text Left, Visual Right
            ========================================================================= */}
        {(() => {
          const isStepInverted = activeChapterIndex === 1;
          return (
            <div className="hidden lg:grid grid-cols-12 items-center gap-12 xl:gap-16 relative">
              
              {/* Monumental Sculptural Background Watermark Number */}
              <motion.div
                key={`watermark-${currentChapter.number}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 0.045, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "pointer-events-none absolute -top-20 select-none z-0 font-heading font-black text-[18rem] xl:text-[22rem] leading-none text-[var(--color-text-primary)] transition-all duration-700",
                  isStepInverted ? "-right-8" : "-left-12"
                )}
                aria-hidden="true"
              >
                {currentChapter.number}
              </motion.div>

              {/* Narrative Sanctuary Column (5 Cols) */}
              <div className={cn(
                "col-span-5 relative z-10 flex flex-col justify-between min-h-[520px] transition-all duration-500",
                isStepInverted ? "order-2" : "order-1"
              )}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentChapter.number}
                    initial={{ opacity: 0, x: isStepInverted ? 18 : -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isStepInverted ? -18 : 18 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Category Eyebrow */}
                      <div className="mb-3">
                        <EditorialEyebrow step={currentChapter.number} label={currentChapter.chapter} variant="bracket" />
                      </div>

                      {/* Monumental Headline */}
                      <h3 className="mt-4 font-heading text-4xl xl:text-5xl font-black tracking-[-0.03em] text-[var(--color-text-primary)] leading-[1.08]">
                        {currentChapter.title}
                      </h3>

                      <p className="mt-2 font-mono text-sm font-semibold text-[var(--color-brand-strong)]">
                        // {currentChapter.tagline}
                      </p>

                      {/* Plain Human Description */}
                      <p className="mt-5 text-base xl:text-lg leading-relaxed text-[var(--color-text-secondary)]">
                        {currentChapter.description}
                      </p>

                      {/* High-End Deliverables Showcase */}
                      <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                        <span className="block font-mono text-[10px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-widest mb-3">
                          WHAT YOU RECEIVE // GUARANTEED DELIVERABLES
                        </span>
                        <div className="flex flex-col gap-3">
                          {currentChapter.deliverables.map((item, dIdx) => (
                            <div
                              key={dIdx}
                              className="group flex items-start justify-between gap-3 p-3 rounded-xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] hover:border-[var(--color-brand-primary)]/50 transition-all duration-300 shadow-2xs"
                            >
                              <div className="flex items-start gap-2.5">
                                <span className="flex items-center justify-center h-5 w-5 rounded-[3px] bg-[var(--color-canvas-secondary)] border border-[var(--color-border)] text-[var(--color-brand-strong)] mt-0.5 shrink-0">
                                  <CheckCircle2 className="h-3.5 w-3.5" />
                                </span>
                                <div>
                                  <div className="font-heading font-bold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-strong)] transition-colors">
                                    {item.title}
                                  </div>
                                  <div className="font-sans text-xs text-[var(--color-text-secondary)] mt-0.5 leading-snug">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                              <span className="shrink-0 font-mono text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-[2px] bg-[var(--color-canvas-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)]">
                                {item.badge}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mathematical Metrics Proof Bar */}
                    <div className="mt-8 pt-6 border-t border-[var(--color-border)] grid grid-cols-3 gap-4">
                      {currentChapter.metrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div className="font-mono text-xl xl:text-2xl font-black text-[var(--color-text-primary)] tracking-tight">
                            {metric.value}
                          </div>
                          <div className="mt-0.5 font-mono text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Visual Instrument Column (7 Cols) with Abstract Framing */}
              <div className={cn(
                "col-span-7 relative z-10 flex items-center transition-all duration-500",
                isStepInverted ? "order-1" : "order-2"
              )}>
                <div className="relative w-full">
                  {/* Abstract Layered Offset Blueprint Background Plate */}
                  <div 
                    className="pointer-events-none absolute -inset-2.5 sm:-inset-3.5 rounded-3xl border border-[var(--color-border)]/60 bg-[var(--color-surface-muted)]/20 -z-10 transform translate-x-2 translate-y-2 hidden sm:block"
                    aria-hidden="true"
                  />

                  {/* Corner Registration Crosshairs */}
                  <span className="pointer-events-none absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[var(--color-border-strong)] select-none">+</span>
                  <span className="pointer-events-none absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[var(--color-border-strong)] select-none">+</span>
                  <span className="pointer-events-none absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[var(--color-border-strong)] select-none">+</span>
                  <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[var(--color-border-strong)] select-none">+</span>

                  {/* Floating Satellite Telemetry Badge (Top Left) */}
                  <div className="hidden sm:flex items-center gap-2 absolute -top-3 left-6 z-20 px-3 py-1 rounded-md bg-white border border-[var(--color-border-strong)] shadow-xs font-mono text-[10px] text-[var(--color-text-primary)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-strong)] animate-pulse" />
                    <span className="font-bold">METHODOLOGY STAGE // {currentChapter.chapter}</span>
                  </div>

                  {/* Floating Satellite Telemetry Badge (Bottom Right) */}
                  <div className="hidden sm:flex items-center gap-2 absolute -bottom-3 right-6 z-20 px-3 py-1 rounded-md bg-white border border-[var(--color-border-strong)] shadow-xs font-mono text-[10px] text-[var(--color-text-primary)]">
                    <span className="text-[var(--color-brand-strong)] font-bold">TIMELINE:</span>
                    <span className="font-semibold text-[var(--color-text-secondary)]">{currentChapter.duration}</span>
                  </div>

                  <ProcessVisualStage activeChapter={activeChapterIndex} />
                </div>
              </div>

            </div>
          );
        })()}

        {/* =========================================================================
            6. Mobile & Tablet Artful Sequential Experience (< lg)
            Each chapter presented as a standalone, complete work of digital art
            ========================================================================= */}
        <div className="block lg:hidden space-y-10 sm:space-y-14">
          {processChapters.map((chapter, idx) => (
            <div
              key={chapter.number}
              className="relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-elevated overflow-hidden"
            >
              {/* Monumental Watermark Number */}
              <div
                className="pointer-events-none absolute -top-8 -right-4 font-heading font-black text-8xl text-[var(--color-text-primary)] opacity-[0.04] select-none"
                aria-hidden="true"
              >
                {chapter.number}
              </div>

              {/* Chapter Meta */}
              <div className="flex items-center justify-between mb-4">
                <EditorialEyebrow step={chapter.number} label={chapter.chapter} variant="bracket" />
                <span className="font-mono text-xs font-bold text-[var(--color-text-secondary)]">
                  {chapter.duration}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black text-[var(--color-text-primary)]">
                {chapter.title}
              </h3>

              <p className="mt-1 font-mono text-xs font-semibold text-[var(--color-brand-strong)]">
                // {chapter.subtitle}
              </p>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--color-text-secondary)]">
                {chapter.description}
              </p>

              {/* Visual Instrument Plate for this chapter */}
              <div className="my-4 p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--color-canvas)] border border-[var(--color-border)] overflow-hidden">
                <ProcessVisualStage activeChapter={idx} />
              </div>

              {/* Deliverables List */}
              <div className="space-y-2.5 pt-4 border-t border-[var(--color-border)]">
                <span className="block font-mono text-[9.5px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-2">
                  VERIFIED DELIVERABLES
                </span>
                {chapter.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--color-brand-strong)] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[var(--color-text-primary)]">{deliv.title}</span>
                      <span className="text-[var(--color-text-secondary)] block text-[11px] leading-tight">
                        {deliv.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="mt-6 pt-4 border-t border-[var(--color-border)] grid grid-cols-3 gap-2">
                {chapter.metrics.map((metric, mIdx) => (
                  <div key={mIdx}>
                    <div className="font-mono text-lg font-bold text-[var(--color-text-primary)]">
                      {metric.value}
                    </div>
                    <div className="font-mono text-[9px] text-[var(--color-text-secondary)] uppercase">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* =========================================================================
          7. Architectural Bottom Catenary Dome Boundary (DOVV Studio inspiration)
          ========================================================================= */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 text-[var(--color-canvas-secondary)] opacity-40"
        >
          <path
            d="M 0 0 C 480 50, 960 50, 1440 0 L 1440 0 L 0 0 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
