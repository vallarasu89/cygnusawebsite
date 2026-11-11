import React from 'react';

export const ClientLogoMarquee: React.FC = () => {
  const clients = [
    { name: "TVS Motor Company", sector: "Automotive" },
    { name: "Stellantis", sector: "Automotive" },
    { name: "HPCL (Hindustan Petroleum)", sector: "Fortune 500 Energy" },
    { name: "Watertec (Warburg Pincus)", sector: "Manufacturing" },
    { name: "Airports Authority of India (AAI)", sector: "Aviation & Govt" },
    { name: "GoFuel Ecosystem", sector: "FuelTech" },
    { name: "GoZap EV Fleet", sector: "EV Mobility" },
    { name: "Coforge", sector: "Global Technology" },
    { name: "Centum Learning", sector: "Enterprise EdTech" },
    { name: "BrandMidas", sector: "Aviation Services" },
    { name: "Airportzo", sector: "Airport Services" },
    { name: "NIFT (National Institute of Fashion Technology)", sector: "Government" },
    { name: "NITTTR Chennai", sector: "Higher Education" },
    { name: "MGM Hotels & Resorts", sector: "Hospitality" },
    { name: "Gold Stake LLP", sector: "FinTech Bullion" },
    { name: "Profaids Consulting", sector: "Audit & Risk" },
    { name: "EnComplianceHR", sector: "Compliance Services" },
    { name: "Sixth Itech", sector: "Enterprise Tech" }
  ];

  return (
    <div className="w-full py-8 overflow-hidden bg-slate-50/80 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-xs font-heading font-semibold uppercase tracking-widest text-slate-500">
          Trusted by Fortune 500s, Government Authorities, PE Portfolio Firms & High-Growth Startups
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden mask-gradient-x">
        {/* Infinite scrolling marquee track */}
        <div className="flex animate-marquee whitespace-nowrap gap-8 items-center py-2">
          {clients.concat(clients).map((client, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-sky/60 hover:shadow-md transition-all group cursor-default"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-sky group-hover:scale-125 transition-transform" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-slate-800 group-hover:text-brand-sky transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  {client.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
