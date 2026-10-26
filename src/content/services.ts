export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  capabilities: string[];
  practicalBenefits: string[];
  deliverables: string[];
  techStackFocus: string[];
  faqs: { question: string; answer: string }[];
}

export const services: ServicePillar[] = [
  {
    id: "ai-automation",
    number: "01",
    title: "AI & Business Automation",
    slug: "ai-automation",
    shortDescription:
      "Make repetitive work simpler. We build AI agents, conversational assistants and connected workflows that help teams handle enquiries, organise information and streamline everyday operations.",
    fullDescription:
      "Move beyond superficial chat toys. We engineer production-grade AI agents and autonomous workflows that connect into your existing databases, CRM, and communication channels. Our systems ingest messy unstructured data, route requests with human-in-the-loop oversight, and remove manual busywork across your teams.",
    problemStatement:
      "Modern operations waste hundreds of hours manually parsing customer inquiries, copy-pasting between disconnected tools, and reconciling repetitive documents.",
    capabilities: [
      "Autonomous AI agents & assistants",
      "WhatsApp & omnichannel customer automation",
      "Knowledge-base & internal document intelligence (RAG)",
      "Multi-agent workflow orchestration",
      "Intelligent API integrations & webhooks",
    ],
    practicalBenefits: [
      "Eliminate repetitive ticket triage and manual data re-entry",
      "Instant, context-aware responses to client inquiries 24/7",
      "Unified internal knowledge without searching across 10 folders",
      "Deterministic guardrails with zero hallucinated commitments",
    ],
    deliverables: [
      "Custom conversational agents integrated into WhatsApp/Slack",
      "Vector search pipelines indexing company knowledge securely",
      "Automated webhook integrations into your CRM / ERP",
      "Monitoring dashboards for token latency and quality evaluation",
    ],
    techStackFocus: ["Python", "FastAPI", "LangChain / LlamaIndex", "OpenAI / Anthropic APIs", "Pinecone / pgvector", "Next.js"],
    faqs: [
      {
        question: "How do you prevent the AI from giving incorrect information?",
        answer:
          "We implement strict Retrieval-Augmented Generation (RAG) with source verification. The AI answers exclusively from verified company documents and falls back to human escalation when confidence is low.",
      },
      {
        question: "Can this connect to WhatsApp and our email accounts?",
        answer:
          "Yes. We build official Meta Cloud API WhatsApp integrations and IMAP/OAuth webhooks that process messages in real time without third-party vendor lock-in.",
      },
    ],
  },
  {
    id: "software-engineering",
    number: "02",
    title: "Software & Digital Products",
    slug: "software-engineering",
    shortDescription:
      "Turn ideas and operational needs into useful digital products. We design and build websites, applications and custom software around the way your business actually works.",
    fullDescription:
      "We design and build bespoke web applications, customer portals, and internal operational tools. Every interface is constructed with meticulous attention to typography, sub-second performance, responsive precision, and intuitive workflows that business teams adopt effortlessly.",
    problemStatement:
      "Off-the-shelf software is either too rigid or charges punitive per-seat licenses for features you never touch, forcing teams to rely on fragile spreadsheets.",
    capabilities: [
      "High-conversion website design & development",
      "Scalable web applications & customer portals",
      "Custom internal operations software",
      "Product UI/UX design & design systems",
      "Robust API engineering & systems integration",
    ],
    practicalBenefits: [
      "Software tailored exactly to your unique business logic and constraints",
      "Blazing-fast load times (<100ms) that maximize customer conversion",
      "Clean TypeScript codebases that your in-house team can maintain and extend",
      "Accessible, mobile-responsive layouts that work across all modern devices",
    ],
    deliverables: [
      "Next.js App Router web application with SSR & caching",
      "Tailored UI design system with reusable component library",
      "Comprehensive TypeScript interfaces and REST/GraphQL APIs",
      "CI/CD deployment pipelines to secure production servers",
    ],
    techStackFocus: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Three.js"],
    faqs: [
      {
        question: "Do we own the full source code and intellectual property?",
        answer:
          "Yes, completely. All code, design assets, and architectural documentation are 100% transferred to your company upon completion.",
      },
      {
        question: "How do you ensure the app remains fast as we scale?",
        answer:
          "We engineer with server-side rendering, edge caching, minimal JavaScript bundles, and database index tuning from day one.",
      },
    ],
  },
  {
    id: "cloud-devops",
    number: "03",
    title: "Cloud & DevOps Engineering",
    slug: "cloud-devops",
    shortDescription:
      "Build a more dependable foundation for your products. We design cloud infrastructure and deployment workflows that help software run securely, reliably and efficiently.",
    fullDescription:
      "A stunning interface is useless if servers crash during marketing spikes. We build resilient, automated cloud infrastructure (AWS, Azure, GCP) using Infrastructure as Code. We set up automated testing, zero-downtime rolling deployments, and round-the-clock telemetry so engineering teams deploy fearlessly.",
    problemStatement:
      "Manual server maintenance, fragile deployments, and lack of monitoring lead to stressful outages, slow release cycles, and unbudgeted cloud waste.",
    capabilities: [
      "Cloud architecture & multi-region resilience",
      "Automated CI/CD pipelines & deployment automation",
      "Containerization & Kubernetes orchestration",
      "Infrastructure as Code (Terraform / OpenTofu)",
      "Observability, monitoring & real-time alerting",
    ],
    practicalBenefits: [
      "Deploy updates multiple times daily with zero customer downtime",
      "Automated scaling that effortlessly absorbs traffic surges",
      "Hardened cloud security complying with modern enterprise standards",
      "Predictable infrastructure spend through optimized resource sizing",
    ],
    deliverables: [
      "Fully documented Terraform configurations for all cloud resources",
      "GitHub Actions / GitLab CI automated build and test pipelines",
      "Docker container definitions and Kubernetes manifests",
      "Prometheus & Grafana telemetry dashboards with alert thresholds",
    ],
    techStackFocus: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Linux"],
    faqs: [
      {
        question: "What does 'automated software delivery' mean for my business?",
        answer:
          "Instead of a developer manually uploading files and risking human errors, automated delivery automatically tests, verifies, and publishes code updates in minutes whenever changes are approved.",
      },
      {
        question: "Can you audit our existing cloud bill to reduce unnecessary spend?",
        answer:
          "Yes. Our DevOps review typically identifies orphaned disks, over-provisioned compute, and misconfigured caching, often cutting cloud bills by 25–40%.",
      },
    ],
  },
  {
    id: "business-systems",
    number: "04",
    title: "Business Systems & ERP",
    slug: "business-systems",
    shortDescription:
      "Connect business processes, information and operational decisions. We help organisations improve workflows through tailored software, data-driven systems and supply-chain expertise.",
    fullDescription:
      "We replace fragmented legacy tools and scattered spreadsheets with unified operational software. Whether integrating into enterprise systems like SAP or constructing custom manufacturing execution workflows, we ensure your sales, inventory, and fulfillment operations speak the same language in real time.",
    problemStatement:
      "Data silos between warehouse, procurement, accounting, and sales create costly stockouts, shipping delays, and blind decision-making.",
    capabilities: [
      "Custom ERP & operational software modules",
      "Manufacturing & inventory tracking systems",
      "Cross-platform data integration & ETL pipelines",
      "Real-time operational dashboards & KPI reporting",
      "Legacy system modernization & API wrapping",
    ],
    practicalBenefits: [
      "Single source of truth across inventory, orders, and fulfillment",
      "Eliminate manual double-entry between legacy databases and modern tools",
      "Real-time operational visibility into throughput bottlenecks",
      "Scalable database architecture capable of millions of historical transactions",
    ],
    deliverables: [
      "Unified operational database and role-based permissions model",
      "Bi-directional data sync connectors between legacy systems",
      "Warehouse scanning & inventory management interface",
      "Executive reporting portal with automated weekly summaries",
    ],
    techStackFocus: ["PostgreSQL", "Redis", "SAP Connectors", "Node.js / Go", "Next.js", "Docker"],
    faqs: [
      {
        question: "Can you integrate with our existing legacy ERP or accounting software?",
        answer:
          "Yes. We specialize in building secure API adapters and background synchronization pipelines that connect modern frontends with legacy databases.",
      },
      {
        question: "How long does a typical business systems integration take?",
        answer:
          "We work in iterative sprints: core data sync and critical workflows are delivered in 4–6 weeks, followed by progressive feature rollouts without disrupting daily operations.",
      },
    ],
  },
  {
    id: "supply-chain",
    number: "05",
    title: "Supply Chain & Operations Consulting",
    slug: "supply-chain",
    shortDescription:
      "Transform complex supply chains into predictive, resilient competitive advantages. Led by specialized industrial engineering and digital factory expertise.",
    fullDescription:
      "Supply chain optimization is Assestics' signature differentiator. Founded with advanced academic and industrial roots in Digital Factory & Operational Excellence, we help manufacturers, logistics providers, and distributors digitize physical operations. From digital twins to AI-driven predictive replenishment and IoT telemetry, we turn logistics chaos into synchronized clarity.",
    problemStatement:
      "Global volatility, opaque supplier tiers, and reactive logistics leave supply chains vulnerable to disruptions, excess carrying costs, and customer churn.",
    capabilities: [
      "Digital Factory & Digital Twin modeling",
      "Predictive demand forecasting & safety stock calculation",
      "IoT sensor telemetry & fleet tracking integration",
      "Blockchain-backed audit trails & emissions accounting",
      "Lean Six Sigma process re-engineering",
    ],
    practicalBenefits: [
      "Reduce stockouts while trimming redundant warehouse safety inventory",
      "End-to-end visibility from raw material supplier to final delivery",
      "Automated carbon footprint and sustainability compliance reporting",
      "Simulation models that stress-test supplier disruptions before they happen",
    ],
    deliverables: [
      "Operational audit report with bottleneck analysis & ROI roadmap",
      "Real-time supply chain control tower dashboard",
      "Automated replenishment algorithms configured to lead times",
      "IoT data ingestion pipeline with threshold-based anomaly alerts",
    ],
    techStackFocus: ["Python Analytics", "IoT MQTT / HTTP Gateways", "Time-series Databases", "Tableau / Custom BI", "Blockchain Ledger Protocols"],
    faqs: [
      {
        question: "What makes Assestics different from general web development agencies in supply chain?",
        answer:
          "Our leadership holds specialized Master's degrees in Digital Factory and Operational Excellence, with published research in Blockchain-AI-IoT industrial logistics. We understand supply chains from the physical warehouse floor up.",
      },
      {
        question: "Do we need to replace all our existing warehouse hardware?",
        answer:
          "No. We prioritize lightweight IoT gateways and software adapters that read existing barcode scanners, PLC controllers, and ERP exports.",
      },
    ],
  },
];
