import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

// Route-level code splitting via React.lazy
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const ServicesIndex = lazy(() => import('./pages/ServicesIndex').then(m => ({ default: m.ServicesIndex })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const IndustriesIndex = lazy(() => import('./pages/IndustriesIndex').then(m => ({ default: m.IndustriesIndex })));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail').then(m => ({ default: m.IndustryDetail })));
const CaseStudiesIndex = lazy(() => import('./pages/CaseStudiesIndex').then(m => ({ default: m.CaseStudiesIndex })));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail').then(m => ({ default: m.CaseStudyDetail })));
const ProductsIndex = lazy(() => import('./pages/ProductsIndex').then(m => ({ default: m.ProductsIndex })));
const ProductDetail = lazy(() => import('./pages/ProductDetail').then(m => ({ default: m.ProductDetail })));
const Team = lazy(() => import('./pages/Team').then(m => ({ default: m.Team })));
const Careers = lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers })));
const InsightsIndex = lazy(() => import('./pages/InsightsIndex').then(m => ({ default: m.InsightsIndex })));
const InsightDetail = lazy(() => import('./pages/InsightDetail').then(m => ({ default: m.InsightDetail })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const AdminPortal = lazy(() => import('./pages/AdminPortal').then(m => ({ default: m.AdminPortal })));
const LeavePolicy = lazy(() => import('./pages/LeavePolicy').then(m => ({ default: m.LeavePolicy })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsConditions = lazy(() => import('./pages/TermsConditions').then(m => ({ default: m.TermsConditions })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Loading spinner fallback that prevents layout shift
const RouteLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-3">
    <div className="w-10 h-10 border-2 border-brand-sky/20 border-t-brand-sky rounded-full animate-spin" />
    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">CYGNUSA Cloud Gateway</span>
  </div>
);

export const App: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState('');

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setConsultationService(serviceTitle);
    }
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-slate-800 font-body selection:bg-brand-sky selection:text-white">
        {/* Navigation Bar */}
        <Navbar onOpenConsultation={handleOpenConsultation} />

        {/* Dynamic Route Content with Suspense */}
        <main className="flex-grow">
          <Suspense fallback={<RouteLoader />}>
            <Routes>
              <Route path="/" element={<Home onOpenConsultation={handleOpenConsultation} />} />
              <Route path="/about" element={<About onOpenConsultation={handleOpenConsultation} />} />
              
              {/* Services */}
              <Route path="/services" element={<ServicesIndex onOpenConsultation={handleOpenConsultation} />} />
              <Route path="/services/:slug" element={<ServiceDetail onOpenConsultation={handleOpenConsultation} />} />

              {/* Industries */}
              <Route path="/industries" element={<IndustriesIndex onOpenConsultation={handleOpenConsultation} />} />
              <Route path="/industries/:slug" element={<IndustryDetail onOpenConsultation={handleOpenConsultation} />} />

              {/* Case Studies */}
              <Route path="/case-studies" element={<CaseStudiesIndex onOpenConsultation={handleOpenConsultation} />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail onOpenConsultation={handleOpenConsultation} />} />

              {/* Products */}
              <Route path="/products" element={<ProductsIndex onOpenConsultation={handleOpenConsultation} />} />
              <Route path="/products/:slug" element={<ProductDetail onOpenConsultation={handleOpenConsultation} />} />

              {/* Team & Careers */}
              <Route path="/team" element={<Team onOpenConsultation={handleOpenConsultation} />} />
              <Route path="/careers" element={<Careers />} />

              {/* Insights & Blog */}
              <Route path="/insights" element={<InsightsIndex />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />

              {/* Contact */}
              <Route path="/contact" element={<Contact />} />

              {/* Admin Portal CMS */}
              <Route path="/admin" element={<AdminPortal />} />

              {/* Policies */}
              <Route path="/policies/leave-policy" element={<LeavePolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />

              {/* 404 Catch-All */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Consultation Modal */}
        <ConsultationModal 
          isOpen={isConsultationOpen}
          onClose={handleCloseConsultation}
          defaultService={consultationService}
        />
      </div>
    </Router>
  );
};

export default App;
