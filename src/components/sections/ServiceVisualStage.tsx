"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ServiceVisualStageProps {
  activeId: string;
}

const SERVICE_META: Record<
  string,
  {
    explanation: string;
    href: string;
    linkText: string;
  }
> = {
  "ai-automation": {
    explanation:
      "Incoming requests are parsed by autonomous agents, cross-referenced with your verified knowledge base, and resolved through automated API actions with zero manual data entry.",
    href: "/services/ai-automation",
    linkText: "Explore AI & Automation capabilities",
  },
  "software-engineering": {
    explanation:
      "We translate operational logic into clean, responsive web platforms and bespoke applications engineered with modular component hierarchies, edge caching, and typed APIs.",
    href: "/services/software-engineering",
    linkText: "Explore Software Engineering capabilities",
  },
  "cloud-devops": {
    explanation:
      "Automated CI/CD pipelines build immutable container images, run security scans, and execute zero-downtime canary deployments backed by automated health checks and rollbacks.",
    href: "/services/cloud-devops",
    linkText: "Explore Cloud & DevOps capabilities",
  },
  "business-systems": {
    explanation:
      "We eliminate disconnected departmental silos by synchronizing shopfloor execution, warehouse inventory, freight logistics, and financial reporting into one coherent transaction ledger.",
    href: "/services/business-systems",
    linkText: "Explore Business Systems & Supply Chain",
  },
};

