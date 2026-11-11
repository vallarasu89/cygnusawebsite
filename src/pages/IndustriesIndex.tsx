import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Plane, 
  Car, 
  Fuel, 
  Factory, 
  Landmark, 
  Coins, 
  GraduationCap, 
  Cpu, 
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { INDUSTRIES } from '../data/industriesData';

interface IndustriesIndexProps {
  onOpenConsultation: () => void;
}

export const IndustriesIndex: React.FC<IndustriesIndexProps> = ({ onOpenConsultation }) => {
  const getIndustryIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-brand-sky";
    switch (iconName) {
      case 'Plane': return <Plane className={iconClass} />;
      case 'Car': return <Car className={iconClass} />;
      case 'Fuel': return <Fuel className={iconClass} />;
      case 'Factory': return <Factory className={iconClass} />;
      case 'Landmark': return <Landmark className={iconClass} />;
      case 'Coins': return <Coins className={iconClass} />;
      case 'GraduationCap': return <GraduationCap className={iconClass} />;
      case 'Cpu': return <Cpu className={iconClass} />;
      case 'Headphones': return <Headphones className={iconClass} />;
      default: return <Cpu className={iconClass} />;
    }
  };

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title="Industry Sectors & Domain Solutions"
        description="CYGNUSA engineers specialized technology ecosystems tailored for Aviation, Automotive, EV/FuelTech, Manufacturing, Government, FinTech, and EdTech."
        canonicalPath="/industries"
      />

      <Breadcrumb items={[{ label: "Industries" }]} />

      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-deep text-xs font-semibold uppercase tracking-wider">
            Domain Specialization
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Industries We Transform
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tailored digital platforms, IoT architectures, and compliance systems built to overcome unique sector challenges.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map(industry => (
              <div
                key={industry.id}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-brand-sky/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {getIndustryIcon(industry.iconName)}
                  </div>

                  <h2 className="text-2xl font-heading font-bold text-slate-900 group-hover:text-brand-deep transition-colors">
                    <Link to={`/industries/${industry.slug}`}>
                      {industry.name}
                    </Link>
                  </h2>

                  <div className="text-xs text-brand-sky font-semibold">
                    {industry.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="pt-2">
                    <div className="text-[11px] font-semibold text-slate-500 mb-1.5">Trusted by Clients in this Sector:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.clientLogos.slice(0, 3).map((client, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium border border-slate-200/60">
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-sky hover:underline"
                  >
                    View Industry Blueprint & Case Studies <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-gradient-to-b from-sky-50/50 via-slate-50/40 to-white border-t border-slate-200/80 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          Operating in a Heavily Regulated or Specialized Industry?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          We bring proven experience navigating PESO fuel regulations, ISO security standards, airport security protocols, and banking compliances.
        </p>
        <button
          type="button"
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Schedule Domain Consultation
        </button>
      </section>

    </div>
  );
};
