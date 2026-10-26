"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KineticText } from "@/components/motion/KineticText";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";
import { EditorialEyebrow } from "@/components/ui/EditorialEyebrow";
import { MaterialField } from "@/components/ui/MaterialField";
import { BrandLockup } from "@/components/ui/BrandLockup";

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaBtnRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!sectionRef.current) return;

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "center center",
          scrub: 0.5,
        },
      });

      if (ctaBtnRef.current) {
        tl.to(
          ctaBtnRef.current,
          {
            borderColor: "#38D8E4",
            boxShadow: "0 4px 32px -2px rgba(56, 216, 228, 0.3)",
            duration: 0.4,
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="material-section--dark relative overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-32"
      aria-labelledby="final-cta-heading"
    >
      <MaterialField variant="dark" />
      {/* Top Optical Horizon Transition Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(56,216,228,0.3)] to-transparent pointer-events-none" />

      {/* Ingress Conduit from SectionBridge 03 */}
      <div className="pointer-events-none w-full flex justify-center -mt-6 mb-8 sm:mb-10" aria-hidden="true">
        <div className="flex flex-col items-center">
          <div className="w-[1.5px] h-8 bg-gradient-to-b from-emerald-500 to-[#38D8E4]" />
          <div className="flex items-center gap-2 mt-1 font-mono text-[9px] text-[var(--color-brand-strong)] uppercase tracking-widest opacity-70">
            <span className="h-1 w-1 rounded-full bg-[#38D8E4] animate-pulse" />
            <span>COLLABORATION_PORT // ACTIVE_RESOLUTION</span>
          </div>
        </div>
      </div>

      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]"
          style={{ background: 'radial-gradient(circle at 70% 30%, #38D8E4 0%, transparent 60%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.04]"
          style={{ background: 'radial-gradient(circle at 30% 70%, #0891B2 0%, transparent 60%)' }}
        />
      </div>

      <Container>
        <div ref={contentRef}>
        {/* Spacious Typographic Layout */}
        <div className="grid grid-cols-1 items-end justify-between gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <BrandLockup tone="dark" className="mb-8" />
            <div className="mb-4">
              <EditorialEyebrow step="03" label="LET'S TALK // GET IN TOUCH" variant="plate" />
            </div>

            {/* Editorial Playfair Italic Contrast Accent */}
            <div className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[var(--color-brand-strong)] font-normal tracking-wide">
              Ready to make work easier?
            </div>

            <h2
              id="final-cta-heading"
              className="mt-2 font-heading text-4xl font-extrabold tracking-tight text-[#f7f5ef] sm:text-5xl lg:text-7xl leading-[1.05]"
            >
              <KineticText triggerOnScroll>Make your systems work harder.</KineticText>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-[#c5d0c8] sm:text-xl leading-relaxed">
              Tell us where work gets stuck. We&apos;ll help you identify the right next step, show you what is possible, and build a solution around your team.
            </p>
          </div>

          {/* Action Destination */}
          <div className="lg:col-span-4 lg:flex lg:flex-col lg:items-end">
            <div
              ref={ctaBtnRef}
              className="rounded-2xl border border-[var(--color-border)] p-1.5 transition-all duration-500 shadow-subtle hover:border-[var(--color-brand-strong)]"
              style={{ background: 'linear-gradient(135deg, rgba(252,251,248,0.95) 0%, rgba(237,251,253,0.6) 100%)' }}
            >
              <Button asChild size="lg" className="w-full group text-base sm:w-auto">
                <Link href="/contact">
                  Map a workflow
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Button>
            </div>

            <div className="mt-5 flex flex-col gap-2.5 font-mono text-xs text-[#d8e0da] sm:text-right">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-[var(--color-brand-strong)] transition-colors duration-300 group"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[rgba(56,216,228,0.06)] group-hover:bg-[rgba(56,216,228,0.12)] transition-colors">
                  <Mail className="h-3 w-3 text-[var(--color-brand-strong)]" />
                </span>
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2 hover:text-[var(--color-brand-strong)] transition-colors duration-300 group"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[rgba(56,216,228,0.06)] group-hover:bg-[rgba(56,216,228,0.12)] transition-colors">
                  <Phone className="h-3 w-3 text-[var(--color-brand-strong)]" />
                </span>
                <span>{siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </Container>

      {/* Bottom Optical Horizon seamlessly connecting into Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(56,216,228,0.4)] to-transparent pointer-events-none" />
    </section>
  );
}
