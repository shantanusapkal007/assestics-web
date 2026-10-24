"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bot, 
  Database, 
  Workflow, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Zap,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet
} from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion/gsap";

export type SpecimenTab = "ai" | "software" | "automation";

export function HeroSystemsSpecimen() {
  const [activeTab, setActiveTab] = useState<SpecimenTab>("ai");
  const reduced = prefersReducedMotion();

  return (
    <div className="relative w-full select-none py-2 lg:py-4">
      {/* Abstract Blueprint Registration Frame */}
      <div 
        className="pointer-events-none absolute -inset-3 sm:-inset-4 rounded-3xl border border-[var(--color-border)]/50 bg-[var(--color-surface-muted)]/15 -z-10 hidden sm:block"
        aria-hidden="true"
      />

      {/* Luxury Chassis with Tactile Milled Emboss & Zero Clutter */}
      <div className="tactile-emboss relative rounded-2xl border border-[var(--color-border-strong)] bg-white shadow-[0_24px_50px_-15px_rgba(22,27,23,0.08)] overflow-hidden">
        
        {/* Top Studio Browser Bar (Refined & Minimalist) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-[var(--color-border)] px-3 sm:px-6 py-2.5 sm:py-3 bg-[#FAF9F6]">
          {/* Left: Window Pips + Active Workspace URL */}
          <div className="flex items-center justify-between sm:justify-start gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-[#D1D5DB]" />
              <span className="h-2 w-2 rounded-full bg-[#D1D5DB]" />
              <span className="h-2 w-2 rounded-full bg-[#D1D5DB]" />
            </div>
            <div className="flex items-center gap-2 border-l border-[var(--color-border)]/80 pl-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[10.5px] font-bold text-[#161B17] tracking-wider uppercase">
                ASSESTICS PLATFORM
              </span>
              <span className="font-mono text-[9px] text-[#8E968F] hidden sm:inline">
                // v2.4 LIVE
              </span>
            </div>
          </div>

          {/* Right: Tactile Segmented Pill Switcher (Full Width on Mobile) */}
          <div className="relative grid grid-cols-3 p-1 rounded-full bg-[#EAE9E2]/70 border border-[#D5D7CE] w-full sm:w-auto">
            {[
              { id: "ai", shortLabel: "AI", fullLabel: "01 AI AGENTS", icon: Bot },
              { id: "software", shortLabel: "APPS", fullLabel: "02 WEB APPS", icon: Layers },
              { id: "automation", shortLabel: "FLOWS", fullLabel: "03 WORKFLOWS", icon: Workflow },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as SpecimenTab)}
                  className={`relative z-10 flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-full font-mono text-[9.5px] sm:text-[10px] font-bold transition-colors duration-200 ${
                    isActive
                      ? "text-[#161B17]"
                      : "text-[#687069] hover:text-[#161B17]"
                  }`}
                >
                  <Icon className={`h-3 w-3 shrink-0 ${isActive ? "text-emerald-700" : "opacity-50"}`} />
                  <span className="sm:hidden">{tab.shortLabel}</span>
                  <span className="hidden sm:inline">{tab.fullLabel}</span>
                </button>
              );
            })}

            {/* Sliding Pill Indicator */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 450, damping: 35 }}
              className={`absolute top-1 bottom-1 rounded-full bg-white shadow-sm border border-emerald-300/80 ${
                activeTab === "ai"
                  ? "left-1 w-[calc(33.33%-2px)]"
                  : activeTab === "software"
                  ? "left-[calc(33.33%+1px)] w-[calc(33.33%-2px)]"
                  : "left-[calc(66.66%+1px)] w-[calc(33.33%-2px)]"
              }`}
            />
          </div>
        </div>

        {/* Specimen Viewport: Demonstrates Authentic Digital Systems */}
        <div className="relative min-h-[360px] sm:min-h-[395px] p-3.5 sm:p-6 bg-gradient-to-b from-white via-[#FCFBF8] to-[#FAF9F6] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* =================================================================
               VIEW 01: AI CUSTOMER & OPERATIONS ASSISTANT
               Demonstrates instant lead capture and automated knowledge replies
               ================================================================= */}
            {activeTab === "ai" && (
              <motion.div
                key="ai"
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between h-full space-y-4"
              >
                {/* Header Summary */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--color-border)]">
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#161B17]">
                      Smart Customer & Operations Assistant
                    </h3>
                    <p className="text-xs text-[#687069] mt-0.5">
                      Understands questions from WhatsApp & Email, checks your documents, and responds in seconds.
                    </p>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
                    AVG REPLY: 1.8s
                  </span>
                </div>

                {/* Live Activity Simulation Stream */}
                <div className="space-y-2.5 my-2">
                  {/* Event 1: Inbound Lead */}
                  <div className="p-3 rounded-xl border border-[var(--color-border)] bg-white shadow-2xs flex items-start gap-3">
                    <span 
                      className="flex h-7 w-7 items-center justify-center rounded-lg shrink-0 mt-0.5"
                      style={{ backgroundColor: "#ECFDF5", color: "#047857" }}
                    >
                      <Bot className="h-4 w-4" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] font-bold text-[#161B17] truncate">
                          WhatsApp Inquiry · Client #4910
                        </span>
                        <span className="font-mono text-[9px] text-[#8E968F] shrink-0">
                          Just now
                        </span>
                      </div>
                      <p className="text-xs text-[#4B5563] mt-0.5 leading-snug">
                        &quot;Do you have stock for custom software integration and what is the weekly turnaround?&quot;
                      </p>
                    </div>
                  </div>

                  {/* Event 2: Autonomous AI Resolution */}
                  <div className="p-3 rounded-xl border border-emerald-200/90 bg-[#F0FDF4]/50 shadow-2xs flex items-start gap-3 ml-2 sm:ml-5">
                    <span 
                      className="flex h-7 w-7 items-center justify-center rounded-lg shrink-0 mt-0.5 shadow-xs"
                      style={{ backgroundColor: "#059669", color: "#FFFFFF" }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] font-bold text-emerald-900 truncate">
                          Automated Reply Sent & Scheduled
                        </span>
                        <span className="font-mono text-[9px] font-bold text-emerald-700 bg-white px-1.5 py-0.2 rounded border border-emerald-200 shrink-0">
                          100% ACCURATE
                        </span>
                      </div>
                      <p className="text-xs text-[#374151] mt-0.5 leading-snug">
                        Checked project capacity, sent pricing spec sheet, and created meeting link in calendar.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Telemetry Metric Bar */}
                <div className="pt-2.5 sm:pt-3 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 font-mono text-[9.5px] sm:text-[10.5px]">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#161B17]">
                    <span>STATUS: <strong className="text-emerald-700">24/7 ACTIVE</strong></span>
                    <span className="text-[var(--color-border)] hidden sm:inline">|</span>
                    <span>HUMAN ATTENTION: <strong className="text-[#161B17]">ONLY ON EXCEPTIONS</strong></span>
                  </div>
                  <span className="text-emerald-800 font-bold flex items-center gap-1">
                    <Zap className="h-3 w-3 text-emerald-600" />
                    <span>0 Unanswered Messages</span>
                  </span>
                </div>
              </motion.div>
            )}

            {/* =================================================================
               VIEW 02: CUSTOM DIGITAL PRODUCT / CLIENT PORTAL
               Demonstrates bespoke, fast web applications crafted for operations
               ================================================================= */}
            {activeTab === "software" && (
              <motion.div
                key="software"
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between h-full space-y-4"
              >
                {/* Header Summary */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--color-border)]">
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#161B17]">
                      Custom Business Applications & Portals
                    </h3>
                    <p className="text-xs text-[#687069] mt-0.5">
                      Tailor-made software built around your exact workflow. Lightning-fast, secure, and intuitive.
                    </p>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#161B17] bg-[#F3F4F6] px-2.5 py-1 rounded-md border border-[var(--color-border)] shrink-0">
                    LATENCY: &lt;80ms
                  </span>
                </div>

                {/* Application Dashboard Interface Preview */}
                <div className="p-3 sm:p-3.5 rounded-xl border border-[var(--color-border)] bg-white shadow-2xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100 font-mono text-[10px]">
                    <span className="text-[#687069] font-bold">CLIENT DASHBOARD // LIVE METRICS</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +42% OPERATIONAL SPEED
                    </span>
                  </div>

                  {/* 3 Metric Tiles */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E2E4DC]">
                      <div className="text-[8px] sm:text-[10px] font-mono text-[#8E968F] uppercase truncate">Orders</div>
                      <div className="font-mono text-xs sm:text-base font-bold text-[#161B17] mt-0.5">1,480</div>
                      <div className="text-[7.5px] sm:text-[9px] font-mono text-emerald-700 font-semibold mt-0.5 truncate">✓ Auto-invoiced</div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E2E4DC]">
                      <div className="text-[8px] sm:text-[10px] font-mono text-[#8E968F] uppercase truncate">Users</div>
                      <div className="font-mono text-xs sm:text-base font-bold text-[#161B17] mt-0.5">24 Staff</div>
                      <div className="text-[7.5px] sm:text-[9px] font-mono text-[#161B17] font-semibold mt-0.5 truncate">Role-based</div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E2E4DC]">
                      <div className="text-[8px] sm:text-[10px] font-mono text-[#8E968F] uppercase truncate">Uptime</div>
                      <div className="font-mono text-xs sm:text-base font-bold text-emerald-700 mt-0.5">99.99%</div>
                      <div className="text-[7.5px] sm:text-[9px] font-mono text-emerald-700 font-semibold mt-0.5 truncate">Zero Downtime</div>
                    </div>
                  </div>
                </div>

                {/* Telemetry Metric Bar */}
                <div className="pt-2.5 sm:pt-3 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 font-mono text-[9.5px] sm:text-[10.5px]">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#161B17]">
                    <span>STACK: <strong className="text-[#161B17]">NEXT.JS · TYPESCRIPT · CLOUD</strong></span>
                    <span className="text-[var(--color-border)] hidden sm:inline">|</span>
                    <span>OWNERSHIP: <strong className="text-emerald-700">100% YOUR CODE</strong></span>
                  </div>
                  <span className="text-[#161B17] font-bold">No Per-Seat Licensing Fees</span>
                </div>
              </motion.div>
            )}

            {/* =================================================================
               VIEW 03: CONNECTED WORKFLOWS & AUTOMATIC SYNC
               Demonstrates replacing 14 messy spreadsheets with a live unified core
               ================================================================= */}
            {activeTab === "automation" && (
              <motion.div
                key="automation"
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between h-full space-y-4"
              >
                {/* Header Summary */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--color-border)]">
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#161B17]">
                      Real-Time System & Spreadsheet Sync
                    </h3>
                    <p className="text-xs text-[#687069] mt-0.5">
                      Connects messy Excel sheets, order forms, and internal databases into one single source of truth.
                    </p>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
                    ERRORS: 0.0%
                  </span>
                </div>

                {/* Architecture Pipeline Visualization */}
                <div className="p-3 sm:p-3.5 rounded-xl border border-[var(--color-border)] bg-white shadow-2xs">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100 font-mono text-[10px] text-[#687069]">
                    <span>DATA FLOW ARCHITECTURE</span>
                    <span className="text-emerald-700 font-bold">AUTOMATIC BACKGROUND SYNC</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3 items-center">
                    <div className="p-2.5 rounded-lg border border-[#E2E4DC] bg-[#FAF9F6]">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#161B17]">
                        <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-700" />
                        <span>01 Input Channels</span>
                      </div>
                      <div className="text-[11px] text-[#687069] mt-1">
                        Web forms, WhatsApp orders, incoming supplier spreadsheets.
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg border border-[#374151] bg-[#161B17] text-white">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-emerald-400">
                        <Workflow className="h-3.5 w-3.5" />
                        <span>02 Assestics Engine</span>
                      </div>
                      <div className="text-[11px] text-[#D1D5DB] mt-1">
                        Validates data, checks rules, and formats records instantly.
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg border border-[#E2E4DC] bg-[#FAF9F6]">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#161B17]">
                        <Database className="h-3.5 w-3.5 text-emerald-700" />
                        <span>03 Unified Output</span>
                      </div>
                      <div className="text-[11px] text-[#687069] mt-1">
                        ERP, accounting, live inventory, and team dashboards updated.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Telemetry Metric Bar */}
                <div className="pt-2.5 sm:pt-3 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 font-mono text-[9.5px] sm:text-[10.5px]">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#161B17]">
                    <span>REDUNDANCY: <strong className="text-emerald-700">0 DUPLICATE ENTRIES</strong></span>
                    <span className="text-[var(--color-border)] hidden sm:inline">|</span>
                    <span>TIME SAVED: <strong className="text-[#161B17]">4+ HOURS DAILY</strong></span>
                  </div>
                  <span className="text-emerald-800 font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Real-Time Sync</span>
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
