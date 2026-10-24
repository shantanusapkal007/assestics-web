import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { projects } from "@/content/projects";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ShutterImage } from "@/components/motion/ShutterImage";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Assestics`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <article className="pt-12 pb-24 md:pt-20 md:pb-32 bg-[#FCFBF8]">
        <Container>
          {/* Back breadcrumb */}
          <div className="mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#687069] hover:text-[#202722] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all work</span>
            </Link>
          </div>

          {/* Header Metadata */}
          <div className="space-y-6 max-w-4xl mb-12">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
              <span className="font-mono text-[9.5px] font-black text-white bg-[#161B17] px-2 py-0.5 rounded-[2px] tracking-wider">
                {project.category}
              </span>
              <span className="text-[var(--color-brand-strong)] font-bold">//</span>
              <span className="text-[#687069]">YEAR {project.year}</span>
              <span className="text-[var(--color-brand-strong)] font-bold">//</span>
              <span className="text-[#687069]">{project.client}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#202722] leading-[1.1] [text-wrap:balance]">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl text-[#687069] leading-relaxed [text-wrap:pretty]">
              {project.tagline}
            </p>
          </div>

          {/* Signature Shutter Aperture Image Reveal */}
          <div className="mb-16">
            <ShutterImage
              src={project.image}
              alt={project.title}
              aspectRatio="aspect-21/9"
              variant="aperture"
              className="border border-[#E2E3DC] shadow-sm"
            />
          </div>

          {/* Case Study Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Main Narrative Column */}
            <div className="lg:col-span-7 space-y-12">
              {/* Challenge */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-[#0891B2] font-semibold">
                  01 // The Operational Challenge
                </div>
                <h2 className="text-2xl font-bold text-[#202722]">
                  Identifying the real bottlenecks
                </h2>
                <p className="text-base text-[#687069] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-[#0891B2] font-semibold">
                  02 // The Engineered Solution
                </div>
                <h2 className="text-2xl font-bold text-[#202722]">
                  How Assestics solved it
                </h2>
                <p className="text-base text-[#687069] leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Technical Architecture */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-[#0891B2] font-semibold">
                  03 // Architecture &amp; Delivery
                </div>
                <h2 className="text-2xl font-bold text-[#202722]">
                  Technical Implementation
                </h2>
                <div className="space-y-3 pt-2">
                  {project.architectureDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E2E3DC]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#687069] leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Specifications */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="tactile-card rounded-2xl p-6 sm:p-8 bg-white space-y-6">
                <h3 className="text-lg font-bold text-[#202722] border-b border-[#E2E3DC] pb-4">
                  Project Specifications
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-xs font-mono text-[#687069] uppercase">
                      Client
                    </div>
                    <div className="font-semibold text-[#202722] mt-0.5">
                      {project.client}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-[#687069] uppercase">
                      Domain &amp; Discipline
                    </div>
                    <div className="font-semibold text-[#202722] mt-0.5">
                      {project.category}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-[#687069] uppercase">
                      Core Technology Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-[#F3F2ED] text-[#202722] border border-[#E2E3DC]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E2E3DC]">
                  <Button
                    asChild
                    size="md"
                    className="w-full"
                  >
                    <Link href="/contact">Discuss a similar system</Link>
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
