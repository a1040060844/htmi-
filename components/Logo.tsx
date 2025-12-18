import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

/**
 * Logo component representing the brand "JINGJING | Subtitle".
 * The subtitle adapts based on the active language to provide a localized luxury experience:
 * - Arabic: JINGJING | جينغ جينغ
 * - English/Chinese: JINGJING | 菁静
 */
export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'dark' }) => {
  const { language } = useLanguage();

  // Determine the subtitle based on the current language
  const subtitle = language === 'ar' ? 'جينغ جينغ' : '菁静';

  return (
    <div className={`flex flex-col items-center md:items-start ${className}`}>
      <div className="flex items-center gap-3 md:gap-4">
        {/* Latin Brand Name */}
        <span 
          className={`font-serif font-bold text-2xl md:text-3xl tracking-[0.15em] whitespace-nowrap leading-none ${
            variant === 'light' ? 'text-white' : 'text-stone-900'
          }`}
        >
          JINGJING
        </span>

        {/* Vertical Separator - Sophisticated divider line */}
        <div 
          className={`w-[1px] h-6 md:h-8 self-center transition-colors duration-500 ${
            variant === 'light' ? 'bg-white/30' : 'bg-stone-300'
          }`}
        />

        {/* Localized Heritage Name */}
        <span 
          className={`font-serif text-lg md:text-xl lg:text-2xl tracking-[0.2em] whitespace-nowrap leading-none pt-1 ${
            variant === 'light' ? 'text-white/80' : 'text-stone-600'
          }`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
};