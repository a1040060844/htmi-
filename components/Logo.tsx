import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'dark' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 使用纯文字Logo，确保100%可见性，并符合奢侈品大牌的极简风格 */}
      <span 
        className={`font-serif font-bold text-2xl md:text-3xl tracking-[0.15em] whitespace-nowrap ${
          variant === 'light' ? 'text-white' : 'text-stone-900'
        }`}
      >
        JINGJING
      </span>
    </div>
  );
};