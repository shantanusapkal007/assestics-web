"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  Terminal, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Cloud, 
  Boxes, 
  Compass, 
  Calendar, 
  Copy, 
  Grid, 
  Activity, 
  Check, 
  CornerDownLeft, 
  X
} from "lucide-react";
import { AgentNexusIcon } from "@/components/ui/ArchitecturalIcons";

interface CommandItem {
  id: string;
  group: "Navigation" | "Capabilities" | "Diagnostics & Tools";
  label: string;
  hint?: string;
  icon: React.ElementType;
  action: () => void;
  keywords?: string[];
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [pingResult, setPingResult] = useState<string | null>(null);
  const [isGridActive, setIsGridActive] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Toggle grid overlay
  const toggleGrid = useCallback(() => {
    const nextState = !isGridActive;
    setIsGridActive(nextState);
    if (nextState) {
      document.documentElement.setAttribute("data-grid", "on");
    } else {
      document.documentElement.removeAttribute("data-grid");
    }
  }, [isGridActive]);

  // Simulate regional latency test
  const runPingTest = useCallback(() => {
    setPingResult("Measuring...");
    setTimeout(() => {
      const pings = [
        "us-east (Virginia): 18ms",
        "eu-west (Frankfurt): 24ms",
        "ap-southeast (Tokyo): 62ms",
        "LLM Inference P95: 42ms"
      ];
      setPingResult(pings[Math.floor(Math.random() * pings.length)]);
      setTimeout(() => setPingResult(null), 4000);
    }, 600);
  }, []);

