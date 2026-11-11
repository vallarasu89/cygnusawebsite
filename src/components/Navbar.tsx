import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Sparkles, 
  Compass, 
  Server, 
  ShieldCheck, 
  Code2, 
  Bot, 
  Users, 
  Globe2, 
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Logo } from './Logo';
import { SERVICES } from '../data/servicesData';
import { PRODUCTS } from '../data/productsData';

interface NavbarProps {
  onOpenConsultation?: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  const handleConsultationClick = (e: React.MouseEvent) => {
    if (onOpenConsultation) {
      e.preventDefault();
      onOpenConsultation();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0F172A] border-b border-slate-800/80 h-[76px] box-border px-4 sm:px-8 lg:px-20 flex items-center justify-between text-white transition-all shadow-lg">
      {/* Brand Logo */}
      <div className="flex items-center">
        <Logo variant="white" size="md" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[15px] font-medium text-[#e2e8f0]">
        
        {/* Services Dropdown with Mega Menu */}
        <div 
          className="hasmega relative py-6 group"
          onMouseEnter={() => setServicesDropdownOpen(true)}
          onMouseLeave={() => setServicesDropdownOpen(false)}
        >
          <Link 
            to="/services" 
            className="flex items-center gap-1.5 hover:text-[#0EA5E9] transition-colors py-1"
          >
            Services <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
          </Link>

          {/* Mega Menu Overlay */}
          <div className="mega absolute top-[72px] -left-28 w-[780px] bg-white text-[#0F172A] rounded-2xl shadow-[0_30px_60px_rgba(15,23,42,0.35)] border border-slate-100 p-7 gap-7 box-border z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* ADVISE */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="font-heading font-semibold text-xs tracking-[1.5px] text-[#1E3A8A] uppercase pb-1 border-b border-slate-100">
                Advise
              </div>
              <Link 
                to="/services/virtual-cto-strategic-advisory" 
                className="text-sm font-medium text-slate-800 hover:text-[#0EA5E9] transition-colors flex items-start gap-2 group/item"
              >
                <Compass className="w-4 h-4 text-[#0EA5E9] mt-0.5 shrink-0" />
                <span>Virtual CTO &amp; Strategic Advisory</span>
              </Link>
            </div>

            {/* BUILD */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="font-heading font-semibold text-xs tracking-[1.5px] text-[#1E3A8A] uppercase pb-1 border-b border-slate-100">
                Build
              </div>
              <Link 
                to="/services/software-product-engineering" 
                className="text-sm font-medium text-slate-800 hover:text-[#0EA5E9] transition-colors flex items-start gap-2"
              >
                <Code2 className="w-4 h-4 text-[#0EA5E9] mt-0.5 shrink-0" />
                <span>Software &amp; Product Engineering</span>
              </Link>
              <Link 
                to="/services/ai-integration-automation" 
                className="text-sm font-medium text-slate-800 hover:text-[#0EA5E9] transition-colors flex items-start gap-2"
              >
                <Bot className="w-4 h-4 text-[#0EA5E9] mt-0.5 shrink-0" />
                <span>AI Integration &amp; Automation</span>
              </Link>
              <Link 
                to="/services/staff-augmentation" 
                className="text-sm font-medium text-slate-800 hover:text-[#0EA5E9] transition-colors flex items-start gap-2"
              >
                <Users className="w-4 h-4 text-[#0EA5E9] mt-0.5 shrink-0" />
                <span>Staff Augmentation</span>
              </Link>
              <Link 
                to="/services/offshore-capability-development-center" 
                className="text-sm font-medium text-slate-800 hover:text-[#0EA5E9] transition-colors flex items-start gap-2"
              >
                <Globe2 className="w-4 h-4 text-[#0EA5E9] mt-0.5 shrink-0" />
                <span>Offshore Capability Development Center</span>
              </Link>
            </div>

            {/* RUN */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="font-heading font-semibold text-xs tracking-[1.5px] text-[#1E3A8A] uppercase pb-1 border-b border-slate-100">
                Run
              </div>
              <Link 
                to="/services/managed-it-cloud-services" 
                className="text-sm font-medium text-slate-800 hover:text-[#0EA5E9] transition-colors flex items-start gap-2"
              >
                <Server className="w-4 h-4 text-[#0EA5E9] mt-0.5 shrink-0" />
                <span>Managed IT &amp; Cloud Services</span>
              </Link>
              <Link 
                to="/services/security-compliance" 
                className="text-sm font-medium text-slate-800 hover:text-[#0EA5E9] transition-colors flex items-start gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#0EA5E9] mt-0.5 shrink-0" />
                <span>Security &amp; Compliance</span>
              </Link>
              <Link 
                to="/services/software-hardware-reseller" 
                className="text-sm font-medium text-slate-800 hover:text-[#0EA5E9] transition-colors flex items-start gap-2"
              >
                <Cpu className="w-4 h-4 text-[#0EA5E9] mt-0.5 shrink-0" />
                <span>Software &amp; Hardware Reseller</span>
              </Link>
            </div>
          </div>
        </div>

        <Link to="/industries" className="hover:text-[#0EA5E9] transition-colors">
          Industries
        </Link>

        <Link to="/case-studies" className="hover:text-[#0EA5E9] transition-colors">
          Case studies
        </Link>

        {/* Products Dropdown */}
        <div 
          className="relative py-6 group"
          onMouseEnter={() => setProductsDropdownOpen(true)}
          onMouseLeave={() => setProductsDropdownOpen(false)}
        >
          <Link 
            to="/products" 
            className="flex items-center gap-1.5 hover:text-[#0EA5E9] transition-colors py-1"
          >
            Products <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
          </Link>
          {productsDropdownOpen && (
            <div className="absolute top-[72px] left-0 w-64 bg-white text-[#0F172A] rounded-xl shadow-xl border border-slate-100 p-3 flex flex-col gap-1 z-50">
              {PRODUCTS.map(product => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-[#F0F9FF] hover:text-[#0EA5E9] transition-colors"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/about" className="hover:text-[#0EA5E9] transition-colors">
          About
        </Link>

        <Link to="/careers" className="hover:text-[#0EA5E9] transition-colors">
          Careers
        </Link>

        <Link to="/insights" className="hover:text-[#0EA5E9] transition-colors">
          Insights
        </Link>
      </nav>

      {/* CTA Button */}
      <div className="hidden sm:flex items-center gap-4">
        <button
          onClick={handleConsultationClick}
          className="btn bg-[#0EA5E9] hover:bg-[#0284c7] text-[#0F172A] font-semibold text-[15px] px-5 py-2.5 rounded-[5px] cursor-pointer transition-all active:scale-95 shadow-sm"
        >
          Talk to us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] bg-[#0F172A] border-b border-slate-800 p-6 flex flex-col gap-4 text-white z-50 max-h-[85vh] overflow-y-auto">
          <Link to="/services" className="text-lg font-medium hover:text-[#0EA5E9] py-1 border-b border-slate-800">
            Services
          </Link>
          <div className="pl-4 flex flex-col gap-2 text-sm text-slate-300">
            <Link to="/services/virtual-cto-strategic-advisory" className="hover:text-[#0EA5E9]">Virtual CTO</Link>
            <Link to="/services/software-product-engineering" className="hover:text-[#0EA5E9]">Software Engineering</Link>
            <Link to="/services/ai-integration-automation" className="hover:text-[#0EA5E9]">AI &amp; Automation</Link>
            <Link to="/services/managed-it-cloud-services" className="hover:text-[#0EA5E9]">Managed IT &amp; Cloud</Link>
            <Link to="/services/security-compliance" className="hover:text-[#0EA5E9]">Security &amp; Compliance</Link>
          </div>

          <Link to="/industries" className="text-lg font-medium hover:text-[#0EA5E9] py-1 border-b border-slate-800">
            Industries
          </Link>
          <Link to="/case-studies" className="text-lg font-medium hover:text-[#0EA5E9] py-1 border-b border-slate-800">
            Case Studies
          </Link>
          <Link to="/products" className="text-lg font-medium hover:text-[#0EA5E9] py-1 border-b border-slate-800">
            Products
          </Link>
          <Link to="/about" className="text-lg font-medium hover:text-[#0EA5E9] py-1 border-b border-slate-800">
            About
          </Link>
          <Link to="/careers" className="text-lg font-medium hover:text-[#0EA5E9] py-1 border-b border-slate-800">
            Careers
          </Link>
          <Link to="/insights" className="text-lg font-medium hover:text-[#0EA5E9] py-1 border-b border-slate-800">
            Insights
          </Link>
          
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={handleConsultationClick}
              className="w-full btn bg-[#0EA5E9] text-[#0F172A] font-semibold text-center py-3 rounded-md"
            >
              Talk to us
            </button>
            <a
              href="tel:+919884081174"
              className="text-center text-sm text-slate-400 py-1"
            >
              +91-98840-81174 · Chennai
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
