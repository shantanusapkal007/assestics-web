import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/process";
import { CheckCircle2 } from "lucide-react";

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-[#FCFBF8] border-b border-[#E2E3DC]">
      <Container>
        <SectionHeading
          tag="HOW WE WORK"
          title="From complexity to clarity."
          description="A disciplined, engineering-led methodology that de-risks technical delivery and builds systems that last."
        />

        {/* 3 Stages Horizontal / Stacked Architecture */}
        <div className="relative">
          {/* Subtle connecting horizontal pipeline rail (desktop) */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[2px] bg-[#E2E3DC] z-0">
            <div className="h-full bg-gradient-to-r from-[#38D8E4] via-[#0891B2] to-[#38D8E4] w-full opacity-60" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="tactile-card rounded-2xl p-8 flex flex-col justify-between hover:border-[#38D8E4] transition-all bg-white"
              >
                <div>
                  {/* Step Number and Subtitle Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#FCFBF8] border-2 border-[#38D8E4] flex items-center justify-center font-mono font-bold text-lg text-[#202722] shadow-[0_2px_8px_rgba(56,216,228,0.2)]">
                      {step.number}
                    </div>
                    <span className="mono-tag text-[10px]">
                      STAGE {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[#202722] mb-2">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-[#0891B2] mb-4">
                    {step.subtitle}
                  </div>
                  <p className="text-sm text-[#687069] leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Bullet details */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-[#E2E3DC]">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-2 text-xs text-[#687069]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0891B2] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Deliverable Badge */}
                <div className="pt-4 border-t border-[#E2E3DC] bg-[#F3F2ED] -mx-8 -mb-8 p-4 rounded-b-2xl border-t border-[#E2E3DC]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#687069]">
                    Primary Deliverable
                  </div>
                  <div className="text-xs font-semibold text-[#202722] mt-0.5">
                    {step.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
