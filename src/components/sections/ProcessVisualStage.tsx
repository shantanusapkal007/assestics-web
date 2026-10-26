"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { prefersReducedMotion } from "@/lib/motion/gsap";
import { 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  Search,
  FileCode,
  Gauge,
  Radio,
  Zap,
  Check
} from "lucide-react";

interface ProcessVisualStageProps {
  activeChapter: number; // 0, 1, 2
}

/* =========================================================================
   Chapter 01: THE WORKFLOW ANALYZER (Understand / Discovery)
   Simpler, ultra-premium, readable architecture console
   ========================================================================= */
function ForensicDiscoveryVisual() {
  const [selectedConstraint, setSelectedConstraint] = useState<number>(0);

  const constraints = [
    {
      id: "silos",
      tag: "AUDITED",
      title: "Slow Data Sync",
      desc: "Manual data transfer between spreadsheets takes 4+ hours every day.",
      impact: "Slows Down Daily Work",
      resolvedBy: "Automated Real-Time Sync",
    },
    {
      id: "manual",
      tag: "DIAGNOSED",
      title: "Manual Copy-Pasting",
      desc: "Staff manually re-entering orders and invoices across two different tools.",
      impact: "Frequent Human Errors",
      resolvedBy: "Direct System Integration",
    },
    {
      id: "drift",
      tag: "ISOLATED",
      title: "Scattered Inquiries",
      desc: "Customer questions lost across emails, WhatsApp, and forms with no tracking.",
      impact: "Delayed Customer Replies",
      resolvedBy: "Unified Customer Inbox",
    },
  ];

  const activeConstraint = constraints[selectedConstraint];

  return (
    <div className="product-demo w-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl select-none">
      {/* Top Console Telemetry Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
            STEP.01
          </span>
          <span className="font-mono text-xs font-bold tracking-widest text-[var(--color-brand-strong)] uppercase">
            AUDIT & PLAN // WORKFLOW ANALYSIS
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-[var(--color-text-tertiary)]">
          <Search className="h-3 w-3 text-[var(--color-brand-strong)]" />
          <span>3 BOTTLENECKS IDENTIFIED</span>
        </div>
      </div>

      {/* Main Interactive Dual Console */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch my-5">
        
        {/* Left Column: Discovered Constraints Stream */}
        <div className="md:col-span-6 flex flex-col gap-2.5">
          <span className="font-mono text-[9.5px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-1">
            IDENTIFIED BOTTLENECKS
          </span>
          {constraints.map((c, idx) => {
            const isSelected = selectedConstraint === idx;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedConstraint(idx)}
                className={`group flex flex-col p-3.5 rounded-xl border text-left transition-all duration-300 outline-none ${
                  isSelected
                    ? "border-[var(--color-brand-strong)] bg-[rgba(56,218,228,0.06)] shadow-xs"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-canvas-secondary)]/50"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-[10px] font-bold text-[var(--color-text-primary)]">
                    0{idx + 1} // {c.title}
                  </span>
                  <span
                    className={`font-mono text-[8.5px] font-bold px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-[var(--color-brand-strong)] text-white"
                        : "bg-[var(--color-canvas-secondary)] text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {c.tag}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-[var(--color-text-secondary)] leading-relaxed font-sans">
                  {c.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Center Animated Bridge Conduit */}
        <div className="hidden md:flex md:col-span-1 items-center justify-center">
          <div className="h-full flex flex-col items-center justify-center relative">
            <div className="w-[1px] h-full bg-[var(--color-border)]" />
            <motion.div
              animate={{ y: [-15, 15] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatType: "reverse" }}
              className="absolute p-1.5 rounded-[3px] bg-[var(--color-surface)] border border-[var(--color-brand-strong)] shadow-sm"
            >
              <ArrowRight className="h-3.5 w-3.5 text-[var(--color-brand-strong)]" />
            </motion.div>
          </div>
        </div>

        {/* Right Column: Solution Plan Specification */}
        <div className="md:col-span-5 flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-border)]">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9.5px] font-bold text-[var(--color-brand-strong)] uppercase tracking-wider">
                SOLUTION PLAN
              </span>
              <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded-[2px] bg-[#161B17] text-white border border-[#161B17]">
                FIXED SCOPE
              </span>
            </div>

            <h4 className="mt-2.5 font-heading text-lg font-bold text-[var(--color-text-primary)]">
              {activeConstraint.title}
            </h4>

            <div className="mt-3.5 pt-3 border-t border-[var(--color-border)] space-y-2.5">
              <div>
                <span className="block font-mono text-[8.5px] text-[var(--color-text-tertiary)] uppercase">
                  DAILY PROBLEM
                </span>
                <span className="block font-mono text-xs font-semibold text-rose-600 mt-0.5">
                  {activeConstraint.impact}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[8.5px] text-[var(--color-text-tertiary)] uppercase">
                  HOW WE SOLVE IT
                </span>
                <span className="block font-mono text-xs font-bold text-[var(--color-brand-contrast)] mt-0.5">
                  ✓ {activeConstraint.resolvedBy}
                </span>
              </div>
            </div>
          </div>

          {/* Blueprint Signature */}
          <div className="mt-4 pt-3.5 border-t border-[var(--color-border)] flex items-center justify-between">
            <span className="font-mono text-[9px] text-[var(--color-text-tertiary)]">
              MILESTONE: APPROVED
            </span>
            <div className="flex items-center gap-1.5 text-emerald-600 font-mono text-[9.5px] font-bold">
              <Check className="h-3 w-3" />
              <span>READY TO BUILD</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Live Coordinate Bar */}
      <div className="pt-3 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[var(--color-text-tertiary)]">
        <span>DELIVERABLE: CLEAR ACTION PLAN</span>
        <span className="text-[var(--color-brand-strong)] font-bold">CLEAR SCOPE // SHARED DECISIONS</span>
      </div>
    </div>
  );
}

/* =========================================================================
   Chapter 02: THE BUILD CONSOLE (Design & Build)
   Sleek 3-pillar engineering matrix with live code terminal & test status
   ========================================================================= */
function BuildSprintVisual() {
  const reduced = prefersReducedMotion();

  return (
    <div className="product-demo w-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl select-none">
      {/* Top Precision Coordinates Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
            STEP.02
          </span>
          <span className="font-mono text-xs font-bold tracking-widest text-[#6366F1] uppercase">
            DESIGN & BUILD // WEEKLY SPRINTS
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-[var(--color-text-tertiary)]">
          <Cpu className="h-3 w-3 text-[#6366F1]" />
          <span>WEEKLY DEMOS · TESTING BUILT IN</span>
        </div>
      </div>

      {/* 3 Modular Columns with Terminal Centerpiece */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch my-5">
        
        {/* Pillar 01: DESIGN (3 cols) */}
        <div className="lg:col-span-3 flex flex-col justify-between p-4 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-border)]">
          <div>
            <span className="font-mono text-[9.5px] font-bold text-[#6366F1] uppercase tracking-wider">
              01 // DESIGN
            </span>
            <h4 className="mt-1 font-heading text-base font-bold text-[var(--color-text-primary)]">
              Clean Interface
            </h4>
            <div className="mt-3 space-y-2 font-mono text-[10px] text-[var(--color-text-secondary)]">
              <div className="p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">
                Intuitive Layouts
              </div>
              <div className="p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">
                Mobile Responsive
              </div>
              <div className="p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">
                Fast Page Speeds
              </div>
            </div>
          </div>
          <div className="mt-4 pt-2.5 border-t border-[var(--color-border)] font-mono text-[9px] font-bold text-[#6366F1]">
            ✓ READY FOR REVIEW
          </div>
        </div>

        {/* Pillar 02: ACTIVE CODE TERMINAL (6 cols) with Relevo Verification Laser Sweep */}
        <div className="relative overflow-hidden lg:col-span-6 flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#161B17] border border-[#2D3748] text-[#E2E3DC] shadow-inner">
          {/* Relevo Craft Inspiration: Precision Laser Verification Sweep */}
          <div 
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38D8E4] to-transparent shadow-[0_0_12px_#38D8E4] animate-laser-sweep pointer-events-none z-20"
            aria-hidden="true"
          />

          <div>
            {/* Terminal Top Window Controls */}
            <div className="flex items-center justify-between pb-3 border-b border-[#2D3748]/60">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-[10px] text-[#38D8E4] font-bold tracking-widest">
                APP_BUILD.TS
              </span>
            </div>

            {/* Live Syntax-Highlighted Code Stream */}
            <div className="mt-3.5 space-y-1 font-mono text-[11px] leading-relaxed">
              <div className="text-gray-500">// Custom business application</div>
              <div>
                <span className="text-[#818CF8]">const</span>{" "}
                <span className="text-[#38D8E4]">application</span> ={" "}
                <span className="text-amber-300">createApp</span>(&#123;
              </div>
              <div className="pl-4 text-[#A7F3D0]">
                framework: <span className="text-emerald-400">&quot;Next.js 15&quot;</span>, tests: <span className="text-emerald-400">&quot;Passed&quot;</span>,
              </div>
              <div className="pl-4 text-[#A7F3D0]">
                weeklyDemo: <span className="text-rose-400">true</span>, speed: <span className="text-emerald-400">&quot;&lt;100ms&quot;</span>
              </div>
              <div>&#125;);</div>
              <div className="pt-2 text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>CHECKS RUN BEFORE REVIEW</span>
              </div>
            </div>
          </div>

          {/* Test Link Footer */}
          <div className="mt-4 pt-3 border-t border-[#2D3748]/60 flex items-center justify-between font-mono text-[9.5px]">
            <span className="text-gray-400">WEEKLY TEST LINK</span>
            <span className="text-[#38D8E4] font-bold">READY TO TRY LIVE</span>
          </div>
        </div>

        {/* Pillar 03: VERIFICATION (3 cols) */}
        <div className="lg:col-span-3 flex flex-col justify-between p-4 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-border)]">
          <div>
            <span className="font-mono text-[9.5px] font-bold text-emerald-600 uppercase tracking-wider">
              03 // PROGRESS
            </span>
            <h4 className="mt-1 font-heading text-base font-bold text-[var(--color-text-primary)]">
              Weekly Demos
            </h4>
            <div className="mt-3 space-y-2 font-mono text-[10px] text-[var(--color-text-secondary)]">
              <div className="p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">
                Tested with Real Data
              </div>
              <div className="p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">
                Direct Client Feedback
              </div>
              <div className="p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">
                No Surprise Changes
              </div>
            </div>
          </div>
          <div className="mt-4 pt-2.5 border-t border-[var(--color-border)] font-mono text-[9px] font-bold text-emerald-600">
            ✓ VERIFIED READY
          </div>
        </div>

      </div>

      {/* Bottom Status Coordinate */}
      <div className="pt-3 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[var(--color-text-tertiary)]">
        <span>STAGE: WEEKLY WORKING INCREMENTS</span>
        <span className="text-[#6366F1] font-bold">WEEKLY DEMOS // DIRECT DEVELOPER ACCESS</span>
      </div>
    </div>
  );
}

/* =========================================================================
   Chapter 03: LAUNCH & CARE COCKPIT (Launch & Support)
   Simpler, ultra-premium production status dashboard
   ========================================================================= */
function ProductionResilienceVisual() {
  const reduced = prefersReducedMotion();

  return (
    <div className="product-demo w-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl select-none">
      {/* Top Production Cluster Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
            STEP.03
          </span>
          <span className="font-mono text-xs font-bold tracking-widest text-emerald-600 uppercase">
            LIVE SYSTEM // ZERO-DOWNTIME LAUNCH & CARE
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] px-2.5 py-1 rounded-[2px] bg-[#161B17] text-white border border-[#161B17]">
          <ShieldCheck className="h-3 w-3 text-emerald-400" />
          <span>LAUNCH &amp; CARE PLAN</span>
        </div>
      </div>

      {/* Real-Time Telemetry Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-5">
        
        {/* Metric 01: 99.9% Uptime */}
        <div className="p-4 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-border)] flex flex-col justify-between">
          <span className="font-mono text-[9.5px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
            RELIABLE UPTIME
          </span>
          <div className="my-2">
            <span className="font-mono text-2xl sm:text-3xl font-black text-[var(--color-text-primary)] tracking-tight">
              Stable
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[9.5px] text-emerald-600 font-bold">
            <CheckCircle2 className="h-3 w-3" />
            <span>ZERO UNPLANNED OUTAGES</span>
          </div>
        </div>

        {/* Metric 02: Support Response */}
        <div className="p-4 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-border)] flex flex-col justify-between">
          <span className="font-mono text-[9.5px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
            SUPPORT RESPONSE
          </span>
          <div className="my-2">
            <span className="font-mono text-2xl sm:text-3xl font-black text-[var(--color-brand-strong)] tracking-tight">
              Direct
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[9.5px] text-[var(--color-brand-contrast)] font-bold">
            <Activity className="h-3 w-3" />
            <span>DIRECT DEVELOPER CONTACT</span>
          </div>
        </div>

        {/* Metric 03: Full Ownership */}
        <div className="p-4 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-border)] flex flex-col justify-between">
          <span className="font-mono text-[9.5px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
            CODE OWNERSHIP
          </span>
          <div className="my-2">
            <span className="font-mono text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">
              Your
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[9.5px] text-emerald-600 font-bold">
            <Zap className="h-3 w-3" />
            <span>FULL IP TRANSFERRED</span>
          </div>
        </div>

      </div>

      {/* Silky Smooth Real-Time Latency Sine Wave Monitor */}
      <div className="p-4 rounded-xl bg-[#161B17] border border-[#2D3748] text-[#E2E3DC] mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-widest">
            SYSTEM HEALTH // MONITORING PLAN
          </span>
          <span className="font-mono text-[9px] text-gray-400">
            ALL SERVICES RUNNING NORMALLY
          </span>
        </div>

        {/* Clean SVG Sinusoidal Smooth Area Wave */}
        <svg
          viewBox="0 0 600 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 overflow-visible"
        >
          <defs>
            <linearGradient id="waveFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area fill under curve */}
          <path
            d="M 0 45 C 50 45, 70 20, 110 20 C 150 20, 170 50, 210 50 C 250 50, 270 15, 310 15 C 350 15, 370 48, 410 48 C 450 48, 470 18, 510 18 C 550 18, 570 38, 600 38 L 600 64 L 0 64 Z"
            fill="url(#waveFillGrad)"
          />

          {/* Stroke Line */}
          <path
            d="M 0 45 C 50 45, 70 20, 110 20 C 150 20, 170 50, 210 50 C 250 50, 270 15, 310 15 C 350 15, 370 48, 410 48 C 450 48, 470 18, 510 18 C 550 18, 570 38, 600 38"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Real-Time Pulse Marker Bead */}
          <circle cx="310" cy="15" r="4.5" fill="#34D399" />
          <circle cx="310" cy="15" r="8" fill="#34D399" opacity="0.3" className="animate-ping" />
        </svg>
      </div>

      {/* 3 Sentinels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-2 font-mono text-[9.5px]">
        <div className="p-2.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center gap-2">
          <span className="font-mono text-emerald-600 font-bold shrink-0">+</span>
          <span className="text-[var(--color-text-secondary)]">
            <strong className="text-[var(--color-text-primary)]">Team Training:</strong> Video guides & onboarding
          </span>
        </div>
        <div className="p-2.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center gap-2">
          <span className="font-mono text-[var(--color-brand-strong)] font-bold shrink-0">+</span>
          <span className="text-[var(--color-text-secondary)]">
            <strong className="text-[var(--color-text-primary)]">Daily Backups:</strong> Automated data safety
          </span>
        </div>
        <div className="p-2.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center gap-2">
          <span className="font-mono text-emerald-600 font-bold shrink-0">+</span>
          <span className="text-[var(--color-text-secondary)]">
            <strong className="text-[var(--color-text-primary)]">Continuous Care:</strong> Security updates & fixes
          </span>
        </div>
      </div>

      {/* Bottom Live Coordinate Bar */}
      <div className="pt-3 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[var(--color-text-tertiary)]">
            <span>STATUS: LAUNCH CHECKLIST &amp; TEAM HANDOVER</span>
        <span className="text-emerald-600 font-bold">ONBOARDING, MONITORING &amp; CARE</span>
      </div>
    </div>
  );
}

/* =========================================================================
   ProcessVisualStage: Clean, Premium, High-Aesthetic Interactive Stage
   ========================================================================= */
export function ProcessVisualStage({ activeChapter }: ProcessVisualStageProps) {
  return (
    <div className="relative flex flex-col justify-between w-full select-none">
      <AnimatePresence mode="wait">
        {activeChapter === 0 && (
          <motion.div
            key="chapter-01"
            initial={{ opacity: 0, scale: 0.98, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.01, y: -6 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <ForensicDiscoveryVisual />
          </motion.div>
        )}

        {activeChapter === 1 && (
          <motion.div
            key="chapter-02"
            initial={{ opacity: 0, scale: 0.98, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.01, y: -6 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <BuildSprintVisual />
          </motion.div>
        )}

        {activeChapter === 2 && (
          <motion.div
            key="chapter-03"
            initial={{ opacity: 0, scale: 0.98, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.01, y: -6 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <ProductionResilienceVisual />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
