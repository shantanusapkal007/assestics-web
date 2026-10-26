"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";
import { isTouchDevice, MOTION_EASINGS } from "@/lib/motion/tokens";

interface ArtisticCTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export function ArtisticCTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: ArtisticCTAButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const fillHoverRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || isTouchDevice()) return;
    const { gsap } = registerGSAP();
    const btn = btnRef.current;
    const text = textRef.current;
    const arrow = arrowRef.current;
    const fillHover = fillHoverRef.current;
    if (!btn) return;

    let arrowLoop: gsap.core.Timeline | null = null;

    // 1. Mouse Enter: Scale Radial Fill + Looping Arrow Rotation Tilt Bounce
    const onMouseEnter = () => {
      if (fillHover) {
        gsap.to(fillHover, {
          scale: 18,
          duration: 0.55,
          ease: "power2.out",
          overwrite: "auto",
        });
      }

      if (arrow) {
        gsap.set(arrow, { transformOrigin: "center center" });
        if (arrowLoop) arrowLoop.kill();

        arrowLoop = gsap.timeline({ repeat: -1, repeatDelay: 0.25 });
        arrowLoop
          .to(arrow, {
            rotation: -25,
            duration: 0.22,
            ease: "power2.out",
          })
          .to(arrow, {
            rotation: 0,
            duration: 0.4,
            ease: "back.out(2.5)",
          });
      }
    };

    // 2. Jitter-Free Magnetic Tracking (True Static Origin Model from two26.studio)
    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const currentX = (gsap.getProperty(btn, "x") as number) || 0;
      const currentY = (gsap.getProperty(btn, "y") as number) || 0;

      // True static center of button before transform offset
      const originCenterX = rect.left - currentX + rect.width / 2;
      const originCenterY = rect.top - currentY + rect.height / 2;

      const deltaX = e.clientX - originCenterX;
      const deltaY = e.clientY - originCenterY;

      // Button magnetic translation (35% factor)
      gsap.to(btn, {
        x: deltaX * 0.35,
        y: deltaY * 0.35,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Dual-layer inner elements parallax (15% factor)
      const innerElements = [text, arrow].filter(Boolean);
      if (innerElements.length) {
        gsap.to(innerElements, {
          x: deltaX * 0.15,
          y: deltaY * 0.15,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    // 3. Mouse Leave: Snap back with signature elastic spring (elastic.out(1.1, 0.4))
    const onMouseLeave = () => {
      if (arrowLoop) {
        arrowLoop.kill();
        arrowLoop = null;
      }
      if (arrow) {
        gsap.to(arrow, {
          rotation: 0,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      }

      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1.1, 0.4)", // Signature two26.studio bounce
        overwrite: "auto",
      });

      const innerElements = [text, arrow].filter(Boolean);
      if (innerElements.length) {
        gsap.to(innerElements, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1.1, 0.4)",
          overwrite: "auto",
        });
      }

      if (fillHover) {
        gsap.to(fillHover, {
          scale: 1,
          duration: 0.45,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    btn.addEventListener("mouseenter", onMouseEnter);
    btn.addEventListener("mousemove", onMouseMove);
    btn.addEventListener("mouseleave", onMouseLeave);

    return () => {
      btn.removeEventListener("mouseenter", onMouseEnter);
      btn.removeEventListener("mousemove", onMouseMove);
      btn.removeEventListener("mouseleave", onMouseLeave);
      if (arrowLoop) arrowLoop.kill();
    };
  }, []);

  const isPrimary = variant === "primary";

  return (
    <Link
      ref={btnRef}
      href={href}
      style={{
        backgroundColor: isPrimary ? "#161B17" : "rgba(255, 255, 255, 0.9)",
        color: isPrimary ? "#FFFFFF" : "#161B17",
      }}
      className={`tactile-press relative inline-flex items-center justify-between gap-3 overflow-hidden rounded-full px-6 py-3.5 font-heading text-sm font-bold tracking-wide transition-colors duration-300 will-change-transform shadow-[0_4px_20px_-2px_rgba(8,145,178,0.22)] ${
        isPrimary
          ? "border border-cyan-400/20 hover:border-cyan-400/50"
          : "border border-[var(--color-border)] hover:border-[var(--color-brand-strong)] backdrop-blur-md"
      } ${className}`}
    >
      {/* Expanding Circular Fill Bubble */}
      <span
        ref={fillHoverRef}
        className={`pointer-events-none absolute -bottom-2 -right-2 h-4 w-4 rounded-full transition-opacity ${
          isPrimary ? "bg-[#0891B2] opacity-35" : "bg-[var(--color-brand-wash)] opacity-70"
        }`}
      />

      {/* Button Text with Parallax */}
      <span ref={textRef} className="relative z-10 flex items-center will-change-transform">
        {children}
      </span>

      {/* Button Arrow with Parallax and Looping Bounce */}
      <span
        ref={arrowRef}
        className={`relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full will-change-transform ${
          isPrimary ? "text-[#38D8E4]" : "text-[var(--color-brand-strong)]"
        }`}
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
