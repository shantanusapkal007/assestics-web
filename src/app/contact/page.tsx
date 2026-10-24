import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { generalFaqs } from "@/content/faqs";
import { Mail, Phone, Clock, ArrowUpRight, HelpCircle } from "lucide-react";
import { EditorialEyebrow } from "@/components/ui/EditorialEyebrow";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries — Assestics",
  description:
    "Discuss your software engineering, AI workflow automation, or supply chain challenge directly with Assestics.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 pb-24 md:pt-24 md:pb-32 bg-[#FCFBF8] ambient-mesh relative">
      <Container>
        <SectionHeading
          tag="GET IN TOUCH"
          title="Let's talk about your project."
          description="Tell us what you want to build or improve. We will review your notes and reply within 24 hours with ideas and next steps."
          className="mb-16"
        />

        {/* Contact Grid: Form on Left, Direct Contact on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Main Form (8 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <ContactForm />
          </div>

          {/* Direct Details Sidebar (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div className="tactile-card rounded-2xl p-6 sm:p-8 bg-white space-y-6">
              <h3 className="text-lg font-bold text-[#202722] border-b border-[#E2E3DC] pb-4">
                Direct Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#F3F2ED] hover:bg-[#EDFBFD] hover:border-[rgba(56,216,228,0.4)] border border-[#E2E3DC] transition-all duration-300 group hover:shadow-[0_2px_12px_rgba(56,216,228,0.1)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(56,216,228,0.06)] flex items-center justify-center text-[#0891B2] shrink-0 border border-[rgba(56,216,228,0.15)] group-hover:shadow-[0_2px_12px_rgba(56,216,228,0.15)] transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#687069]">
                      Direct Email
                    </div>
                    <div className="text-sm font-semibold text-[#202722] group-hover:text-[#0891B2] transition-colors break-all">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#F3F2ED] hover:bg-[#EDFBFD] hover:border-[rgba(56,216,228,0.4)] border border-[#E2E3DC] transition-all duration-300 group hover:shadow-[0_2px_12px_rgba(56,216,228,0.1)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(56,216,228,0.06)] flex items-center justify-center text-[#0891B2] shrink-0 border border-[rgba(56,216,228,0.15)] group-hover:shadow-[0_2px_12px_rgba(56,216,228,0.15)] transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#687069]">
                      Direct Telephone
                    </div>
                    <div className="text-sm font-semibold text-[#202722] group-hover:text-[#0891B2] transition-colors">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FCFBF8] border border-[#E2E3DC]">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(56,216,228,0.06)] flex items-center justify-center text-[#0891B2] shrink-0 border border-[rgba(56,216,228,0.15)]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#687069]">
                      Response Guarantee
                    </div>
                    <div className="text-sm font-semibold text-[#202722]">
                      Within 24 business hours
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#E2E3DC] space-y-3">
                <div className="text-xs font-mono uppercase text-[#687069]">
                  Verified Profiles
                </div>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider px-3 py-1.5 rounded-[3px] bg-white hover:border-[var(--color-brand-strong)] border border-[#E2E3DC] text-[#202722] shadow-2xs transition-all"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[#0891B2]" />
                  </a>
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider px-3 py-1.5 rounded-[3px] bg-white hover:border-[var(--color-brand-strong)] border border-[#E2E3DC] text-[#202722] shadow-2xs transition-all"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-[#0891B2]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement FAQs */}
        <div className="relative max-w-4xl mx-auto pt-16 space-y-8">
          <div
            className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(226,227,220,0.6) 20%, rgba(56,216,228,0.4) 50%, rgba(226,227,220,0.6) 80%, transparent 100%)",
            }}
          />
          <div className="text-center space-y-3">
            <EditorialEyebrow step="01" label="ENGAGEMENT PROCESS" variant="plate" />
            <h2 className="text-3xl font-bold text-[#202722]">
              What happens after you reach out?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-[#E2E3DC] space-y-2">
              <div className="text-xs font-mono text-[#0891B2] font-bold">
                STEP 01
              </div>
              <div className="text-base font-bold text-[#202722]">
                Discovery Call
              </div>
              <p className="text-xs text-[#687069] leading-relaxed">
                A friendly 30-minute call to understand your business goals,
                current tools, and where your team loses time.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#E2E3DC] space-y-2">
              <div className="text-xs font-mono text-[#0891B2] font-bold">
                STEP 02
              </div>
              <div className="text-base font-bold text-[#202722]">
                Blueprint &amp; Scope
              </div>
              <p className="text-xs text-[#687069] leading-relaxed">
                We deliver an architectural blueprint with clear milestones,
                risk mitigations, and fixed deliverable timelines.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#E2E3DC] space-y-2">
              <div className="text-xs font-mono text-[#0891B2] font-bold">
                STEP 03
              </div>
              <div className="text-base font-bold text-[#202722]">
                Sprint Delivery
              </div>
              <p className="text-xs text-[#687069] leading-relaxed">
                Iterative weekly builds deployed to staging with daily progress
                transparency and milestone sign-offs.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="pt-16 border-t border-[#E2E3DC] space-y-6">
            <div className="text-center space-y-3">
              <EditorialEyebrow step="02" label="FREQUENTLY ASKED QUESTIONS" variant="plate" />
              <h2 className="text-3xl font-bold text-[#202722]">
                Common Questions
              </h2>
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              {generalFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="tactile-card rounded-xl p-6 bg-white space-y-2"
                >
                  <div className="flex items-start gap-2.5 font-bold text-base text-[#202722]">
                    <HelpCircle className="w-5 h-5 text-[#0891B2] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </div>
                  <p className="text-sm text-[#687069] pl-7 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
