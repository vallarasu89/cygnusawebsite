import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  Layers, 
  Building2, 
  ChevronRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { CASE_STUDIES } from '../data/caseStudiesData';

interface CaseStudyDetailProps {
  onOpenConsultation: () => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const study = CASE_STUDIES.find(cs => cs.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  // Related projects
  const relatedProjects = CASE_STUDIES.filter(cs => 
    cs.id !== study.id && (cs.industrySlug === study.industrySlug || cs.featured)
  ).slice(0, 3);

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title={`${study.title} — CYGNUSA Case Study`}
        description={study.challenge}
        canonicalPath={`/case-studies/${study.slug}`}
      />

      <Breadcrumb 
        items={[
          { label: "Our Work", href: "/case-studies" },
          { label: study.title }
        ]} 
      />

      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-deep text-xs font-semibold uppercase tracking-wider">
              {study.domain}
            </span>
            <span className="text-xs text-slate-600">
              Client: <strong className="text-slate-900 font-semibold">{study.client}</strong>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
            {study.title}
          </h1>

          {/* Metrics Callout */}
          {study.metrics && study.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl pt-2">
              {study.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-2xl font-heading font-bold text-brand-sky">{m.value}</div>
                  <div className="text-xs text-slate-600 font-medium">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Challenge & Solution Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* The Business Challenge */}
            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-rose-600 text-xs font-mono uppercase tracking-widest font-bold">
                <AlertCircle className="w-4 h-4 text-rose-500" />
                The Business Challenge
              </div>
              <h2 className="text-2xl font-heading font-bold text-slate-900">
                Client Objectives & Bottlenecks
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* CYGNUSA Engineered Solution */}
            <div className="p-8 rounded-3xl bg-sky-50/50 border border-sky-100 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-brand-deep text-xs font-mono uppercase tracking-widest font-bold">
                <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                The Engineered Solution
              </div>
              <h2 className="text-2xl font-heading font-bold text-slate-900">
                What CYGNUSA Built & Deployed
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {study.solution}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Business Impact & Verified Tech Stack */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Business Impact */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono uppercase text-emerald-700 font-semibold tracking-wider">
                Measurable Outcomes
              </div>
              <h2 className="text-3xl font-heading font-bold text-slate-900">
                Demonstrated Business Impact
              </h2>
              <div className="space-y-3">
                {study.impact.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope Delivered & Verified Tech */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                <div className="text-xs font-heading font-bold uppercase text-slate-900 tracking-wider">
                  Services Delivered by CYGNUSA
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.servicesDelivered.map((srv, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-100 text-xs text-brand-deep font-medium"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {study.technologiesUsed && study.technologiesUsed.length > 0 && (
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                  <div className="text-xs font-heading font-bold uppercase text-slate-900 tracking-wider">
                    Verified Technologies Used
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.technologiesUsed.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 rounded-lg bg-slate-100 text-xs text-slate-700 font-mono border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-heading font-bold text-slate-900">
                Related Enterprise Projects
              </h3>
              <Link to="/case-studies" className="text-xs text-brand-sky font-semibold hover:underline">
                View All &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map(p => (
                <div key={p.id} className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-brand-sky/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-brand-sky">{p.client}</span>
                    <h4 className="text-base font-heading font-bold text-slate-900 line-clamp-1">{p.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{p.solution}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <Link to={`/case-studies/${p.slug}`} className="text-xs text-brand-sky hover:underline inline-flex items-center gap-1 font-semibold">
                      Read study &rarr;
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
          Looking to Build a Solution for Your Enterprise?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Connect directly with the architects who engineered {study.client}'s solution.
        </p>
        <button
          type="button"
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Request a Technical Consultation
        </button>
      </section>

    </div>
  );
};
