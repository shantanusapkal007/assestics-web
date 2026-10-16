"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { KineticText } from "@/components/motion/KineticText";
import { ServiceVisualStage } from "@/components/sections/ServiceVisualStage";
import { services } from "@/content/services";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesOverview() {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeServiceId) || services[0];

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      aria-labelledby="services-index-title"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-16 border-b border-[var(--color-border)] pb-8 lg:mb-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-strong)] uppercase">
                SERVICES INDEX · THE CONNECTED SYSTEM
              </span>
              <h2
                id="services-index-title"
                className="mt-3 font-heading text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
              >
                <KineticText triggerOnScroll>Technology that works together.</KineticText>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
              From intelligent automation to reliable infrastructure, we design and build the systems behind better
              business operations.
            </p>
          </div>
        </div>

        {/* Split Interactive Systems Index Layout */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (55%): Large Typographic List */}
          <div className="space-y-4 lg:col-span-6 xl:col-span-6" role="tablist" aria-orientation="vertical">
            {services.slice(0, 4).map((service, index) => {
              const isSelected = service.id === activeServiceId;
              const formattedIndex = `0${index + 1}`;

              return (
                <div
                  key={service.id}
                  role="tab"
                  id={`service-tab-${service.id}`}
                  aria-selected={isSelected}
                  aria-controls={`service-panel-${service.id}`}
                  tabIndex={0}
                  onClick={() => setActiveServiceId(service.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveServiceId(service.id);
                    }
                  }}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  className={cn(
                    "group relative cursor-pointer rounded-xl border p-6 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]",
                    isSelected
                      ? "border-[var(--color-brand-primary)] bg-[var(--color-surface)] shadow-sm"
                      : "border-[var(--color-border)]/60 bg-[var(--color-canvas)] hover:border-[var(--color-border)] hover:bg-[var(--color-surface)]/60"
                  )}
                >
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "font-mono text-sm font-bold transition-colors",
                          isSelected ? "text-[var(--color-brand-strong)]" : "text-[var(--color-text-tertiary)]"
                        )}
                      >
                        {formattedIndex}
                      </span>
                      <h3
                        className={cn(
                          "font-heading text-xl font-bold transition-colors sm:text-2xl",
                          isSelected ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]"
                        )}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <Link
                      href={`/services/${service.id}`}
                      className="p-1 text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-brand-strong)]"
                      aria-label={`View full details for ${service.title}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>

                  {/* Supporting Description */}
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {service.shortDescription}
                  </p>

                  {/* Capability Tags Preview */}
                  <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-[var(--color-border)]/40">
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <span
                        key={cap}
                        className={cn(
                          "rounded px-2.5 py-0.5 font-mono text-[11px] transition-colors",
                          isSelected
                            ? "bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] font-semibold"
                            : "bg-transparent text-[var(--color-text-tertiary)]"
                        )}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (45%): Explanatory SVG Visualization Stage (Sticky on Desktop) */}
          <div className="lg:sticky lg:top-28 lg:col-span-6 xl:col-span-6">
            <ServiceVisualStage activeId={activeServiceId} />

            {/* Direct Deep-Dive Action Card Below Visual */}
            <div className="mt-6 flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <div>
                <span className="font-mono text-xs font-semibold text-[var(--color-brand-strong)] uppercase">
                  DEEP-DIVE DOCUMENTATION
                </span>
                <p className="text-sm font-bold text-[var(--color-text-primary)]">
                  Explore full architecture, delivery phases & FAQs
                </p>
              </div>
              <Link
                href={`/services/${activeService.id}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-text-primary)] px-4 py-2 font-mono text-xs font-bold text-[var(--color-canvas)] transition-transform hover:scale-[1.02]"
              >
                <span>OPEN SPEC</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
