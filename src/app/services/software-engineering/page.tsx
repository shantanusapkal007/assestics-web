import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Software & Digital Products Engineering",
  description:
    "Assestics engineers bespoke web applications, customer portals, and internal tools built around real operational business needs.",
};

export default function SoftwareEngineeringPage() {
  const service = services.find((s) => s.slug === "software-engineering");
  if (!service) notFound();

  // Architecture visual
  const visual = (
    <div className="bg-[#F3F2ED] rounded-2xl p-6 sm:p-8 border border-[#E2E3DC] space-y-4">
      <div className="text-xs font-mono uppercase tracking-wider text-[#0891B2] font-semibold">
        FULL-STACK ARCHITECTURAL PRINCIPLES
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-[#E2E3DC]">
          <div className="text-xs font-mono text-[#0891B2] font-bold">PERFORMANCE</div>
          <div className="text-base font-bold text-[#202722] mt-1">&lt;100ms TTFB</div>
          <p className="text-xs text-[#687069] mt-2 leading-relaxed">
            Edge-rendered Next.js React 19 pages with aggressive static asset caching and minimal JS payload.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-[#E2E3DC]">
          <div className="text-xs font-mono text-[#0891B2] font-bold">TYPE SAFETY</div>
          <div className="text-base font-bold text-[#202722] mt-1">End-to-End TypeScript</div>
          <p className="text-xs text-[#687069] mt-2 leading-relaxed">
            Strict runtime contract validation using Zod and unified API schemas across frontend and database.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-[#E2E3DC]">
          <div className="text-xs font-mono text-[#0891B2] font-bold">CRAFTSMANSHIP</div>
          <div className="text-base font-bold text-[#202722] mt-1">Bespoke Design System</div>
          <p className="text-xs text-[#687069] mt-2 leading-relaxed">
            Fluid responsive typography, tailored color tokens, micro-interactions, and accessible keyboard navigation.
          </p>
        </div>
      </div>
    </div>
  );

  return <ServiceLayout service={service} visualComponent={visual} />;
}
