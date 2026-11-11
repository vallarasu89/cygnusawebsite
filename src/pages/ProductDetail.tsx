import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Server, 
  ShieldCheck, 
  Users, 
  ChevronRight
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { PRODUCTS } from '../data/productsData';

interface ProductDetailProps {
  onOpenConsultation: (product?: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title={`${product.name} — Enterprise Software Platform`}
        description={product.overview}
        canonicalPath={`/products/${product.slug}`}
      />

      <Breadcrumb 
        items={[
          { label: "Products", href: "/products" },
          { label: product.name }
        ]} 
      />

      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-deep text-xs font-semibold uppercase tracking-wider">
              {product.subtitle}
            </span>
            {product.badge && (
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-mono font-bold">
                {product.badge}
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            {product.name}
          </h1>

          <p className="text-xl text-brand-sky font-semibold max-w-3xl">
            {product.tagline}
          </p>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            {product.overview}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenConsultation(product.name)}
              className="px-7 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Book Live {product.name} Demo
            </button>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-sm transition-all shadow-xs"
            >
              Request Custom Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features & Business Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Key Capabilities */}
            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-brand-deep text-xs font-mono uppercase tracking-widest font-bold">
                <Zap className="w-4 h-4 text-brand-sky" />
                Product Features
              </div>
              <h2 className="text-2xl font-heading font-bold text-slate-900">
                Engineered Capabilities
              </h2>
              <div className="space-y-3">
                {product.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial Benefits */}
            <div className="p-8 rounded-3xl bg-emerald-50/40 border border-emerald-100 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono uppercase tracking-widest font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Measurable ROI
              </div>
              <h2 className="text-2xl font-heading font-bold text-slate-900">
                Commercial Benefits
              </h2>
              <div className="space-y-3">
                {product.businessBenefits.map((ben, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-100 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{ben}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Audience & Architecture Highlights */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Target Audience */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase text-brand-deep font-semibold tracking-wider">
                Deployment Fit
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900">
                Who Needs {product.name}?
              </h3>
              <ul className="space-y-2.5">
                {product.targetAudience.map((aud, idx) => (
                  <li key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-center gap-3 shadow-xs">
                    <Users className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase text-brand-deep font-semibold tracking-wider">
                System Engineering
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900">
                Architecture & Security Highlights
              </h3>
              <ul className="space-y-2.5">
                {product.architectureHighlights.map((arch, idx) => (
                  <li key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-center gap-3 shadow-xs">
                    <Server className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Demo Inquiry CTA */}
      <section className="py-16 bg-gradient-to-b from-sky-50/50 via-slate-50/40 to-white border-t border-slate-200/80 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          Experience {product.name} in Action
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Our engineering team can provision an interactive test environment with sample data for your evaluation.
        </p>
        <button
          type="button"
          onClick={() => onOpenConsultation(product.name)}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Request a Guided Walkthrough
        </button>
      </section>

    </div>
  );
};
