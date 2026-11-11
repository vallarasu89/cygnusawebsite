import React, { useState } from 'react';
import { LayoutGrid, SlidersHorizontal } from 'lucide-react';

export interface TrusteeItem {
  id: string;
  name: string;
  sector: string;
  logo: string;
}

export const TRUSTEE_LOGOS: TrusteeItem[] = [
  // Aviation & Hospitality
  { id: 'brandmidas', name: 'Brandmidas', sector: 'Aviation & Hospitality', logo: '/trustee-logos/brandmidas.png' },
  { id: 'airportzo', name: 'Airportzo', sector: 'Aviation & Hospitality', logo: '/trustee-logos/airportzo.png' },
  { id: 'holiday-seasonz', name: 'Holiday Seasonz', sector: 'Aviation & Hospitality', logo: '/trustee-logos/holiday-seasonz.png' },
  { id: 'mgm-hotels', name: 'MGM Muthu Hotels & Resorts', sector: 'Aviation & Hospitality', logo: '/trustee-logos/mgm-hotels.png' },

  // Automotive
  { id: 'tvs', name: 'TVS Motor Company', sector: 'Automotive', logo: '/trustee-logos/tvs.png' },
  { id: 'stellantis', name: 'Stellantis', sector: 'Automotive', logo: '/trustee-logos/stellantis.png' },

  // Government & Institutions
  { id: 'aai', name: 'Airports Authority of India (AAI)', sector: 'Government', logo: '/trustee-logos/aai.jpg' },
  { id: 'nitttr', name: 'NITTTR Chennai', sector: 'Government & Education', logo: '/trustee-logos/nitttr.png' },
  { id: 'nift', name: 'NIFT (National Institute of Fashion Technology)', sector: 'Government', logo: '/trustee-logos/nift.png' },

  // Technology
  { id: 'coforge', name: 'Coforge', sector: 'Technology', logo: '/trustee-logos/coforge.jpg' },
  { id: 'centum-learning', name: 'Centum Learning', sector: 'Technology & EdTech', logo: '/trustee-logos/centum-learning.png' },
  { id: 'rebus', name: 'Rebus Engineering & Contracting', sector: 'Technology & Engineering', logo: '/trustee-logos/rebus.jpg' },

  // Manufacturing
  { id: 'watertec', name: 'Watertec India', sector: 'Manufacturing', logo: '/trustee-logos/watertec.png' },
  { id: 'ags', name: 'AGS', sector: 'Manufacturing', logo: '/trustee-logos/ags.png' },
  { id: 'ognitron', name: 'Ognitron Technologies', sector: 'Manufacturing', logo: '/trustee-logos/ognitron.png' },

  // Edutech
  { id: 'academian', name: 'Academian', sector: 'Edutech', logo: '/trustee-logos/academian.jpg' },
  { id: 'mediant-labs', name: 'Mediant Labs', sector: 'Edutech', logo: '/trustee-logos/mediant-labs.png' },
  { id: 'buddy-mentor', name: 'Buddy Mentor', sector: 'Edutech', logo: '/trustee-logos/buddy-mentor.png' },
  { id: 'diya-academy', name: 'Diya Coaching Academy', sector: 'Edutech', logo: '/trustee-logos/diya-academy.png' },

  // EV & FuelTech
  { id: 'gozap', name: 'GoZap EV Fleet', sector: 'EV & FuelTech', logo: '/trustee-logos/gozap.png' },

  // Customer Experience
  { id: 'access-cx', name: 'Access CX', sector: 'Customer Experience', logo: '/trustee-logos/access-cx.jpg' },
  { id: 'tlcx', name: 'TLCx Global', sector: 'Customer Experience', logo: '/trustee-logos/tlcx.png' },

  // FinTech
  { id: 'yyc-accounting', name: 'YYC Accounting', sector: 'FinTech', logo: '/trustee-logos/yyc-accounting.jpg' },
  { id: 'gold-stake', name: 'Gold Stake LLP', sector: 'FinTech', logo: '/trustee-logos/gold-stake.png' }
];

export const TrusteeLogosSection: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'slider'>('grid');

  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      {/* View Switcher Controls */}
      <div className="flex items-center justify-between pb-1">
        <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-heading">
          24+ Enterprise Clients across 9 Sectors
        </span>

        <div className="inline-flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-[#1E3A8A] shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            Grid
          </button>
          <button
            type="button"
            onClick={() => setViewMode('slider')}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
              viewMode === 'slider'
                ? 'bg-white text-[#1E3A8A] shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Slider
          </button>
        </div>
      </div>

      {/* Mode 1: Normal Clean Corporate Logo Grid (Default) */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 animate-fadeIn">
          {TRUSTEE_LOGOS.map((client) => (
            <div
              key={client.id}
              className="h-20 sm:h-22 bg-white border border-slate-200/90 rounded-xl p-3 sm:p-4 flex items-center justify-center hover:border-[#0EA5E9] hover:shadow-md transition-all duration-200 group relative"
              title={`${client.name} — ${client.sector}`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-11 sm:max-h-12 w-auto max-w-[130px] sm:max-w-[140px] object-contain transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

      {/* Mode 2: Normal Continuous Horizontal Logo Slider */}
      {viewMode === 'slider' && (
        <div className="relative w-full overflow-hidden mask-gradient-x py-2 animate-fadeIn">
          <div className="flex animate-marquee gap-5 sm:gap-6 items-center">
            {[...TRUSTEE_LOGOS, ...TRUSTEE_LOGOS].map((client, idx) => (
              <div
                key={`slider-${client.id}-${idx}`}
                className="h-20 sm:h-22 w-44 sm:w-48 bg-white border border-slate-200/90 rounded-xl p-3 sm:p-4 flex items-center justify-center shrink-0 hover:border-[#0EA5E9] hover:shadow-md transition-all duration-200 group"
                title={`${client.name} — ${client.sector}`}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-11 sm:max-h-12 w-auto max-w-[130px] sm:max-w-[140px] object-contain transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