  // Copy email
  const copyEmail = useCallback(() => {
    navigator.clipboard?.writeText("contact@assestics.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }, []);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      group: "Navigation",
      label: "Home Overview",
      hint: "/",
      icon: Compass,
      action: () => { router.push("/"); setIsOpen(false); },
      keywords: ["main", "landing", "root"]
    },
    {
      id: "nav-work",
      group: "Navigation",
      label: "Selected Work & Case Studies",
      hint: "/work",
      icon: Layers,
      action: () => { router.push("/work"); setIsOpen(false); },
      keywords: ["portfolio", "projects", "solar nation", "erp", "supply chain"]
    },
    {
      id: "nav-services",
      group: "Navigation",
      label: "All Engineering Services",
      hint: "/services",
      icon: Boxes,
      action: () => { router.push("/services"); setIsOpen(false); },
      keywords: ["capabilities", "pillars", "offerings"]
    },
    {
      id: "nav-about",
      group: "Navigation",
      label: "About Assestics & Philosophy",
      hint: "/about",
      icon: Compass,
      action: () => { router.push("/about"); setIsOpen(false); },
      keywords: ["company", "team", "values", "studio"]
    },
    {
      id: "nav-contact",
      group: "Navigation",
      label: "Direct Consultation & Contact",
      hint: "/contact",
      icon: Calendar,
      action: () => { router.push("/contact"); setIsOpen(false); },
      keywords: ["schedule", "hire", "discuss", "quote", "pricing"]
    },

    // Capabilities
    {
      id: "cap-ai",
      group: "Capabilities",
      label: "AI Automation & Autonomous Agents",
      hint: "Capability 01",
      icon: AgentNexusIcon,
      action: () => { router.push("/services#ai-automation"); setIsOpen(false); },
      keywords: ["llm", "agents", "mcp", "workflow", "rag", "langchain"]
    },
    {
      id: "cap-software",
      group: "Capabilities",
      label: "Custom Software Engineering",
      hint: "Capability 02",
      icon: Terminal,
      action: () => { router.push("/services#custom-software"); setIsOpen(false); },
      keywords: ["fullstack", "nextjs", "react", "fastapi", "typescript"]
    },
    {
      id: "cap-cloud",
      group: "Capabilities",
      label: "Cloud Architecture & Resilient DevOps",
      hint: "Capability 03",
      icon: Cloud,
      action: () => { router.push("/services#cloud-architecture"); setIsOpen(false); },
      keywords: ["aws", "kubernetes", "docker", "ci/cd", "terraform", "scale"]
    },
    {
      id: "cap-supply",
      group: "Capabilities",
      label: "Supply Chain & ERP Systems",
      hint: "Capability 04",
      icon: Boxes,
      action: () => { router.push("/services#supply-chain"); setIsOpen(false); },
      keywords: ["sap", "logistics", "digital twin", "inventory", "integration"]
    },

    // Diagnostics & Tools
    {
      id: "tool-grid",
      group: "Diagnostics & Tools",
      label: isGridActive ? "Disable Blueprint Grid HUD" : "Enable Blueprint Grid HUD",
      hint: "⌥G",
      icon: Grid,
      action: () => { toggleGrid(); setIsOpen(false); },
      keywords: ["ruler", "columns", "guides", "hud", "layout", "measurement"]
    },
    {
      id: "tool-ping",
      group: "Diagnostics & Tools",
      label: pingResult ? `Live Cluster Latency: ${pingResult}` : "Test System Cluster Latency",
      hint: "Ping",
      icon: Activity,
      action: () => { runPingTest(); },
      keywords: ["speed", "diagnostic", "latency", "health", "uptime", "monitor"]
    },
    {
      id: "tool-email",
      group: "Diagnostics & Tools",
      label: copied ? "Email Copied to Clipboard!" : "Copy Engineering Direct Email",
      hint: "contact@assestics.com",
      icon: copied ? Check : Copy,
      action: () => { copyEmail(); },
      keywords: ["mail", "reach", "inquiry", "write"]
    }
  ];

  // Filtering
  const filtered = query.trim() === ""
    ? commands
    : commands.filter((c) => {
        const q = query.toLowerCase();
        return (
          c.label.toLowerCase().includes(q) ||
          c.group.toLowerCase().includes(q) ||
          (c.hint && c.hint.toLowerCase().includes(q)) ||
          (c.keywords && c.keywords.some((k) => k.toLowerCase().includes(q)))
        );
      });

  // Hotkey listeners: ⌘K or Ctrl+K & ⌥G / Alt+G & custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.altKey && !e.metaKey && !e.ctrlKey && e.code === "KeyG") {
        e.preventDefault();
        toggleGrid();
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen, toggleGrid]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  // Lock scroll with Lenis when Command Palette is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => {
      lenis?.start();
    };
  }, [isOpen]);

  // Arrow key navigation inside list
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector(`[data-active="true"]`);
      activeEl?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Assestics Systems Command Terminal"
    >
      {/* Backdrop with frosted blur */}
      <div 
        className="fixed inset-0 bg-[#202722]/40 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[#FCFBF8] shadow-[0_25px_60px_-15px_rgba(32,39,34,0.25)] ring-1 ring-[var(--color-border)] animate-in zoom-in-95 duration-200">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-2 bg-[var(--color-surface-muted)]/40 font-mono text-[11px] text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
              SYS.CLI
            </span>
            <span className="font-bold uppercase tracking-wider text-[var(--color-brand-contrast)]">
              ASSESTICS // SYSTEMS COMMAND TERMINAL
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-[2px] border border-[var(--color-border)] bg-black/5 px-1.5 py-0.5 font-mono text-[10px]">ESC to close</span>
          </div>
        </div>

        {/* Input Bar */}
        <div className="relative flex items-center border-b border-[var(--color-border)] px-4 py-3.5 bg-white">
          <Search className="h-4 w-4 shrink-0 text-[var(--color-brand-strong)]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Type a command, search capabilities, or test diagnostics..."
            className="ml-3 flex-1 bg-transparent text-sm font-medium text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none"
            aria-autocomplete="list"
            aria-controls="command-list"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Commands List */}
        <ul 
          ref={listRef}
          id="command-list"
          className="max-h-[360px] overflow-y-auto p-2 space-y-1 divide-y divide-[var(--color-border-subtle)]"
          role="listbox"
        >
          {filtered.length === 0 ? (
            <li className="py-10 text-center font-mono text-xs text-[var(--color-text-secondary)]">
              No matching commands found for &ldquo;{query}&rdquo;. Try &ldquo;ai&rdquo;, &ldquo;cloud&rdquo;, or &ldquo;ping&rdquo;.
            </li>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              const showGroupHeader = idx === 0 || filtered[idx - 1].group !== item.group;

              return (
                <React.Fragment key={item.id}>
                  {showGroupHeader && (
                    <li 
                      className="px-3 pt-3 pb-1 font-mono text-[10px] font-bold tracking-wider text-[var(--color-brand-contrast)] uppercase"
                      role="presentation"
                    >
                      {item.group}
                    </li>
                  )}
                  <li
                    role="option"
                    aria-selected={isSelected}
                    data-active={isSelected}
                    onClick={() => item.action()}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`group flex items-center justify-between rounded-xl px-3 py-2.5 text-xs transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[rgba(56,216,228,0.12)] text-[var(--color-brand-contrast)] font-medium shadow-sm"
                        : "text-[var(--color-text-primary)] hover:bg-black/5"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isSelected 
                          ? "border-[var(--color-brand-primary)] bg-white text-[var(--color-brand-strong)]" 
                          : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)]"
                      }`}>
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span className="truncate font-medium">{item.label}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {item.hint && (
                        <span className={`font-mono text-[11px] px-2 py-0.5 rounded border ${
                          isSelected
                            ? "border-[var(--color-brand-strong)]/30 bg-white text-[var(--color-brand-contrast)]"
                            : "border-[var(--color-border)] bg-black/[0.02] text-[var(--color-text-tertiary)]"
                        }`}>
                          {item.hint}
                        </span>
                      )}
                      {isSelected && (
                        <CornerDownLeft className="h-3.5 w-3.5 text-[var(--color-brand-strong)] opacity-80" />
                      )}
                    </div>
                  </li>
                </React.Fragment>
              );
            })
          )}
        </ul>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between border-t border-[var(--color-border)] bg-[var(--color-surface-muted)]/30 px-4 py-2.5 font-mono text-[10px] text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--color-brand-contrast)] font-semibold">
            <span>HOTKEY: ⌘K / CTRL+K</span>
          </div>
        </div>
      </div>
    </div>
  );
}
