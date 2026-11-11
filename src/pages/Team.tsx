import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  ExternalLink,
  Code2,
  Compass,
  Cpu,
  Layers
} from 'lucide-react';
import { LinkedinIcon } from '../components/SocialIcons';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { TEAM_MEMBERS } from '../data/teamData';

interface TeamProps {
  onOpenConsultation: () => void;
}

export const Team: React.FC<TeamProps> = ({ onOpenConsultation }) => {
  const leadership = TEAM_MEMBERS.filter(m => m.isLeadership);
  const practices = TEAM_MEMBERS.filter(m => !m.isLeadership);

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title="Our Team & Leadership — CYGNUSA Technologies"
        description="Meet the leadership, solutions architects, cloud DevOps leads, AI specialists, and UI/UX practitioners powering CYGNUSA Technologies."
        canonicalPath="/team"
      />

      <Breadcrumb items={[{ label: "Our Team" }]} />

      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/40 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/10 border border-brand-sky/30 text-brand-sky text-xs font-semibold uppercase tracking-wider">
            Talent & Leadership
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            The Minds Behind CYGNUSA
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A battle-tested team of enterprise directors, full-stack engineers, cloud architects, AI practitioners, and product designers united by our commitment to quality.
          </p>
        </div>
      </section>

      {/* Verified Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center sm:text-left space-y-2">
            <div className="text-xs font-mono uppercase text-brand-deep font-bold tracking-wider">
              Board of Directors
            </div>
            <h2 className="text-3xl font-heading font-bold text-slate-900">
              Executive Leadership
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Verified corporate directors guiding company strategy, high-stakes client advisory, and statutory governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map(leader => (
              <div
                key={leader.id}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-sky/50 transition-all flex flex-col sm:flex-row gap-6 items-start group"
              >
                {/* Professional Photo */}
                <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-slate-100 relative bg-slate-100">
                  {leader.photoUrl ? (
                    <img 
                      src={leader.photoUrl} 
                      alt={leader.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-brand-deep to-brand-sky text-white font-heading font-extrabold text-3xl flex items-center justify-center">
                      {leader.avatarPlaceholder}
                    </div>
                  )}
                </div>

                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-heading font-bold text-slate-900">
                      {leader.name}
                    </h3>
                    {leader.linkedInUrl && (
                      <a
                        href={leader.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-brand-sky transition-colors p-1"
                        aria-label={`${leader.name} LinkedIn Profile`}
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <div className="text-xs text-brand-sky font-bold uppercase tracking-wider">
                    {leader.role}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>

                  <div className="pt-2">
                    <div className="text-[11px] font-semibold text-slate-700 mb-1.5">Executive Expertise:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {leader.skills.map((skill, i) => (
                        <span key={i} className="text-[10px] px-2.5 py-1 rounded-lg bg-sky-50 text-brand-deep font-semibold border border-sky-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Leadership & Engineering Heads */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase text-brand-deep font-bold tracking-wider">
                Engineering & Operations
              </div>
              <h2 className="text-3xl font-heading font-bold text-slate-900">
                Practice Leads & Delivery Directors
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Domain leads directing daily sprint execution, cloud uptime, security auditing, and design systems.
              </p>
            </div>
            <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs text-[11px] text-slate-500">
              * Fully customizable via Admin Portal
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practices.map(lead => (
              <div
                key={lead.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-sky/50 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Photo or Avatar */}
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                    {lead.photoUrl ? (
                      <img 
                        src={lead.photoUrl} 
                        alt={lead.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-100 text-brand-sky font-heading font-bold text-xl flex items-center justify-center">
                        {lead.avatarPlaceholder}
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-base font-heading font-bold text-slate-900">{lead.name}</h4>
                    <div className="text-xs text-brand-sky font-semibold mt-0.5">{lead.role}</div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{lead.bio}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1">
                    {lead.skills.slice(0, 3).map((s, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture & Life at CYGNUSA */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/10 border border-brand-sky/30 text-brand-sky text-xs font-semibold uppercase tracking-wider">
              Life at CYGNUSA
            </div>
            <h2 className="text-3xl font-heading font-bold text-slate-900">
              A Culture Built on Excellence & Curiosity
            </h2>
            <p className="text-slate-600 text-sm">
              We empower engineers to master cutting-edge stacks, eliminate red tape, and deliver work they are proud of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-base font-heading font-bold text-slate-900">Radical Transparency</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No hierarchy barriers. Engineers consult directly with founders and enterprise stakeholders, ensuring total alignment.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-base font-heading font-bold text-slate-900">Unlearning & Relearning</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tech stacks evolve rapidly. We invest continuously in certifications, AI sandboxes, and modern DevOps training for every team member.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-base font-heading font-bold text-slate-900">Zero Blame, Fast Learning</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Post-mortems are opportunities to strengthen automated tests and infrastructure, not points of finger-pointing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          Want to Join Our Engineering Family?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          We are constantly on the lookout for ambitious developers, cloud architects, and security specialists.
        </p>
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-sky hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-glow-sky"
        >
          Explore Current Openings &rarr;
        </Link>
      </section>

    </div>
  );
};
