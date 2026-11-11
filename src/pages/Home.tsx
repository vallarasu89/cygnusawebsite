import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { TEAM_MEMBERS } from '../data/teamData';
import { TrusteeLogosSection } from '../components/TrusteeLogosSection';

interface HomeProps {
  onOpenConsultation?: (service?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation }) => {
  const handleConsultation = (serviceTitle?: string) => {
    if (onOpenConsultation) {
      onOpenConsultation(serviceTitle);
    }
  };

  return (
    <div className="w-full bg-[#F0F9FF] text-[#0F172A] font-body selection:bg-[#0EA5E9] selection:text-white overflow-hidden">
      <SEOHead
        title="6th Generation IT Frontier & Strategic Enterprise Partner"
        description="CYGNUSA Technologies is an ISO/IEC 27001:2022 certified IT services and consulting firm delivering Virtual CTO advisory, AI integration, application modernization, and enterprise cloud operations."
        canonicalPath="/"
      />

      {/* ======================================================== */}
      {/* 2. HERO SECTION */}
      {/* ======================================================== */}
      <section
        id="top"
        className="relative overflow-hidden bg-[#0F172A] px-6 sm:px-12 lg:px-20 py-20 lg:py-24 min-h-[780px] flex items-center box-border"
      >
        {/* Radial Ambient Glow */}
        <div
          className="absolute -right-48 -top-24 w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.35) 0%, rgba(30,58,138,0.25) 40%, rgba(15,23,42,0) 70%)'
          }}
        />

        <div className="max-w-[1360px] mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Text Content */}
          <div className="flex-1 max-w-[700px] text-center lg:text-left">
            <div className="font-heading font-semibold text-xs sm:text-[13px] tracking-[2px] text-[#0EA5E9] uppercase mb-5">
              6TH GENERATION IT FRONTIER · CHENNAI
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[50px] xl:text-[52px] text-white leading-[1.12] tracking-[-1px]">
              Technology that moves your business <span className="text-[#0EA5E9]">forward.</span>
            </h1>

            <p className="mt-8 text-base sm:text-xl text-[#cbd5e1] leading-relaxed max-w-[600px] mx-auto lg:mx-0 font-normal">
              From strategic IT leadership to AI-powered innovation, CYGNUSA helps businesses build, secure, modernise and scale their technology ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-11 flex-wrap">
              <button
                type="button"
                onClick={() => handleConsultation()}
                className="btn w-full sm:w-auto bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] font-semibold text-base px-8 py-4 rounded-[5px] transition-all cursor-pointer shadow-lg active:scale-95 text-center"
              >
                Book a Free Consultation
              </button>

              <Link
                to="/services"
                className="btn w-full sm:w-auto border-[1.5px] border-[#0EA5E9] hover:bg-[#0EA5E9]/10 text-white font-semibold text-base px-8 py-[14px] rounded-[5px] transition-all text-center"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>

          {/* Right Hero Graphic: Stacked Isometric Cubes & Network */}
          <div className="float flex-shrink-0 w-full max-w-[460px] lg:max-w-[560px] aspect-square relative flex items-center justify-center">
            <svg
              viewBox="0 0 560 560"
              className="w-full h-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="gTop" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0EA5E9" />
                </linearGradient>
                <linearGradient id="gLeft" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1E3A8A" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>
                <linearGradient id="gRight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0369a1" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>
              </defs>

              {/* Orbital Ellipses */}
              <ellipse cx="280" cy="300" rx="250" ry="90" fill="none" stroke="#0EA5E9" strokeOpacity="0.35" strokeDasharray="4 8" />
              <ellipse cx="280" cy="300" rx="190" ry="68" fill="none" stroke="#06B6D4" strokeOpacity="0.3" />

              {/* Connecting Telemetry Vectors */}
              <g stroke="#0EA5E9" strokeOpacity="0.45" strokeWidth="1">
                <line x1="60" y1="120" x2="200" y2="210" />
                <line x1="500" y1="110" x2="360" y2="200" />
                <line x1="70" y1="470" x2="210" y2="380" />
                <line x1="500" y1="480" x2="360" y2="390" />
                <line x1="60" y1="120" x2="70" y2="470" />
                <line x1="500" y1="110" x2="500" y2="480" />
              </g>

              {/* Cyan Satellites */}
              <g fill="#06B6D4">
                <circle cx="60" cy="120" r="6" />
                <circle cx="500" cy="110" r="6" />
                <circle cx="70" cy="470" r="6" />
                <circle cx="500" cy="480" r="6" />
                <circle cx="280" cy="40" r="4" />
                <circle cx="280" cy="530" r="4" />
              </g>

              {/* Stacked Isometric Cubes (Figma Coordinates) */}
              {/* Bottom Large Cube */}
              <g transform="translate(280 330)">
                <polygon points="0,60 -110,0 0,-60 110,0" fill="url(#gTop)" opacity="0.95" />
                <polygon points="-110,0 0,60 0,150 -110,90" fill="url(#gLeft)" />
                <polygon points="110,0 0,60 0,150 110,90" fill="url(#gRight)" />
              </g>

              {/* Middle Medium Cube */}
              <g transform="translate(280 230)">
                <polygon points="0,45 -82,0 0,-45 82,0" fill="url(#gTop)" />
                <polygon points="-82,0 0,45 0,105 -82,60" fill="url(#gLeft)" />
                <polygon points="82,0 0,45 0,105 82,60" fill="url(#gRight)" />
              </g>

              {/* Top Small Prism */}
              <g transform="translate(280 150)">
                <polygon points="0,30 -54,0 0,-30 54,0" fill="#fff" opacity="0.92" />
                <polygon points="-54,0 0,30 0,70 -54,40" fill="#0EA5E9" opacity="0.9" />
                <polygon points="54,0 0,30 0,70 54,40" fill="#1E3A8A" />
              </g>

              {/* Glass Frosted Tiles: AI, Cloud, Security */}
              <g>
                <rect x="40" y="250" width="130" height="64" rx="12" fill="#F0F9FF" fillOpacity="0.1" stroke="#F0F9FF" strokeOpacity="0.35" />
                <text x="105" y="288" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="600" fontSize="16" fill="#fff">AI</text>

                <rect x="400" y="190" width="130" height="64" rx="12" fill="#F0F9FF" fillOpacity="0.1" stroke="#F0F9FF" strokeOpacity="0.35" />
                <text x="465" y="228" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="600" fontSize="16" fill="#fff">Cloud</text>

                <rect x="395" y="400" width="140" height="64" rx="12" fill="#F0F9FF" fillOpacity="0.1" stroke="#F0F9FF" strokeOpacity="0.35" />
                <text x="465" y="438" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="600" fontSize="16" fill="#fff">Security</text>
              </g>
            </svg>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. TRUST & CERTIFICATIONS STRIP */}
      {/* ======================================================== */}
      <section className="bg-white px-6 sm:px-12 lg:px-20 py-16 sm:py-20 box-border border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">

            {/* Left Certification Credentials */}
            <div className="lg:w-[340px] shrink-0 space-y-5">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#0F172A] leading-snug">
                Customers trusted us across nine sectors
              </h2>

              <div className="flex gap-2.5 flex-wrap">
                <span className="border-[1.5px] border-[#1E3A8A] text-[#1E3A8A] rounded-full px-4 py-2 font-semibold text-xs sm:text-[13px]">
                  ISO 27001
                </span>
                <span className="border-[1.5px] border-[#1E3A8A] text-[#1E3A8A] rounded-full px-4 py-2 font-semibold text-xs sm:text-[13px]">
                  ISO 20000-1:2018
                </span>
                <span className="border-[1.5px] border-[#1E3A8A] text-[#1E3A8A] rounded-full px-4 py-2 font-semibold text-xs sm:text-[13px]">
                  ISO 9001:2015
                </span>
              </div>

              <p className="text-xs sm:text-[13px] text-[#64748B]">
                Certifications as shown in CYGNUSA credentials 2026.
              </p>
            </div>

            {/* Right Verified Client Logos */}
            <div className="flex-1 min-w-0 w-full">
              <TrusteeLogosSection />
            </div>

          </div>

          {/* Authorised Reseller Ribbon */}
          <div className="mt-11 pt-8 border-t border-slate-200 flex flex-wrap items-center gap-6 sm:gap-8">
            <span className="font-heading font-semibold text-xs tracking-[1.5px] text-[#1E3A8A] uppercase">
              Authorised Reseller For
            </span>
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 font-heading font-semibold text-sm sm:text-base text-[#64748B]">
              <span>Microsoft</span>
              <span>Microsoft Azure</span>
              <span>Google</span>
              <span>AWS</span>
              <span>Sophos</span>
              <span>Adobe</span>
              <span>Zoho</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. INTRO / 25+ YEARS SPLIT SECTION */}
      {/* ======================================================== */}
      <section id="about" className="flex flex-col lg:flex-row min-h-[640px]">
        {/* Left Half: 25+ Years Leadership Graphic */}
        <div className="flex-1 bg-[#1E3A8A] relative overflow-hidden p-10 sm:p-16 lg:p-20 flex flex-col justify-end min-h-[460px] text-white">
          <svg
            viewBox="0 0 600 500"
            className="absolute inset-0 w-full h-full object-cover opacity-55 pointer-events-none"
            aria-hidden="true"
          >
            <g stroke="#0EA5E9" strokeOpacity="0.5">
              <line x1="80" y1="80" x2="300" y2="180" />
              <line x1="300" y1="180" x2="520" y2="90" />
              <line x1="300" y1="180" x2="250" y2="380" />
              <line x1="250" y1="380" x2="470" y2="420" />
              <line x1="80" y1="80" x2="120" y2="300" />
              <line x1="120" y1="300" x2="250" y2="380" />
            </g>
            <g fill="#06B6D4">
              <circle cx="80" cy="80" r="7" />
              <circle cx="300" cy="180" r="11" />
              <circle cx="520" cy="90" r="7" />
              <circle cx="250" cy="380" r="9" />
              <circle cx="470" cy="420" r="6" />
              <circle cx="120" cy="300" r="6" />
            </g>
          </svg>

          <div className="relative font-heading font-bold text-5xl sm:text-7xl lg:text-[84px] leading-none text-white tracking-[-2px]">
            25+
          </div>
          <div className="relative font-medium text-base sm:text-lg text-[#F0F9FF] mt-2">
            years of leadership experience
          </div>
        </div>

        {/* Right Half: Positioning & Four Pillars */}
        <div className="flex-1 bg-[#F0F9FF] p-10 sm:p-16 lg:p-20 flex flex-col justify-center gap-6">
          <div className="font-heading font-semibold text-xs sm:text-[13px] tracking-[2px] text-[#1E3A8A] uppercase">
            WHO WE ARE
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#0F172A] leading-[1.2] tracking-tight">
            A technology partner, not just a service provider.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-[#0F172A] max-w-[560px]">
            CYGNUSA Technologies is a 6th Generation IT services and consulting firm helping small and medium businesses build, modernise, secure and scale their technology ecosystem. With deep engineering expertise and a business-first mindset, we act as a long-term technology partner.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mt-2 max-w-[560px]">
            <div className="border-t-2 border-[#0EA5E9] pt-3.5 font-heading font-semibold text-base text-[#0F172A]">
              Global delivery model
            </div>
            <div className="border-t-2 border-[#0EA5E9] pt-3.5 font-heading font-semibold text-base text-[#0F172A]">
              Cloud &amp; AI first methodology
            </div>
            <div className="border-t-2 border-[#0EA5E9] pt-3.5 font-heading font-semibold text-base text-[#0F172A]">
              Security-driven process
            </div>
            <div className="border-t-2 border-[#0EA5E9] pt-3.5 font-heading font-semibold text-base text-[#0F172A]">
              Business-first mindset
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. ADVISE · BUILD · RUN ARCHITECTURE */}
      {/* ======================================================== */}
      <section className="bg-white px-6 sm:px-12 lg:px-20 py-20 lg:py-28 box-border">
        <div className="max-w-[1360px] mx-auto">
          <div className="font-heading font-semibold text-xs sm:text-[13px] tracking-[2px] text-[#1E3A8A] uppercase">
            ONE STRATEGIC PARTNER
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] text-[#0F172A] tracking-tight leading-tight mt-3 max-w-[760px]">
            Advise. Build. Run.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12 items-stretch">

            {/* 01 Advise */}
            <div className="lg:col-span-4 bg-[#1E3A8A] text-white rounded-[20px] p-8 sm:p-10 flex flex-col gap-4 min-h-[420px] lg:mt-8 shadow-lg">
              <div className="font-heading font-extrabold text-4xl lg:text-[44px] text-[#0EA5E9] leading-none">
                01
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-white">
                Advise
              </h3>
              <p className="text-base sm:text-[17px] leading-relaxed text-[#e0f2fe]">
                Virtual CTO and strategic advisory. Senior technology leadership embedded in your business, without the cost of a full-time CTO.
              </p>
              <Link
                to="/services/virtual-cto-strategic-advisory"
                className="mt-auto font-semibold text-[15px] text-[#0EA5E9] hover:underline inline-flex items-center gap-1"
              >
                Virtual CTO &amp; Strategic Advisory →
              </Link>
            </div>

            {/* 02 Build (Primary Standout Card) */}
            <div className="lg:col-span-4 bg-[#0F172A] text-white rounded-[20px] p-8 sm:p-10 flex flex-col gap-4 min-h-[460px] relative overflow-hidden shadow-2xl border border-slate-800">
              <div
                className="absolute -right-16 -top-16 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(14,165,233,0.5), rgba(15,23,42,0) 70%)'
                }}
              />
              <div className="relative font-heading font-extrabold text-4xl lg:text-[44px] text-[#0EA5E9] leading-none">
                02
              </div>
              <h3 className="relative font-heading font-bold text-2xl sm:text-[26px] text-white">
                Build
              </h3>
              <p className="relative text-base sm:text-[17px] leading-relaxed text-[#cbd5e1]">
                Software engineering, UI/UX, AI and digital transformation. Web, mobile and enterprise platforms, agile, secure by design and cloud-native.
              </p>
              <Link
                to="/services/software-product-engineering"
                className="relative mt-auto font-semibold text-[15px] text-[#0EA5E9] hover:underline inline-flex items-center gap-1"
              >
                Software, AI &amp; Product Engineering →
              </Link>
            </div>

            {/* 03 Run */}
            <div className="lg:col-span-4 bg-[#F0F9FF] border-[1.5px] border-[#1E3A8A] text-[#0F172A] rounded-[20px] p-8 sm:p-10 flex flex-col gap-4 min-h-[420px] lg:mt-16 shadow-sm">
              <div className="font-heading font-extrabold text-4xl lg:text-[44px] text-[#1E3A8A] leading-none">
                03
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-[#0F172A]">
                Run
              </h3>
              <p className="text-base sm:text-[17px] leading-relaxed text-[#0F172A]">
                Managed IT, cloud, DevOps, security and support. Enterprise-grade reliability with an SLA-driven support model.
              </p>
              <Link
                to="/services/managed-it-cloud-services"
                className="mt-auto font-semibold text-[15px] text-[#1E3A8A] hover:underline inline-flex items-center gap-1"
              >
                Managed IT, Cloud &amp; Security →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. SERVICES 8-CARD GRID */}
      {/* ======================================================== */}
      <section id="services" className="px-6 sm:px-12 lg:px-20 py-20 lg:py-28 box-border bg-[#F0F9FF]">
        <div className="max-w-[1360px] mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-14">
            <div>
              <div className="font-heading font-semibold text-xs sm:text-[13px] tracking-[2px] text-[#1E3A8A] uppercase">
                SERVICES
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] text-[#0F172A] tracking-tight leading-tight mt-3">
                End-to-end technology.<br />One strategic partner.
              </h2>
            </div>

            <Link
              to="/services"
              className="btn border-[1.5px] border-[#1E3A8A] text-[#1E3A8A] font-semibold text-[15px] px-6 py-3 rounded-[5px] inline-flex items-center self-start sm:self-auto hover:bg-[#1E3A8A] hover:text-white transition-colors"
            >
              View all services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Virtual CTO */}
            <Link
              to="/services/virtual-cto-strategic-advisory"
              className="svc bg-white border-[1.5px] border-[#dbeafe] rounded-2xl p-7 flex flex-col gap-3.5 min-h-[260px] shadow-sm"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 3v4M12 17v4" />
              </svg>
              <h3 className="font-heading font-bold text-[17px] leading-snug text-[#0F172A]">
                Virtual CTO &amp; Strategic Advisory
              </h3>
              <p className="text-[15px] leading-relaxed text-[#64748B]">
                Roadmap, architecture, vendor and cost optimisation, board-level advisory.
              </p>
            </Link>

            {/* 2. Managed IT */}
            <Link
              to="/services/managed-it-cloud-services"
              className="svc bg-white border-[1.5px] border-[#dbeafe] rounded-2xl p-7 flex flex-col gap-3.5 min-h-[260px] shadow-sm"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1A4.5 4.5 0 0 1 17 18z" />
              </svg>
              <h3 className="font-heading font-bold text-[17px] leading-snug text-[#0F172A]">
                Managed IT &amp; Cloud Services
              </h3>
              <p className="text-[15px] leading-relaxed text-[#64748B]">
                Helpdesk, cloud, network, backup and DR with an SLA-driven model.
              </p>
            </Link>

            {/* 3. Security */}
            <Link
              to="/services/security-compliance"
              className="svc bg-white border-[1.5px] border-[#dbeafe] rounded-2xl p-7 flex flex-col gap-3.5 min-h-[260px] shadow-sm"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" />
              </svg>
              <h3 className="font-heading font-bold text-[17px] leading-snug text-[#0F172A]">
                Security &amp; Compliance
              </h3>
              <p className="text-[15px] leading-relaxed text-[#64748B]">
                Endpoint detection and response, anti-ransomware, continuous monitoring.
              </p>
            </Link>

            {/* 4. Software Engineering */}
            <Link
              to="/services/software-product-engineering"
              className="svc bg-white border-[1.5px] border-[#dbeafe] rounded-2xl p-7 flex flex-col gap-3.5 min-h-[260px] shadow-sm"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
              </svg>
              <h3 className="font-heading font-bold text-[17px] leading-snug text-[#0F172A]">
                Software &amp; Product Engineering
              </h3>
              <p className="text-[15px] leading-relaxed text-[#64748B]">
                Web, mobile, enterprise platforms, MVPs and application modernisation.
              </p>
            </Link>

            {/* 5. AI Integration */}
            <Link
              to="/services/ai-integration-automation"
              className="svc bg-white border-[1.5px] border-[#dbeafe] rounded-2xl p-7 flex flex-col gap-3.5 min-h-[260px] shadow-sm"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
              </svg>
              <h3 className="font-heading font-bold text-[17px] leading-snug text-[#0F172A]">
                AI Integration &amp; Automation
              </h3>
              <p className="text-[15px] leading-relaxed text-[#64748B]">
                AI wrappers, API integrations, workflow automation, chatbots and agents.
              </p>
            </Link>

            {/* 6. Staff Augmentation */}
            <Link
              to="/services/staff-augmentation"
              className="svc bg-white border-[1.5px] border-[#dbeafe] rounded-2xl p-7 flex flex-col gap-3.5 min-h-[260px] shadow-sm"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.5c3 0 5 2 5 5" />
              </svg>
              <h3 className="font-heading font-bold text-[17px] leading-snug text-[#0F172A]">
                Staff Augmentation
              </h3>
              <p className="text-[15px] leading-relaxed text-[#64748B]">
                Dedicated developers and engineers, short or long term, remote or hybrid.
              </p>
            </Link>

            {/* 7. Offshore OCDC */}
            <Link
              to="/services/offshore-capability-development-center"
              className="svc bg-white border-[1.5px] border-[#dbeafe] rounded-2xl p-7 flex flex-col gap-3.5 min-h-[260px] shadow-sm"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
              </svg>
              <h3 className="font-heading font-bold text-[17px] leading-snug text-[#0F172A]">
                Offshore Capability Development Center
              </h3>
              <p className="text-[15px] leading-relaxed text-[#64748B]">
                A dedicated offshore tech team, built for scale and tailored to your culture.
              </p>
            </Link>

            {/* 8. Reseller */}
            <Link
              to="/services/software-hardware-reseller"
              className="svc bg-white border-[1.5px] border-[#dbeafe] rounded-2xl p-7 flex flex-col gap-3.5 min-h-[260px] shadow-sm"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" />
              </svg>
              <h3 className="font-heading font-bold text-[17px] leading-snug text-[#0F172A]">
                Software &amp; Hardware Reseller
              </h3>
              <p className="text-[15px] leading-relaxed text-[#64748B]">
                Licensing made simple and compliant, plus deployment-ready hardware.
              </p>
            </Link>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. INDUSTRIES BENTO GRID */}
      {/* ======================================================== */}
      <section id="industries" className="bg-[#0F172A] px-6 sm:px-12 lg:px-20 py-20 lg:py-28 box-border text-white">
        <div className="max-w-[1360px] mx-auto">
          <div className="font-heading font-semibold text-xs sm:text-[13px] tracking-[2px] text-[#0EA5E9] uppercase">
            INDUSTRIES
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] text-white tracking-tight leading-tight mt-3 max-w-[820px]">
            Built for the sectors that keep things moving.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mt-14">

            {/* Tile 1: Aviation & Hospitality */}
            <Link
              to="/industries/aviation-aerospace"
              className="ind md:col-span-3 min-h-[280px] sm:min-h-[300px] rounded-[20px] p-8 sm:p-9 flex flex-col justify-end border border-[#0EA5E9]/35"
              style={{
                background: 'linear-gradient(135deg, #1E3A8A, #0F172A)'
              }}
            >
              <h3 className="font-heading font-bold text-xl sm:text-[22px] text-white">
                Aviation &amp; Hospitality
              </h3>
              <p className="mt-2.5 text-sm sm:text-[15px] text-[#cbd5e1]">
                Airportzo, Brandmidas, Holiday Seasonz, MGM Muthu Hotels and Resorts
              </p>
            </Link>

            {/* Tile 2: EV & FuelTech */}
            <Link
              to="/industries/logistics-supply-chain"
              className="ind md:col-span-3 min-h-[280px] sm:min-h-[300px] rounded-[20px] p-8 sm:p-9 flex flex-col justify-end"
              style={{
                background: 'linear-gradient(135deg, #0369a1, #1E3A8A)'
              }}
            >
              <h3 className="font-heading font-bold text-xl sm:text-[22px] text-white">
                EV &amp; FuelTech
              </h3>
              <p className="mt-2.5 text-sm sm:text-[15px] text-[#e0f2fe]">
                GoZap, GoFuel
              </p>
            </Link>

            {/* Tile 3: Government */}
            <Link
              to="/industries/government-public-sector"
              className="ind md:col-span-2 min-h-[220px] sm:min-h-[240px] rounded-[20px] p-7 bg-[#1E293B] border border-slate-700/60 flex flex-col justify-end"
            >
              <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                Government
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#cbd5e1]">
                Airports Authority of India, NIFT, NITTTR Chennai
              </p>
            </Link>

            {/* Tile 4: Manufacturing & Automotive */}
            <Link
              to="/industries/manufacturing-automotive"
              className="ind md:col-span-2 min-h-[220px] sm:min-h-[240px] rounded-[20px] p-7 flex flex-col justify-end"
              style={{
                background: 'linear-gradient(135deg, #1E3A8A, #1E293B)'
              }}
            >
              <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                Manufacturing &amp; Automotive
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#cbd5e1]">
                TVS, Stellantis, AGS, Ognitron, Watertec
              </p>
            </Link>

            {/* Tile 5: FinTech */}
            <Link
              to="/industries/banking-financial-services-insurance"
              className="ind md:col-span-2 min-h-[220px] sm:min-h-[240px] rounded-[20px] p-7 bg-[#1E293B] border border-slate-700/60 flex flex-col justify-end"
            >
              <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                FinTech
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#cbd5e1]">
                YYC Accounting, Gold Stake
              </p>
            </Link>

            {/* Tile 6: Edutech */}
            <Link
              to="/industries/education-edtech"
              className="ind md:col-span-2 min-h-[190px] sm:min-h-[200px] rounded-[20px] p-7 flex flex-col justify-end"
              style={{
                background: 'linear-gradient(135deg, #0369a1, #0F172A)'
              }}
            >
              <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                Edutech
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#e0f2fe]">
                Academian, Mediant Labs, Buddy Mentor, Diya Coaching Academy
              </p>
            </Link>

            {/* Tile 7: Technology */}
            <Link
              to="/industries"
              className="ind md:col-span-2 min-h-[190px] sm:min-h-[200px] rounded-[20px] p-7 bg-[#1E293B] border border-slate-700/60 flex flex-col justify-end"
            >
              <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                Technology
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#cbd5e1]">
                Coforge, Centum Learning, Rebus
              </p>
            </Link>

            {/* Tile 8: Customer Experience */}
            <Link
              to="/industries"
              className="ind md:col-span-2 min-h-[190px] sm:min-h-[200px] rounded-[20px] p-7 flex flex-col justify-end"
              style={{
                background: 'linear-gradient(135deg, #1E3A8A, #0EA5E9)'
              }}
            >
              <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                Customer Experience
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#F0F9FF]">
                AccessCX, TLCx
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. FEATURED CASE STUDIES */}
      {/* ======================================================== */}
      <section id="cases" className="bg-white px-6 sm:px-12 lg:px-20 py-20 lg:py-28 box-border">
        <div className="max-w-[1360px] mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-14">
            <div>
              <div className="font-heading font-semibold text-xs sm:text-[13px] tracking-[2px] text-[#1E3A8A] uppercase">
                FEATURED CASE STUDIES
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] text-[#0F172A] tracking-tight leading-tight mt-3">
                Real platforms. Real operations.
              </h2>
            </div>

            <Link
              to="/case-studies"
              className="btn border-[1.5px] border-[#1E3A8A] text-[#1E3A8A] font-semibold text-[15px] px-6 py-3 rounded-[5px] inline-flex items-center self-start sm:self-auto hover:bg-[#1E3A8A] hover:text-white transition-colors"
            >
              All 17 case studies
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* Case 1: APAC Dice App */}
            <Link
              to="/case-studies/apac-dice-app"
              className="cs flex flex-col rounded-2xl overflow-hidden border-[1.5px] border-[#dbeafe] bg-[#F0F9FF] shadow-sm"
            >
              <div
                className="h-[200px] flex items-center justify-center text-[#F0F9FF] font-heading font-semibold text-[13px]"
                style={{ background: 'linear-gradient(135deg, #1E3A8A, #0EA5E9)' }}
              >
                [Project visual – APAC Dice App]
              </div>
              <div className="p-7 flex flex-col gap-2.5 flex-1">
                <span className="font-heading font-semibold text-xs tracking-[1.2px] text-[#1E3A8A] uppercase">
                  AFTER-SALES, PARTS &amp; INVENTORY
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-[19px] text-[#0F172A]">
                  APAC Dice App
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Client: All Pro Auto Consultant
                </p>
                <p className="text-[15px] leading-relaxed text-[#0F172A]">
                  End-to-end platform for onsite parts inspection, verification and consolidation with real-time process control.
                </p>
                <span className="csgo mt-auto pt-2 font-semibold text-[15px] text-[#1E3A8A] inline-flex items-center gap-1">
                  View case study →
                </span>
              </div>
            </Link>

            {/* Case 2: GoFuel Ecosystem */}
            <Link
              to="/case-studies/gofuel-ecosystem"
              className="cs flex flex-col rounded-2xl overflow-hidden border-[1.5px] border-[#dbeafe] bg-[#F0F9FF] shadow-sm"
            >
              <div
                className="h-[200px] flex items-center justify-center text-[#F0F9FF] font-heading font-semibold text-[13px]"
                style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A8A)' }}
              >
                [Project visual – GoFuel Ecosystem]
              </div>
              <div className="p-7 flex flex-col gap-2.5 flex-1">
                <span className="font-heading font-semibold text-xs tracking-[1.2px] text-[#1E3A8A] uppercase">
                  LICENSED HSD FUEL DISTRIBUTION
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-[19px] text-[#0F172A]">
                  GoFuel Ecosystem
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Client: GoFuel
                </p>
                <p className="text-[15px] leading-relaxed text-[#0F172A]">
                  Role-based digital platform for fuel ordering, secure delivery, real-time tracking and centralised control.
                </p>
                <span className="csgo mt-auto pt-2 font-semibold text-[15px] text-[#1E3A8A] inline-flex items-center gap-1">
                  View case study →
                </span>
              </div>
            </Link>

            {/* Case 3: GoZap EV Fleet */}
            <Link
              to="/case-studies/gozap-ev-fleet"
              className="cs flex flex-col rounded-2xl overflow-hidden border-[1.5px] border-[#dbeafe] bg-[#F0F9FF] shadow-sm"
            >
              <div
                className="h-[200px] flex items-center justify-center text-[#F0F9FF] font-heading font-semibold text-[13px]"
                style={{ background: 'linear-gradient(135deg, #0369a1, #06B6D4)' }}
              >
                [Project visual – GoZap EV Fleet]
              </div>
              <div className="p-7 flex flex-col gap-2.5 flex-1">
                <span className="font-heading font-semibold text-xs tracking-[1.2px] text-[#1E3A8A] uppercase">
                  EV FLEET RENTAL &amp; 3PL
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-[19px] text-[#0F172A]">
                  EV Fleet Management Platform
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Client: GoZap
                </p>
                <p className="text-[15px] leading-relaxed text-[#0F172A]">
                  Unified fleet platform for ordering, secure fleet operations and centralised administrative control.
                </p>
                <span className="csgo mt-auto pt-2 font-semibold text-[15px] text-[#1E3A8A] inline-flex items-center gap-1">
                  View case study →
                </span>
              </div>
            </Link>

            {/* Case 4: HPCL SOP */}
            <Link
              to="/case-studies/hpcl-sop-management"
              className="cs flex flex-col rounded-2xl overflow-hidden border-[1.5px] border-[#dbeafe] bg-[#F0F9FF] shadow-sm"
            >
              <div
                className="h-[200px] flex items-center justify-center text-[#F0F9FF] font-heading font-semibold text-[13px]"
                style={{ background: 'linear-gradient(135deg, #1E3A8A, #0F172A)' }}
              >
                [Project visual – HPCL SOP]
              </div>
              <div className="p-7 flex flex-col gap-2.5 flex-1">
                <span className="font-heading font-semibold text-xs tracking-[1.2px] text-[#1E3A8A] uppercase">
                  FUEL RETAIL &amp; OUTLET OPERATIONS
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-[19px] text-[#0F172A]">
                  SOP Management System
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Client: HPCL
                </p>
                <p className="text-[15px] leading-relaxed text-[#0F172A]">
                  Paperless SOP management and audits with centralised control and real-time compliance tracking.
                </p>
                <span className="csgo mt-auto pt-2 font-semibold text-[15px] text-[#1E3A8A] inline-flex items-center gap-1">
                  View case study →
                </span>
              </div>
            </Link>

            {/* Case 5: AAI Chennai */}
            <Link
              to="/case-studies/aai-passenger-feedback"
              className="cs flex flex-col rounded-2xl overflow-hidden border-[1.5px] border-[#dbeafe] bg-[#F0F9FF] shadow-sm"
            >
              <div
                className="h-[200px] flex items-center justify-center text-[#F0F9FF] font-heading font-semibold text-[13px]"
                style={{ background: 'linear-gradient(135deg, #0EA5E9, #1E3A8A)' }}
              >
                [Project visual – AAI Chennai]
              </div>
              <div className="p-7 flex flex-col gap-2.5 flex-1">
                <span className="font-heading font-semibold text-xs tracking-[1.2px] text-[#1E3A8A] uppercase">
                  AIRPORT OPERATIONS
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-[19px] text-[#0F172A]">
                  Passenger Feedback Digitization
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Client: Airports Authority of India – Chennai
                </p>
                <p className="text-[15px] leading-relaxed text-[#0F172A]">
                  QR code-based feedback platform with centralised data aggregation and reporting.
                </p>
                <span className="csgo mt-auto pt-2 font-semibold text-[15px] text-[#1E3A8A] inline-flex items-center gap-1">
                  View case study →
                </span>
              </div>
            </Link>

            {/* Case 6: Buddy Mentor */}
            <Link
              to="/case-studies/buddy-mentor-lms"
              className="cs flex flex-col rounded-2xl overflow-hidden border-[1.5px] border-[#dbeafe] bg-[#F0F9FF] shadow-sm"
            >
              <div
                className="h-[200px] flex items-center justify-center text-[#F0F9FF] font-heading font-semibold text-[13px]"
                style={{ background: 'linear-gradient(135deg, #0F172A, #0369a1)' }}
              >
                [Project visual – Buddy Mentor]
              </div>
              <div className="p-7 flex flex-col gap-2.5 flex-1">
                <span className="font-heading font-semibold text-xs tracking-[1.2px] text-[#1E3A8A] uppercase">
                  EDTECH · ENGINEERING
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-[19px] text-[#0F172A]">
                  AI-based Web &amp; Mobile LMS
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Client: Buddy Mentor
                </p>
                <p className="text-[15px] leading-relaxed text-[#0F172A]">
                  AI-driven learning and mentorship platform with skill assessments and progress tracking.
                </p>
                <span className="csgo mt-auto pt-2 font-semibold text-[15px] text-[#1E3A8A] inline-flex items-center gap-1">
                  View case study →
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. GLOBAL PRESENCE & WORLD VECTOR MAP */}
      {/* ======================================================== */}
      <section className="bg-[#0F172A] text-white px-6 sm:px-12 lg:px-20 py-20 lg:py-28 box-border relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Description & Country Pills */}
          <div className="lg:w-[380px] shrink-0 space-y-5 text-center lg:text-left">
            <div className="font-heading font-semibold text-xs sm:text-[13px] tracking-[2px] text-[#0EA5E9] uppercase">
              GLOBAL PRESENCE
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] text-white tracking-tight leading-tight">
              We think globally. Act locally.
            </h2>

            <p className="text-base sm:text-[17px] leading-relaxed text-[#cbd5e1]">
              Happy customers all over the globe.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2 justify-center lg:justify-start">
              {['India', 'United States', 'Singapore', 'Ireland', 'Middle East', 'Australia', 'Canada', 'Germany'].map((country) => (
                <span
                  key={country}
                  className="border border-[#0EA5E9] text-white rounded-full px-4 py-2 text-sm font-medium"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          {/* Right SVG Map Dot-Matrix & Global Radiance Arcs */}
          <div className="flex-1 w-full min-w-0">
            <svg viewBox="0 0 800 440" className="w-full h-auto" aria-hidden="true">
              <defs>
                <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.4" fill="#64748B" fillOpacity="0.5" />
                </pattern>
              </defs>
              <rect width="800" height="440" fill="url(#dots)" />

              {/* Glowing Curved Telemetry Arcs */}
              <g fill="none" stroke="#0EA5E9" strokeOpacity="0.6" strokeWidth="1.5">
                <path d="M560 230 Q430 90 215 160" />
                <path d="M560 230 Q400 120 380 170" />
                <path d="M560 230 Q520 170 470 215" />
                <path d="M560 230 Q640 270 650 310" />
                <path d="M560 230 Q700 230 700 360" />
                <path d="M560 230 Q300 40 130 90" />
                <path d="M560 230 Q640 140 730 120" />
              </g>

              {/* Global Satellites */}
              <g fill="#06B6D4">
                <circle cx="215" cy="160" r="7" />
                <circle cx="380" cy="170" r="7" />
                <circle cx="470" cy="215" r="7" />
                <circle cx="650" cy="310" r="7" />
                <circle cx="700" cy="360" r="7" />
                <circle cx="130" cy="90" r="7" />
                <circle cx="730" cy="120" r="7" />
              </g>

              {/* Chennai Headquarters Node (Amber Pulse) */}
              <circle cx="560" cy="230" r="22" fill="none" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.6" />
              <circle cx="560" cy="230" r="10" fill="#F59E0B" />
              <text x="560" y="272" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="600" fontSize="14" fill="#fff">
                Chennai, India
              </text>
            </svg>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. WHY CYGNUSA – 5 VALUE PRINCIPLES */}
      {/* ======================================================== */}
      <section className="bg-[#F0F9FF] px-6 sm:px-12 lg:px-20 py-20 lg:py-28 box-border">
        <div className="max-w-[1360px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

          <div className="lg:w-[460px] shrink-0 space-y-4">
            <div className="font-heading font-semibold text-xs sm:text-[13px] tracking-[2px] text-[#1E3A8A] uppercase">
              WHY CYGNUSA
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] text-[#0F172A] tracking-tight leading-[1.15]">
              Technology partner. Not just a vendor.
            </h2>

            <p className="mt-5 font-heading font-semibold text-base sm:text-lg leading-snug text-[#1E3A8A]">
              We don't just support technology — we strengthen businesses.
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="flex gap-6 items-baseline py-5 border-t-[1.5px] border-[#1E3A8A]">
              <span className="font-heading font-bold text-base text-[#1E3A8A]">01</span>
              <span className="font-heading font-semibold text-base sm:text-[19px] text-[#0F172A]">
                Senior leadership involvement
              </span>
            </div>
            <div className="flex gap-6 items-baseline py-5 border-t-[1.5px] border-[#1E3A8A]">
              <span className="font-heading font-bold text-base text-[#1E3A8A]">02</span>
              <span className="font-heading font-semibold text-base sm:text-[19px] text-[#0F172A]">
                Unified IT, cloud, security &amp; software expertise
              </span>
            </div>
            <div className="flex gap-6 items-baseline py-5 border-t-[1.5px] border-[#1E3A8A]">
              <span className="font-heading font-bold text-base text-[#1E3A8A]">03</span>
              <span className="font-heading font-semibold text-base sm:text-[19px] text-[#0F172A]">
                Transparent pricing &amp; governance
              </span>
            </div>
            <div className="flex gap-6 items-baseline py-5 border-t-[1.5px] border-[#1E3A8A]">
              <span className="font-heading font-bold text-base text-[#1E3A8A]">04</span>
              <span className="font-heading font-semibold text-base sm:text-[19px] text-[#0F172A]">
                Business-first technology approach
              </span>
            </div>
            <div className="flex gap-6 items-baseline py-5 border-t-[1.5px] border-b-[1.5px] border-[#1E3A8A]">
              <span className="font-heading font-bold text-base text-[#1E3A8A]">05</span>
              <span className="font-heading font-semibold text-base sm:text-[19px] text-[#0F172A]">
                Long-term partnership mindset
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 11. LEADERSHIP & TEAM */}
      {/* ======================================================== */}
      <section id="team" className="bg-white px-6 sm:px-12 lg:px-20 py-20 lg:py-28 box-border">
        <div className="max-w-[1360px] mx-auto">
          <div className="font-heading font-semibold text-xs sm:text-[13px] tracking-[2px] text-[#1E3A8A] uppercase">
            LEADERSHIP &amp; TEAM
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] text-[#0F172A] tracking-tight leading-tight mt-3">
            The people behind your technology.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {TEAM_MEMBERS.slice(0, 4).map((member) => (
              <div
                key={member.id}
                className="border-[1.5px] border-[#dbeafe] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-[240px] bg-[#F0F9FF] flex items-center justify-center overflow-hidden">
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-slate-400 font-medium text-sm">CYGNUSA Leadership</span>
                  )}
                </div>
                <div className="p-6 flex flex-col gap-1.5">
                  <h3 className="font-heading font-bold text-[17px] text-[#0F172A]">
                    {member.name}
                  </h3>
                  <span className="font-semibold text-sm text-[#1E3A8A]">
                    {member.role}
                  </span>
                  <p className="text-sm text-[#64748B] line-clamp-2 mt-1">
                    {member.bio}
                  </p>
                  {member.linkedInUrl && (
                    <a
                      href={member.linkedInUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[13px] text-[#1E3A8A] hover:text-[#0EA5E9] font-semibold mt-2 inline-flex items-center gap-1"
                    >
                      in · LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 12. CAREERS & C-Y-G-N-U-S-A CORE VALUES */}
      {/* ======================================================== */}
      <section id="careers" className="bg-[#1E3A8A] text-white px-6 sm:px-12 lg:px-20 py-20 lg:py-28 box-border">
        <div className="max-w-[1360px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="flex-1 space-y-5 text-center lg:text-left">
            <div className="font-heading font-semibold text-xs sm:text-[13px] tracking-[2px] text-[#0EA5E9] uppercase">
              CAREERS
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] text-white tracking-tight leading-[1.15]">
              Join the team building what's next.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#e0f2fe] max-w-[520px] mx-auto lg:mx-0">
              Guided by seven values, from communicating honestly to always striving for excellence.
            </p>

            <Link
              to="/careers"
              className="btn inline-block bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] font-semibold text-base px-8 py-4 rounded-[5px] transition-all shadow-lg text-center"
            >
              See openings
            </Link>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
            <div className="border border-[#F0F9FF]/30 rounded-xl p-4 sm:p-5 text-[15px] bg-[#1E3A8A]/50">
              <b className="font-heading font-bold text-[#0EA5E9] mr-1.5 text-base">C</b>
              Communicating honestly and directly
            </div>
            <div className="border border-[#F0F9FF]/30 rounded-xl p-4 sm:p-5 text-[15px] bg-[#1E3A8A]/50">
              <b className="font-heading font-bold text-[#0EA5E9] mr-1.5 text-base">Y</b>
              Young, agile and flexible
            </div>
            <div className="border border-[#F0F9FF]/30 rounded-xl p-4 sm:p-5 text-[15px] bg-[#1E3A8A]/50">
              <b className="font-heading font-bold text-[#0EA5E9] mr-1.5 text-base">G</b>
              Giving, guiding, growing our people
            </div>
            <div className="border border-[#F0F9FF]/30 rounded-xl p-4 sm:p-5 text-[15px] bg-[#1E3A8A]/50">
              <b className="font-heading font-bold text-[#0EA5E9] mr-1.5 text-base">N</b>
              Never compromising on quality
            </div>
            <div className="border border-[#F0F9FF]/30 rounded-xl p-4 sm:p-5 text-[15px] bg-[#1E3A8A]/50">
              <b className="font-heading font-bold text-[#0EA5E9] mr-1.5 text-base">U</b>
              Unlearning and relearning
            </div>
            <div className="border border-[#F0F9FF]/30 rounded-xl p-4 sm:p-5 text-[15px] bg-[#1E3A8A]/50">
              <b className="font-heading font-bold text-[#0EA5E9] mr-1.5 text-base">S</b>
              Socially responsible
            </div>
            <div className="border border-[#F0F9FF]/30 rounded-xl p-4 sm:p-5 text-[15px] sm:col-span-2 bg-[#1E3A8A]/50">
              <b className="font-heading font-bold text-[#0EA5E9] mr-1.5 text-base">A</b>
              Always striving for excellence
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 13. CONTACT CTA BANNER */}
      {/* ======================================================== */}
      <section id="contact" className="bg-[#0F172A] text-white px-6 sm:px-12 lg:px-20 py-24 sm:py-32 box-border text-center relative overflow-hidden">
        {/* Glowing Center Radial Aura */}
        <div
          className="absolute left-1/2 -top-48 w-[900px] h-[900px] -translate-x-1/2 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.28), rgba(15,23,42,0) 65%)'
          }}
        />

        <div className="max-w-[800px] mx-auto relative z-10 space-y-6">
          <h2 className="font-heading font-bold text-2xl sm:text-4xl lg:text-[46px] leading-[1.15] tracking-[-1px] text-white">
            Innovating with technology.<br />
            <span className="text-[#0EA5E9]">Delivering with strategy.</span>
          </h2>

          <p className="text-lg sm:text-[19px] leading-relaxed text-[#cbd5e1] max-w-[560px] mx-auto">
            Talk to us about your technology roadmap. No pitch deck, just a clear plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => handleConsultation()}
              className="btn w-full sm:w-auto bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] font-semibold text-base sm:text-[17px] px-9 py-4 rounded-[5px] transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Book a Free Consultation
            </button>

            <a
              href="mailto:sales@cygnusa.in"
              className="btn w-full sm:w-auto border-[1.5px] border-[#0EA5E9] hover:bg-[#0EA5E9]/10 text-white font-semibold text-base sm:text-[17px] px-9 py-[14px] rounded-[5px] transition-all text-center"
            >
              sales@cygnusa.in
            </a>
          </div>

          <p className="text-base text-[#cbd5e1] pt-3">
            +91-98840-81174 · Chennai
          </p>
        </div>
      </section>

    </div>
  );
};
