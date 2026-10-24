"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Bot, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Server, 
  Workflow, 
  Zap, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  Database, 
  RefreshCw, 
  Globe,
  Sliders,
  FileSpreadsheet,
  Check,
  Building2,
  ExternalLink,
  ChevronRight,
  Radio
} from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion/gsap";

interface ServiceVisualStageProps {
  activeId: string;
}

const SERVICE_META: Record<
  string,
  {
    discipline: string;
    explanation: string;
    href: string;
    linkText: string;
  }
> = {
  "ai-automation": {
    discipline: "01 // WHAT WE OFFER: AI AUTOMATION",
    explanation:
      "Customer inquiries, orders, and emails are answered automatically in seconds by checking your existing docs. Your staff only steps in when personal attention is truly needed.",
    href: "/services/ai-automation",
    linkText: "Explore AI & Automation",
  },
  "software-engineering": {
    discipline: "02 // WHAT WE OFFER: CUSTOM SOFTWARE",
    explanation:
      "We replace slow, scattered spreadsheets with lightning-fast web applications and client portals crafted around the exact way your team works.",
    href: "/services/software-engineering",
    linkText: "Explore Software & Digital Products",
  },
  "cloud-devops": {
    discipline: "03 // WHAT WE OFFER: CLOUD & HOSTING",
    explanation:
      "We set up secure, auto-scaling cloud servers with zero-downtime automated updates, so your tools stay fast and never crash under heavy traffic.",
    href: "/services/cloud-devops",
    linkText: "Explore Cloud & DevOps",
  },
  "business-systems": {
    discipline: "04 // WHAT WE OFFER: CONNECTED SYSTEMS",
    explanation:
      "We link your online store, warehouse stock, accounting books, and shipping carriers into one live dashboard—eliminating all manual copy-pasting.",
    href: "/services/business-systems",
    linkText: "Explore Business Systems & Supply Chain",
  },
};

/* =========================================================================
   01 — AI & AUTOMATION SIMULATION: Real Inquiry Resolution
   Shows an inbound inquiry, live AI reasoning with document search, and instant outcome
   With animated connecting signal conduits, glowing packets, and sonar indicators
   ========================================================================= */
