# Assestics — Digital Systems Engineering & Intelligent Operations

> **Official Website:** [https://www.assestics.com/](https://www.assestics.com/)  
> **Brand Creative Concept:** *"The Assestics Assembly"* — Connecting the systems that help businesses operate, automate, and grow.

A premier, internationally competitive digital experience engineered for **Assestics**. Built from the ground up to reflect the intersection of software engineering, multi-agent AI automation, cloud infrastructure, and operational excellence (ERP / supply chain digital factory).

---

## 🏛️ Creative Direction & Concept: The Assestics Assembly

Assestics is not a generic web agency. Its capabilities span bespoke software development, AI agents and workflow automation, enterprise cloud/DevOps, and operational systems engineering.

### The Signature 3D Visual
- **Architectural Plates**: Modular tiered satin-metal and matte-ceramic surfaces representing distinct business systems (software layers, enterprise silos, cloud tiers).
- **Central Nexus**: Cylindrical orchestration core coordinating computation, logic, and multi-agent intelligence.
- **Structural Conduits**: Precision channels carrying data between decoupled services.
- **Cybernetic Flow Particles**: Continuous, curve-following light pulses signifying real-time operational transactions and work flowing smoothly through connected pipelines.
- **Graceful Fallback**: High-fidelity architectural SVG isometric blueprint with zero layout shift (CLS: 0.00) when WebGL is unavailable or when the visitor enables `prefers-reduced-motion`.

### Systematic Color Design
Strictly **light-first** throughout (no dark mode, no generic purple glows, no rainbow gradients):
- **Primary Canvas**: `#FCFBF8` (Warm architectural alabaster)
- **Secondary Canvas**: `#F3F2ED` (Muted precision surface)
- **Elevated Light Surface**: `#FFFFFF` (Pristine card/modal fill)
- **Primary Text**: `#202722` (High-contrast deep obsidian)
- **Secondary Text**: `#5C665E` (Accessible neutral olive-gray)
- **Subtle Border**: `#E2E3DC` (Hairline boundary)
- **Brand Primary Accent**: `#38D8E4` / `#22D3EE` (Vibrant electric cyan extracted from genuine logo)
- **Brand Accessible Text Accent**: `#0891B2` / `#0E7490` (Passes WCAG AA/AAA contrast on light backgrounds)

---

## 🛠️ Technology Stack & Installed Versions

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.4.2` | Server Components, routing, SSR, Turbopack |
| **UI Library** | React & React DOM | `19.3.0` | Latest concurrent UI runtime |
| **Language** | TypeScript (Strict) | `^5` | Full type safety across content, props, and APIs |
| **Styling** | Tailwind CSS | `v4` | Modern CSS-first utility architecture with `@theme` tokens |
| **3D & WebGL** | Three.js | `0.186.1` | WebGL scene graph, custom meshes, and materials |
| **React Three** | `@react-three/fiber` | `9.8.2` | Declarative Three.js wrapper compatible with React 19 |
| **R3F Helpers** | `@react-three/drei` | `10.7.9` | Camera controls, curve generators, float wrappers |
| **Animation** | GSAP & Motion | `3.15.0` / `14.3.0`| High-precision timeline motion & layout transitions |
| **Icons** | Lucide React | `1.58.0` | Crisp, scalable editorial interface iconography |
| **Validation** | Zod | `3.25.76` | Runtime form & payload schema validation |
| **Forms** | React Hook Form | `7.90.0` | Performant form state management with `@hookform/resolvers` |
| **Package Mgr** | pnpm (Hoisted) | Latest | Fast, deterministic dependency management |

---

## 🚀 Quick Start & Installation

### Prerequisites
- **Node.js**: v20.x or v22.x LTS
- **pnpm**: `corepack enable pnpm` or `npm install -g pnpm`

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/assestics/assestics-website.git
cd assestics

# Install dependencies (configured with node-linker=hoisted for cross-platform stability)
pnpm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Configure your optional variables:
- `RESEND_API_KEY`: *(Optional)* If set, contact inquiries are forwarded directly via Resend to `assestics.office@gmail.com`. If omitted, submissions are securely validated, logged, and acknowledged with an honest response.
- `NEXT_PUBLIC_SITE_URL`: `https://www.assestics.com`

### 3. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live development experience.

---

## 📦 Production Build & Testing

### Type Checking
Ensure 100% strict TypeScript compliance:
```bash
pnpm exec tsc --noEmit
```

### ESLint Verification
Verify lint rules across all components, content, and server handlers:
```bash
pnpm exec eslint src/ --max-warnings 0
```

### Production Build
Compile optimized SSR bundles, static pages, and asset hashes:
```bash
pnpm build
```

### Run Production Server
Serve the production build locally:
```bash
pnpm start
# or specify port:
pnpm start -p 3001
```

---

## 📁 Project Architecture

```
assestics/
├── .env.example                # Environment variables template
├── .npmrc                      # node-linker=hoisted for Windows compatibility
├── docs/
│   ├── BRAND-DIRECTION.md      # Logo audit, color extraction, brand rationale
│   └── DESIGN-SYSTEM.md        # Tokens, typography scales, contrast specifications
├── public/
│   ├── images/
│   │   ├── logo.png            # Genuine Assestics logo asset
│   │   └── atul.jpg            # Authentic portrait of Co-Founder Atul Suryawanshi
├── src/
│   ├── app/
│   │   ├── api/contact/        # Production API route with Zod & Resend hooks
│   │   ├── about/              # Founder bio, operational philosophy, credentials
│   │   ├── contact/            # Interactive contact page with React Hook Form
│   │   ├── privacy-policy/     # Privacy Policy
│   │   ├── terms/              # Terms of Service
│   │   ├── services/           # Service overview
│   │   │   ├── ai-automation/          # AI agents & workflow orchestration
│   │   │   ├── software-engineering/   # Custom web, mobile & SaaS software
│   │   │   ├── cloud-devops/           # Cloud infrastructure & CI/CD topology
│   │   │   ├── business-systems/       # ERP, manufacturing & inventory systems
│   │   │   └── supply-chain/           # Digital Factory & supply chain consulting
│   │   ├── work/               # Selected work directory
│   │   │   └── [slug]/         # Dynamic case studies (Solar Nation, ERP, etc.)
│   │   ├── globals.css         # Tailwind v4 theme, custom properties, animations
│   │   ├── layout.tsx          # Root layout with fonts, JSON-LD Schema & metadata
│   │   ├── page.tsx            # Main homepage assembly
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   └── sitemap.ts          # Comprehensive XML sitemap
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── AssesticsAssembly.tsx   # Dynamic client-only Three.js canvas
│   │   │   ├── AssemblyGeometry.tsx    # Bespoke 3D procedural meshes & plates
│   │   │   ├── AssemblyMaterials.ts    # Physical materials (ceramic, metal, glow)
│   │   │   ├── FlowParticles.tsx       # Spline data packets with smooth tick loops
│   │   │   └── SceneFallback.tsx       # Isometric SVG architectural fallback
│   │   ├── contact/
│   │   │   └── ContactForm.tsx         # Accessible form with validation & confetti
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Sticky header with blurred backdrop
│   │   │   ├── Footer.tsx              # Verified contacts, links, social channels
│   │   │   └── MobileNavigation.tsx    # Fluid mobile menu with keyboard trapping
│   │   ├── motion/
│   │   │   └── Reveal.tsx              # Viewport-triggered micro-animations
│   │   ├── sections/
│   │   │   ├── Hero.tsx                # Hero section combining copy + 3D canvas
│   │   │   ├── SelectedWork.tsx        # Editorial project showcase
│   │   │   ├── ServicesOverview.tsx    # 4 core service pillars with interactive tabs
│   │   │   ├── Process.tsx             # 3-stage visual delivery methodology
│   │   │   ├── AboutIntro.tsx          # Authentic credentials and company mission
│   │   │   └── FinalCTA.tsx            # High-conversion closing invitation
│   │   └── ui/
│   │       ├── Button.tsx              # Tactile button component with variant states
│   │       ├── Container.tsx           # Controlled responsive layout wrappers
│   │       ├── SectionHeading.tsx      # Consistent editorial typography headers
│   │       └── LinkArrow.tsx           # Directional micro-interaction cues
│   ├── content/
│   │   ├── site.ts                     # Company metadata, contact details, socials
│   │   ├── services.ts                 # Full content for 5 service domains
│   │   ├── projects.ts                 # Real case studies (Solar Nation, ERP, etc.)
│   │   ├── process.ts                  # Understand -> Design & Build -> Launch
│   │   └── faqs.ts                     # Targeted B2B procurement & technical FAQs
│   ├── lib/
│   │   ├── animations.ts               # Reusable easing curves & timing tokens
│   │   ├── utils.ts                    # Utility class merger (`cn`)
│   │   └── validation.ts               # Zod contact form validation schema
│   └── styles/
│       └── tokens.css                  # Systematic color and dimension variables
```

---

## 🔒 Verification & Authenticity Guardrails

In strict adherence to brand integrity:
1. **Zero Fabricated Metrics**: No unverified uptime percentages, fake latency counters, or synthetic customer logos.
2. **Authentic Leadership Bio**: Co-Founder **Atul Suryawanshi**'s profile features verified credentials (M.Sc. Digital Factory & Operational Excellence; B.E. Mechanical Engineering, SPPU Pune).
3. **Verified Contacts**:
   - **Email**: `assestics.office@gmail.com`
   - **Phone**: `+91-9359101176`
   - **Headquarters**: Pune, Maharashtra, India
4. **Accessible Semantics**: Semantic HTML5 landmark tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`), visible focus rings (`--color-focus-ring`), and full keyboard navigation support.
5. **SEO & Structured Data**: Built-in Schema.org `Organization` JSON-LD, OpenGraph preview cards, Twitter metadata, dynamic canonical URLs, and full search index indexing.

---

## 🚢 Deployment

### Deploying to Vercel (Recommended)
1. Push the repository to GitHub/GitLab.
2. Import the project into [Vercel](https://vercel.com).
3. Framework preset will automatically detect **Next.js**.
4. Set optional Environment Variables (`RESEND_API_KEY`).
5. Deploy.

### Self-Hosted (Node / Docker)
```bash
# Build the application
pnpm build

# Run the standalone server
pnpm start -p 3000
```

---

## 📄 License
Copyright © 2026 **Assestics**. All rights reserved.
