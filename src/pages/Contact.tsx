import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  AlertTriangle,
  HelpCircle,
  Building,
  ShieldCheck
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { COMPANY_INFO } from '../data/companyData';
import { SERVICES } from '../data/servicesData';
import { InquiryLead } from '../types';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: SERVICES[0].title,
    budget: '$5k - $15k / ₹5L - ₹15L',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newLead: InquiryLead = {
      id: `inq-${Date.now()}`,
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      serviceOfInterest: form.service,
      message: `${form.message} [Budget: ${form.budget}]`,
      createdAt: new Date().toISOString(),
      status: 'New'
    };

    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('cygnusa_leads') || '[]');
        stored.unshift(newLead);
        localStorage.setItem('cygnusa_leads', JSON.stringify(stored));
      } catch (err) {
        console.error("Storage error", err);
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const contactFaqs = [
    {
      q: "How quickly does CYGNUSA respond to incoming inquiries?",
      a: "Our Senior Technology Partner desk reviews and replies to all business inquiries within 4 business hours. If requested, an urgent discovery call can be scheduled the same business day."
    },
    {
      q: "Do you sign Non-Disclosure Agreements (NDAs) before discovery discussions?",
      a: "Yes, standard procedure. We sign mutual NDAs before reviewing proprietary source code, internal spreadsheets, or confidential business requirements."
    },
    {
      q: "Can we visit your offices in Chennai?",
      a: "Yes! Clients and partners are welcome to visit our facilities in Chennai by prior appointment to meet our leadership and engineering teams."
    },
    {
      q: "What engagement models do you offer?",
      a: "We offer monthly fractional retainers (Virtual CTO & MSP), fixed-cost agile milestones (Software Engineering & MVPs), time-and-material sprints, and dedicated offshore pods (OCDC)."
    }
  ];

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title="Contact Us — Book a Strategic Enterprise Consultation"
        description="Connect with CYGNUSA Technologies in Chennai, India. Call +91-98840 81174 or email sales@cygnusa.in to discuss Virtual CTO advisory, software engineering, and managed IT."
        canonicalPath="/contact"
      />

      <Breadcrumb items={[{ label: "Contact Us" }]} />

      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-deep text-xs font-semibold uppercase tracking-wider">
            Let's Start a Conversation
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Connect with CYGNUSA
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need Virtual CTO guidance, an urgent cloud security audit, custom application engineering, or managed IT support, our partners are ready to help.
          </p>
        </div>
      </section>

      {/* Contact Grid: Form & Direct Channels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-brand-deep font-semibold tracking-wider">Direct Business Inquiry</span>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-1">
                  Send Us Your Requirements
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  All submissions are routed directly to our practice directors under strict confidentiality.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900">Message Transmitted</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{form.name}</strong>. Our enterprise team has received your message and will contact you at <strong className="text-brand-sky">{form.email}</strong> within 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: SERVICES[0].title,
                        budget: '$5k - $15k / ₹5L - ₹15L',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-brand-sky text-white text-xs font-semibold hover:bg-sky-600 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="ramesh@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Phone / Mobile *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91-9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        placeholder="Acme Enterprises"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Service / Capability of Interest</label>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                      >
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Proprietary Products (HYPERSTOCK/4MANCE/LX/Lite)">Proprietary Products</option>
                        <option value="General Strategic IT Consultation">General Strategic Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Estimated Budget Scope</label>
                      <select
                        value={form.budget}
                        onChange={e => setForm({ ...form, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
                      >
                        <option value="Under $5k / < ₹5L">Under $5k / &lt; ₹5 Lakhs</option>
                        <option value="$5k - $15k / ₹5L - ₹15L">$5k - $15k / ₹5L - ₹15 Lakhs</option>
                        <option value="$15k - $50k / ₹15L - ₹50L">$15k - $50k / ₹15L - ₹50 Lakhs</option>
                        <option value="$50k+ / ₹50L+ Enterprise">$50k+ / ₹50L+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Project Requirements / Current Bottlenecks</label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Please share high-level project goals, existing tech stack, target timelines, or specific consulting objectives..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky resize-none shadow-xs"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">Mutual NDA signed upon request.</span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-xs transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? "Transmitting..." : "Send Business Inquiry"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Contact Info & Address Verification Callout */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Communication Channels */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
                <h3 className="text-xl font-heading font-bold text-slate-900">
                  Direct Contact Desk
                </h3>
                
                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-brand-sky flex items-center justify-center shrink-0 border border-sky-100">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-[11px]">Primary Inquiries & Sales:</div>
                      <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-sm font-semibold text-slate-900 hover:text-brand-sky transition-colors">
                        {COMPANY_INFO.primaryEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-brand-sky flex items-center justify-center shrink-0 border border-sky-100">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-[11px]">Telephone Direct:</div>
                      <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="text-sm font-semibold text-slate-900 hover:text-brand-sky transition-colors block">
                        {COMPANY_INFO.primaryPhone}
                      </a>
                      <a href={`tel:${COMPANY_INFO.secondaryPhone}`} className="text-xs text-slate-500 hover:text-slate-800 transition-colors">
                        {COMPANY_INFO.secondaryPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-[11px]">Working Hours (IST / UTC+5:30):</div>
                      <div className="text-xs font-semibold text-slate-900">Monday – Saturday: 9:00 AM – 6:00 PM</div>
                      <div className="text-[11px] text-slate-500">Emergency 24/7 Managed NOC/SOC on-call for SLA clients.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations & Document Verification Note */}
              <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-amber-700 text-xs font-mono uppercase tracking-widest font-bold">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Address Audit Verification Notice
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Per official company documentation, CYGNUSA maintains registered statutory and corporate consulting presence across Chennai:
                </p>

                {/* Location 1: Statutory Registered HQ */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Building className="w-4 h-4 text-brand-sky" />
                    <span>Statutory Registered Headquarters</span>
                  </div>
                  <div className="text-xs text-slate-600 pl-6">
                    {COMPANY_INFO.addresses.registeredHeadquarters.street}, {COMPANY_INFO.addresses.registeredHeadquarters.city} – {COMPANY_INFO.addresses.registeredHeadquarters.pincode}, Tamil Nadu, India.
                  </div>
                  <div className="text-[10px] text-emerald-700 pl-6 font-mono font-medium">
                    ✓ Official MCA Incorporation & Leave Policy Record
                  </div>
                </div>

                {/* Location 2: Corporate Office */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>Corporate & Consulting Office</span>
                  </div>
                  <div className="text-xs text-slate-600 pl-6">
                    {COMPANY_INFO.addresses.corporateOffice.street}, {COMPANY_INFO.addresses.corporateOffice.city} – {COMPANY_INFO.addresses.corporateOffice.pincode}, Tamil Nadu, India.
                  </div>
                  <div className="text-[10px] text-amber-700 pl-6 font-mono">
                    * Listed in Brand Guidelines & Express Estate directory
                  </div>
                </div>

                {/* Location 3: Academic R&D Presence */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Building className="w-4 h-4 text-cyan-600" />
                    <span>Academic & R&D Center</span>
                  </div>
                  <div className="text-xs text-slate-600 pl-6">
                    {COMPANY_INFO.addresses.rdCenter.street}, {COMPANY_INFO.addresses.rdCenter.city} – {COMPANY_INFO.addresses.rdCenter.pincode}, Assam, India.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="py-12 bg-slate-50/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-heading font-bold text-slate-900">
              CYGNUSA Headquarters Location Map
            </h3>
            <span className="text-xs text-slate-500">R.A. Puram, Chennai, Tamil Nadu, India</span>
          </div>

          <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 relative bg-white shadow-xs">
            <iframe
              title="CYGNUSA Technologies Chennai Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9749103982855!2d80.252069!3d13.036647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b21ec423d5%3A0xebe7848bc2b77a06!2sRaja%20Annamalai%20Puram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-95 hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Contact FAQs */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-heading font-bold text-slate-900">
              Inquiry FAQs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers to common questions about engaging CYGNUSA.
            </p>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2 cursor-pointer shadow-xs hover:border-brand-sky/50 transition-colors"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm sm:text-base font-heading font-bold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>{faq.q}</span>
                  </h4>
                  <span className="text-brand-sky font-bold text-lg">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </div>
                {activeFaq === idx && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6 pt-2">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