function AiWorkflowVisual() {
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const reduced = prefersReducedMotion();

  const cases = [
    {
      channel: "WhatsApp Inquiry",
      client: "Customer #3912",
      query: "Can you update our delivery address for order #8849 and send the invoice?",
      confidence: "99.8%",
      sources: ["Shopify Orders API", "Warehouse Manifest", "Accounting PDF"],
      resolution: "Address updated in warehouse dispatch, invoice PDF generated & sent via WhatsApp.",
      turnaround: "0.4s",
    },
    {
      channel: "Email Helpdesk",
      client: "Wholesale Partner",
      query: "What is your bulk price for 500 units and can we schedule shipping on Friday?",
      confidence: "99.4%",
      sources: ["2026 Tiered Pricing Sheet", "Live Stock ERP", "Calendar Scheduler"],
      resolution: "Verified 820 units in stock, drafted custom quote with tier discount, booked delivery slot.",
      turnaround: "0.6s",
    },
    {
      channel: "Web Portal Bot",
      client: "New Business Lead",
      query: "We need custom software to connect our inventory across 3 stores. What are your timelines?",
      confidence: "99.1%",
      sources: ["Assestics Engineering Handbook", "Sprint Availability Schedule"],
      resolution: "Sent capability overview, estimated 4-week turnaround, and provided instant consultation link.",
      turnaround: "0.3s",
    },
  ];

  const currentCase = cases[selectedCase];

  const handleCaseChange = (idx: number) => {
    if (idx === selectedCase) return;
    setIsProcessing(true);
    setSelectedCase(idx);
    setTimeout(() => setIsProcessing(false), 240);
  };

  return (
    <div className="luxury-border-glow w-full flex flex-col justify-between p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-white via-[#FCFBF8] to-[#FAF9F5] border border-[var(--color-border)] shadow-xs select-none space-y-4 relative overflow-hidden">
      
      {/* Top Test Controller */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pb-3 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="absolute -inset-1 rounded-full bg-emerald-400/60 animate-sonar-ring" />
          </div>
          <span className="font-mono text-[10px] sm:text-[10.5px] font-bold text-[#161B17] uppercase tracking-wider">
            AI AGENT <span className="text-[#8E968F] hidden sm:inline">// LIVE SIMULATION</span>
          </span>
        </div>

        {/* Tactile Scenario Selector */}
        <div className="grid grid-cols-3 sm:flex items-center gap-1 bg-[#EAE9E2]/60 p-1 rounded-lg border border-[#D5D7CE] w-full sm:w-auto text-center">
          <span className="text-[10px] font-mono font-bold text-[#687069] px-1 hidden sm:inline">SCENARIO:</span>
          {cases.map((c, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleCaseChange(idx)}
              className={`relative px-2 sm:px-2.5 py-1 rounded-md font-mono text-[10px] font-bold transition-all ${
                selectedCase === idx
                  ? "bg-[#161B17] text-white shadow-2xs"
                  : "text-[#687069] hover:text-[#161B17]"
              }`}
            >
              {selectedCase === idx && (
                <motion.div
                  layoutId="ai-scenario-pill"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  className="absolute inset-0 bg-[#161B17] rounded-md -z-10"
                />
              )}
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main 3-Stage Visual Pipeline with Animated Conduits */}
      <div className="relative my-2">
        {/* Animated Connecting SVG Conduit Line (Between Cards on Desktop) */}
        <div className="hidden md:block absolute top-[52px] left-[28%] right-[28%] h-[2px] pointer-events-none z-10" aria-hidden="true">
          <svg className="w-full h-4 overflow-visible" fill="none">
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#D5D7CE" strokeWidth="1.5" />
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#38D8E4" strokeWidth="2" className="animate-conduit-flow" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch relative z-10">
          
          {/* Step 1: Inbound Trigger */}
          <div className="flex flex-col justify-between p-4 rounded-xl border border-[var(--color-border)] bg-white shadow-2xs hover:border-[var(--color-border-strong)] transition-all">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100 font-mono text-[10px]">
                <span className="text-[#0891B2] font-bold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  01 INBOUND
                </span>
                <span className="text-[#8E968F] font-semibold">{currentCase.channel}</span>
              </div>
              <div className="mt-3 flex items-start gap-2.5">
                <span className="h-7 w-7 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[#0891B2] shrink-0 text-xs font-bold font-mono shadow-2xs">
                  <Bot className="h-4 w-4" />
                </span>
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#161B17] block">
                    {currentCase.client}
                  </span>
                  <p className="text-xs text-[#374151] mt-1 leading-snug font-medium">
                    &quot;{currentCase.query}&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-2.5 border-t border-neutral-100 font-mono text-[9.5px] text-[#8E968F] flex items-center justify-between">
              <span className="flex items-center gap-1 text-cyan-800 font-semibold">
                <Clock className="h-3 w-3 text-cyan-600" />
                <span>Instant Ingestion</span>
              </span>
              <span className="bg-[#FAF9F6] px-1.5 py-0.5 rounded border border-[#E2E4DC]">Webhook</span>
            </div>
          </div>

          {/* Step 2: Autonomous Reasoning Core */}
          <div className="flex flex-col justify-between p-4 rounded-xl border border-cyan-300/80 bg-gradient-to-b from-cyan-50/40 to-white shadow-2xs relative overflow-hidden">
            {/* Subtle light shimmer sweep */}
            <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-cyan-100/20 to-transparent transform rotate-45 animate-laser-sweep" />

            <div>
              <div className="flex items-center justify-between pb-2 border-b border-cyan-200/80 font-mono text-[10px]">
                <span className="text-cyan-900 font-bold flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-cyan-600" />
                  02 REASONING CORE
                </span>
                <span className="text-emerald-700 font-bold bg-white px-2 py-0.5 rounded-full border border-emerald-200 shadow-2xs text-[9.5px]">
                  {currentCase.confidence}
                </span>
              </div>
              
              <div className="mt-3 space-y-1.5">
                <span className="text-[9.5px] font-mono text-[#687069] uppercase font-bold block">
                  Ground Truth Verification:
                </span>
                {currentCase.sources.map((src, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.25 }}
                    className="flex items-center gap-1.5 text-[10px] font-mono text-[#161B17] bg-white/95 p-1.5 rounded-md border border-cyan-100/90 shadow-2xs"
                  >
                    <Check className="h-3 w-3 text-emerald-600 shrink-0" />
                    <span className="truncate font-semibold">{src}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-2.5 border-t border-cyan-200/80 font-mono text-[9.5px] text-cyan-900 font-bold flex items-center justify-between">
              <span className="flex items-center gap-1 text-cyan-700">
                <Zap className="h-3 w-3 text-cyan-600" />
                <span>Zero Hallucination Guard</span>
              </span>
              <span className="text-[9px] text-[#687069]">4 Sources</span>
            </div>
          </div>

          {/* Step 3: Instant Autonomous Outcome */}
          <div className="flex flex-col justify-between p-4 rounded-xl border border-emerald-300/80 bg-gradient-to-b from-emerald-50/40 to-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-emerald-200/80 font-mono text-[10px]">
                <span className="text-emerald-900 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  03 RESOLUTION
                </span>
                <span className="font-mono text-[9px] font-black text-white bg-emerald-700 px-2 py-0.5 rounded-full shadow-2xs">
                  AUTONOMOUS
                </span>
              </div>

              <div className="mt-3 flex items-start gap-2.5">
                <span className="h-7 w-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-xs mt-0.5">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <span className="font-mono text-[10px] font-bold text-emerald-950 block">
                    Execution Confirmed
                  </span>
                  <p className="text-xs text-[#202722] mt-1 leading-snug font-medium">
                    {currentCase.resolution}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-2.5 border-t border-emerald-200/80 font-mono text-[9.5px] text-emerald-800 font-bold flex items-center justify-between">
              <span>HUMAN TIME: 0s</span>
              <span className="text-emerald-800 bg-white px-2 py-0.5 rounded-md border border-emerald-200 shadow-2xs">
                TURNAROUND: {currentCase.turnaround}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Footer System Telemetry */}
      <div className="pt-2.5 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#687069]">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
          <span>CHANNELS: <strong className="text-[#161B17]">WhatsApp · Email · Webhooks · CRM Integration</strong></span>
        </span>
        <span className="text-emerald-700 font-bold flex items-center gap-1">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          <span>100% Policy Compliant</span>
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   02 — CUSTOM SOFTWARE SIMULATION: Living Client SaaS & Portal
   Demonstrates replacing chaotic spreadsheets with clean, sub-second web software
   With live equalizer bars, real-time orders ticker, and smooth tab spring indicator
   ========================================================================= */
function SoftwareProductVisual() {
  const [activeTab, setActiveTab] = useState<"ops" | "orders" | "access">("ops");

  return (
    <div className="luxury-border-glow w-full flex flex-col justify-between p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-white via-[#FCFBF8] to-[#FAF9F5] border border-[var(--color-border)] shadow-xs select-none space-y-4 relative overflow-hidden">
      
      {/* Top Application Window Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pb-3 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[#D1D5DB]" />
            <span className="h-2 w-2 rounded-full bg-[#D1D5DB]" />
            <span className="h-2 w-2 rounded-full bg-[#D1D5DB]" />
          </div>
          <span className="font-mono text-[10px] sm:text-[10.5px] font-bold text-[#161B17] uppercase tracking-wider flex items-center gap-2">
            <span className="relative flex items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              <span className="absolute -inset-1 rounded-full bg-cyan-400/60 animate-sonar-ring" />
            </span>
            <span>CLIENT PORTAL</span>
            <span className="text-[#8E968F] hidden sm:inline">// LIVE SYSTEM DEMO</span>
          </span>
        </div>

        {/* View Switcher with Animated Spring Layout */}
        <div className="grid grid-cols-3 sm:flex items-center gap-1 bg-[#EAE9E2]/60 p-1 rounded-lg border border-[#D5D7CE] font-mono text-[10px] w-full sm:w-auto text-center">
          {(["ops", "orders", "access"] as const).map((tab) => {
            const isActive = activeTab === tab;
            const labels = {
              ops: { short: "OPS", full: "OPERATIONS" },
              orders: { short: "ORDERS", full: "LIVE ORDERS" },
              access: { short: "ACCESS", full: "SECURITY" },
            };
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative px-2 sm:px-2.5 py-1 rounded-md font-bold transition-all ${
                  isActive ? "text-[#161B17]" : "text-[#687069] hover:text-[#161B17]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="software-tab-pill"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    className="absolute inset-0 bg-white rounded-md shadow-2xs border border-[#D5D7CE] -z-10"
                  />
                )}
                <span className="sm:hidden">{labels[tab].short}</span>
                <span className="hidden sm:inline">{labels[tab].full}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main SaaS Interface Body */}
      <div className="p-3.5 sm:p-4 rounded-xl border border-[var(--color-border)] bg-white shadow-2xs space-y-3.5 min-h-[220px]">
        {activeTab === "ops" && (
          <div className="space-y-3">
            {/* 3 Real-time Metric Cards with subtle hover light */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-3 font-mono">
              <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-b from-[#FAF9F6] to-white border border-[#E2E4DC] hover:border-cyan-300 transition-all">
                <span className="text-[8px] sm:text-[9.5px] text-[#8E968F] uppercase block font-bold truncate">Orders</span>
                <span className="text-xs sm:text-lg font-black text-[#161B17] block mt-0.5 tracking-tight truncate">1,480</span>
                <span className="text-[7.5px] sm:text-[9px] text-emerald-700 font-semibold flex items-center gap-1 mt-0.5">
                  <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0" />
                  +22% speed
                </span>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-b from-[#FAF9F6] to-white border border-[#E2E4DC] hover:border-cyan-300 transition-all">
                <span className="text-[8px] sm:text-[9.5px] text-[#8E968F] uppercase block font-bold truncate">Latency</span>
                <span className="text-xs sm:text-lg font-black text-cyan-800 block mt-0.5 tracking-tight truncate">28ms</span>
                <span className="text-[7.5px] sm:text-[9px] text-cyan-700 font-semibold block mt-0.5 truncate">Sub-second</span>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-b from-[#FAF9F6] to-white border border-[#E2E4DC] hover:border-cyan-300 transition-all">
                <span className="text-[8px] sm:text-[9.5px] text-[#8E968F] uppercase block font-bold truncate">Errors</span>
                <span className="text-xs sm:text-lg font-black text-emerald-800 block mt-0.5 tracking-tight truncate">0.00%</span>
                <span className="text-[7.5px] sm:text-[9px] text-emerald-700 font-semibold block mt-0.5 truncate">Auto-valid</span>
              </div>
            </div>

            {/* Living Throughput Trend Chart with Equalizer Animation */}
            <div className="p-3.5 rounded-lg border border-[var(--color-border)] bg-[#FCFBF8] flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#161B17] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  SYSTEM THROUGHPUT MONITOR
                </span>
                <span className="text-xs text-[#687069] mt-0.5 block font-medium">
                  Continuous automated sync eliminates human copy-paste delays.
                </span>
              </div>
              {/* Animated Equalizer Wave Bars */}
              <div className="flex items-end gap-1.5 h-9 shrink-0 pr-1">
                <div className="w-2 bg-cyan-400 rounded-t-xs animate-bar-live-1" style={{ height: "45%" }} />
                <div className="w-2 bg-cyan-500 rounded-t-xs animate-bar-live-2" style={{ height: "70%" }} />
                <div className="w-2 bg-cyan-600 rounded-t-xs animate-bar-live-3" style={{ height: "55%" }} />
                <div className="w-2 bg-cyan-500 rounded-t-xs animate-bar-live-1" style={{ height: "85%" }} />
                <div className="w-2 bg-cyan-400 rounded-t-xs animate-bar-live-2" style={{ height: "65%" }} />
                <div className="w-2 bg-emerald-500 rounded-t-xs animate-bar-live-3" style={{ height: "100%" }} />
              </div>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="space-y-2 font-mono text-[11px]">
            <div className="flex items-center justify-between text-[#8E968F] text-[9.5px] px-2 pb-1 border-b">
              <span>ORDER / CLIENT</span>
              <span>ITEMS</span>
              <span>STATUS</span>
              <span>TIME</span>
            </div>
            {[
              { id: "#ORD-9410", client: "Acme Industrial", items: "12x Sensors", status: "FULFILLED", time: "1m ago", isNew: true },
              { id: "#ORD-9409", client: "Solar Nation", items: "4x Inverters", status: "DISPATCHED", time: "3m ago", isNew: false },
              { id: "#ORD-9408", client: "Apex Logistics", items: "28x Telemetry", status: "INVOICED", time: "6m ago", isNew: false },
            ].map((o) => (
              <div key={o.id} className="flex items-center justify-between p-2 rounded-md bg-[#FAF9F6] border border-[#E2E4DC] hover:border-cyan-200 transition-all">
                <span className="font-bold text-[#161B17] flex items-center gap-1.5">
                  {o.isNew && <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />}
                  {o.id} · {o.client}
                </span>
                <span className="text-[#687069] hidden sm:inline">{o.items}</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[9.5px] border border-emerald-200">
                  {o.status}
                </span>
                <span className="text-[#8E968F] text-[9.5px]">{o.time}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "access" && (
          <div className="p-3.5 rounded-lg bg-[#FAF9F6] border border-[#E2E4DC] space-y-2">
            <span className="font-mono text-[10px] font-bold text-[#161B17] flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-600" />
              ENTERPRISE SECURITY & ROLE-BASED ACCESS
            </span>
            <p className="text-xs text-[#687069] leading-relaxed">
              Every staff member only sees what they are authorized to see. Managers view financial dashboards, warehouse staff view barcode pickers, and customers access their self-serve portal.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[9.5px]">
              <span className="px-2 py-0.5 rounded bg-white border border-[#D5D7CE] text-[#161B17]">✓ Single Sign-On (SSO)</span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#D5D7CE] text-[#161B17]">✓ SOC2 Compliant Audits</span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#D5D7CE] text-[#161B17]">✓ Automated Hourly Backups</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer System Telemetry */}
      <div className="pt-2.5 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#687069]">
        <span>STACK: <strong className="text-[#161B17]">Next.js 16 · React 19 · PostgreSQL · Edge API</strong></span>
        <span className="text-cyan-800 font-bold flex items-center gap-1">
          <Zap className="h-3 w-3 text-cyan-600" />
          <span>Fast · Mobile-Responsive · Bespoke</span>
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   03 — CLOUD & DEVOPS SIMULATION: Global Multi-Region Cluster
   Shows zero-downtime deployment, automated healing, and 99.99% uptime guarantees
   With live cluster sonar pulses, canary laser sweep, and traffic surge auto-scale
   ========================================================================= */
function CloudPipelineVisual() {
  const [trafficSurge, setTrafficSurge] = useState(false);

  return (
    <div className="luxury-border-glow w-full flex flex-col justify-between p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-white via-[#FCFBF8] to-[#FAF9F5] border border-[var(--color-border)] shadow-xs select-none space-y-4 relative overflow-hidden">
      
      {/* Top Console Telemetry */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pb-3 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="absolute -inset-1 rounded-full bg-emerald-400/60 animate-sonar-ring" />
          </div>
          <span className="font-mono text-[10px] sm:text-[10.5px] font-bold text-[#161B17] uppercase tracking-wider">
            CLOUD CLUSTER <span className="text-[#8E968F] hidden sm:inline">// MULTI-REGION</span>
          </span>
        </div>

        {/* Traffic Spike Simulation Button */}
        <button
          type="button"
          onClick={() => setTrafficSurge((prev) => !prev)}
          className={`flex items-center justify-center gap-1.5 px-3 py-1 rounded-md font-mono text-[10px] font-bold border transition-all w-full sm:w-auto ${
            trafficSurge
              ? "bg-[#161B17] text-white border-[#161B17] shadow-xs"
              : "bg-white text-[#161B17] border-[var(--color-border-strong)] hover:border-cyan-600"
          }`}
        >
          <Zap className={`h-3 w-3 ${trafficSurge ? "text-amber-400" : "text-cyan-600"}`} />
          <span>{trafficSurge ? "NORMAL LOAD (RESET)" : "TEST TRAFFIC SPIKE (+500%)"}</span>
        </button>
      </div>

      {/* Global Cloud Regions Grid with Live Sonar Ripples */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-1">
        {[
          { region: "US-EAST (Virginia)", ping: trafficSurge ? "16ms" : "12ms", nodes: trafficSurge ? "6 Nodes Active" : "2 Nodes", health: "100% NOMINAL" },
          { region: "EU-CENTRAL (Frankfurt)", ping: trafficSurge ? "19ms" : "14ms", nodes: trafficSurge ? "6 Nodes Active" : "2 Nodes", health: "100% NOMINAL" },
          { region: "AP-SOUTHEAST (Singapore)", ping: trafficSurge ? "32ms" : "26ms", nodes: trafficSurge ? "4 Nodes Active" : "2 Nodes", health: "100% NOMINAL" },
        ].map((r, idx) => (
          <div key={idx} className="p-3.5 rounded-xl border border-[var(--color-border)] bg-white shadow-2xs font-mono relative overflow-hidden group hover:border-cyan-300 transition-all">
            <div className="flex items-center justify-between pb-1.5 border-b border-neutral-100 text-[10px]">
              <span className="font-bold text-[#161B17]">{r.region}</span>
              <div className="relative flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="absolute -inset-1 rounded-full bg-emerald-400/50 animate-sonar-ring" />
              </div>
            </div>
            <div className="mt-2.5 flex items-baseline justify-between">
              <span className="text-sm font-bold text-[#161B17]">{r.ping}</span>
              <span className={`text-[10px] font-bold ${trafficSurge ? "text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200" : "text-cyan-800"}`}>
                {r.nodes}
              </span>
            </div>
            <span className="mt-1 text-[9px] text-emerald-700 font-semibold block">{r.health}</span>
          </div>
        ))}
      </div>

      {/* Zero-Downtime Deployment Pipe with Laser Scan */}
      <div className="p-4 rounded-xl border border-[var(--color-border)] bg-white shadow-2xs space-y-2.5 relative overflow-hidden">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="font-bold text-[#161B17] flex items-center gap-1.5">
            <Server className="h-3.5 w-3.5 text-cyan-700" />
            ZERO-DOWNTIME CANARY DEPLOYMENT PIPELINE
          </span>
          <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
            0 DROPPED REQUESTS
          </span>
        </div>

        {/* Pipeline Bar with Animated Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 pt-1 font-mono text-[9px] sm:text-[9.5px] text-center">
          <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center gap-1">
            <Check className="h-3 w-3 shrink-0" />
            <span>01 BUILD</span>
          </div>
          <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center gap-1">
            <Check className="h-3 w-3 shrink-0" />
            <span>02 TEST</span>
          </div>
          <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 font-bold animate-pulse flex items-center justify-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
            <span>03 CANARY</span>
          </div>
          <div className="p-1.5 sm:p-2 rounded-lg bg-[#FAF9F6] border border-[#E2E4DC] text-[#161B17] font-bold">
            04 LIVE
          </div>
        </div>
      </div>

      {/* Footer System Telemetry */}
      <div className="pt-2.5 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#687069]">
        <span>SLA: <strong className="text-emerald-700">99.99% Guaranteed Uptime</strong></span>
        <span>SECURITY: <strong className="text-[#161B17]">Automated SSL · DDoS Shield · Daily Backups</strong></span>
      </div>
    </div>
  );
}

/* =========================================================================
   04 — BUSINESS SYSTEMS & SUPPLY CHAIN SIMULATION: 4-Way Sync Nexus
   Shows online store, warehouse, accounting, and shipping staying 100% in sync
   With animated interconnecting conduits, living sync events, and zero drift
   ========================================================================= */
function BusinessSystemsVisual() {
  const [syncCount, setSyncCount] = useState(240);
  const [isSyncing, setIsSyncing] = useState(false);

  const triggerSync = () => {
    setIsSyncing(true);
    setSyncCount((prev) => prev + 14);
    setTimeout(() => setIsSyncing(false), 550);
  };

  return (
    <div className="luxury-border-glow w-full flex flex-col justify-between p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-white via-[#FCFBF8] to-[#FAF9F5] border border-[var(--color-border)] shadow-xs select-none space-y-4 relative overflow-hidden">
      
      {/* Top Console Telemetry */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pb-3 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="absolute -inset-1 rounded-full bg-emerald-400/60 animate-sonar-ring" />
          </div>
          <span className="font-mono text-[10px] sm:text-[10.5px] font-bold text-[#161B17] uppercase tracking-wider">
            CONNECTED SYSTEMS <span className="text-[#8E968F] hidden sm:inline">// 4-WAY MATRIX</span>
          </span>
        </div>

        {/* Sync Trigger Action */}
        <button
          type="button"
          onClick={triggerSync}
          disabled={isSyncing}
          className="flex items-center justify-center gap-1.5 px-3 py-1 rounded-md bg-white border border-[var(--color-border-strong)] hover:border-cyan-600 font-mono text-[10px] font-bold text-[#161B17] shadow-2xs transition-all active:scale-95 w-full sm:w-auto"
        >
          <RefreshCw className={`h-3 w-3 text-cyan-600 ${isSyncing ? "animate-spin text-emerald-600" : ""}`} />
          <span>{isSyncing ? "RECONCILING..." : "TRIGGER TEST SYNC"}</span>
        </button>
      </div>

      {/* 4 Connected Platforms Grid with Energy Borders */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 my-1">
        {[
          { name: "Online Store", tool: "Shopify / Web", metric: "Orders Placed", status: "Auto-Captured", color: "border-cyan-200" },
          { name: "Warehouse Stock", tool: "Barcode ERP", metric: "Inventory Deducted", status: "Zero Drift", color: "border-emerald-200" },
          { name: "Accounting", tool: "QuickBooks / Ledger", metric: "Invoice Reconciled", status: "Tax-Ready", color: "border-cyan-200" },
          { name: "Freight Fleet", tool: "Shipping Carrier", metric: "Labels Printed", status: "Live Tracking", color: "border-emerald-200" },
        ].map((node, i) => (
          <div 
            key={i} 
            className={`p-2.5 sm:p-3.5 rounded-xl border ${node.color} bg-white shadow-2xs font-mono text-center flex flex-col justify-between hover:border-cyan-400 transition-all ${
              isSyncing ? "ring-2 ring-emerald-300 ring-offset-1" : ""
            }`}
          >
            <div>
              <span className="text-[10px] font-bold text-[#161B17] block truncate">{node.name}</span>
              <span className="text-[9px] text-[#8E968F] block mt-0.5 truncate">{node.tool}</span>
            </div>
            <div className="mt-2.5 sm:mt-3 pt-2 border-t border-neutral-100">
              <span className="text-[9px] sm:text-[9.5px] font-bold text-emerald-800 block flex items-center justify-center gap-1 truncate">
                <Check className="h-3 w-3 text-emerald-600 shrink-0" />
                {node.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Live Data Stream Activity Feed */}
      <div className="p-3 sm:p-4 rounded-xl border border-[var(--color-border)] bg-white shadow-2xs space-y-2.5 font-mono text-[10.5px]">
        <div className="flex items-center justify-between text-[#8E968F] text-[9.5px] pb-1.5 border-b gap-2">
          <span className="font-bold text-[#161B17] flex items-center gap-1.5 truncate">
            <Database className="h-3.5 w-3.5 text-cyan-700 shrink-0" />
            <span className="truncate">LIVE RECONCILIATION</span>
          </span>
          <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0 text-[9px] sm:text-[9.5px]">
            {syncCount} SYNC EVENTS
          </span>
        </div>

        <div className="space-y-1.5 pt-0.5">
          <div className="flex items-center justify-between text-[#374151] p-2 rounded-lg bg-[#FAF9F6] border border-[#E2E4DC] min-w-0">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-xs truncate">Shopify order #8491 ➔ Stock deducted</span>
            </div>
            <span className="text-[#8E968F] text-[9px] shrink-0 ml-2">0.2s</span>
          </div>

          <div className="flex items-center justify-between text-[#374151] p-2 rounded-lg bg-[#FAF9F6] border border-[#E2E4DC] min-w-0">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
              <span className="text-xs truncate">Invoice auto-posted to QuickBooks</span>
            </div>
            <span className="text-[#8E968F] text-[9px] shrink-0 ml-2">0.8s</span>
          </div>
        </div>
      </div>

      {/* Footer System Telemetry */}
      <div className="pt-2.5 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#687069]">
        <span>ELIMINATES: <strong className="text-rose-700">Spreadsheet errors, lost emails & duplicate entry</strong></span>
        <span className="text-emerald-700 font-bold flex items-center gap-1">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
          <span>100% Data Accuracy</span>
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   Master ServiceVisualStage: Luxury Interactive Understandable 2D Simulations
   With Dynamic Cursor Spotlight, Border Beam Glow, and Staggered Transitions
   ========================================================================= */
export function ServiceVisualStage({ activeId }: ServiceVisualStageProps) {
  const currentMeta = SERVICE_META[activeId] || SERVICE_META["ai-automation"];
  const stageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col justify-between w-full min-h-[500px] select-none"
    >
      {/* Luxury Interactive Cursor Radial Spotlight */}
      {isHovered && (
        <div 
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 -m-3 sm:-m-4 rounded-3xl"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 216, 228, 0.08), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Visual Simulation Display with Fluid Spring Transitions */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full min-h-[380px]">
        <AnimatePresence mode="wait">
          {activeId === "ai-automation" && (
            <motion.div
              key="ai-automation"
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -12 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <AiWorkflowVisual />
            </motion.div>
          )}

          {activeId === "software-engineering" && (
            <motion.div
              key="software-engineering"
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -12 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <SoftwareProductVisual />
            </motion.div>
          )}

          {activeId === "cloud-devops" && (
            <motion.div
              key="cloud-devops"
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -12 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <CloudPipelineVisual />
            </motion.div>
          )}

          {activeId === "business-systems" && (
            <motion.div
              key="business-systems"
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -12 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <BusinessSystemsVisual />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Reserved Description Surface with Direct Action */}
      <div className="relative z-10 mt-4 border-t border-[var(--color-border)] pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 min-h-[60px]">
          <div className="flex-1 pr-2">
            <span className="font-mono text-[10.5px] font-bold text-[var(--color-brand-strong)] tracking-wider uppercase">
              {currentMeta.discipline}
            </span>
            <p className="mt-0.5 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {currentMeta.explanation}
            </p>
          </div>
          <Link
            href={currentMeta.href}
            className="inline-flex shrink-0 items-center gap-1.5 self-start sm:self-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2 text-xs font-semibold text-[var(--color-text-primary)] hover:border-[var(--color-brand-strong)] hover:text-[var(--color-brand-strong)] transition-all group shadow-2xs hover:shadow-xs active:scale-95"
          >
            <span>{currentMeta.linkText}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[var(--color-brand-strong)]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
