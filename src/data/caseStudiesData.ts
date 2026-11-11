import { CaseStudyItem } from '../types';

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "cs-1",
    slug: "apac-dice-app",
    title: "APAC Dice App – Parts & Inventory Management Platform",
    client: "All Pro Auto Consultant (APAC)",
    domain: "After-Sales, Parts & Inventory Management",
    industrySlug: "automotive",
    challenge: "Growing scale increased operational complexity, data fragmentation, and error margins across vehicle after-sales inspection and spare parts stockholding—impacting overall operational efficiency and customer experience.",
    solution: "Engineered and deployed an end-to-end digital mobile and cloud platform for onsite parts inspection, verification, and inventory consolidation with centralized data management and real-time process control.",
    impact: [
      "Scalable multi-client operations across multi-depot workshop networks",
      "Improved data accuracy and real-time stock visibility insights",
      "Reduced source-level errors through barcode/QR guided physical verification",
      "Enhanced client visibility, automated reporting, and customer satisfaction"
    ],
    servicesDelivered: [
      "Digital Transformation Consulting",
      "UI/UX Design",
      "Custom Software & Mobile App Development",
      "Quality Assurance & Test Automation",
      "Enterprise Implementation & Support"
    ],
    technologiesUsed: ["React Native", "Node.js Microservices", "PostgreSQL", "AWS Cloud", "Docker"],
    metrics: [
      { label: "Data Accuracy", value: "99.4%" },
      { label: "Inspection Cycle Time", value: "-62%" },
      { label: "Inventory Shrinkage", value: "Near Zero" }
    ],
    featured: true
  },
  {
    id: "cs-2",
    slug: "gofuel-ecosystem",
    title: "GoFuel Ecosystem – High-Speed Diesel Doorstep Delivery",
    client: "GoFuel",
    domain: "Licensed HSD Fuel Distribution & Logistics",
    industrySlug: "ev-fueltech",
    challenge: "As a fast-growing licensed fuel-tech startup operating with petroleum licenses from multiple OMCs (Oil Marketing Companies), GoFuel required a unified digital ecosystem to manage customers, fleet drivers, and central dispatch administrators while ensuring rigorous regulatory compliance, explosive safety parameters, and efficient delivery operations.",
    solution: "Designed and engineered an end-to-end role-based digital ecosystem featuring consumer apps, bowser-driver routing and dispensing apps, automated OTP/geofenced delivery validations, and an enterprise administrative command center.",
    impact: [
      "Streamlined consumer and commercial fleet fuel ordering experience",
      "Controlled, calibrated, and secure driver logistics operations",
      "Centralized administrative governance with automated PESO compliance logs",
      "Rapid scalability from local metro operations to multi-state fuel fulfillment"
    ],
    servicesDelivered: [
      "Digital Transformation Consulting",
      "Product Strategy & UI/UX Architecture",
      "Platform Development (Web & Mobile)",
      "Quality Assurance & Security Hardening",
      "Continuous Implementation & Cloud Support"
    ],
    technologiesUsed: ["Flutter", "Go / Node.js", "Redis", "AWS IoT Core", "Google Maps Platform", "PostgreSQL"],
    metrics: [
      { label: "Order Fulfilment Velocity", value: "4x Faster" },
      { label: "Delivery Accuracy", value: "99.9%" },
      { label: "OMC Compliance", value: "100% Audit-Ready" }
    ],
    featured: true
  },
  {
    id: "cs-3",
    slug: "loyalty-enrollment-platform",
    title: "Aviation Passenger Loyalty & QR Enrollment Platform",
    client: "GSR Aviation",
    domain: "Aviation Services & Airport Operations",
    industrySlug: "aviation-hospitality",
    challenge: "GSR needed a high-throughput, low-friction digital platform to enroll arriving and departing airline passengers into airline loyalty programs (such as Akasa Air and partner carriers) while efficiently capturing, qualifying, and securely routing leads generated across high-traffic airport terminals.",
    solution: "Architected a native and progressive mobile enrollment platform with high-speed optical barcode/QR boarding pass scanning, automated passenger profile parsing, instant OTP mobile verification, and automated API lead handover to airline CRM backends.",
    impact: [
      "Accelerated passenger onboarding to under 30 seconds at boarding gates",
      "Accurate lead qualification via boarding pass optical scanning",
      "Seamless real-time lead transfer to partner airline loyalty systems",
      "Improved data hygiene, compliance with passenger privacy, and eliminated manual data entry"
    ],
    servicesDelivered: [
      "Strategic Technology Consulting",
      "High-Friction UI/UX Simplification",
      "Mobile Application Development",
      "Automated Quality Assurance",
      "Terminal Implementation & 24/7 SLA Support"
    ],
    technologiesUsed: ["React", "FastAPI / Python", "DynamoDB", "AWS Lambda", "ZXing Barcode Engine"],
    metrics: [
      { label: "Onboarding Speed", value: "78% Faster" },
      { label: "Data Quality Score", value: "99.8%" },
      { label: "Airports Deployed", value: "Multi-Terminal" }
    ],
    featured: true
  },
  {
    id: "cs-4",
    slug: "ev-fleet-management",
    title: "GoZap EV Fleet Rental & 3PL Logistics Management Platform",
    client: "GoZap",
    domain: "Electric Vehicle Fleet Rental & 3PL Logistics Operations",
    industrySlug: "ev-fueltech",
    challenge: "As an emerging EV fleet startup operating dual business models across vehicle subscription rentals and 3PL courier logistics, GoZap required a centralized platform to manage connected electric two-wheelers, battery telemetry, rider contracts, and maintenance cycles without runaway overhead.",
    solution: "Designed and rolled out an end-to-end role-based fleet management platform enabling real-time IoT vehicle tracking, battery health monitoring, digital rental onboarding with e-KYC, charging slot reservations, and automated billing.",
    impact: [
      "Streamlined B2B rental contracts and 3PL last-mile delivery workflows",
      "Maximized EV fleet utilization through predictive maintenance and idle alerts",
      "Centralized operational command with real-time SOC (State of Charge) telematics",
      "Created a scalable cloud backbone supporting 10x fleet vehicle additions"
    ],
    servicesDelivered: [
      "Technology Consulting & Architecture",
      "Mobile & Web UI/UX Design",
      "Full-Stack Platform Engineering",
      "IoT Telemetry Integration & QA",
      "Cloud Deployment & Infrastructure Support"
    ],
    technologiesUsed: ["React", "React Native", "Node.js", "MongoDB", "MQTT / AWS IoT", "Tailwind CSS"],
    metrics: [
      { label: "Fleet Uptime", value: "98.5%" },
      { label: "Maintenance Downtime", value: "-45%" },
      { label: "Turnaround Time", value: "Instant Digital" }
    ],
    featured: true
  },
  {
    id: "cs-5",
    slug: "sop-management-system",
    title: "Enterprise SOP Management & Digital Audit Suite",
    client: "HPCL (Hindustan Petroleum Corporation Limited)",
    domain: "Fuel Retail & Outlet Network Operations",
    industrySlug: "ev-fueltech",
    challenge: "As a premier Fortune 500 energy enterprise operating thousands of retail fuel stations across India, HPCL required a standardized digital solution to govern Standard Operating Procedures (SOPs), enforce audit consistency, and eliminate archaic paper-based checklists across geographically dispersed dealerships.",
    solution: "Architected a mobile-first, enterprise-grade SOP execution and audit ecosystem featuring offline-capable audit checklists, geofenced inspection validation, photo/proof timestamping, and hierarchical management escalation dashboards.",
    impact: [
      "Enforced uniform SOP compliance across retail petroleum outlets nationwide",
      "Completely paperless audit cycles with real-time regional dashboard rollups",
      "Significantly elevated statutory safety compliance and outlet governance",
      "Delivered real-time operational visibility to regional heads and senior directors"
    ],
    servicesDelivered: [
      "Enterprise Tech Consulting",
      "Complex Workflow UI/UX Design",
      "Enterprise Mobile & Web Platform Development",
      "Rigorous Security & Compliance Hardening",
      "Nationwide Field Deployment & MSP Support"
    ],
    technologiesUsed: ["Angular", "Spring Boot Java", "PostgreSQL", "Redis", "Azure Cloud"],
    metrics: [
      { label: "Paper Checklists Eliminated", value: "100%" },
      { label: "Audit Cycle Speed", value: "5x Faster" },
      { label: "Compliance Adherence", value: "99.2%" }
    ],
    featured: true
  },
  {
    id: "cs-6",
    slug: "performance-management-system",
    title: "Enterprise Performance Management System (PMS)",
    client: "Watertec (Warburg Pincus Portfolio Company)",
    domain: "Manufacturing & Consumer Durables",
    industrySlug: "manufacturing",
    challenge: "Watertec, India’s leading bathroom and sanitary fittings brand backed by global private equity firm Warburg Pincus, required an enterprise performance management platform to digitize, unify, and calibrate internal KPI frameworks, quarterly performance reviews, and manager appraisals across thousands of manufacturing and corporate employees.",
    solution: "Engineered a scalable, multi-tier Performance Management System (PMS) incorporating custom goal-setting cascades, weighted KPI scoring matrices, automated 360-degree review workflows, and comprehensive HR analytics dashboards.",
    impact: [
      "Standardized corporate and manufacturing KPI frameworks across all plants",
      "Enhanced transparency and real-time visibility into employee milestones",
      "Shortened annual and quarterly appraisal cycles by over 70%",
      "Empowered C-suite leadership with data-driven talent calibration metrics"
    ],
    servicesDelivered: [
      "Fractional CTO Advisory & HR Tech Strategy",
      "Enterprise Design System & UI/UX Design",
      "Custom Software Platform Development",
      "Quality Assurance & Security Hardening",
      "Production Implementation & Ongoing Maintenance"
    ],
    technologiesUsed: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "AWS"],
    metrics: [
      { label: "Appraisal Cycle Reduction", value: "70%" },
      { label: "Employee Adoption", value: "99.5%" },
      { label: "Review Accuracy", value: "100% Calibrated" }
    ],
    featured: true
  },
  {
    id: "cs-7",
    slug: "passenger-feedback-digitization",
    title: "Airports Authority of India (AAI) – Passenger Feedback Digitization",
    client: "Airports Authority of India – Chennai International Airport",
    domain: "Airport Operations & Passenger Experience",
    industrySlug: "aviation-hospitality",
    challenge: "Chennai International Airport, governed by Airports Authority of India (AAI), required a hygienic, contactless, and frictionless feedback mechanism to capture, aggregate, and analyze passenger feedback across multiple airport service touchpoints (security, washrooms, departure lounges, baggage reclaim) in real time.",
    solution: "Designed and rolled out a high-availability QR-code digital feedback platform enabling passengers to scan with any smartphone camera and submit segment-wise ratings, photo uploads, and specific facility remarks within 15 seconds, routed instantly to ground terminal managers.",
    impact: [
      "Substantially elevated passenger feedback participation rates across terminals",
      "Centralized real-time feedback data into automated terminal operations dashboards",
      "Enabled rapid issue escalation and SLA-based janitorial/facility remediation",
      "Significantly improved Chennai Airport’s ASQ (Airport Service Quality) performance standing"
    ],
    servicesDelivered: [
      "Government Tech Advisory & Architecture",
      "Accessible Mobile UI/UX Design",
      "Scalable Web Application Development",
      "Quality Assurance & Penetration Testing",
      "On-Premises & Cloud Hybrid Implementation"
    ],
    technologiesUsed: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS S3", "QR Infrastructure"],
    metrics: [
      { label: "Feedback Volume", value: "+340%" },
      { label: "Mean Time to Resolution", value: "-55%" },
      { label: "User Interaction Time", value: "<15 Seconds" }
    ],
    featured: true
  },
  {
    id: "cs-8",
    slug: "hr-compliance-operations",
    title: "HR & EPF Compliance Operations Platform",
    client: "EnComplianceHR",
    domain: "HR Consulting & EPF Managed Services",
    industrySlug: "customer-experience",
    challenge: "EnComplianceHR manages high-volume Employee Provident Fund (EPF), ESI, and statutory labor compliance for hundreds of corporate clients. Manual verification of payroll records and regulatory filings led to escalating processing delays and risks of non-compliance penalties.",
    solution: "Designed and deployed an integrated cloud operations portal featuring automated payroll data parsing, statutory deduction recalculation engines, automated challan generators, and multi-tenant client reporting portals.",
    impact: [
      "Drastically curtailed manual document verification and spreadsheet processing",
      "Achieved zero compliance errors across thousands of monthly regulatory filings",
      "Unified multi-location operations into a single auditable management console",
      "Created a robust multi-tenant architecture enabling the firm to onboard 3x more clients"
    ],
    servicesDelivered: [
      "Digital Transformation Consulting",
      "Enterprise UI/UX Design",
      "Cloud Application Development",
      "Quality Assurance & Regulatory Validation",
      "Implementation & Maintenance"
    ],
    technologiesUsed: ["React", "Python Django", "PostgreSQL", "Celery", "AWS Cloud"],
    metrics: [
      { label: "Processing Hours", value: "-75%" },
      { label: "Filing Accuracy", value: "100%" },
      { label: "Client Capacity", value: "3x Growth" }
    ],
    featured: false
  },
  {
    id: "cs-9",
    slug: "audit-management-platform",
    title: "Profaids Audit & Compliance Management Ecosystem",
    client: "Profaids Consulting",
    domain: "Audit & Regulatory Compliance Services",
    industrySlug: "technology",
    challenge: "Profaids needed a modern centralized digital ecosystem to plan, schedule, conduct, and report audits across nationwide financial and commercial clients (including Cholamandalam MS General Insurance) while enforcing rigid audit checklists and evidence trails.",
    solution: "Delivered a comprehensive audit lifecycle management platform featuring dynamic checklist authoring, auditor assignment workflows, evidence capture with geo-stamping, automated executive findings heatmaps, and one-click PDF audit report generation.",
    impact: [
      "Centralized multi-state audit operations into a structured cloud console",
      "Enforced uniform procedural compliance and audit consistency",
      "Streamlined role-based permissions between senior auditors, field inspectors, and client auditees",
      "Provided enterprise clients with real-time audit progress heatmaps and instant executive summaries"
    ],
    servicesDelivered: [
      "Digital Transformation Advisory",
      "UI/UX Platform Design",
      "Web & Mobile Application Development",
      "Rigorous Quality Assurance",
      "Production Deployment & Cloud Management"
    ],
    technologiesUsed: ["Vue.js", "Node.js", "MongoDB", "AWS S3", "Docker"],
    metrics: [
      { label: "Report Turnaround", value: "90% Faster" },
      { label: "Audit Standardization", value: "100%" },
      { label: "Concurrent Audits", value: "1000+ Active" }
    ],
    featured: false
  },
  {
    id: "cs-10",
    slug: "digital-gold-staking",
    title: "Digital Gold Staking & Bullion Investment Platform",
    client: "GoldStake LLP",
    domain: "Gold Bullion Investment & FinTech",
    industrySlug: "fintech",
    challenge: "Online physical and digital gold staking involves complex user trust factors, stringent KYC/AML regulatory compliance, real-time bullion spot pricing volatility, and secure redemption workflows that legacy web apps could not satisfy.",
    solution: "Architected a bank-grade digital gold platform integrating live MCX/international bullion spot price feeds, automated e-KYC verification, flexible staking tenure options with yield calculations, and insured physical redemption delivery workflows.",
    impact: [
      "Democratized fractional gold bullion savings with micro-deposit staking options",
      "Ensured zero-slippage trade execution and tamper-evident ledger tracking",
      "Boosted investor confidence with transparent yield models and custodial vault audit integrations",
      "Built a secure, scalable fintech foundation compliant with financial standards"
    ],
    servicesDelivered: [
      "Fintech Consulting & Architecture",
      "High-Trust UI/UX Design",
      "Web & Back-End Portal Engineering",
      "Rigorous Security & Penetration Testing",
      "Cloud Deployment & Infrastructure Operations"
    ],
    technologiesUsed: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Razorpay / Bank Gateways"],
    metrics: [
      { label: "Transaction Latency", value: "<250ms" },
      { label: "KYC Verification Time", value: "<2 Minutes" },
      { label: "System Uptime", value: "99.99%" }
    ],
    featured: true
  },
  {
    id: "cs-11",
    slug: "ai-communication-collaboration",
    title: "Sixth Itech – AI-Driven Mobile Collaboration Platform",
    client: "Sixth Itech",
    domain: "Enterprise Collaboration & Secure Unified Communications",
    industrySlug: "technology",
    challenge: "Sixth Itech required an enterprise-grade mobile application to unify distributed team communications—integrating crystal-clear audio/video calling, real-time group chat channels, document collaboration, and granular administrative security in a single application.",
    solution: "Engineered an AI-augmented mobile collaboration application featuring WebRTC-powered voice and video conferencing, real-time message indexing, role-based channel administration, and intelligent conversation summarization.",
    impact: [
      "Unified disparate communication tools into a single frictionless enterprise app",
      "Enhanced cross-functional collaboration and rapid incident response across teams",
      "Enforced military-grade TLS/SRTP encryption and granular role-based channel permissions",
      "Delivered a lightweight, highly responsive application optimized for low-bandwidth networks"
    ],
    servicesDelivered: [
      "Mobile Architecture Advisory",
      "Intuitive Messaging UI/UX Design",
      "iOS & Android Mobile App Engineering",
      "WebRTC & VoIP Protocol Integration",
      "End-to-End Testing & Enterprise Rollout"
    ],
    technologiesUsed: ["React Native", "WebRTC", "Socket.io", "Node.js", "Redis", "AWS ECS"],
    metrics: [
      { label: "Call Connection Latency", value: "<180ms" },
      { label: "App Responsiveness", value: "60 FPS Native" },
      { label: "Internal Adoption", value: "95% in 30 Days" }
    ],
    featured: false
  },
  {
    id: "cs-12",
    slug: "aviation-ecommerce-platform",
    title: "Curiohh / JETSETWIN – Aviation E-Commerce & In-Flight Store",
    client: "Curiohh – JETSETWIN",
    domain: "Aviation Industry & Curated E-Commerce",
    industrySlug: "aviation-hospitality",
    challenge: "JETSETWIN needed an ultra-fast, mobile-optimized e-commerce marketplace catering to global flyers and aviation professionals, featuring niche travel gear, curated duty-free catalog browsing, multi-currency transactions, and seamless airport pickup/delivery logistics.",
    solution: "Developed an aviation-themed e-commerce platform incorporating frictionless product discovery, tier-based frequent flyer rewards redemptions, international payment processing, and flight schedule delivery tracking.",
    impact: [
      "Streamlined travel goods merchandising and automated order fulfillment pipelines",
      "Elevated customer conversion rates with instant one-click mobile checkout",
      "Integrated secure multi-gateway payments supporting domestic and global cards",
      "Created an extensible digital storefront capable of scaling to airline IFE (In-Flight Entertainment) portals"
    ],
    servicesDelivered: [
      "E-Commerce Strategy Consulting",
      "Luxury Travel UI/UX Design",
      "Modern Web Storefront Development",
      "Payment Gateway & Security Hardening",
      "Continuous Cloud Optimization"
    ],
    technologiesUsed: ["React", "Shopify Storefront API / Next.js", "Stripe", "Razorpay", "Tailwind CSS"],
    metrics: [
      { label: "Checkout Conversion", value: "+44%" },
      { label: "Mobile Page Load", value: "1.2s LCP" },
      { label: "Catalog Capacity", value: "10,000+ SKUs" }
    ],
    featured: false
  },
  {
    id: "cs-13",
    slug: "mobile-lms-platform",
    title: "Diya Coaching Academy – Medical Exam Mobile LMS",
    client: "Diya Coaching Academy",
    domain: "EdTech & Medical Licensure Education",
    industrySlug: "edtech",
    challenge: "Diya Coaching Academy, a premier coaching institute for Foreign Medical Graduates preparing for licensing exams (FMGE / NEXT), required a secure subscription-based mobile LMS to deliver high-resolution video lectures, question banks, and timed clinical mock exams without risk of pirated screen recording.",
    solution: "Designed and built a mobile-first digital academy featuring DRM-protected video streaming, topic-wise practice question banks with detailed clinical explanations, live test analytics, and subscription tier management.",
    impact: [
      "Delivered uninterrupted, structured mobile preparation for thousands of medical aspirants",
      "Enforced watermarked and DRM-protected media safeguarding proprietary lecture assets",
      "Increased student daily engagement through streak tracking and simulated mock tests",
      "Enabled the institute to expand nationwide without requiring physical branch classrooms"
    ],
    servicesDelivered: [
      "EdTech Architecture & Strategy",
      "Student-Centric Mobile UI/UX Design",
      "Cross-Platform Mobile App Development",
      "DRM Security & Quality Assurance",
      "Cloud Infrastructure & Streaming Optimization"
    ],
    technologiesUsed: ["Flutter", "Node.js", "AWS CloudFront", "AWS Elemental MediaConvert", "PostgreSQL"],
    metrics: [
      { label: "Active Student Retention", value: "88%" },
      { label: "Content Piracy Incidents", value: "Zero" },
      { label: "Exam Passing Rate", value: "Top Tier FMGE" }
    ],
    featured: false
  },
  {
    id: "cs-14",
    slug: "buddy-mentor-ai-lms",
    title: "Buddy Mentor – AI-Powered Learning & Mentorship Platform",
    client: "Buddy Mentor",
    domain: "EdTech & Engineering Career Readiness",
    industrySlug: "edtech",
    challenge: "Buddy Mentor was founded to bridge the critical employability gap between academic engineering curriculums and corporate engineering roles, requiring an AI-driven learning platform capable of tailoring individual career journeys, skill assessments, and AI mentor guidance at enterprise scale.",
    solution: "Engineered an AI-native learning ecosystem featuring dynamic skill diagnostic assessments, adaptive personalized curriculum pathways, interactive code/concept sandboxes, automated performance benchmarks, and automated AI tutoring assistance.",
    impact: [
      "Automated personalized career readiness journeys tailored to candidate target roles",
      "Dramatically heightened student engagement through conversational AI mentorship",
      "Measurably boosted graduate interview clearance and placement readiness outcomes",
      "Equipped institutional partners and mentors with deep granular skill analytics"
    ],
    servicesDelivered: [
      "Digital Transformation & EdTech Strategy",
      "Product Experience (UI/UX) Architecture",
      "Mobile & Web Application Engineering",
      "Generative AI & LLM API Integration",
      "Cloud Deployment & High-Concurrency Scaling"
    ],
    technologiesUsed: ["React", "FastAPI", "Python", "OpenAI / Anthropic APIs", "PostgreSQL", "Docker", "AWS"],
    metrics: [
      { label: "Candidate Employability Score", value: "+65%" },
      { label: "Course Completion Rate", value: "3.2x Industry Avg" },
      { label: "AI Response Latency", value: "<800ms" }
    ],
    featured: true
  },
  {
    id: "cs-15",
    slug: "swift-hire-recruitment",
    title: "Swift Hire – AI-Augmented Applicant Tracking & Talent Platform",
    client: "Swift Hire",
    domain: "AI-Powered Recruitment & ATS Technology",
    industrySlug: "technology",
    challenge: "SwiftHire wanted to solve enterprise hiring bottlenecks by eliminating hundreds of hours spent on manual resume screening, disorganized candidate emails, and scheduling friction across technical interviewers.",
    solution: "Architected an AI-native ATS platform featuring semantic resume parsing, candidate-job matching algorithms, automated interview scheduling, collaborative scorecards, and multi-channel candidate status notifications.",
    impact: [
      "Sped up initial candidate screening and shortlist creation by over 80%",
      "Eliminated recruiter bias through objective AI competency score matching",
      "Centralized candidate communication, interview feedback, and talent pools",
      "Significantly improved candidate feedback turnaround and recruiter productivity"
    ],
    servicesDelivered: [
      "Product Vision & Fractional CTO Consulting",
      "Recruiter & Candidate UI/UX Design",
      "AI Pipeline & NLP Integration",
      "Enterprise Web Application Development",
      "Cloud Security & Scalable AWS Hosting"
    ],
    technologiesUsed: ["React", "Python NLP", "FastAPI", "MongoDB", "AWS S3", "Tailwind CSS"],
    metrics: [
      { label: "Time-to-Hire Reduction", value: "48%" },
      { label: "Resume Screening Speed", value: "10x Faster" },
      { label: "Interview Show-Up Rate", value: "96%" }
    ],
    featured: false
  },
  {
    id: "cs-16",
    slug: "managed-it-cloud-ops",
    title: "Enterprise Managed IT Services & Multi-Cloud Infrastructure",
    client: "Multi-Client Consortium (GoFuel, GoZap, BrandMidas, Airportzo, AGS, Mediant Labs, NIFT, Sundaram & Srinivasan, Olivesol, Amarprakash)",
    domain: "Managed IT Services (MSP), Cloud & SOC Operations",
    industrySlug: "technology",
    challenge: "Growing SMBs, chartered accounting firms, fashion institutes, and fast-scaling startups faced constant infrastructure downtime, unmonitored security threats, spiraling cloud bills, and the unaffordable overhead of hiring in-house 24/7 IT engineering teams.",
    solution: "CYGNUSA deployed its flagship Managed IT Service Provider (MSP) model: 24/7 proactive NOC/SOC infrastructure monitoring, centralized cloud asset orchestration (AWS & Azure), automated offsite disaster recovery, endpoint security enforcement, and strict SLA-driven helpdesk support.",
    impact: [
      "Achieved guaranteed 99.9% IT infrastructure and cloud system uptime across clients",
      "Reduced overall operating IT budgets by 30% to 45% through shared resource efficiencies",
      "Proactively intercepted security vulnerabilities before production business impact",
      "Delivered auditable ISO 27001-compliant security and disaster recovery protocols"
    ],
    servicesDelivered: [
      "24/7 Remote Monitoring & Management (RMM)",
      "Multi-Cloud Infrastructure Governance",
      "SOC Endpoint Detection & Response (EDR)",
      "Automated Cloud Backup & Disaster Recovery",
      "Strict SLA-Driven Helpdesk & Governance"
    ],
    technologiesUsed: ["AWS", "Azure", "Sophos Central", "Terraform", "Prometheus", "Grafana", "Linux / Windows Server"],
    metrics: [
      { label: "Guaranteed Uptime", value: "99.95%" },
      { label: "IT Cost Reduction", value: "35% - 45%" },
      { label: "Incident MTTR", value: "<18 Minutes" }
    ],
    featured: true
  },
  {
    id: "cs-17",
    slug: "managed-website-services",
    title: "Enterprise Managed Website Services & Performance Optimization",
    client: "Multi-Client Portfolio (Med Locum, CradleMoon Paediatric Clinic, AccessX, TLCx, Moon Bridge, Holiday Seasonz, Ognitron Technologies, Innovacore Solutions, AGS, YYC Accounting, Diya Coaching Academy, GoFuel)",
    domain: "Managed Web Operations, Performance & Security",
    industrySlug: "customer-experience",
    challenge: "Enterprises across healthcare, logistics, professional services, and consulting required high-availability websites with rapid content turnarounds, bulletproof SSL/firewall security, and sub-second page performance without staffing internal webmaster teams.",
    solution: "Rolled out CYGNUSA’s full-lifecycle Managed Website Services framework: enterprise CDN acceleration, Core Web Vitals optimization, automated daily offsite snapshots, continuous security scanning, rapid staging-to-production content publishing, and dedicated monthly SLA support.",
    impact: [
      "Dramatically reduced bounce rates through sub-second page speed optimizations",
      "Eliminated security breaches, spam injections, and unscheduled downtime",
      "Guaranteed under 2-hour content turnaround for mission-critical client announcements",
      "Freed executive teams from operational web overhead to focus squarely on core revenue"
    ],
    servicesDelivered: [
      "High-Performance Managed Web Hosting",
      "Core Web Vitals & Technical SEO Optimization",
      "Continuous Security Audits & SSL Governance",
      "Agile Content Updating & CMS Maintenance",
      "24/7 SLA Uptime & Disaster Recovery"
    ],
    technologiesUsed: ["Cloudflare Enterprise CDN", "Next.js / WordPress / Static Generators", "Web Vitals CI", "AWS S3 / CloudFront"],
    metrics: [
      { label: "Core Web Vitals Pass", value: "100%" },
      { label: "Average Page Speed", value: "<1.1s" },
      { label: "Content Turnaround", value: "<2 Hours" }
    ],
    featured: false
  }
];

