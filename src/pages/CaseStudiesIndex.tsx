import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Search, 
  Filter, 
  CheckCircle2, 
  Layers, 
  Building2,
  ExternalLink
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { CASE_STUDIES } from '../data/caseStudiesData';

interface CaseStudiesIndexProps {
  onOpenConsultation: () => void;
}

export const CaseStudiesIndex: React.FC<CaseStudiesIndexProps> = ({ onOpenConsultation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const filteredCases = CASE_STUDIES.filter(cs => {
    const matchesSearch = cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cs.domain.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All' || cs.industrySlug === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title="Enterprise Case Studies & Verified Results — CYGNUSA"
        description="Review 17 documented enterprise implementations by CYGNUSA across Fortune 500s, PE portfolio brands, international airports, and fast-growth tech startups."
        canonicalPath="/case-studies"
      />

      <Breadcrumb items={[{ label: "Our Work" }]} />

      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-deep text-xs font-semibold uppercase tracking-wider">
            Documented Client Deployments
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Our Work & Case Studies
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real software platforms, IoT telematics, AI workflows, and managed IT operations engineered for real organizations.
          </p>

          {/* Search & Filter Bar */}
          <div className="pt-6 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by client, domain, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs placeholder:text-slate-400 focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky shadow-xs"
              />
            </div>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
            >
              <option value="All">All Industries (17)</option>
              <option value="aviation-hospitality">Aviation & Hospitality</option>
              <option value="automotive">Automotive</option>
              <option value="ev-fueltech">EV & FuelTech</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="fintech">FinTech</option>
              <option value="edtech">EdTech</option>
              <option value="technology">Enterprise Technology</option>
              <option value="customer-experience">Customer Experience</option>
            </select>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCases.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <p className="text-slate-500 text-sm">No case studies found matching your criteria.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedIndustry('All'); }}
                className="text-xs text-brand-sky font-semibold hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCases.map(cs => (
                <div
                  key={cs.id}
                  className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-brand-sky/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-brand-sky">
                        {cs.client}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase border border-slate-200/60 font-semibold">
                        {cs.domain.split(',')[0]}
                      </span>
                    </div>

                    <h2 className="text-xl font-heading font-bold text-slate-900 group-hover:text-brand-deep transition-colors">
                      <Link to={`/case-studies/${cs.slug}`}>
                        {cs.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {cs.solution}
                    </p>

                    {/* Impact Highlights */}
                    {cs.metrics && (
                      <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 bg-slate-50/50 rounded-xl px-2">
                        {cs.metrics.map((m, idx) => (
                          <div key={idx}>
                            <div className="text-sm font-heading font-bold text-slate-900">{m.value}</div>
                            <div className="text-[9px] text-slate-500 truncate">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2">
                      <div className="text-[11px] font-semibold text-slate-500 mb-1.5">Delivered:</div>
                      <div className="flex flex-wrap gap-1">
                        {cs.servicesDelivered.slice(0, 3).map((srv, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60">
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to={`/case-studies/${cs.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-sky hover:underline"
                    >
                      Read Full Implementation Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-to-b from-sky-50/50 via-slate-50/40 to-white border-t border-slate-200/80 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          Have a Similar Technology Challenge?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          We can tailor an architecture based on our verified case study frameworks to accelerate your go-to-market.
        </p>
        <button
          type="button"
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Schedule a Case Study Walkthrough
        </button>
      </section>

    </div>
  );
};
