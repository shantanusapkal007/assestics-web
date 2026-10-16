import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Business Systems & Custom ERP Integration",
  description:
    "Assestics connects fragmented operational tools, inventory feeds, and legacy ERP databases into unified real-time management platforms.",
};

export default function BusinessSystemsPage() {
  const service = services.find((s) => s.slug === "business-systems");
  if (!service) notFound();

  // Architecture visual
  const visual = (
    <div className="bg-[#F3F2ED] rounded-2xl p-6 sm:p-8 border border-[#E2E3DC] space-y-4">
      <div className="text-xs font-mono uppercase tracking-wider text-[#0891B2] font-semibold">
        DATA UNIFICATION ARCHITECTURE // SILO CONVERGENCE
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-[#E2E3DC] text-center">
          <div className="text-xs font-mono text-[#687069]">LEGACY SOURCES</div>
          <div className="text-sm font-bold text-[#202722] mt-1">Spreadsheets &amp; Old DBs</div>
          <p className="text-xs text-[#687069] mt-2 leading-relaxed">
            Automated ETL connectors normalize and sanitize messy input data.
          </p>
        </div>
        <div className="bg-[#EDFBFD] p-5 rounded-xl border border-[#D5F6F9] text-center">
          <div className="text-xs font-mono text-[#0891B2] font-bold">ASSESTICS BUS</div>
          <div className="text-sm font-bold text-[#202722] mt-1">Unified State Engine</div>
          <p className="text-xs text-[#687069] mt-2 leading-relaxed">
            Real-time PostgreSQL + Redis data bus broadcasting state changes.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-[#E2E3DC] text-center">
          <div className="text-xs font-mono text-[#687069]">OPERATOR FRONTEND</div>
          <div className="text-sm font-bold text-[#202722] mt-1">Live Actionable Control</div>
          <p className="text-xs text-[#687069] mt-2 leading-relaxed">
            Role-based dashboard for shopfloor, inventory, and sales teams.
          </p>
        </div>
      </div>
    </div>
  );

  return <ServiceLayout service={service} visualComponent={visual} />;
}
