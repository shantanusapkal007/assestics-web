import React from "react";

/**
 * ArchitecturalIcons: High-end bespoke engineering glyphs.
 * Replaces generic cliché AI 4-pointed sparkle stars (✨) with
 * precision cybernetic lattice, neural nodes, and system marks.
 */

// 1. Agent Nexus Icon: Central autonomous processing core with 4 directional telemetry nodes
export function AgentNexusIcon({
  className = "h-3.5 w-3.5",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Central Autonomous Core */}
      <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" />
      {/* 4 Directional Satellite Nodes */}
      <circle cx="4" cy="4" r="1.75" />
      <circle cx="20" cy="4" r="1.75" />
      <circle cx="20" cy="20" r="1.75" />
      <circle cx="4" cy="20" r="1.75" />
      {/* Laser Conduits */}
      <line x1="5.5" y1="5.5" x2="8.5" y2="8.5" />
      <line x1="18.5" y1="5.5" x2="15.5" y2="8.5" />
      <line x1="18.5" y1="18.5" x2="15.5" y2="15.5" />
      <line x1="5.5" y1="18.5" x2="8.5" y2="15.5" />
    </svg>
  );
}

// 2. Cognitive Swarm Icon: 3 Interconnected Autonomous Agent Nodes
export function CognitiveSwarmIcon({
  className = "h-3.5 w-3.5",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Top Node */}
      <circle cx="12" cy="4.5" r="2.5" />
      {/* Bottom Left Node */}
      <circle cx="5" cy="18.5" r="2.5" />
      {/* Bottom Right Node */}
      <circle cx="19" cy="18.5" r="2.5" />
      {/* Vector Conduit Triangle */}
      <line x1="10" y1="6.5" x2="6.5" y2="16.5" />
      <line x1="14" y1="6.5" x2="17.5" y2="16.5" />
      <line x1="7.5" y1="18.5" x2="16.5" y2="18.5" />
      {/* Center Singularity Node */}
      <circle cx="12" cy="14" r="1.25" fill="currentColor" />
    </svg>
  );
}

// 3. Cybernetic Lattice Icon: Diamond Precision Reticle with Orthogonal Coordinates
export function CyberneticLatticeIcon({
  className = "h-3.5 w-3.5",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <polygon points="12 2 22 12 12 22 2 12" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="5" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="19" />
      <line x1="5" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="19" y2="12" />
    </svg>
  );
}

// 4. Autonomous Loop Icon: Deterministic State Machine Cycle
export function AutonomousLoopIcon({
  className = "h-3.5 w-3.5",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
