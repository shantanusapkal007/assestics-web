import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionBridge } from "@/components/sections/SectionBridge";
import { Layers, Cloud, Database, Factory } from "lucide-react";
import { AgentNexusIcon } from "@/components/ui/ArchitecturalIcons";

export const metadata: Metadata = {
  title: "Services & Systems Engineering Capabilities",
  description:
    "Assestics connects modern business capabilities across AI agents, custom software engineering, cloud DevOps, business systems, and supply chain consulting.",
};

export default function ServicesPage() {
  const icons = [AgentNexusIcon, Layers, Cloud, Database, Factory];

  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-[#FCFBF8] ambient-mesh relative">
        <Container>
          <SectionHeading
            tag="WHAT WE OFFER"
            title="Software and automations that work."
            description="From AI assistants to custom web apps and connected systems, explore how we help your business move faster."
            className="mb-16"
          />

          <div className="space-y-12">
            {services.map((service, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={service.id}
                  className="tactile-card rounded-2xl p-5 sm:p-8 lg:p-12 bg-white flex flex-col lg:flex-row gap-6 lg:gap-12 items-start hover:border-[#38D8E4] transition-all"
                >
                  {/* Left Column */}
                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#EDFBFD] border border-[#D5F6F9] flex items-center justify-center text-[#0891B2]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="inline-block font-mono text-[10px] font-black tracking-wider text-white bg-[#161B17] px-2 py-0.5 rounded-[2px] mb-1">
                          PILLAR {service.number}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#202722]">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-[#687069] leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="bg-[#F3F2ED] rounded-xl p-4 border border-[#E2E3DC] text-xs text-[#687069]">
                      <span className="font-semibold text-[#202722]">
                        The Problem We Solve:
                      </span>{" "}
                      {service.problemStatement}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#202722] hover:text-[#0891B2] transition-colors"
                      >
                        <span>Detailed capability guide &amp; FAQs</span>
                        <LinkArrow />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Capabilities & Deliverables */}
                  <div className="lg:w-1/2 w-full space-y-6 bg-[#FCFBF8] rounded-xl p-4 sm:p-6 lg:p-8 border border-[#E2E3DC]">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#202722] font-bold mb-3">
                        Core Capabilities
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#687069]">
                        {service.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-2">
                            <span className="font-mono text-[var(--color-brand-strong)] font-bold shrink-0">+</span>
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E2E3DC]">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#202722] font-bold mb-3">
                        Practical Business Impact
                      </div>
                      <ul className="space-y-2 text-xs text-[#687069]">
                        {service.practicalBenefits.map((ben) => (
                          <li key={ben} className="flex items-start gap-2">
                            <span className="text-[#0891B2] font-bold">✓</span>
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <SectionBridge
        step="02"
        tag="WORK WITH US"
        title="Ready to build something better?"
        subtitle="Talk directly with our builders to design software that fits your exact workflow."
      />

      <FinalCTA />
    </>
  );
}
