import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  Unlock, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Layers, 
  Package, 
  FileText, 
  Mail, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  Download, 
  RefreshCw,
  LogOut,
  Search,
  ExternalLink
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { SERVICES } from '../data/servicesData';
import { PRODUCTS } from '../data/productsData';
import { TEAM_MEMBERS } from '../data/teamData';
import { JOB_OPENINGS } from '../data/careersData';
import { InquiryLead } from '../types';

export const AdminPortal: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('cygnusa_admin_auth') === 'true';
  });
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'leads' | 'applications' | 'casestudies' | 'jobs'>('leads');

  // Leads & Applications State
  const [leads, setLeads] = useState<InquiryLead[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [caseStudiesList, setCaseStudiesList] = useState(CASE_STUDIES);
  const [jobsList, setJobsList] = useState(JOB_OPENINGS);

  // New Lead / Item Modal states
  const [successMsg, setSuccessMsg] = useState('');

  // Load from LocalStorage
  useEffect(() => {
    try {
      const storedLeads = JSON.parse(localStorage.getItem('cygnusa_leads') || '[]');
      if (storedLeads.length === 0) {
        // Seed initial sample consultation requests for demonstration
        const sampleLeads: InquiryLead[] = [
          {
            id: 'lead-1',
            name: 'Karthik Narayanan',
            email: 'karthik@mobilityscale.com',
            phone: '+91-98401 23456',
            company: 'MobilityScale Technologies',
            serviceOfInterest: 'Virtual CTO & Strategic Advisory',
            message: 'Looking for fractional CTO leadership to prepare for Series A architecture audit. [Preferred time: Morning]',
            createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
            status: 'New'
          },
          {
            id: 'lead-2',
            name: 'Sarah Jenkins',
            email: 'sjenkins@aerosync.io',
            phone: '+1-415-555-0199',
            company: 'AeroSync Global',
            serviceOfInterest: 'AI Integration & Automation',
            message: 'Need autonomous document extraction pipeline for aviation maintenance logs.',
            createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
            status: 'In Review'
          }
        ];
        localStorage.setItem('cygnusa_leads', JSON.stringify(sampleLeads));
        setLeads(sampleLeads);
      } else {
        setLeads(storedLeads);
      }

      const storedApps = JSON.parse(localStorage.getItem('cygnusa_job_applications') || '[]');
      setApplications(storedApps);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (authEmail.trim().toLowerCase() === 'admin@cygnusa.in' && authPassword === 'cygnusa2026') {
      setIsAuthenticated(true);
      localStorage.setItem('cygnusa_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid credentials. (Hint: Use admin@cygnusa.in / cygnusa2026)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('cygnusa_admin_auth');
  };

  const updateLeadStatus = (id: string, newStatus: 'New' | 'In Review' | 'Contacted') => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    setLeads(updated);
    localStorage.setItem('cygnusa_leads', JSON.stringify(updated));
    showToast(`Lead marked as ${newStatus}`);
  };

  const deleteLead = (id: string) => {
    const updated = leads.filter(l => l.id !== id);
    setLeads(updated);
    localStorage.setItem('cygnusa_leads', JSON.stringify(updated));
    showToast('Lead deleted.');
  };

  const deleteApplication = (id: string) => {
    const updated = applications.filter(a => a.id !== id);
    setApplications(updated);
    localStorage.setItem('cygnusa_job_applications', JSON.stringify(updated));
    showToast('Application deleted.');
  };

  const showToast = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const exportLeadsCSV = () => {
    const headers = "ID,Name,Email,Phone,Company,Service,Status,CreatedAt\n";
    const rows = leads.map(l => `"${l.id}","${l.name}","${l.email}","${l.phone}","${l.company}","${l.serviceOfInterest}","${l.status}","${l.createdAt}"`).join("\n");
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cygnusa_leads_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <div className="relative overflow-hidden pt-4 pb-20 min-h-[85vh] bg-white text-slate-800">
      <SEOHead 
        title="Admin Content Management & Operations Portal — CYGNUSA"
        description="Secure enterprise CMS portal for managing inquiries, job applications, case studies, and team profiles."
        canonicalPath="/admin"
      />

      <Breadcrumb items={[{ label: "Admin Portal" }]} />

      {!isAuthenticated ? (
        // Login Screen
        <section className="py-20 flex items-center justify-center px-4">
          <div className="w-full max-w-md p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-50 border border-sky-100 text-brand-sky flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-heading font-bold text-slate-900">
                CYGNUSA Admin Portal
              </h1>
              <p className="text-xs text-slate-500">
                Authorized Executive & Administrator Access Only
              </p>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                {authError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Administrator Email</label>
                <input
                  type="email"
                  required
                  value={authEmail}
                  onChange={e => setAuthEmail(e.target.value)}
                  placeholder="admin@cygnusa.in"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Passkey / Password</label>
                <input
                  type="password"
                  required
                  value={authPassword}
                  onChange={e => setAuthPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <div><strong className="text-brand-deep">Demo Credentials:</strong></div>
                <div>Email: <code className="text-slate-900 font-semibold">admin@cygnusa.in</code></div>
                <div>Passkey: <code className="text-slate-900 font-semibold">cygnusa2026</code></div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer"
              >
                Sign In to Dashboard
              </button>
            </form>
          </div>
        </section>
      ) : (
        // Authenticated Dashboard
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-heading font-bold text-slate-900">CYGNUSA Operations Hub</h2>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono font-bold">
                    SUPER ADMIN
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Signed in as <span className="text-brand-deep font-semibold">admin@cygnusa.in</span> (Live Local Storage Persistence)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            </div>
          </div>

          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'leads'
                  ? 'bg-brand-sky text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Mail className="w-4 h-4" />
              Consultation Leads ({leads.length})
            </button>

            <button
              onClick={() => setActiveTab('applications')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'applications'
                  ? 'bg-brand-sky text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Job Applications ({applications.length})
            </button>

            <button
              onClick={() => setActiveTab('casestudies')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'casestudies'
                  ? 'bg-brand-sky text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4" />
              Case Studies ({caseStudiesList.length})
            </button>

            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'jobs'
                  ? 'bg-brand-sky text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4" />
              Job Listings ({jobsList.length})
            </button>
          </div>

          {/* TAB 1: CONSULTATION LEADS */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-heading font-bold text-slate-900">Inbound Inquiries & Consultations</h3>
                  <p className="text-xs text-slate-500">Real leads captured from consultation modals and contact forms.</p>
                </div>
                <button
                  onClick={exportLeadsCSV}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export to CSV
                </button>
              </div>

              {leads.length === 0 ? (
                <div className="p-8 text-center text-slate-500 text-sm bg-slate-50 rounded-2xl border border-slate-200">
                  No consultation leads recorded yet.
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs text-slate-700 bg-white">
                    <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3">Lead Info</th>
                        <th className="px-4 py-3">Company</th>
                        <th className="px-4 py-3">Service Focus</th>
                        <th className="px-4 py-3">Message</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {leads.map(lead => (
                        <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3.5">
                            <div className="font-semibold text-slate-900">{lead.name}</div>
                            <div className="text-[11px] text-brand-sky">{lead.email}</div>
                            <div className="text-[10px] text-slate-500">{lead.phone}</div>
                          </td>
                          <td className="px-4 py-3.5 font-medium text-slate-800">
                            {lead.company}
                          </td>
                          <td className="px-4 py-3.5 text-slate-700">
                            {lead.serviceOfInterest}
                          </td>
                          <td className="px-4 py-3.5 max-w-xs text-slate-600 line-clamp-2">
                            {lead.message}
                          </td>
                          <td className="px-4 py-3.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                              lead.status === 'New' ? 'bg-sky-50 text-brand-deep border border-sky-200' :
                              lead.status === 'In Review' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                              'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => updateLeadStatus(lead.id, 'Contacted')}
                                title="Mark as Contacted"
                                className="p-1.5 rounded hover:bg-emerald-50 text-emerald-600 cursor-pointer"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => deleteLead(lead.id)}
                                title="Delete Lead"
                                className="p-1.5 rounded hover:bg-rose-50 text-rose-500 cursor-pointer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: JOB APPLICATIONS */}
          {activeTab === 'applications' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-heading font-bold text-slate-900">Candidate Applications</h3>
                <p className="text-xs text-slate-500">Applications submitted through the Careers portal.</p>
              </div>

              {applications.length === 0 ? (
                <div className="p-8 text-center text-slate-500 text-sm bg-slate-50 rounded-2xl border border-slate-200">
                  No job applications received yet. Submit an application from the Careers page to see it appear here!
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs text-slate-700 bg-white">
                    <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3">Applicant</th>
                        <th className="px-4 py-3">Role Applied</th>
                        <th className="px-4 py-3">Experience</th>
                        <th className="px-4 py-3">Resume Attachment</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {applications.map(app => (
                        <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3.5">
                            <div className="font-semibold text-slate-900">{app.name}</div>
                            <div className="text-[11px] text-brand-sky">{app.email}</div>
                            <div className="text-[10px] text-slate-500">{app.phone}</div>
                          </td>
                          <td className="px-4 py-3.5 font-medium text-slate-800">
                            {app.jobTitle}
                          </td>
                          <td className="px-4 py-3.5 text-slate-700">
                            {app.experience || 'Not specified'}
                          </td>
                          <td className="px-4 py-3.5 text-emerald-700 font-mono text-[11px] font-semibold">
                            {app.resumeFileName}
                          </td>
                          <td className="px-4 py-3.5">
                            <button
                              onClick={() => deleteApplication(app.id)}
                              className="p-1.5 rounded hover:bg-rose-50 text-rose-500 cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CASE STUDIES */}
          {activeTab === 'casestudies' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-heading font-bold text-slate-900">Documented Case Studies (17 Projects)</h3>
                  <p className="text-xs text-slate-500">Derived strictly from official company credentials.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudiesList.map(cs => (
                  <div key={cs.id} className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
                    <div className="flex items-center justify-between text-[10px] text-brand-deep font-mono font-semibold">
                      <span>{cs.client}</span>
                      <span>{cs.id.toUpperCase()}</span>
                    </div>
                    <h4 className="text-sm font-heading font-bold text-slate-900 line-clamp-1">{cs.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{cs.challenge}</p>
                    <div className="pt-2 flex items-center justify-between text-xs">
                      <Link to={`/case-studies/${cs.slug}`} className="text-brand-sky hover:underline flex items-center gap-1 font-semibold">
                        View Live <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: JOB OPENINGS */}
          {activeTab === 'jobs' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-heading font-bold text-slate-900">Active Career Listings</h3>
                  <p className="text-xs text-slate-500">Roles currently recruiting at CYGNUSA.</p>
                </div>
              </div>

              <div className="space-y-3">
                {jobsList.map(j => (
                  <div key={j.id} className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                    <div>
                      <div className="text-xs text-brand-deep font-semibold">{j.department}</div>
                      <h4 className="text-sm font-heading font-bold text-slate-900">{j.title}</h4>
                      <div className="text-[11px] text-slate-500">{j.location} • {j.experience}</div>
                    </div>
                    <div className="text-xs text-slate-600 font-mono font-medium">
                      {j.openingsCount} Openings
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </section>
      )}

    </div>
  );
};
