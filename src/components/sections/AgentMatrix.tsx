"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { KineticFillText } from "@/components/motion/KineticFillText";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { 
  Clock, 
  Activity, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Database, 
  Terminal, 
  ArrowRight,
  CheckCircle2,
  Workflow
} from "lucide-react";
import { AgentNexusIcon } from "@/components/ui/ArchitecturalIcons";

interface MatrixNode {
  time: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ElementType;
  status: string;
  telemetry: string;
  badges: string[];
  payload: {
    command: string;
    result: string;
    metrics: string;
  };
}

const TIMELINE_NODES: MatrixNode[] = [
  {
    time: "06:00",
    tag: "INGESTION & SCANNING",
    title: "Autonomous Signal Ingestion & Anomaly Scanning",
    description: "Ingests raw telemetry across message queues, ERP endpoints, and distributed systems to detect operational drift before human teams log on.",
    icon: Activity,
    status: "CONTINUOUS",
    telemetry: "14,800 MSG/S · ZERO PACKET LOSS",
    badges: ["Kafka / Redis", "Vector Drift Detector", "P99 < 12ms"],
    payload: {
      command: "rea.stream.ingest({ buffer: 'global_telemetry', threshold: 0.98 })",
      result: "STATUS 200 // 4,120 signals filtered, 0 anomalies detected.",
      metrics: "LATENCY: 8.4ms · CLUSTER HEALTH: OPTIMAL"
    }
  },
  {
    time: "09:30",
    tag: "INTENT DISPATCH",
    title: "Multi-Modal Intent Synthesis & MCP Context Routing",
    description: "Transforms conversational directives and system alerts into strictly typed Model Context Protocol (MCP) executions without ambiguous prompt failures.",
    icon: Terminal,
    status: "ACTIVE",
    telemetry: "MCP V2 PROTOCOL · 99.98% TYPE SAFETY",
    badges: ["Multi-Modal LLM", "MCP Protocol", "Schema Guardrails"],
    payload: {
      command: "mcp.dispatch({ intent: 'reconcile_inventory', auth: 'bearer_token' })",
      result: "RESOLVED // 3 autonomous tool workers dispatched to ERP bridge.",
      metrics: "TOKEN EFFICIENCY: 420 TOKENS · 140ms ROUND-TRIP"
    }
  },
  {
    time: "14:00",
    tag: "PARALLEL WORKFLOWS",
    title: "Distributed Agent Swarm & Data Pipelines",
    description: "Parallel worker agents autonomously execute complex cross-system migrations, vendor order reconciliation, and real-time ledger balancing.",
    icon: Cpu,
    status: "PROCESSING",
    telemetry: "16 CONCURRENT THREADS · ZERO LOCKS",
    badges: ["Distributed Workers", "PostgreSQL / Vector", "Self-Orchestrating"],
    payload: {
      command: "agent_pool.spawn({ workers: 16, pipeline: 'supply_chain_balance' })",
      result: "SUCCESS // 1,420 orders reconciled, invoices auto-generated in SAP.",
      metrics: "THROUGHPUT: 480 TPS · MEMORY: 340MB FIXED"
    }
  },
  {
    time: "22:00",
    tag: "VERIFICATION & TESTS",
    title: "Self-Healing Verification & Synthetic Regression",
    description: "Runs automated continuous browser tests, API contract validations, and synthetic user journeys to guarantee absolute system stability.",
    icon: ShieldCheck,
    status: "VERIFYING",
    telemetry: "1,280 TESTS PASSED · ZERO REGRESSIONS",
    badges: ["Playwright E2E", "Synthetic Traffic", "Contract Verification"],
    payload: {
      command: "synthetic.simulate({ journeys: 250, concurrency: 25 })",
      result: "ALL CONTRACTS VALIDATED // 0 regressions found across 4 microservices.",
      metrics: "ERROR RATE: 0.0000% · AUDIT: SIGNED"
    }
  },
  {
    time: "02:00",
    tag: "CLOUD HYGIENE",
    title: "Autonomous Cloud Scaling & Schema Compaction",
    description: "Automatically compacts fragmented storage tables, purges ephemeral scratch artifacts, and scales compute nodes down to minimize cloud expenditure.",
    icon: Database,
    status: "SCHEDULED",
    telemetry: "OPEX SAVINGS: -34% · 100% GREEN COMPLIANT",
    badges: ["Kubernetes KEDA", "Auto-Prune", "Cost Guardrail"],
    payload: {
      command: "cluster.scale_down({ min_nodes: 2, optimize_storage: true })",
      result: "STORAGE COMPACTED // 42GB reclaimed, serverless nodes idling.",
      metrics: "DAILY SAVINGS: $420.00 · IDLE LOAD: 1.8%"
    }
  }
];

