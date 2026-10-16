import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { ServiceVisualStage } from "@/components/sections/ServiceVisualStage";

export const metadata: Metadata = {
  title: "Cloud Architecture & DevOps Engineering",
  description:
    "Assestics builds reliable cloud infrastructure, automated CI/CD deployment pipelines, containerization, and zero-downtime platforms.",
};

export default function CloudDevOpsPage() {
  const service = services.find((s) => s.slug === "cloud-devops");
  if (!service) notFound();

  return (
    <ServiceLayout
      service={service}
      visualComponent={<ServiceVisualStage activeId="cloud-devops" />}
    />
  );
}
