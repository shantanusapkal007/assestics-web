import React from "react";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 01. Hero & Positioning */}
      <Hero />

      {/* 02. Services Overview (The 4 Real Service Pillars) */}
      <ServicesOverview />

      {/* 03. Selected Work (Evidence of Real Engineered Deliveries) */}
      <SelectedWork />

      {/* 04. How We Work (Continuous Delivery Route) */}
      <Process />

      {/* 05. Final CTA (Visual Resolution) */}
      <FinalCTA />
    </>
  );
}
