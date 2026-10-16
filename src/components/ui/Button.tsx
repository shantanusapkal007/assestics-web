import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "brand" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#202722] text-white hover:bg-[#121613] hover:shadow-md active:scale-[0.98] focus-visible:outline-[#202722]",
    brand:
      "bg-[#38D8E4] text-[#102022] font-semibold hover:bg-[#25c4d0] hover:shadow-[0_4px_20px_rgba(56,216,228,0.35)] active:scale-[0.98] focus-visible:outline-[#0891B2]",
    outline:
      "bg-white border border-[#E2E3DC] text-[#202722] hover:bg-[#F3F2ED] hover:border-[#C8CAC1] active:scale-[0.98] focus-visible:outline-[#202722]",
    ghost:
      "bg-transparent text-[#202722] hover:bg-[#F3F2ED] active:scale-[0.98] focus-visible:outline-[#202722]",
  };

  const combinedClass = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
