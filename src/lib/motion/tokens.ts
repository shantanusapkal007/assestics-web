/**
 * Assestics Motion Tokens & Easing Constants
 * Concept: SIGNAL / SYSTEM
 */

export const MOTION_EASINGS = {
  // Snappy, luxurious editorial easing (similar to Expo out)
  editorial: "power4.out",
  editorialBezier: [0.16, 1, 0.3, 1] as const,
  
  // Smooth mechanical curve for SVG path drawing
  conduit: "power2.inOut",
  conduitBezier: [0.45, 0, 0.55, 1] as const,
  
  // Snappy spring-like curve for tactile micro-interactions
  tactile: "back.out(1.7)",
  tactileBezier: [0.34, 1.56, 0.64, 1] as const,
  
  // Steady data pulse motion
  linear: "none",
};

export const MOTION_DURATIONS = {
  instant: 0.15,
  fast: 0.25,
  normal: 0.45,
  reveal: 0.75,
  slow: 1.1,
  pathDraw: 1.6,
};

export const MOTION_STAGGERS = {
  tight: 0.04,
  normal: 0.08,
  spacious: 0.14,
};
