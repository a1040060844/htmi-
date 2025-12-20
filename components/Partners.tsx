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
  },
  {
    name: "Brand Logo 4",
    url: "https://i.postimg.cc/k4gsSrbr/ac4e5568-5971-4e1b-82e8-0c2d8d590136.png"
  },
  {
    name: "Brand Logo 5",
    url: "https://i.postimg.cc/ZnrLtTk9/a73f6088-adb1-46c8-b540-c42502d6cc73.png"
  },
  {
    name: "Brand Logo 6",
    url: "https://i.postimg.cc/SK2T1bKP/cb89aed4-f58d-4bb0-aab3-1a44ce8c19e1.png"
  }
];

export const Partners: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="partners" className="py-24 bg-stone-100 border-y border-stone-200">
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

        {/* Layout using a grid-like flex for perfect alignment of rectangular components */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-12">
          {brandLogos.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.1,
                ease: [0.21, 0.45, 0.32, 0.9]
              }}
              className="flex justify-center items-center group"
            >
              {/* Standardized Rectangular Container for consistent presentation */}
              <div className="w-32 h-16 md:w-44 md:h-24 lg:w-52 lg:h-28 flex items-center justify-center p-4">
                <img 
                  src={brand.url} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-700 brightness-[0.9] group-hover:brightness-100 group-hover:scale-105"
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