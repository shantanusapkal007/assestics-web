"use client";

import React, { useRef, useEffect } from "react";
import { HeroSystemsSpecimen } from "@/components/sections/HeroSystemsSpecimen";
import { MagneticDualHeading } from "@/components/motion/MagneticDualHeading";
import { ArtisticCTAButton } from "@/components/ui/ArtisticCTAButton";
import { MaterialField } from "@/components/ui/MaterialField";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineEyebrowRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2WrapperRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!heroRef.current) return;

      const tl = gsap.timeline({ delay: 0.1 });

      // 1. Editorial Italic Eyebrow Reveal
      if (headlineEyebrowRef.current) {
        tl.fromTo(
          headlineEyebrowRef.current,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power4.out",
          },
          0
        );
      }

      // 2. Line 1 & Line 2 Masked Reveals with power4.out editorial easing
      if (headlineLine1Ref.current) {
        tl.fromTo(
          headlineLine1Ref.current,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power4.out",
          },
          0.1
        );
      }

      if (headlineLine2WrapperRef.current) {
        tl.fromTo(
          headlineLine2WrapperRef.current,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power4.out",
          },
          0.22
        );
      }


      // 4. Subtitle Entrance
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          0.48
        );
      }

      // 5. CTAs Entrance
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" },
          0.56
        );
      }

    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="material-section relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-20 pb-8 sm:pt-28 sm:pb-12 lg:pt-36 lg:pb-16"
      aria-label="Assestics Introduction"
    >
      <MaterialField variant="hero" />

      {/* Background Architectural Canvas Grid Lines & Blueprint Coordinates */}
      <div className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid h-full w-full grid-cols-4 lg:grid-cols-12">
          <div className="border-r border-[var(--color-border)]/25 relative">
          </div>
          <div className="hidden border-r border-[var(--color-border)]/25 lg:block lg:col-span-2" />
          <div className="border-r border-[var(--color-border)]/25 lg:col-span-3" />
          <div className="border-r border-[var(--color-border)]/25 lg:col-span-3" />
          <div className="border-r border-[var(--color-border)]/25 lg:col-span-3" />
        </div>
      </div>

      {/* Main Hero Container: 1400px Max Width with High-Precision Spatial Rhythms */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Editorial Typography Narrative */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center z-10">
            
            {/* Refined Editorial Playfair Italic Contrast Accent */}
            <div ref={headlineEyebrowRef} className="overflow-hidden mb-2 sm:mb-2.5">
              <span className="eyebrow-inner block font-serif italic text-xl sm:text-2xl lg:text-[1.7rem] text-[var(--color-brand-strong)] font-normal tracking-wide">
                Custom software &amp; AI automation for
              </span>
            </div>

            {/* Kinetic Typography Headline with Two26 Magnetic Dual-Layer Offset Tracking */}
            <h1 className="font-heading font-black tracking-[-0.04em] text-3xl sm:text-5xl md:text-6xl lg:text-[3.9rem] xl:text-[4.4rem] leading-[1.05]">
              {/* Line 1: Masked Reveal */}
              <span className="block overflow-hidden">
                <span ref={headlineLine1Ref} className="block text-[#161B17]">
                  Complex operations.
                </span>
              </span>

              {/* Line 2: Two26 Magnetic Dual Heading (Tracks Cursor with Chromatic Offset & Elastic Spring Bounce) */}
              <span className="block overflow-hidden mt-1 sm:mt-1.5">
                <span ref={headlineLine2WrapperRef} className="block">
                  <MagneticDualHeading
                    primaryText="Clearer systems."
                    accentText="Clearer systems."
                    maxOffset={5}
                  />
                </span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              ref={subtitleRef}
              className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-[var(--color-text-secondary)] font-normal"
            >
              Assestics designs and builds the software, automations, and connected workflows your team needs to do better work with less manual effort.
            </p>

            {/* Two26-Style Jitter-Free Magnetic CTAs with Looping Arrow Tilt */}
            <div ref={ctaRef} className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <ArtisticCTAButton href="/contact" variant="primary">
                Map a workflow
              </ArtisticCTAButton>

              <ArtisticCTAButton href="/services" variant="outline">
                Explore services
              </ArtisticCTAButton>
            </div>

          </div>

          {/* Right Column: Flagship Systems Specimen (Bespoke Product Experience) */}
          <div className="relative lg:col-span-6 xl:col-span-7 flex items-center justify-center">
            <HeroSystemsSpecimen />
          </div>

        </div>
      </div>

    </section>
  );
}
