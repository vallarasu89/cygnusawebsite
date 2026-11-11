import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: "srv-1",
    slug: "virtual-cto",
    title: "Virtual CTO & Strategic Advisory",
    shortDescription: "Embed veteran technology leadership into your leadership team without the cost and rigidity of a full-time executive.",
    category: "Advisory",
    tagline: "Your Fractional CTO. Full-Scale Enterprise Impact.",
    heroSummary: "We translate business vision into executable technology roadmaps, optimize vendor and software expenses, govern security and compliance, and engineer scale-readiness for fast-growth SMBs and forward-thinking enterprises.",
    iconName: "Compass",
    businessChallenges: [
      "Lack of senior technical leadership to align tech investments with commercial growth goals.",
      "Spiraling vendor and software licensing costs with fragmented, redundant tech stacks.",
      "Technical debt choking agility, preventing scale, and increasing vulnerability to outages.",
      "Difficulty vetting high-stakes architecture choices, AI investments, and security audits.",
      "Struggling to translate complex technological risks into board-level strategic decisions."
    ],
    ourApproach: [
      "360° Tech & Architecture Audit: Comprehensive evaluation of codebases, infrastructure, team capacity, and SaaS expenditures.",
      "Executive Growth Roadmap: Prioritized 12-to-36-month technology blueprints tied directly to business KPIs.",
      "Vendor & Budget Optimization: Hard-nosed vendor rationalization, contract re-negotiations, and licensing rightsizing.",
      "Governance & Security Blueprint: Implementing ISO 27001/SOC 2-ready security controls and disaster recovery guardrails.",
      "Founder & Board Alignment: Regular strategic steering committee sessions to evaluate ROI and risk mitigation."
    ],
    keyCapabilities: [
      "Enterprise Technology Roadmap & Architecture Design",
      "Vendor Evaluation, Consolidation & Cost Optimization",
      "Security, Compliance & Regulatory Governance",
      "Scale-Readiness & Cloud Modernization Blueprints",
      "Founder, Executive & Board-Level Strategic Advisory",
      "Tech Due Diligence for M&A and Private Equity Audits"
    ],
    benefits: [
      "Up to 60% savings compared to hiring a full-time enterprise C-level executive.",
      "Immediate access to 25+ years of battle-tested technology leadership experience.",
      "Objective, vendor-neutral recommendations free of software sales quotas.",
      "Risk mitigation across cloud migration, AI adoption, and regulatory compliance.",
      "Clear, actionable metrics translating technical velocity into bottom-line profitability."
    ],
    techStack: ["AWS", "Azure", "GCP", "Microservices Architecture", "Kubernetes", "ISO 27001", "SOC 2", "FinOps Frameworks"],
    relatedCaseStudySlugs: ["performance-management-system", "sop-management-system", "gofuel-ecosystem"],
    faqs: [
      {
        question: "How does CYGNUSA's Virtual CTO service differ from a traditional IT consultant?",
        answer: "A consultant hands over a slide deck and departs. CYGNUSA's Virtual CTO acts as an embedded executive member of your leadership team—taking ownership of execution, steering technical roadmaps, attending board reviews, and holding vendors and engineers accountable."
      },
      {
        question: "What is the typical time commitment for a Fractional CTO engagement?",
        answer: "Our engagements range from flexible advisory retainers (10 to 20 hours per month for high-level governance) to deep transformation commitments (2 to 3 days weekly during major platform overhauls or fundraising)."
      },
      {
        question: "Can CYGNUSA help us hire and structure our internal engineering team?",
        answer: "Yes. We help design organizational charts, write technical job descriptions, conduct final technical interviews, and establish standard engineering review protocols."
      }
    ]
  },
  {
    id: "srv-2",
    slug: "managed-it-services",
    title: "Managed IT Services / MSP",
    shortDescription: "Predictable, enterprise-grade IT operations, helpdesk, and infrastructure monitoring with guaranteed SLAs.",
    category: "Run",
    tagline: "Lower IT Cost, Zero Person Dependency, Always-On Enterprise Support.",
    heroSummary: "Eliminate downtime, secure every endpoint, and scale your IT operations seamlessly without building an expensive in-house IT department.",
    iconName: "Server",
    businessChallenges: [
      "Unplanned network and server downtime paralyzing core business operations.",
      "Dangerous reliance on a single internal IT person with zero institutional redundancy.",
      "Chaotic ticket management and slow response times frustrating staff and customers.",
      "Inadequate offsite backup systems leaving companies vulnerable to ransomware disasters.",
      "Uncontrolled proliferation of SaaS apps, endpoints, and unsecured remote employee laptops."
    ],
    ourApproach: [
      "24/7/365 NOC Monitoring: Automated monitoring of servers, networks, cloud instances, and workstations.",
      "SLA-Guaranteed Helpdesk: Tier 1–3 remote and on-premise support resolving user requests within minutes.",
      "Automated Patching & Vulnerability Management: Regular updates across OS, software, and firmware layers.",
      "Disaster Recovery & Redundant Backups: Air-gapped offsite cloud snapshots with automated recovery drills.",
      "Quarterly IT Business Reviews (QBR): Transparent reporting on ticket volume, uptime, and infrastructure roadmap."
    ],
    keyCapabilities: [
      "IT Helpdesk & Omnichannel Remote Support",
      "Cloud & Hybrid Server Infrastructure Management",
      "Enterprise Network, Firewall & Device Management",
      "Continuous Offsite Cloud Backups & Disaster Recovery",
      "Zero-Trust Asset Management & Mobile Device Management (MDM)",
      "Strict SLA-Driven Incident Response Models"
    ],
    benefits: [
      "Guaranteed 99.9% uptime across managed infrastructure and critical systems.",
      "Zero person dependency—backed by a multi-disciplinary team of certified engineers.",
      "Predictable flat-rate monthly IT expenditure with zero unexpected capital shocks.",
      "Rapid resolution times (average response under 15 minutes for critical tickets).",
      "Audit-ready IT asset inventories compliant with ISO 27001 standards."
    ],
    techStack: ["Sophos Central", "Microsoft 365", "Google Workspace", "AWS", "Azure", "Zabbix", "Prometheus", "Cisco Meraki", "Ubiquiti"],
    relatedCaseStudySlugs: ["managed-it-cloud-ops", "sop-management-system"],
    faqs: [
      {
        question: "What SLAs does CYGNUSA provide for Managed IT Services?",
        answer: "We offer response SLAs starting under 15 minutes for critical priority incidents (P1), 1 hour for high priority (P2), and guaranteed 99.9% system availability targets backed by contractual SLAs."
      },
      {
        question: "Can CYGNUSA support hybrid remote workforces across multiple cities?",
        answer: "Absolutely. We secure and manage distributed workforces across India, the US, Singapore, and Europe using cloud-native endpoint management, zero-trust network access, and centralized MDM."
      }
    ]
  },
  {
    id: "srv-3",
    slug: "security-compliance",
    title: "Security & Compliance",
    shortDescription: "Endpoint protection, threat monitoring, vulnerability management, and audit-ready ISO compliance.",
    category: "Run",
    tagline: "Security That Starts at the Endpoint. Zero Compromise.",
    heroSummary: "Protect your intellectual property, safeguard client data, eliminate ransomware risks, and achieve audit-ready compliance across ISO 27001, SOC 2, and data privacy regulations.",
    iconName: "ShieldCheck",
    businessChallenges: [
      "Surging ransomware attacks and phishing threats targeting SMB supply chains.",
      "Unclear endpoint visibility as employees work remotely across unmanaged personal networks.",
      "Demands from enterprise clients and regulatory bodies for certified security standards.",
      "Gaps in disaster recovery and business continuity plans that fail during actual crises.",
      "High costs and scarce availability of dedicated cybersecurity talent."
    ],
    ourApproach: [
      "Endpoint Detection & Response (EDR): Deploying AI-powered continuous threat monitoring on every machine.",
      "Perimeter & Cloud Hardening: Configuring firewalls, MFA, encryption at rest, and zero-trust policies.",
      "Vulnerability Scanning & Penetration Testing: Routine automated sweeps and ethical hacking tests.",
      "Regulatory Readiness: Implementing controls, documentation, and policies required for ISO 27001 certification.",
      "Security Awareness Drills: Simulated phishing campaigns and staff hygiene training."
    ],
    keyCapabilities: [
      "AI-Driven Endpoint Detection & Response (EDR)",
      "Next-Gen Antivirus, Anti-Ransomware & Zero-Day Defense",
      "Device Compliance, Encryption & Policy Enforcement",
      "Continuous SIEM / Threat Monitoring & Incident Response",
      "Cloud Security Posture Management (CSPM) for AWS & Azure",
      "ISO 27001:2022 Implementation & Pre-Audit Certification Support"
    ],
    benefits: [
      "Significantly minimized attack surface and zero-day threat interception.",
      "Fast-track enterprise sales cycles by providing proof of rigorous security certifications.",
      "Rapid isolation of infected endpoints in seconds to prevent lateral network movement.",
      "Peace of mind with documented, tested Business Continuity & Disaster Recovery plans.",
      "Complete compliance with Indian DPDP Act, GDPR, and international data standards."
    ],
    techStack: ["Sophos Intercept X", "Microsoft Defender for Endpoint", "Wazuh SIEM", "Bitdefender GravityZone", "Fortinet", "Cloudflare Zero Trust"],
    relatedCaseStudySlugs: ["digital-gold-staking", "managed-it-cloud-ops", "apac-dice-app"],
    faqs: [
      {
        question: "How does CYGNUSA help us achieve ISO 27001 certification?",
        answer: "As an ISO 27001:2022 certified company ourselves, we provide full-lifecycle enablement: ISMS gap analysis, drafting mandatory security policies, rolling out technical controls, internal auditing, and guiding you through external certification audits."
      },
      {
        question: "Is endpoint security sufficient without network-level protections?",
        answer: "No. Modern defense-in-depth requires endpoint EDR paired with DNS filtering, cloud identity authentication (MFA), network firewalls, and continuous monitoring."
      }
    ]
  },
  {
    id: "srv-4",
    slug: "software-product-engineering",
    title: "Software & Product Engineering",
    shortDescription: "Bespoke digital software, MVPs, and scalable cloud-native architectures engineered for ambitious product owners.",
    category: "Build",
    tagline: "Built for Your Business. Scaled for the Future.",
    heroSummary: "We architect, build, and deploy high-performance custom software systems, enterprise SaaS platforms, and minimum viable products (MVPs) engineered for massive scale, bank-grade security, and seamless user experiences.",
    iconName: "Code2",
    businessChallenges: [
      "Off-the-shelf software failing to match unique operational workflows and proprietary processes.",
      "Slow development cycles causing missed market opportunities and delayed revenue.",
      "Brittle code architectures collapsing under sudden user growth or transaction spikes.",
      "Poor alignment between product management, UX design, and backend engineering teams.",
      "Accumulating technical debt that makes ongoing feature updates costly and buggy."
    ],
    ourApproach: [
      "Agile Product Discovery: Translating business models into technical specifications, user stories, and wireframes.",
      "Modular Clean Architecture: Microservices, API-first interfaces, and decoupled frontend systems.",
      "DevOps CI/CD Automation: Automated testing pipelines ensuring every code release is production-ready.",
      "Security by Design: Automated static code analysis, encrypted data layers, and OWASP compliance.",
      "Iterative Sprints: 2-week agile delivery cycles with working software demos and continuous feedback."
    ],
    keyCapabilities: [
      "Enterprise Web Application & SaaS Engineering",
      "Cross-Platform Native & Mobile App Development",
      "Custom LMS, CRM, ERP & Workflow Engines",
      "Rapid Minimum Viable Product (MVP) Launchpads",
      "Microservices Architecture & REST/GraphQL API Design",
      "Legacy Core Refactoring & Cloud-Native Modernization"
    ],
    benefits: [
      "Fast time-to-market: Launch enterprise-ready MVPs in weeks rather than quarters.",
      "100% intellectual property ownership of source code, schemas, and assets.",
      "Scalable cloud architecture engineered to handle millions of transactions without bottlenecks.",
      "Lower total cost of ownership through clean code, automated tests, and clear documentation.",
      "High reliability with zero downtime rolling deployments."
    ],
    techStack: ["React", "TypeScript", "Node.js", "Python / FastAPI", "Go", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Tailwind CSS"],
    relatedCaseStudySlugs: ["performance-management-system", "apac-dice-app", "gofuel-ecosystem", "swift-hire-recruitment"],
    faqs: [
      {
        question: "Do we own 100% of the code and intellectual property produced by CYGNUSA?",
        answer: "Yes. All intellectual property, code repositories, database schemas, and architectural assets are 100% owned by your company from day one."
      },
      {
        question: "How do you ensure project milestones and delivery timelines are met?",
        answer: "We employ disciplined Agile/Scrum sprints with bi-weekly sprint reviews, live staging environment access, and real-time Jira/Git tracking so you have total visibility into velocity."
      }
    ]
  },
  {
    id: "srv-5",
    slug: "web-mobile-development",
    title: "Web & Mobile Application Development",
    shortDescription: "Ultra-fast responsive web apps, iOS, and Android applications that delight users and drive conversions.",
    category: "Build",
    tagline: "Intuitive Digital Experiences on Every Screen.",
    heroSummary: "From high-conversion e-commerce storefronts to native iOS and Android apps, we build responsive, accessible, and blazingly fast digital applications tailored to your target audience.",
    iconName: "Smartphone",
    businessChallenges: [
      "Sluggish mobile applications leading to high app store drop-offs and poor ratings.",
      "Fragmented codebases forcing teams to maintain separate expensive iOS and Android code.",
      "Inconsistent user experiences between desktop, tablet, and smartphone form factors.",
      "Poor offline performance and unreliable data sync in low-connectivity environments.",
      "Substandard Core Web Vitals hurting Google SEO rankings and PPC ad conversions."
    ],
    ourApproach: [
      "Mobile-First Experience Design: High-fidelity interactive Figma prototypes tested on real devices.",
      "Unified Cross-Platform Stacks: High-efficiency React Native and Flutter for seamless iOS & Android apps.",
      "Performance Optimization: Sub-second page loads, responsive image sets, and offline caching via PWA.",
      "Native Device Integrations: Camera, QR/Barcode scanning, geolocation, biometrics, and push notifications.",
      "App Store Governance: End-to-end management of Google Play Store and Apple App Store submissions."
    ],
    keyCapabilities: [
      "High-Performance React & Next.js Web Portals",
      "Cross-Platform Native iOS & Android Apps (React Native, Flutter)",
      "Progressive Web Apps (PWA) with Offline Synchronization",
      "Enterprise B2B E-Commerce & Aviation Retail Storefronts",
      "Biometric Authentication, Geofencing & Camera Barcode Integration",
      "Real-Time Push Notifications, Deep Linking & Analytics"
    ],
    benefits: [
      "Up to 40% reduction in development costs using proven cross-platform frameworks.",
      "Sub-second LCP load times meeting Google's highest Core Web Vitals criteria.",
      "Seamless offline capability for field technicians, drivers, and airport personnel.",
      "Consistent, accessible brand aesthetics across all devices and resolutions.",
      "Stress-free App Store compliance and expedited approvals."
    ],
    techStack: ["React Native", "Flutter", "React", "Next.js", "Tailwind CSS", "Redux Toolkit", "WebSockets", "Firebase Cloud Messaging"],
    relatedCaseStudySlugs: ["loyalty-enrollment-platform", "aviation-ecommerce-platform", "mobile-lms-platform", "ai-communication-collaboration"],
    faqs: [
      {
        question: "Should we build native apps (Swift/Kotlin) or cross-platform (React Native/Flutter)?",
        answer: "For 95% of business applications, cross-platform frameworks like React Native or Flutter provide identical native 60fps performance and access to hardware APIs, while cutting development and maintenance costs in half."
      },
      {
        question: "Do you handle App Store and Google Play review rejections if they occur?",
        answer: "Yes. Our team handles the entire submission process, privacy nutrition labels, and regulatory guidelines to ensure your app is approved and published smoothly."
      }
    ]
  },
  {
    id: "srv-6",
    slug: "ai-integration",
    title: "AI Integration & Automation",
    shortDescription: "Turn LLMs and machine learning into measurable business productivity, custom AI agents, and workflow automations.",
    category: "Build",
    tagline: "AI That Works With What You Already Have.",
    heroSummary: "We integrate enterprise-grade Large Language Models, autonomous AI agents, and intelligent workflow automations directly into your existing software, turning unstructured data into automated operational speed.",
    iconName: "Bot",
    businessChallenges: [
      "High employee time wasted on repetitive document processing, data extraction, and manual email routing.",
      "Struggling to move beyond generic ChatGPT toys into secure, domain-specific enterprise AI systems.",
      "Legitimate concerns over corporate data privacy and intellectual property leaking into public LLM training sets.",
      "Complex integration hurdles connecting proprietary CRM, ERP, and databases to AI endpoints.",
      "Difficulty measuring tangible business ROI from AI initiatives."
    ],
    ourApproach: [
      "Use-Case Feasibility Assessment: Identifying high-ROI automation targets where AI reduces hours to seconds.",
      "Private & Secure RAG Pipelines: Retrieval-Augmented Generation connecting LLMs only to your sandboxed data.",
      "Autonomous Agent Workflows: Building specialized agents that execute multi-step operations (parsing, validating, submitting).",
      "API Wrappers & Existing Tool Integration: Embedding AI seamlessly into your existing React portals, Slack, or ERP.",
      "Continuous Evaluation & Guardrails: Prompt testing, hallucination suppression, and human-in-the-loop validation."
    ],
    keyCapabilities: [
      "AI Wrappers & LLM Integrations for Legacy & Custom Apps",
      "Domain-Specific Chatbots & Multi-Agent Autonomous Systems",
      "Retrieval-Augmented Generation (RAG) on Enterprise Knowledge Bases",
      "Intelligent Document Processing (IDP), Resume Parsing & Extraction",
      "Predictive Analytics & Decision Intelligence Dashboards",
      "Private Cloud & On-Premises LLM Deployments (Zero Data Leakage)"
    ],
    benefits: [
      "Up to 80% acceleration in document review, applicant screening, and customer ticket routing.",
      "Total intellectual property privacy—your proprietary enterprise data is never used for LLM training.",
      "24/7 autonomous operations handling routine customer and employee requests with instant turnaround.",
      "Seamless integration without having to discard or rewrite your existing software infrastructure.",
      "Measurable ROI tracked through clear operational metrics and time savings."
    ],
    techStack: ["OpenAI API", "Anthropic Claude", "Gemini API", "LangChain", "LlamaIndex", "Pinecone / pgvector", "Python", "FastAPI", "Ollama"],
    relatedCaseStudySlugs: ["buddy-mentor-ai-lms", "swift-hire-recruitment", "ai-communication-collaboration"],
    faqs: [
      {
        question: "Will our proprietary business data be shared with public AI models?",
        answer: "Never. We enforce strict enterprise Zero-Data-Retention agreements via enterprise APIs (Azure OpenAI, AWS Bedrock, Google Cloud Vertex AI) or deploy self-hosted private open models (Llama 3 / Mistral) within your private VPC."
      },
      {
        question: "How long does it take to implement a production AI workflow?",
        answer: "A targeted AI workflow (such as automated resume parsing or an internal knowledge search assistant) typically goes from prototype to live production deployment in 3 to 6 weeks."
      }
    ]
  },
  {
    id: "srv-7",
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    shortDescription: "On-demand, pre-vetted senior technology professionals and dedicated engineering teams to accelerate your sprint velocity.",
    category: "Build",
    tagline: "On-Demand Technology Talent. When You Need It.",
    heroSummary: "Scale your engineering velocity overnight with pre-vetted senior software engineers, cloud architects, DevOps specialists, and UI/UX designers who integrate directly into your workflows and standups.",
    iconName: "Users",
    businessChallenges: [
      "Severe local tech talent shortages and grueling 3-to-6-month recruitment delays.",
      "High costs and financial risk of hiring permanent employees for temporary project surges.",
      "Frustration with unvetted freelancers who deliver low-quality code and lack accountability.",
      "Difficulty assessing deep architectural and security competencies during candidate interviews.",
      "Cultural and communication friction when managing remote contractors."
    ],
    ourApproach: [
      "Rapid Requirement Mapping: Aligning exact technology requirements, seniorities, and timezone needs within 48 hours.",
      "Rigorous Multi-Stage Vetting: In-depth technical interviews, live coding challenges, and cultural assessments.",
      "Frictionless Onboarding: Developers integrated into your Git repositories, Slack channels, and Jira boards immediately.",
      "Ongoing Performance Governance: Dedicated delivery managers ensuring productivity, code quality, and retention.",
      "Flexible Scale: Effortlessly scale team size up or down as project milestones require."
    ],
    keyCapabilities: [
      "Dedicated Full-Stack Software Developers (React, Node, Python, Java, Go)",
      "Mobile Engineers (React Native, Flutter, Swift, Kotlin)",
      "Cloud & DevOps Architects (AWS, Azure, Terraform, Kubernetes)",
      "Cybersecurity Specialists & SOC Analysts",
      "Enterprise UI/UX Designers & Product Strategists",
      "Dedicated QA Automation & Manual Testing Engineers"
    ],
    benefits: [
      "Onboard proven engineers in 5 to 7 business days instead of 3 to 4 months.",
      "Save up to 50% compared to local hiring, recruitment agency fees, and permanent overhead.",
      "Zero recruitment overhead: We handle payroll, benefits, hardware, compliance, and workspace.",
      "Seamless cultural alignment: English-proficient engineers accustomed to global enterprise standups.",
      "Flexible contracts: Scale up during critical releases and scale down when features launch."
    ],
    techStack: ["React", "TypeScript", "Node.js", "Python", "Java", "Go", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
    relatedCaseStudySlugs: ["apac-dice-app", "gofuel-ecosystem", "watertec-pms"],
    faqs: [
      {
        question: "How quickly can CYGNUSA deploy developers to our project?",
        answer: "We maintain a pre-vetted bench of senior engineers ready to deploy within 5 to 7 business days following requirement alignment."
      },
      {
        question: "Can our engineering managers manage the augmented developers directly?",
        answer: "Yes. Our engineers participate in your daily standups, use your GitHub/Jira environments, and report directly to your internal tech leads just like your full-time staff."
      }
    ]
  },
  {
    id: "srv-8",
    slug: "offshore-development-center",
    title: "Offshore Capability Development Center (OCDC)",
    shortDescription: "Build your exclusive dedicated offshore tech team and operational capability in India, tailored to your corporate culture.",
    category: "Build",
    tagline: "Your Dedicated Offshore Tech Team. Built for Scale.",
    heroSummary: "Establish a turnkey Offshore Capability Development Center (OCDC) in Chennai, India. We manage high-performance infrastructure, top 1% tech hiring, ISO 27001-certified security, and legal compliance while you maintain full strategic control.",
    iconName: "Globe2",
    businessChallenges: [
      "Astronomical software development costs in North America, Europe, and Australia.",
      "The massive legal, regulatory, and bureaucratic friction of setting up a foreign corporate subsidiary.",
      "High employee turnover and IP theft risks associated with random offshore vendors.",
      "Difficulty enforcing strict corporate security and ISO compliance across overseas remote setups.",
      "Loss of institutional knowledge when relying on short-term project-based contractors."
    ],
    ourApproach: [
      "Custom Facility & Infrastructure Setup: Dedicated, secure physical facilities or segregated cloud virtual networks.",
      "Targeted Talent Acquisition: Sourcing engineers who match your exact technology stack and company values.",
      "Rigid Security & ISO Governance: Biometric access, dedicated VLANs, hardware DLP, and ISO 27001 protocols.",
      "Delivery Governance & KPIs: Establishing unified sprint metrics, performance scorecards, and management syncs.",
      "Long-Term Growth Roadmap: Scaling from a 5-engineer pod to a 50+ person cross-functional engineering center."
    ],
    keyCapabilities: [
      "End-to-End Center Setup & Physical / Virtual Infrastructure Provisioning",
      "Exclusive Talent Sourcing, Vetting & High-Retention Onboarding",
      "Process, Security & Regulatory Compliance Management (ISO 27001, SOC 2)",
      "Daily Delivery Governance, Code Reviews & KPI Tracking",
      "Continuous Scale-Up Support, HR, Payroll & Legal Governance",
      "Optional Build-Operate-Transfer (BOT) Operational Models"
    ],
    benefits: [
      "Save 55% to 70% in total engineering costs compared to US/European in-house teams.",
      "Build a loyal, dedicated extension of your company culture with long-term knowledge retention.",
      "Zero operational distractions: We manage local labor law, tax filings, HR benefits, and real estate.",
      "Full intellectual property protection enforced under enforceable global non-disclosure frameworks.",
      "Round-the-clock development cycles: Follow-the-sun productivity while your home team sleeps."
    ],
    techStack: ["Enterprise Infrastructure", "Dedicated VLANs", "Hardware DLP", "Git Enterprise", "Jira", "AWS / Azure VPC Peering"],
    relatedCaseStudySlugs: ["apac-dice-app", "gofuel-ecosystem", "loyalty-enrollment-platform"],
    faqs: [
      {
        question: "How does an OCDC differ from typical IT outsourcing?",
        answer: "In typical outsourcing, resources are shared and rotate between clients. In an OCDC, the engineers work exclusively for you 100% of the time, are trained in your internal codebases, adopt your culture, and become long-term intellectual assets."
      },
      {
        question: "What is Build-Operate-Transfer (BOT)?",
        answer: "Under a BOT model, CYGNUSA sets up and manages the center until it reaches steady-state productivity, after which you have the option to legally transition the legal entity and staff into your own direct foreign subsidiary."
      }
    ]
  },
  {
    id: "srv-9",
    slug: "software-reseller",
    title: "Software Licensing & Reseller Services",
    shortDescription: "Authorised licensing, renewal optimization, and centralized management for Microsoft, Google, AWS, Sophos, Adobe, and Zoho.",
    category: "Reseller",
    tagline: "Software Licensing Made Simple. Compliant. Cost-Optimized.",
    heroSummary: "Consolidate software licensing across multiple vendors with a single authorized partner. We eliminate licensing waste, streamline annual renewals, and unlock tier-1 enterprise pricing across world-leading software suites.",
    iconName: "FileCheck",
    businessChallenges: [
      "Wasted IT spend on unused software seats, inactive accounts, and duplicate SaaS subscriptions.",
      "Unexpected annual renewal price hikes and confusing tier upgrade requirements.",
      "Compliance audit risks stemming from inadvertent software under-licensing.",
      "Managing dozens of fragmented vendor invoices, multiple payment gateways, and foreign forex charges.",
      "Slow, unresponsive direct customer support when software licensing issues occur."
    ],
    ourApproach: [
      "Licensing Usage Audit: Analyzing active vs inactive seats across Microsoft 365, Google Workspace, Adobe, and SaaS.",
      "Tier-1 Partner Pricing: Leveraging CYGNUSA's authorized reseller tier discounts for maximum client cost savings.",
      "Unified Invoicing: Consolidating all software licenses into a single transparent domestic tax invoice.",
      "Automated Renewal Reminders: Proactive 90-day renewal reviews to evaluate headcounts and optimize tiers.",
      "Onboarding & MSP Integration: Pre-configuring user licenses directly into our Managed IT support workflows."
    ],
    keyCapabilities: [
      "Authorized Microsoft 365, Azure & Windows Server Licensing",
      "Google Workspace & Google Cloud Platform (GCP) Partner Reselling",
      "Sophos Cybersecurity, Endpoint & Firewall Licensing",
      "Adobe Creative Cloud & Acrobat Enterprise Licensing",
      "Amazon Web Services (AWS) Solution Provider Billing",
      "Zoho One & Enterprise CRM Suite Implementation & Licensing"
    ],
    benefits: [
      "Up to 20% savings on standard retail software licensing costs through volume partner pricing.",
      "Single local currency invoice with complete GST compliance and zero international transaction surcharges.",
      "Guaranteed audit compliance: Sleep soundly knowing all enterprise software is legally authorized.",
      "Dedicated local support engineers for instant license provisioning, reassignments, and billing changes.",
      "Zero software shelfware: Ongoing rightsizing ensures you never pay for empty seats."
    ],
    techStack: ["Microsoft 365", "Google Workspace", "Sophos Central", "Adobe Creative Cloud", "Zoho One", "AWS Partner Network"],
    relatedCaseStudySlugs: ["managed-it-cloud-ops", "sop-management-system"],
    faqs: [
      {
        question: "Can we transfer our existing Microsoft 365 or Google Workspace licenses to CYGNUSA without disruption?",
        answer: "Yes, seamlessly. The transfer is a purely administrative partner-of-record shift. There is zero disruption to user email, data, files, or cloud services."
      },
      {
        question: "Do you provide technical support alongside the software licenses?",
        answer: "Yes. Unlike buying direct from large vendors with faceless ticket portals, CYGNUSA provides dedicated technical engineers to assist with setup, user provisioning, and security configurations."
      }
    ]
  },
  {
    id: "srv-10",
    slug: "hardware-reseller",
    title: "Hardware Reseller Services",
    shortDescription: "Enterprise-grade IT hardware sourcing, pre-configured deployment, and procurement partnerships with HP, Lenovo, and Zebra.",
    category: "Reseller",
    tagline: "Right Hardware. Right Performance. Right Cost.",
    heroSummary: "Procure business laptops, enterprise servers, high-throughput firewalls, network switches, and industrial barcode scanners pre-configured and deployment-ready, fully backed by warranty and MSP maintenance.",
    iconName: "Monitor",
    businessChallenges: [
      "Prolonged hardware delivery lead times delaying new employee onboarding and office expansions.",
      "Consumer-grade hardware failing prematurely under heavy commercial workloads.",
      "Manual setup bottlenecks: IT teams spending days imaging laptops and installing software individually.",
      "Disjointed warranties and difficult RMA returns when equipment malfunctions.",
      "Overpaying through retail channels rather than authorized enterprise distribution networks."
    ],
    ourApproach: [
      "Workload Sizing & Consultation: Specifying the exact hardware configurations suited for developers, executives, or warehouse staff.",
      "Tier-1 Enterprise Sourcing: Direct procurement through certified distributors (Redington, Ingram Micro).",
      "White-Glove Pre-Configuration: Imaging, OS hardening, antivirus installation, and domain joining before shipment.",
      "Direct Doorstep Delivery: Insured doorstep dispatch to remote employees or corporate offices worldwide.",
      "Lifecycle Warranty Management: Facilitating warranty claims, loaner devices, and scheduled hardware refreshes."
    ],
    keyCapabilities: [
      "Enterprise Laptops & Commercial Desktops (HP, Lenovo, Dell)",
      "Rackmount Enterprise Servers & High-Capacity Storage Arrays",
      "Commercial Firewalls & Threat Appliances (Sophos, Fortinet)",
      "Managed Switches, Routers & Wi-Fi 6 Access Points (TP-Link, Cisco)",
      "Industrial Barcode Scanners, Mobile Computers & Printers (Zebra, Matica)",
      "End-to-End Asset Tagging, Pre-Deployment Imaging & Remote Enrollment"
    ],
    benefits: [
      "Out-of-the-box readiness: Laptops arrive pre-configured so new hires are productive from minute one.",
      "Enterprise-grade durability with 3-to-5-year onsite manufacturer warranties and CYGNUSA support.",
      "Substantial cost savings compared to consumer retail channels via tier-1 distributor pricing.",
      "Streamlined single-source procurement for all corporate hardware, peripherals, and network gear.",
      "Zero logistics headache: We manage warehousing, configuration, and domestic delivery tracking."
    ],
    techStack: ["HP Enterprise", "Lenovo ThinkPad / ThinkSystem", "Sophos XGS Firewalls", "Zebra Technologies", "Matica", "TP-Link Omada", "Redington", "Ingram Micro"],
    relatedCaseStudySlugs: ["apac-dice-app", "loyalty-enrollment-platform", "managed-it-cloud-ops"],
    faqs: [
      {
        question: "Can CYGNUSA ship pre-configured laptops directly to remote employees across India?",
        answer: "Yes. We configure the device to your company's exact software and security image, ship it directly to the employee's doorstep, and support them through first-time login."
      },
      {
        question: "Do all hardware purchases include official manufacturer warranties?",
        answer: "Yes, 100%. All hardware is sourced directly through authorized national distribution channels (Redington, Ingram Micro) with full commercial manufacturer warranties."
      }
    ]
  },
  {
    id: "srv-11",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Research-driven, accessible, and conversion-focused product interfaces that elevate digital adoption.",
    category: "Build",
    tagline: "Design That Solves Problems and Sparks Growth.",
    heroSummary: "We design clean, modern, and human-centered user experiences for complex enterprise dashboards, mobile applications, and customer portals—balancing aesthetic refinement with effortless usability.",
    iconName: "Palette",
    businessChallenges: [
      "Cluttered, confusing enterprise interfaces that frustrate users and drive up training costs.",
      "High drop-off rates on signups, checkouts, and onboarding funnels.",
      "Design-developer handoff friction resulting in production apps that look nothing like the prototypes.",
      "Absence of a scalable design system, leading to inconsistent UI patterns and brand dilution.",
      "Poor mobile accessibility and failure to meet WCAG AA contrast standards."
    ],
    ourApproach: [
      "User Journey & Workflow Mapping: Dissecting complex business processes into intuitive user paths.",
      "Interactive Wireframing & Prototyping: Rapid clickable Figma prototypes tested with actual stakeholders.",
      "Design Systems & Tokenization: Creating modular, scalable component libraries in Figma and Tailwind CSS.",
      "Micro-Interactions & Animation: Subtle, polished transitions that provide responsive feedback without distraction.",
      "Developer-Ready Specifications: Pixel-perfect handoffs with tokenized CSS variables, typography, and states."
    ],
    keyCapabilities: [
      "Enterprise Software & B2B Dashboard UI/UX Design",
      "Native iOS & Android Mobile App User Experience",
      "Design Systems & Component Library Architecture (Figma & Storybook)",
      "User Research, Usability Testing & Heatmap Analysis",
      "WCAG 2.1 AA Accessibility & Responsive Web Layouts",
      "High-Fidelity Interactive Clickable Prototypes"
    ],
    benefits: [
      "Up to 50% decrease in user training time and internal operational errors.",
      "Measurably higher conversion rates and customer satisfaction scores (CSAT).",
      "Accelerated development sprints through reusable design tokens and pre-built components.",
      "Strict compliance with brand identity guidelines and modern aesthetic standards.",
      "Total accessibility ensuring your software is usable by all individuals on any device."
    ],
    techStack: ["Figma", "Storybook", "Tailwind CSS", "Framer Motion", "Whimsical", "Lottie"],
    relatedCaseStudySlugs: ["loyalty-enrollment-platform", "performance-management-system", "aviation-ecommerce-platform"],
    faqs: [
      {
        question: "Do you deliver working code or only design mockups?",
        answer: "We deliver both. While our design team crafts comprehensive Figma prototypes and design systems, our frontend engineers can translate those designs into production-ready React / Tailwind code."
      },
      {
        question: "How do you handle complex data visualization in enterprise dashboards?",
        answer: "We follow progressive disclosure principles—surfacing high-level KPIs first and allowing users to drill down into multi-layer data grids with intuitive filtering and export features."
      }
    ]
  },
  {
    id: "srv-12",
    slug: "application-modernisation",
    title: "Application Modernisation",
    shortDescription: "Transform fragile legacy systems and monolithic architectures into cloud-native, microservices-driven powerhouses.",
    category: "Build",
    tagline: "Re-platforming Legacy Applications for the Cloud Era.",
    heroSummary: "Breathe new life into aging core applications. We refactor legacy codebases, migrate monolithic databases to scalable cloud architectures, and unlock modern APIs without disrupting ongoing daily operations.",
    iconName: "RefreshCw",
    businessChallenges: [
      "Monolithic codebases that are terrifying to update due to hidden bugs and fragile dependencies.",
      "Legacy servers running out-of-support operating systems and obsolete database versions.",
      "High infrastructure hosting costs for inefficient on-premises hardware.",
      "Inability to integrate with modern SaaS tools, third-party APIs, and AI models.",
      "Severe performance bottlenecks during peak user traffic."
    ],
    ourApproach: [
      "Legacy Code & Dependency Audit: Mapping code paths, database dependencies, and business logic rules.",
      "Strangler Fig Migration Strategy: Incrementally peeling off services into modern microservices without big-bang risk.",
      "Cloud-Native Re-platforming: Containerizing workloads with Docker and Kubernetes for elastic scalability.",
      "Database Modernization: Migrating legacy databases to high-availability PostgreSQL or cloud-managed databases.",
      "Zero-Downtime Cutover: Dual-run synchronization and canary testing to guarantee continuous business operations."
    ],
    keyCapabilities: [
      "Monolith to Microservices / Serverless Architecture Deconstruction",
      "Legacy Tech Stack Migration (.NET, PHP, Java to Modern React/Node/Python)",
      "Cloud Database Migration & Schema Optimization",
      "RESTful API & GraphQL Layer Engineering over Legacy Cores",
      "Docker Containerization & Kubernetes Orchestration",
      "Automated CI/CD Pipeline Deployment & Zero-Downtime Cutover"
    ],
    benefits: [
      "Slash ongoing maintenance costs and eliminate licensing fees for obsolete legacy platforms.",
      "Increase engineering deployment frequency from months to multiple times per day.",
      "Eliminate security vulnerabilities associated with unpatched legacy frameworks.",
      "Enable horizontal cloud scaling to easily absorb seasonal traffic spikes.",
      "Preserve decades of proprietary business logic while unlocking modern UI and mobile capabilities."
    ],
    techStack: ["Docker", "Kubernetes", "AWS ECS", "Azure App Services", "PostgreSQL", "Node.js", "Go", "TypeScript"],
    relatedCaseStudySlugs: ["apac-dice-app", "gofuel-ecosystem", "sop-management-system"],
    faqs: [
      {
        question: "Can our business continue operating normally during the modernization process?",
        answer: "Yes. We employ the Strangler Fig pattern—modernizing one module at a time behind a proxy. Your legacy system continues operating smoothly while modern services take over incrementally."
      },
      {
        question: "How do you ensure data integrity during database migrations?",
        answer: "We implement continuous data replication and validation scripts that verify checksums between legacy and target databases before initiating the final cutover."
      }
    ]
  },
  {
    id: "srv-13",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDescription: "Architect, automate, and optimize AWS, Azure, and Google Cloud environments with Infrastructure as Code.",
    category: "Run",
    tagline: "High-Availability Cloud Architecture, Automated for Scale.",
    heroSummary: "We design, deploy, and govern cloud infrastructure across AWS, Microsoft Azure, and Google Cloud. With Infrastructure as Code (Terraform), automated CI/CD pipelines, and FinOps cost optimization, we help you ship faster and spend smarter.",
    iconName: "Cloud",
    businessChallenges: [
      "Spiraling, unpredictable monthly cloud bills with zero cost accountability.",
      "Manual deployment errors leading to frequent broken releases and emergency rollbacks.",
      "Lack of automated high availability and disaster recovery across multi-region infrastructure.",
      "Fragmented cloud security policies exposing databases and S3 buckets to the public internet.",
      "Inability to scale infrastructure automatically during sudden spikes in demand."
    ],
    ourApproach: [
      "Well-Architected Cloud Review: Benchmarking infrastructure against security, reliability, and cost best practices.",
      "Infrastructure as Code (IaC): Automating entire environments using Terraform and modular configurations.",
      "Automated CI/CD Pipelines: GitOps-driven deployment pipelines with automated unit, integration, and security checks.",
      "FinOps Cloud Cost Optimization: Rightsizing compute, reserving instances, and pruning unattached cloud assets.",
      "24/7 Cloud Telemetry: Real-time latency, error budget, and uptime monitoring using Prometheus and Datadog."
    ],
    keyCapabilities: [
      "AWS, Microsoft Azure & Google Cloud Multi-Cloud Architecture",
      "Infrastructure as Code (IaC) using Terraform & Ansible",
      "Containerization & Microservices Orchestration (Kubernetes / EKS / ECS)",
      "Automated CI/CD Pipelines (GitHub Actions, GitLab CI)",
      "FinOps Cloud Cost Reduction & Continuous Resource Rightsizing",
      "Multi-Region High Availability, Backup Automation & Disaster Recovery"
    ],
    benefits: [
      "Average 30% to 40% reduction in monthly cloud infrastructure expenditure through FinOps.",
      "10x faster deployment cycles with automated push-to-deploy pipelines and zero downtime.",
      "Guaranteed business continuity with automated multi-region failovers and instant backups.",
      "Bulletproof cloud security posture meeting ISO 27001 and CIS benchmarks.",
      "Elimination of configuration drift through automated Infrastructure as Code."
    ],
    techStack: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana"],
    relatedCaseStudySlugs: ["managed-it-cloud-ops", "gofuel-ecosystem", "digital-gold-staking"],
    faqs: [
      {
        question: "How does CYGNUSA achieve 30%+ savings on our existing AWS or Azure bills?",
        answer: "We perform deep FinOps audits—identifying over-provisioned compute, converting steady workloads to Savings Plans/Reserved Instances, eliminating unattached EBS volumes, and optimizing data egress routing."
      },
      {
        question: "Can you manage multi-cloud or hybrid on-premises environments?",
        answer: "Yes. We regularly design and manage hybrid architectures connecting on-premises data centers to AWS and Azure via dedicated VPN tunnels and ExpressRoute connections."
      }
    ]
  },
  {
    id: "srv-14",
    slug: "support-maintenance",
    title: "Application Support & Maintenance",
    shortDescription: "Continuous SLA-backed application monitoring, bug resolution, security patching, and iterative feature enhancements.",
    category: "Run",
    tagline: "Keep Your Core Applications Healthy, Fast, and Always On.",
    heroSummary: "Ensure your critical web, mobile, and enterprise platforms run flawlessly 24/7. We provide proactive monitoring, rapid bug fixes, security patch updates, and ongoing micro-enhancements backed by contractual SLAs.",
    iconName: "LifeBuoy",
    businessChallenges: [
      "Applications degrading in speed and stability over time due to unmaintained packages and dependencies.",
      "Production bugs remaining unresolved for days because the original developers are unavailable.",
      "Third-party API updates (payment gateways, SMS providers, OS versions) breaking checkout or login flows.",
      "Absence of proactive database indexing, leading to escalating query timeouts.",
      "Inability to handle minor feature requests without spinning up expensive new development contracts."
    ],
    ourApproach: [
      "Comprehensive App Handover: Deep architectural review, code checkout, and staging environment verification.",
      "Automated Health Checks: Continuous synthetic pinging of critical user journeys (signup, checkout, API endpoints).",
      "Guaranteed Bug SLA: Dedicated ticket queues with committed resolution windows based on issue severity.",
      "Routine Dependency Upgrades: Monthly updates of security libraries, npm packages, and framework versions.",
      "Iterative Feature Allocation: Bundled development hours each month for continuous product improvements."
    ],
    keyCapabilities: [
      "24/7 Synthetic Application Monitoring & Error Tracking",
      "Rapid Production Bug Fixing & Root Cause Analysis (RCA)",
      "Database Maintenance, Query Optimization & Automated Pruning",
      "Security Vulnerability Patching & Third-Party API Version Upgrades",
      "Monthly Feature Enhancements & Performance Tuning Sprints",
      "Transparent Jira Service Desk with Real-Time SLA Tracking"
    ],
    benefits: [
      "Guaranteed 99.9% application availability and sub-hour critical bug resolution.",
      "Prevent third-party API breakage through proactive upstream version monitoring.",
      "Continuous gradual product improvement without requiring separate contract negotiations.",
      "Significant extension of application lifespan, delaying costly complete rebuilds.",
      "Transparent monthly reporting on uptime, closed tickets, and performance metrics."
    ],
    techStack: ["Sentry", "Datadog", "New Relic", "PostgreSQL", "Node.js", "React", "Python", "Docker"],
    relatedCaseStudySlugs: ["managed-website-services", "loyalty-enrollment-platform", "apac-dice-app"],
    faqs: [
      {
        question: "Can CYGNUSA take over support for an application built by another development agency?",
        answer: "Yes, we do this regularly. We begin with a 2-week code and infrastructure audit to document architecture, resolve existing vulnerabilities, and establish automated deployment pipelines before going live with support."
      },
      {
        question: "What happens if our application experiences an outage outside of business hours?",
        answer: "Our automated monitoring tools alert our on-call engineering team 24/7/365, who immediately begin incident remediation according to agreed-upon critical SLA protocols."
      }
    ]
  }
];

