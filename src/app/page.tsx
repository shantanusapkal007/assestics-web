import React from "react";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Process } from "@/components/sections/Process";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ServicesOverview />
      <Process />
      <AboutIntro />
      <FinalCTA />
    </>
  );
}
