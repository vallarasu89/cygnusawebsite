import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Plane, 
  Car, 
  Fuel, 
  Factory, 
  Landmark, 
  Coins, 
  GraduationCap, 
  Cpu, 
  Headphones,
  ChevronRight,
  Building2
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { INDUSTRIES } from '../data/industriesData';
import { CASE_STUDIES } from '../data/caseStudiesData';

interface IndustryDetailProps {
  onOpenConsultation: () => void;
}

export const IndustryDetail: React.FC<IndustryDetailProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const industry = INDUSTRIES.find(ind => ind.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  // Find linked case studies
  const relatedCases = CASE_STUDIES.filter(cs => 
    industry.caseStudySlugs.includes(cs.slug)
  );

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title={`${industry.name} Technology Solutions — CYGNUSA`}
        description={industry.description}
        canonicalPath={`/industries/${industry.slug}`}
      />

      <Breadcrumb 
        items={[
          { label: "Industries", href: "/industries" },
          { label: industry.name }
        ]} 
      />

      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-deep text-xs font-semibold uppercase tracking-wider">
            Sector Blueprint
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            {industry.name}
          </h1>

          <p className="text-xl text-brand-sky font-semibold max-w-3xl">
            {industry.tagline}
          </p>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            {industry.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-7 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Discuss an {industry.name} Project
            </button>
          </div>
        </div>
      </section>

      {/* Verified Sector Clients */}
      <section className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-heading font-bold uppercase tracking-wider text-slate-500 mb-4 text-center sm:text-left">
            Sector Clients & Deployments
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            {industry.clientLogos.map((client, idx) => (
              <div 
                key={idx} 
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Sector Bottlenecks */}
            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-rose-600 text-xs font-mono uppercase tracking-widest font-bold">
                <AlertCircle className="w-4 h-4 text-rose-500" />
                Sector Bottlenecks
              </div>
              <h2 className="text-2xl font-heading font-bold text-slate-900">
                Industry-Specific Challenges
              </h2>
              <div className="space-y-3">
                {industry.challenges.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {c}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CYGNUSA Solutions */}
            <div className="p-8 rounded-3xl bg-sky-50/50 border border-sky-100 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-brand-deep text-xs font-mono uppercase tracking-widest font-bold">
                <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                Tailored Systems
              </div>
              <h2 className="text-2xl font-heading font-bold text-slate-900">
                How We Solve Them
              </h2>
              <div className="space-y-3">
                {industry.solutions.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-sky-100 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-brand-deep font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {s}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Linked Case Studies */}
      {relatedCases.length > 0 && (
        <section className="py-20 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase text-brand-deep font-semibold tracking-wider">
                  Real Implementations
                </div>
                <h3 className="text-3xl font-heading font-bold text-slate-900">
                  Case Studies in {industry.name}
                </h3>
              </div>
              <Link to="/case-studies" className="text-xs text-brand-sky font-semibold hover:underline">
                Explore all 17 projects &rarr;
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

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-to-b from-sky-50/50 via-slate-50/40 to-white border-t border-slate-200/80 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          Ready to Modernize Your {industry.name} Operations?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Talk to a CYGNUSA technology partner with specific experience in your domain.
        </p>
        <button
          type="button"
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Schedule a Consultation
        </button>
      </section>

    </div>
  );
};
