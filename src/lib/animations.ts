/**
 * Animation timing tokens and motion curves
 * Designed for calm, engineered precision rather than bouncy/playful springs.
 */

export const transitions = {
  // Apple/Braun precision cubic bezier
  easeOutCubic: [0.215, 0.61, 0.355, 1] as const,
  // Snappy layout adjustment
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  // Smooth architectural reveal
  easeInOutQuart: [0.77, 0, 0.175, 1] as const,
};

export const durations = {
  instant: 0.15,
  fast: 0.25,
  normal: 0.45,
  slow: 0.8,
  deliberate: 1.2,
};

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      delay: i * 0.08,
      ease: transitions.easeOutExpo,
    },
  }),
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
