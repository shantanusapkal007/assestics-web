export interface ProcessActivity {
  label: string;
  detail: string;
  tag: string;
}

export interface ProcessChapter {
  number: string;
  chapter: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  duration: string;
  accentColor: string;
  theme: "cyan" | "violet" | "emerald";
  deliverables: {
    title: string;
    description: string;
    badge: string;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
  activities: ProcessActivity[];
}

export const processChapters: ProcessChapter[] = [
  {
    number: "01",
    chapter: "STEP 01 // AUDIT & PLAN",
    title: "Understand",
    subtitle: "Listen & Plan",
    tagline: "We learn how your team works before writing any code.",
    description:
      "We review your current tools, talk to your team, and find what is slowing you down. We then give you a clear roadmap, fixed pricing, and agreed milestones.",
    duration: "WEEKS 01–02",
    accentColor: "#38D8E4",
    theme: "cyan",
    deliverables: [
      {
        title: "Workflow Audit",
        description: "A clear map of your daily bottlenecks, manual busywork, and tool integrations.",
        badge: "VERIFIED",
      },
      {
        title: "System Architecture Blueprint",
        description: "Practical technical plan detailing the screens, database, and features we will build.",
        badge: "APPROVED",
      },
      {
        title: "Fixed Scope & Timeline",
        description: "Guaranteed deliverables, transparent pricing, and weekly milestone dates.",
        badge: "SIGNED",
      },
    ],
    metrics: [
      { value: "100%", label: "Fixed Scope" },
      { value: "<48hr", label: "Initial Review" },
      { value: "0", label: "Hidden Fees" },
    ],
    activities: [
      {
        label: "Workflow Walkthrough",
        detail: "Reviewing your spreadsheets, tools, and daily team processes.",
        tag: "DISCOVERY",
      },
      {
        label: "Bottleneck Identification",
        detail: "Finding repetitive tasks that software can automate.",
        tag: "ANALYSIS",
      },
      {
        label: "Milestone Agreement",
        detail: "Agreeing on weekly delivery goals and clear definitions of done.",
        tag: "ROADMAP",
      },
    ],
  },
  {
    number: "02",
    chapter: "STEP 02 // DESIGN & BUILD",
    title: "Build",
    subtitle: "Weekly Sprints",
    tagline: "Fast weekly progress you can test live every Friday.",
    description:
      "We build your software in short, focused weekly sprints. You get access to live preview links every week so you can test features and give feedback immediately.",
    duration: "WEEKS 03–08",
    accentColor: "#818CF8",
    theme: "violet",
    deliverables: [
      {
        title: "Working Web Applications",
        description: "Modern, responsive web apps and dashboards built with React and Next.js.",
        badge: "TESTED",
      },
      {
        title: "Automated Workflows & AI",
        description: "Connected pipelines that automatically process data and answer requests.",
        badge: "ACTIVE",
      },
      {
        title: "Weekly Live Preview Link",
        description: "A clickable test environment updated continuously so you can try new features.",
        badge: "WEEKLY",
      },
    ],
    metrics: [
      { value: "100%", label: "Code Quality" },
      { value: "Weekly", label: "Working Demos" },
      { value: "0", label: "Surprises" },
    ],
    activities: [
      {
        label: "Frontend & UI Design",
        detail: "Crafting intuitive screens that your team loves using.",
        tag: "DESIGN",
      },
      {
        label: "Database & API Engineering",
        detail: "Connecting your business data securely with fast load times.",
        tag: "ENGINEERING",
      },
      {
        label: "Live Friday Demos",
        detail: "Walking you through weekly updates with direct developer contact.",
        tag: "FEEDBACK",
      },
    ],
  },
  {
    number: "03",
    chapter: "STEP 03 // LAUNCH & SUPPORT",
    title: "Launch & Support",
    subtitle: "Zero Downtime",
    tagline: "Smooth switchover, full team training, and ongoing care.",
    description:
      "We handle the switchover smoothly with zero disruption to your daily operations. We train your staff, monitor performance 24/7, and stay on call for fast support.",
    duration: "ONGOING 24/7",
    accentColor: "#34D399",
    theme: "emerald",
    deliverables: [
      {
        title: "Zero-Downtime Launch",
        description: "Safe cutover ensuring your customers and staff experience zero interruptions.",
        badge: "LIVE",
      },
      {
        title: "Team Training & Documentation",
        description: "Step-by-step guides, video walk-throughs, and staff onboarding sessions.",
        badge: "COMPLETE",
      },
      {
        title: "24/7 Monitoring & Support",
        description: "Real-time alerts, fast bug fixes, and continuous security updates.",
        badge: "MONITORED",
      },
    ],
    metrics: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "<24hr", label: "Support Response" },
      { value: "100%", label: "Code Handover" },
    ],
    activities: [
      {
        label: "Safe Cutover",
        detail: "Migrating data and publishing live systems without downtime.",
        tag: "LAUNCH",
      },
      {
        label: "Staff Onboarding",
        detail: "Hands-on walkthroughs so your team feels confident on day one.",
        tag: "TRAINING",
      },
      {
        label: "Continuous Support",
        detail: "Ongoing maintenance, security patches, and performance checks.",
        tag: "CARE",
      },
    ],
  },
];

