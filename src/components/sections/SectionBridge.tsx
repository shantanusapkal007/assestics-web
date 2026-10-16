"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

export function SectionBridge() {
  const bridgeRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!bridgeRef.current || !lineRef.current) return;

      const pathLength = lineRef.current.getTotalLength();
      gsap.set(lineRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bridgeRef.current,
          start: "top 85%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      });

      tl.to(lineRef.current, {
        strokeDashoffset: 0,
        ease: "none",
      });

      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0.2, letterSpacing: "0.02em" },
          { opacity: 1, letterSpacing: "-0.01em", ease: "power2.out" },
          "-=0.4"
        );
      }
    },
    { scope: bridgeRef }
  );

  return (
    <div
      ref={bridgeRef}
      className="relative overflow-hidden py-12 lg:py-16"
      aria-hidden="true"
    >
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          {/* Vertical Conduit Line from Hero */}
          <svg
            width="24"
            height="120"
            viewBox="0 0 24 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            <path
              ref={lineRef}
              d="M 12 0 L 12 108"
              stroke="#38D8E4"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="112" r="4" fill="#0891B2" />
            <circle cx="12" cy="112" r="8" stroke="#38D8E4" strokeWidth="1" opacity="0.6" />
          </svg>

          {/* Section Marker & Bridge Headline */}
          <div ref={textRef} className="mt-4 max-w-2xl">
            <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-strong)] uppercase">
              CHAPTER 01 · REAL APPLICATIONS
            </span>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)] sm:text-base">
              Where conceptual architectures become hardened, production-grade business tools.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
