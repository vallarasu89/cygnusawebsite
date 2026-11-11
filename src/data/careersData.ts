import { JobOpening } from '../types';

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "job-1",
    title: "Senior Full Stack Engineer (React + Node.js / TypeScript)",
    department: "Software & Product Engineering",
    location: "Chennai, India (Hybrid)",
    type: "Full-time",
    experience: "4 - 7 Years",
    summary: "Lead the architecture and implementation of scalable web platforms, high-throughput APIs, and enterprise SaaS solutions for global clients across aviation, fintech, and energy logistics.",
    responsibilities: [
      "Architect and build robust, high-performance web applications using React, TypeScript, and Node.js.",
      "Design normalized relational database schemas (PostgreSQL) and scalable Redis caching layers.",
      "Collaborate closely with UI/UX designers to translate Figma design systems into pixel-perfect, accessible UI components.",
      "Implement automated unit and integration tests to maintain high code reliability and prevent regressions.",
      "Participate in agile sprint ceremonies, conduct code reviews, and mentor junior engineering colleagues."
    ],
    requirements: [
      "4+ years of professional hands-on experience with modern React, TypeScript, and Node.js / Express.",
      "Strong proficiency with relational databases (PostgreSQL or MySQL) and complex query optimization.",
      "Solid understanding of RESTful API design, authentication protocols (OAuth2, JWT), and security best practices.",
      "Experience with Docker, Git workflows, and CI/CD pipelines (GitHub Actions).",
      "Excellent communication skills and an agile, problem-solving mindset."
    ],
    openingsCount: 2
  },
  {
    id: "job-2",
    title: "Cloud & DevOps Solutions Architect (AWS / Azure)",
    department: "Cloud & MSP Operations",
    location: "Chennai, India / Remote",
    type: "Full-time",
    experience: "5 - 8 Years",
    summary: "Design, automate, and govern secure multi-cloud environments for our Managed IT services practice and enterprise clients, driving FinOps cost efficiency and 99.95% availability.",
    responsibilities: [
      "Architect resilient, secure cloud infrastructure across AWS and Microsoft Azure using Infrastructure as Code (Terraform).",
      "Build and maintain automated CI/CD deployment pipelines with zero-downtime rolling updates.",
      "Implement proactive monitoring, alerting, and log aggregation using Prometheus, Grafana, and Datadog.",
      "Conduct Well-Architected Cloud Reviews and FinOps audits to eliminate cloud waste and optimize spend.",
      "Enforce ISO 27001-compliant security guardrails, IAM least-privilege policies, and disaster recovery automations."
    ],
    requirements: [
      "5+ years of experience in cloud architecture and DevOps operations (AWS or Azure certification preferred).",
      "Proven mastery of Terraform, Docker, and Kubernetes orchestration (EKS / AKS).",
      "Hands-on experience configuring enterprise firewalls, VPNs, VPC peering, and zero-trust access controls.",
      "Strong scripting abilities in Bash or Python for operational automation.",
      "Deep understanding of disaster recovery, backup automation, and business continuity planning."
    ],
    openingsCount: 1
  },
  {
    id: "job-3",
    title: "AI & LLM Solutions Engineer",
    department: "AI Integration Practice",
    location: "Chennai, India (Hybrid)",
    type: "Full-time",
    experience: "3 - 6 Years",
    summary: "Engineer domain-specific AI wrappers, autonomous multi-agent workflows, and RAG pipelines that automate complex business tasks for enterprise clients.",
    responsibilities: [
      "Develop and deploy production RAG (Retrieval-Augmented Generation) pipelines connecting LLMs to private enterprise data.",
      "Design intelligent agents and conversational systems using LangChain, LlamaIndex, and FastAPI.",
      "Implement automated document parsing, semantic search, and information extraction workflows.",
      "Evaluate model performance, latency, and cost, implementing prompt caching and hallucination guardrails.",
      "Integrate AI endpoints seamlessly into client web portals and backend microservices."
    ],
    requirements: [
      "3+ years in software engineering with at least 1.5+ years building production applications with LLMs and Python.",
      "Deep practical experience with OpenAI API, Anthropic Claude, or Google Gemini APIs.",
      "Proficiency with vector databases (Pinecone, pgvector, Qdrant) and text chunking/embedding strategies.",
      "Strong background in Python, FastAPI, and asynchronous API architectures.",
      "Passion for staying on the cutting edge of autonomous agents and generative AI research."
    ],
    openingsCount: 2
  },
  {
    id: "job-4",
    title: "Senior UI/UX Product Designer",
    department: "Design & UX Practice",
    location: "Chennai, India (Hybrid)",
    type: "Full-time",
    experience: "3 - 6 Years",
    summary: "Craft enterprise-grade user interfaces, design systems, and responsive mobile experiences for mission-critical industrial, aviation, and fintech products.",
    responsibilities: [
      "Translate complex business processes into intuitive, elegant user flows, wireframes, and interactive prototypes.",
      "Build and maintain scalable design systems with tokenized styles in Figma matching our brand guidelines.",
      "Conduct user research interviews, stakeholder workshops, and usability testing sessions.",
      "Ensure strict WCAG 2.1 AA accessibility compliance across contrast, typography, and keyboard navigation.",
      "Work closely with frontend engineers to ensure pixel-perfect fidelity during implementation."
    ],
    requirements: [
      "3+ years of dedicated UI/UX design experience for web and mobile software products.",
      "Expert-level command of Figma, auto-layout, component variants, and prototyping.",
      "Strong portfolio demonstrating complex B2B dashboards, mobile apps, or enterprise software.",
      "Solid understanding of frontend technologies (HTML, Tailwind CSS, responsive design constraints).",
      "High attention to detail, typography, hierarchy, and micro-interactions."
    ],
    openingsCount: 1
  },
  {
    id: "job-5",
    title: "Cybersecurity & SOC Compliance Analyst",
    department: "Security & Compliance",
    location: "Chennai, India",
    type: "Full-time",
    experience: "2 - 5 Years",
    summary: "Monitor endpoint security, investigate alerts, execute vulnerability sweeps, and support clients in achieving ISO 27001:2022 compliance.",
    responsibilities: [
      "Monitor security incidents and endpoint telemetry across client fleets using Sophos Central and SIEM tools.",
      "Perform periodic vulnerability scans, coordinate patch management, and review firewall rule sets.",
      "Support internal and external audits for ISO 27001:2022, ISO 20000-1, and ISO 9001 certifications.",
      "Draft and maintain Information Security Management System (ISMS) policies and procedures.",
      "Conduct simulated phishing assessments and employee security awareness trainings."
    ],
    requirements: [
      "2+ years in cybersecurity operations, SOC analysis, or IT security compliance.",
      "Familiarity with ISO 27001:2022 standard requirements and ISMS documentation.",
      "Hands-on experience with EDR tools (Sophos, Microsoft Defender) and network firewalls.",
      "Security certifications such as CompTIA Security+, CEH, or ISO 27001 Lead Auditor/Implementer are a strong plus.",
      "Rigorous attention to detail and strong written documentation skills."
    ],
    openingsCount: 1
  }
];

