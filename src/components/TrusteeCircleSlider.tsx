import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

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

// Split into two balanced tracks for staggered dual-circle slider
const row1Logos = TRUSTEE_LOGOS.slice(0, 12);
const row2Logos = TRUSTEE_LOGOS.slice(12, 24);

export const TrusteeCircleSlider: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const sectors = ['All', 'Aviation', 'Automotive', 'Government', 'Technology', 'Manufacturing', 'Edutech', 'FinTech', 'Customer Experience'];

  const handleScroll = (direction: 'left' | 'right') => {
    const amount = direction === 'left' ? -260 : 260;
    if (scrollRef1.current) {
      scrollRef1.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
    if (scrollRef2.current) {
      scrollRef2.current.scrollBy({ left: -amount, behavior: 'smooth' });
    }
  };

  const isMatched = (item: TrusteeItem) => {
    if (selectedSector === 'All') return true;
    return item.sector.toLowerCase().includes(selectedSector.toLowerCase());
  };

  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      {/* Top Slider Header & Interactive Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F0F9FF] text-[#1E3A8A] border border-[#0EA5E9]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
            24+ Verified Enterprise Trustees
          </span>
          <span className="hidden sm:inline-block text-xs text-[#64748B]">
            Hover to view sector · Drag or scroll to explore
          </span>
        </div>

        {/* Prev / Next Circular Navigation Buttons */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] transition-all flex items-center justify-center shadow-sm cursor-pointer active:scale-90"
            aria-label="Previous logos"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] transition-all flex items-center justify-center shadow-sm cursor-pointer active:scale-90"
            aria-label="Next logos"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sector Quick Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        {sectors.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSelectedSector(s)}
            className={`px-3 py-1 rounded-full whitespace-nowrap transition-all font-medium ${
              selectedSector === s
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Dual Row Circle Slider Container */}
      <div className="relative w-full overflow-hidden mask-gradient-x pt-2 pb-5">
        
        {/* Row 1 Track: Leftward Infinite Flow */}
        <div 
          ref={scrollRef1}
          className="relative w-full overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="flex animate-marquee gap-5 sm:gap-6 items-center py-2">
            {[...row1Logos, ...row1Logos, ...row1Logos].map((item, idx) => {
              const active = isMatched(item);
              return (
                <div
                  key={`r1-${item.id}-${idx}`}
                  className={`group relative flex flex-col items-center shrink-0 transition-all duration-300 ${
                    active ? 'opacity-100 scale-100' : 'opacity-30 scale-90'
                  }`}
                >
                  {/* Modern Circle Card */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white border border-slate-200 shadow-[0_4px_14px_rgba(15,23,42,0.06)] group-hover:shadow-[0_10px_24px_rgba(14,165,233,0.22)] group-hover:border-[#0EA5E9] group-hover:ring-4 group-hover:ring-[#0EA5E9]/15 group-hover:scale-105 transition-all duration-300 flex items-center justify-center p-3.5 sm:p-4 overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Circular Hover Badge Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0F172A] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-xl z-30 flex items-center gap-1.5 border border-slate-700">
                    <span>{item.name}</span>
                    <span className="text-[#0EA5E9] font-normal">· {item.sector}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 Track: Rightward Infinite Flow (Reverse Marquee) */}
        <div 
          ref={scrollRef2}
          className="relative w-full overflow-x-auto no-scrollbar scroll-smooth mt-2 sm:mt-3"
        >
          <div className="flex animate-marquee-reverse gap-5 sm:gap-6 items-center py-2">
            {[...row2Logos, ...row2Logos, ...row2Logos].map((item, idx) => {
              const active = isMatched(item);
              return (
                <div
                  key={`r2-${item.id}-${idx}`}
                  className={`group relative flex flex-col items-center shrink-0 transition-all duration-300 ${
                    active ? 'opacity-100 scale-100' : 'opacity-30 scale-90'
                  }`}
                >
                  {/* Modern Circle Card */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white border border-slate-200 shadow-[0_4px_14px_rgba(15,23,42,0.06)] group-hover:shadow-[0_10px_24px_rgba(14,165,233,0.22)] group-hover:border-[#0EA5E9] group-hover:ring-4 group-hover:ring-[#0EA5E9]/15 group-hover:scale-105 transition-all duration-300 flex items-center justify-center p-3.5 sm:p-4 overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Circular Hover Badge Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0F172A] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-xl z-30 flex items-center gap-1.5 border border-slate-700">
                    <span>{item.name}</span>
                    <span className="text-[#0EA5E9] font-normal">· {item.sector}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

