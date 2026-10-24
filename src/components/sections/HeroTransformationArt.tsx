"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  FileSpreadsheet, 
  Clock, 
  MessageSquareWarning, 
  Bot, 
  Database, 
  Workflow,
  ArrowRightCircle
} from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion/gsap";

export function HeroTransformationArt() {
  const [activeMode, setActiveMode] = useState<"chaos" | "system">("system");
  const reduced = prefersReducedMotion();

  return (
    <div className="relative w-full select-none py-2 lg:py-4">
      {/* Abstract Blueprint Registration Frame */}
      <div 
        className="pointer-events-none absolute -inset-3 sm:-inset-4 rounded-3xl border border-[var(--color-border)]/50 bg-[var(--color-surface-muted)]/15 -z-10 hidden sm:block"
        aria-hidden="true"
      />

      {/* Outer Luxury Chassis with Relevo Milled Relief */}
      <div className="tactile-emboss relative rounded-2xl border border-[var(--color-border-strong)] bg-white shadow-[0_24px_50px_-15px_rgba(22,27,23,0.10)] overflow-hidden">
        
        {/* Top Control Bar: Polpharma-Inspired Sliding Glass Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] px-4 sm:px-6 py-3.5 bg-[#FAF9F5]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
              INTERACTIVE
            </span>
            <span className="font-mono text-[10.5px] font-bold tracking-wider text-[#161B17] uppercase">
              THE TRANSFORMATION // WHAT WE DO
            </span>
          </div>

          {/* Luxury Dual-Pill Switch */}
          <div className="relative flex items-center p-1 rounded-full bg-[#EAE9E2]/70 border border-[#D5D7CE] shadow-inner">
            <button
              type="button"
              onClick={() => setActiveMode("chaos")}
              className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-[10px] font-bold transition-all duration-300 ${
                activeMode === "chaos"
                  ? "text-rose-800"
                  : "text-[#687069] hover:text-[#161B17]"
              }`}
            >
              <AlertTriangle className={`h-3 w-3 ${activeMode === "chaos" ? "text-rose-600" : "opacity-50"}`} />
              <span>THE CHAOS</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMode("system")}
              className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-[10px] font-bold transition-all duration-300 ${
                activeMode === "system"
                  ? "text-emerald-900"
                  : "text-[#687069] hover:text-[#161B17]"
              }`}
            >
              <Sparkles className={`h-3 w-3 ${activeMode === "system" ? "text-emerald-600" : "opacity-50"}`} />
              <span>OUR SYSTEM</span>
            </button>

            {/* Sliding Glass Pill Highlight */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 450, damping: 35 }}
              className={`absolute top-1 bottom-1 rounded-full shadow-sm border ${
                activeMode === "chaos"
                  ? "left-1 w-[calc(50%-4px)] bg-white border-rose-200"
                  : "left-[calc(50%+2px)] w-[calc(50%-4px)] bg-white border-emerald-300"
              }`}
            />
          </div>
        </div>

        {/* Stage Canvas Area: Fluid Wipe & Morph Between Chaos and Clarity */}
        <div className="relative min-h-[380px] sm:min-h-[410px] p-5 sm:p-7 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-white via-[#FCFBF8] to-[#FAF9F5]">
          <AnimatePresence mode="wait">
            
            {/* =========================================================
               STATE A: THE CHAOS (The manual bottlenecks business owners face)
               ========================================================= */}
            {activeMode === "chaos" && (
              <motion.div
                key="chaos"
                initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full flex flex-col justify-between"
              >
                {/* Stage Headline */}
                <div className="flex items-center justify-between pb-3 border-b border-rose-100 font-mono text-[11px]">
                  <div className="flex items-center gap-2 text-rose-800 font-bold">
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                    <span>BEFORE ASSESTICS // MANUAL BOTTLENECKS</span>
                  </div>
                  <span className="text-rose-700 font-mono text-[10px] font-bold bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                    4+ HOURS LOST DAILY
                  </span>
                </div>

                {/* The 3 Disorganized Pain Points (Artistic Tactile Cards) */}
                <div className="my-5 grid grid-cols-1 sm:grid-cols-3 gap-3.5 relative">
                  {/* Fragmented background error mesh */}
                  <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="#F43F5E" strokeWidth="1" strokeDasharray="4 6" />
                      <line x1="85%" y1="15%" x2="15%" y2="85%" stroke="#F43F5E" strokeWidth="1" strokeDasharray="4 6" />
                    </svg>
                  </div>

                  {/* Chaos Card 1: Fragmented Spreadsheets */}
                  <div className="p-4 rounded-xl border border-rose-200 bg-white/90 shadow-sm transform -rotate-1 transition-transform hover:rotate-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
                        <FileSpreadsheet className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-[9px] font-bold text-rose-600 uppercase bg-rose-50 px-1.5 py-0.5 rounded">
                        DESYNC
                      </span>
                    </div>
                    <div className="font-heading text-sm font-bold text-[#161B17]">
                      12 Spreadsheets
                    </div>
                    <p className="mt-1.5 text-xs text-[#687069] leading-relaxed">
                      Data scattered across Excel files. Numbers don't match and reports take days.
                    </p>
                  </div>

                  {/* Chaos Card 2: Manual Copy-Pasting */}
                  <div className="p-4 rounded-xl border border-amber-200 bg-white/90 shadow-sm transform rotate-1 transition-transform hover:rotate-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                        <Clock className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-[9px] font-bold text-amber-600 uppercase bg-amber-50 px-1.5 py-0.5 rounded">
                        REPETITIVE
                      </span>
                    </div>
                    <div className="font-heading text-sm font-bold text-[#161B17]">
                      Manual Re-entry
                    </div>
                    <p className="mt-1.5 text-xs text-[#687069] leading-relaxed">
                      Staff typing customer orders from email into invoices one by one with frequent errors.
                    </p>
                  </div>

                  {/* Chaos Card 3: Lost Inquiries */}
                  <div className="p-4 rounded-xl border border-rose-200 bg-white/90 shadow-sm transform -rotate-1 transition-transform hover:rotate-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
                        <MessageSquareWarning className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-[9px] font-bold text-rose-600 uppercase bg-rose-50 px-1.5 py-0.5 rounded">
                        DELAYED
                      </span>
                    </div>
                    <div className="font-heading text-sm font-bold text-[#161B17]">
                      Lost Leads
                    </div>
                    <p className="mt-1.5 text-xs text-[#687069] leading-relaxed">
                      WhatsApp and email inquiries waiting 18+ hours without automated replies.
                    </p>
                  </div>
                </div>

                {/* Bottom Callout & Instant Resolution Button */}
                <div className="pt-3 border-t border-rose-100 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px]">
                  <span className="text-[#687069]">
                    RESULT: <strong className="text-rose-700">High operational stress & wasted payroll</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveMode("system")}
                    className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <span>See How Assestics Fixes This</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* =========================================================
               STATE B: THE ASSESTICS SYSTEM (Harmonious Automated Clarity)
               ========================================================= */}
            {activeMode === "system" && (
              <motion.div
                key="system"
                initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full flex flex-col justify-between"
              >
                {/* Stage Headline */}
                <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)] font-mono text-[11px]">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>WITH ASSESTICS // STREAMLINED OPERATIONS</span>
                  </div>
                  <span className="text-emerald-800 font-mono text-[10px] font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-300">
                    100% AUTOMATED · 0 BUSYWORK
                  </span>
                </div>

                {/* Central Engineered Architecture Pipeline */}
                <div className="my-5 relative p-4 sm:p-5 rounded-xl border border-emerald-200/90 bg-white shadow-sm overflow-hidden">
                  {/* Luminous Mint Glow Aura Background */}
                  <div 
                    className="pointer-events-none absolute -top-12 -right-12 w-56 h-56 rounded-full bg-emerald-400/12 blur-2xl" 
                    aria-hidden="true" 
                  />

                  {/* Visual Pipeline Nodes in High-Contrast Luxury Harmony */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-stretch">
                    
                    {/* Node 1: Smart Inbound AI */}
                    <div 
                      className="flex flex-col justify-between p-3.5 rounded-lg border border-emerald-200/80"
                      style={{ backgroundColor: "rgba(240, 253, 244, 0.65)" }}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-600 text-white shadow-2xs">
                            <Bot className="h-3.5 w-3.5" />
                          </span>
                          <span className="font-heading text-xs font-bold text-[#161B17]">
                            AI Assistant
                          </span>
                        </div>
                        <p className="text-[11px] text-[#4B5563] leading-relaxed">
                          Replies to WhatsApp & email in &lt;2s using verified business knowledge.
                        </p>
                      </div>
                      <div className="mt-3 flex items-center gap-1 font-mono text-[9px] text-emerald-700 font-bold">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>Instant Triage</span>
                      </div>
                    </div>

                    {/* Central Connector: Automated Workflow Engine (Deep Volcanic Slate) */}
                    <div 
                      className="flex flex-col justify-between p-3.5 rounded-lg border border-[#374151] shadow-md relative"
                      style={{ backgroundColor: "#161B17", color: "#FFFFFF" }}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-400 text-neutral-950 font-black shadow-sm">
                            <Workflow className="h-3.5 w-3.5" />
                          </span>
                          <span className="font-heading text-xs font-bold text-white tracking-wide">
                            Automated Core
                          </span>
                        </div>
                        <p className="text-[11px] text-[#D1D5DB] leading-relaxed">
                          Auto-creates invoices, syncs orders, and dispatches data seamlessly.
                        </p>
                      </div>
                      <div className="mt-3 flex items-center gap-1 font-mono text-[9px] text-emerald-400 font-bold">
                        <Zap className="h-3 w-3" />
                        <span>Zero Manual Re-Entry</span>
                      </div>
                    </div>

                    {/* Node 3: Custom Business Dashboard */}
                    <div 
                      className="flex flex-col justify-between p-3.5 rounded-lg border border-emerald-200/80"
                      style={{ backgroundColor: "rgba(240, 253, 244, 0.65)" }}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-600 text-white shadow-2xs">
                            <Database className="h-3.5 w-3.5" />
                          </span>
                          <span className="font-heading text-xs font-bold text-[#161B17]">
                            Live Dashboard
                          </span>
                        </div>
                        <p className="text-[11px] text-[#4B5563] leading-relaxed">
                          One clean dashboard for orders, revenue, and inventory with real-time sync.
                        </p>
                      </div>
                      <div className="mt-3 flex items-center gap-1 font-mono text-[9px] text-emerald-700 font-bold">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>Single Source of Truth</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Proof Metrics */}
                <div className="pt-3 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3 font-mono text-[11px]">
                  <div className="flex items-center gap-3 sm:gap-4 text-[#161B17]">
                    <span>
                      RESPONSE: <strong className="text-emerald-700">&lt;2 SECONDS</strong>
                    </span>
                    <span className="text-[var(--color-border)]">|</span>
                    <span>
                      ERRORS: <strong className="text-emerald-700">0.0%</strong>
                    </span>
                    <span className="text-[var(--color-border)] hidden sm:inline">|</span>
                    <span className="hidden sm:inline">
                      UPTIME: <strong className="text-emerald-700">99.9%</strong>
                    </span>
                  </div>

                  <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                    <span>Custom Built For You</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  </span>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
