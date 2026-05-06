"use client";

import Image from 'next/image';
import { motion } from 'motion/react';

export default function DirectorsPage() {
  const directors = [
    {
      id: "01",
      name: "Mohit Shukla",
      role: "Director",
      company: "Triyodish Consultancy Services"
    },
    {
      id: "02",
      name: "Alok Shukla",
      role: "Director",
      company: "Triyodish Consultancy Services"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0a1526] pt-32 pb-48 overflow-hidden">
        {/* Background Pattern Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a1526] to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a1526] to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center mb-10"
          >
            {/* Elegant Brand Logo Presentation */}
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-xl border border-white/10 mb-10">
              <Image 
                src="/logo.png" 
                alt="Triyodish Logo" 
                width={160} 
                height={50} 
                priority
                className="h-16 w-auto object-contain" 
              />
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-[#eab308] font-bold tracking-[0.3em] uppercase text-xs mb-6">
                Leadership
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">
                Board of <span className="text-[#eab308]">Directors</span>
              </h1>
              <div className="w-24 h-[1px] bg-[#eab308]/30 relative flex items-center justify-center mb-10">
                <div className="w-2 h-2 rounded-full bg-[#eab308]"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Guiding Triyodish Consultancy Services with trust, clarity, and a commitment to excellence in statutory compliance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Directors Cards Section */}
      <section className="relative bg-[#f8fafc] pb-24">
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {directors.map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                className="bg-white rounded-3xl p-10 md:p-14 shadow-[0_20px_50px_rgba(10,21,38,0.08)] border border-gray-100 flex flex-col justify-center relative overflow-hidden group"
              >
                {/* Decorative Top Line */}
                <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-transparent via-[#eab308] to-transparent opacity-70"></div>
                
                {/* Large Watermark Number */}
                <div className="absolute top-8 left-10 text-[120px] font-serif font-black text-[#0a1526]/[0.03] select-none pointer-events-none leading-none tracking-tighter">
                  {director.id}
                </div>

                <div className="relative z-10 pt-16 pb-8">
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#0a1526] mb-10 group-hover:text-[#eab308] transition-colors duration-500">
                    {director.name}
                  </h3>
                  
                  <div className="flex items-center gap-6 mt-auto">
                    <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-xs md:text-sm whitespace-nowrap">
                      {director.role}
                    </span>
                    <div className="h-[1px] flex-grow bg-gray-200"></div>
                    <span className="text-gray-400 text-[10px] md:text-xs font-semibold tracking-wider uppercase max-w-[150px] text-right">
                      {director.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 mt-32 text-center"
        >
          <div className="w-16 h-[1px] bg-[#eab308]/30 mx-auto relative flex items-center justify-center mb-12">
            <div className="w-1.5 h-1.5 transform rotate-45 bg-[#eab308]"></div>
          </div>
          
          <p className="text-xl md:text-2xl font-serif text-[#0a1526] leading-relaxed mb-12 px-4">
            Together, our directors bring the expertise, integrity, and vision that make Triyodish a trusted compliance partner for businesses across India.
          </p>

          <div className="flex items-center justify-center gap-4 text-[#eab308] font-bold tracking-[0.2em] uppercase text-xs">
            <span>Strategy</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Growth</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Excellence</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
