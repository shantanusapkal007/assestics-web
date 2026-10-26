import React from "react";
import { MaterialField } from "@/components/ui/MaterialField";

const outcomes = [
  {
    from: "Manual handoffs",
    to: "Connected workflows",
    detail: "Move information between the people and tools that need it, without chasing updates or copying data twice.",
  },
  {
    from: "Scattered tools",
    to: "One reliable system",
    detail: "Bring your existing software, customer data, and day-to-day processes into a system your team can trust.",
  },
  {
    from: "Hidden bottlenecks",
    to: "Clearer operations",
    detail: "Make the work visible, reduce avoidable steps, and give the people running the business better information.",
  },
];

/** A plain-language bridge between Assestics' IT capability and a buyer's operational reality. */
export function OperationalClarity() {
  return (
    <section className="operational-clarity relative overflow-hidden py-20 sm:py-28 lg:py-36" aria-labelledby="operational-clarity-title">
      <MaterialField variant="bridge" />
      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 xl:px-12">
        <div className="lg:col-span-5">
          <p className="brand-stamp">Why Assestics</p>
          <h2 id="operational-clarity-title" className="mt-5 max-w-lg font-heading text-4xl font-black tracking-[-.045em] text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl leading-[.98]">
            IT should make work feel simpler.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--color-text-secondary)]">
            We start with the way your team actually works, then design the software and automation that removes the friction—not another tool to manage.
          </p>
        </div>

        <dl className="operational-outcomes lg:col-span-7" aria-label="What changes when you work with Assestics">
          {outcomes.map((outcome) => (
            <div key={outcome.from} className="operational-outcomes__item">
              <dt className="operational-outcomes__from">{outcome.from}</dt>
              <dd className="operational-outcomes__to">{outcome.to}</dd>
              <dd className="operational-outcomes__detail">{outcome.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
