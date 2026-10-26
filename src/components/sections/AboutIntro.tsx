"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KineticText } from "@/components/motion/KineticText";
import { ArrowUpRight, GraduationCap, Award } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";

export function AboutIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!sectionRef.current) return;

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: "inset(0 0 100% 0)", scale: 1.05 },
          {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
            duration: 1.1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 78%",
              once: true,
            },
          }
        );
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-36"
      aria-labelledby="about-intro-title"
    >
      <Container>
        {/* Editorial Section Header */}
        <div className="mb-16 border-b border-[var(--color-border)] pb-8">
          <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-strong)] uppercase">
            HUMAN CONTEXT · LEADERSHIP & ETHOS
          </span>
          <h2
            id="about-intro-title"
            className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-6xl"
          >
            <KineticText triggerOnScroll>Better systems start with understanding.</KineticText>
          </h2>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (60%): Editorial Thesis */}
          <div ref={textRef} className="space-y-6 lg:col-span-7">
            <p className="text-xl leading-relaxed font-medium text-[var(--color-text-primary)] sm:text-2xl">
              Assestics brings software engineering, AI automation and operational thinking together to help businesses
              solve complex problems with practical digital solutions.
            </p>

            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              From the first conversation to implementation, our focus is on building technology that fits the problem,
              works reliably and creates a foundation for future growth. We reject software that exists for its own sake;
              every line of code and automated agent must deliver tangible clarity to your operations.
            </p>

            {/* Leadership Verification Badge */}
            <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--color-brand-strong)] uppercase tracking-wider">
                <GraduationCap className="h-4 w-4" />
                <span>FOUNDING PRINCIPLES & CREDENTIALS</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-[var(--color-text-primary)]">
                Atul Suryawanshi — Co-Founder
              </h3>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                M.Sc. Digital Factory & Operational Excellence · B.E. Mechanical Engineering
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-tertiary)]">
                Combining rigorous manufacturing systems methodology with high-velocity full-stack software
                engineering.
              </p>
            </div>

            <div className="pt-4">
              <Button asChild variant="outline">
                <Link href="/about">
                  Read Full Company Story
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column (40%): Authentic Masked Portrait */}
          <div className="lg:col-span-5">
            <div
              ref={imageRef}
              className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-sm bg-[var(--color-surface-muted)] aspect-4/5 will-change-[clip-path,transform]"
            >
              <Image
                src="/images/atul.jpg"
                alt="Atul Suryawanshi — Co-Founder of Assestics"
                width={800}
                height={1000}
                className="h-full w-full object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text-primary)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-brand-primary)]">
                  <Award className="h-3 w-3" />
                  <span>OPERATIONAL EXCELLENCE</span>
                </div>
                <div className="mt-1 font-heading text-lg font-bold">Atul Suryawanshi</div>
                <div className="text-xs text-white/80">Co-Founder, Assestics</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
