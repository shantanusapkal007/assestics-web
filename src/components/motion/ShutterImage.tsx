"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { registerGSAP, prefersReducedMotion } from "@/lib/motion/gsap";
import { cn } from "@/lib/utils";

interface ShutterImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: string;
  variant?: "horizontal" | "vertical" | "aperture";
}

export function ShutterImage({
  src,
  alt,
  width = 1200,
  height = 800,
  className,
  aspectRatio = "aspect-16/10",
  variant = "aperture",
}: ShutterImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const { gsap } = registerGSAP();
      if (!containerRef.current || !imageWrapperRef.current) return;

      let fromClip = "polygon(0 0, 100% 0, 100% 0, 0 0)";
      const toClip = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";

      if (variant === "horizontal") {
        fromClip = "polygon(0 0, 0 0, 0 100%, 0 100%)";
      } else if (variant === "aperture") {
        fromClip = "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)";
      }

      gsap.fromTo(
        imageWrapperRef.current,
        {
          clipPath: fromClip,
          scale: 1.08,
        },
        {
          clipPath: toClip,
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [variant] }
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden rounded-lg bg-[var(--color-surface-muted)]", aspectRatio, className)}
    >
      <div
        ref={imageWrapperRef}
        className="relative h-full w-full will-change-[clip-path,transform]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px"
        />
      </div>
    </div>
  );
}
