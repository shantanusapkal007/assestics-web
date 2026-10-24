"use client";

import React, { useRef, useEffect } from "react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

interface KineticLetterScrubProps {
  text: string;
  className?: string;
  accentColor?: string;
}

export function KineticLetterScrub({
  text,
  className = "",
  accentColor = "#0891B2",
}: KineticLetterScrubProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const { gsap, ScrollTrigger } = registerGSAP();
    const container = containerRef.current;
    if (!container) return;

    const chars = Array.from(container.querySelectorAll<HTMLSpanElement>(".scrub-char"));
    if (!chars.length) return;

    // 1. Initial State: Faint muted grey-teal
    gsap.set(chars, {
      color: "rgba(32, 39, 34, 0.22)",
      scale: 1,
      rotation: 0,
      display: "inline-block",
      transformOrigin: "center center",
      willChange: "transform, color",
    });

    // 2. Responsive Scroll-Scrubbed Timeline (Reverse engineered from two26.studio About Section)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 35%",
        scrub: 0.75, // Smooth inertia
      },
    });

    const totalChars = chars.length;
    chars.forEach((char, i) => {
      const startTime = (i / totalChars) * 0.75;

      // Stage 1: Letter scales 1.1, subtle organic tilt, illuminates in brand accent (#0891B2)
      tl.to(
        char,
        {
          color: accentColor,
          scale: 1.08,
          rotation: () => (i % 2 === 0 ? 3 : -3),
          duration: 0.15,
          ease: "power1.out",
        },
        startTime
      );

      // Stage 2: Settles into solid high-contrast obsidian (#202722)
      tl.to(
        char,
        {
          color: "#202722",
          scale: 1,
          rotation: 0,
          duration: 0.18,
          ease: "power1.inOut",
        },
        startTime + 0.12
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });
    };
  }, [accentColor]);

  // Split text into words and chars to prevent mid-word wrapping
  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`select-none leading-relaxed flex flex-wrap justify-center gap-x-1.5 gap-y-1 ${className}`}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-flex whitespace-nowrap">
          {word.split("").map((c, cIdx) => (
            <span key={cIdx} className="scrub-char inline-block will-change-transform">
              {c}
            </span>
          ))}
        </span>
      ))}
    </p>
  );
}
