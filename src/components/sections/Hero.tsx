"use client";

import React, { useRef, useEffect } from "react";
import { HeroSystemsSpecimen } from "@/components/sections/HeroSystemsSpecimen";
import { MagneticDualHeading } from "@/components/motion/MagneticDualHeading";
import { ArtisticCTAButton } from "@/components/ui/ArtisticCTAButton";
import { CurvedHeroMarquee } from "@/components/sections/CurvedHeroMarquee";
import { CyberDustCanvas } from "@/components/ui/CyberDustCanvas";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2WrapperRef = useRef<HTMLSpanElement>(null);
  const reticleRef = useRef<HTMLDivElement>(null);
  const reticleDimRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const conduitBridgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!heroRef.current) return;

      const tl = gsap.timeline({ delay: 0.1 });

      // 1. Line 1 & Line 2 Masked Reveal (Two26-style back.out easing)
      if (headlineLine1Ref.current) {
        tl.fromTo(
          headlineLine1Ref.current,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            ease: "back.out(1.4)",
          },
          0
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
            ease: "back.out(1.4)",
          },
          0.14
        );
      }


      // 2b. Nesil Noble Inspiration: Architectural CAD Selection Reticle Reveal
      if (reticleRef.current) {
        tl.fromTo(
          reticleRef.current,
          { opacity: 0, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => {
              reticleRef.current?.classList.add("active");
              if (reticleDimRef.current) {
                reticleDimRef.current.classList.add("active");
              }
            },
          },
          0.38
        );
      }

      // 3. Subtitle Entrance
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          0.4
        );
      }

      // 4. CTAs Entrance
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          0.5
        );
      }

      // 5. Enterprise Proof Stats Entrance
      if (statsRef.current) {
        tl.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" },
          0.6
        );
      }

      // 6. Section Transition Line
      if (conduitBridgeRef.current) {
        gsap.fromTo(
          conduitBridgeRef.current.querySelector(".bridge-line"),
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "bottom 90%",
              end: "bottom 30%",
              scrub: 0.5,
            },
          }
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-20 pb-8 sm:pt-28 sm:pb-12 lg:pt-36 lg:pb-16 ambient-mesh"
      aria-label="Assestics Introduction"
    >
      {/* Nesil Noble Inspiration: Atmospheric Drifting Cyber Dust Specks */}
      <CyberDustCanvas className="opacity-55" />

      {/* Background Architectural Canvas Grid Lines & Blueprint Coordinates */}
      <div className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid h-full w-full grid-cols-4 lg:grid-cols-12">
          <div className="border-r border-[var(--color-border)]/25 relative">
            <span className="absolute top-8 left-2 font-mono text-[9px] text-[var(--color-text-tertiary)]/50 hidden lg:block">
              + 48.1351° N (MUNICH)
            </span>
          </div>
          <div className="hidden border-r border-[var(--color-border)]/25 lg:block lg:col-span-2" />
          <div className="border-r border-[var(--color-border)]/25 lg:col-span-3" />
          <div className="border-r border-[var(--color-border)]/25 lg:col-span-3" />
          <div className="border-r border-[var(--color-border)]/25 lg:col-span-3 relative">
            <span className="absolute bottom-12 right-2 font-mono text-[9px] text-[var(--color-text-tertiary)]/50 hidden lg:block">
              + 11.5820° E (STUDIO)
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Container: 1400px Max Width with High-Precision Spatial Rhythms */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Editorial Typography Narrative */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center z-10">
            
            {/* Nesil Noble Inspiration: CAD Selection Reticle Framing the Core Statement */}
            <div className="relative inline-block w-fit">
              <div ref={reticleRef} className="architectural-sel" aria-hidden="true">
                <span className="anchor anchor-tl" />
                <span className="anchor anchor-tr" />
                <span className="anchor anchor-bl" />
                <span className="anchor anchor-br" />
                <span ref={reticleDimRef} className="architectural-dim">
                  SYS // NOMINAL
                </span>
              </div>

              {/* Kinetic Typography Headline with Two26 Magnetic Dual-Layer Offset Tracking */}
              <h1 className="font-heading font-black tracking-[-0.04em] text-3xl sm:text-5xl md:text-6xl lg:text-[3.9rem] xl:text-[4.4rem] leading-[1.05]">
                {/* Line 1: Masked Reveal */}
                <span className="block overflow-hidden">
                  <span ref={headlineLine1Ref} className="block text-[#161B17]">
                    Complex problems.
                  </span>
                </span>

                {/* Line 2: Two26 Magnetic Dual Heading (Tracks Cursor with Chromatic Offset & Elastic Spring Bounce) */}
                <span className="block overflow-hidden mt-1 sm:mt-1.5">
                  <span ref={headlineLine2WrapperRef} className="block">
                    <MagneticDualHeading
                      primaryText="Smarter systems."
                      accentText="Smarter systems."
                      maxOffset={5}
                    />
                  </span>
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p
              ref={subtitleRef}
              className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-[var(--color-text-secondary)] font-normal"
            >
              We build custom software, web applications, and AI automations.
              We turn manual, time-consuming work into fast, reliable systems that help your business grow.
            </p>

            {/* Two26-Style Jitter-Free Magnetic CTAs with Looping Arrow Tilt */}
            <div ref={ctaRef} className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <ArtisticCTAButton href="/contact" variant="primary">
                Discuss a project
              </ArtisticCTAButton>

              <ArtisticCTAButton href="/services" variant="outline">
                What we offer
              </ArtisticCTAButton>
            </div>

            {/* Simple Business Proof Bar */}
            <div
              ref={statsRef}
              className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[var(--color-border)]/70 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            >
              <div>
                <div className="font-mono text-lg sm:text-2xl font-bold text-[var(--color-text-primary)] tracking-tight">
                  99.9%
                </div>
                <div className="mt-0.5 font-mono text-[9.5px] sm:text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider">
                  Reliable Uptime
                </div>
              </div>

              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[var(--color-brand-strong)] tracking-tight">
                  &lt;24h
                </div>
                <div className="mt-0.5 font-mono text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider">
                  Fast Support
                </div>
              </div>

              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] tracking-tight">
                  100%
                </div>
                <div className="mt-0.5 font-mono text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider">
                  Custom Built
                </div>
              </div>

              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-600 tracking-tight">
                  Weekly
                </div>
                <div className="mt-0.5 font-mono text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider">
                  Live Demos
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Flagship Systems Specimen (Bespoke Product Experience) */}
          <div className="relative lg:col-span-6 xl:col-span-7 flex items-center justify-center">
            <HeroSystemsSpecimen />
          </div>

        </div>
      </div>

      {/* Two26 Signature Curved Ribbon Marquee Sculptural Wave */}
      <div className="mt-12 sm:mt-16 w-full">
        <CurvedHeroMarquee />
      </div>

      {/* Narrative Scroll Conduit connecting Hero into Section 02 */}
      <div
        ref={conduitBridgeRef}
        className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center z-10"
        aria-hidden="true"
      >
        <div className="relative flex flex-col items-center h-10 sm:h-14">
          <div
            className="bridge-line w-[2px] h-full origin-top"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8,145,178,0.2), #0891B2 80%, #38D8E4 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
