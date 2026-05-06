import { newsData } from '@/lib/newsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, AlertCircle, FileText, Activity, Users, FileCheck } from 'lucide-react';
import { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all known news
export async function generateStaticParams() {
  return newsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const post = newsData.find((n) => n.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${post.title} | Compliance News`,
    description: post.summary,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const post = newsData.find((n) => n.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const getImportanceBadge = (importance: string) => {
    switch (importance) {
      case 'Urgent':
        return <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-full"><AlertCircle className="w-3 h-3"/> Urgent</span>;
      case 'High':
        return <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-3 py-1 rounded-full"><AlertCircle className="w-3 h-3"/> High Priority</span>;
      case 'Medium':
        return <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">Standard</span>;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-[#0a1526] pt-12 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Compliance Intelligence
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 relative z-10 w-full overflow-x-auto">
            {getImportanceBadge(post.importance)}
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-300 bg-white/10 px-3 py-1 rounded-full shrink-0">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 shrink-0">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
          </div>

           <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
             {post.title}
           </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
         <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
            
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#eab308]" /> Executive Summary
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed font-serif">
                {post.summary}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
               <div className="bg-red-50/50 border border-red-100 p-6 rounded-xl">
                 <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                   <AlertCircle className="w-4 h-4" /> Why It Matters
                 </h3>
                 <p className="text-slate-700 text-sm leading-relaxed">{post.whyItMatters}</p>
               </div>
               
               <div className="bg-amber-50/50 border border-amber-100 p-6 rounded-xl">
                 <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                   <Activity className="w-4 h-4" /> Action Required
                 </h3>
                 <p className="text-slate-700 text-sm leading-relaxed">{post.actionRequired}</p>
               </div>
            </div>

            <div className="space-y-12">
               <div className="prose prose-slate max-w-none">
                 <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                   <FileCheck className="w-6 h-6 text-[#0a1526]" /> Detailed Briefing
                 </h2>
                 <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                   {post.fullDetail}
                 </p>
               </div>

               <hr className="border-slate-100" />

               <div className="grid md:grid-cols-2 gap-10">
                 <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#0a1526]" /> Who It Affects
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {post.whoItAffects}
                    </p>
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#0a1526]" /> What Changed
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {post.whatChanged}
                    </p>
                 </div>
               </div>

               <div className="bg-[#0a1526]/5 rounded-xl p-8 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Recommended Next Steps</h3>
                  <div className="text-slate-700 leading-relaxed whitespace-pre-wrap font-medium">
                    {post.nextSteps.split('\n').map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 mb-2">
                        <span className="w-5 h-5 rounded-full bg-[#0a1526] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                          {idx + 1}
                        </span>
                        <span>{step.replace(/^\d+\.\s*/, '')}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-sm font-bold text-slate-800 mb-1">Need Clarification?</p>
                <p className="text-xs text-slate-500">Consult with our statutory compliance experts.</p>
              </div>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-[#0a1526] text-white font-semibold text-sm rounded-lg hover:bg-[#eab308] hover:text-[#0a1526] transition-colors"
              >
                Request Advisory
              </Link>
            </div>

         </div>
      </div>
    </div>
  );
}
