"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { X, ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EditorialEyebrow } from "@/components/ui/EditorialEyebrow";

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
      className="fixed inset-0 z-50 flex flex-col animate-in fade-in duration-200"
      style={{
        background: 'rgba(252, 251, 248, 0.92)',
        backdropFilter: 'blur(24px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
      }}
    >
      {/* Header bar inside drawer */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(226,227,220,0.6)]">
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
          className="p-2.5 rounded-xl hover:bg-[rgba(56,216,228,0.08)] text-[#202722] focus-visible:outline-2 focus-visible:outline-[#0891B2] transition-all duration-300 border border-transparent hover:border-[rgba(56,216,228,0.2)]"
          aria-label="Close Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="space-y-5">
          <div className="mb-4">
            <EditorialEyebrow label="NAVIGATION // DIRECTORY" variant="plate" />
          </div>
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between text-2xl font-bold py-3 px-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-[#0891B2] bg-[rgba(56,216,228,0.06)]"
                    : "text-[#202722] hover:text-[#0891B2] hover:bg-[rgba(56,216,228,0.04)]"
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight
                  className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? "translate-x-1 text-[#0891B2]" : "opacity-30"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Contact info in mobile drawer */}
        <div className="pt-8 border-t border-[rgba(226,227,220,0.6)] space-y-4">
          <div className="mb-2">
            <EditorialEyebrow label="CONTACT // DIRECT ENQUIRIES" variant="plate" />
          </div>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-3 text-sm text-[#202722] hover:text-[#0891B2] transition-colors duration-300 py-1"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(56,216,228,0.08)] border border-[rgba(56,216,228,0.15)]">
              <Mail className="w-4 h-4 text-[#0891B2]" />
            </span>
            <span>{siteConfig.contact.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-3 text-sm text-[#202722] hover:text-[#0891B2] transition-colors duration-300 py-1"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(56,216,228,0.08)] border border-[rgba(56,216,228,0.15)]">
              <Phone className="w-4 h-4 text-[#0891B2]" />
            </span>
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
