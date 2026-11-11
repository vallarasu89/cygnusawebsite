import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  Server, 
  Code2, 
  Layers, 
  HelpCircle,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SERVICES } from '../data/servicesData';
import { CASE_STUDIES } from '../data/caseStudiesData';

interface ServiceDetailProps {
  onOpenConsultation: (service?: string) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find linked case studies
  const relatedCases = CASE_STUDIES.filter(cs => 
    service.relatedCaseStudySlugs.includes(cs.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "Corporation",
      "name": "CYGNUSA Technologies Private Limited",
      "url": "https://cygnusa.in"
    },
    "description": service.shortDescription,
    "category": service.category,
    "serviceType": service.title,
    "areaServed": "Global"
  };

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title={`${service.title} — CYGNUSA Services`}
        description={service.heroSummary}
        canonicalPath={`/services/${service.slug}`}
      />

      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} 
      />

      <Breadcrumb 
        items={[
          { label: "Services", href: "/services" },
          { label: service.title }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-deep text-xs font-semibold uppercase tracking-wider">
            {service.category} Practice
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
            {service.title}
          </h1>

          <p className="text-xl text-brand-sky font-semibold max-w-3xl">
            {service.tagline}
          </p>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            {service.heroSummary}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenConsultation(service.title)}
              className="px-7 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Book Consultation for {service.title}
            </button>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-sm transition-all shadow-xs"
            >
              Request Custom Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Business Challenges & Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Challenges */}
            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-rose-600 text-xs font-mono uppercase tracking-widest font-bold">
                <AlertCircle className="w-4 h-4 text-rose-500" />
                The Business Challenge
              </div>
              <h2 className="text-2xl font-heading font-bold text-slate-900">
                Obstacles We Solve
              </h2>
              <div className="space-y-3">
                {service.businessChallenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Approach */}
            <div className="p-8 rounded-3xl bg-sky-50/50 border border-sky-100 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-brand-deep text-xs font-mono uppercase tracking-widest font-bold">
                <Compass className="w-4 h-4 text-brand-sky" />
                Strategic Methodology
              </div>
              <h2 className="text-2xl font-heading font-bold text-slate-900">
                How CYGNUSA Delivers
              </h2>
              <div className="space-y-3">
                {service.ourApproach.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-sky-100 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-brand-deep font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Capabilities & Commercial Benefits */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono uppercase text-brand-deep font-semibold tracking-wider">
                Full-Scale Scope
              </div>
              <h2 className="text-3xl font-heading font-bold text-slate-900">
                Core Capabilities & Scope of Delivery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyCapabilities.map((cap, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-white via-sky-50/40 to-emerald-50/30 border border-slate-200 shadow-sm space-y-6">
              <div className="text-xs font-mono uppercase text-emerald-700 font-semibold tracking-wider">
                Measurable Value
              </div>
              <h2 className="text-2xl font-heading font-bold text-slate-900">
                Key Business Benefits
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Technology Expertise Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-heading font-bold text-slate-900">
              Technology Stack & Verified Frameworks
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Battle-tested tools and certified ecosystems leveraged for {service.title}.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {service.techStack.map((tech, idx) => (
              <div 
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium hover:border-brand-sky hover:text-brand-deep hover:bg-sky-50/50 transition-colors shadow-xs"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Real Case Studies */}
      {relatedCases.length > 0 && (
        <section className="py-20 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase text-brand-deep font-semibold tracking-wider">
                  Verified Proof
                </div>
                <h3 className="text-3xl font-heading font-bold text-slate-900">
                  Related Case Studies
                </h3>
              </div>
              <Link to="/case-studies" className="text-xs text-brand-sky font-semibold hover:underline">
                View all case studies &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCases.map(cs => (
                <div 
                  key={cs.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-brand-sky/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-brand-sky">{cs.client}</span>
                    <h4 className="text-lg font-heading font-bold text-slate-900 group-hover:text-brand-deep transition-colors">
                      {cs.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <Link 
                      to={`/case-studies/${cs.slug}`} 
                      className="text-xs text-brand-sky font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Read full study &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-heading font-bold text-slate-900">
                Frequently Asked Questions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Key details regarding {service.title} engagement models, SLAs, and deliverables.
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2 shadow-xs">
                  <h4 className="text-base font-heading font-bold text-slate-900 flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Action CTA */}
      <section className="py-16 bg-gradient-to-b from-sky-50/50 via-slate-50/40 to-white border-t border-slate-200/80 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          Engage CYGNUSA for {service.title}
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Schedule an introductory consultation with our practice directors to review your scope and receive a customized roadmap.
        </p>
        <button
          type="button"
          onClick={() => onOpenConsultation(service.title)}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Schedule Discovery Call
        </button>
      </section>

    </div>
  );
};
