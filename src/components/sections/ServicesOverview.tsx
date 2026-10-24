"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { KineticText } from "@/components/motion/KineticText";
import { ServiceVisualStage } from "@/components/sections/ServiceVisualStage";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";
import { cn } from "@/lib/utils";
import { EditorialEyebrow } from "@/components/ui/EditorialEyebrow";

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
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsListRef = useRef<HTMLDivElement>(null);

  const handleSelectService = (id: string) => {
    setActiveId(id);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const el = document.getElementById("service-visual-stage");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  };

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap, ScrollTrigger } = registerGSAP();
      if (!sectionRef.current) return;

      // Smooth entrance reveal for section heading
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Relevo & Vinco Inspiration: Tactical Card Deck Deal Fan-Out
      if (tabsListRef.current) {
        const tabs = tabsListRef.current.children;
        const rotations = [-2.5, 1.8, -1.2, 2.2];

        gsap.fromTo(
          tabs,
          {
            opacity: 0,
            y: (i) => 24 + i * 14,
            rotation: (i) => rotations[i % rotations.length],
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: tabsListRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (window.innerWidth >= 1024) {
        SERVICES_DATA.forEach((service) => {
          const el = document.getElementById(`service-tab-${service.id}`);
          if (!el) return;

          ScrollTrigger.create({
            trigger: el,
            start: "top 45%",
            end: "bottom 45%",
            onEnter: () => setActiveId(service.id),
            onEnterBack: () => setActiveId(service.id),
          });
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-8 pb-16 lg:pt-10 lg:pb-20 bg-[var(--color-canvas)] ambient-mesh"
      aria-labelledby="services-overview-title"
    >
      {/* 1320–1440px Responsive Centered Container with Balanced Outer Margins */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Full-width Section Introduction */}
        <div ref={headerRef} className="mb-12 border-b border-[var(--color-border)] pb-8 lg:mb-16">
          <div className="max-w-3xl">
            <div className="mb-4">
              <EditorialEyebrow step="01" label="WHAT WE OFFER // 4 CORE SERVICES" variant="plate" />
            </div>
            <h2
              id="services-overview-title"
              className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
            >
              <KineticText triggerOnScroll>Simple, reliable software for your business.</KineticText>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]">
              We build tools that eliminate{" "}
              <span className="relative inline-block font-semibold text-[var(--color-text-primary)]">
                busywork
                <svg
                  className="absolute left-[-4%] top-[48%] w-[108%] h-[6px] text-rose-500/85 overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 8"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5 Q 35 1, 70 5 T 98 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="animate-strike-path"
                  />
                </svg>
              </span>
              , connect messy spreadsheets, and keep your business running smoothly.
            </p>
          </div>
        </div>

        {/* Deliberate Abstract Asymmetrical Two-Column Layout (Visual Stage Left vs Services Index Right) */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          
          {/* Left Column (Approx 60%): Spacious Editorial Visual Stage with Abstract Framing */}
          <div
            id="service-visual-stage"
            role="tabpanel"
            aria-labelledby={`service-tab-${activeId}`}
            className="w-full lg:col-span-7 order-2 lg:order-1 lg:sticky lg:top-28 scroll-mt-24"
          >
            <div className="relative p-2 sm:p-5 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[0_20px_50px_-12px_rgba(32,39,34,0.08)]">
              {/* Abstract Layered Offset Blueprint Background Plate */}
              <div 
                className="pointer-events-none absolute -inset-2.5 sm:-inset-3.5 rounded-3xl border border-[var(--color-border)]/60 bg-[var(--color-surface-muted)]/20 -z-10 transform -translate-x-2 translate-y-2 hidden sm:block"
                aria-hidden="true"
              />

              {/* Abstract Corner Coordinates */}
              <span className="pointer-events-none absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[var(--color-border-strong)] hidden lg:block select-none">+</span>
              <span className="pointer-events-none absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[var(--color-border-strong)] hidden lg:block select-none">+</span>
              <span className="pointer-events-none absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[var(--color-border-strong)] hidden lg:block select-none">+</span>
              <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[var(--color-border-strong)] hidden lg:block select-none">+</span>

              <ServiceVisualStage activeId={activeId} />
            </div>
          </div>

          {/* Right Column (Approx 40%): Editorial Typographic Service Index */}
          <div
            ref={tabsListRef}
            className="flex flex-col lg:col-span-5 order-1 lg:order-2"
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
                  aria-controls="service-visual-stage"
                  tabIndex={0}
                  onClick={() => handleSelectService(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelectService(service.id);
                    } else if (e.key === "ArrowDown") {
                      e.preventDefault();
                      const nextIndex = (index + 1) % SERVICES_DATA.length;
                      const nextService = SERVICES_DATA[nextIndex];
                      handleSelectService(nextService.id);
                      document.getElementById(`service-tab-${nextService.id}`)?.focus();
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      const prevIndex = (index - 1 + SERVICES_DATA.length) % SERVICES_DATA.length;
                      const prevService = SERVICES_DATA[prevIndex];
                      handleSelectService(prevService.id);
                      document.getElementById(`service-tab-${prevService.id}`)?.focus();
                    }
                  }}
                  className={cn(
                    "group relative cursor-pointer border-b border-[var(--color-border)] py-6 lg:py-7 transition-all duration-400 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] rounded-sm",
                    index === 0 && "border-t border-[var(--color-border)]",
                    isSelected ? "bg-gradient-to-r from-[rgba(56,216,228,0.06)] to-transparent" : "hover:bg-[var(--color-surface)]/30"
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-0 top-4 bottom-4 w-[2px] rounded-[1px] transition-all duration-400",
                      isSelected ? "opacity-100" : "opacity-0"
                    )}
                    style={isSelected ? { background: 'linear-gradient(to bottom, #38D8E4, #0891B2)' } : undefined}
                  />

                  {/* Header Row: Index Number, Title, and Action Link */}
                  <div className="flex items-start justify-between gap-4 pl-4 sm:pl-5">
                    <div className="flex items-baseline gap-3.5">
                      <span
                        className={cn(
                          "font-mono text-sm font-bold transition-colors duration-300",
                          isSelected ? "text-[var(--color-brand-strong)]" : "text-[var(--color-text-secondary)]"
                        )}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={cn(
                          "font-heading text-xl font-bold tracking-tight transition-colors duration-300 sm:text-2xl",
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
                        "p-1.5 transition-all duration-300 shrink-0 rounded-lg",
                        isSelected
                          ? "text-[var(--color-brand-strong)] bg-[rgba(56,216,228,0.08)] translate-x-0.5 -translate-y-0.5"
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
                      "mt-2 pl-10 sm:pl-11 pr-4 text-sm leading-relaxed transition-all duration-300",
                      isSelected ? "text-[var(--color-text-primary)] font-medium" : "text-[var(--color-text-secondary)]"
                    )}
                  >
                    {service.description}
                  </p>

                  {/* Signature Visual Connection to Left Column Visual Stage on Desktop */}
                  {isSelected && (
                    <div
                      className="hidden lg:block absolute -left-6 xl:-left-8 top-1/2 -translate-y-1/2 w-6 xl:w-8 h-px pointer-events-none"
                      style={{ background: 'linear-gradient(to left, #0891B2, #38D8E4)' }}
                    />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
