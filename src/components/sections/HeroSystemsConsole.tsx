"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Workflow, 
  Cloud, 
  Cpu, 
  ArrowUpRight,
  CheckCircle2,
  Lock
} from "lucide-react";
import { AgentNexusIcon } from "@/components/ui/ArchitecturalIcons";

export type DisciplineTab = "ai" | "software" | "automation" | "cloud";

export function HeroSystemsConsole() {
  const [activeTab, setActiveTab] = useState<DisciplineTab>("ai");
  const [selectedNode, setSelectedNode] = useState<string>("orchestrator");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6; // -3 to +3 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    setTilt({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative w-full select-none py-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1200px",
      }}
    >
      {/* Abstract Layered Backdrop Plate */}
      <div 
        className="pointer-events-none absolute -inset-2 sm:-inset-3 rounded-3xl border border-[var(--color-border)]/50 bg-[var(--color-surface-muted)]/20 -z-10 transform translate-x-2 translate-y-2 hidden sm:block"
        aria-hidden="true"
      />

      {/* Abstract Corner Crosshair Registration Marks */}
      <span className="pointer-events-none absolute -top-1 -left-1 font-mono text-[11px] text-[var(--color-border-strong)] hidden lg:block select-none">+</span>
      <span className="pointer-events-none absolute -top-1 -right-1 font-mono text-[11px] text-[var(--color-border-strong)] hidden lg:block select-none">+</span>
      <span className="pointer-events-none absolute -bottom-1 -left-1 font-mono text-[11px] text-[var(--color-border-strong)] hidden lg:block select-none">+</span>
      <span className="pointer-events-none absolute -bottom-1 -right-1 font-mono text-[11px] text-[var(--color-border-strong)] hidden lg:block select-none">+</span>

      {/* Floating Abstract Satellite Badge 1 (Top Left) - Multi-depth Parallax */}
      <div 
        className="hidden lg:flex items-center gap-2 absolute -top-2 left-6 z-20 px-3 py-1 rounded-md bg-white border border-[var(--color-border-strong)] shadow-sm font-mono text-[10px] text-[var(--color-text-primary)] transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${-tilt.y * 3.8}px, ${tilt.x * 3.8}px, 25px)`,
        }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-bold">SYSTEM ACTIVE</span>
        <span className="text-[var(--color-border)]">|</span>
        <span className="text-[var(--color-brand-strong)] font-semibold">99.9% LIVE</span>
      </div>

      {/* Floating Abstract Satellite Badge 2 (Bottom Right) - Multi-depth Parallax */}
      <div 
        className="hidden lg:flex items-center gap-2 absolute -bottom-2 right-6 z-20 px-3 py-1 rounded-md bg-white border border-[var(--color-border-strong)] shadow-sm font-mono text-[10px] text-[var(--color-text-primary)] transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${tilt.y * 4.8}px, ${-tilt.x * 4.8}px, 40px)`,
        }}
      >
        <span className="font-bold text-[var(--color-brand-strong)]">DISPATCH</span>
        <span className="text-emerald-600 font-semibold">&lt;15ms</span>
        <span className="text-[var(--color-border)]">|</span>
        <span className="text-[var(--color-text-secondary)]">ZERO DOWNTIME</span>
      </div>

      {/* Outer Chassis with Dynamic 3D Parallax Tilt */}
      <div 
        className="editorial-card relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_24px_60px_-15px_rgba(32,39,34,0.10)] overflow-hidden transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        
        {/* Top Control Bar: Studio Engineering Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] px-5 py-3.5 bg-[var(--color-canvas-secondary)]/50">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
              PREVIEW
            </span>
            <span className="font-mono text-[11px] font-bold tracking-wider text-[var(--color-text-primary)] uppercase">
              LIVE SYSTEM ARCHITECTURE // HOW IT WORKS
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10.5px] text-[var(--color-text-secondary)]">
            <span className="flex items-center gap-1.5 rounded-[2px] border border-[var(--color-border-strong)]/80 bg-white px-2 py-0.5 shadow-2xs">
              <span className="font-bold text-[var(--color-brand-strong)]">LOC //</span>
              <span className="font-semibold text-[var(--color-text-primary)]">PRIMARY DC-01</span>
            </span>
            <span className="hidden sm:inline-block font-mono text-[9.5px] font-bold text-white bg-emerald-700 px-1.5 py-0.5 rounded-[2px]">
              SLA 99.9%
            </span>
          </div>
        </div>

        {/* Discipline Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[var(--color-border)] bg-white">
          {[
            { id: "ai", label: "01 // AI AUTOMATION", icon: AgentNexusIcon, tag: "AI" },
            { id: "software", label: "02 // WEB APPS", icon: Code2, tag: "APPS" },
            { id: "automation", label: "03 // INTEGRATIONS", icon: Workflow, tag: "FLOWS" },
            { id: "cloud", label: "04 // CLOUD & HOSTING", icon: Cloud, tag: "HOSTING" },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as DisciplineTab)}
                className={`relative flex items-center justify-center gap-2 py-3 px-3 transition-all duration-200 text-left border-r last:border-r-0 border-[var(--color-border)]/50 ${
                  isActive
                    ? "bg-[var(--color-brand-wash)] text-[var(--color-brand-contrast)] font-bold"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-canvas-secondary)]/40 hover:text-[var(--color-text-primary)]"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-[var(--color-brand-strong)]" : "opacity-60"}`} />
                <span className="font-mono text-[10.5px] tracking-wider truncate">
                  {tab.label}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-brand-strong)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Stage Viewport */}
        <div className="relative min-h-[380px] sm:min-h-[410px] flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-b from-white to-[var(--color-canvas)]">
          <div className="relative w-full h-full flex flex-col justify-between">
            
            {/* 01 // AI AUTOMATION VIEW */}
            {activeTab === "ai" && (
              <div className="relative w-full py-1">
                {/* Stage Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]/60 font-mono text-[11px]">
                  <div className="flex items-center gap-2 text-[var(--color-text-primary)] font-semibold">
                    <span className="font-mono text-emerald-600 font-bold shrink-0">+</span>
                    <span>AI ASSISTANT WORKFLOW</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-brand-contrast)] font-bold">
                    <span>AUTOMATED TRIAGE</span>
                    <span className="text-[var(--color-border)]">|</span>
                    <span className="text-emerald-600">ACCURACY: 99.8%</span>
                  </div>
                </div>

                {/* SVG Topology Graph */}
                <div className="relative w-full aspect-[540/220] my-2">
                  <svg
                    viewBox="0 0 540 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Interconnecting Conduits */}
                    <path
                      d="M 90 70 C 170 70, 190 110, 270 110"
                      stroke="#0891B2"
                      strokeWidth="1.8"
                      strokeDasharray="4 4"
                      opacity="0.45"
                    />
                    <path
                      d="M 90 150 C 170 150, 190 110, 270 110"
                      stroke="#0891B2"
                      strokeWidth="1.8"
                      strokeDasharray="4 4"
                      opacity="0.45"
                    />
                    <path
                      d="M 270 110 C 350 110, 370 70, 450 70"
                      stroke="#0891B2"
                      strokeWidth="2"
                    />
                    <path
                      d="M 270 110 C 350 110, 370 150, 450 150"
                      stroke="#0891B2"
                      strokeWidth="2"
                    />

                    {/* Central Nexus */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedNode("orchestrator")}
                    >
                      <circle
                        cx="270"
                        cy="110"
                        r="32"
                        fill="#FFFFFF"
                        stroke={selectedNode === "orchestrator" ? "#0891B2" : "#E2E3DC"}
                        strokeWidth="2"
                        className="transition-colors duration-200"
                      />
                      <circle cx="270" cy="110" r="24" fill="#F3F2ED" />
                      <circle cx="270" cy="110" r="12" fill="#0891B2" opacity="0.9" />
                      <text
                        x="270"
                        y="114"
                        textAnchor="middle"
                        fontFamily="var(--font-mono, monospace)"
                        fontSize="9"
                        fontWeight="700"
                        fill="#FFFFFF"
                      >
                        CORE
                      </text>
                      <text
                        x="270"
                        y="156"
                        textAnchor="middle"
                        fontFamily="var(--font-mono, monospace)"
                        fontSize="10"
                        fontWeight="700"
                        fill="#202722"
                      >
                        SMART ROUTER
                      </text>
                      <text
                        x="270"
                        y="170"
                        textAnchor="middle"
                        fontFamily="var(--font-mono, monospace)"
                        fontSize="8.5"
                        fill="#0891B2"
                      >
                        SPEED: &lt;5MS
                      </text>
                    </g>

                    {/* Node A: Context Ingestion */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedNode("recon")}
                    >
                      <rect
                        x="20"
                        y="48"
                        width="115"
                        height="44"
                        rx="8"
                        fill="#FFFFFF"
                        stroke={selectedNode === "recon" ? "#0891B2" : "#E2E3DC"}
                        strokeWidth="1.5"
                      />
                      <circle cx="36" cy="70" r="4" fill="#10B981" />
                      <text x="48" y="66" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="#202722">
                        INBOX
                      </text>
                      <text x="48" y="78" fontFamily="var(--font-mono)" fontSize="7.5" fill="#687069">
                        Emails & Forms
                      </text>
                    </g>

                    {/* Node B: Document Checking */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedNode("synth")}
                    >
                      <rect
                        x="20"
                        y="128"
                        width="115"
                        height="44"
                        rx="8"
                        fill="#FFFFFF"
                        stroke={selectedNode === "synth" ? "#0891B2" : "#E2E3DC"}
                        strokeWidth="1.5"
                      />
                      <circle cx="36" cy="150" r="4" fill="#38D8E4" />
                      <text x="48" y="146" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="#202722">
                        DOC CHECKER
                      </text>
                      <text x="48" y="158" fontFamily="var(--font-mono)" fontSize="7.5" fill="#687069">
                        Verified Answers
                      </text>
                    </g>

                    {/* Node C: Action Engine */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedNode("exec")}
                    >
                      <rect
                        x="395"
                        y="48"
                        width="125"
                        height="44"
                        rx="8"
                        fill="#FFFFFF"
                        stroke={selectedNode === "exec" ? "#0891B2" : "#E2E3DC"}
                        strokeWidth="1.5"
                      />
                      <circle cx="411" cy="70" r="4" fill="#0891B2" />
                      <text x="423" y="66" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="#202722">
                        ACTION ENGINE
                      </text>
                      <text x="423" y="78" fontFamily="var(--font-mono)" fontSize="7.5" fill="#687069">
                        Auto-Updates CRM
                      </text>
                    </g>

                    {/* Node D: Safety Check */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedNode("guard")}
                    >
                      <rect
                        x="395"
                        y="128"
                        width="125"
                        height="44"
                        rx="8"
                        fill="#FFFFFF"
                        stroke={selectedNode === "guard" ? "#0891B2" : "#E2E3DC"}
                        strokeWidth="1.5"
                      />
                      <circle cx="411" cy="150" r="4" fill="#10B981" />
                      <text x="423" y="146" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="#202722">
                        SAFETY CHECK
                      </text>
                      <text x="423" y="158" fontFamily="var(--font-mono)" fontSize="7.5" fill="#687069">
                        Verified & Secure
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            )}

            {/* 02 // SOFTWARE VIEW */}
            {activeTab === "software" && (
              <div className="space-y-3 py-1">
                <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)]/60 font-mono text-[11px]">
                  <span className="text-[var(--color-text-secondary)]">ARCHITECTURE: FULL-STACK TYPE-SAFE</span>
                  <span className="text-emerald-600 font-bold">100% TYPE INTEGRITY</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                  {[
                    { layer: "01 // EDGE", title: "Next.js 16 / React 19", stat: "1.2ms TTFB", desc: "Global edge CDN rendering" },
                    { layer: "02 // GATEWAY", title: "Type-Safe tRPC / GraphQL", stat: "0% Schema Drift", desc: "End-to-end type contracts" },
                    { layer: "03 // LOGIC", title: "Rust / Node.js Core", stat: "4.8ms P99", desc: "High-throughput microservices" },
                    { layer: "04 // DATA", title: "PostgreSQL & Redis", stat: "ACID Locked", desc: "Transactional consistency" },
                  ].map((tier, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-[var(--color-border)] bg-white p-3 shadow-2xs hover:border-[var(--color-brand-strong)] transition-all duration-200"
                    >
                      <span className="font-mono text-[9px] font-bold text-[var(--color-brand-strong)] uppercase">
                        {tier.layer}
                      </span>
                      <h4 className="mt-1 font-heading text-xs font-bold text-[var(--color-text-primary)]">
                        {tier.title}
                      </h4>
                      <div className="mt-2 flex items-center justify-between font-mono text-[10px]">
                        <span className="text-emerald-600 font-bold">{tier.stat}</span>
                        <ArrowUpRight className="h-3 w-3 text-[var(--color-text-tertiary)]" />
                      </div>
                      <p className="mt-1 font-sans text-[11px] text-[var(--color-text-secondary)] leading-tight">
                        {tier.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-canvas-secondary)]/60 p-3">
                  <div className="flex items-center justify-between font-mono text-[10.5px]">
                    <span className="text-[var(--color-text-secondary)]">PAGE LOAD SPEED</span>
                    <span className="text-[var(--color-brand-strong)] font-bold">&lt;100MS LIGHTNING FAST</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-[2px] bg-[var(--color-border)] overflow-hidden flex">
                    <div className="h-full bg-emerald-500 w-[15%]" title="Edge" />
                    <div className="h-full bg-[var(--color-brand-primary)] w-[25%]" title="Gateway" />
                    <div className="h-full bg-[var(--color-brand-strong)] w-[40%]" title="Compute" />
                    <div className="h-full bg-[var(--color-brand-contrast)] w-[20%]" title="Database" />
                  </div>
                </div>
              </div>
            )}

            {/* 03 // AUTOMATION VIEW */}
            {activeTab === "automation" && (
              <div className="space-y-3 py-1">
                <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)]/60 font-mono text-[11px]">
                  <span className="text-[var(--color-text-secondary)]">CONNECTED BUSINESS WORKFLOWS</span>
                  <span className="text-emerald-600 font-bold">ZERO LOST DATA</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-[var(--color-border)] bg-white p-3.5 shadow-2xs">
                    <span className="font-mono text-[9px] font-bold text-[var(--color-brand-strong)]">DAILY VOLUME</span>
                    <div className="mt-1 font-mono text-xl font-bold text-[var(--color-text-primary)]">
                      1,850,000+
                    </div>
                    <span className="font-mono text-[10px] text-emerald-600 font-semibold">
                      Processed operational events
                    </span>
                  </div>

                  <div className="rounded-xl border border-[var(--color-border)] bg-white p-3.5 shadow-2xs">
                    <span className="font-mono text-[9px] font-bold text-[var(--color-brand-strong)]">QUEUE THROUGHPUT</span>
                    <div className="mt-1 font-mono text-xl font-bold text-[var(--color-text-primary)]">
                      8,400 / sec
                    </div>
                    <span className="font-mono text-[10px] text-[var(--color-text-secondary)]">
                      Kafka & RabbitMQ buffer
                    </span>
                  </div>

                  <div className="rounded-xl border border-[var(--color-border)] bg-white p-3.5 shadow-2xs">
                    <span className="font-mono text-[9px] font-bold text-[var(--color-brand-strong)]">RETRY RELIABILITY</span>
                    <div className="mt-1 font-mono text-xl font-bold text-[var(--color-text-primary)]">
                      99.999%
                    </div>
                    <span className="font-mono text-[10px] text-emerald-600 font-semibold">
                      Automatic dead-letter replay
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--color-border)] bg-white p-3.5 flex items-center justify-between font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-emerald-600 font-bold shrink-0">+</span>
                    <span className="font-bold text-[var(--color-text-primary)]">WEBHOOK INGESTION</span>
                  </div>
                  <span className="text-[var(--color-brand-strong)]">→ ZERO-LOSS BUFFER →</span>
                  <span className="font-bold text-[var(--color-text-primary)]">PARALLEL WORKERS</span>
                  <span className="text-[var(--color-brand-strong)]">→ SYNC →</span>
                  <span className="font-bold text-emerald-600">ENTERPRISE ERP</span>
                </div>
              </div>
            )}

            {/* 04 // CLOUD MESH VIEW */}
            {activeTab === "cloud" && (
              <div className="space-y-3 py-1">
                <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)]/60 font-mono text-[11px]">
                  <span className="text-[var(--color-text-secondary)]">INFRASTRUCTURE: MULTI-REGION RESILIENCE</span>
                  <span className="text-emerald-600 font-bold">99.9% RELIABLE UPTIME</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { region: "EU-CENTRAL", city: "Central DC-01", ping: "8ms", status: "Primary Master" },
                    { region: "EU-WEST", city: "Frankfurt DC-02", ping: "12ms", status: "Hot Standby" },
                    { region: "US-EAST", city: "Virginia Edge", ping: "68ms", status: "Active Replicate" },
                    { region: "AP-SOUTH", city: "Singapore Edge", ping: "118ms", status: "Edge Cache" },
                  ].map((node, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-[var(--color-border)] bg-white p-3 shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] font-bold text-[var(--color-brand-strong)]">
                          {node.region}
                        </span>
                        <span className="font-mono text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1 rounded-[2px]">UP</span>
                      </div>
                      <div className="mt-1 font-heading text-xs font-bold text-[var(--color-text-primary)]">
                        {node.city}
                      </div>
                      <div className="mt-2 font-mono text-[10.5px] text-emerald-600 font-bold">
                        {node.ping}
                      </div>
                      <span className="font-mono text-[9px] text-[var(--color-text-tertiary)]">
                        {node.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-canvas-secondary)]/70 p-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10.5px]">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-3.5 w-3.5 text-[var(--color-brand-strong)]" />
                    <span>KUBERNETES: 24 PODS NOMINAL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-emerald-600 font-bold shrink-0">+</span>
                    <span>ZERO-DOWNTIME UPDATES</span>
                  </div>
                  <span className="text-[var(--color-brand-strong)] font-semibold">ISO-27001 COMPLIANT</span>
                </div>
              </div>
            )}

            {/* Executive Architecture Verification Footer */}
            <div className="mt-4 pt-3.5 border-t border-[var(--color-border)]/70 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>Tested Weekly · 100% Code Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-[var(--color-brand-strong)]" />
                <span>Bank-Grade Encryption & Security</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
