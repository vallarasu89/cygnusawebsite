import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  BookOpen,
  User
} from 'lucide-react';
import { LinkedinIcon, TwitterIcon } from '../components/SocialIcons';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { INSIGHTS } from '../data/insightsData';

export const InsightDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = INSIGHTS.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = INSIGHTS.filter(a => a.id !== article.id).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Person",
      "name": article.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "CYGNUSA Technologies Private Limited",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cygnusa.in/logo.svg"
      }
    },
    "datePublished": article.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://cygnusa.in/insights/${article.slug}`
    }
  };

  const handleShare = (platform: 'linkedin' | 'twitter') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);
    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    } else {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    }
  };

  return (
    <div className="relative overflow-hidden pt-4 pb-20 bg-white text-slate-800">
      <SEOHead 
        title={`${article.title} — CYGNUSA Insights`}
        description={article.excerpt}
        canonicalPath={`/insights/${article.slug}`}
      />

      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} 
      />

      <Breadcrumb 
        items={[
          { label: "Insights", href: "/insights" },
          { label: article.title }
        ]} 
      />

      {/* Article Header */}
      <section className="py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-deep font-semibold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishedDate}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-brand-deep font-bold flex items-center justify-center border border-sky-200">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{article.author.name}</div>
                <div className="text-[11px] text-brand-sky font-medium">{article.author.role}</div>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 hidden sm:inline">Share:</span>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:text-brand-sky hover:border-brand-sky text-slate-600 transition-colors shadow-xs cursor-pointer"
                aria-label="Share on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:text-brand-sky hover:border-brand-sky text-slate-600 transition-colors shadow-xs cursor-pointer"
                aria-label="Share on Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Key Takeaways Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-sky-50/50 border border-sky-100 space-y-4 shadow-sm">
            <div className="text-xs font-mono uppercase tracking-widest text-brand-deep font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-sky" />
              Executive Takeaways
            </div>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            {article.content.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Author Box */}
          <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 flex flex-col sm:flex-row items-center gap-6 shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-deep to-brand-sky text-white font-bold text-2xl flex items-center justify-center shrink-0 shadow-sm">
              {article.author.name.charAt(0)}
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-base font-heading font-bold text-slate-900">{article.author.name}</div>
              <div className="text-xs text-brand-sky font-semibold">{article.author.role}</div>
              <p className="text-xs text-slate-600 pt-1">
                Author and technology strategist at CYGNUSA Technologies, contributing to enterprise architecture, AI adoption frameworks, and digital governance.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="pt-10 border-t border-slate-200 space-y-6">
            <h3 className="text-xl font-heading font-bold text-slate-900">
              Related Strategic Insights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map(rel => (
                <Link
                  key={rel.id}
                  to={`/insights/${rel.slug}`}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-brand-sky/60 shadow-xs hover:shadow-md transition-all space-y-2 group block"
                >
                  <span className="text-[10px] uppercase font-mono text-brand-deep font-semibold">{rel.category}</span>
                  <h4 className="text-base font-heading font-bold text-slate-900 group-hover:text-brand-deep transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{rel.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
