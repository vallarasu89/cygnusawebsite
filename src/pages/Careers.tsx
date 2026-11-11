import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  UploadCloud, 
  HeartPulse, 
  GraduationCap, 
  CalendarCheck, 
  Laptop, 
  TrendingUp, 
  Coffee,
  X,
  FileText
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { JOB_OPENINGS, CULTURE_BENEFITS } from '../data/careersData';
import { JobOpening } from '../types';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  
  // Application form state
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    phone: '',
    linkedIn: '',
    experience: '',
    resumeFile: null as File | null,
    resumeFileName: '',
    coverNote: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
    setIsSubmitted(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setApplicant({
        ...applicant,
        resumeFile: file,
        resumeFileName: file.name
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const applicationRecord = {
      id: `app-${Date.now()}`,
      jobTitle: selectedJob?.title || 'General Application',
      name: applicant.name,
      email: applicant.email,
      phone: applicant.phone,
      linkedIn: applicant.linkedIn,
      experience: applicant.experience,
      resumeFileName: applicant.resumeFileName || 'Resume.pdf',
      coverNote: applicant.coverNote,
      appliedAt: new Date().toISOString()
    };

    setTimeout(() => {
      try {
        const storedApps = JSON.parse(localStorage.getItem('cygnusa_job_applications') || '[]');
        storedApps.unshift(applicationRecord);
        localStorage.setItem('cygnusa_job_applications', JSON.stringify(storedApps));
      } catch (err) {
        console.error("Storage error", err);
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const getBenefitIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-brand-sky";
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className={iconClass} />;
      case 'GraduationCap': return <GraduationCap className={iconClass} />;
      case 'CalendarCheck': return <CalendarCheck className={iconClass} />;
      case 'Laptop': return <Laptop className={iconClass} />;
      case 'TrendingUp': return <TrendingUp className={iconClass} />;
      case 'Coffee': return <Coffee className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title="Careers & Engineering Opportunities — CYGNUSA Technologies"
        description="Build what's next. Explore open engineering, cloud DevOps, AI integration, and cybersecurity roles at CYGNUSA Technologies in Chennai, India."
        canonicalPath="/careers"
      />

      <Breadcrumb items={[{ label: "Careers" }]} />

      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-deep text-xs font-semibold uppercase tracking-wider">
            Join Our Team
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Build What's Next with CYGNUSA
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Work alongside veteran enterprise architects on high-impact platforms for Fortune 500s, electric vehicle fleets, and aerospace clients.
          </p>
        </div>
      </section>

      {/* Employee Benefits & Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-heading font-bold text-slate-900">
              Why Engineers Choose CYGNUSA
            </h2>
            <p className="text-slate-600 text-sm">
              We provide competitive compensation, cutting-edge hardware, continuous learning budgets, and an empathetic culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CULTURE_BENEFITS.map((benefit, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-brand-sky/60 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                  {getBenefitIcon(benefit.icon)}
                </div>
                <h3 className="text-base font-heading font-bold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-700 text-left">
              <span className="font-bold text-slate-900">Want to read our official HR policy?</span> Learn about our casual, sick, earned, maternity, paternity, and marriage leave provisions.
            </div>
            <Link 
              to="/policies/leave-policy"
              className="text-xs text-brand-sky font-semibold hover:underline shrink-0"
            >
              Read Employee Leave Policy (v2.0 2026) &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Current Job Openings */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase text-brand-deep font-semibold tracking-wider">
                Current Opportunities
              </div>
              <h2 className="text-3xl font-heading font-bold text-slate-900">
                Open Engineering Roles
              </h2>
            </div>
            <div className="text-xs text-slate-600">
              Showing <strong className="text-slate-900 font-semibold">{JOB_OPENINGS.length}</strong> active openings in Chennai & Hybrid
            </div>
          </div>

          <div className="space-y-4">
            {JOB_OPENINGS.map(job => (
              <div
                key={job.id}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-brand-sky/60 shadow-xs hover:shadow-md transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold text-brand-sky uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {job.experience}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {job.summary}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {job.requirements.slice(0, 3).map((req, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60 line-clamp-1">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => handleApplyClick(job)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-xs tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer text-center"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isApplyModalOpen && selectedJob && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs text-brand-sky font-semibold uppercase">{selectedJob.department}</span>
                <h3 className="text-xl font-heading font-bold text-slate-900">{selectedJob.title}</h3>
              </div>
              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-heading font-bold text-slate-900">Application Received!</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Thank you for applying, <strong className="text-slate-900">{applicant.name}</strong>. Our technical talent acquisition team will review your credentials and contact you at <strong className="text-slate-900">{applicant.email}</strong>.
                </p>
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="px-6 py-2 rounded-lg bg-brand-sky text-white text-xs font-semibold hover:bg-sky-600"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicant.name}
                      onChange={e => setApplicant({ ...applicant, name: e.target.value })}
                      placeholder="e.g. Meera Raman"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={applicant.email}
                      onChange={e => setApplicant({ ...applicant, email: e.target.value })}
                      placeholder="meera@domain.com"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={applicant.phone}
                      onChange={e => setApplicant({ ...applicant, phone: e.target.value })}
                      placeholder="+91-9876543210"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Total Experience (Years)</label>
                    <input
                      type="text"
                      value={applicant.experience}
                      onChange={e => setApplicant({ ...applicant, experience: e.target.value })}
                      placeholder="e.g. 5.5 Years"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    value={applicant.linkedIn}
                    onChange={e => setApplicant({ ...applicant, linkedIn: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                  />
                </div>

                {/* Resume Upload File Input */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Upload Resume (PDF/DOCX) *</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:border-brand-sky transition-colors cursor-pointer relative bg-slate-50/70">
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <UploadCloud className="w-8 h-8 text-brand-sky mx-auto mb-1" />
                    <span className="text-xs font-medium text-slate-700 block">
                      {applicant.resumeFileName ? (
                        <span className="text-emerald-600 font-semibold">{applicant.resumeFileName}</span>
                      ) : (
                        "Click or drag resume file here"
                      )}
                    </span>
                    <span className="text-[10px] text-slate-500">Max size 10MB</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Brief Note / Highlights (Optional)</label>
                  <textarea
                    rows={2}
                    value={applicant.coverNote}
                    onChange={e => setApplicant({ ...applicant, coverNote: e.target.value })}
                    placeholder="Key tech accomplishments, notice period, or location preference..."
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky resize-none shadow-xs"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(false)}
                    className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-xs hover:bg-slate-200 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 rounded-lg bg-brand-sky hover:bg-sky-600 text-white text-xs font-semibold shadow-sm cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
