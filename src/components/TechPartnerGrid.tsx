import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { CheckCircle2 } from 'lucide-react';

export const TechPartnerGrid: React.FC = () => {
  return (
    <div className="py-12 bg-sky-50/40 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/10 border border-brand-sky/30 text-brand-sky text-xs font-semibold uppercase tracking-wider mb-2">
              Authorized Reseller & Tier-1 Ecosystem
            </div>
            <h3 className="text-2xl font-heading font-bold text-slate-900">
              Global Technology Partner Network
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl mt-1">
              CYGNUSA is an authorized reseller and certified integration partner for world-leading cloud, security, and hardware manufacturers.
            </p>
          </div>
          <div className="text-xs text-slate-600 flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Authorized Commercial Licensing & Distribution</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {COMPANY_INFO.partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-sky/60 hover:shadow-md transition-all text-center flex flex-col justify-center items-center group"
            >
              <div className="text-xs font-bold text-slate-800 group-hover:text-brand-sky transition-colors">
                {partner.name}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                {partner.category}
              </div>
              <span className="mt-2 text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                {partner.tier.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
