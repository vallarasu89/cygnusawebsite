import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Search, 
  Tag, 
  User, 
  BookOpen 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { INSIGHTS } from '../data/insightsData';

export const InsightsIndex: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Virtual CTO',
    'Artificial Intelligence',
    'Cybersecurity',
    'Modernization',
    'Cloud & DevOps'
  ];

  const filteredArticles = INSIGHTS.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title="CYGNUSA Insights & Technology Thought Leadership"
        description="Strategic analysis on Virtual CTO leadership, enterprise AI integration, ISO 27001 multi-cloud compliance, and software modernization from CYGNUSA directors."
        canonicalPath="/insights"
      />

      <Breadcrumb items={[{ label: "Insights" }]} />

      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-deep text-xs font-semibold uppercase tracking-wider">
            Thought Leadership & Technical Insights
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            CYGNUSA Technology Insights
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            In-depth perspectives from our directors and principal architects on strategic IT leadership, generative AI ROI, zero-trust cloud security, and application modernization.
          </p>

          {/* Search & Categories */}
          <div className="pt-6 max-w-xl mx-auto">
            <div className="relative mb-4">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by title, topic, or keyword..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs placeholder:text-slate-400 focus:outline-none focus:border-brand-sky shadow-xs"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-brand-sky text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 text-slate-500 text-sm">
              No articles found matching your query.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(art => (
                <article
                  key={art.id}
                  className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-brand-sky/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="px-2.5 py-0.5 rounded-md bg-sky-50 border border-sky-200 text-brand-deep font-semibold">
                        {art.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {art.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-heading font-bold text-slate-900 group-hover:text-brand-deep transition-colors leading-snug">
                      <Link to={`/insights/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-6 h-6 rounded-full bg-sky-100 text-brand-deep flex items-center justify-center font-bold text-[10px]">
                        {art.author.name.charAt(0)}
                      </div>
                      <span className="font-medium text-slate-700">{art.author.name}</span>
                      <span className="text-slate-300">•</span>
                      <span>{art.publishedDate}</span>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to={`/insights/${art.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-sky hover:underline"
                    >
                      Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / Consultation Strip */}
      <section className="py-16 bg-gradient-to-b from-sky-50/50 via-slate-50/40 to-white border-t border-slate-200/80 text-center space-y-4">
        <h3 className="text-2xl font-heading font-bold text-slate-900">
          Receive Monthly Strategic Technology Briefs
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
          Unfiltered engineering insights and executive technology roadmaps delivered once a month. Zero marketing spam.
        </p>
        <div className="max-w-md mx-auto flex gap-2 pt-2">
          <input
            type="email"
            placeholder="Enter corporate email..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-brand-sky shadow-xs"
          />
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl bg-brand-sky text-white text-xs font-semibold hover:bg-sky-600 transition-colors shadow-sm cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
};
