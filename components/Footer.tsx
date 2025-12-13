import React from 'react';
import { Logo } from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <Logo variant="light" className="h-16 mb-4 opacity-80" />
            <p className="text-sm font-light text-center md:text-start max-w-xs">
              {t.footer.desc}
            </p>
          </div>
          
          <div className="md:w-1/3 text-center">
            <h5 className="text-stone-100 font-serif mb-4">{t.footer.headquarters}</h5>
            <address className="not-italic text-sm font-light leading-loose whitespace-pre-line">
              {t.footer.address}
            </address>
          </div>

          <div className="md:w-1/3 text-center md:text-end">
            <h5 className="text-stone-100 font-serif mb-4">{t.footer.contact}</h5>
            <p className="text-sm font-light leading-loose">
              +86 579 8888 8888<br/>
              business@jcsabon.com<br/>
              WeChat: JCSabonFactory
            </p>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs tracking-wider opacity-50">
          &copy; {new Date().getFullYear()} {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};