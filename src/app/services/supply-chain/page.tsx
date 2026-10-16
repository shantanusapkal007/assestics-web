import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { ServiceVisualStage } from "@/components/sections/ServiceVisualStage";

export const metadata: Metadata = {
  title: "Supply Chain & Digital Factory Consulting",
  description:
    "Assestics applies German Digital Factory engineering and simulation methodology to solve freight, inventory, and supply chain bottlenecks.",
};

export default function SupplyChainPage() {
  const service = services.find((s) => s.slug === "supply-chain");
  if (!service) notFound();

  return (
    <ServiceLayout
      service={service}
      visualComponent={<ServiceVisualStage activeId="business-systems" />}
    />
  );
}
