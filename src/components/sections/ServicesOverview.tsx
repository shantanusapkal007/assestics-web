import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Bot, Layers, Cloud, Network } from "lucide-react";

export function ServicesOverview() {
  const icons = [Bot, Layers, Cloud, Network];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F3F2ED] border-y border-[#E2E3DC]">
      <Container>
        <SectionHeading
          tag="CORE CAPABILITIES"
          title="Technology that works together."
          description="From intelligent automation to reliable infrastructure, we design and build the systems behind better business operations."
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.slice(0, 4).map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={service.id}
                className="tactile-card rounded-2xl p-8 flex flex-col justify-between hover:border-[#38D8E4] transition-all group"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-bold text-[#A0A8A1]">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#EDFBFD] border border-[#D5F6F9] flex items-center justify-center text-[#0891B2] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-2xl font-bold tracking-tight text-[#202722] mb-3 group-hover:text-[#0891B2] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#687069] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Capabilities List */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-[#E2E3DC]">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#202722] font-semibold mb-3">
                      Capabilities Include:
                    </div>
                    {service.capabilities.slice(0, 4).map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2.5 text-xs text-[#687069]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38D8E4]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link to Dedicated Service Page */}
                <div className="pt-4 border-t border-[#E2E3DC] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#202722] hover:text-[#0891B2] transition-colors"
                  >
                    <span>Explore {service.title.split("&")[0].trim()}</span>
                    <LinkArrow />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
