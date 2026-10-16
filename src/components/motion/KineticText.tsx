"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";
import { cn } from "@/lib/utils";

interface KineticTextProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  triggerOnScroll?: boolean;
}

export function KineticText({
  children,
  as: Component = "div",
  className,
  delay = 0,
  stagger = 0.08,
  triggerOnScroll = false,
}: KineticTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!containerRef.current) return;

      const lines = containerRef.current.querySelectorAll(".kinetic-line-inner");
      if (lines.length === 0) return;

      const animationVars: gsap.TweenVars = {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        ease: "power4.out",
        stagger: stagger,
        delay: delay,
      };

      if (triggerOnScroll) {
        gsap.fromTo(
          lines,
          { yPercent: 105, opacity: 0 },
          {
            ...animationVars,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      } else {
        gsap.fromTo(lines, { yPercent: 105, opacity: 0 }, animationVars);
      }
    },
    { scope: containerRef, dependencies: [delay, stagger, triggerOnScroll] }
  );

  // If text is a string with newlines or split manually:
  if (typeof children === "string") {
    const lines = children.split("\n");
    return (
      <Component
        ref={containerRef as unknown as React.Ref<HTMLElement & HTMLHeadingElement & HTMLParagraphElement>}
        className={cn("block", className)}
      >
        {lines.map((line, index) => (
          <span key={index} className="block overflow-hidden pb-1 leading-[1.12]">
            <span className="kinetic-line-inner block will-change-transform">
              {line}
            </span>
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component
      ref={containerRef as unknown as React.Ref<HTMLElement & HTMLHeadingElement & HTMLParagraphElement>}
      className={cn("block", className)}
    >
      <span className="block overflow-hidden pb-1 leading-[1.12]">
        <span className="kinetic-line-inner block will-change-transform">
          {children}
        </span>
      </span>
    </Component>
  );
}
