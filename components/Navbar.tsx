"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Our Services', path: '/services' },
  { name: 'Directors', path: '/directors' },
  { name: 'News', path: '/news' },
  { name: 'Inquiry', path: '/inquiry', highlight: true },
  { name: 'Acts', path: '/acts' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a1526] text-white border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center w-auto lg:w-64">
             {/* Using next/image for optimized loading */}
             <Image src="/logo.png" alt="Triyodish Logo" width={200} height={52} priority className="h-[52px] w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors ${link.highlight ? 'text-[#eab308] hover:text-[#d97706]' : 'text-gray-300 hover:text-[#eab308]'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-6 w-auto lg:w-64 justify-end">
            <a href="tel:+916387972500" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors whitespace-nowrap">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <Link
              href="/inquiry"
              className="bg-[#eab308] text-[#0a1526] px-5 py-2.5 rounded font-semibold text-sm hover:bg-[#d97706] transition-colors whitespace-nowrap"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-[#0a1526] border-b border-white/5 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-white/5 transition-colors ${link.highlight ? 'text-[#eab308] hover:text-[#d97706]' : 'text-gray-300 hover:text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3 px-3">
                <a
                  href="tel:+916387972500"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-white/20 rounded-md text-white"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <Link
                  href="/inquiry"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-4 py-3 bg-[#eab308] text-[#0a1526] font-bold rounded-md"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
