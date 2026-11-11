import React, { useState } from 'react';
import { X, CheckCircle2, Send, Calendar, Clock, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { InquiryLead } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceOfInterest: defaultService || SERVICES[0].title,
    preferredTime: 'Morning (9 AM - 12 PM)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.email.trim()) {
      errs.email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required for consultation confirmation.";
    }
    if (!formData.company.trim()) errs.company = "Company / Organization name is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const newLead: InquiryLead = {
      id: `lead-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      serviceOfInterest: formData.serviceOfInterest,
      message: `${formData.message} [Preferred time: ${formData.preferredTime}]`,
      createdAt: new Date().toISOString(),
      status: 'New'
    };

    setTimeout(() => {
      try {
        const existingLeads: InquiryLead[] = JSON.parse(localStorage.getItem('cygnusa_leads') || '[]');
        existingLeads.unshift(newLead);
        localStorage.setItem('cygnusa_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.error("Could not save to localStorage", err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceOfInterest: SERVICES[0].title,
      preferredTime: 'Morning (9 AM - 12 PM)',
      message: ''
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="relative px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-sky-50 via-white to-blue-50/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-sky/10 border border-brand-sky/30 flex items-center justify-center text-brand-sky">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-title" className="text-xl font-heading font-bold text-slate-900">
                Book a Free Enterprise Consultation
              </h3>
              <p className="text-xs text-brand-sky font-medium">
                Direct advisory session with CYGNUSA Senior Technology Partners
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-heading font-bold text-slate-900">
                Consultation Confirmed!
              </h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <span className="text-brand-sky font-semibold">{formData.name}</span>. Our Senior Technology Advisory team will review your business objectives and connect with you at <span className="text-slate-900 font-medium">{formData.email}</span> within 4 business hours.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs text-slate-600 space-y-1 text-left">
                <div><span className="font-semibold text-slate-700">Service:</span> {formData.serviceOfInterest}</div>
                <div><span className="font-semibold text-slate-700">Time Preference:</span> {formData.preferredTime}</div>
                <div><span className="font-semibold text-slate-700">Direct Desk:</span> sales@cygnusa.in | +91-98840 81174</div>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 rounded-lg bg-brand-sky text-white font-semibold hover:bg-sky-500 transition-colors text-sm shadow-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Sharma"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-slate-800 text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-400 focus:ring-1 focus:ring-rose-500' : 'border-slate-300 focus:border-brand-sky focus:ring-1 focus:ring-brand-sky'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Organization <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Acme Logistics Corp"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-slate-800 text-sm focus:outline-none transition-colors ${
                      errors.company ? 'border-rose-400 focus:ring-1 focus:ring-rose-500' : 'border-slate-300 focus:border-brand-sky focus:ring-1 focus:ring-brand-sky'
                    }`}
                  />
                  {errors.company && <p className="text-xs text-rose-500 mt-1">{errors.company}</p>}
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="anand@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-slate-800 text-sm focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-400 focus:ring-1 focus:ring-rose-500' : 'border-slate-300 focus:border-brand-sky focus:ring-1 focus:ring-brand-sky'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / Mobile <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91-98765 43210"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-slate-800 text-sm focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-400 focus:ring-1 focus:ring-rose-500' : 'border-slate-300 focus:border-brand-sky focus:ring-1 focus:ring-brand-sky'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Area of Interest
                </label>
                <select
                  value={formData.serviceOfInterest}
                  onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.category})
                    </option>
                  ))}
                  <option value="Proprietary Products (HYPERSTOCK / HYPER4MANCE / HYPER-LX / HYPER-Lite)">
                    Proprietary Products (HYPERSTOCK / HYPER4MANCE / HYPER-LX / HYPER-Lite)
                  </option>
                  <option value="Other Custom Digital Engineering Requirement">
                    Other Custom Digital Engineering Requirement
                  </option>
                </select>
              </div>

              {/* Preferred Time Window */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Call Window (IST / UTC+5:30)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "Morning (9 AM - 12 PM)",
                    "Afternoon (1 PM - 4 PM)",
                    "Evening (4 PM - 7 PM)"
                  ].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setFormData({ ...formData, preferredTime: slot })}
                      className={`px-3 py-2 text-xs rounded-xl border text-center transition-all ${
                        formData.preferredTime === slot
                          ? 'border-brand-sky bg-sky-50 text-brand-sky font-bold shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {slot.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brief Requirement Note */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief Project / Business Context (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share high-level goals, current bottlenecks, or desired launch timelines..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Strict NDA guaranteed. Zero obligation.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-sky hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-glow-sky disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Securing Slot...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Schedule Free Consultation
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
