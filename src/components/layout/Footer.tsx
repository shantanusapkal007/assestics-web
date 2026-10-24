import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#F3F2ED] border-t border-[#E2E3DC]/40 pt-16 md:pt-24 pb-12 text-[#202722] overflow-hidden">
      {/* Top Seamless Optical Horizon */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(226,227,220,0.6) 20%, rgba(56,216,228,0.4) 50%, rgba(226,227,220,0.6) 80%, transparent 100%)",
        }}
      />
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
            <Link href="/" className="flex items-center gap-3 w-fit select-none group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Assestics Logo"
                className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
              <span className="text-2xl font-bold tracking-tight text-[#202722]">
                Assestics
              </span>
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
              Munich · Global Delivery
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
