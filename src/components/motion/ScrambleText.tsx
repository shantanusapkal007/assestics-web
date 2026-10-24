"use client";

import React, { useState, useEffect, useRef } from "react";

interface ScrambleTextProps {
  children: string;
  className?: string;
  triggerOnHover?: boolean;
  triggerOnMount?: boolean;
  durationMs?: number;
  as?: "span" | "div" | "p" | "h3" | "h4";
}

const GLYPHS = "01<>/_#*+=-xyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function ScrambleText({
  children,
  className = "",
  triggerOnHover = true,
  triggerOnMount = false,
  durationMs = 400,
  as: Component = "span",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(children);
  const isScramblingRef = useRef(false);
  const originalText = children;

  const runScramble = () => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    const totalSteps = Math.max(12, Math.floor(durationMs / 30));
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const revealCount = Math.floor(progress * originalText.length);

      const scrambled = originalText
        .split("")
        .map((char, index) => {
          if (char === " " || char === "\n") return char;
          if (index < revealCount) return originalText[index];
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");

      setDisplayText(scrambled);

      if (step >= totalSteps) {
        clearInterval(interval);
        setDisplayText(originalText);
        isScramblingRef.current = false;
      }
    }, 30);
  };

  useEffect(() => {
    setDisplayText(children);
    if (triggerOnMount) {
      runScramble();
    }
  }, [children, triggerOnMount]);

  return (
    <Component
      className={`inline-block font-mono ${className}`}
      onMouseEnter={triggerOnHover ? runScramble : undefined}
    >
      {displayText}
    </Component>
  );
}
