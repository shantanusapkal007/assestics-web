"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SceneFallback } from "@/components/3d/SceneFallback";
import { LinkArrow } from "@/components/ui/LinkArrow";

// Dynamically load the 3D scene on the client without blocking initial SSR render
const AssesticsAssembly = dynamic(
  () =>
    import("@/components/3d/AssesticsAssembly").then(
      (mod) => mod.AssesticsAssembly
    ),
  {
    ssr: false,
    loading: () => <SceneFallback />,
  }
);

export function Hero() {
  return (
    <section className="relative w-full pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-[#E2E3DC]/60">
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E3DC_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Accessible Primary Editorial Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 relative z-10">
            {/* Architectural Descriptor */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#EDFBFD] border border-[#D5F6F9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2] animate-pulse" />
              <span className="mono-tag">
                SOFTWARE · AI · DIGITAL OPERATIONS
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#202722] leading-[1.1] [text-wrap:balance]">
              Complex problems.{" "}
              <span className="text-[#0891B2] block sm:inline">
                Smarter systems.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#687069] max-w-xl leading-relaxed [text-wrap:pretty]">
              Assestics builds intelligent software, automates business
              workflows and engineers reliable digital infrastructure to help
              businesses operate better and grow with confidence.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button href="/contact" variant="primary" size="lg">
                <span>Discuss a project</span>
                <LinkArrow />
              </Button>
              <Button href="/work" variant="outline" size="lg">
                Explore our work
              </Button>
            </div>

            {/* System Status Indicators (Authentic Architecture Metrics) */}
            <div className="pt-6 border-t border-[#E2E3DC] flex flex-wrap items-center gap-6 text-xs text-[#687069] font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38D8E4]" />
                <span className="font-semibold text-[#202722]">
                  ARCHITECTURE
                </span>
                <span>INTEGRATED</span>
              </div>
              <div className="hidden sm:block text-[#C8CAC1]">|</div>
              <div>
                <span className="font-semibold text-[#202722]">APPROACH:</span>{" "}
                SYSTEMIC &amp; MEASURED
              </div>
            </div>
          </div>

          {/* Right Column: Signature 3D Assestics Assembly */}
          <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[480px] lg:h-[580px] flex items-center justify-center">
            {/* Ambient cyan backlight glow */}
            <div className="absolute w-[280px] h-[280px] bg-[#38D8E4]/15 rounded-full blur-[90px] pointer-events-none" />
            <AssesticsAssembly />
          </div>
        </div>
      </Container>
    </section>
  );
}
