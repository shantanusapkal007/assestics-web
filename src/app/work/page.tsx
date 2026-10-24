import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionBridge } from "@/components/sections/SectionBridge";
import { ShutterImage } from "@/components/motion/ShutterImage";

export const metadata: Metadata = {
  title: "Selected Work & Engineering Case Studies | Assestics",
  description:
    "Explore how Assestics brings custom software, AI automation, cloud infrastructure, and supply chain systems together to solve practical business challenges.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-[#FCFBF8] ambient-mesh relative">
        <Container>
          <SectionHeading
            tag="PORTFOLIO · ARCHITECTURAL ARCHIVE"
            title="Built to solve real problems."
            description="A selection of engineered web applications, AI automation agents, enterprise cloud topologies, and supply chain decision platforms."
            className="mb-16"
          />

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <div
                key={project.slug}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-8 lg:p-12 transition-all duration-500 hover:border-[rgba(56,216,228,0.4)] hover:shadow-[0_8px_32px_-4px_rgba(56,216,228,0.12),0_4px_16px_-2px_rgba(32,39,34,0.06)]"
              >
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Left Column: Visual with Shutter Aperture Reveal */}
                  <div className="lg:col-span-6">
                    <Link href={`/work/${project.slug}`} className="block">
                      <ShutterImage
                        src={project.image}
                        alt={project.title}
                        aspectRatio="aspect-16/10"
                        variant={idx % 2 === 0 ? "aperture" : "horizontal"}
                        className="border border-[var(--color-border)] shadow-xs transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_4px_20px_rgba(32,39,34,0.08)]"
                      />
                    </Link>
                  </div>

                  {/* Right Column: Metadata and Details */}
                  <div className="flex flex-col justify-between space-y-6 lg:col-span-6">
                    <div>
                      <div className="flex items-center gap-2.5 font-mono text-xs text-[var(--color-text-secondary)]">
                        <span className="font-mono text-[9px] font-black text-white bg-[#161B17] px-1.5 py-0.5 rounded-[2px]">
                          CASE.0{idx + 1}
                        </span>
                        <span className="text-[var(--color-brand-strong)] font-bold">//</span>
                        <span className="font-bold uppercase tracking-wider text-[var(--color-text-primary)]">{project.category}</span>
                        <span className="text-[var(--color-brand-strong)] font-bold">//</span>
                        <span>{project.year}</span>
                      </div>

                      <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
                        <Link href={`/work/${project.slug}`} className="hover:text-[var(--color-brand-strong)]">
                          {project.title}
                        </Link>
                      </h2>

                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        {project.tagline}
                      </p>

                      <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-4 text-xs text-[var(--color-text-secondary)]">
                        <strong className="text-[var(--color-text-primary)]">Challenge: </strong>
                        {project.challenge}
                      </div>

                      {/* Tech stack badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-[2px] border border-[var(--color-border-strong)]/70 bg-[var(--color-surface)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-text-secondary)] shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-sm font-bold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-brand-strong)]"
                      >
                        <span>READ COMPREHENSIVE CASE STUDY</span>
                        <LinkArrow />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SectionBridge
        step="02"
        tag="SYSTEM INQUIRY"
        title="Have a custom architecture in mind?"
        subtitle="Let's engineer an automated, scalable solution tailored precisely to your operational constraints."
      />

      <FinalCTA />
    </>
  );
}
