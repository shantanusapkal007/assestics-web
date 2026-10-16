import React from "react";
import { cn } from "@/lib/utils";

export interface LinkArrowProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  direction?: "right" | "up-right" | "down";
}

export function LinkArrow({
  className,
  direction = "right",
  ...props
}: LinkArrowProps) {
  const rotation = {
    right: "rotate-0",
    "up-right": "-rotate-45",
    down: "rotate-90",
  }[direction];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5",
        rotation,
        className
      )}
      aria-hidden="true"
      {...props}
    >
      <path d="M3.333 8h9.334" />
      <path d="M8.667 4l4 4-4 4" />
    </svg>
  );
}
