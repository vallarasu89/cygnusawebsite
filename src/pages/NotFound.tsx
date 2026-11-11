import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 text-center bg-white text-slate-800">
      <SEOHead 
        title="404 — Page Not Found"
        description="The page you requested could not be located on CYGNUSA Technologies."
        canonicalPath="/404"
      />

      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-sky-50 border border-sky-200 text-brand-sky font-heading font-extrabold text-3xl flex items-center justify-center shadow-xs">
          404
        </div>

        <h1 className="text-3xl font-heading font-bold text-slate-900">
          Node Not Located
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          The requested route does not exist or has been relocated to another service cluster on the CYGNUSA network.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-sky hover:bg-sky-600 text-white font-semibold text-xs tracking-wide transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold transition-all shadow-xs"
          >
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
};
