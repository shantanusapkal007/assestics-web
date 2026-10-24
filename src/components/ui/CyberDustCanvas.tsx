"use client";

import React, { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion/gsap";

interface Speck {
  x: number;
  y: number;
  r: number;
  vy: number;
  sway: number;
  tw: number;
  color: string;
}

/**
 * CyberDustCanvas
 * Reverse-engineered from Nesil Noble's award-winning atmospheric dust particle engine.
 * Renders drifting, twinkling micro-specks that subtly sway and respond to scroll velocity.
 */
export function CyberDustCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let specks: Speck[] = [];
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const brandColors = [
      "22, 163, 74",   // emerald green
      "37, 99, 235",   // cobalt blue
      "14, 165, 233",  // sky cyan
      "120, 113, 108", // stone slate
    ];

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density calculation: 1 particle per ~20,000 px^2, max 55 specks
      const count = Math.min(55, Math.max(20, Math.round((width * height) / 22000)));

      specks = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.7 + Math.random() * 1.3,
        vy: 0.12 + Math.random() * 0.22,
        sway: Math.random() * Math.PI * 2,
        tw: Math.random() * Math.PI * 2,
        color: brandColors[Math.floor(Math.random() * brandColors.length)],
      }));
    }

    resize();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.12;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", resize, { passive: true });

    function tick() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Dampen scroll velocity smoothly toward 0
      scrollVelocity *= 0.92;
      const push = Math.max(-4, Math.min(4, scrollVelocity));

      for (let i = 0; i < specks.length; i++) {
        const p = specks[i];
        p.sway += 0.014;
        p.tw += 0.028;

        p.y -= p.vy + push;
        p.x += Math.sin(p.sway) * 0.22;

        // Wrap around viewport boundaries
        if (p.y < -6) {
          p.y = height + 6;
          p.x = Math.random() * width;
        } else if (p.y > height + 6) {
          p.y = -6;
          p.x = Math.random() * width;
        }

        // Sinusoidal twinkle pulse (alpha 0.15 to 0.55)
        const alpha = 0.15 + 0.4 * (0.5 + 0.5 * Math.sin(p.tw));

        ctx.fillStyle = `rgba(${p.color}, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60 transition-opacity duration-1000 ${className}`}
      aria-hidden="true"
    />
  );
}
