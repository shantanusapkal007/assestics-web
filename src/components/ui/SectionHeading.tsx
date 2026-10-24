import React from "react";
import { cn } from "@/lib/utils";
import { EditorialEyebrow } from "@/components/ui/EditorialEyebrow";

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
  let step: string | undefined = undefined;
  let label = tag || "";

  if (tag) {
    const parts = tag.split(/[\/\/·•—]/).map((s) => s.trim()).filter(Boolean);
    if (parts.length > 1 && (/^\d+$/.test(parts[0]) || parts[0].length <= 4)) {
      step = parts[0];
      label = parts.slice(1).join(" // ");
    }
  }

  return (
    <div
      className={cn(
        "space-y-4 mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      {tag && (
        <div className={cn("mb-3", align === "center" ? "flex justify-center" : "")}>
          <EditorialEyebrow step={step} label={label} variant="plate" />
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
