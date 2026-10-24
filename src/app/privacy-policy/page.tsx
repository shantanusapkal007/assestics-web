import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Assestics Privacy Policy and data handling standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 md:py-32 bg-[#FCFBF8]">
      <Container size="narrow">
        <SectionHeading
          tag="LEGAL COMPLIANCE"
          title="Privacy Policy"
          description="Last updated: October 2026. How Assestics handles and protects information."
        />

        <div className="tactile-card rounded-2xl p-5 sm:p-8 lg:p-12 bg-white space-y-8 text-sm sm:text-base text-[#687069] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202722]">
              1. Information We Collect
            </h2>
            <p>
              When you submit an enquiry through our website or contact us
              directly via email or telephone, we collect the contact details you
              provide (name, email address, company name, and project description).
              We do not sell, rent, or monetize your personal or business data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202722]">
              2. How We Use Information
            </h2>
            <p>
              Information submitted is used exclusively to evaluate technical project
              feasibility, communicate regarding project enquiries, and fulfill
              contractual agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202722]">
              3. Data Security &amp; Retention
            </h2>
            <p>
              We apply enterprise security standards, including encrypted
              communications (TLS 1.3), restricted role-based internal access,
              and periodic deletion of stale enquiry logs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202722]">
              4. Contact Regarding Privacy
            </h2>
            <p>
              For data access, correction, or deletion requests, contact our
              compliance officer directly at{" "}
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