export function AgentMatrix() {
  const [activeIdx, setActiveIdx] = useState(1);
  const activeNode = TIMELINE_NODES[activeIdx];
  const ActiveIcon = activeNode.icon;

  return (
    <section className="relative overflow-hidden py-24 lg:py-36 bg-[#FCFBF8] border-b border-[var(--color-border)]">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#38D8E4_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        {/* Editorial Section Header */}
        <div className="mb-16 border-b border-[var(--color-border)] pb-8 lg:mb-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-[var(--color-brand-strong)] animate-pulse" />
                <span className="font-mono text-xs font-bold tracking-widest text-[var(--color-brand-contrast)] uppercase">
                  <ScrambleText triggerOnHover>CONTINUOUS EXECUTION MATRIX // 24/7 AUTONOMOUS LIFECYCLE</ScrambleText>
                </span>
              </div>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
                <KineticFillText as="span">While your team rests, your systems accelerate.</KineticFillText>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
              Real enterprise intelligence isn&rsquo;t a one-off prompt. It is a persistent, disciplined multi-agent loop running around the clock without manual supervision.
            </p>
          </div>
        </div>

        {/* 24-Hour Timeline Selector Bar */}
        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {TIMELINE_NODES.map((node, idx) => {
            const isSelected = idx === activeIdx;
            const Icon = node.icon;
            return (
              <button
                key={node.time}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative group flex flex-col p-4 rounded-xl border text-left transition-all duration-300 ${
                  isSelected
                    ? "border-[var(--color-brand-strong)] bg-white shadow-md ring-1 ring-[var(--color-brand-primary)]/40"
                    : "border-[var(--color-border)] bg-[var(--color-surface)]/60 hover:border-[var(--color-border-strong)] hover:bg-white"
                }`}
              >
                {/* Crosshair Corner Markers (+) */}
                <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[var(--color-brand-strong)]/40 pointer-events-none">+</span>
                <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[var(--color-brand-strong)]/40 pointer-events-none">+</span>
                <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[var(--color-brand-strong)]/40 pointer-events-none">+</span>
                <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[var(--color-brand-strong)]/40 pointer-events-none">+</span>

                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-sm font-bold ${
                    isSelected ? "text-[var(--color-brand-contrast)]" : "text-[var(--color-text-primary)]"
                  }`}>
                    {node.time}
                  </span>
                  <div className={`p-1.5 rounded-lg border ${
                    isSelected 
                      ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-soft)]/40 text-[var(--color-brand-contrast)]" 
                      : "border-[var(--color-border)] bg-[var(--color-canvas)] text-[var(--color-text-secondary)]"
                  }`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                </div>

                <span className="font-mono text-[10px] font-semibold tracking-wider text-[var(--color-text-tertiary)] uppercase truncate mb-1">
                  {node.tag}
                </span>
                <span className="text-xs font-semibold text-[var(--color-text-primary)] line-clamp-1">
                  {node.title.split(" ")[0]} {node.title.split(" ")[1]}
                </span>

                {/* Progress Underline Indicator */}
                {isSelected && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-brand-strong)] rounded-b-xl" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Node Deep-Dive Stage */}
        <div className="editorial-card relative rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:p-10 shadow-[0_12px_36px_rgba(32,39,34,0.04)]">
          {/* Architectural Corner Crosshairs (+) */}
          <span className="absolute top-2 left-2.5 font-mono text-xs text-[var(--color-brand-strong)]/40 pointer-events-none">+</span>
          <span className="absolute top-2 right-2.5 font-mono text-xs text-[var(--color-brand-strong)]/40 pointer-events-none">+</span>
          <span className="absolute bottom-2 left-2.5 font-mono text-xs text-[var(--color-brand-strong)]/40 pointer-events-none">+</span>
          <span className="absolute bottom-2 right-2.5 font-mono text-xs text-[var(--color-brand-strong)]/40 pointer-events-none">+</span>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Descriptive Specs */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-3xl font-extrabold text-[var(--color-brand-strong)]">
                  {activeNode.time}
                </span>
                <span className="h-4 w-px bg-[var(--color-border)]" />
                <span className="rounded-full bg-[rgba(56,216,228,0.12)] px-3 py-0.5 font-mono text-xs font-bold text-[var(--color-brand-contrast)] uppercase">
                  {activeNode.tag}
                </span>
                <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                  STATUS: {activeNode.status}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
                {activeNode.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
                {activeNode.description}
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {activeNode.badges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-canvas)] px-3 py-1 font-mono text-xs font-medium text-[var(--color-text-primary)]"
                  >
                    <CheckCircle2 className="h-3 w-3 text-[var(--color-brand-strong)]" />
                    {b}
                  </span>
                ))}
              </div>

              {/* Telemetry pill */}
              <div className="mt-8 flex items-center gap-3 font-mono text-xs text-[var(--color-brand-contrast)] bg-[var(--color-brand-wash)] px-4 py-2 rounded-xl border border-[var(--color-brand-soft)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)] animate-ping" />
                <span className="font-bold">LIVE TELEMETRY:</span>
                <span>{activeNode.telemetry}</span>
              </div>
            </div>

            {/* Right Column: Code Payload Terminal */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-[var(--color-border-strong)] bg-[#1A1F1B] text-[#FCFBF8] shadow-lg">
                {/* Terminal Bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-black/30 font-mono text-[11px] text-[#A0AAA2]">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-white/80">agent_execution.log</span>
                  </div>
                  <span className="text-[10px] text-[#38D8E4]">ONLINE</span>
                </div>

                {/* Terminal Output */}
                <div className="p-4 sm:p-5 font-mono text-xs space-y-3">
                  <div>
                    <span className="text-[#38D8E4]">$ </span>
                    <span className="text-white/90">{activeNode.payload.command}</span>
                  </div>
                  <div className="border-l-2 border-[#38D8E4]/40 pl-3 py-1 text-xs text-[#A0AAA2]">
                    {activeNode.payload.result}
                  </div>
                  <div className="pt-2 border-t border-white/10 text-[11px] text-[#38D8E4]/90 font-semibold flex items-center justify-between">
                    <span>{activeNode.payload.metrics}</span>
                    <AgentNexusIcon className="h-3.5 w-3.5 text-[#38D8E4]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
