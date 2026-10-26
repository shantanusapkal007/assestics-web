import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { MaterialField } from "@/components/ui/MaterialField";
import { BrandLockup } from "@/components/ui/BrandLockup";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="material-section--quiet relative border-t border-[#E2E3DC]/40 pt-16 md:pt-24 pb-12 text-[#202722] overflow-hidden">
      <MaterialField variant="footer" />
      {/* Top Seamless Optical Horizon */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(226,227,220,0.6) 20%, rgba(56,216,228,0.5) 50%, rgba(226,227,220,0.6) 80%, transparent 100%)",
        }}
      />

      {/* Center Registration Marker linking from Final CTA */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10" aria-hidden="true">
        <div className="w-[1.5px] h-6 bg-gradient-to-b from-[#38D8E4] to-transparent" />
        <span className="font-mono text-[8.5px] font-bold text-[var(--color-brand-strong)] uppercase tracking-widest opacity-70">
          TECH_FOOTPRINT // GLOBAL_OPERATIONS
        </span>
      </div>

      {/* Subtle ambient gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 right-0 w-[500px] h-[500px] opacity-[0.025]"
          style={{ background: 'radial-gradient(circle, #38D8E4 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="w-fit select-none group" aria-label="Assestics home">
              <BrandLockup size="footer" className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <p className="text-sm text-[#687069] leading-relaxed max-w-sm">
              We connect the systems that help businesses operate, automate and
              grow. Bridging AI agents, bespoke digital products, cloud infrastructure,
              and supply chain systems into cohesive architectures.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider px-3 py-1.5 rounded-[3px] bg-white border border-[#E2E3DC] text-[#202722] hover:border-[var(--color-brand-strong)] hover:shadow-2xs transition-all duration-300"
                aria-label="Assestics LinkedIn Profile"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#0891B2]" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider px-3 py-1.5 rounded-[3px] bg-white border border-[#E2E3DC] text-[#202722] hover:border-[var(--color-brand-strong)] hover:shadow-2xs transition-all duration-300"
                aria-label="Assestics Instagram Profile"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-[#0891B2]" />
              </a>
            </div>
          </div>

          {/* Solution Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#202722] font-bold">
              Capabilities
            </h3>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[#687069] hover:text-[#0891B2] transition-colors duration-300 hover:translate-x-0.5 inline-block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#202722] font-bold">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/work"
                  className="text-[#687069] hover:text-[#0891B2] transition-colors duration-300 hover:translate-x-0.5 inline-block"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#687069] hover:text-[#0891B2] transition-colors duration-300 hover:translate-x-0.5 inline-block"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#687069] hover:text-[#0891B2] transition-colors duration-300 hover:translate-x-0.5 inline-block"
                >
                  About Assestics
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#687069] hover:text-[#0891B2] transition-colors duration-300 hover:translate-x-0.5 inline-block"
                >
                  Project Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#202722] font-bold">
              Direct Contact
            </h3>
            <p className="text-xs text-[#687069]">
              Reach our engineering and strategy team directly for consultations:
            </p>
            <div className="space-y-3 pt-1">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-sm font-medium text-[#202722] hover:text-[#0891B2] transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E2E3DC] flex items-center justify-center group-hover:border-[#38D8E4] group-hover:shadow-[0_2px_12px_rgba(56,216,228,0.12)] transition-all duration-300">
                  <Mail className="w-4 h-4 text-[#0891B2]" />
                </div>
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 text-sm font-medium text-[#202722] hover:text-[#0891B2] transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E2E3DC] flex items-center justify-center group-hover:border-[#38D8E4] group-hover:shadow-[0_2px_12px_rgba(56,216,228,0.12)] transition-all duration-300">
                  <Phone className="w-4 h-4 text-[#0891B2]" />
                </div>
                <span>{siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Bleed Colossal Typographic Brand Architecture (Edge-to-Edge) */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none my-6 sm:my-10 px-2 sm:px-6" aria-hidden="true">
        <div className="w-full max-w-[1920px] mx-auto">
          {/* Subtle Technical Hairline Coordinates Frame */}
          <div className="hidden sm:flex items-center justify-between px-6 lg:px-10 mb-2 font-mono text-[8.5px] tracking-widest text-[#202722]/30 uppercase">
            <span>[01 // SYSTEM_IDENTITY]</span>
            <span className="tracking-[0.25em]">ASSESTICS &middot; TECH COMPANY</span>
            <span>[GLOBAL_OPERATIONS &middot; 2026]</span>
          </div>

          <svg
            viewBox="0 0 1100 148"
            className="w-full h-auto overflow-visible select-none"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="footerBrandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#161B17" stopOpacity="0.08" />
                <stop offset="60%" stopColor="#161B17" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#0891B2" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient id="footerStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#202722" stopOpacity="0.02" />
                <stop offset="50%" stopColor="#0891B2" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#202722" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Architectural Grid Blueprint Guides */}
            <line x1="20" y1="4" x2="1080" y2="4" stroke="rgba(226, 227, 220, 0.6)" strokeWidth="0.75" strokeDasharray="3 5" />

            <text
              x="50%"
              y="56%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-heading font-black select-none"
              style={{
                fill: "url(#footerBrandGradient)",
                stroke: "url(#footerStrokeGradient)",
                strokeWidth: "0.5px",
                letterSpacing: "-0.045em",
                fontSize: "154px",
              }}
            >
              ASSESTICS
            </text>

            <line x1="20" y1="144" x2="1080" y2="144" stroke="rgba(226, 227, 220, 0.6)" strokeWidth="0.75" strokeDasharray="3 5" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E2E3DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#687069] text-center sm:text-left">
          <p>© {currentYear} Assestics. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#0891B2] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#0891B2] transition-colors duration-300"
            >
              Terms of Engagement
            </Link>
            <span className="text-[#A0A8A1] flex items-center gap-1.5 font-mono text-xs">
              <span className="text-[var(--color-brand-strong)] font-mono text-[10px]">+</span>
              Global Delivery
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
