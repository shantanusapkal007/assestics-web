"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { X, ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  links?: { href: string; label: string }[];
}

export function MobileNavigation({ isOpen, onClose, links }: MobileNavigationProps) {
  const pathname = usePathname();
  const navLinks = links || siteConfig.navigation;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close on route navigation
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#FCFBF8] animate-in fade-in duration-200"
    >
      {/* Header bar inside drawer */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2E3DC]">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2.5"
          aria-label="Assestics Home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Assestics Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-[#202722]">
            Assestics
          </span>
        </Link>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-[#F3F2ED] text-[#202722] focus-visible:outline-2 focus-visible:outline-[#0891B2]"
          aria-label="Close Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#687069] mb-4">
            Navigation
          </div>
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between text-2xl font-bold py-2 transition-colors ${
                  isActive
                    ? "text-[#0891B2]"
                    : "text-[#202722] hover:text-[#0891B2]"
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight
                  className={`w-5 h-5 transition-transform ${
                    isActive ? "translate-x-1 text-[#0891B2]" : "opacity-40"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Contact info in mobile drawer */}
        <div className="pt-8 border-t border-[#E2E3DC] space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#687069]">
            Direct Enquiries
          </div>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-3 text-sm text-[#202722] hover:text-[#0891B2] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#0891B2]" />
            <span>{siteConfig.contact.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-3 text-sm text-[#202722] hover:text-[#0891B2] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#0891B2]" />
            <span>{siteConfig.contact.phone}</span>
          </a>
          <div className="pt-4">
            <Button
              href="/contact"
              variant="brand"
              size="lg"
              className="w-full text-center"
            >
              Discuss a project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
