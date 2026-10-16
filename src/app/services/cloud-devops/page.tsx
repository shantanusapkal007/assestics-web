import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceLayout } from "@/components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Cloud Infrastructure & DevOps Engineering",
  description:
    "Assestics designs resilient cloud infrastructure, automated CI/CD pipelines, and zero-downtime deployment topologies.",
};

export default function CloudDevOpsPage() {
  const service = services.find((s) => s.slug === "cloud-devops");
  if (!service) notFound();

  // Architecture visual
  const visual = (
    <div className="bg-[#F3F2ED] rounded-2xl p-6 sm:p-8 border border-[#E2E3DC] space-y-4">
      <div className="text-xs font-mono uppercase tracking-wider text-[#0891B2] font-semibold">
        DEPLOYMENT PIPELINE TOPOLOGY // ZERO DOWNTIME
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
        <div className="bg-white p-4 rounded-xl border border-[#E2E3DC]">
          <div className="text-xs font-mono text-[#0891B2] font-bold">STAGE 01</div>
          <div className="text-sm font-semibold text-[#202722] mt-1">Git Push</div>
          <div className="text-[11px] text-[#687069] mt-0.5">Webhook Trigger</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-[#E2E3DC]">
          <div className="text-xs font-mono text-[#0891B2] font-bold">STAGE 02</div>
          <div className="text-sm font-semibold text-[#202722] mt-1">CI Verification</div>
          <div className="text-[11px] text-[#687069] mt-0.5">Unit &amp; E2E Tests</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-[#E2E3DC]">
          <div className="text-xs font-mono text-[#0891B2] font-bold">STAGE 03</div>
          <div className="text-sm font-semibold text-[#202722] mt-1">Canary Rollout</div>
          <div className="text-[11px] text-[#687069] mt-0.5">Health Probe Gate</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-[#E2E3DC]">
          <div className="text-xs font-mono text-[#0891B2] font-bold">STAGE 04</div>
          <div className="text-sm font-semibold text-[#202722] mt-1">Telemetry</div>
          <div className="text-[11px] text-[#687069] mt-0.5">Grafana / Alerting</div>
        </div>
      </div>
    </div>
  );

  return <ServiceLayout service={service} visualComponent={visual} />;
}
