import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, CalendarCheck, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const LeavePolicy: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title="Employee Leave Policy (v2.0 2026) — CYGNUSA Technologies"
        description="Official Employee Leave Policy of CYGNUSA Technologies Private Limited. Version 2.0 effective January 1, 2026."
        canonicalPath="/policies/leave-policy"
      />

      <Breadcrumb items={[{ label: "Corporate Policies", href: "/about" }, { label: "Employee Leave Policy (v2.0)" }]} />

      <section className="py-12 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-deep text-xs font-semibold uppercase tracking-wider">
              Official Corporate Policy
            </span>
            <span className="text-xs text-slate-500 font-mono font-medium">Version 2.0 • Effective 1-Jan-2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            CYGNUSA Technologies Private Limited<br />
            <span className="text-brand-sky">Employee Leave Policy</span>
          </h1>

          <p className="text-xs text-slate-600">
            Applicable To: All Permanent, Probationary, Contractual and Fixed-Term Employees. Approved by Director, Human Resources Department, 50, Perumal Koil Garden, R.A. Puram, Chennai – 600028.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          {/* Summary Matrix */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-base font-heading font-bold text-slate-900 flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-brand-sky" />
              Annual Leave Entitlement Summary
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-2.5">Leave Type</th>
                    <th className="px-4 py-2.5">Annual Entitlement</th>
                    <th className="px-4 py-2.5">Key Conditions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-900">Casual Leave (CL)</td>
                    <td className="px-4 py-2.5 text-brand-sky font-bold">8 Days</td>
                    <td className="px-4 py-2.5 text-slate-600">Max 2 days at a stretch. Lapses at year-end.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-900">Sick Leave (SL)</td>
                    <td className="px-4 py-2.5 text-brand-sky font-bold">8 Days</td>
                    <td className="px-4 py-2.5 text-slate-600">Medical certificate required if &gt;2 consecutive days.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-900">Earned Leave (EL / Privilege)</td>
                    <td className="px-4 py-2.5 text-brand-sky font-bold">10 Days</td>
                    <td className="px-4 py-2.5 text-slate-600">Accrues at 1 day/month. Max accumulation 24 days.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-900">Paternity Leave</td>
                    <td className="px-4 py-2.5 text-brand-sky font-bold">2 - 3 Days</td>
                    <td className="px-4 py-2.5 text-slate-600">Available to confirmed employees, within 60 days of childbirth.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-900">Marriage Leave</td>
                    <td className="px-4 py-2.5 text-brand-sky font-bold">3 - 5 Days</td>
                    <td className="px-4 py-2.5 text-slate-600">Available once during entire tenure with company.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-900">Bereavement Leave</td>
                    <td className="px-4 py-2.5 text-brand-sky font-bold">Up to 3 Days</td>
                    <td className="px-4 py-2.5 text-slate-600">Applicable for death of spouse, parent, child, or sibling.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-900">Compensatory Off (Comp-Off)</td>
                    <td className="px-4 py-2.5 text-brand-sky font-bold">As Eligible</td>
                    <td className="px-4 py-2.5 text-slate-600">Granted when working on Sunday with written approval; valid 30 days.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-900">Maternity Benefit</td>
                    <td className="px-4 py-2.5 text-brand-sky font-bold">Statutory</td>
                    <td className="px-4 py-2.5 text-slate-600">Strictly per the Maternity Benefit Act, 1961.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Policy Sections */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-2">
              <h3 className="text-base font-heading font-bold text-slate-900">1. Policy Objective & Culture</h3>
              <p>
                CYGNUSA Technologies follows a performance-driven and client-centric work culture. The purpose of this policy is to provide employees with reasonable leave benefits while ensuring business continuity, customer commitments, and operational efficiency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-2">
              <h3 className="text-base font-heading font-bold text-slate-900">2. Working Days & Standard Hours</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Working Days: Monday to Saturday</li>
                <li>Weekly Off: Sunday</li>
                <li>Standard Working Hours: 9 Hours per day including breaks</li>
                <li>Employees are expected to maintain regular attendance and punctuality.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-2">
              <h3 className="text-base font-heading font-bold text-slate-900">3. Planned Leave Notice Periods</h3>
              <p>Employees must submit leave requests through HRMS/Email with the following advance notice periods:</p>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                  <div className="font-bold text-slate-900">1 Day Leave</div>
                  <div className="text-brand-sky text-xs font-semibold">2 Working Days Notice</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                  <div className="font-bold text-slate-900">2-3 Days Leave</div>
                  <div className="text-brand-sky text-xs font-semibold">5 Working Days Notice</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                  <div className="font-bold text-slate-900">&gt; 3 Days Leave</div>
                  <div className="text-brand-sky text-xs font-semibold">7 Working Days Notice</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-2">
              <h3 className="text-base font-heading font-bold text-slate-900">4. Leave Clubbing & Attendance Compliance</h3>
              <p>
                Employees may not combine more than 5 consecutive working days of leave without Department Head approval. Unauthorized absence for 3 consecutive working days results in a show-cause notice; absence exceeding 7 consecutive working days without communication may be deemed abandonment of employment under due process.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
