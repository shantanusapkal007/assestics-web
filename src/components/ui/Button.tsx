import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "brand" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  asChild,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#202722] text-white hover:bg-[#121613] hover:shadow-[0_8px_24px_-4px_rgba(32,39,34,0.25)] active:scale-[0.97] focus-visible:outline-[#202722] border border-transparent hover:border-[rgba(56,216,228,0.15)]",
    brand:
      "bg-gradient-to-r from-[#38D8E4] to-[#0891B2] text-[#102022] font-semibold hover:from-[#25c4d0] hover:to-[#067a98] hover:shadow-[0_8px_32px_rgba(56,216,228,0.35)] active:scale-[0.97] focus-visible:outline-[#0891B2]",
    outline:
      "bg-white/80 backdrop-blur-sm border border-[#E2E3DC] text-[#202722] hover:bg-[#F3F2ED] hover:border-[#38D8E4]/40 hover:shadow-[0_4px_16px_rgba(32,39,34,0.06)] active:scale-[0.97] focus-visible:outline-[#202722]",
    ghost:
      "bg-transparent text-[#202722] hover:bg-[#F3F2ED] active:scale-[0.97] focus-visible:outline-[#202722]",
  };

  const combinedClass = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: cn(combinedClass, (children.props as { className?: string }).className),
    });
  }

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
