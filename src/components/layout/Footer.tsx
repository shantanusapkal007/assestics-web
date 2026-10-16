import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#F3F2ED] border-t border-[#E2E3DC] pt-16 md:pt-24 pb-12 text-[#202722]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 w-fit select-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Assestics Logo"
                className="w-10 h-10 object-contain"
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
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-[#E2E3DC] text-[#202722] hover:bg-[#EDFBFD] hover:border-[#38D8E4] transition-all"
                aria-label="Assestics LinkedIn Profile"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#0891B2]" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-[#E2E3DC] text-[#202722] hover:bg-[#EDFBFD] hover:border-[#38D8E4] transition-all"
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
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[#687069] hover:text-[#0891B2] transition-colors"
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
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/work"
                  className="text-[#687069] hover:text-[#0891B2] transition-colors"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#687069] hover:text-[#0891B2] transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#687069] hover:text-[#0891B2] transition-colors"
                >
                  About Assestics
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#687069] hover:text-[#0891B2] transition-colors"
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
                className="flex items-center gap-3 text-sm font-medium text-[#202722] hover:text-[#0891B2] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E3DC] flex items-center justify-center group-hover:border-[#38D8E4] transition-colors">
                  <Mail className="w-4 h-4 text-[#0891B2]" />
                </div>
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 text-sm font-medium text-[#202722] hover:text-[#0891B2] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E3DC] flex items-center justify-center group-hover:border-[#38D8E4] transition-colors">
                  <Phone className="w-4 h-4 text-[#0891B2]" />
                </div>
                <span>{siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E2E3DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#687069]">
          <p>© {currentYear} Assestics. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#202722] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#202722] transition-colors"
            >
              Terms of Engagement
            </Link>
            <span className="text-[#A0A8A1]">Munich · Global Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
