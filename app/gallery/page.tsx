"use client";

import Image from 'next/image';
import { motion } from 'motion/react';

export default function GalleryPage() {
  const galleryItems = [
    { title: "Team at Work", src: "https://picsum.photos/seed/legal1/600/400" },
    { title: "Client Consultation", src: "https://picsum.photos/seed/legal2/600/400" },
    { title: "Compliance Workshop", src: "https://picsum.photos/seed/legal3/600/400" },
    { title: "Lucknow Office", src: "https://picsum.photos/seed/legal4/600/400" },
    { title: "Board Meeting", src: "https://picsum.photos/seed/legal5/600/400" },
    { title: "Auditing & Reporting", src: "https://picsum.photos/seed/legal6/600/400" },
  ];

  return (
    <div className="flex flex-col text-slate-800 pb-20">
      <section className="bg-[#0a1526] text-white py-20 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Gallery</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Glimpses of our dedicated team at Triyodish Consultancy Services and our commitment to professional excellence.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} 
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="aspect-[4/3] w-full relative">
                <Image 
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 border-t border-gray-100">
                <h3 className="font-serif font-semibold text-[#0a1526] text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
