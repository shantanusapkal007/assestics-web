import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionBridge } from "@/components/sections/SectionBridge";
import {
  Compass,
  Cpu,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { EditorialEyebrow } from "@/components/ui/EditorialEyebrow";

export const metadata: Metadata = {
  title: "About Assestics — Company, Team & Engineering Principles",
  description:
    "Assestics brings software engineering, AI automation, and operational thinking together to build connected business systems.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-[#FCFBF8] ambient-mesh relative">
        <Container>
          {/* Header */}
          <SectionHeading
            tag="COMPANY &amp; PHILOSOPHY"
            title="Better systems start with understanding."
            description="Assestics brings software engineering, AI automation and operational thinking together to help businesses solve complex problems with practical digital solutions."
            className="mb-16"
          />

          {/* Core Philosophy Banner */}
          <div className="tactile-card rounded-2xl p-5 sm:p-8 lg:p-12 bg-white border border-[#E2E3DC] mb-16 sm:mb-20 space-y-6">
            <EditorialEyebrow step="01" label="OUR ENGINEERING PRINCIPLE" variant="plate" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#202722]">
              &ldquo;Stability first. Then speed. Then scale.&rdquo;
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-[#687069] leading-relaxed pt-2">
              <p>
                From the first conversation to implementation, our focus is on
                building technology that fits the problem, works reliably and
                creates a foundation for future growth. Great products fail without
                dependable infrastructure. That is why we engineer resilient cloud
                foundations before deploying user interfaces or training AI models.
              </p>
              <p>
                On top of that rock-solid foundation, we build autonomous AI agents
                that absorb manual busywork, and customer-facing interfaces that
                convert visitors. When digital systems and physical operations are
                truly connected, organisations move faster with absolute confidence.
              </p>
            </div>
          </div>

          {/* Founder Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
            {/* Founder Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#E2E3DC] bg-white shadow-[0_8px_30px_rgba(32,39,34,0.06)] hover:shadow-[0_12px_40px_rgba(32,39,34,0.10)] transition-shadow duration-500">
                <div className="relative h-[340px] sm:h-[480px] lg:h-[540px] w-full bg-[#EAE9E2]">
                  <Image
                    src={siteConfig.founder.image}
                    alt={`${siteConfig.founder.name} - ${siteConfig.founder.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="p-6 bg-white border-t border-[#E2E3DC] space-y-1">
                  <div className="text-xl font-bold text-[#202722]">
                    {siteConfig.founder.name}
                  </div>
                  <div className="text-xs font-mono font-semibold text-[#0891B2]">
                    {siteConfig.founder.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Bio & Academic Credentials */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] bg-[#FCFBF8] border border-[var(--color-border-strong)]/80 shadow-2xs font-mono text-[10.5px] font-bold text-[var(--color-text-primary)]">
                  <GraduationCap className="w-3.5 h-3.5 text-[var(--color-brand-strong)]" />
                  <span className="tracking-wider">TECHNICAL LEADERSHIP</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#202722]">
                  Grounded in Industrial Rigor
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#687069] leading-relaxed">
                  {siteConfig.founder.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Founder Quote Card */}
              <div className="p-6 rounded-xl bg-[#F3F2ED] border-l-4 space-y-2" style={{ borderLeftColor: '#0891B2', boxShadow: '0 2px 12px rgba(8, 145, 178, 0.06)' }}>
                <div className="text-xs font-mono uppercase tracking-wider text-[#0891B2] font-semibold">
                  FOUNDER&apos;S MISSION
                </div>
                <p className="text-base sm:text-lg font-medium text-[#202722] italic">
                  &ldquo;{siteConfig.founder.quote}&rdquo;
                </p>
              </div>

              {/* Research & Expertise Tags */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase text-[#687069] mb-3">
                  Specialized Research Disciplines
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Digital Factory Architecture",
                    "Operational Excellence",
                    "Blockchain–AI–IoT Platforms",
                    "Big Data Analytics",
                    "Smart Logistics & Digital Value Chains",
                    "Predictive Inventory Modeling",
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-3 py-1.5 rounded-[2px] bg-white border border-[#E2E3DC] text-[#202722] hover:border-[var(--color-brand-strong)] hover:shadow-2xs transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3 Core Operational Values */}
          <div className="space-y-8 pt-8 border-t border-[#E2E3DC]">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <EditorialEyebrow step="02" label="OPERATIONAL PILLARS" variant="plate" />
              <h2 className="text-3xl font-bold text-[#202722]">
                How we think and build
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="tactile-card rounded-2xl p-5 sm:p-8 bg-white space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(56,216,228,0.06)] border border-[rgba(56,216,228,0.15)] flex items-center justify-center text-[#0891B2]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#202722]">
                  Blueprint Before Code
                </h3>
                <p className="text-sm text-[#687069] leading-relaxed">
                  We diagnose real constraints, audit existing systems, and
                  produce strict technical blueprints before writing application code.
                  No guesswork, no speculative architecture.
                </p>
              </div>

              <div className="tactile-card rounded-2xl p-5 sm:p-8 bg-white space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(56,216,228,0.06)] border border-[rgba(56,216,228,0.15)] flex items-center justify-center text-[#0891B2]">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#202722]">
                  Connected Assemblies
                </h3>
                <p className="text-sm text-[#687069] leading-relaxed">
                  Software, AI automation, and cloud infrastructure must communicate
                  seamlessly. We bridge silos so operational data flows in real time
                  without human friction.
                </p>
              </div>

              <div className="tactile-card rounded-2xl p-5 sm:p-8 bg-white space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(56,216,228,0.06)] border border-[rgba(56,216,228,0.15)] flex items-center justify-center text-[#0891B2]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#202722]">
                  Measured Results
                </h3>
                <p className="text-sm text-[#687069] leading-relaxed">
                  We don&apos;t publish vanity metrics or fabricate case studies. Every
                  system we engineer is tracked against measurable uptime, latency,
                  and operational throughput.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionBridge
        step="02"
        tag="NEXT STEPS · PARTNERSHIP"
        title="Ready to build your next system?"
        subtitle="Talk directly with our engineering team to map constraints and define immediate project scope."
      />

      <FinalCTA />
    </>
  );
}
