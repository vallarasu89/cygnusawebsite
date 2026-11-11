import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-[#cbd5e1] px-4 sm:px-8 lg:px-20 pt-16 pb-10 border-t border-[#1E293B] relative z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between">
          
          {/* Brand & Certifications */}
          <div className="lg:max-w-[340px] space-y-5">
            <Logo variant="white" size="lg" />
            <p className="text-[15px] leading-relaxed text-[#94a3b8]">
              Innovating with Technology, Delivering with Strategy.
            </p>
            <div className="flex gap-2.5 flex-wrap pt-2">
              <span className="border border-[#64748B] text-slate-300 rounded-full px-3 py-1 text-xs font-medium">
                ISO 27001
              </span>
              <span className="border border-[#64748B] text-slate-300 rounded-full px-3 py-1 text-xs font-medium">
                ISO 20000-1:2018
              </span>
              <span className="border border-[#64748B] text-slate-300 rounded-full px-3 py-1 text-xs font-medium">
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 text-[15px]">
            {/* SERVICES */}
            <div className="flex flex-col gap-3">
              <b className="font-heading font-semibold text-xs tracking-[1.5px] text-white uppercase mb-1">
                Services
              </b>
              <Link to="/services/virtual-cto-strategic-advisory" className="hover:text-[#0EA5E9] transition-colors">
                Virtual CTO
              </Link>
              <Link to="/services/managed-it-cloud-services" className="hover:text-[#0EA5E9] transition-colors">
                Managed IT
              </Link>
              <Link to="/services/security-compliance" className="hover:text-[#0EA5E9] transition-colors">
                Security &amp; Compliance
              </Link>
              <Link to="/services/software-product-engineering" className="hover:text-[#0EA5E9] transition-colors">
                Software Engineering
              </Link>
              <Link to="/services/ai-integration-automation" className="hover:text-[#0EA5E9] transition-colors">
                AI Integration
              </Link>
              <Link to="/services/staff-augmentation" className="hover:text-[#0EA5E9] transition-colors">
                Staff Augmentation
              </Link>
              <Link to="/services/offshore-capability-development-center" className="hover:text-[#0EA5E9] transition-colors">
                Offshore Center
              </Link>
              <Link to="/services/software-hardware-reseller" className="hover:text-[#0EA5E9] transition-colors">
                Reseller
              </Link>
            </div>

            {/* COMPANY */}
            <div className="flex flex-col gap-3">
              <b className="font-heading font-semibold text-xs tracking-[1.5px] text-white uppercase mb-1">
                Company
              </b>
              <Link to="/about" className="hover:text-[#0EA5E9] transition-colors">
                About
              </Link>
              <Link to="/case-studies" className="hover:text-[#0EA5E9] transition-colors">
                Case studies
              </Link>
              <Link to="/team" className="hover:text-[#0EA5E9] transition-colors">
                Our team
              </Link>
              <Link to="/careers" className="hover:text-[#0EA5E9] transition-colors">
                Careers
              </Link>
              <Link to="/insights" className="hover:text-[#0EA5E9] transition-colors">
                Insights
              </Link>
              <Link to="/contact" className="hover:text-[#0EA5E9] transition-colors">
                Contact
              </Link>
            </div>

            {/* CONNECT */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <b className="font-heading font-semibold text-xs tracking-[1.5px] text-white uppercase mb-1">
                Connect
              </b>
              <span className="text-slate-300">www.cygnusa.in</span>
              <a href="mailto:sales@cygnusa.in" className="hover:text-[#0EA5E9] transition-colors">
                sales@cygnusa.in
              </a>
              <a href="tel:+919884081174" className="hover:text-[#0EA5E9] transition-colors">
                +91-98840-81174
              </a>
              <a 
                href={COMPANY_INFO.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#0EA5E9] transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-slate-300">Instagram @cygnusatech</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#94a3b8]">
          <span>© 2026 CYGNUSA Technologies. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
