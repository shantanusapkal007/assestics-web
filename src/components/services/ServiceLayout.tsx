import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ServicePillar } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowLeft, CheckCircle2, HelpCircle } from "lucide-react";

export interface ServiceLayoutProps {
  service: ServicePillar;
  visualComponent?: React.ReactNode;
}

export function ServiceLayout({
  service,
  visualComponent,
}: ServiceLayoutProps) {
  return (
    <>
      <article className="pt-12 pb-24 md:pt-20 md:pb-32 bg-[#FCFBF8]">
        <Container>
          {/* Breadcrumb back */}
          <div className="mb-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#687069] hover:text-[#202722] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all services</span>
            </Link>
          </div>

          {/* Service Header */}
          <div className="space-y-6 max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDFBFD] border border-[#D5F6F9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
              <span className="mono-tag">PILLAR {service.number} · CAPABILITY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#202722] leading-[1.1] [text-wrap:balance]">
              {service.title}
            </h1>

            <p className="text-xl sm:text-2xl text-[#687069] leading-relaxed [text-wrap:pretty]">
              {service.shortDescription}
            </p>
          </div>

          {/* Problem Statement Card */}
          <div className="tactile-card rounded-2xl p-6 sm:p-8 bg-white border-l-4 border-l-[#0891B2] mb-16 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#0891B2] font-semibold">
              The Operational Bottleneck
            </div>
            <p className="text-base sm:text-lg text-[#202722] leading-relaxed">
              {service.problemStatement}
            </p>
          </div>

          {/* Deep Dive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-12">
              {/* Solution Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#202722]">
                  How Assestics Solves This
                </h2>
                <p className="text-base text-[#687069] leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Explanatory visual if provided */}
              {visualComponent && <div className="py-2">{visualComponent}</div>}

              {/* Capabilities Breakdown */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#202722]">
                  Core Capabilities &amp; System Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="p-4 rounded-xl bg-white border border-[#E2E3DC] flex items-start gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#38D8E4] shrink-0 mt-1.5" />
                      <span className="text-sm font-medium text-[#202722] leading-snug">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Business Benefits */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#202722]">
                  Practical Business Benefits
                </h2>
                <div className="space-y-3 pt-2">
                  {service.practicalBenefits.map((ben) => (
                    <div
                      key={ben}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[#F3F2ED] border border-[#E2E3DC]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#202722] leading-relaxed">
                        {ben}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="space-y-6 pt-4 border-t border-[#E2E3DC]">
                  <h2 className="text-2xl font-bold text-[#202722]">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, fIdx) => (
                      <div
                        key={fIdx}
                        className="tactile-card rounded-xl p-6 bg-white space-y-2"
                      >
                        <div className="flex items-start gap-2.5 font-bold text-base text-[#202722]">
                          <HelpCircle className="w-5 h-5 text-[#0891B2] shrink-0 mt-0.5" />
                          <span>{faq.question}</span>
                        </div>
                        <p className="text-sm text-[#687069] pl-7 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="tactile-card rounded-2xl p-6 sm:p-8 bg-white space-y-6">
                <h3 className="text-lg font-bold text-[#202722] border-b border-[#E2E3DC] pb-4">
                  Standard Deliverables
                </h3>

                <ul className="space-y-3">
                  {service.deliverables.map((deliv, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[#687069]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38D8E4] shrink-0 mt-2" />
                      <span className="leading-relaxed">{deliv}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#E2E3DC]">
                  <div className="text-xs font-mono uppercase text-[#687069] mb-2">
                    Technologies We Leverage
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStackFocus.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-[#F3F2ED] text-[#202722] border border-[#E2E3DC]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E2E3DC]">
                  <Button
                    href="/contact"
                    variant="brand"
                    size="md"
                    className="w-full"
                  >
                    Discuss {service.title.split("&")[0].trim()}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>

      <FinalCTA />
    </>
  );
}
