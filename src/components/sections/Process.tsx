"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { KineticText } from "@/components/motion/KineticText";
import { processSteps } from "@/content/process";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stagesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!sectionRef.current || !pathRef.current) return;

      const totalLength = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      });

      // Scrub timeline linking line drawing to scroll progress
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 85%",
          scrub: 0.6,
        },
      });

      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
      });

      // Animate active state on each step card as scroll progresses
      if (stagesRef.current) {
        const cards = stagesRef.current.querySelectorAll(".process-stage-item");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0.45, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32"
      aria-labelledby="process-title"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-20 border-b border-[var(--color-border)] pb-8 text-center sm:text-left">
          <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-strong)] uppercase">
            METHODOLOGY · THE DELIVERY JOURNEY
          </span>
          <h2
            id="process-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
          >
            <KineticText triggerOnScroll>From complexity to clarity.</KineticText>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            Every business problem is unique, but successful execution follows a disciplined, transparent progression:
            grounded discovery, deliberate engineering, and continuous operational feedback.
          </p>
        </div>

        {/* Continuous Horizontal Progression Spline (Desktop) */}
        <div className="relative hidden lg:block mb-12">
          <svg
            viewBox="0 0 1000 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full overflow-visible"
          >
            {/* Background Conduit */}
            <path
              d="M 50 30 C 250 30, 250 30, 500 30 C 750 30, 750 30, 950 30"
              stroke="#E2E3DC"
              strokeWidth="2.5"
            />
            {/* Animated Active Spline */}
            <path
              ref={pathRef}
              d="M 50 30 C 250 30, 250 30, 500 30 C 750 30, 750 30, 950 30"
              stroke="#38D8E4"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Waypoint Nodes */}
            <circle cx="50" cy="30" r="10" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2.5" />
            <circle cx="50" cy="30" r="4" fill="#0891B2" />

            <circle cx="500" cy="30" r="10" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2.5" />
            <circle cx="500" cy="30" r="4" fill="#0891B2" />

            <circle cx="950" cy="30" r="10" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2.5" />
            <circle cx="950" cy="30" r="4" fill="#0891B2" />
          </svg>
        </div>

        {/* 3 Continuous Stages */}
        <div ref={stagesRef} className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          {processSteps.map((step) => {
            return (
              <div
                key={step.number}
                className="process-stage-item relative flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-xs"
              >
                <div>
                  {/* Stage Marker & Heading */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-[var(--color-brand-strong)]">
                      {step.number}
                    </span>
                    <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-1 font-mono text-[11px] font-semibold text-[var(--color-text-secondary)] uppercase">
                      PHASE {step.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables Matrix */}
                <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                  <span className="font-mono text-xs font-semibold text-[var(--color-brand-strong)] uppercase tracking-wider">
                    OPERATIONAL FOCUS
                  </span>
                  <ul className="mt-3 space-y-2 text-xs text-[var(--color-text-secondary)]">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
