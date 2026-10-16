import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Mail, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#F3F2ED] border-t border-[#E2E3DC] relative overflow-hidden">
      {/* Precision background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E3DC_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <Container size="narrow">
        <div className="tactile-card rounded-3xl p-8 sm:p-12 md:p-16 text-center space-y-8 bg-white relative z-10 border border-[#E2E3DC] shadow-[0_12px_40px_rgba(32,39,34,0.04)]">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDFBFD] border border-[#D5F6F9]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
            <span className="mono-tag">START A CONVERSATION</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#202722] leading-tight [text-wrap:balance]">
              Have a problem worth solving?
            </h2>
            <p className="text-base sm:text-lg text-[#687069] leading-relaxed [text-wrap:pretty]">
              Tell us what you are trying to improve. Let’s explore the right
              solution together.
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button href="/contact" variant="brand" size="lg">
              <span>Discuss a project</span>
              <LinkArrow />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore services
            </Button>
          </div>

          {/* Verified Direct Contact Channels */}
          <div className="pt-8 border-t border-[#E2E3DC] flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#687069]">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 hover:text-[#0891B2] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#0891B2]" />
              <span className="font-mono">{siteConfig.contact.email}</span>
            </a>
            <span className="hidden sm:inline text-[#C8CAC1]">•</span>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 hover:text-[#0891B2] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0891B2]" />
              <span className="font-mono">{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