export const CULTURE_BENEFITS = [
  {
    icon: "HeartPulse",
    title: "Comprehensive Health & Wellness",
    description: "Group medical insurance coverage for you and your dependents, plus mental health support and wellness checkups."
  },
  {
    icon: "GraduationCap",
    title: "Continuous Learning & Certifications",
    description: "100% reimbursed professional certifications (AWS, Azure, ISO, CISA) plus sponsored conference access and book stipends."
  },
  {
    icon: "CalendarCheck",
    title: "Transparent & Progressive Leave Policy",
    description: "Structured Casual (8d), Sick (8d), Earned (10d), Paternity (3d), Marriage (3d), and Comp-Off benefits under our official 2026 HR policy."
  },
  {
    icon: "Laptop",
    title: "Premium Tech Hardware",
    description: "High-spec modern laptops (MacBook Pro or ThinkPad workstation), external monitors, and ergonomic accessories provided."
  },
  {
    icon: "TrendingUp",
    title: "Merit-Driven Growth & Fast Track",
    description: "Semi-annual performance reviews powered by our proprietary HYPER4MANCE platform with clear, transparent promotion criteria."
  },
  {
    icon: "Coffee",
    title: "Vibrant Culture & Hackathons",
    description: "Quarterly internal innovation hackathons, team outings, annual company retreats, and game tournaments."
  }
];

