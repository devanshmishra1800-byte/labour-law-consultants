"use client";

import { Mail, MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <div className="flex flex-col text-slate-800">
      <section className="bg-[#0a1526] text-white py-20 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with Triyodish Consultancy Services. We are here to help you resolve your compliance challenges.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 w-full mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 h-full">
              <h2 className="text-2xl font-serif font-bold text-[#0a1526] mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#eab308]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1526] mb-1">Call for Support</h3>
                    <a href="tel:+916387972500" className="text-slate-600 hover:text-[#d97706] transition-colors">+91 63879 72500</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#eab308]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1526] mb-1">Email Us</h3>
                    <a href="mailto:Labourlawconsultants1@gmail.com" className="text-slate-600 hover:text-[#d97706] transition-colors break-all">
                      Labourlawconsultants1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#eab308]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1526] mb-1">Office Address</h3>
                    <p className="text-slate-600">
                      Indra Nagar, Sector 8-9/1059,<br />
                      Lucknow, Uttar Pradesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#eab308]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1526] mb-1">Business Hours</h3>
                    <p className="text-slate-600">Monday - Saturday: 9am - 7pm<br />Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col gap-3">
                <a href="https://wa.me/916387972500" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg transition-colors font-medium">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map/Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-slate-100 rounded-xl overflow-hidden shadow-lg border border-slate-200 min-h-[400px] flex flex-col"
          >
            <div className="flex-1 w-full bg-slate-200 relative overflow-hidden">
             {/* Note: Embedding a generic map iframe. In a real scenario, this would be the actual Google Maps embed URL for the address. */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113874.2933758416!2d80.85934575!3d26.8853466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
