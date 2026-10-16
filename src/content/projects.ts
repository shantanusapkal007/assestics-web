export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tagline: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  deliverables: string[];
  techStack: string[];
  image: string;
  aspectRatio: string;
  accentColor: string;
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "solar-nation",
    title: "Solar Nation",
    client: "Solar Nation Energy Solutions",
    category: "Web Engineering · AI Automation",
    year: "2024",
    tagline: "Connecting renewable energy prospects with instant automated engineering audits.",
    challenge:
      "Solar Nation experienced substantial inquiry volume across residential and commercial solar installations, but their sales and engineering staff spent up to 48 hours manually qualifying roof capacity, utility rate tiers, and proposal estimates.",
    solution:
      "Assestics engineered a brand-new high-performance web experience paired with a custom WhatsApp conversational AI agent. The AI agent automatically assesses customer energy bills, queries localized solar irradiance data, answers technical questions in real time, and deposits verified proposals directly into the team's pipeline.",
    architectureDetails: [
      "Sub-second load times engineered with Next.js App Router and edge caching",
      "Official Meta WhatsApp Business Cloud API integration with webhook listeners",
      "Retrieval-Augmented Generation (RAG) assistant indexing technical solar specs and local rebates",
      "Automated lead qualification pipeline routing high-priority commercial audits to senior engineers",
    ],
    deliverables: [
      "Custom responsive marketing platform",
      "WhatsApp conversational AI qualification assistant",
      "Lead routing and customer notification webhook engine",
      "Internal sales dashboard for proposal verification",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Cloud API", "Python / FastAPI", "PostgreSQL"],
    image: "/images/solar-nation.jpg",
    aspectRatio: "16/10",
    accentColor: "#38D8E4",
  },
  {
    slug: "precision-mfg-erp",
    title: "Precision Manufacturing ERP",
    client: "Industrial Components Group",
    category: "Business Systems · Digital Factory",
    year: "2024",
    tagline: "Unifying shopfloor work orders, raw materials inventory, and machine throughput.",
    challenge:
      "A multi-facility precision manufacturing group suffered from delayed order scheduling because shopfloor machine operators logged production counts on paper clipboards, leaving warehouse managers uncertain of real-time alloy and component stock levels.",
    solution:
      "We engineered a bespoke shopfloor execution system with lightweight touch interfaces mounted at machining cells. Work orders sync bi-directionally with central inventory databases, updating material consumption and order readiness in real time.",
    architectureDetails: [
      "Offline-tolerant Progressive Web App optimized for ruggedized shopfloor tablets",
      "Event-driven WebSocket stream broadcasting machine cycle completions to the central ledger",
      "Role-based access permissions separating cell operators, inventory clerks, and plant managers",
      "Automated low-stock threshold triggers calculating reorder lead times",
    ],
    deliverables: [
      "Shopfloor work-order tracking tablet app",
      "Central warehouse inventory ledger & barcode scanner integration",
      "Plant manager throughput analytics dashboard",
      "Automated supplier purchase requisition generation",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
    image: "/images/manufacturing-erp.jpg",
    aspectRatio: "16/10",
    accentColor: "#0891B2",
  },
  {
    slug: "devops-cloud-telemetry",
    title: "Enterprise Cloud Modernization",
    client: "SaaS Operations Platform",
    category: "Cloud Architecture · DevOps",
    year: "2024",
    tagline: "Zero-downtime rolling deploys and hardened infrastructure as code.",
    challenge:
      "A fast-growing enterprise service was bottlenecked by manual Friday evening server deployments that periodically caused 15–30 minutes of platform downtime, creating operational friction and engineering fatigue.",
    solution:
      "Assestics redesigned the entire deployment topology into immutable infrastructure using Terraform, Docker, and Kubernetes. We instituted fully automated CI/CD pipelines with ephemeral preview environments and automated canary rollouts that eliminate customer disruption entirely.",
    architectureDetails: [
      "Declarative infrastructure as code managed via Terraform with multi-AZ redundancy",
      "Automated GitHub Actions CI/CD pipelines with automated unit, integration, and security scans",
      "Kubernetes rolling updates with automated health probes and instant rollback capabilities",
      "Comprehensive Prometheus and Grafana alerting configured with PagerDuty escalation",
    ],
    deliverables: [
      "Complete Terraform infrastructure repository",
      "Containerized production microservices topology",
      "Automated CI/CD pipelines with zero-downtime blue/green deployment",
      "Enterprise observability and audit-ready security baseline",
    ],
    techStack: ["AWS", "Kubernetes", "Terraform", "Docker", "GitHub Actions", "Prometheus", "Grafana"],
    image: "/images/cloud-devops.jpg",
    aspectRatio: "16/10",
    accentColor: "#202722",
  },
  {
    slug: "supply-chain-twin",
    title: "Global Supply Chain Digital Twin",
    client: "Logistics & Freight Consortium",
    category: "Supply Chain Consulting · Data Analytics",
    year: "2023",
    tagline: "Predictive disruption simulation and multi-tier logistics visibility.",
    challenge:
      "A cross-border logistics provider faced cascading delays and unexpected detention fees caused by port congestion, unpredictable customs clearance, and fragmented supplier communication.",
    solution:
      "Applying research from Munich's Digital Factory methodology, Assestics engineered a decision-support platform that maps transit legs, models alternate shipping lanes, and alerts dispatchers days ahead of anticipated regional bottlenecks.",
    architectureDetails: [
      "Time-series database modeling vessel schedules, port wait times, and weather vectors",
      "Monte Carlo simulation engine stress-testing route risk and calculating delay probabilities",
      "Standardized data ingestion connectors normalizing disparate freight carrier EDI/API feeds",
      "Automated carbon emissions calculator tracking scope-3 transit footprint",
    ],
    deliverables: [
      "Real-time logistics control tower dashboard",
      "Route disruption risk predictor algorithm",
      "Automated carrier SLA monitoring engine",
      "Environmental impact & emissions reporting export",
    ],
    techStack: ["Python", "FastAPI", "Next.js", "TimescaleDB", "Redis", "Tailwind CSS"],
    image: "/images/supply-chain.jpg",
    aspectRatio: "16/10",
    accentColor: "#0E7490",
  },
];
