import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Supply Chain & Operations Consulting — Digital Factory",
  description:
    "Assestics optimizes industrial and commercial supply chains through Digital Factory methodology, IoT telemetry, predictive stockout models, and real-time control towers.",
};

export default function SupplyChainPage() {
  const service = services.find((s) => s.slug === "supply-chain");
  if (!service) notFound();

  // Specialist Digital Factory / Supply Chain Architecture visual
  const visual = (
    <div className="bg-[#F3F2ED] rounded-2xl p-6 sm:p-8 border border-[#E2E3DC] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E3DC] pb-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#0891B2] font-semibold">
            DIGITAL FACTORY FRAMEWORK // HDBW MUNICH METHODOLOGY
          </div>
          <h3 className="text-lg font-bold text-[#202722] mt-0.5">
            End-to-End Operational Control Tower
          </h3>
        </div>
        <span className="mono-tag text-[10px]">PREDICTIVE LOGISTICS</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
        <div className="bg-white p-4 rounded-xl border border-[#E2E3DC] space-y-1">
          <div className="text-xs font-mono text-[#0891B2] font-bold">STAGE 01</div>
          <div className="text-sm font-bold text-[#202722]">IoT Telemetry</div>
          <p className="text-[11px] text-[#687069] leading-tight">
            Sensors on shopfloors, pallets, and transit trucks.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-[#E2E3DC] space-y-1">
          <div className="text-xs font-mono text-[#0891B2] font-bold">STAGE 02</div>
          <div className="text-sm font-bold text-[#202722]">Digital Twin</div>
          <p className="text-[11px] text-[#687069] leading-tight">
            Virtual simulation of plant bottlenecks and cycle times.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-[#E2E3DC] space-y-1">
          <div className="text-xs font-mono text-[#0891B2] font-bold">STAGE 03</div>
          <div className="text-sm font-bold text-[#202722]">Predictive Flow</div>
          <p className="text-[11px] text-[#687069] leading-tight">
            Lead-time regression anticipating component stockouts.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-[#E2E3DC] space-y-1">
          <div className="text-xs font-mono text-[#0891B2] font-bold">STAGE 04</div>
          <div className="text-sm font-bold text-[#202722]">Audit Ledger</div>
          <p className="text-[11px] text-[#687069] leading-tight">
            Immutable tracking of custody and scope-3 emissions.
          </p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white border border-[#E2E3DC] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-[#687069] leading-relaxed">
          <span className="font-bold text-[#202722]">Signature Differentiator:</span>{" "}
          Unlike standard web agencies, our supply chain practice is grounded in genuine industrial operational research from Munich, bridging software directly to warehouse mechanics.
        </div>
      </div>
    </div>
  );

  return <ServiceLayout service={service} visualComponent={visual} />;
}
