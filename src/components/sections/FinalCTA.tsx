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

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const ctaBtnRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!sectionRef.current || !pathRef.current) return;

      const totalLength = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "center center",
          scrub: 0.5,
        },
      });

      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "power2.inOut",
      });

      if (ctaBtnRef.current) {
        tl.to(
          ctaBtnRef.current,
          {
            borderColor: "#38D8E4",
            boxShadow: "0 4px 20px -2px rgba(56, 216, 228, 0.25)",
            duration: 0.4,
          },
          "-=0.2"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-36 border-t border-[var(--color-border)] bg-[var(--color-surface)]"
      aria-labelledby="final-cta-heading"
    >
      <Container>
        {/* Editorial Top Routing Line resolving into CTA */}
        <div className="relative mb-12 hidden lg:block">
          <svg
            viewBox="0 0 1000 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full overflow-visible"
          >
            <path
              d="M 50 10 C 300 10, 450 70, 750 70"
              stroke="#E2E3DC"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              ref={pathRef}
              d="M 50 10 C 300 10, 450 70, 750 70"
              stroke="#38D8E4"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="750" cy="70" r="5" fill="#0891B2" />
          </svg>
        </div>

        {/* Spacious Typographic Layout */}
        <div className="grid grid-cols-1 items-end justify-between gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-strong)] uppercase">
              START A CONVERSATION
            </span>
            <h2
              id="final-cta-heading"
              className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-7xl"
            >
              <KineticText triggerOnScroll>Have a problem worth solving?</KineticText>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)] sm:text-xl leading-relaxed">
              Tell us what you are trying to improve. Let&apos;s explore the right solution together—from custom AI
              assistants to resilient cloud architecture and enterprise ERP workflows.
            </p>
          </div>

          {/* Action Destination */}
          <div className="lg:col-span-4 lg:flex lg:flex-col lg:items-end">
            <div ref={ctaBtnRef} className="rounded-xl border border-[var(--color-border)] p-1.5 transition-all">
              <Button asChild size="lg" className="w-full group text-base sm:w-auto">
                <Link href="/contact">
                  Discuss a project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="mt-4 flex flex-col gap-2 font-mono text-xs text-[var(--color-text-secondary)] sm:text-right">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-1.5 hover:text-[var(--color-brand-strong)]"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-1.5 hover:text-[var(--color-brand-strong)]"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
