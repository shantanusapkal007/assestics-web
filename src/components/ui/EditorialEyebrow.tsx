import React from "react";
import { cn } from "@/lib/utils";

export interface EditorialEyebrowProps {
  step?: string;
  label: string;
  variant?: "bracket" | "plate" | "rule" | "chip";
  spec?: string;
  className?: string;
}

/**
 * EditorialEyebrow: Replaces generic AI-generated rounded pill bubble badges
 * with museum-grade Swiss/Editorial architectural typographic markers.
 * (Zero rounded-full bubbles, zero cliché pulsing dots).
 */
export function EditorialEyebrow({
  step,
  label,
  variant = "plate",
  spec,
  className,
}: EditorialEyebrowProps) {
  if (variant === "rule") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-3 font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-secondary)] select-none",
          className
        )}
      >
        <span className="w-5 h-[1.5px] bg-[var(--color-brand-strong)]" />
        {step && (
          <span className="text-[var(--color-brand-strong)] font-bold">
            {step} //
          </span>
        )}
        <span className="text-[var(--color-text-primary)] font-bold">{label}</span>
        {spec && (
          <span className="text-[var(--color-text-tertiary)] font-normal">// {spec}</span>
        )}
      </div>
    );
  }

  if (variant === "bracket") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--color-text-primary)] select-none",
          className
        )}
      >
        <span className="text-[var(--color-brand-strong)] font-bold">[</span>
        {step && (
          <span className="text-[var(--color-brand-strong)] font-black">
            {step} //
          </span>
        )}
        <span className="tracking-[0.16em]">{label}</span>
        {spec && (
          <span className="text-[var(--color-text-tertiary)] font-normal">:: {spec}</span>
        )}
        <span className="text-[var(--color-brand-strong)] font-bold">]</span>
      </div>
    );
  }

  if (variant === "chip") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 px-2.5 py-1 rounded-[3px] bg-[var(--color-surface)] border border-[var(--color-border-strong)]/80 shadow-2xs select-none hover:border-[var(--color-brand-strong)] transition-colors",
          className
        )}
      >
        {step && (
          <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px] tracking-wider">
            {step}
          </span>
        )}
        <span className="h-3 w-[1px] bg-[var(--color-border)]" />
        <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-[var(--color-text-primary)] uppercase">
          {label}
        </span>
      </div>
    );
  }

  // Default: "plate" — Crisp architectural 3px radius luxury plate with dark index stamp (No rounded-full oval bubble, NO dot!)
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 px-3 py-1.5 rounded-[3px] bg-[var(--color-surface)] border border-[var(--color-border-strong)]/85 shadow-2xs select-none backdrop-blur-md hover:border-[var(--color-brand-strong)] transition-colors",
        className
      )}
    >
      {step && (
        <span className="font-mono text-[9.5px] font-black text-white bg-[#161B17] px-2 py-0.5 rounded-[2px] tracking-wider shadow-xs">
          {step}
        </span>
      )}
      <span className="font-mono text-[10.5px] font-bold text-[var(--color-brand-strong)]">
        //
      </span>
      <span className="font-mono text-[10.5px] font-bold tracking-[0.18em] text-[var(--color-text-primary)] uppercase">
        {label}
      </span>
      {spec && (
        <>
          <span className="h-3 w-[1px] bg-[var(--color-border)]" />
          <span className="font-mono text-[9px] text-[var(--color-text-tertiary)] tracking-wider">
            {spec}
          </span>
        </>
      )}
      <span className="font-mono text-[10px] text-[var(--color-brand-strong)] opacity-70">
        +
      </span>
    </div>
  );
}
