import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Users, 
  Globe2, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Heart,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { COMPANY_INFO } from '../data/companyData';
import { TEAM_MEMBERS } from '../data/teamData';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title="About CYGNUSA Technologies — Who We Are & Our Story"
        description="Learn about CYGNUSA Technologies, our 6th Generation IT philosophy, 25+ years of leadership, CYGNUSA acronym values, and global enterprise delivery model."
        canonicalPath="/about"
      />

      <Breadcrumb items={[{ label: "About Us" }]} />

      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/10 border border-brand-sky/30 text-brand-sky text-xs font-semibold uppercase tracking-wider">
            Brand Story & Guiding Purpose
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Innovating with Technology.<br />
            <span className="text-brand-sky">Delivering with Strategy.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            CYGNUSA Technologies Private Limited is a strategic IT partner delivering Virtual CTO advisory, UI/UX design, application modernisation, web & mobile development, managed IT services, and cloud & DevOps solutions.
          </p>
        </div>
      </section>

      {/* Who We Are & Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono uppercase text-brand-deep font-bold tracking-wider">
                Our Genesis
              </div>
              <h2 className="text-3xl font-heading font-bold text-slate-900">
                Who We Are & How We Started
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded in Chennai, India, CYGNUSA Technologies was incorporated with an uncompromising mission: to bridge the vast chasm between high-level business strategy and deep, ground-level software execution.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Too often, growing enterprises and small-to-medium businesses are forced to choose between massive, impersonal consulting conglomerates that charge exorbitant fees for slideshows, and small, inexperienced software shops that lack enterprise architectural rigor.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                CYGNUSA pioneered the <strong>6th Generation IT Frontier</strong>. We embed seasoned enterprise technology directors into your business while simultaneously executing world-class software development, 24/7 cloud management, and ISO 27001-certified security operations.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="text-3xl font-heading font-bold text-brand-sky">2020</div>
                <div className="text-xs font-semibold text-slate-900">Incorporated in Chennai</div>
                <div className="text-[11px] text-slate-500">CIN: U72900TN2020PTC135633, registered in Tamil Nadu.</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="text-3xl font-heading font-bold text-emerald-600">ISO 27001</div>
                <div className="text-xs font-semibold text-slate-900">Security Certified</div>
                <div className="text-[11px] text-slate-500">Certified ISMS, ITSM, and QMS management systems.</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="text-3xl font-heading font-bold text-amber-600">25+</div>
                <div className="text-xs font-semibold text-slate-900">Years Leadership</div>
                <div className="text-[11px] text-slate-500">Executive leadership guiding high-stakes digital deployments.</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="text-3xl font-heading font-bold text-cyan-600">8+</div>
                <div className="text-xs font-semibold text-slate-900">Countries Reached</div>
                <div className="text-[11px] text-slate-500">Clients across India, US, Singapore, Europe & Australia.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-sky/10 text-brand-sky flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be the world’s most trusted strategic IT and digital product engineering partner for fast-growing businesses—democratizing access to enterprise-grade technology leadership, AI-driven automation, and cloud excellence.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To transform technological complexity into sustained commercial advantage. We build resilient software, eliminate person dependency, optimize operational costs, and safeguard digital assets through unwavering quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Acronym Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/10 border border-brand-sky/30 text-brand-sky text-xs font-semibold uppercase tracking-wider">
              Core Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900">
              The CYGNUSA Acronym Values
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Strictly codified in our official Brand & Design Guidelines, these seven tenets define every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.acronymValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-sky/50 transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-sky/10 border border-brand-sky/30 text-brand-sky font-heading font-extrabold text-2xl flex items-center justify-center">
                  {val.letter}
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50/50 border border-sky-200 shadow-sm flex flex-col justify-center text-center space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-deep font-bold">
                The Brand Promise
              </span>
              <p className="text-lg font-heading font-bold text-slate-900">
                "Innovating with Technology, Delivering with Strategy."
              </p>
              <div className="text-xs text-slate-500">
                Official Company Motto & Standard of Work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team with Photos */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/10 border border-brand-sky/30 text-brand-sky text-xs font-semibold uppercase tracking-wider">
              Leadership
            </div>
            <h2 className="text-3xl font-heading font-bold text-slate-900">
              Board of Directors & Executive Guidance
            </h2>
            <p className="text-slate-600 text-sm">
              Verified corporate directors with deep industry track records in enterprise transformation and governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS.filter(m => m.isLeadership).map(leader => (
              <div
                key={leader.id}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-sky/50 transition-all flex flex-col sm:flex-row gap-6 items-start group"
              >
                {/* Real Executive Photo */}
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-slate-100 bg-slate-100 relative">
                  {leader.photoUrl ? (
                    <img 
                      src={leader.photoUrl} 
                      alt={leader.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-brand-deep to-brand-sky text-white font-heading font-bold text-2xl flex items-center justify-center">
                      {leader.avatarPlaceholder}
                    </div>
                  )}
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-heading font-bold text-slate-900">{leader.name}</h3>
                  <div className="text-xs text-brand-sky font-semibold">{leader.role}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{leader.bio}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {leader.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-sky-50 text-brand-deep font-semibold border border-sky-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-semibold transition-all shadow-sm"
            >
              Explore our full engineering practices & team profiles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/10 border border-brand-sky/30 text-brand-sky text-xs font-semibold uppercase tracking-wider">
              International Delivery
            </div>
            <h2 className="text-3xl font-heading font-bold text-slate-900">
              Our Global Footprint
            </h2>
            <p className="text-slate-600 text-sm">
              We serve enterprise clients across 8 global hubs with seamless timezone collaboration.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            {COMPANY_INFO.globalLocations.map((loc, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-brand-sky/50 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Globe2 className="w-4 h-4 text-brand-sky" />
                  <span className="font-heading font-bold text-slate-900 text-sm">{loc.country}</span>
                </div>
                <div className="text-xs text-brand-sky font-semibold">{loc.cities}</div>
                <div className="text-[11px] text-slate-500 mt-1">{loc.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          Partner with a 6th Generation IT Frontier
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Discover how CYGNUSA can strengthen your technology infrastructure and accelerate strategic execution.
        </p>
        <button
          type="button"
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-glow-sky cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Schedule a Consultation
        </button>
      </section>

    </div>
  );
};
