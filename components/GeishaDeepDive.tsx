import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface GeishaDeepDiveProps {
  onBack: () => void;
}

export const GeishaDeepDive: React.FC<GeishaDeepDiveProps> = () => {
  const { dir } = useLanguage();
  const [scale, setScale] = useState(1);
  const [containerHeight, setContainerHeight] = useState('auto');
  const contentRef = useRef<HTMLDivElement>(null);
  
  const baseWidth = 1200; // The fixed "design" width for the content

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newScale = width < baseWidth ? width / baseWidth : 1;
      setScale(newScale);
      
      if (contentRef.current) {
        // Adjust the parent height because CSS scale doesn't shrink the reserved layout space
        const actualHeight = contentRef.current.offsetHeight;
        setContainerHeight(`${actualHeight * newScale}px`);
      }
    };

    handleResize();
    // Use a small timeout to ensure layout is finished before measuring height
    const timer = setTimeout(handleResize, 100);
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className="bg-white min-h-screen font-sans text-stone-900 overflow-x-hidden" 
      dir={dir}
      style={{ height: containerHeight }}
    >
      {/* 
        Scaling Wrapper: 
        This div maintains a fixed width and scales down on smaller viewports.
      */}
      <div 
        ref={contentRef}
        style={{ 
          width: `${baseWidth}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'absolute',
          left: scale < 1 ? 0 : '50%',
          marginLeft: scale < 1 ? 0 : `-${baseWidth / 2}px`
        }}
        className="pb-24 pt-20"
      >
        <div className="px-12">
          {/* Top Logo - Fixed size for branding focus */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-20"
          >
            <img 
              src="https://i.postimg.cc/CK2JwkLv/kojie-logo.png" 
              alt="Kojie San Logo" 
              className="h-48 object-contain"
            />
          </motion.div>

          {/* Hero Section: Face - Center Image - Face (Strictly horizontal) */}
          <div className="flex flex-row items-center justify-between gap-8 mb-16 relative">
            {/* Left Face */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-1/4"
            >
              <img 
                src="https://i.postimg.cc/qMQsky1g/ri-ben-lian-you-lian.png" 
                alt="Geisha Face Left" 
                className="w-full h-auto brightness-110 contrast-105"
              />
            </motion.div>

            {/* Central Infographic Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 max-w-xl px-4"
            >
              <img 
                src="https://i.postimg.cc/5yCRhpBB/kojie.png" 
                alt="Kojie Content Infographic" 
                className="w-full h-auto"
              />
            </motion.div>

            {/* Right Face */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-1/4"
            >
              <img 
                src="https://i.postimg.cc/qMQsky1g/ri-ben-lian-you-lian.png" 
                alt="Geisha Face Right" 
                className="w-full h-auto brightness-110 contrast-105 transform scale-x-[-1]"
              />
            </motion.div>
          </div>

          {/* Detailed Text Block - Fixed 2-column grid */}
          <div className="grid grid-cols-2 gap-20 text-stone-700 mb-20">
            <div className="space-y-6">
              <p className="text-[14px] leading-relaxed">
                <strong className="text-stone-900 font-bold">kojie•san</strong> Skin Lightening Soap uses high-grade kojic acid that effectively makes skin lighter. It has <span className="text-red-600 font-bold uppercase">ZERO PIGMENT LIGHT TECHNOLOGY</span> that targets dark spots and uneven skin tone.
              </p>
              
              <div className="pt-2">
                <h4 className="text-[12px] font-black uppercase tracking-wider text-stone-900 mb-2">ZERO PIGMENT LIGHT TECHNOLOGY</h4>
                <p className="text-[13px] text-stone-600 leading-relaxed">
                  A unique skin lightening delivery system that effectively bonds the potent active ingredient to ensure that it is absorbed and activated in your skin and areas where it is most needed.
                </p>
              </div>

              <p className="text-[14px] font-bold italic text-stone-900">
                Clinically proven to lighten skin in as fast as 7 days.
              </p>

              <div className="flex gap-10 text-[11px] font-bold uppercase tracking-widest text-stone-400">
                 <span>DERMATOLOGICALLY TESTED</span>
                 <span>PARABEN FREE</span>
              </div>

              <div className="space-y-4 pt-6 border-t border-stone-100">
                 <p className="text-[12px] uppercase font-black text-stone-900">HOW TO USE:</p>
                 <p className="text-[13px] text-stone-600 leading-relaxed">Wet soap and work into a lather, gently massage onto skin. Rinse off with water.</p>
                 
                 <p className="text-[12px] uppercase font-black text-stone-900">PRECAUTIONS:</p>
                 <p className="text-[13px] text-stone-600 leading-relaxed">For external use only. For any signs of irritation, discontinue use. If product gets into eyes, rinse thoroughly with water.</p>
               </div>
            </div>

            <div className="space-y-8">
               {/* Arabic Translation Block */}
               <div className="text-right font-serif" dir="rtl">
                  <p className="text-[18px] leading-relaxed font-bold mb-4">صابون إضاءة البشرة • kojie san</p>
                  
                  <p className="text-[14px] text-stone-700 leading-loose mb-4 font-bold">
                    صابون حمض الكوجيك الذي وثقت به دائماً، الصابون الذي يحدده طبيب الجلدية متوفر الآن في جميع صيغة حمض الكوجيك الطبيعية التي تساعد في تبييض البقع.
                  </p>
                  
                  <p className="text-[14px] text-stone-500 leading-loose mb-6">
                    ولقد اكتشف حمض الكوجيك في اليابان، وهو منتج ثانوي من إنتاج الكوجي، أو نبيذ الأرز، الذي يستعمل في صناعة مستحضرات التجميل، فإن حمض الكوجيك هو معروف بسبب تبييضه الممتاز.
                  </p>

                  <div className="pt-8 border-t border-stone-100">
                     <p className="text-[15px] text-stone-900 font-bold leading-relaxed">
                       طريقة الاستخدام: استعمل يومياً كصابون عادي للوجه والجسم
                     </p>
                  </div>
               </div>
            </div>
          </div>

          {/* Footer Technical Labels */}
          <div className="mt-24 pt-10 border-t border-stone-100 grid grid-cols-2 gap-12 items-end">
             <div>
                <h5 className="text-[11px] uppercase font-bold text-stone-300 mb-2">INGREDIENTS</h5>
                <p className="text-[11px] text-stone-400 uppercase leading-relaxed font-mono">
                  Cocos nucifera (Coconut) Oil, Water, Sodium Hydroxide, Fragrance, Kojic Acid, Glycerin, Xanthan Gum, Caprylyl Glycol, Phenoxyethanol, Glucose, Chondrus crispus (Carrageenan) Extract, Ethyhexylglycerin, Cocamide DEA, Paraffinum Liquidum, Melaleuca alternifolia (Tea Tree) Oil, CI 15985, CI 19140, BHT.
                </p>
             </div>
             
             <div className="text-right">
                <div className="text-[12px] font-bold text-stone-900 uppercase tracking-tight mb-1">DISTRIBUTED BY:</div>
                <div className="text-[11px] text-stone-400 uppercase leading-tight font-bold">
                  JINGJING COSMETICS CO., LTD.<br/>
                  MADE IN CHINA | DESIGNED BY JINGJING
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};