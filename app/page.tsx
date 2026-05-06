"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Shield, Users, PhoneCall, Briefcase, FileText, FileCheck, Building2, Landmark, Clock, Activity, Target, MessageCircle, ShieldCheck, HardHat, Factory, Award, BadgeCent, FileSignature } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0a1526] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Soft yellow glow behind the image on the right */}
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-[#eab308]/10 rounded-full blur-[120px] transform -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="flex flex-col items-center">
            
            {/* Content Centered */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="mb-6">
                <span className="text-sm md:text-base font-bold tracking-widest uppercase text-[#eab308]">Trusted by 500+ Businesses Across India</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif font-bold leading-[1.1] mb-6">
                Stay Compliant. <span className="text-[#eab308]">Avoid Penalties.</span> Focus on Growth.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                From registration to monthly filings and legal process support, we handle your statutory compliance — EPF, ESIC, GST, DSC, labour law, and more — so your business runs smoothly.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/inquiry" className="w-full sm:w-auto px-8 py-4 bg-[#eab308] text-[#0a1526] font-semibold rounded hover:bg-[#d97706] transition-colors flex items-center justify-center gap-2 text-lg">
                  Free Compliance Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded hover:bg-white/20 transition-colors flex items-center justify-center gap-2 text-lg">
                  Book Consultation
                </Link>
              </div>
              
              <div className="mt-8">
                <a href="https://wa.me/916387972500" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us for Quick Support</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-b bg-white border-gray-200 shadow-sm relative z-10 w-full overflow-x-auto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 min-w-max">
          <div className="flex items-center justify-between gap-8 text-sm font-medium text-slate-700">
            <div className="flex items-center gap-3 shrink-0"><Clock className="w-5 h-5 text-[#eab308]"/> Fast Response</div>
            <div className="flex items-center gap-3 shrink-0"><Shield className="w-5 h-5 text-[#eab308]"/> Confidential Handling</div>
            <div className="flex items-center gap-3 shrink-0"><Users className="w-5 h-5 text-[#eab308]"/> Expert-Led Support</div>
            <div className="flex items-center gap-3 shrink-0"><CheckCircle2 className="w-5 h-5 text-[#eab308]"/> End-to-End Compliance</div>
            <div className="flex items-center gap-3 shrink-0 hidden lg:flex"><PhoneCall className="w-5 h-5 text-[#eab308]"/> Online & On-Call</div>
          </div>
        </div>
      </motion.div>



      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#eab308] font-bold tracking-wider text-sm uppercase mb-3 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a1526] mb-6">End-to-End Compliance Solutions</h2>
            <p className="text-lg text-slate-600">From registration to ongoing management, we handle every aspect of statutory compliance so you can focus on running your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "EPF / EPFO Compliance", desc: "Registration, monthly filings, transfers, withdrawals, and full PF compliance management.", icon: <FileCheck className="w-6 h-6 text-[#eab308]"/>, link: "/services#core-services" },
              { title: "ESIC Registration & Compliance", desc: "Employee insurance registration, contribution filings, claim support, and ongoing ESIC management.", icon: <Shield className="w-6 h-6 text-[#eab308]"/>, link: "/services#core-services" },
              { title: "GST Registration & Support", desc: "New registration, return filings, amendments, cancellations, and GST advisory.", icon: <FileText className="w-6 h-6 text-[#eab308]"/>, link: "/services#core-services" },
              { title: "DSC Setup & Support", desc: "Digital Signature Certificate procurement, renewal, and technical setup support.", icon: <Briefcase className="w-6 h-6 text-[#eab308]"/>, link: "/services#core-services" },
              { title: "Factories Act Compliance", desc: "Factory license, plan approval, safety compliance, and statutory inspections handling.", icon: <Building2 className="w-6 h-6 text-[#eab308]"/>, link: "/services#core-services" },
              { title: "Labour Law Advisory", desc: "Expert guidance on labour regulations, dispute resolution, and statutory obligations.", icon: <Landmark className="w-6 h-6 text-[#eab308]"/>, link: "/services#core-services" },
              { title: "HR Compliance & Documentation", desc: "Employment contracts, policy frameworks, statutory records, and compliance audits.", icon: <Users className="w-6 h-6 text-[#eab308]"/>, link: "/services#core-services" },
              { title: "Payroll & Statutory Support", desc: "Payroll structuring, statutory deductions, salary processing compliance, and reporting.", icon: <Activity className="w-6 h-6 text-[#eab308]"/>, link: "/services#core-services" },
              { title: "Notices & Inspections", desc: "Government notice response, inspection preparation, documentation, and representation.", icon: <Target className="w-6 h-6 text-[#eab308]"/>, link: "/services#core-services" },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-[#0a1526] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0a1526] mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">{service.desc}</p>
                <Link href={service.link} className="mt-6 pt-6 border-t border-slate-100 text-[#0a1526] font-semibold text-sm hover:text-[#eab308] transition-colors flex items-center gap-2 group/link">
                  Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Licenses & Certificates Section added to homepage */}
      <section className="py-24 bg-white border-t border-gray-200">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#eab308] font-bold tracking-wider text-sm uppercase mb-3 block">Registrations & Upgrades</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a1526] mb-4">Licenses & Certificates</h2>
              <p className="text-lg text-slate-600">Secure genuine registrations swiftly, empowering your business to scale without regulatory roadblocks.</p>
            </div>
            <Link href="/services#licenses" className="inline-flex items-center gap-2 font-semibold text-[#0a1526] hover:text-[#eab308] transition-colors whitespace-nowrap">
              View All Licenses <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "EPF Certificate", desc: "Company Provident Fund registration process.", icon: <ShieldCheck className="w-6 h-6 text-[#eab308]" /> },
              { title: "ESIC Certificate", desc: "Employee health benefits and insurance.", icon: <FileText className="w-6 h-6 text-[#eab308]" /> },
              { title: "Labour Licence", desc: "Shops & establishment state licensing.", icon: <HardHat className="w-6 h-6 text-[#eab308]" /> },
              { title: "Factories Act", desc: "Licensing for manufacturing units.", icon: <Factory className="w-6 h-6 text-[#eab308]" /> },
              { title: "ISO Certificate", desc: "Recognized quality management.", icon: <Award className="w-6 h-6 text-[#eab308]" /> },
              { title: "GST Certificate", desc: "Complete goods & services tax setup.", icon: <BadgeCent className="w-6 h-6 text-[#eab308]" /> },
              { title: "Contract Labour", desc: "CLRA limits and principal employer.", icon: <FileSignature className="w-6 h-6 text-[#eab308]" /> },
              { title: "More Services", desc: "Talk to our experts for full list of registrations.", icon: <Building2 className="w-6 h-6 text-[#eab308]" />, link: "/services#licenses" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:bg-[#0a1526] hover:border-[#0a1526] transition-all duration-300 group flex flex-col h-full cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-[#0a1526] mb-2 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                <Link 
                  href={item.link || "/inquiry"} 
                  className="mt-auto w-full py-2.5 px-4 text-center text-sm font-semibold rounded transition-all duration-300 border border-slate-200 bg-white text-[#0a1526] group-hover:bg-[#eab308] group-hover:border-[#eab308] group-hover:text-[#0a1526]"
                >
                  {item.link ? "Explore Now" : "Request Certificate"}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0a1526] text-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why Businesses Choose Us</h2>
            <p className="text-lg text-gray-300">We don&apos;t just file paperwork. We become your compliance partner — protecting you from risk, saving you time, and keeping your business on track.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {title: "Business-Friendly", icon: <CheckCircle2 className="w-7 h-7"/>, desc: "We speak your language. No legal jargon — just clear, actionable compliance guidance."},
              {title: "100% Confidential", icon: <Shield className="w-7 h-7"/>, desc: "Your business data is handled with complete confidentiality and data security."},
              {title: "Expert Support", icon: <Briefcase className="w-7 h-7"/>, desc: "Seasoned compliance professionals with deep knowledge of Indian labour and tax laws."},
              {title: "Fast Processing", icon: <Activity className="w-7 h-7"/>, desc: "Quick turnaround on registrations, filings, and documentation — no unnecessary delays."},
              {title: "Penalty Prevention", icon: <Target className="w-7 h-7"/>, desc: "Proactive compliance monitoring to protect your business from costly penalties and notices."},
              {title: "Dedicated Partner", icon: <Users className="w-7 h-7"/>, desc: "A single point of contact who understands your business and manages all compliance needs."}
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#121e33] p-8 rounded-xl border border-white/5 hover:bg-[#1a2942] transition-colors"
              >
                <div className="text-[#eab308] mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a1526] mb-6">Ready to Get Your Business Fully Compliant?</h2>
          <p className="text-lg text-slate-600 mb-10">Talk to our compliance experts today. No jargon, no pressure — just clear, actionable guidance for your business.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/inquiry" className="px-8 py-4 bg-[#eab308] text-[#0a1526] font-semibold rounded hover:bg-[#d97706] transition-colors flex items-center justify-center gap-2">
              Book Free Consultation <ArrowRight className="w-5 h-5"/>
            </Link>
            <a href="tel:+916387972500" className="px-8 py-4 bg-white text-[#0a1526] font-semibold rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 border border-gray-200">
              <PhoneCall className="w-5 h-5"/> Call Now
            </a>
            <a href="https://wa.me/916387972500" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] border-[#25D366] border text-white font-semibold rounded hover:bg-[#1ebd5b] transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5"/> WhatsApp Us
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-6">Response within 60 minutes during business hours</p>
        </motion.div>
      </section>
    </div>
  );
}
