import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description: "Assestics Terms of Service and Engineering Engagement Standards.",
};

export default function TermsPage() {
  return (
    <div className="py-20 md:py-32 bg-[#FCFBF8]">
      <Container size="narrow">
        <SectionHeading
          tag="TERMS OF SERVICE"
          title="Terms of Engagement"
          description="Last updated: October 2026. Commercial and professional standards governing work delivered by Assestics."
        />

        <div className="tactile-card rounded-2xl p-8 sm:p-12 bg-white space-y-8 text-sm sm:text-base text-[#687069] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202722]">
              1. Professional Scope &amp; Deliverables
            </h2>
            <p>
              All engineering engagements with Assestics are executed under formal,
              mutually agreed Statement of Work (SOW) documents detailing
              specifications, milestone reviews, and acceptance criteria.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202722]">
              2. Intellectual Property Ownership
            </h2>
            <p>
              Unless explicitly specified in a custom agreement, upon final
              payment, full intellectual property and source code rights for bespoke
              software applications, custom integrations, and configurations
              transition 100% to the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202722]">
              3. Confidentiality &amp; Non-Disclosure
            </h2>
            <p>
              Assestics maintains strict confidentiality regarding all client
              proprietary information, system architectures, credentials, and
              operational workflows.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202722]">
              4. Direct Inquiries
            </h2>
            <p>
              Legal and contractual questions may be directed to{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[#0891B2] font-semibold underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
