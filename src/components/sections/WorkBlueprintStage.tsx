"use client";

import React, { useState } from "react";
import { Magnetic } from "@/components/motion/Magnetic";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { 
  Layers, 
  Workflow, 
  Activity, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Check, 
  RefreshCw 
} from "lucide-react";

interface WorkBlueprintStageProps {
  projectTitle: string;
  projectSlug: string;
  category: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  accentColor?: string;
}

export function WorkBlueprintStage({
  projectTitle,
  projectSlug,
  category,
  techStack,
  metrics,
  accentColor = "#38D8E4",
}: WorkBlueprintStageProps) {
  const [activeStage, setActiveStage] = useState<"topology" | "pipeline" | "live">("topology");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedCount, setSimulatedCount] = useState(1420);

  const triggerSimulation = () => {
    setIsSimulating(true);
    let count = 0;
    const interval = setInterval(() => {
      setSimulatedCount((prev) => prev + Math.floor(Math.random() * 8) + 1);
      count++;
      if (count > 15) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 60);
  };

  return (
    <div className="editorial-card relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[#FCFBF8] shadow-[0_16px_40px_rgba(32,39,34,0.04)]">
      {/* Blueprint Stage Tab Switcher (Inspired by Pier Gorelli's Plot / Build / Live) */}
      <div className="flex flex-wrap items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface-muted)]/50 px-4 py-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setActiveStage("topology")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
              activeStage === "topology"
                ? "bg-white text-[var(--color-brand-contrast)] shadow-xs border border-[var(--color-brand-strong)]/40"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            <span className="text-[10px] opacity-70">01</span>
            <span>Topology</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveStage("pipeline")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
              activeStage === "pipeline"
                ? "bg-white text-[var(--color-brand-contrast)] shadow-xs border border-[var(--color-brand-strong)]/40"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            <span className="text-[10px] opacity-70">02</span>
            <span>Pipeline</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveStage("live")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
              activeStage === "live"
                ? "bg-white text-[var(--color-brand-contrast)] shadow-xs border border-[var(--color-brand-strong)]/40"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            <span className="text-[10px] opacity-70">03</span>
            <span className="flex items-center gap-1.5">
              <span className="font-mono text-emerald-600 font-bold">+</span>
              Live Ops
            </span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[var(--color-text-tertiary)]">
          <span>SPEC: {category.split("·")[0].trim().toUpperCase()}</span>
          <span>·</span>
          <span>GRID: 8PX</span>
        </div>
      </div>

      {/* Blueprint Visual Canvas Stage */}
      <div className="relative min-h-[340px] sm:min-h-[380px] p-6 sm:p-8 flex flex-col justify-between">
        {/* Subtle Engineering Blueprint Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,rgba(8,145,178,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,145,178,0.12)_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* =========================================================================
            STAGE 01: TOPOLOGY (Vector Node Relations & Schemas)
           ========================================================================= */}
        {activeStage === "topology" && (
          <div className="relative z-10 space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-[var(--color-border)]/60 pb-3 font-mono text-xs text-[var(--color-brand-contrast)]">
              <span className="font-bold">SYSTEM TOPOLOGY // NODE INGRESS & BOUNDARIES</span>
              <span>45° VECTOR CONSTRAINTS</span>
            </div>

            {/* SVG Interactive Architecture Map */}
            <div className="relative w-full h-44 rounded-xl border border-[var(--color-border)] bg-white/80 p-4 shadow-xs">
              <svg className="w-full h-full" viewBox="0 0 600 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 45 degree guide rays */}
                <line x1="80" y1="20" x2="220" y2="120" stroke="rgba(8,145,178,0.2)" strokeDasharray="3 3" />
                <line x1="220" y1="120" x2="380" y2="20" stroke="rgba(8,145,178,0.2)" strokeDasharray="3 3" />
                <line x1="380" y1="20" x2="520" y2="70" stroke="rgba(8,145,178,0.2)" strokeDasharray="3 3" />

                {/* Nodes */}
                <g>
                  {/* Node 1: Ingress */}
                  <rect x="30" y="45" width="100" height="50" rx="8" fill="#FCFBF8" stroke="#0891B2" strokeWidth="1.5" />
                  <text x="80" y="70" textAnchor="middle" fill="#202722" fontSize="11" fontFamily="monospace" fontWeight="bold">INGRESS</text>
                  <text x="80" y="84" textAnchor="middle" fill="#687069" fontSize="9" fontFamily="monospace">Webhooks / API</text>

                  {/* Node 2: Core Orchestrator */}
                  <rect x="230" y="45" width="140" height="50" rx="8" fill="#38D8E4" fillOpacity="0.12" stroke="#0891B2" strokeWidth="2" />
                  <text x="300" y="70" textAnchor="middle" fill="#0E7490" fontSize="11" fontFamily="monospace" fontWeight="bold">CORE PIPELINE</text>
                  <text x="300" y="84" textAnchor="middle" fill="#0891B2" fontSize="9" fontFamily="monospace">FastAPI / Workers</text>

                  {/* Node 3: Database & Ledger */}
                  <rect x="470" y="45" width="100" height="50" rx="8" fill="#FCFBF8" stroke="#0891B2" strokeWidth="1.5" />
                  <text x="520" y="70" textAnchor="middle" fill="#202722" fontSize="11" fontFamily="monospace" fontWeight="bold">STORAGE</text>
                  <text x="520" y="84" textAnchor="middle" fill="#687069" fontSize="9" fontFamily="monospace">Postgres / Redis</text>

                  {/* Connection Arrows */}
                  <path d="M130 70 L230 70" stroke="#0891B2" strokeWidth="1.5" strokeDasharray="4 2" />
                  <path d="M370 70 L470 70" stroke="#0891B2" strokeWidth="1.5" strokeDasharray="4 2" />
                  <circle cx="180" cy="70" r="3" fill="#38D8E4" />
                  <circle cx="420" cy="70" r="3" fill="#38D8E4" />
                </g>
              </svg>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {techStack.map((tech) => (
                <div key={tech} className="rounded-lg border border-[var(--color-border)] bg-white px-2.5 py-1.5 font-mono text-[11px] text-[var(--color-text-secondary)]">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            STAGE 02: PIPELINE (Microservice Event Stream & Protocols)
           ========================================================================= */}
        {activeStage === "pipeline" && (
          <div className="relative z-10 space-y-5 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-[var(--color-border)]/60 pb-3 font-mono text-xs text-[var(--color-brand-contrast)]">
              <span className="font-bold">MICROSERVICE PIPELINE // EVENT-DRIVEN CONTRACTS</span>
              <span className="flex items-center gap-1.5">
                <span className="font-mono text-emerald-600 font-bold">+</span>
                <span>STREAM: REAL-TIME</span>
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-3.5 shadow-xs">
                <div className="p-2 rounded-lg bg-[var(--color-brand-wash)] text-[var(--color-brand-contrast)] shrink-0">
                  <Workflow className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[var(--color-text-primary)]">EVENT_INGESTION_QUEUE</span>
                    <span className="font-mono text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">ACKNOWLEDGED</span>
                  </div>
                  <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                    Inbound user payloads are validated with strict Pydantic schemas before queue dispatch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-3.5 shadow-xs">
                <div className="p-2 rounded-lg bg-[var(--color-brand-wash)] text-[var(--color-brand-contrast)] shrink-0">
                  <Cpu className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[var(--color-text-primary)]">AUTONOMOUS_WORKER_ROUTING</span>
                    <span className="font-mono text-[10px] text-[var(--color-brand-contrast)] bg-[var(--color-brand-wash)] px-2 py-0.5 rounded">PARALLEL</span>
                  </div>
                  <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                    Work orders branch dynamically into parallel tasks for solar calculations, invoice drafting, or telemetry logging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            STAGE 03: LIVE OPS (Interactive Simulation Dashboard & SLA Dials)
           ========================================================================= */}
        {activeStage === "live" && (
          <div className="relative z-10 space-y-5 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-[var(--color-border)]/60 pb-3 font-mono text-xs text-[var(--color-brand-contrast)]">
              <span className="font-bold">LIVE TELEMETRY DIALS // PRODUCTION BENCHMARK</span>
              <span className="text-emerald-600 font-semibold">ALL CLUSTERS OPERATIONAL</span>
            </div>

            {/* SLA Metrics Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-3.5 text-center shadow-xs">
                <span className="font-mono text-[10px] text-[var(--color-text-tertiary)] uppercase block">Processed Signals</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mt-1 block">
                  {simulatedCount.toLocaleString()}
                </span>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-3.5 text-center shadow-xs">
                <span className="font-mono text-[10px] text-[var(--color-text-tertiary)] uppercase block">P99 Stream Latency</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-[var(--color-brand-contrast)] mt-1 block">
                  14.2ms
                </span>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-3.5 text-center shadow-xs">
                <span className="font-mono text-[10px] text-[var(--color-text-tertiary)] uppercase block">Uptime SLA</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-emerald-600 mt-1 block">
                  99.99%
                </span>
              </div>
            </div>

            {/* Simulation Trigger Button */}
            <div className="flex items-center justify-between rounded-xl border border-[var(--color-brand-soft)] bg-[var(--color-brand-wash)] p-3">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-[var(--color-brand-strong)]" />
                <span className="font-mono text-xs font-semibold text-[var(--color-brand-contrast)]">
                  Live Synthetic Load Generator
                </span>
              </div>
              <Magnetic strength={0.25}>
                <button
                  type="button"
                  onClick={triggerSimulation}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-brand-strong)] bg-white px-3 py-1 font-mono text-xs font-bold text-[var(--color-brand-contrast)] shadow-xs transition-all hover:bg-[var(--color-brand-soft)] disabled:opacity-50"
                >
                  <RefreshCw className={`h-3 w-3 ${isSimulating ? "animate-spin" : ""}`} />
                  <span>{isSimulating ? "Injecting Signals..." : "Simulate 50 Load Signals"}</span>
                </button>
              </Magnetic>
            </div>
          </div>
        )}

        {/* Blueprint Footer Bar */}
        <div className="relative z-10 mt-6 pt-4 border-t border-[var(--color-border)]/60 flex items-center justify-between font-mono text-xs">
          <span className="text-[var(--color-text-tertiary)]">
            STAGE: {activeStage.toUpperCase()} · READY FOR DEPLOYMENT
          </span>
          <span className="font-bold text-[var(--color-brand-contrast)]">
            ARCHITECTURAL SPECIFICATION v4.2
          </span>
        </div>
      </div>
    </div>
  );
}
