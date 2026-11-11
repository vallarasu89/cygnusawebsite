import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Package, 
  TrendingUp, 
  GraduationCap, 
  ShieldCheck 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { PRODUCTS } from '../data/productsData';

interface ProductsIndexProps {
  onOpenConsultation: (product?: string) => void;
}

export const ProductsIndex: React.FC<ProductsIndexProps> = ({ onOpenConsultation }) => {
  const getProductIcon = (slug: string) => {
    switch (slug) {
      case 'hyperstock': return <Package className="w-8 h-8 text-brand-sky" />;
      case 'hyper4mance': return <TrendingUp className="w-8 h-8 text-emerald-600" />;
      case 'hyper-lx': return <GraduationCap className="w-8 h-8 text-cyan-600" />;
      case 'hyper-lite': return <ShieldCheck className="w-8 h-8 text-amber-500" />;
      default: return <Zap className="w-8 h-8 text-brand-sky" />;
    }
  };

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title="Proprietary Enterprise Software Suites — HYPER Products"
        description="Explore CYGNUSA's proprietary software platforms: HYPERSTOCK (Inventory), HYPER4MANCE (KPI Management), HYPER-LX (AI LMS), and HYPER-Lite (Compliance)."
        canonicalPath="/products"
      />

      <Breadcrumb items={[{ label: "Products" }]} />

      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-deep text-xs font-semibold uppercase tracking-wider">
            CYGNUSA Product Labs
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Proprietary Enterprise Platforms
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Turnkey, battle-tested software suites engineered from proven multi-client implementations. Rapid deployment, zero license lock-in, and full customization capability.
          </p>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 hover:border-brand-sky/60 shadow-xs hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {getProductIcon(prod.slug)}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
                        {prod.name}
                      </h2>
                      {prod.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-sky-100 text-brand-deep font-mono font-semibold border border-sky-200">
                          {prod.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-brand-sky font-semibold">{prod.subtitle}</div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {prod.overview}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {prod.keyFeatures.slice(0, 4).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-4 text-center sm:text-left">
                <div className="text-xs font-mono uppercase text-slate-500 font-semibold">Target Audience:</div>
                <ul className="space-y-1 text-xs text-slate-700">
                  {prod.targetAudience.slice(0, 3).map((aud, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-sky shrink-0 mt-1.5" />
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <Link
                    to={`/products/${prod.slug}`}
                    className="w-full py-2.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    View Product Architecture <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(prod.name)}
                    className="w-full py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
                  >
                    Request Demo Access
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Inquiry CTA */}
      <section className="py-16 bg-gradient-to-b from-sky-50/50 via-slate-50/40 to-white border-t border-slate-200/80 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          Require a Customized Enterprise Solution?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          We can deploy and customize any HYPER suite to integrate seamlessly with your existing on-premises or cloud environment.
        </p>
        <button
          type="button"
          onClick={() => onOpenConsultation()}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Request Enterprise Demo
        </button>
      </section>

    </div>
  );
};
