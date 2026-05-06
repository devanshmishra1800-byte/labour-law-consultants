"use client";

import { motion } from 'motion/react';
import { Target, Users, Shield, Briefcase } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="bg-[#0a1526] text-white pt-20 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Triyodish</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your reliable partner for end-to-end statutory compliance, ensuring businesses can focus on growth without the stress of law management.
          </p>
        </motion.div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold text-[#0a1526] mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                At Triyodish Consultancy Services, we believe that compliance should be a seamless integration into your business operations, not a hurdle. Our mission is to simplify complex Indian labour laws and tax regulations for enterprises of all sizes.
              </p>
              <p className="text-slate-600 leading-relaxed">
                With a deep understanding of EPF, ESIC, GST, and Factories Act protocols, we serve over 500+ businesses across India. We aim to shield our clients from penalties while helping them build a strong, compliant foundation.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { title: "Expert Support", icon: <Briefcase />, val: "10+ Years" },
                { title: "Clients Served", icon: <Users />, val: "500+" },
                { title: "Compliance Rate", icon: <Shield />, val: "100%" },
                { title: "Pan India", icon: <Target />, val: "Presence" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-50 text-[#eab308] rounded-full flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-[#0a1526] mb-1">{stat.val}</h4>
                  <p className="text-sm text-slate-500 font-medium">{stat.title}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
