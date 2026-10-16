import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ShutterImage } from "@/components/motion/ShutterImage";

export const metadata: Metadata = {
  title: "Selected Work & Engineering Case Studies | Assestics",
  description:
    "Explore how Assestics brings custom software, AI automation, cloud infrastructure, and supply chain systems together to solve practical business challenges.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-[#FCFBF8] border-b border-[#E2E3DC]">
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
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12 transition-all hover:border-[var(--color-brand-primary)] shadow-xs"
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
                        className="border border-[var(--color-border)] shadow-xs transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                    </Link>
                  </div>

                  {/* Right Column: Metadata and Details */}
                  <div className="flex flex-col justify-between space-y-6 lg:col-span-6">
                    <div>
                      <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-text-secondary)]">
                        <span className="font-bold text-[var(--color-brand-strong)]">0{idx + 1}</span>
                        <span>·</span>
                        <span className="font-semibold uppercase tracking-wider">{project.category}</span>
                        <span>·</span>
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
                            className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 font-mono text-xs text-[var(--color-text-secondary)]"
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

      <FinalCTA />
    </>
  );
}
