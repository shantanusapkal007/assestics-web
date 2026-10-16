# Assestics — Motion Research & Reference Analysis

> Document version: 2.0  
> Core Philosophy: **SIGNAL / SYSTEM** — *"Complex systems become useful when everything connects."*

---

## 1. Reference Analysis Matrix

### Reference A — Oaksun Studio
- **URL**: [https://www.awwwards.com/inspiration/draggable-and-resizable-video-oaksun-studio](https://www.awwwards.com/inspiration/draggable-and-resizable-video-oaksun-studio)
- **Interaction Studied**: Distinct interaction behaviors across different sections (stacked work presentation, typography orchestration, directional arrow buttons, tactile feedback).
- **Visual Principle**: Each major section should have its own signature interactive metaphor rather than duplicating one global behavior.
- **Implementation Technique**: CSS custom variables paired with pointer coordinates and GSAP quickTo setters for directional button shifts.
- **Where to Use on Assestics**: Use for tactile directional link arrows and navigation active-state indicators.
- **Where NOT to Use**: Do NOT add draggable video canvases or chaotic physics that distract enterprise buyers.
- **Assestics Adaptation**: Restrained micro-interactions with precise 180–240ms cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`), adhering strictly to the warm light theme.
- **Performance & Accessibility**: Respects `prefers-reduced-motion` by freezing translate offsets and relying on high-contrast focus rings.

---

### Reference B — Aerleum
- **URL**: [https://www.awwwards.com/inspiration/page-scroll-aerleum](https://www.awwwards.com/inspiration/page-scroll-aerleum)
- **Interaction Studied**: Fluid typography reveals, scroll transitions, section choreography, and the relationship between visual movement and editorial content.
- **Visual Principle**: Typography should feel unveiled rather than mechanically sliding up; motion guides the eye through narrative chapters.
- **Implementation Technique**: Line-wrapped container masking (`overflow: hidden`) with inner spans animated along `yPercent: 100 -> 0` via GSAP ScrollTrigger.
- **Where to Use on Assestics**: The About section editorial statement (*"Better systems start with understanding"*), hero headline reveal, and section chapter markers.
- **Where NOT to Use**: Avoid full-page scroll hijacking or locking that disrupts natural touch scrolling.
- **Assestics Adaptation**: Engineered for light canvas (`#FCFBF8`) with high contrast obsidian text (`#202722`) and cyan keyword highlights.
- **Performance & Accessibility**: Screen readers receive clean semantic text; masked spans preserve standard DOM flow.

---

### Reference C — RANGE RAK
- **URL**: [https://www.awwwards.com/inspiration/interactive-homepage-range-rak](https://www.awwwards.com/inspiration/interactive-homepage-range-rak)
- **Interaction Studied**: Interactive homepage with varied compositions (typographic lists, asymmetric split layouts, distinct visual stages).
- **Visual Principle**: Avoid repeating the exact same layout across consecutive sections. Variation creates curiosity and maintains engagement.
- **Implementation Technique**: Split layouts with interactive item selection triggering synchronized SVG transitions in an adjacent staging container.
- **Where to Use on Assestics**: Section 05 (Services: The Interactive Systems Index) and Section 07 (Capabilities in Context Explorer).
- **Where NOT to Use**: No excessive horizontal scrolling tracks that trap keyboard users or mobile viewers.
- **Assestics Adaptation**: Desktop split interactive layout with keyboard tab-indexing; mobile defaults to a clean vertical stack with zero layout shift.
- **Performance & Accessibility**: ARIA tabs/tabpanels (`role="tab"`, `aria-selected="true"`) for full assistive technology accessibility.

---

### Reference D — SVG Mask Transitions (Codrops, March 2026)
- **URL**: [https://tympanus.net/codrops/2026/03/11/svg-mask-transitions-on-scroll-with-gsap-and-scrolltrigger/](https://tympanus.net/codrops/2026/03/11/svg-mask-transitions-on-scroll-with-gsap-and-scrolltrigger/)
- **Interaction Studied**: Scroll-synchronized image transitions using SVG masks, shutter cuts, and geometric aperture reveals.
- **Visual Principle**: Geometric masks convey architectural precision, structural assembly, and engineered reveals.
- **Implementation Technique**: `clip-path: polygon(...)` and inline SVG `<clipPath>` nodes animated via GSAP ScrollTrigger scrub timelines.
- **Where to Use on Assestics**: Section 04 (Selected Work) case-study reveals (e.g. Solar Nation, Precision ERP) to transition each project image into view as its chapter unfolds.
- **Where NOT to Use**: Do NOT apply shutter masks to text or icons where legibility would be degraded.
- **Assestics Adaptation**: Angular and shutter-like aperture transitions that reveal real project visuals with clean 1px hairline borders (`#E2E3DC`).
- **Performance & Accessibility**: Hardware-accelerated clip-paths; fallback to full visibility when reduced-motion is requested.

---

### Reference E — Scroll-Driven SVG Path Animation (Codrops, May 2026)
- **URL**: [https://tympanus.net/codrops/2026/05/21/creating-scroll-driven-svg-map-animations-with-gsap/](https://tympanus.net/codrops/2026/05/21/creating-scroll-driven-svg-map-animations-with-gsap/)
- **Interaction Studied**: Progressive SVG path drawing (`strokeDasharray` / `strokeDashoffset`), pulse markers traveling along a multi-node spline, and scroll-progress synchronization.
- **Visual Principle**: Continuous line drawing visually articulates how Assestics connects fragmented business systems into one unified operational pipeline.
- **Implementation Technique**: Normalized SVG path lengths with GSAP ScrollTrigger scrub:
  ```ts
  const length = path.getTotalLength();
  gsap.fromTo(path, { strokeDashoffset: length }, { strokeDashoffset: 0, scrollTrigger: { scrub: 0.5 } });
  ```
- **Where to Use on Assestics**:
  1. Section 02 Hero: Self-drawing workflow diagram (`Input → Intelligent Processing → Integration → Outcome`).
  2. Section 06 Process: Continuous delivery path linking *Understand*, *Design & Build*, and *Launch & Improve*.
  3. Section 09 Final CTA: Resolution line navigating directly into the primary CTA button.
- **Where NOT to Use**: Avoid random wandering lines that do not connect to real functional or typographic landmarks.
- **Assestics Adaptation**: Precision vector geometry with branded `#38D8E4` / `#0891B2` cyan pulses traveling on 1.5px `#E2E3DC` baseline conduits.

---

### Reference F — Kinetic Typography (Codrops, Jan 2023)
- **URL**: [https://tympanus.net/codrops/2023/01/18/on-scroll-typography-animations/](https://tympanus.net/codrops/2023/01/18/on-scroll-typography-animations/)
- **Interaction Studied**: Transform origins, line-based reveals, controlled character spacing, and scroll-linked kinetic emphasis.
- **Visual Principle**: Type hierarchy carries the intellectual weight of the message; kinetic typography elevates statements into memorable brand moments.
- **Implementation Technique**: CSS mask-image and overflow-hidden line wrappers. Inner lines shift on the Y-axis with subtle rotational stabilization.
- **Where to Use on Assestics**: Hero headline (*"Complex problems. Smarter systems."*), Section 03 bridge (*"Built to solve real problems."*), and Section 08 About statement.
- **Where NOT to Use**: Do NOT animate continuous body copy or interactive form inputs.
- **Assestics Adaptation**: Clean editorial typography using Space Grotesk and Inter, preserving word integrity without ragged line breaks.

---

### Reference G — Official GSAP ScrollTrigger Documentation
- **URL**: [https://gsap.com/docs/v3/Plugins/ScrollTrigger/](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- **Interaction Studied**: Robust lifecycle management, `ScrollTrigger.matchMedia()`, scoped GSAP contexts via `@gsap/react`, and scrub timelines.
- **Visual Principle**: Flawless performance, responsive recalculation on resize, zero hydration mismatches, and predictable native scrolling.
- **Implementation Technique**:
  - Always register ScrollTrigger once on the client.
  - Wrap timeline creation in `useGSAP()` with element `scope`.
  - Provide automatic cleanup on component unmount.
- **Where to Use on Assestics**: All scroll-linked sections (Hero workflow, Selected Work aperture reveals, Process timeline, Final CTA line).
- **Performance Guidelines**: Avoid layout thrashing; animate only `transform`, `opacity`, `strokeDashoffset`, and `clipPath`.

---

## 2. Technical Architecture & Verification Notes
- Direct HTTP scraping to Codrops returned 403 (anti-bot protection); reference analysis was executed based on established GSAP/Codrops architectural patterns and specifications provided in the brief.
- All implementations will use pure SVG + GSAP + React 19 client components without any 3D/WebGL dependencies.
