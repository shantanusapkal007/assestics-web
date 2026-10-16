"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceVisualStageProps {
  activeId: string;
}

export function ServiceVisualStage({ activeId }: ServiceVisualStageProps) {
  return (
    <div className="relative min-h-[420px] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
      {/* Top Status Header */}
      <div className="mb-4 flex items-center justify-between border-b border-[var(--color-border)] pb-3">
        <span className="font-mono text-xs font-semibold tracking-wider text-[var(--color-brand-strong)] uppercase">
          SYSTEM VISUALIZER · MODE: {activeId.toUpperCase().replace("-", " ")}
        </span>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
          <span className="font-mono text-[11px] text-[var(--color-text-tertiary)]">LIVE SIMULATION</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* =========================================================================
            MODE 1: AI & Business Automation — Branching Request to Autonomous Output
           ========================================================================= */}
        {activeId === "ai-automation" && (
          <motion.div
            key="ai-automation"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex h-full w-full flex-col justify-center"
          >
            <svg viewBox="0 0 540 320" fill="none" className="h-auto w-full select-none">
              {/* Entrance Node */}
              <rect x="20" y="130" width="80" height="40" rx="8" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
              <text x="60" y="154" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#202722]">USER QUERY</text>

              {/* Branching Paths */}
              <path d="M 100 150 C 160 150, 180 60, 240 60" stroke="#38D8E4" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 100 150 C 160 150, 180 150, 240 150" stroke="#38D8E4" strokeWidth="2" />
              <path d="M 100 150 C 160 150, 180 240, 240 240" stroke="#38D8E4" strokeWidth="2" strokeDasharray="4 4" />

              {/* Multi-Agent Reasoning Nodes */}
              <g transform="translate(240, 40)">
                <rect width="110" height="40" rx="8" fill="#FFFFFF" stroke="#0891B2" strokeWidth="1.5" />
                <text x="55" y="24" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#0891B2]">RAG DOC RETRIEVAL</text>
              </g>

              <g transform="translate(240, 130)">
                <rect width="110" height="40" rx="8" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2" />
                <text x="55" y="24" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#202722]">AGENT REASONING</text>
              </g>

              <g transform="translate(240, 220)">
                <rect width="110" height="40" rx="8" fill="#FFFFFF" stroke="#0891B2" strokeWidth="1.5" />
                <text x="55" y="24" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#0891B2]">POLICY CHECK</text>
              </g>

              {/* Converging Paths */}
              <path d="M 350 60 C 400 60, 410 150, 450 150" stroke="#0891B2" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 350 150 L 450 150" stroke="#38D8E4" strokeWidth="2.5" />
              <path d="M 350 240 C 400 240, 410 150, 450 150" stroke="#0891B2" strokeWidth="2" strokeDasharray="4 4" />

              {/* Output Resolved Node */}
              <g transform="translate(450, 126)">
                <rect width="80" height="48" rx="10" fill="#202722" />
                <text x="40" y="24" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#FFFFFF]">ACTION</text>
                <text x="40" y="38" textAnchor="middle" className="font-mono text-[8px] fill-[#38D8E4]">DISPATCHED</text>
              </g>

              {/* Continuous Traveling Pulse */}
              <circle r="4" fill="#38D8E4">
                <animateMotion path="M 100 150 C 160 150, 180 150, 240 150 L 350 150 L 450 150" dur="2.4s" repeatCount="indefinite" />
              </circle>
            </svg>
            <div className="mt-4 rounded-lg bg-[var(--color-surface-muted)] p-3 text-xs text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-text-primary)]">Branching Automation:</strong> Real-time intent classification dynamically selects RAG documentation, executes verification logic, and performs autonomous task completion.
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            MODE 2: Software Engineering — Wireframe Blueprint Resolving into UI
           ========================================================================= */}
        {activeId === "software-engineering" && (
          <motion.div
            key="software-engineering"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex h-full w-full flex-col justify-center"
          >
            <svg viewBox="0 0 540 320" fill="none" className="h-auto w-full select-none">
              {/* Outer Browser/App Window */}
              <rect x="20" y="20" width="500" height="270" rx="12" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
              <line x1="20" y1="56" x2="520" y2="56" stroke="#E2E3DC" strokeWidth="1" />
              <circle cx="44" cy="38" r="4" fill="#E2E3DC" />
              <circle cx="58" cy="38" r="4" fill="#E2E3DC" />
              <circle cx="72" cy="38" r="4" fill="#E2E3DC" />
              <rect x="100" y="32" width="220" height="14" rx="4" fill="#F3F2ED" />

              {/* Sidebar Component */}
              <rect x="36" y="72" width="100" height="200" rx="8" fill="#F3F2ED" stroke="#E2E3DC" strokeWidth="1" />
              <rect x="50" y="90" width="72" height="10" rx="3" fill="#38D8E4" opacity="0.6" />
              <rect x="50" y="112" width="60" height="8" rx="2" fill="#E2E3DC" />
              <rect x="50" y="128" width="55" height="8" rx="2" fill="#E2E3DC" />
              <rect x="50" y="144" width="68" height="8" rx="2" fill="#E2E3DC" />

              {/* Main Content Blueprint Resolving into Components */}
              <rect x="152" y="72" width="352" height="60" rx="8" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="1.5" />
              <text x="170" y="100" className="font-mono text-[10px] font-bold fill-[#202722]">API DATA STREAM // CACHED EDGE RUNTIME</text>
              <rect x="170" y="110" width="160" height="8" rx="2" fill="#0891B2" opacity="0.3" />

              {/* Lower Modular Widgets */}
              <rect x="152" y="148" width="170" height="124" rx="8" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1" />
              <text x="168" y="176" className="font-mono text-[9px] font-bold fill-[#687069]">DATABASE MESH</text>
              <path d="M 168 230 L 210 200 L 250 215 L 300 185" stroke="#38D8E4" strokeWidth="2" fill="none" />

              <rect x="334" y="148" width="170" height="124" rx="8" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1" />
              <text x="350" y="176" className="font-mono text-[9px] font-bold fill-[#687069]">CLIENT UI SYNCHRONIZATION</text>
              <circle cx="419" cy="220" r="28" stroke="#0891B2" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <circle cx="419" cy="220" r="10" fill="#38D8E4" />
            </svg>
            <div className="mt-4 rounded-lg bg-[var(--color-surface-muted)] p-3 text-xs text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-text-primary)]">Engineered Architecture:</strong> Resilient full-stack applications with modular component architecture, server-rendered layouts, and edge-cached synchronization.
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            MODE 3: Cloud & DevOps — Horizontal Deployment Pipeline
           ========================================================================= */}
        {activeId === "cloud-devops" && (
          <motion.div
            key="cloud-devops"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex h-full w-full flex-col justify-center"
          >
            <svg viewBox="0 0 540 320" fill="none" className="h-auto w-full select-none">
              {/* Horizontal Pipeline Conduit */}
              <line x1="60" y1="160" x2="480" y2="160" stroke="#E2E3DC" strokeWidth="3" />
              <line x1="60" y1="160" x2="380" y2="160" stroke="#38D8E4" strokeWidth="3" />

              {/* Stage 1: Commit */}
              <g transform="translate(60, 160)">
                <circle cx="0" cy="0" r="22" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#202722]">GIT</text>
                <text x="0" y="38" textAnchor="middle" className="font-mono text-[9px] fill-[#687069]">COMMIT</text>
              </g>

              {/* Stage 2: Test & Scan */}
              <g transform="translate(180, 160)">
                <circle cx="0" cy="0" r="22" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#202722]">TEST</text>
                <text x="0" y="38" textAnchor="middle" className="font-mono text-[9px] fill-[#687069]">CI AUDIT</text>
              </g>

              {/* Stage 3: Immutable Container Build */}
              <g transform="translate(300, 160)">
                <circle cx="0" cy="0" r="22" fill="#FFFFFF" stroke="#0891B2" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#0891B2]">DOCKER</text>
                <text x="0" y="38" textAnchor="middle" className="font-mono text-[9px] fill-[#687069]">REGISTRY</text>
              </g>

              {/* Stage 4: Zero-Downtime Rollout */}
              <g transform="translate(420, 160)">
                <circle cx="0" cy="0" r="26" fill="#202722" stroke="#38D8E4" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#FFFFFF]">DEPLOY</text>
                <text x="0" y="42" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#0891B2]">CANARY 100%</text>
              </g>

              {/* Traveling Deployment Packet Pulse */}
              <circle r="5" fill="#38D8E4">
                <animateMotion path="M 60 160 L 420 160" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>
            <div className="mt-4 rounded-lg bg-[var(--color-surface-muted)] p-3 text-xs text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-text-primary)]">Automated Delivery:</strong> Declarative Terraform infrastructure, immutable containerized workloads, automated blue/green canary promotions, and instant rollback observability.
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            MODE 4: Business Systems & Supply Chain — Operational Process Network
           ========================================================================= */}
        {activeId === "business-systems" && (
          <motion.div
            key="business-systems"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex h-full w-full flex-col justify-center"
          >
            <svg viewBox="0 0 540 320" fill="none" className="h-auto w-full select-none">
              {/* Network Conduit Lines */}
              <line x1="120" y1="80" x2="270" y2="160" stroke="#38D8E4" strokeWidth="2" />
              <line x1="120" y1="240" x2="270" y2="160" stroke="#38D8E4" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="270" y1="160" x2="420" y2="80" stroke="#38D8E4" strokeWidth="2" />
              <line x1="270" y1="160" x2="420" y2="240" stroke="#0891B2" strokeWidth="2" />

              {/* Central ERP Hub */}
              <g transform="translate(270, 160)">
                <circle cx="0" cy="0" r="38" fill="#FFFFFF" stroke="#38D8E4" strokeWidth="2.5" />
                <text x="0" y="-4" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#202722]">CENTRAL</text>
                <text x="0" y="10" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#0891B2]">LEDGER / ERP</text>
              </g>

              {/* Node 1: Inventory & Suppliers */}
              <g transform="translate(120, 80)">
                <rect x="-45" y="-20" width="90" height="40" rx="8" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#202722]">INVENTORY</text>
              </g>

              {/* Node 2: Shopfloor Production */}
              <g transform="translate(120, 240)">
                <rect x="-45" y="-20" width="90" height="40" rx="8" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#202722]">SHOPFLOOR</text>
              </g>

              {/* Node 3: Logistics & Freight */}
              <g transform="translate(420, 80)">
                <rect x="-45" y="-20" width="90" height="40" rx="8" fill="#FFFFFF" stroke="#E2E3DC" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#202722]">LOGISTICS</text>
              </g>

              {/* Node 4: Finance & Reporting */}
              <g transform="translate(420, 240)">
                <rect x="-45" y="-20" width="90" height="40" rx="8" fill="#FFFFFF" stroke="#0891B2" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#0891B2]">FINANCE</text>
              </g>

              {/* Traveling Pulses connecting ERP to Logistics and Shopfloor */}
              <circle r="4" fill="#38D8E4">
                <animateMotion path="M 120 80 L 270 160 L 420 80" dur="3.2s" repeatCount="indefinite" />
              </circle>
            </svg>
            <div className="mt-4 rounded-lg bg-[var(--color-surface-muted)] p-3 text-xs text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-text-primary)]">Connected Operations:</strong> Eliminating paper clipboards and isolated departmental silos through unified transaction ledgers and predictive supply chain visibility.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
