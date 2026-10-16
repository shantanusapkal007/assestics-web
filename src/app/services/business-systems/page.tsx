import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { ServiceVisualStage } from "@/components/sections/ServiceVisualStage";

export const metadata: Metadata = {
  title: "Business Software & ERP Systems",
  description:
    "Assestics connects company processes, manufacturing execution, inventory ledgers, and operational decisions through tailored software.",
};

export default function BusinessSystemsPage() {
  const service = services.find((s) => s.slug === "business-systems");
  if (!service) notFound();

  return (
    <ServiceLayout
      service={service}
      visualComponent={<ServiceVisualStage activeId="business-systems" />}
    />
  );
}
