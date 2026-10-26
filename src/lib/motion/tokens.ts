/**
 * Assestics Motion Tokens & Easing Constants
 * Concept: SIGNAL / SYSTEM
 * Architectural minimalism × cinematic motion × engineering precision
 */

export const MOTION_EASINGS = {
  // Snappy, luxurious editorial easing (Expo/Power4 out)
  editorial: "power4.out",
  editorialBezier: [0.16, 1, 0.3, 1] as const,
  
  // Smooth mechanical curve for SVG path drawing and conduits
  conduit: "power2.inOut",
  conduitBezier: [0.45, 0, 0.55, 1] as const,
  
  // Snappy spring-like curve for tactile micro-interactions & clicks
  tactile: "back.out(1.4)",
  tactileBezier: [0.34, 1.4, 0.64, 1] as const,
  
  // Dynamic elastic spring return for magnetic components
  spring: "elastic.out(1.1, 0.4)",
  springTransition: { type: "spring", stiffness: 380, damping: 28 } as const,

  // Fluid decelerate
  decelerate: "power3.out",
  decelerateBezier: [0.22, 1, 0.36, 1] as const,
  
  // Steady data pulse motion
  linear: "none",
};

export const MOTION_DURATIONS = {
  instant: 0.15,
  fast: 0.25,
  normal: 0.45,
  reveal: 0.75,
  slow: 1.0,
  pathDraw: 1.4,
};

export const MOTION_STAGGERS = {
  tight: 0.04,
  normal: 0.08,
  spacious: 0.12,
  monumental: 0.18,
};

/**
 * Check if current client is using a coarse pointer (touch device)
 * Used to gracefully disable mouse cursor magnetics and heavy hover trackers.
 */
export function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  );
}

