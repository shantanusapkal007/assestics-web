import React from "react";

export function SceneFallback() {
  return (
    <div
      className="relative w-full h-full min-h-[420px] md:min-h-[560px] flex items-center justify-center p-6 select-none"
      aria-label="The Assestics Assembly - Architectural System Model"
    >
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E3DC_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />

      {/* Isometric SVG Representation of The Assestics Assembly */}
      <svg
        viewBox="0 0 600 500"
        className="w-full max-w-[540px] h-auto drop-shadow-[0_12px_32px_rgba(32,39,34,0.06)] relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Foundation Grid Floor */}
        <polygon
          points="300,380 480,290 300,200 120,290"
          fill="#F3F2ED"
          stroke="#E2E3DC"
          strokeWidth="1.5"
        />

        {/* Level 1: Foundation Plate (DevOps & Infrastructure) */}
        <g className="transition-transform duration-700 hover:translate-y-[-2px]">
          {/* Top face */}
          <polygon
            points="300,340 450,265 330,205 180,280"
            fill="#FFFFFF"
            stroke="#E2E3DC"
            strokeWidth="1.5"
          />
          {/* Left extrusion */}
          <polygon
            points="180,280 300,340 300,355 180,295"
            fill="#EAE9E2"
            stroke="#E2E3DC"
            strokeWidth="1.5"
          />
          {/* Right extrusion */}
          <polygon
            points="300,340 450,265 450,280 300,355"
            fill="#DCDDD5"
            stroke="#E2E3DC"
            strokeWidth="1.5"
          />
          {/* Brand cyan circuit line */}
          <path
            d="M220,270 L300,310 L410,255"
            stroke="#38D8E4"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* Level 2: Interconnection Core (Central Orchestration Nexus) */}
        <g>
          {/* Cylinder central pillar */}
          <path
            d="M285,250 C285,240 315,240 315,250 L315,290 C315,300 285,300 285,290 Z"
            fill="#202722"
          />
          <ellipse cx="300" cy="245" rx="15" ry="6" fill="#38D8E4" />
        </g>

        {/* Level 3: Intermediate Plate (AI & Automation Brain) */}
        <g className="transition-transform duration-700 hover:translate-y-[-4px]">
          {/* Top face shifted right per genuine Assestics logo motif */}
          <polygon
            points="340,240 470,175 370,125 240,190"
            fill="#FFFFFF"
            stroke="#E2E3DC"
            strokeWidth="1.5"
          />
          {/* Left extrusion */}
          <polygon
            points="240,190 340,240 340,252 240,202"
            fill="#EAE9E2"
            stroke="#E2E3DC"
            strokeWidth="1.5"
          />
          {/* Right extrusion */}
          <polygon
            points="340,240 470,175 470,187 340,252"
            fill="#DCDDD5"
            stroke="#E2E3DC"
            strokeWidth="1.5"
          />
          {/* Micro telemetry nodes */}
          <circle cx="340" cy="210" r="4" fill="#38D8E4" />
          <circle cx="390" cy="180" r="3" fill="#0891B2" />
          <path
            d="M340,210 L390,180 L430,160"
            stroke="#0891B2"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
        </g>

        {/* Level 4: Upper Plate (Interface & Digital Operations) */}
        <g className="transition-transform duration-700 hover:translate-y-[-6px]">
          {/* Top face shifted left per genuine Assestics logo motif */}
          <polygon
            points="250,150 370,90 280,45 160,105"
            fill="#202722"
            stroke="#121613"
            strokeWidth="1.5"
          />
          {/* Left extrusion */}
          <polygon
            points="160,105 250,150 250,162 160,117"
            fill="#121613"
          />
          {/* Right extrusion */}
          <polygon
            points="250,150 370,90 370,102 250,162"
            fill="#28302A"
          />
          {/* Glowing cyan core bar */}
          <polygon
            points="230,130 330,80 310,70 210,120"
            fill="#38D8E4"
            opacity="0.9"
          />
        </g>

        {/* Inter-system Data conduits */}
        <path
          d="M210,120 C180,180 180,240 220,270"
          stroke="#38D8E4"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M370,90 C440,130 430,210 410,255"
          stroke="#0891B2"
          strokeWidth="1.75"
          fill="none"
        />

        {/* Dynamic pulse elements */}
        <circle cx="210" cy="120" r="5" fill="#38D8E4">
          <animate
            attributeName="r"
            values="4;6;4"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="410" cy="255" r="4" fill="#38D8E4" />

        {/* Monospace Architectural Annotations */}
        <text
          x="120"
          y="315"
          fontFamily="monospace"
          fontSize="9"
          letterSpacing="1"
          fill="#687069"
        >
          01 // INFRASTRUCTURE
        </text>
        <text
          x="440"
          y="280"
          fontFamily="monospace"
          fontSize="9"
          letterSpacing="1"
          fill="#0891B2"
        >
          02 // AI ORCHESTRATION
        </text>
        <text
          x="140"
          y="80"
          fontFamily="monospace"
          fontSize="9"
          letterSpacing="1"
          fill="#202722"
          fontWeight="bold"
        >
          03 // INTERFACE &amp; SCALE
        </text>
      </svg>
    </div>
  );
}
