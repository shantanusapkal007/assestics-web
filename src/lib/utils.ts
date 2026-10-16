import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind and conditional class strings cleanly
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date string into editorial display
 */
export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

/**
 * Format currency or numbers cleanly
 */
export function formatMetric(val: number): string {
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(val);
}
