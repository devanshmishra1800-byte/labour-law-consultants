"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { newsData, NewsItem } from '@/lib/newsData';
import { AlertCircle, ArrowRight, Calendar, Tag } from 'lucide-react';

const getImportanceBadge = (importance: NewsItem['importance']) => {
  switch (importance) {
    case 'Urgent':
      return <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-full"><AlertCircle className="w-3 h-3"/> Urgent</span>;
    case 'High':
      return <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-3 py-1 rounded-full"><AlertCircle className="w-3 h-3"/> High Priority</span>;
    case 'Medium':
      return <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">Standard</span>;
  }
};

export default function NewsPage() {
  const featuredNews = newsData[0];
  const remainingNews = newsData.slice(1);

  return (
    <div className="flex flex-col text-slate-800 pb-24 bg-slate-50 min-h-screen">
      <section className="bg-[#0a1526] text-white pt-20 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Compliance Intelligence & Updates</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            High-value, actionable regulatory changes, statutory deadlines, and critical industry developments that business owners and HR teams must know.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 w-full mb-16">
        {/* Featured News */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row group"
        >
          <div className="bg-slate-900 lg:w-2/5 p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                 {getImportanceBadge(featuredNews.importance)}
                 <span className="text-xs font-semibold uppercase tracking-wider text-white/70 bg-white/10 px-3 py-1 rounded-full flex items-center gap-1"><Tag className="w-3 h-3"/> Featured Update</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6 leading-tight">{featuredNews.title}</h2>
            </div>
            <div className="relative z-10 flex items-center gap-4 text-sm text-gray-400 mt-6 lg:mt-0">
               <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {featuredNews.date}</span>
               <span className="flex items-center gap-1"><Tag className="w-4 h-4"/> {featuredNews.category}</span>
            </div>
          </div>
          
          <div className="p-8 lg:p-10 lg:w-3/5 flex flex-col justify-center bg-white">
            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Executive Summary</h3>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">{featuredNews.summary}</p>
            </div>
            <div className="space-y-6 mb-8">
               <div className="bg-red-50/50 border-l-4 border-red-500 py-3 px-4 rounded-r-lg">
                  <span className="block text-xs font-bold text-red-800 uppercase tracking-wider mb-1">Why It Matters</span>
                  <p className="text-sm text-slate-700">{featuredNews.whyItMatters}</p>
               </div>
               <div className="bg-amber-50/50 border-l-4 border-amber-500 py-3 px-4 rounded-r-lg">
                  <span className="block text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Action Required</span>
                  <p className="text-sm text-slate-700">{featuredNews.actionRequired}</p>
               </div>
            </div>
            <Link 
              href={`/news/${featuredNews.slug}`}
              className="inline-flex items-center justify-center lg:justify-start gap-2 w-full lg:w-auto px-6 py-3 bg-[#0a1526] text-white font-semibold rounded-lg hover:bg-[#eab308] hover:text-[#0a1526] transition-colors"
            >
              Read Full Briefing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-serif font-bold text-[#0a1526] mb-8 border-b border-gray-200 pb-4">Recent Statutory Updates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingNews.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                {getImportanceBadge(item.importance)}
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 shrink-0"><Calendar className="w-3 h-3"/> {item.date}</span>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">{item.category}</span>
              <h2 className="text-xl font-serif font-bold text-[#0a1526] mb-4 group-hover:text-amber-600 transition-colors">{item.title}</h2>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">{item.summary}</p>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div>
                   <span className="text-xs font-semibold text-slate-800 block mb-1">Impact:</span>
                   <p className="text-xs text-slate-500 line-clamp-2">{item.whyItMatters}</p>
                </div>
              </div>

              <Link 
                href={`/news/${item.slug}`}
                className="mt-auto pt-5 border-t border-slate-100 text-[#0a1526] font-semibold text-sm hover:text-amber-600 transition-colors flex items-center justify-between group/link"
              >
                View Full Update
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
