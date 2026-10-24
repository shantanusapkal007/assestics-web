import React from "react";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionBridge } from "@/components/sections/SectionBridge";

export default function HomePage() {
  return (
    <>
      {/* 01. Hero & Strategic Positioning */}
      <Hero />

      {/* Narrative Transition: Hero -> What We Offer */}
      <SectionBridge
        step="01"
        tag="WHAT WE OFFER"
        title="Custom Software & Smart Automation"
        subtitle="Practical digital tools built around how your team actually works."
        italicPrefix="Simple tools for"
        abstractPreview="capabilities"
      />

      {/* 02. Services Overview (The 4 Real Service Pillars) */}
      <ServicesOverview />

      {/* Narrative Transition: What We Offer -> How We Work */}
      <SectionBridge
        step="02"
        tag="HOW WE WORK"
        title="From Concept to Launch in Weeks"
        subtitle="No guesswork, no endless meetings. Just weekly progress and working software."
        italicPrefix="A clear, honest path"
        abstractPreview="methodology"
        variant="accent"
      />

      {/* 04. How We Work (Continuous Delivery Route) */}
      <Process />

      {/* Narrative Transition: How We Work -> Work With Us */}
      <SectionBridge
        step="03"
        tag="WORK WITH US"
        title="Ready to Upgrade Your Systems?"
        subtitle="Tell us where your team loses time. We will show you how we can fix it."
        italicPrefix="Let's build something"
        abstractPreview="collaboration"
        variant="accent"
      />

      {/* 05. Final CTA (Visual & Strategic Resolution) */}
      <FinalCTA />
    </>
  );
}

