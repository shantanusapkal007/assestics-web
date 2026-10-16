import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Award, Compass, Cpu } from "lucide-react";

export function AboutIntro() {
  return (
    <section className="py-24 md:py-32 bg-[#FCFBF8]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Founder Portrait & Credentials Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E3DC] bg-white shadow-[0_8px_30px_rgba(32,39,34,0.06)] group">
              <div className="relative h-[440px] sm:h-[480px] w-full bg-[#EAE9E2]">
                <Image
                  src={siteConfig.founder.image}
                  alt={`${siteConfig.founder.name} - ${siteConfig.founder.role}`}
                  fill
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Lower Badge Details */}
              <div className="p-6 bg-white border-t border-[#E2E3DC] space-y-1">
                <div className="text-lg font-bold text-[#202722]">
                  {siteConfig.founder.name}
                </div>
                <div className="text-xs font-mono font-semibold text-[#0891B2]">
                  {siteConfig.founder.role}
                </div>
                <p className="text-xs text-[#687069] pt-1">
                  M.Sc. Digital Factory &amp; Operational Excellence (HDBW Munich)
                </p>
              </div>
            </div>

            {/* Architectural corner embellishment */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#38D8E4] pointer-events-none -z-10" />
          </div>

          {/* Right Column: Narrative and Operational Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              tag="ABOUT ASSESTICS"
              title="Better systems start with understanding."
              description="Assestics brings software engineering, AI automation and operational thinking together to help businesses solve complex problems with practical digital solutions."
              className="mb-6"
            />

            <div className="space-y-4 text-sm sm:text-base text-[#687069] leading-relaxed">
              <p>
                From the first conversation to implementation, our focus is on
                building technology that fits the problem, works reliably and
                creates a foundation for future growth.
              </p>
              <p>
                Great digital products fail without reliable underlying systems.
                That is why we unite industrial engineering principles—rooted in
                Munich’s Digital Factory and Smart Logistics standards—with
                cutting-edge cloud DevOps, custom web engineering, and autonomous
                AI agents.
              </p>
            </div>

            {/* Core Values / Operational Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E2E3DC]">
              <div className="p-4 rounded-xl bg-[#F3F2ED] border border-[#E2E3DC]">
                <Compass className="w-5 h-5 text-[#0891B2] mb-2" />
                <div className="text-xs font-bold text-[#202722] mb-1">
                  Architectural Precision
                </div>
                <p className="text-[11px] text-[#687069] leading-normal">
                  Systems built with strict blueprints, verified boundaries, and
                  predictable scaling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F3F2ED] border border-[#E2E3DC]">
                <Cpu className="w-5 h-5 text-[#0891B2] mb-2" />
                <div className="text-xs font-bold text-[#202722] mb-1">
                  Practical Autonomy
                </div>
                <p className="text-[11px] text-[#687069] leading-normal">
                  AI that automates repetitive busywork while keeping humans in
                  strategic control.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F3F2ED] border border-[#E2E3DC]">
                <Award className="w-5 h-5 text-[#0891B2] mb-2" />
                <div className="text-xs font-bold text-[#202722] mb-1">
                  Honest Accountability
                </div>
                <p className="text-[11px] text-[#687069] leading-normal">
                  No fabricated metrics or tech hype—only tested, measurable
                  operational throughput.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button href="/about" variant="outline" size="md">
                <span>Learn more about our team &amp; philosophy</span>
                <LinkArrow />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
