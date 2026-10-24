"use client";

import React, { useRef, useEffect } from "react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

interface MagneticDualHeadingProps {
  primaryText: string;
  accentText: string;
  className?: string;
  maxOffset?: number;
}

export function MagneticDualHeading({
  primaryText,
  accentText,
  className = "",
  maxOffset = 5,
}: MagneticDualHeadingProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const accentRef = useRef<HTMLSpanElement>(null);
  const primaryRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const { gsap } = registerGSAP();
    const wrapper = wrapperRef.current;
    const accent = accentRef.current;
    if (!wrapper || !accent) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const distance = Math.hypot(dx, dy);
      const maxRadius = Math.max(rect.width, rect.height) / 2 || 150;

      const intensity = Math.min(1, Math.max(0.2, distance / maxRadius));
      const angle = Math.atan2(dy, dx);

      const targetX = Math.cos(angle) * (intensity * maxOffset);
      const targetY = Math.sin(angle) * (intensity * maxOffset);

      gsap.to(accent, {
        x: targetX,
        y: targetY,
        duration: 0.22,
        ease: "power1.out",
        overwrite: "auto",
      });
    };

    const handlePointerLeave = () => {
      gsap.to(accent, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1.1, 0.4)", // Signature two26.studio spring bounce
        overwrite: "auto",
      });
    };

    const parentSection = wrapper.closest("section") || wrapper;
    parentSection.addEventListener("pointermove", handlePointerMove as EventListener, { passive: true });
    parentSection.addEventListener("pointerleave", handlePointerLeave as EventListener);

    return () => {
      parentSection.removeEventListener("pointermove", handlePointerMove as EventListener);
      parentSection.removeEventListener("pointerleave", handlePointerLeave as EventListener);
    };
  }, [maxOffset]);

  return (
    <span ref={wrapperRef} className="relative inline-block select-none cursor-default">
      {/* 1. Underlying Accent Layer: Optical Chromatic Offset with Elastic Spring Bounce */}
      <span
        ref={accentRef}
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full z-[1] will-change-transform"
        style={{
          background: "linear-gradient(135deg, #38D8E4 0%, #0891B2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: 0.45,
          filter: "blur(2px)",
          display: "inline-block",
        }}
      >
        {accentText}
      </span>

      {/* 2. Top Primary Layer: Razor-sharp Radiant Iridescent Gradient */}
      <span
        ref={primaryRef}
        className={`relative z-[2] inline-block pointer-events-none ${className}`}
        style={{
          background: "linear-gradient(135deg, #0E7490 0%, #0891B2 35%, #06B6D4 70%, #38D8E4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        {primaryText}
      </span>
    </span>
  );
}
