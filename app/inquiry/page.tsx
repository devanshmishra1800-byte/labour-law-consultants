"use client";

import { useState, useEffect, Suspense } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useSearchParams } from 'next/navigation';

function InquiryFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    service: serviceParam,
    city: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const text = `New Website Inquiry

Name: ${formData.name || 'N/A'}
Phone: ${formData.phone || 'N/A'}
Email: ${formData.email || 'N/A'}
Service: ${formData.service || 'N/A'}
Company: ${formData.businessName || 'N/A'}
Location: ${formData.city || 'N/A'}
Message: ${formData.message || 'N/A'}
Submitted On: ${new Date().toLocaleString()}`;

      const encodedText = encodeURIComponent(text);
      const waUrl = `https://wa.me/916387972500?text=${encodedText}`;
      
      // Open WhatsApp in a new tab
      window.open(waUrl, '_blank');
      
      setIsSubmitted(true);
    } catch (err) {
      setError('Please contact us directly on WhatsApp: +91 63879 72500.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Column - Text */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <span className="text-[#eab308] font-bold tracking-wider text-sm uppercase mb-3 block">Free Compliance Audit</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
          Not Sure If Your Business Is Fully Compliant?
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Get a free, no-obligation compliance assessment from our experts. We&apos;ll review your current status and identify gaps before they become problems.
        </p>
        
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#eab308] text-[#0a1526]">
              <ArrowRightIcon className="w-4 h-4"/>
            </span>
            <span className="text-gray-300">Identify compliance gaps before penalties</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#eab308] text-[#0a1526]">
              <ArrowRightIcon className="w-4 h-4"/>
            </span>
            <span className="text-gray-300">Get a clear action plan for your business</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#eab308] text-[#0a1526]">
              <ArrowRightIcon className="w-4 h-4"/>
            </span>
            <span className="text-gray-300">Expert review — no obligation, no cost</span>
          </li>
        </ul>
      </motion.div>

      {/* Right Column - Form */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white text-slate-800 rounded-2xl p-8 lg:p-10 shadow-2xl relative"
      >
        <h2 className="text-2xl font-serif font-bold text-[#0a1526] mb-2">Get Your Free Compliance Audit</h2>
        <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
          <ShieldIcon className="w-4 h-4" />
          <span>Your details are 100% confidential</span>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center h-full">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a1526] mb-3">Request Received</h3>
            <p className="text-slate-600 mb-8">
              Your inquiry is ready. Please send the WhatsApp message to complete your request.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-[#0a1526] font-semibold underline hover:text-[#d97706]"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eab308] focus:border-transparent transition-all" />
            </div>
            <div>
              <input required type="text" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Business Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eab308] focus:border-transparent transition-all" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eab308] focus:border-transparent transition-all" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address (Optional)" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eab308] focus:border-transparent transition-all" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eab308] focus:border-transparent transition-all" />
              <select required name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eab308] focus:border-transparent transition-all text-slate-700">
                <option value="" disabled>Service Needed</option>
                <option value="EPF Compliance">EPF Compliance</option>
                <option value="ESIC Compliance">ESIC Compliance</option>
                <option value="GST Services">GST Services</option>
                <option value="Labour Law">Labour Law Advisory</option>
                <option value="Factories Act">Factories Act Compliance</option>
                <option value="Contract Labour">Contract Labour Licence</option>
                <option value="Shops Act">Shops & Establishment</option>
                <option value="HR Payroll">HR & Payroll Compliance</option>
                <option value="ISO Certification">ISO Certification</option>
                <option value="DSC Support">DSC Support</option>
                <option value="Multiple/Other">Multiple / Not Sure</option>
              </select>
            </div>
            <div>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eab308] focus:border-transparent transition-all resize-none"></textarea>
            </div>
            {error && (
              <div className="text-red-500 text-sm font-medium mb-4">{error}</div>
            )}
            <button disabled={isSubmitting} type="submit" className="w-full px-8 py-4 bg-[#eab308] text-[#0a1526] font-bold rounded-lg hover:bg-[#d97706] transition-colors flex items-center justify-center gap-2 group mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
              {isSubmitting ? 'Submitting...' : 'Request Free Audit'}
              {!isSubmitting && <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">We&apos;ll call you back within 60 minutes during business hours.</p>
          </form>
        )}
      </motion.div>
    </div>
  );
}

export default function InquiryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#0a1526] text-white py-20 flex-1 relative flex items-center justify-center">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Suspense fallback={<div className="text-center py-20 text-white">Loading form...</div>}>
            <InquiryFormContent />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  );
}

function ShieldIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 6.5 2a1 1 0 0 1 1 1z"/></svg>
  );
}
