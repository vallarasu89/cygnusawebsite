import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title="Privacy Policy — CYGNUSA Technologies"
        description="CYGNUSA Technologies privacy policy, compliance with ISO/IEC 27001:2022 standards, and data governance practices."
        canonicalPath="/privacy-policy"
      />

      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      <section className="py-12 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Privacy & Information Security Policy
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            CYGNUSA Technologies Private Limited • ISO/IEC 27001:2022 Certified ISMS • Last Updated: January 2026
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-base font-heading font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              1. Commitment to ISO 27001 Certified Security
            </h2>
            <p>
              CYGNUSA Technologies Private Limited ("CYGNUSA", "we", "us", or "our") is certified under ISO/IEC 27001:2022 for Information Security Management Systems (ISMS). We operate zero-trust architectural boundaries to protect all personal data, client intellectual property, and consultation inquiry submissions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-base font-heading font-bold text-slate-900">2. Data We Collect</h2>
            <p>
              We collect information that you submit voluntarily via our consultation booking modals, contact forms, or career application forms (including full name, corporate email address, telephone contact, company name, and attached resume files). We do not sell, rent, or trade your personal data with third-party data brokers under any circumstances.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-base font-heading font-bold text-slate-900">3. Zero Data Retention Policy for Enterprise AI</h2>
            <p>
              When clients engage our AI Integration Services, we enforce enterprise API tier agreements (Azure OpenAI, AWS Bedrock, Google Cloud Vertex AI) ensuring client proprietary source code, internal spreadsheets, and customer data are never retained, logged for model retraining, or exposed to public LLM systems.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-base font-heading font-bold text-slate-900">4. Contact Our Data Protection Officer</h2>
            <p>
              For data privacy inquiries, access requests, or deletion requests, contact our Compliance Office:
            </p>
            <div className="text-xs text-brand-deep font-mono pt-1 font-semibold">
              Email: sales@cygnusa.in | Legal: 50, Perumal Koil Garden, R.A. Puram, Chennai – 600028, India.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
