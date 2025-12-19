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
  },
  {
    name: "Brand Logo 3",
    url: "https://i.postimg.cc/BZ5P82Ph/AL-LOGO.png"
  }
];

export const Partners: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-stone-100 border-y border-stone-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-stone-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold"
          >
            {t.partners.title}
          </motion.h4>
          <div className="w-12 h-[1px] bg-stone-300 mx-auto mt-4"></div>
        </div>

        {/* Improved layout using a flexible flex container with controlled dimensions */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 lg:gap-32">
          {brandLogos.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.15,
                ease: [0.21, 0.45, 0.32, 0.9]
              }}
              className="flex justify-center items-center group"
            >
              <div className="relative h-12 md:h-16 lg:h-20 w-auto flex items-center justify-center">
                <img 
                  src={brand.url} 
                  alt={brand.name} 
                  className="max-h-full w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-700 brightness-[0.9] group-hover:brightness-100 group-hover:scale-105"
                  // Added error handling to ensure abnormal loads don't break the layout
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};