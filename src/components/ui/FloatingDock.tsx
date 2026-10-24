"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Magnetic } from "@/components/motion/Magnetic";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { ArrowUpRight, Terminal, ChevronUp } from "lucide-react";

export function FloatingDock() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");

  useEffect(() => {
    let ticking = false;
    let cachedTotalHeight = 0;

    const measureHeight = () => {
      cachedTotalHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };

    measureHeight();
    window.addEventListener("resize", measureHeight, { passive: true });

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const nextVisible = scrollY > 300;
          setIsVisible((prev) => (prev !== nextVisible ? nextVisible : prev));

          const progress = scrollY / cachedTotalHeight;
          let nextSection = "Overview";
          if (progress < 0.2) nextSection = "Overview";
          else if (progress < 0.4) nextSection = "Services";
          else if (progress < 0.65) nextSection = "24/7 Matrix";
          else if (progress < 0.85) nextSection = "Work";
          else nextSection = "Delivery";

          setActiveSection((prev) => (prev !== nextSection ? nextSection : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measureHeight);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 p-1.5 rounded-[6px] border border-white/15 bg-[#161B17]/95 text-white backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.45)] animate-in fade-in slide-in-from-bottom-5 duration-300"
      role="region"
      aria-label="Floating Controls"
    >
      {/* Monogram Icon / Back to Top */}
      <button
        type="button"
        onClick={() => {
          const lenis = (window as unknown as { lenis?: { scrollTo: (target: number) => void } }).lenis;
          if (lenis) {
            lenis.scrollTo(0);
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Back to Top"
        title="Scroll to top"
      >
        <div className="relative h-4 w-4">
          <Image
            src="/images/logo.png"
            alt=""
            fill
            sizes="16px"
            className="object-contain brightness-0 invert group-hover:scale-110 transition-transform"
          />
        </div>
      </button>

      {/* Active Section Indicator Badge */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1 font-mono text-xs text-[#A0AAA2] border-x border-white/10">
        <span className="font-mono text-[#38D8E4] font-bold text-[10px]">//</span>
        <span className="font-semibold text-white/90">
          <ScrambleText triggerOnHover>{activeSection}</ScrambleText>
        </span>
      </div>

      {/* Quick Terminal Trigger */}
      <button
        type="button"
        onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[4px] bg-white/5 hover:bg-white/15 font-mono text-xs text-white/90 transition-colors"
        title="Open Command Terminal (⌘K)"
        aria-label="Command Terminal"
      >
        <Terminal className="h-3.5 w-3.5 text-[#38D8E4]" />
        <span className="hidden sm:inline text-[11px] text-[#A0AAA2]">⌘K</span>
      </button>

      {/* High-Voltage CTA Pill with Magnetic Attraction */}
      <Magnetic strength={0.35}>
        <Link
          href="/contact"
          className="flex items-center gap-1.5 rounded-[4px] bg-[#38D8E4] px-3.5 py-1.5 font-mono text-xs font-bold text-[#0E7490] hover:bg-[#20cbd8] hover:shadow-[0_0_20px_rgba(56,216,228,0.5)] transition-all"
        >
          <span>Discuss System</span>
          <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
        </Link>
      </Magnetic>
    </div>
  );
}
