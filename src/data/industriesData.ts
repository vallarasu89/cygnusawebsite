import { IndustryItem } from '../types';

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "ind-1",
    slug: "aviation-hospitality",
    name: "Aviation & Hospitality",
    tagline: "High-Throughput Digital Systems for World-Class Passenger Journeys.",
    description: "Transform passenger experiences and terminal logistics with contactless QR onboarding, in-flight retail e-commerce, and real-time facility feedback platforms.",
    iconName: "Plane",
    challenges: [
      "Congested terminal queues and slow manual boarding pass data capture.",
      "Fragmented airline loyalty enrollment with high friction and lost lead conversions.",
      "Difficulty capturing real-time passenger feedback across sprawling international airport gates.",
      "Strict aviation security regulations and high data privacy compliance demands."
    ],
    solutions: [
      "Contactless QR-code boarding pass scanning enabling under-30-second passenger onboarding.",
      "Direct API integrations transferring qualified leads to carrier loyalty programs in real time.",
      "Multi-point digital feedback capture with instant alert routing to terminal operations.",
      "Aviation-tailored mobile e-commerce platforms for duty-free and luxury travel goods."
    ],
    clientLogos: ["Airports Authority of India (AAI - Chennai)", "GSR Aviation", "Airportzo", "BrandMidas", "Holiday Seasonz", "MGM Hotels & Resorts"],
    caseStudySlugs: ["loyalty-enrollment-platform", "passenger-feedback-digitization", "aviation-ecommerce-platform"]
  },
  {
    id: "ind-2",
    slug: "automotive",
    name: "Automotive & Mobility",
    tagline: "Connected Engineering for Next-Generation Mobility & Parts Ecosystems.",
    description: "Empower automotive OEMs, dealership networks, and after-sales service centers with real-time parts inspection, automated inventory tracking, and dealer management platforms.",
    iconName: "Car",
    challenges: [
      "Paper-based vehicle inspection workflows leading to missed component defects and disputes.",
      "Disorganized spare parts inventory and lack of visibility across regional dealership networks.",
      "High warranty claim dispute rates due to absent physical audit trails.",
      "Integration hurdles between legacy dealer management systems (DMS) and modern cloud apps."
    ],
    solutions: [
      "Mobile-first inspection apps with barcode/QR scanning and photo evidence capture.",
      "Centralized parts consolidation dashboards providing real-time inventory visibility.",
      "Automated inspection reporting with digital customer sign-offs and audit logs.",
      "Robust API integration with legacy enterprise automotive ERPs."
    ],
    clientLogos: ["TVS Motor Company", "Stellantis", "All Pro Auto Consultant (APAC)"],
    caseStudySlugs: ["apac-dice-app"]
  },
  {
    id: "ind-3",
    slug: "ev-fueltech",
    name: "EV & FuelTech",
    tagline: "Digitizing Clean Energy Fleets & Regulated Doorstep Fuel Logistics.",
    description: "Pioneering digital ecosystems for doorstep diesel distribution, electric fleet rentals, battery telematics, and nationwide fuel retail SOP governance.",
    iconName: "Fuel",
    challenges: [
      "Rigid regulatory compliance (PESO) for mobile fuel storage, transport, and dispensing.",
      "Unoptimized EV fleet routing, battery health degradation, and unexpected dead batteries.",
      "Dispersed retail fuel station networks struggling with paper-based SOP audits.",
      "High fuel theft, adulteration, and transaction reconciliation risks."
    ],
    solutions: [
      "Complete IoT-connected doorstep diesel distribution apps with geofenced dispensing validation.",
      "Role-based EV fleet management platforms with battery telemetry and charging slot booking.",
      "Nationwide enterprise SOP audit systems replacing paper checklists across thousands of fuel stations.",
      "Real-time administrative dashboards tracking fuel volumes, orders, and driver routes."
    ],
    clientLogos: ["GoFuel (Diesel Delivery @ Doorstep)", "GoZap EV Fleet", "HPCL (Hindustan Petroleum)"],
    caseStudySlugs: ["gofuel-ecosystem", "ev-fleet-management", "sop-management-system"]
  },
  {
    id: "ind-4",
    slug: "manufacturing",
    name: "Manufacturing & Engineering",
    tagline: "Industrial Tech, Performance Systems & Smart Factory Operations.",
    description: "Drive plant floor productivity, standardize employee performance KPIs, and digitize shop-floor audits for global manufacturing enterprises.",
    iconName: "Factory",
    challenges: [
      "Fragmented performance tracking across corporate offices and remote production plants.",
      "Subjective manager appraisals causing employee friction and misaligned corporate KPIs.",
      "Unplanned machine downtime and slow incident resolution on production lines.",
      "Siloed manufacturing data trapped in spreadsheets and legacy on-premises servers."
    ],
    solutions: [
      "Multi-tier enterprise Performance Management Systems (PMS) with cascading weighted goals.",
      "Real-time shop-floor operational audit systems with mobile photo validation.",
      "Secure cloud infrastructure migrations ensuring high availability for supply-chain systems.",
      "Custom web portals unifying plant operations, QA checklists, and vendor management."
    ],
    clientLogos: ["Watertec (Warburg Pincus)", "AGS", "Ognitron Technologies"],
    caseStudySlugs: ["performance-management-system", "audit-management-platform"]
  },
  {
    id: "ind-5",
    slug: "government",
    name: "Government & Public Sector",
    tagline: "Citizen-Centric Digital Infrastructure, Scaled for National Impact.",
    description: "Deliver high-availability, accessible, and secure digital platforms for government authorities, airport infrastructure, and national academic institutions.",
    iconName: "Landmark",
    challenges: [
      "Stringent government security compliance, data residency, and audit mandates.",
      "Legacy paper-heavy workflows creating citizen bottlenecks and public service delays.",
      "Diverse user demographics requiring extreme accessibility (WCAG AA) and multilingual UX.",
      "High traffic volume spikes challenging system reliability during public releases."
    ],
    solutions: [
      "QR-code public feedback digitization systems with real-time administrative escalation.",
      "End-to-end digital portals compliant with Indian GIGW and international security standards.",
      "Multi-tier role-based access architectures safeguarding sensitive public records.",
      "High-concurrency cloud deployments engineered for guaranteed 99.9% uptime."
    ],
    clientLogos: ["Airports Authority of India (AAI - Chennai)", "NITTTR Chennai", "NIFT (National Institute of Fashion Technology)"],
    caseStudySlugs: ["passenger-feedback-digitization", "managed-it-cloud-ops"]
  },
  {
    id: "ind-6",
    slug: "fintech",
    name: "FinTech & Financial Services",
    tagline: "Bank-Grade Security for Digital Bullion, Staking & Financial Operations.",
    description: "Engineer ultra-secure fintech platforms, automated digital gold staking, and regulatory compliance engines that inspire investor confidence.",
    iconName: "Coins",
    challenges: [
      "Complex user trust barriers for online bullion investment and tenure-based staking.",
      "Rigid KYC, AML, and regulatory audit compliance requirements.",
      "Sub-second market price fluctuations requiring real-time zero-slippage trade execution.",
      "Escalating threats of fraud, credential theft, and unauthorized fund transfers."
    ],
    solutions: [
      "Bank-grade digital gold investment platforms with live bullion pricing integrations.",
      "Automated e-KYC verification pipelines clearing users in under 2 minutes.",
      "End-to-end audit trails with tamper-evident ledger tracking for gold deposits and redemptions.",
      "ISO 27001-certified hosting architectures with multi-layer encryption at rest and in transit."
    ],
    clientLogos: ["Gold Stake LLP", "YYC Accounting", "Sundaram & Srinivasan Chartered Accountants"],
    caseStudySlugs: ["digital-gold-staking", "managed-it-cloud-ops"]
  },
  {
    id: "ind-7",
    slug: "edtech",
    name: "EdTech & Higher Education",
    tagline: "AI-Augmented Learning Ecosystems & High-Stakes Exam Platforms.",
    description: "Scale education beyond boundaries with AI-driven mentorship pathways, DRM-protected video streaming, and adaptive clinical exam simulations.",
    iconName: "GraduationCap",
    challenges: [
      "High student dropout rates caused by generic, non-interactive video course libraries.",
      "Content piracy and illegal screen capture undermining intellectual property revenue.",
      "The massive gap between academic coursework and real-world corporate job requirements.",
      "Platform crashes during concurrent timed mock examinations."
    ],
    solutions: [
      "AI-native learning and mentorship platforms delivering personalized career pathways at scale.",
      "DRM-encrypted video streaming preventing screen recording on mobile devices.",
      "Adaptive question banks with detailed rationale, streak tracking, and exam analytics.",
      "Microservices architectures easily handling thousands of concurrent exam submissions."
    ],
    clientLogos: ["Buddy Mentor", "Diya Coaching Academy", "Academian", "Mediant Labs"],
    caseStudySlugs: ["buddy-mentor-ai-lms", "mobile-lms-platform"]
  },
  {
    id: "ind-8",
    slug: "technology",
    name: "Technology & Software",
    tagline: "Strategic Advisory & Engineering Velocity for Fast-Growing Tech Firms.",
    description: "Partner with software companies, SaaS startups, and tech innovators to deliver fractional CTO leadership, AI wrappers, and managed multi-cloud infrastructure.",
    iconName: "Cpu",
    challenges: [
      "Engineering bottlenecks delaying feature releases and product roadmaps.",
      "High costs of senior full-time tech executives for early and mid-stage software firms.",
      "Spiraling multi-cloud infrastructure bills and unmonitored security vulnerabilities.",
      "Difficulty embedding cutting-edge generative AI capabilities without rewriting core systems."
    ],
    solutions: [
      "Virtual CTO advisory guiding technical roadmap, architecture, and team structure.",
      "AI integration services embedding LLMs, agents, and automation directly via APIs.",
      "Managed IT & Cloud operations delivering 24/7 monitoring, security, and FinOps savings.",
      "Flexible staff augmentation deploying pre-vetted senior software engineers in days."
    ],
    clientLogos: ["Coforge", "Centum Learning", "Rebus Engineering & Contracting", "Sixth Itech", "Swift Hire"],
    caseStudySlugs: ["buddy-mentor-ai-lms", "swift-hire-recruitment", "ai-communication-collaboration", "managed-it-cloud-ops"]
  },
  {
    id: "ind-9",
    slug: "customer-experience",
    name: "Customer Experience & Business Services",
    tagline: "Frictionless Operations, Managed Portals & Rapid SLA Workflows.",
    description: "Modernize customer interactions, automate HR compliance operations, and maintain high-performing managed digital portals for business service firms.",
    iconName: "Headphones",
    challenges: [
      "Manual customer support tickets and delayed resolution times damaging brand reputation.",
      "Heavy manual paperwork for HR compliance, EPF filings, and employee records.",
      "Frequent website outages, outdated marketing content, and slow loading times.",
      "Lack of unified digital operations across multiple branch locations."
    ],
    solutions: [
      "Automated HR and EPF compliance portals streamlining multi-tenant customer filings.",
      "Managed Website Services providing 99.9% uptime, Core Web Vitals optimization, and 2-hour content turns.",
      "Omnichannel customer collaboration portals with real-time chat and video communication.",
      "Automated reporting dashboards tracking SLA compliance and customer satisfaction metrics."
    ],
    clientLogos: ["AccessX", "TLCx", "EnComplianceHR", "Med Locum", "CradleMoon Paediatric Clinic", "Moon Bridge"],
    caseStudySlugs: ["hr-compliance-operations", "managed-website-services"]
  }
];

