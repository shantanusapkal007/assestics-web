import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4 mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      {tag && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDFBFD] border border-[#D5F6F9]",
            align === "center" ? "mx-auto" : ""
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2] animate-pulse" />
          <span className="mono-tag">{tag}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#202722] leading-[1.15] [text-wrap:balance]">
        {title}
      </h2>
      {description && (
        <p className="text-lg sm:text-xl text-[#687069] leading-relaxed [text-wrap:pretty]">
          {description}
        </p>
      )}
    </div>
  );
}
