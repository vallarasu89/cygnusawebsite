import { TeamMember } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm-1",
    name: "Muthuraman R.",
    role: "Founder & Director",
    department: "Leadership",
    bio: "With over 25+ years of battle-tested enterprise technology leadership, Muthuraman guides CYGNUSA's strategic vision, Virtual CTO practice, and global delivery standards. His cross-industry expertise spans high-scale software engineering, digital transformation for Fortune 500 enterprises, and building sustainable technology ecosystems for SMBs worldwide.",
    skills: ["Virtual CTO Advisory", "Enterprise Architecture", "Strategic IT Consulting", "Digital Transformation", "Governance & Compliance"],
    linkedInUrl: "https://www.linkedin.com/company/cygnusa-technologies",
    isLeadership: true,
    avatarPlaceholder: "MR",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=85&crop=faces"
  },
  {
    id: "tm-2",
    name: "Anandhi Muthuraman",
    role: "Director – Corporate Governance & Operations",
    department: "Leadership",
    bio: "Co-founder and Director overseeing statutory corporate governance, finance, operational frameworks, and people-first culture at CYGNUSA. Her leadership ensures institutional stability, regulatory adherence, and client commitment across all international business engagements.",
    skills: ["Corporate Governance", "Statutory Compliance", "Operational Leadership", "People & Culture", "Financial Strategy"],
    linkedInUrl: "https://www.linkedin.com/company/cygnusa-technologies",
    isLeadership: true,
    avatarPlaceholder: "AM",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=85&crop=faces"
  },
  {
    id: "tm-3",
    name: "Rajesh Kannan",
    role: "Lead Solutions Architect (CYGNUSA Engineering Team)",
    department: "Engineering",
    bio: "Directs full-stack software development, microservices architecture, and API systems. Specializes in building distributed systems for automotive logistics, edtech, and high-concurrency enterprise portals.",
    skills: ["Microservices", "React & Node.js", "PostgreSQL", "System Scalability", "REST / GraphQL"],
    isLeadership: false,
    avatarPlaceholder: "RK",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=85&crop=faces"
  },
  {
    id: "tm-4",
    name: "Dinesh Venkatesh",
    role: "Lead DevOps & Cloud Engineer (CYGNUSA Operations Team)",
    department: "Cloud & MSP",
    bio: "Oversees 24/7 Managed IT operations, multi-cloud governance (AWS, Azure, GCP), infrastructure automation via Terraform, and ISO 27001-certified SOC threat management.",
    skills: ["Multi-Cloud AWS/Azure", "Terraform & IaC", "Kubernetes", "Sophos Security", "24/7 NOC Monitoring"],
    isLeadership: false,
    avatarPlaceholder: "DV",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=85&crop=faces"
  },
  {
    id: "tm-5",
    name: "Arun Balasubramanian",
    role: "Principal AI Integration Specialist",
    department: "Engineering",
    bio: "Leads enterprise LLM integrations, RAG pipeline engineering, autonomous AI agent workflows, and NLP document processing systems for fintech and recruitment platforms.",
    skills: ["Large Language Models", "LangChain & Vector DBs", "FastAPI / Python", "Agentic Workflows", "MLOps"],
    isLeadership: false,
    avatarPlaceholder: "AB",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85&crop=faces"
  },
  {
    id: "tm-6",
    name: "Priya Sundaram",
    role: "Senior UI/UX & Design Systems Lead",
    department: "Design & UX",
    bio: "Champions human-centric digital experiences, accessible design tokens (WCAG AA), and interactive mobile prototypes across aviation, logistics, and enterprise SaaS products.",
    skills: ["Figma Design Systems", "User Research", "WCAG AA Accessibility", "Interaction Design", "Design-to-Code Handoff"],
    isLeadership: false,
    avatarPlaceholder: "PS",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=85&crop=faces"
  }
];
