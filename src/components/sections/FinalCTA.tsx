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
      className="relative overflow-hidden pt-8 pb-20 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-32 bg-gradient-to-b from-[var(--color-canvas)] via-[var(--color-canvas-secondary)] to-[var(--color-surface)]"
      aria-labelledby="final-cta-heading"
    >
      {/* Top Optical Horizon Transition Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(56,216,228,0.3)] to-transparent pointer-events-none" />

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
            <div className="mb-4">
              <EditorialEyebrow step="03" label="LET'S TALK // GET IN TOUCH" variant="plate" />
            </div>
            <h2
              id="final-cta-heading"
              className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-7xl"
            >
              <KineticText triggerOnScroll>Let&apos;s build something that works.</KineticText>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)] sm:text-xl leading-relaxed">
              Tell us what is slowing your team down. We will share ideas, show you working demos, and build a solution that fits your exact needs.
            </p>
          </div>

          {/* Action Destination */}
          <div className="lg:col-span-4 lg:flex lg:flex-col lg:items-end">
            <div
              ref={ctaBtnRef}
              className="rounded-2xl border border-[var(--color-border)] p-1.5 transition-all duration-500"
              style={{ background: 'linear-gradient(135deg, rgba(252,251,248,0.9) 0%, rgba(237,251,253,0.5) 100%)' }}
            >
              <Button asChild size="lg" className="w-full group text-base sm:w-auto">
                <Link href="/contact">
                  Discuss a project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Button>
            </div>

            <div className="mt-5 flex flex-col gap-2.5 font-mono text-xs text-[var(--color-text-secondary)] sm:text-right">
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
    </section>
  );
}
