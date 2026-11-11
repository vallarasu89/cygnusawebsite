import { ProductItem } from '../types';

export const PRODUCTS: ProductItem[] = [
  {
    id: "prod-1",
    slug: "hyperstock",
    name: "HYPERSTOCK",
    subtitle: "Enterprise Inventory & Asset Intelligence",
    tagline: "Total Inventory Clarity Across Multi-Location Warehouses & Retail Networks.",
    overview: "HYPERSTOCK is CYGNUSA's proprietary inventory management platform built specifically for fast-growing Small and Medium Businesses (SMBs), automotive parts networks, and distributed retail hubs. It eliminates stockouts, prevents overstocking, and automates multi-warehouse reconciliation with real-time barcode telemetry.",
    targetAudience: [
      "Automotive after-sales workshops and spare parts distributors",
      "Multi-outlet retail chains and regional fulfillment centers",
      "Manufacturing plant spare part and consumable stores",
      "Commercial equipment suppliers and wholesale distributors"
    ],
    keyFeatures: [
      "Multi-Location Inventory Synchronization with real-time stock levels",
      "Barcode & QR Code Scanning via mobile camera or industrial Zebra scanners",
      "Automated Reorder Alerts with dynamic minimum and maximum threshold calculation",
      "Batch, Lot & Expiry Date Tracking with first-in, first-out (FIFO) enforcement",
      "Comprehensive Purchase Order (PO) and Supplier Fulfillment Management",
      "Dead Stock & Slow-Moving Inventory Analytics with cash flow optimization insights"
    ],
    businessBenefits: [
      "Slash inventory carrying costs by up to 28% through precision reordering.",
      "Eliminate inventory shrinkage and discrepancies with barcode audit reconciliation.",
      "Reduce order picking and dispatch cycle time by over 45%.",
      "Gain real-time C-suite visibility into stock valuation across all physical branches.",
      "Integrate smoothly with existing ERPs and accounting software (Tally, Zoho, SAP)."
    ],
    architectureHighlights: [
      "Cloud-native microservices architecture on AWS",
      "Offline-first mobile PWA capability for warehouse floor staff",
      "Sub-second barcode lookups powered by Redis in-memory cache",
      "Bank-grade role-based access control and tamper-proof transaction logs"
    ],
    badge: "Flagship Product",
    demoAvailable: true
  },
  {
    id: "prod-2",
    slug: "hyper4mance",
    name: "HYPER4MANCE",
    subtitle: "Enterprise KPI & Performance Management Ecosystem",
    tagline: "Turn Corporate Vision into Calibrated, Measurable Employee Execution.",
    overview: "Derived from CYGNUSA's proven enterprise implementation for premier brands like Watertec (backed by Warburg Pincus), HYPER4MANCE is a high-impact Performance Management System. It standardizes OKRs, cascades strategic objectives down to shop-floor workers, and turns subjective annual appraisals into continuous, data-driven performance conversations.",
    targetAudience: [
      "Manufacturing enterprises with dispersed plant and office workforces",
      "Fast-scaling technology and SaaS companies with sprint-based targets",
      "Professional consulting, accounting, and legal services practices",
      "Enterprises seeking to replace cumbersome annual review spreadsheets"
    ],
    keyFeatures: [
      "Cascading Goal Alignment: Connect executive corporate targets to individual daily KPIs",
      "Continuous 360-Degree Feedback & Peer Recognition Engine",
      "Weighted Multi-Metric Scoring Matrices customized per department",
      "Automated Milestone Tracking with Jira, GitHub, and CRM connector sync",
      "Bell Curve Calibration & Talent Matrix Dashboards for HR leadership",
      "Mobile-Friendly Self-Assessment & Instant Manager Review Portals"
    ],
    businessBenefits: [
      "Reduce corporate appraisal cycle duration by over 70%.",
      "Foster radical transparency and boost employee retention through clear milestones.",
      "Eliminate manager appraisal bias with standardized weighted metric formulas.",
      "Empower leadership with actionable insights into high performers and training gaps.",
      "Ensure complete historical audit trails for promotion and compensation governance."
    ],
    architectureHighlights: [
      "Modular React frontend with real-time responsive analytics charts",
      "Secure REST API backend with PostgreSQL transactional integrity",
      "Automated scheduled email and Slack notification workflows",
      "ISO 27001-certified data privacy with role-level data segregation"
    ],
    badge: "Enterprise Proven",
    demoAvailable: true
  },
  {
    id: "prod-3",
    slug: "hyper-lx",
    name: "HYPER-LX",
    subtitle: "AI-Augmented Learning Experience & Mentorship Platform",
    tagline: "Personalized Skill Mastery, DRM-Protected Streaming & Adaptive Learning Pathways.",
    overview: "Built on the battle-tested EdTech architectures developed for Buddy Mentor and Diya Coaching Academy, HYPER-LX is a next-generation corporate and institutional learning platform. It combines DRM-encrypted video streaming, interactive clinical question banks, AI mentorship tutors, and skill gap diagnostics to accelerate workforce readiness.",
    targetAudience: [
      "Higher education institutes and specialized coaching academies",
      "Corporate L&D departments executing employee onboarding and upskilling",
      "Healthcare training institutions and licensure examination providers",
      "Engineering bootcamps and vocational training organizations"
    ],
    keyFeatures: [
      "DRM-Protected Video Streaming preventing illegal screen recordings and leaks",
      "AI-Powered Conversational Tutor assisting learners 24/7 with complex concepts",
      "Adaptive Timed Mock Examinations with granular topic-level score breakdowns",
      "Personalized Career Readiness Journeys tailored to target industry roles",
      "Learner Streak Tracking, Gamified Leaderboards & Automated Certificates",
      "Comprehensive Admin & Instructor Dashboards tracking batch progression"
    ],
    businessBenefits: [
      "Achieve 3.2x higher course completion rates compared to static video libraries.",
      "Zero content piracy: 100% intellectual property protection for proprietary lectures.",
      "Scale expert instructors by 10x through autonomous AI-powered Q&A support.",
      "Real-time visibility into student strengths, weaknesses, and exam readiness.",
      "White-label branding customized with your institution's logo, domain, and colors."
    ],
    architectureHighlights: [
      "AWS CloudFront CDN streaming with dynamic video watermarking",
      "AI semantic search and retrieval powered by LangChain and vector embeddings",
      "High-concurrency microservices handling thousands of simultaneous exam submissions",
      "PWA offline caching for mobile learning on the go"
    ],
    badge: "Next-Gen AI",
    demoAvailable: true
  },
  {
    id: "prod-4",
    slug: "hyper-lite",
    name: "HYPER-Lite",
    subtitle: "Lightweight Compliance & SOP Audit Management Suite",
    tagline: "Zero-Hassle SOP Execution and Digital Checklists for Distributed Teams.",
    overview: "HYPER-Lite brings enterprise audit rigor (pioneered in our systems for Fortune 500 giants like HPCL and Profaids) into a lightweight, turn-key compliance app. It replaces paper checklists, captures tamper-proof mobile proof, and ensures distributed branches adhere strictly to operating guidelines.",
    targetAudience: [
      "Retail store networks and franchise chains requiring uniform branch standards",
      "Food service, hospitality, and cloud kitchen hygiene audits",
      "Facility management, security guards, and janitorial service providers",
      "SMBs preparing for initial ISO 9001 and ISO 27001 external audits"
    ],
    keyFeatures: [
      "Intuitive Drag-and-Drop Audit Checklist Builder with custom question types",
      "Geo-Stamped & Timestamped Photo Evidence Capture directly from mobile camera",
      "Offline-First Audit Execution: Conduct inspections without active internet access",
      "Automated Corrective Action Plan (CAP) creation for failed checklist items",
      "Instant PDF Executive Audit Report Generation with single-click download",
      "Branch-Wise Compliance Heatmaps and Regional Comparison Dashboards"
    ],
    businessBenefits: [
      "Cut audit processing and report turnaround time by 90%.",
      "Ensure 100% paperless audit execution across hundreds of remote branches.",
      "Eliminate fake inspection reporting through GPS and photo tamper verification.",
      "Fix operational non-compliances before they trigger customer complaints or penalties.",
      "Deploy in hours with zero IT infrastructure setup required."
    ],
    architectureHighlights: [
      "Ultra-lightweight React web app with zero dependencies on heavy native apps",
      "LocalIndexedDB caching for seamless offline inspection survival",
      "Automated asynchronous background cloud synchronization when connected",
      "Export capabilities to Excel, PDF, and automated webhook triggers"
    ],
    badge: "Agile Compliance",
    demoAvailable: true
  }
];

