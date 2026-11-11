import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const schemaList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cygnusa.in/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href ? { "item": `https://cygnusa.in${item.href}` } : {})
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 max-w-7xl mx-auto w-full">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaList) }} 
      />
      <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-400">
        <li>
          <Link 
            to="/" 
            className="flex items-center gap-1 hover:text-brand-sky transition-colors"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <li>
                {item.href && !isLast ? (
                  <Link to={item.href} className="hover:text-brand-sky transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium" aria-current={isLast ? 'page' : undefined}>
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

