import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Using text placeholders for logos as I cannot generate real brand images, 
// but styling them to look like a "Logo Wall"
const brands = [
  "Aura Botanica", "Desert Rose", "Pure & Simple", 
  "La Jabonera", "Oud Royal", "Natura Mexico", 
  "Zenith Care", "Al-Safi Exports"
];

export const Partners: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h4 className="text-stone-500 uppercase tracking-[0.2em] text-xs font-semibold">
            {t.partners.title}
          </h4>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex justify-center"
            >
              {/* This simulates a logo. In production, use <img /> */}
              <div className="h-16 w-32 border-2 border-stone-300 flex items-center justify-center p-2">
                 <span className="font-serif font-bold text-stone-400 text-center text-sm leading-tight">{brand}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};