export function ServiceVisualStage({ activeId }: ServiceVisualStageProps) {
  const currentMeta = SERVICE_META[activeId] || SERVICE_META["ai-automation"];

  return (
    <div className="relative flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10 shadow-xs transition-all duration-300 min-h-[500px]">
      {/* Visual Canvas Area */}
      <div className="relative flex-1 flex items-center justify-center w-full min-h-[340px]">
        <AnimatePresence mode="wait">
          {/* =========================================================================
              01 — AI & Business Automation: Request -> Processing -> Meaningful Action
             ========================================================================= */}
          {activeId === "ai-automation" && (
            <motion.div
              key="ai-automation"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex items-center justify-center"
            >
              <svg
                viewBox="0 0 680 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-h-[340px] select-none"
                aria-label="AI and Automation Workflow Diagram"
              >
                <defs>
                  <linearGradient id="aiPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38D8E4" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#38D8E4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0891B2" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Main Connecting Pathway */}
                <path
                  d="M 60 170 C 140 170, 160 170, 240 170"
                  stroke="#38D8E4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Branching decision paths */}
                <path
                  d="M 240 170 C 300 170, 320 80, 420 80"
                  stroke="#E2E3DC"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 240 170 C 300 170, 320 170, 420 170"
                  stroke="url(#aiPulseGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 240 170 C 300 170, 320 260, 420 260"
                  stroke="#E2E3DC"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Converging into Output */}
                <path
                  d="M 420 80 C 490 80, 520 170, 580 170"
                  stroke="#E2E3DC"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 420 170 L 580 170"
                  stroke="#38D8E4"
                  strokeWidth="2.5"
                />
                <path
                  d="M 420 260 C 490 260, 520 170, 580 170"
                  stroke="#E2E3DC"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Node 1: Incoming Request */}
                <g transform="translate(60, 170)">
                  <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="6" fill="#38D8E4" />
                  <text x="0" y="48" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#202722]">
                    USER INQUIRY
                  </text>
                  <text x="0" y="62" textAnchor="middle" className="font-mono text-[9px] fill-[#687069]">
                    WhatsApp · Web · Email
                  </text>
                </g>

                {/* Node 2: Multi-Agent Reasoning Core */}
                <g transform="translate(240, 170)">
                  <circle cx="0" cy="0" r="28" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2" />
                  <circle cx="0" cy="0" r="12" fill="#0891B2" opacity="0.2" />
                  <circle cx="0" cy="0" r="5" fill="#0891B2" />
                  <text x="0" y="-36" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#0891B2]">
                    AGENT REASONING
                  </text>
                </g>

                {/* Branch Nodes */}
                <g transform="translate(420, 80)">
                  <rect x="-60" y="-18" width="120" height="36" rx="6" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1" />
                  <text x="0" y="4" textAnchor="middle" className="font-mono text-[10px] font-semibold fill-[#202722]">
                    RAG Knowledge Base
                  </text>
                </g>

                <g transform="translate(420, 170)">
                  <rect x="-64" y="-22" width="128" height="44" rx="8" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2" />
                  <circle cx="-44" cy="0" r="4" fill="#38D8E4" />
                  <text x="8" y="4" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#202722]">
                    Decision Policy
                  </text>
                </g>

                <g transform="translate(420, 260)">
                  <rect x="-60" y="-18" width="120" height="36" rx="6" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1" />
                  <text x="0" y="4" textAnchor="middle" className="font-mono text-[10px] font-semibold fill-[#202722]">
                    Human Escalation
                  </text>
                </g>

                {/* Node 3: Meaningful Resolved Action */}
                <g transform="translate(580, 170)">
                  <rect x="-44" y="-28" width="88" height="56" rx="12" fill="#202722" />
                  <text x="0" y="-4" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#FFFFFF]">
                    RESOLVED
                  </text>
                  <text x="0" y="12" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#38D8E4]">
                    ACTION TAKEN
                  </text>
                </g>

                {/* Continuous Pulse Indicator */}
                <circle r="4" fill="#38D8E4">
                  <animateMotion
                    path="M 60 170 C 140 170, 160 170, 240 170 C 300 170, 320 170, 420 170 L 580 170"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </motion.div>
          )}

          {/* =========================================================================
              02 — Software & Digital Products: Structured Blueprint to Product UI
             ========================================================================= */}
          {activeId === "software-engineering" && (
            <motion.div
              key="software-engineering"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex items-center justify-center"
            >
              <svg
                viewBox="0 0 680 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-h-[340px] select-none"
                aria-label="Software Architecture and Component Layout"
              >
                {/* Outer Application Viewport Canvas */}
                <rect x="40" y="25" width="600" height="290" rx="12" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
                <line x1="40" y1="65" x2="640" y2="65" stroke="#E2E3DC" strokeWidth="1" />

                {/* Top Control Dots & URL breadcrumb */}
                <circle cx="68" cy="45" r="4" fill="#E2E3DC" />
                <circle cx="82" cy="45" r="4" fill="#E2E3DC" />
                <circle cx="96" cy="45" r="4" fill="#E2E3DC" />
                <rect x="120" y="38" width="180" height="14" rx="4" fill="#F3F2ED" />

                {/* Left Structural Rail */}
                <rect x="60" y="85" width="130" height="210" rx="8" fill="#F3F2ED" stroke="#E2E3DC" strokeWidth="1" />
                <rect x="76" y="105" width="80" height="10" rx="3" fill="#38D8E4" opacity="0.8" />
                <rect x="76" y="127" width="98" height="8" rx="2" fill="#E2E3DC" />
                <rect x="76" y="145" width="85" height="8" rx="2" fill="#E2E3DC" />
                <rect x="76" y="163" width="92" height="8" rx="2" fill="#E2E3DC" />

                {/* Main Content Area — Header Banner */}
                <rect x="210" y="85" width="410" height="65" rx="8" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="1.5" />
                <text x="230" y="115" className="font-heading text-[12px] font-bold fill-[#202722]">
                  SYSTEM METRICS · EDGE RUNTIME
                </text>
                <text x="230" y="132" className="font-mono text-[10px] fill-[#687069]">
                  React 19 Server Components · Sub-second SSR
                </text>

                {/* Component Grid Blocks */}
                <rect x="210" y="165" width="195" height="130" rx="8" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1" />
                <text x="228" y="195" className="font-mono text-[10px] font-bold fill-[#202722]">
                  DATA FLOW
                </text>
                <path d="M 230 255 L 280 220 L 330 240 L 385 205" stroke="#38D8E4" strokeWidth="2.5" fill="none" />

                <rect x="425" y="165" width="195" height="130" rx="8" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1" />
                <text x="443" y="195" className="font-mono text-[10px] font-bold fill-[#202722]">
                  API MESH
                </text>
                <circle cx="522" cy="245" r="32" stroke="#0891B2" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                <circle cx="522" cy="245" r="8" fill="#38D8E4" />
              </svg>
            </motion.div>
          )}

          {/* =========================================================================
              03 — Cloud & DevOps Engineering: Build -> Validate -> Deploy -> Monitor
             ========================================================================= */}
          {activeId === "cloud-devops" && (
            <motion.div
              key="cloud-devops"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex items-center justify-center"
            >
              <svg
                viewBox="0 0 680 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-h-[340px] select-none"
                aria-label="Automated Software Delivery Pipeline"
              >
                {/* Horizontal Delivery Conduits */}
                <line x1="80" y1="170" x2="600" y2="170" stroke="#E2E3DC" strokeWidth="3" />
                <line x1="80" y1="170" x2="480" y2="170" stroke="#38D8E4" strokeWidth="3" />

                {/* Stage 1: Build */}
                <g transform="translate(100, 170)">
                  <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2" />
                  <text x="0" y="-4" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#202722]">
                    BUILD
                  </text>
                  <text x="0" y="12" textAnchor="middle" className="font-mono text-[9px] fill-[#0891B2]">
                    Docker
                  </text>
                  <text x="0" y="52" textAnchor="middle" className="font-mono text-[10px] font-semibold fill-[#687069]">
                    01 // COMPILE
                  </text>
                </g>

                {/* Stage 2: Validate */}
                <g transform="translate(250, 170)">
                  <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2" />
                  <text x="0" y="-4" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#202722]">
                    AUDIT
                  </text>
                  <text x="0" y="12" textAnchor="middle" className="font-mono text-[9px] fill-[#0891B2]">
                    Security
                  </text>
                  <text x="0" y="52" textAnchor="middle" className="font-mono text-[10px] font-semibold fill-[#687069]">
                    02 // VERIFY
                  </text>
                </g>

                {/* Stage 3: Canary Deploy */}
                <g transform="translate(410, 170)">
                  <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#0891B2" strokeWidth="2.5" />
                  <text x="0" y="-4" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#202722]">
                    CANARY
                  </text>
                  <text x="0" y="12" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#0891B2]">
                    Zero Downtime
                  </text>
                  <text x="0" y="52" textAnchor="middle" className="font-mono text-[10px] font-semibold fill-[#687069]">
                    03 // DEPLOY
                  </text>
                </g>

                {/* Stage 4: Monitor */}
                <g transform="translate(570, 170)">
                  <circle cx="0" cy="0" r="34" fill="#202722" stroke="#38D8E4" strokeWidth="2" />
                  <text x="0" y="-4" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#FFFFFF]">
                    LIVE
                  </text>
                  <text x="0" y="12" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#38D8E4]">
                    Telemetry
                  </text>
                  <text x="0" y="52" textAnchor="middle" className="font-mono text-[10px] font-semibold fill-[#202722]">
                    04 // OBSERVE
                  </text>
                </g>

                {/* Traveling Delivery Marker */}
                <circle r="6" fill="#38D8E4">
                  <animateMotion path="M 100 170 L 570 170" dur="3.5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </motion.div>
          )}

          {/* =========================================================================
              04 — Business Systems & Supply Chain: Connected Operational Mesh
             ========================================================================= */}
          {activeId === "business-systems" && (
            <motion.div
              key="business-systems"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex items-center justify-center"
            >
              <svg
                viewBox="0 0 680 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-h-[340px] select-none"
                aria-label="Connected Business Systems and Operations Mesh"
              >
                {/* Structural Mesh Conduits */}
                <line x1="140" y1="90" x2="340" y2="170" stroke="#38D8E4" strokeWidth="2" />
                <line x1="140" y1="250" x2="340" y2="170" stroke="#38D8E4" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="340" y1="170" x2="540" y2="90" stroke="#38D8E4" strokeWidth="2" />
                <line x1="340" y1="170" x2="540" y2="250" stroke="#0891B2" strokeWidth="2" />

                {/* Central ERP Ledger */}
                <g transform="translate(340, 170)">
                  <circle cx="0" cy="0" r="44" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2.5" />
                  <circle cx="0" cy="0" r="54" stroke="#E2E3DC" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="0" y="-6" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#202722]">
                    CENTRAL
                  </text>
                  <text x="0" y="10" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#0891B2]">
                    ERP LEDGER
                  </text>
                </g>

                {/* Node 1: Inventory */}
                <g transform="translate(140, 90)">
                  <rect x="-60" y="-24" width="120" height="48" rx="10" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
                  <circle cx="-40" cy="0" r="4" fill="#38D8E4" />
                  <text x="6" y="4" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#202722]">
                    INVENTORY
                  </text>
                  <text x="0" y="40" textAnchor="middle" className="font-mono text-[9px] fill-[#687069]">
                    Raw Materials &amp; Parts
                  </text>
                </g>

                {/* Node 2: Production */}
                <g transform="translate(140, 250)">
                  <rect x="-60" y="-24" width="120" height="48" rx="10" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
                  <circle cx="-40" cy="0" r="4" fill="#687069" />
                  <text x="6" y="4" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#202722]">
                    PRODUCTION
                  </text>
                  <text x="0" y="40" textAnchor="middle" className="font-mono text-[9px] fill-[#687069]">
                    Shopfloor Machines
                  </text>
                </g>

                {/* Node 3: Logistics */}
                <g transform="translate(540, 90)">
                  <rect x="-60" y="-24" width="120" height="48" rx="10" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
                  <circle cx="-40" cy="0" r="4" fill="#38D8E4" />
                  <text x="6" y="4" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#202722]">
                    LOGISTICS
                  </text>
                  <text x="0" y="40" textAnchor="middle" className="font-mono text-[9px] fill-[#687069]">
                    Global Transit &amp; Freight
                  </text>
                </g>

                {/* Node 4: Finance */}
                <g transform="translate(540, 250)">
                  <rect x="-60" y="-24" width="120" height="48" rx="10" fill="#FFFFFF" stroke="#0891B2" strokeWidth="2" />
                  <circle cx="-40" cy="0" r="4" fill="#0891B2" />
                  <text x="6" y="4" textAnchor="middle" className="font-mono text-[11px] font-bold fill-[#0891B2]">
                    FINANCE
                  </text>
                  <text x="0" y="40" textAnchor="middle" className="font-mono text-[9px] fill-[#687069]">
                    Invoices &amp; Margin
                  </text>
                </g>

                {/* Alternating Route Pulse Animation */}
                <circle r="5" fill="#38D8E4">
                  <animateMotion path="M 140 90 L 340 170 L 540 90" dur="3.6s" repeatCount="indefinite" />
                </circle>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Editorial Statement & Deep Dive Link */}
      <div className="mt-8 border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] max-w-xl">
          {currentMeta.explanation}
        </p>

        <Link
          href={currentMeta.href}
          className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-[var(--color-brand-strong)] hover:text-[var(--color-brand-primary)] whitespace-nowrap"
        >
          <span>{currentMeta.linkText}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
