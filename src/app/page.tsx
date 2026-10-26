import React from "react";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionBridge } from "@/components/sections/SectionBridge";
import { OperationalClarity } from "@/components/sections/OperationalClarity";

export default function HomePage() {
  return (
    <>
      {/* 01. Hero & Strategic Positioning */}
      <Hero />

      <OperationalClarity />

      {/* Narrative Transition: Hero -> What We Offer */}
      <SectionBridge
        step="01"
        tag="WHAT WE OFFER"
        title="Software That Fits Your Work"
        subtitle="Custom applications, AI automation, and connected operations — built around your actual process."
        italicPrefix="A better way to run"
        abstractPreview="capabilities"
      />

      {/* 02. Services Overview (The 4 Real Service Pillars) */}
      <ServicesOverview />

      {/* Narrative Transition: What We Offer -> How We Work */}
      <SectionBridge
        step="02"
        tag="HOW WE WORK"
        title="From Need to Working Product"
        subtitle="We learn the workflow, build in weekly sprints, and keep you involved at every decision."
        italicPrefix="A clear path from"
        abstractPreview="methodology"
        variant="accent"
      />

      {/* 04. How We Work (Continuous Delivery Route) */}
      <Process />

      {/* Narrative Transition: How We Work -> Work With Us */}
      <SectionBridge
        step="03"
        tag="WORK WITH US"
        title="A Partner Through Launch"
        subtitle="Direct access to the people building your system, from the first workflow through launch and beyond."
        italicPrefix="Built with you, not"
        abstractPreview="collaboration"
        variant="accent"
      />

      {/* 05. Final CTA (Visual & Strategic Resolution) */}
      <FinalCTA />
    </>
  );
}

