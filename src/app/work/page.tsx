import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Selected Work & Engineering Case Studies",
  description:
    "Explore how Assestics brings custom software, AI automation, cloud infrastructure, and supply chain systems together to solve practical business challenges.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-[#FCFBF8] border-b border-[#E2E3DC]">
        <Container>
          <SectionHeading
            tag="PORTFOLIO"
            title="Built to solve real problems."
            description="A selection of engineered web applications, AI automation agents, enterprise cloud topologies, and supply chain decision platforms."
            className="mb-16"
          />

          <div className="space-y-12">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="tactile-card rounded-2xl p-8 sm:p-12 bg-white flex flex-col lg:flex-row gap-8 lg:gap-12 items-start hover:border-[#38D8E4] transition-all"
              >
                {/* Left Info Column */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="mono-tag">{project.category}</span>
                    <span className="text-[#C8CAC1]">•</span>
                    <span className="text-[#687069]">{project.year}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#202722]">
                    {project.title}
                  </h2>

                  <p className="text-base text-[#687069] leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="space-y-4 pt-2 text-sm text-[#687069]">
                    <div>
                      <span className="font-semibold text-[#202722]">
                        Challenge:
                      </span>{" "}
                      {project.challenge}
                    </div>
                    <div>
                      <span className="font-semibold text-[#202722]">
                        Engineered Solution:
                      </span>{" "}
                      {project.solution}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#F3F2ED] text-[#202722] border border-[#E2E3DC]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#202722] hover:text-[#0891B2] transition-colors"
                    >
                      <span>Read comprehensive case study</span>
                      <LinkArrow />
                    </Link>
                  </div>
                </div>

                {/* Right Deliverables Column */}
                <div className="lg:w-1/2 w-full bg-[#F3F2ED] rounded-xl p-6 sm:p-8 border border-[#E2E3DC] space-y-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#202722] font-bold">
                    Key Architectural Deliverables
                  </div>
                  <ul className="space-y-3">
                    {project.architectureDetails.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-3 text-sm text-[#687069]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38D8E4] shrink-0 mt-2" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[#E2E3DC]">
                    <div className="text-[11px] font-mono text-[#687069] uppercase">
                      Client Engagement
                    </div>
                    <div className="text-sm font-semibold text-[#202722]">
                      {project.client}
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
