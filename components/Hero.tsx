import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="heritage" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://i.postimg.cc/j2G8FmLp/Generated-Image-December-13-2025-12-28PM.png")',
        }}
      >
        {/* Adjusted overlay: Gradient from left (dark) to right (transparent) 
            This allows text on the left to be readable while revealing the image subject on the right/center */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/40 to-transparent"></div>
        {/* Bottom fade to blend with next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-10" dir={dir}>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <span className="text-stone-200 uppercase tracking-[0.3em] text-xs md:text-sm font-bold drop-shadow-md mb-3">
              {t.hero.since}
            </span>
            <span className="text-white uppercase tracking-[0.15em] text-sm md:text-lg font-semibold border-b border-white/30 pb-1">
               {t.hero.professional}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mt-6 mb-8 drop-shadow-xl leading-tight"
          >
            {t.hero.title} <br/> <span className="italic">{t.hero.titleItalic}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-stone-100 text-lg md:text-xl font-light leading-relaxed drop-shadow-md max-w-xl"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-col md:flex-row gap-4"
          >
            <a href="#products" className="px-8 py-4 bg-white text-stone-900 uppercase tracking-widest text-sm hover:bg-stone-200 transition-colors text-center md:text-left">
              {t.hero.explore}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};