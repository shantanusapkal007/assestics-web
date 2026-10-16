import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Button } from "@/components/ui/Button";

export function SelectedWork() {
  return (
    <section className="py-24 md:py-32 bg-[#FCFBF8]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            tag="SELECTED WORK"
            title="Built to solve real problems."
            description="Explore how we bring software, automation and operational systems together to solve practical business challenges."
            className="mb-0"
          />
          <Button href="/work" variant="outline" size="md" className="self-start md:self-auto">
            <span>View all work</span>
            <LinkArrow />
          </Button>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex flex-col tactile-card rounded-2xl p-6 sm:p-8 overflow-hidden hover:border-[#38D8E4] transition-all"
            >
              {/* Category & Year Header */}
              <div className="flex items-center justify-between text-xs font-mono mb-4 text-[#687069]">
                <span className="uppercase tracking-wider font-semibold text-[#0891B2]">
                  {project.category}
                </span>
                <span>{project.year}</span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#202722] group-hover:text-[#0891B2] transition-colors mb-3">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-[#687069] leading-relaxed mb-6 flex-1">
                {project.tagline}
              </p>

              {/* Architectural Highlights Box */}
              <div className="bg-[#F3F2ED] rounded-xl p-4 mb-6 border border-[#E2E3DC]/80 space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#202722] font-bold">
                  Engineered Solution
                </div>
                <p className="text-xs text-[#687069] line-clamp-2 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Tech Stack Pills & Arrow */}
              <div className="pt-4 border-t border-[#E2E3DC] flex items-center justify-between gap-4 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EAE9E2] text-[#202722]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EAE9E2] text-[#687069]">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-bold text-[#202722] group-hover:text-[#0891B2] transition-colors">
                  <span>Case Study</span>
                  <LinkArrow />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
