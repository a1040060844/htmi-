import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../utils/translations';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (currentPage !== 'home') {
        onNavigate('home');
        setTimeout(() => {
           const element = document.getElementById(href.substring(1));
           if(element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(href.substring(1));
        if(element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: t.nav.heritage, href: '#heritage' },
    { name: t.nav.expertise, href: '#expertise' },
    { name: t.nav.collections, href: '#products' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中' },
    { code: 'ar', label: 'عربي' },
  ];

  const useDarkTheme = isScrolled || currentPage !== 'home';

  const textColorClass = useDarkTheme ? 'text-stone-800' : 'text-white';
  const hoverColorClass = useDarkTheme ? 'hover:text-stone-500' : 'hover:text-stone-200';
  const langInactiveClass = useDarkTheme ? 'text-stone-400 hover:text-stone-600' : 'text-white/60 hover:text-white';
  const langActiveClass = useDarkTheme ? 'text-stone-900 border-stone-900' : 'text-white border-white';
  const separatorClass = useDarkTheme ? 'border-stone-300' : 'border-white/30';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-stone-50/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('#heritage'); }} className="relative z-50">
          <Logo variant={useDarkTheme ? "dark" : "light"} className={isScrolled ? "h-10" : "h-12"} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href)}
              className={`${textColorClass} ${hoverColorClass} text-sm tracking-widest uppercase transition-colors duration-300 font-medium`}
            >
              {link.name}
            </button>
          ))}
          
          <div className={`flex items-center gap-4 border-l px-4 ${separatorClass}`}>
             {languages.map((lang) => (
               <button
                 key={lang.code}
                 onClick={() => setLanguage(lang.code)}
                 className={`text-xs uppercase font-bold tracking-wider transition-colors border-b ${
                   language === lang.code ? `${langActiveClass}` : `${langInactiveClass} border-transparent`
                 }`}
               >
                 {lang.label}
               </button>
             ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50 flex items-center gap-4">
          <button 
            className={`${textColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} className="text-stone-800" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-stone-100 z-40 flex flex-col items-center justify-center space-y-8"
            >
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => {
                    handleNavClick(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-stone-800 text-2xl font-serif"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="flex gap-6 mt-8">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-lg font-bold ${
                      language === lang.code ? 'text-stone-900 border-b-2 border-stone-900' : 'text-stone-400'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};