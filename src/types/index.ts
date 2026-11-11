export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: 'Advisory' | 'Build' | 'Run' | 'Reseller';
  tagline: string;
  heroSummary: string;
  iconName: string;
  businessChallenges: string[];
  ourApproach: string[];
  keyCapabilities: string[];
  benefits: string[];
  techStack: string[];
  relatedCaseStudySlugs: string[];
  faqs: { question: string; answer: string }[];
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  domain: string;
  industrySlug: string;
  challenge: string;
  solution: string;
  impact: string[];
  servicesDelivered: string[];
  technologiesUsed?: string[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  challenges: string[];
  solutions: string[];
  clientLogos: string[];
  caseStudySlugs: string[];
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  overview: string;
  targetAudience: string[];
  keyFeatures: string[];
  businessBenefits: string[];
  architectureHighlights: string[];
  badge?: string;
  demoAvailable: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Leadership' | 'Engineering' | 'Consulting & Advisory' | 'Cloud & MSP' | 'Design & UX';
  bio: string;
  skills: string[];
  linkedInUrl?: string;
  isLeadership: boolean;
  avatarPlaceholder: string;
  photoUrl?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Hybrid' | 'Remote';
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  openingsCount: number;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Artificial Intelligence' | 'Virtual CTO' | 'Cloud & DevOps' | 'Cybersecurity' | 'Modernization' | 'Digital Transformation';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
  keyTakeaways: string[];
}

export interface InquiryLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceOfInterest: string;
  message: string;
  createdAt: string;
  status: 'New' | 'In Review' | 'Contacted';
}

