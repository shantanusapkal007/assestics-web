"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-[#FCFBF8]/90 backdrop-blur-md border-b border-[#E2E3DC] shadow-[0_2px_12px_rgba(32,39,34,0.03)] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-3 group select-none"
              aria-label="Assestics Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="Assestics Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#202722] leading-none">
                  Assestics
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#687069] uppercase mt-0.5 hidden sm:block">
                  Connected Systems
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-1 bg-[#F3F2ED] border border-[#E2E3DC] rounded-full px-2 py-1"
              aria-label="Main Navigation"
            >
              {siteConfig.navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200",
                      isActive
                        ? "bg-white text-[#202722] shadow-[0_1px_4px_rgba(32,39,34,0.06)]"
                        : "text-[#687069] hover:text-[#202722] hover:bg-white/50"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button href="/contact" variant="primary" size="sm">
                Discuss a project
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-full bg-[#F3F2ED] border border-[#E2E3DC] text-[#202722] hover:bg-[#EAE9E2] transition-colors focus-visible:outline-2 focus-visible:outline-[#0891B2]"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
