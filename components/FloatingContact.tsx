"use client";

import { MessageCircle, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to show buttons after page load
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappMessage = encodeURIComponent("Hello, I need help with compliance services.");
  const whatsappLink = `https://wa.me/916387972500?text=${whatsappMessage}`;
  const phoneLink = "tel:+916387972500";

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-4 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-2xl z-50"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </a>

      <a
        href={phoneLink}
        className="flex items-center justify-center w-14 h-14 bg-[#eab308] text-[#0a1526] rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-2xl z-50 md:hidden"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
