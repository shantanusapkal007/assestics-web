"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ShutterImage } from "@/components/motion/ShutterImage";
import { KineticText } from "@/components/motion/KineticText";
import { projects } from "@/content/projects";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { WorkBlueprintStage } from "@/components/sections/WorkBlueprintStage";
import { KineticFillText } from "@/components/motion/KineticFillText";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const solarNation = projects[0];
  const manufacturingErp = projects[1];
  const supplyChainTwin = projects[3];

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      registerGSAP();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-32"
      aria-labelledby="selected-work-title"
    >
      <Container>
        {/* Editorial Section Header */}
        <div className="mb-16 border-b border-[var(--color-border)] pb-8 lg:mb-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-strong)] uppercase">
                <ScrambleText triggerOnHover>SELECTED WORK · 01 / 03</ScrambleText>
              </span>
              <h2
                id="selected-work-title"
                className="mt-3 font-heading text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
              >
                <KineticFillText as="span">Built to solve real problems.</KineticFillText>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
              Explore how we bring software engineering, intelligent automation, and operational systems together to
              solve practical business challenges.
            </p>
          </div>
        </div>

        {/* =========================================================================
            CASE STUDY 01: Solar Nation — Grand Full-Width Editorial Showcase
           ========================================================================= */}
        <div className="group relative mb-28 border-b border-[var(--color-border)] pb-24 lg:mb-36 lg:pb-32">
          {/* Chapter & Meta Header */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl font-bold text-[var(--color-brand-strong)]">01</span>
              <span className="h-4 w-px bg-[var(--color-border)]" />
              <span className="font-mono text-xs font-semibold tracking-wider text-[var(--color-text-secondary)] uppercase">
                {solarNation.category}
              </span>
            </div>
            <span className="font-mono text-xs text-[var(--color-text-tertiary)]">{solarNation.year} · DEPLOYED SYSTEM</span>
          </div>

          {/* Grand Project Title & Tagline */}
          <div className="mb-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            <h3 className="font-heading text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:col-span-7">
              <Link href={`/work/${solarNation.slug}`} className="transition-colors hover:text-[var(--color-brand-strong)]">
                {solarNation.title}
              </Link>
            </h3>
            <p className="text-lg text-[var(--color-text-secondary)] lg:col-span-5">
              {solarNation.tagline}
            </p>
          </div>

          {/* Shutter Mask Image Visual & Interactive Blueprint Workbench */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Link href={`/work/${solarNation.slug}`} className="block">
                <ShutterImage
                  src={solarNation.image}
                  alt={solarNation.title}
                  aspectRatio="aspect-16/10"
                  variant="aperture"
                  className="border border-[var(--color-border)] shadow-sm transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {solarNation.solution}
              </p>
            </div>

            <div className="lg:col-span-7">
              <WorkBlueprintStage
                projectTitle={solarNation.title}
                projectSlug={solarNation.slug}
                category={solarNation.category}
                techStack={solarNation.techStack}
                metrics={solarNation.metrics || [
                  { label: "Audit Time", value: "< 2 min" },
                  { label: "Conversion Lift", value: "+38%" },
                  { label: "Lead Qualification", value: "100% Automated" }
                ]}
                accentColor={solarNation.accentColor}
              />
            </div>
          </div>

          {/* Technical Architecture Specs & Link */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <div className="flex flex-wrap gap-2">
                {solarNation.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-mono text-xs text-[var(--color-text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex md:col-span-4 md:justify-end">
              <Link
                href={`/work/${solarNation.slug}`}
                className="inline-flex items-center gap-2 font-mono text-sm font-bold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-brand-strong)]"
              >
                <span>READ COMPLETE ARCHITECTURE</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CASE STUDY 02: Manufacturing ERP — 50/50 Asymmetric Split Composition
           ========================================================================= */}
        <div className="group relative mb-28 border-b border-[var(--color-border)] pb-24 lg:mb-36 lg:pb-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Narrative Details */}
            <div className="order-2 lg:order-1 lg:col-span-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-2xl font-bold text-[var(--color-brand-strong)]">02</span>
                <span className="h-4 w-px bg-[var(--color-border)]" />
                <span className="font-mono text-xs font-semibold tracking-wider text-[var(--color-text-secondary)] uppercase">
                  {manufacturingErp.category}
                </span>
              </div>

              <h3 className="font-heading text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                <Link href={`/work/${manufacturingErp.slug}`} className="transition-colors hover:text-[var(--color-brand-strong)]">
                  {manufacturingErp.title}
                </Link>
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
                {manufacturingErp.challenge}
              </p>

              {/* Verified Architecture Bullet Points */}
              <div className="mt-6 space-y-2.5">
                {manufacturingErp.architectureDetails.slice(0, 3).map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--color-text-secondary)]">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-brand-strong)]" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/work/${manufacturingErp.slug}`}>
                    Explore Case Study
                    <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                  TECH: {manufacturingErp.techStack.slice(0, 3).join(" · ")}
                </span>
              </div>
            </div>

            {/* Right Column: Shutter Mask Visual */}
            <div className="order-1 lg:order-2 lg:col-span-6">
              <Link href={`/work/${manufacturingErp.slug}`} className="block">
                <ShutterImage
                  src={manufacturingErp.image}
                  alt={manufacturingErp.title}
                  aspectRatio="aspect-4/3"
                  variant="horizontal"
                  className="border border-[var(--color-border)] shadow-sm transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CASE STUDY 03: Supply Chain Twin — Wide Panoramic Layout
           ========================================================================= */}
        <div className="group relative mb-16 border-b border-[var(--color-border)] pb-20 lg:mb-24 lg:pb-28">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl font-bold text-[var(--color-brand-strong)]">03</span>
              <span className="h-4 w-px bg-[var(--color-border)]" />
              <span className="font-mono text-xs font-semibold tracking-wider text-[var(--color-text-secondary)] uppercase">
                {supplyChainTwin.category}
              </span>
            </div>
            <span className="font-mono text-xs text-[var(--color-brand-strong)] font-semibold">
              DIGITAL FACTORY METHODOLOGY
            </span>
          </div>

          <div className="grid grid-cols-1 items-end justify-between gap-6 pb-6 lg:grid-cols-12">
            <h3 className="font-heading text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:col-span-8">
              <Link href={`/work/${supplyChainTwin.slug}`} className="transition-colors hover:text-[var(--color-brand-strong)]">
                {supplyChainTwin.title}
              </Link>
            </h3>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href={`/work/${supplyChainTwin.slug}`}
                className="inline-flex items-center gap-2 font-mono text-sm font-bold text-[var(--color-text-primary)] hover:text-[var(--color-brand-strong)]"
              >
                <span>VIEW SIMULATION MODEL</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <Link href={`/work/${supplyChainTwin.slug}`} className="block">
            <ShutterImage
              src={supplyChainTwin.image}
              alt={supplyChainTwin.title}
              aspectRatio="aspect-21/9"
              variant="aperture"
              className="border border-[var(--color-border)] shadow-sm transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </Link>
        </div>

        {/* Bottom Section Action */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h4 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
              Need custom systems for your organization?
            </h4>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Review all client deliveries, architectural specifications, and engineering methodologies.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/work">
              Browse All Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
