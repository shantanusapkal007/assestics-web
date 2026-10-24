"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

interface KineticFillTextProps {
  children: string;
  className?: string;
  strokeColor?: string;
  fillColor?: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
}

/**
 * Dual-Layer Outline-to-Fill Scroll Typography
 * Reverse-engineered from piergorelli.com manifesto mechanics.
 * Renders hollow outline text that progressively fills with solid color on scroll.
 */
export function KineticFillText({
  children,
  className = "",
  strokeColor = "rgba(8, 145, 178, 0.4)",
  fillColor = "linear-gradient(135deg, #202722 0%, #0891B2 60%, #38D8E4 100%)",
  as: Component = "span",
}: KineticFillTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!containerRef.current || !fillRef.current) return;

      gsap.fromTo(
        fillRef.current,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <Component
      ref={containerRef as any}
      suppressHydrationWarning
      className={`relative inline-block select-none ${className}`}
    >
      {/* Base Hollow Outline Text */}
      <span
        suppressHydrationWarning
        className="block select-none font-bold"
        style={{
          WebkitTextStroke: `1.5px ${strokeColor}`,
          color: "transparent",
        }}
      >
        {children}
      </span>

      {/* Solid Filled Text with Scroll-Scrubbed Clip Path */}
      <span
        ref={fillRef}
        suppressHydrationWarning
        aria-hidden="true"
        className="absolute inset-0 block select-none font-bold will-change-[clip-path,transform]"
        style={{
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          background: fillColor,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </span>
    </Component>
  );
}
