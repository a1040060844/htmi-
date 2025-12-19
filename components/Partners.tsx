import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const brandLogos = [
  {
    name: "Brand Logo 1",
    url: "https://i.postimg.cc/7hmFtQdh/wei-xin-tu-pian-20251219215705-64-78.png"
  },
  {
    name: "Brand Logo 2",
    url: "https://i.postimg.cc/L6W7qfp2/logo2.png"
  }
];

export const Partners: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-stone-500 uppercase tracking-[0.2em] text-xs font-semibold">
            {t.partners.title}
          </h4>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
          {brandLogos.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex justify-center items-center"
            >
              <img 
                src={brand.url} 
                alt={brand.name} 
                className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
          
          {/* Subtle placeholders for balance if needed, or keeping it minimal with just the two official ones provided */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="hidden md:flex items-center justify-center px-8"
          >
            <div className="w-px h-12 bg-stone-300 mx-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};