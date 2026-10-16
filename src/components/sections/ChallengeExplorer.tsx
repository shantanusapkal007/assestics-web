"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { KineticText } from "@/components/motion/KineticText";
import { ArrowRight, Bot, Layers, Cloud, Boxes } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface Challenge {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  prompt: string;
  category: string;
  solutionTitle: string;
  solutionDescription: string;
  architecturalResult: string;
  targetServiceUrl: string;
  targetServiceLabel: string;
}

const CHALLENGES: Challenge[] = [
  {
    id: "repetitive-work",
    icon: Bot,
    prompt: "Too much repetitive manual work slowing customer responses.",
    category: "AI & WORKFLOW AUTOMATION",
    solutionTitle: "Autonomous Agents & WhatsApp Workflows",
    solutionDescription:
      "We build conversational AI assistants and multi-agent knowledge bases that qualify incoming inquiries, extract document data, and trigger enterprise tasks with zero delay.",
    architecturalResult: "Eliminates repetitive data entry and reduces inquiry response times from hours to seconds.",
    targetServiceUrl: "/services/ai-automation",
    targetServiceLabel: "Explore AI & Automation",
  },
  {
    id: "disconnected-systems",
    icon: Layers,
    prompt: "Disconnected software tools and duplicate data entry across teams.",
    category: "SYSTEMS INTEGRATION & SOFTWARE",
    solutionTitle: "Unified Business Platforms & API Meshes",
    solutionDescription:
      "We design custom web applications and API pipelines that synchronize your customer databases, payment ledgers, and operational tools into a single source of truth.",
    architecturalResult: "Bridges legacy silos into a real-time event-driven ledger with zero loss.",
    targetServiceUrl: "/services/software-engineering",
    targetServiceLabel: "Explore Software Engineering",
  },
  {
    id: "fragile-infrastructure",
    icon: Cloud,
    prompt: "Software that suffers from deployment delays, downtime, or scaling limits.",
    category: "CLOUD & RELIABILITY ENGINEERING",
    solutionTitle: "Zero-Downtime Cloud & CI/CD Pipelines",
    solutionDescription:
      "We replace manual server patching with automated containerized infrastructure (Docker, Kubernetes, Terraform) and canary deployments with automated rollback.",
    architecturalResult: "Guarantees blue/green rolling deployments with sub-second health verification.",
    targetServiceUrl: "/services/cloud-devops",
    targetServiceLabel: "Explore Cloud Architecture",
  },
  {
    id: "operational-opacity",
    icon: Boxes,
    prompt: "Operational and shopfloor information that is difficult to track.",
    category: "DIGITAL FACTORY & SUPPLY CHAIN",
    solutionTitle: "Shopfloor Execution & Supply Chain Twins",
    solutionDescription:
      "Drawing from Munich Digital Factory methodology, we deploy ruggedized shopfloor tablet interfaces and simulation models that track inventory, throughput, and lead times in real time.",
    architecturalResult: "Transforms paper clipboards into predictive inventory tracking and transit models.",
    targetServiceUrl: "/services/supply-chain",
    targetServiceLabel: "Explore Supply Chain Solutions",
  },
];

export function ChallengeExplorer() {
  const [selectedId, setSelectedId] = useState(CHALLENGES[0].id);
  const activeChallenge = CHALLENGES.find((c) => c.id === selectedId) || CHALLENGES[0];

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28 bg-[var(--color-surface-muted)]/50 border-y border-[var(--color-border)]"
      aria-labelledby="challenge-explorer-title"
    >
      <Container>
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-strong)] uppercase">
            DIAGNOSTIC MATRIX · PROBLEM TO SOLUTION
          </span>
          <h2
            id="challenge-explorer-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
          >
            <KineticText triggerOnScroll>
              Technology should solve the problem, not add complexity.
            </KineticText>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-text-secondary)]">
            Select the operational friction currently holding your organization back to see our engineered response.
          </p>
        </div>

        {/* Interactive Matrix Grid */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left Column (50%): 4 Diagnostic Selectors */}
          <div className="space-y-3 lg:col-span-6" role="tablist">
            {CHALLENGES.map((challenge, index) => {
              const isSelected = challenge.id === selectedId;
              const Icon = challenge.icon;
              return (
                <button
                  key={challenge.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(challenge.id)}
                  className={cn(
                    "flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]",
                    isSelected
                      ? "border-[var(--color-brand-primary)] bg-[var(--color-surface)] shadow-xs"
                      : "border-[var(--color-border)] bg-[var(--color-canvas)] hover:border-[var(--color-brand-primary)]/50 hover:bg-[var(--color-surface)]/60"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors",
                      isSelected
                        ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-wash)] text-[var(--color-brand-strong)]"
                        : "border-[var(--color-border)] bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)]"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                      CHALLENGE 0{index + 1}
                    </span>
                    <p
                      className={cn(
                        "mt-1 text-sm font-semibold transition-colors sm:text-base",
                        isSelected ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]"
                      )}
                    >
                      {challenge.prompt}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column (50%): Connected Solution Resolution Panel */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-xs lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChallenge.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="flex h-full flex-col justify-between"
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                    <span className="font-mono text-xs font-semibold text-[var(--color-brand-strong)] uppercase">
                      {activeChallenge.category}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--color-text-tertiary)]">
                      VERIFIED ARCHITECTURE
                    </span>
                  </div>

                  {/* Solution Heading */}
                  <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
                    {activeChallenge.solutionTitle}
                  </h3>

                  {/* Explanation */}
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                    {activeChallenge.solutionDescription}
                  </p>

                  {/* Engineered Outcome */}
                  <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-4">
                    <span className="font-mono text-[11px] font-semibold text-[var(--color-text-tertiary)] uppercase">
                      SYSTEM OUTCOME:
                    </span>
                    <p className="mt-1 font-mono text-xs font-bold text-[var(--color-text-primary)]">
                      {activeChallenge.architecturalResult}
                    </p>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="mt-8 pt-4 border-t border-[var(--color-border)]">
                  <Link
                    href={activeChallenge.targetServiceUrl}
                    className="group inline-flex items-center gap-2 font-mono text-sm font-bold text-[var(--color-brand-strong)] hover:text-[var(--color-brand-primary)]"
                  >
                    <span>{activeChallenge.targetServiceLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
