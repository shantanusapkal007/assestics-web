import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { ServiceVisualStage } from "@/components/sections/ServiceVisualStage";

export const metadata: Metadata = {
  title: "AI & Business Automation Engineering",
  description:
    "Assestics builds production AI agents, WhatsApp automation, and connected workflows that eliminate manual operational busywork.",
};

export default function AiAutomationPage() {
  const service = services.find((s) => s.slug === "ai-automation");
  if (!service) notFound();

  return (
    <ServiceLayout
      service={service}
      visualComponent={<ServiceVisualStage activeId="ai-automation" />}
    />
  );
}
