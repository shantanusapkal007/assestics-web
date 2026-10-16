"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KineticText } from "@/components/motion/KineticText";
import { ConnectedHeroSystem } from "@/components/sections/ConnectedHeroSystem";
import { ArrowRight, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!heroRef.current) return;

      const tl = gsap.timeline({ delay: 0.1 });

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "+=0.15"
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          "-=0.3"
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
      aria-label="Assestics Introduction"
    >
      {/* Background Architectural Grid Lines */}
      <div className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid h-full w-full grid-cols-4 lg:grid-cols-12">
          <div className="border-r border-[var(--color-border)]/40" />
          <div className="hidden border-r border-[var(--color-border)]/40 lg:block lg:col-span-2" />
          <div className="border-r border-[var(--color-border)]/40 lg:col-span-3" />
          <div className="border-r border-[var(--color-border)]/40 lg:col-span-3" />
          <div className="border-r border-[var(--color-border)]/40 lg:col-span-3" />
        </div>
      </div>

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Bold Typographic Narrative */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Compact Capability Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-[var(--color-brand-strong)]" />
              <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--color-text-secondary)] uppercase">
                AI · SOFTWARE · AUTOMATION · CLOUD
              </span>
            </div>

            {/* Kinetic Typography Headline */}
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl md:text-6xl xl:text-7xl">
              <KineticText delay={0.05}>Complex problems.</KineticText>
              <KineticText delay={0.2} className="text-[var(--color-brand-strong)]">
                Smarter systems.
              </KineticText>
            </h1>

            {/* Supporting Copy */}
            <p
              ref={subtitleRef}
              className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl"
            >
              Assestics builds AI-powered automation, custom software and reliable cloud systems that help businesses
              streamline work and grow.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Discuss a project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work">Explore our work</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Connected Systems Typography & Conduit Canvas */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            <ConnectedHeroSystem />
          </div>
        </div>
      </Container>
    </section>
  );
}
