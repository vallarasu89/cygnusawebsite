import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/companyData';

export const TermsConditions: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title="Terms & Conditions — CYGNUSA Technologies"
        description="Terms and conditions governing the use of CYGNUSA Technologies websites, consultation services, and digital software suites."
        canonicalPath="/terms-conditions"
      />

      <Breadcrumb items={[{ label: "Terms & Conditions" }]} />

      <section className="py-12 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            CYGNUSA Technologies Private Limited (CIN: {COMPANY_INFO.cin}) • Last Updated: January 2026
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-base font-heading font-bold text-slate-900">1. Master Services Agreements (MSA)</h2>
            <p>
              Use of this website is governed by these Terms. Enterprise consulting, Virtual CTO engagements, software engineering contracts, and Managed IT Services (MSP) are governed by mutually executed Master Services Agreements (MSA) and Statements of Work (SOW) executed between the client and CYGNUSA Technologies Private Limited.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-base font-heading font-bold text-slate-900">2. Intellectual Property Rights</h2>
            <p>
              All software, source code, design systems, and custom platform components engineered by CYGNUSA under bespoke development contracts become the exclusive intellectual property of the commissioning client upon receipt of final milestone payments, as specified in individual SOWs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-base font-heading font-bold text-slate-900">3. Authorized Reseller Terms</h2>
            <p>
              Third-party hardware (HP, Lenovo, Zebra, Matica) and software licenses (Microsoft 365, Google Workspace, Sophos, Adobe, AWS) supplied by CYGNUSA are subject to the respective end-user license agreements (EULA) and manufacturer warranties of those technology providers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-base font-heading font-bold text-slate-900">4. Jurisdiction & Governing Law</h2>
            <p>
              These Terms and any contractual disputes arising from services rendered shall be governed by and construed in accordance with the laws of India, subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
