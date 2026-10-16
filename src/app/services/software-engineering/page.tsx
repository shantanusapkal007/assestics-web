import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { ServiceVisualStage } from "@/components/sections/ServiceVisualStage";

export const metadata: Metadata = {
  title: "Software & Digital Products Engineering",
  description:
    "Assestics designs and engineers bespoke web platforms, SaaS applications, and enterprise software built around how your organization operates.",
};

export default function SoftwareEngineeringPage() {
  const service = services.find((s) => s.slug === "software-engineering");
  if (!service) notFound();

  return (
    <ServiceLayout
      service={service}
      visualComponent={<ServiceVisualStage activeId="software-engineering" />}
    />
  );
}
