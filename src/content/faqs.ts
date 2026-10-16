export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Engineering" | "AI & Systems" | "Engagement";
}

export const generalFaqs: FAQItem[] = [
  {
    category: "General",
    question: "What does Assestics do?",
    answer:
      "Assestics is a multidisciplinary technology partner. We connect the digital systems that power modern businesses—combining bespoke software engineering, AI workflow automation, cloud/DevOps infrastructure, and supply-chain operations consulting.",
  },
  {
    category: "General",
    question: "What does 'The Assestics Assembly' mean?",
    answer:
      "It represents our engineering philosophy: modern business capabilities (infrastructure, AI, software, and supply chain) must not live in disconnected silos. We build interconnected assemblies where every component communicates smoothly and scales predictably.",
  },
  {
    category: "Engineering",
    question: "Why do you emphasize Cloud & DevOps first?",
    answer:
      "Because even the most elegant website or AI tool is useless if your servers fail during traffic surges. Solid cloud infrastructure, automated testing, and CI/CD pipelines provide the stability your business needs before scaling.",
  },
  {
    category: "AI & Systems",
    question: "How do your AI agents differ from generic chatbots?",
    answer:
      "Generic chatbots provide generic answers. Assestics builds deterministic, task-oriented AI agents connected directly to your databases, inventory feeds, and WhatsApp/Slack channels with strict verification guardrails and zero hallucinated commitments.",
  },
  {
    category: "Engagement",
    question: "How do we get started on a project?",
    answer:
      "Send us an overview of your project via our contact form or reach out directly at assestics.office@gmail.com. We schedule a 30-minute discovery consultation to understand your constraints and deliver an architecture blueprint.",
  },
  {
    category: "Engagement",
    question: "Do you work with existing legacy systems?",
    answer:
      "Yes. A significant portion of our work involves building secure API adapters, modern web interfaces, and synchronization pipelines around legacy databases and ERP platforms without requiring risky complete rewrites.",
  },
];
