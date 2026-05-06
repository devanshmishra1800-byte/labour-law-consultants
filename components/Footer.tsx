"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#0a1526] text-gray-300 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Triyodish Logo" width={200} height={64} className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted compliance partner for EPF, ESIC, GST, labour law, and statutory management across India.
            </p>
            <div className="space-y-3 pt-2">
              <a href="tel:+916387972500" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#eab308]" />
                Call Us for Support
              </a>
              <a href="mailto:Labourlawconsultants1@gmail.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#eab308]" />
                Labourlawconsultants1@gmail.com
              </a>
              <a href="https://wa.me/916387972500" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4 text-[#eab308]" />
                WhatsApp
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[#eab308] mt-1 shrink-0" />
                <span>Indra Nagar, Sector 8-9/1059,<br />Lucknow</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services#core-services" className="hover:text-white transition-colors">EPF Compliance</Link></li>
              <li><Link href="/services#core-services" className="hover:text-white transition-colors">ESIC Compliance</Link></li>
              <li><Link href="/services#core-services" className="hover:text-white transition-colors">GST Support</Link></li>
              <li><Link href="/services#core-services" className="hover:text-white transition-colors">DSC Setup</Link></li>
              <li><Link href="/services#core-services" className="hover:text-white transition-colors">Factories Act</Link></li>
              <li><Link href="/services#core-services" className="hover:text-white transition-colors">Labour Law Advisory</Link></li>
              <li><Link href="/services#core-services" className="hover:text-white transition-colors">HR Compliance</Link></li>
              <li><Link href="/services#licenses" className="hover:text-white transition-colors text-[#eab308]">Licenses & Certificates</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/directors" className="hover:text-white transition-colors">Directors</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News & Updates</Link></li>
              <li><Link href="/acts" className="hover:text-white transition-colors">Acts & Laws</Link></li>
              <li><Link href="/inquiry" className="hover:text-white transition-colors text-[#eab308]">Inquiry</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Business Hours</h3>
            <ul className="space-y-4 text-sm mb-8">
              <li className="flex justify-between">
                <span>Monday – Saturday</span>
                <span className="text-white font-medium">9:00 AM – 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-medium">By Appointment</span>
              </li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h4 className="text-[#eab308] font-semibold mb-2">Need Urgent Help?</h4>
              <p className="text-sm text-gray-400">
                Call us or WhatsApp for priority support during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Triyodish Consultancy Services Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 text-center md:text-right">
            Disclaimer: Information on this website is for general guidance only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
