import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLockupProps = {
  tone?: "light" | "dark";
  size?: "header" | "hero" | "footer";
  className?: string;
  showDescriptor?: boolean;
  descriptor?: string;
};

/** The repeatable Assestics signature used wherever the site identifies itself. */
export function BrandLockup({
  tone = "light",
  size = "header",
  className,
  showDescriptor = true,
  descriptor = "Tech company",
}: BrandLockupProps) {
  const markSize =
    size === "footer"
      ? "w-14 h-14"
      : size === "hero"
      ? "w-12 h-12"
      : "w-10 h-10";

  return (
    <span className={cn("brand-lockup inline-flex items-center gap-2.5 leading-none", `brand-lockup--${size}`, `brand-lockup--${tone}`, className)}>
      <span className={cn("brand-lockup__mark relative block flex-none", markSize)}>
        <Image src="/images/logo.png" alt="" fill sizes={size === "footer" ? "64px" : "44px"} className="object-contain" priority={size === "header"} />
      </span>
      <span className="brand-lockup__copy flex flex-col gap-0.5">
        <span className="brand-lockup__name font-display font-extrabold tracking-[-0.05em] text-[var(--color-text-primary)]">Assestics</span>
        {showDescriptor && <span className="brand-lockup__descriptor font-sans font-bold tracking-[0.16em] uppercase text-[var(--color-brand-strong)] text-[0.6rem]">{descriptor}</span>}
      </span>
    </span>
  );
}
