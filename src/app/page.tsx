import React from "react";
import { Hero } from "@/components/sections/Hero";
import { SectionBridge } from "@/components/sections/SectionBridge";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Process } from "@/components/sections/Process";
import { ChallengeExplorer } from "@/components/sections/ChallengeExplorer";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionBridge />
      <SelectedWork />
      <ServicesOverview />
      <Process />
      <ChallengeExplorer />
      <AboutIntro />
      <FinalCTA />
    </>
  );
}
