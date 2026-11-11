import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Filter, 
  Compass, 
  Server, 
  Code2, 
  FileCheck, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesIndexProps {
  onOpenConsultation: (service?: string) => void;
}

export const ServicesIndex: React.FC<ServicesIndexProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Advisory', 'Build', 'Run', 'Reseller'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title="Enterprise IT Services & Solutions"
        description="Explore CYGNUSA's 14 core enterprise technology capabilities across Virtual CTO advisory, custom software engineering, AI integrations, and 24/7 Managed IT operations."
        canonicalPath="/services"
      />

      <Breadcrumb items={[{ label: "Services" }]} />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/10 border border-brand-sky/30 text-brand-sky text-xs font-semibold uppercase tracking-wider">
            End-to-End Technology. One Strategic Partner.
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Our Enterprise Practice Areas
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From boardroom architecture and fractional executive advisory to bespoke engineering and 24/7 SLA infrastructure operations.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-sky text-white shadow-glow-sky'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-brand-sky hover:border-slate-300 shadow-xs'
                }`}
              >
                {cat === 'All' ? 'All Services (14)' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-sky/60 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-sky-50 text-brand-sky font-bold">
                      {service.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {service.id.toUpperCase()}
                    </span>
                  </div>

                  <h2 className="text-xl font-heading font-bold text-slate-900 group-hover:text-brand-sky transition-colors">
                    <Link to={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h2>

                  <div className="text-xs text-brand-sky font-semibold">
                    {service.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="pt-2">
                    <div className="text-[11px] font-semibold text-slate-700 mb-2">Core Competencies:</div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.keyCapabilities.slice(0, 3).map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-sky shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-sky hover:underline"
                  >
                    View Service Blueprint <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(service.title)}
                    className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium"
                  >
                    Consult
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Service Consultation CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          Not Sure Which Architecture Fits Your Milestones?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Book a 1-on-1 discovery session with CYGNUSA Senior Technology Partners to assess your stack and receive an unbiased recommendation.
        </p>
        <button
          type="button"
          onClick={() => onOpenConsultation()}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-glow-sky cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Schedule Architecture Discovery
        </button>
      </section>

    </div>
  );
};
