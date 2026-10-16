"use client";

import React, { useState } from "react";
import Link from "next/link";
import { KineticText } from "@/components/motion/KineticText";
import { ServiceVisualStage } from "@/components/sections/ServiceVisualStage";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-automation",
    number: "01",
    title: "AI & Business Automation",
    description: "AI agents, WhatsApp assistants and automated workflows that reduce repetitive work.",
    href: "/services/ai-automation",
  },
  {
    id: "software-engineering",
    number: "02",
    title: "Software & Digital Products",
    description: "Websites, applications and custom software built around your business needs.",
    href: "/services/software-engineering",
  },
  {
    id: "cloud-devops",
    number: "03",
    title: "Cloud & DevOps Engineering",
    description: "Reliable cloud infrastructure and automated software delivery.",
    href: "/services/cloud-devops",
  },
  {
    id: "business-systems",
    number: "04",
    title: "Business Systems & Supply Chain",
    description: "Connected business operations, ERP solutions and supply-chain systems.",
    href: "/services/business-systems",
  },
];

export function ServicesOverview() {
  const [activeId, setActiveId] = useState(SERVICES_DATA[0].id);

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-36 border-t border-[var(--color-border)] bg-[var(--color-canvas)]"
      aria-labelledby="services-overview-title"
    >
      {/* 1320–1440px Responsive Centered Container with Balanced Outer Margins */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Full-width Section Introduction */}
        <div className="mb-14 border-b border-[var(--color-border)] pb-8 lg:mb-18">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-strong)] uppercase">
              WHAT WE BUILD
            </span>
            <h2
              id="services-overview-title"
              className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
            >
              <KineticText triggerOnScroll>Technology that works together.</KineticText>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]">
              From intelligent automation to custom software and cloud infrastructure, we build connected systems that
              help businesses work better.
            </p>
          </div>
        </div>

        {/* Deliberate Two-Column Layout (42% Left vs 58% Right) with 48-64px Gap */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left Column (Approx 42%): Elegant Typographic Interactive List */}
          <div
            className="flex flex-col lg:col-span-5"
            role="tablist"
            aria-orientation="vertical"
            aria-label="Assestics Core Services"
          >
            {SERVICES_DATA.map((service, index) => {
              const isSelected = service.id === activeId;

              return (
                <div
                  key={service.id}
                  role="tab"
                  id={`service-tab-${service.id}`}
                  aria-selected={isSelected}
                  aria-controls={`service-visual-${service.id}`}
                  tabIndex={0}
                  onClick={() => setActiveId(service.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveId(service.id);
                    }
                  }}
                  className={cn(
                    "group relative cursor-pointer border-b border-[var(--color-border)] py-6 lg:py-7 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]",
                    index === 0 && "border-t border-[var(--color-border)]",
                    isSelected ? "bg-[var(--color-surface)]/40" : "hover:bg-[var(--color-surface)]/20"
                  )}
                >
                  {/* Subtle active left indicator bar */}
                  <span
                    className={cn(
                      "absolute left-0 top-6 bottom-6 w-1 rounded-full transition-all duration-300",
                      isSelected ? "bg-[var(--color-brand-primary)] opacity-100" : "opacity-0"
                    )}
                  />

                  {/* Header Row: Index Number, Title, and Action Link */}
                  <div className="flex items-start justify-between gap-4 pl-4 sm:pl-5">
                    <div className="flex items-baseline gap-3.5">
                      <span
                        className={cn(
                          "font-mono text-sm font-bold transition-colors duration-200",
                          isSelected ? "text-[var(--color-brand-strong)]" : "text-[var(--color-text-secondary)]"
                        )}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={cn(
                          "font-heading text-xl font-bold tracking-tight transition-colors duration-200 sm:text-2xl",
                          isSelected
                            ? "text-[var(--color-text-primary)]"
                            : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]"
                        )}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <Link
                      href={service.href}
                      className={cn(
                        "p-1 transition-all duration-200 shrink-0",
                        isSelected
                          ? "text-[var(--color-brand-strong)] translate-x-0.5 -translate-y-0.5"
                          : "text-[var(--color-text-tertiary)] opacity-60 group-hover:opacity-100 group-hover:text-[var(--color-text-primary)]"
                      )}
                      aria-label={`View full details for ${service.title}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>

                  {/* Concise Description */}
                  <p
                    className={cn(
                      "mt-2 pl-11 sm:pl-12 pr-4 text-sm leading-relaxed transition-colors duration-200",
                      isSelected ? "text-[var(--color-text-primary)] font-medium" : "text-[var(--color-text-secondary)]"
                    )}
                  >
                    {service.description}
                  </p>

                  {/* Restrained Visual Connection to Right Column on Desktop */}
                  {isSelected && (
                    <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-px bg-gradient-to-r from-[var(--color-border)] to-[var(--color-brand-primary)] pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (Approx 58%): Spacious Editorial Visual Stage */}
          <div
            id={`service-visual-${activeId}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${activeId}`}
            className="w-full lg:col-span-7 lg:sticky lg:top-28"
          >
            <ServiceVisualStage activeId={activeId} />
          </div>
        </div>
      </div>
    </section>
  );
}
