# ASSESTICS DESIGN SYSTEM SPECIFICATION

## 1. Design Tokens & Color Space
Our design system is calibrated for precision, warmth, and clarity in a light-first theme.

```css
:root {
  /* Canvas & Base Surfaces */
  --color-canvas: #FCFBF8;
  --color-canvas-secondary: #F3F2ED;
  --color-surface: #FFFFFF;
  --color-surface-raised: #FFFFFF;
  --color-surface-muted: #EAE9E2;

  /* Typography */
  --color-text-primary: #202722;
  --color-text-secondary: #687069;
  --color-text-tertiary: #8E968F;
  --color-text-inverse: #FFFFFF;

  /* Borders & Dividers */
  --color-border: #E2E3DC;
  --color-border-subtle: #ECECE6;
  --color-border-strong: #C8CAC1;

  /* Brand Accents (Extracted from Genuine Logo #38D8E4) */
  --color-brand-primary: #38D8E4;
  --color-brand-strong: #0891B2; /* Cyan-700 for accessible text contrast on light surfaces */
  --color-brand-soft: #D5F6F9;
  --color-brand-wash: #EDFBFD;
  --color-brand-contrast: #0E7490;

  /* 3D Visual Accents */
  --color-3d-highlight: #38D8E4;
  --color-3d-ceramic: #F7F6F1;
  --color-3d-metal: #D4D6D0;
  --color-3d-channel: #E4E5DF;

  /* Focus & Interactive */
  --color-focus-ring: #0891B2;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-normal: 250ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-smooth: 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

## 2. Spacing Scale & Grid Architecture
- **Max Container Width**: 1280px (`max-w-7xl`)
- **Fluid Section Padding**: `py-20 md:py-32`
- **Grid Layouts**:
  - Desktop: 12-column editorial grid with asymmetric offsets
  - Tablet: 6-column fluid structure
  - Mobile (360px–390px): Single-column, stacked architectural cards with 16px/20px horizontal margins

## 3. UI Component Architecture
- **Buttons (`<Button />`)**:
  - *Primary*: Tactile obsidian `#202722` with crisp white text and electric cyan micro-accent or hover shift
  - *Brand*: Cyan `#38D8E4` button with high-contrast obsidian typography `#102022`
  - *Outline*: Crisp border `#E2E3DC` with subtle hover lift and fill
  - *Ghost*: Micro-link with sliding arrow `<LinkArrow />`
- **Cards & Surfaces**:
  - Tactile white ceramic cards with subtle hairline borders (`1px solid #E2E3DC`)
  - Warm ambient drop shadows: `box-shadow: 0 4px 20px -2px rgba(32, 39, 34, 0.04), 0 2px 6px -1px rgba(32, 39, 34, 0.02)`
  - Active hover states elevate gently (`translateY(-2px)`) with subtle border highlight.

## 4. 3D Architectural Scene Rules
- **Subject**: Modular precision-machined geometric plates, interlocking channels, central integration nexus, and glowing cybernetic data packet particles.
- **Lighting**: Three-point studio lighting:
  - Directional Sun light with soft contact shadows
  - Soft ambient fill light (`#F3F2ED`)
  - Subtle cyan rim light (`#38D8E4`) highlighting precision chamfered edges
- **Fallback**: Graceful SVG / CSS architectural blueprint diagram with animated SVG pulses for users with `prefers-reduced-motion` or when WebGL is unavailable.
