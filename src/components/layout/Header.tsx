"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { ArrowRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLockup } from "@/components/ui/BrandLockup";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let cachedTotalHeight = 0;

    const measureHeight = () => {
      cachedTotalHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };

    measureHeight();
    window.addEventListener("resize", measureHeight, { passive: true });

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const nextIsScrolled = scrollY > 20;
          setIsScrolled((prev) => (prev !== nextIsScrolled ? nextIsScrolled : prev));

          if (progressBarRef.current && cachedTotalHeight > 0) {
            const p = Math.min(1, Math.max(0, scrollY / cachedTotalHeight));
            progressBarRef.current.style.transform = `scaleX(${p})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measureHeight);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-2.5 shadow-[0_1px_3px_rgba(32,39,34,0.04),0_8px_24px_rgba(32,39,34,0.03)]"
            : "bg-transparent py-5"
        )}
        style={isScrolled ? {
          background: 'rgba(252, 251, 248, 0.78)',
          backdropFilter: 'blur(20px) saturate(1.6)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.6)',
          borderBottom: '1px solid rgba(226, 227, 220, 0.5)',
        } : undefined}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] rounded-sm"
              aria-label="Assestics Home"
            >
              <BrandLockup className="transition-transform duration-500 group-hover:translate-x-0.5" />
            </Link>

            {/* Desktop Navigation Links with Active System Indicator */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "group relative px-3.5 py-1.5 text-sm font-medium transition-all duration-300 rounded-[3px]",
                      isActive
                        ? "text-[var(--color-brand-contrast)] font-semibold bg-[rgba(56,216,228,0.08)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(32,39,34,0.04)]"
                    )}
                  >
                    {link.label}
                    {/* Two26-Style Organic Accent Underline */}
                    <span
                      className={cn(
                        "absolute bottom-1 left-3.5 right-3.5 h-[1.5px] rounded-[1px] transition-all duration-300 origin-left",
                        isActive
                          ? "bg-[var(--color-brand-strong)] scale-x-100 opacity-100"
                          : "bg-[var(--color-brand-primary)] scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Command Palette Trigger Plate */}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
                className="group flex items-center gap-2 rounded-[3px] border border-[var(--color-border-strong)]/85 bg-[var(--color-surface)]/90 px-3 py-1.5 text-xs text-[var(--color-text-secondary)] shadow-2xs transition-all hover:border-[var(--color-brand-strong)] hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-contrast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] select-none"
                aria-label="Open Command Terminal (⌘K)"
              >
                <span className="font-mono text-[11px] font-bold text-[var(--color-text-tertiary)] group-hover:text-[var(--color-brand-strong)]">
                  ⌘K
                </span>
                <span className="h-3 w-px bg-[var(--color-border)]" />
                <span className="font-medium">Terminal</span>
              </button>

              <Button asChild size="sm" className="group shadow-[0_2px_12px_rgba(32,39,34,0.08)]">
                <Link href="/contact">
                  Discuss a project
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Mobile Actions: Command Palette button + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
                className="flex items-center justify-center h-9 w-9 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 text-xs font-mono font-bold text-[var(--color-brand-contrast)]"
                aria-label="Open Command Terminal"
              >
                ⌘K
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex p-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-sm text-[var(--color-text-primary)] hover:bg-[var(--color-surface-muted)] hover:border-[var(--color-brand-primary)]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] transition-all duration-300"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>

        {/* Global Scroll Progress Bar & Millimeter Calibration Ruler */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full w-full origin-left will-change-transform transition-transform duration-75 ease-out"
            style={{
              transform: "scaleX(0)",
              background: "linear-gradient(90deg, #38D8E4, #0891B2, #0E7490)",
              boxShadow: "0 0 10px rgba(56, 216, 228, 0.5)",
            }}
          />
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
