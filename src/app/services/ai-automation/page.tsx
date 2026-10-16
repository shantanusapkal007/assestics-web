import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "AI & Business Automation Engineering",
  description:
    "Assestics builds production AI agents, WhatsApp automation, and connected workflows that eliminate manual operational busywork.",
};

export default function AiAutomationPage() {
  const service = services.find((s) => s.slug === "ai-automation");
  if (!service) notFound();

  // Architectural workflow visual
  const visual = (
    <div className="bg-[#F3F2ED] rounded-2xl p-6 sm:p-8 border border-[#E2E3DC] space-y-4">
      <div className="text-xs font-mono uppercase tracking-wider text-[#0891B2] font-semibold">
        SYSTEM FLOW // AUTONOMOUS AGENT ORCHESTRATION
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
        <div className="bg-white p-4 rounded-xl border border-[#E2E3DC]">
          <div className="text-xs font-mono text-[#0891B2] font-bold">01 INGEST</div>
          <div className="text-sm font-semibold text-[#202722] mt-1">Multi-Channel</div>
          <div className="text-[11px] text-[#687069] mt-0.5">WhatsApp / Email / Web</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-[#E2E3DC]">
          <div className="text-xs font-mono text-[#0891B2] font-bold">02 REASON</div>
          <div className="text-sm font-semibold text-[#202722] mt-1">RAG Context</div>
          <div className="text-[11px] text-[#687069] mt-0.5">Verified Documents</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-[#E2E3DC]">
          <div className="text-xs font-mono text-[#0891B2] font-bold">03 EXECUTE</div>
          <div className="text-sm font-semibold text-[#202722] mt-1">Tool Calling</div>
          <div className="text-[11px] text-[#687069] mt-0.5">CRM / ERP Updates</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-[#E2E3DC]">
          <div className="text-xs font-mono text-[#0891B2] font-bold">04 ESCALATE</div>
          <div className="text-sm font-semibold text-[#202722] mt-1">Human Gate</div>
          <div className="text-[11px] text-[#687069] mt-0.5">Confidence Checks</div>
        </div>
      </div>
    </div>
  );

  return <ServiceLayout service={service} visualComponent={visual} />;
}
