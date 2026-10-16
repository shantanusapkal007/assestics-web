export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  deliverable: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Real constraints before code",
    description:
      "We learn how your business works, identify the real operational bottlenecks, and define the problem worth solving. We audit server architectures, review workflow pain points, and align on clear business criteria before proposing a solution.",
    details: [
      "Technical architecture and infrastructure audit",
      "Process mapping across sales, operations, and fulfillment",
      "Identification of repetitive bottlenecks and integration barriers",
      "Clear feasibility assessment and structured project scope",
    ],
    deliverable: "System Architecture Blueprint & Scope Specification",
  },
  {
    number: "02",
    title: "Design & Build",
    subtitle: "Iterative engineering & validation",
    description:
      "We design the right solution, engineer it carefully, and validate it through continuous iterative delivery. From tactile UI components to hardened cloud pipelines and AI prompts, every piece is built to work together seamlessly.",
    details: [
      "Modular design system and accessible interface design",
      "Strict TypeScript engineering with automated testing",
      "Infrastructure-as-Code setup with automated staging deployments",
      "Continuous review checkpoints with your operational stakeholders",
    ],
    deliverable: "Working Staging Application with Daily Builds",
  },
  {
    number: "03",
    title: "Launch & Improve",
    subtitle: "Observability and measured growth",
    description:
      "We help deliver the system into production with zero downtime, measure how it performs under real-world usage, and identify continuous opportunities for operational improvement.",
    details: [
      "Zero-downtime production deployment with automated failover",
      "Real-time telemetry, latency monitoring, and error alerts",
      "Operator training, runbooks, and full code handover",
      "Post-launch optimization and performance tuning",
    ],
    deliverable: "Live Enterprise System with Full Documentation & Runbooks",
  },
];
