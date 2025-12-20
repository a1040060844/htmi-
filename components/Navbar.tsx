import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../utils/translations';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, targetSection?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      if (currentPage !== 'home') {
        onNavigate('home', targetId);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80; // height of fixed navbar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    } else {
      onNavigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t.nav.heritage, href: '#heritage' },
    { name: t.nav.expertise, href: '#expertise' },
    { name: t.nav.collections, href: '#products' },
    { name: t.nav.partners, href: '#partners' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中' },
    { code: 'ar', label: 'عربي' },
  ];

  const useDarkTheme = isScrolled || currentPage !== 'home';

  // Styles for normal state
  const textColorClass = useDarkTheme ? 'text-stone-800' : 'text-white';
  const hoverColorClass = useDarkTheme ? 'hover:text-stone-500' : 'hover:text-stone-200';
  const langInactiveClass = useDarkTheme ? 'text-stone-400 hover:text-stone-600' : 'text-white/60 hover:text-white';
  const langActiveClass = useDarkTheme ? 'text-stone-900 border-stone-900' : 'text-white border-white';
  const separatorClass = useDarkTheme ? 'border-stone-300' : 'border-white/30';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? 'bg-stone-50/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={(e) => { e.preventDefault(); handleNavClick('#heritage'); }} 
            className="relative z-50 focus:outline-none"
          >
            <Logo variant={useDarkTheme ? "dark" : "light"} className={isScrolled ? "scale-90" : "scale-100"} />
          </button>

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

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden z-50">
            <button 
              className={`${textColorClass} p-2 transition-colors`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-50 z-[100] md:hidden flex flex-col"
            dir={dir}
          >
            {/* Mobile Menu Header - Keeps the branding visible and close button accessible */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-stone-100">
              <Logo variant="dark" className="scale-90 origin-left" />
              <button 
                className="text-stone-900 p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-6 overflow-y-auto">
              {navLinks.map((link, idx) => (
                <motion.button 
                  key={link.name} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-stone-900 text-3xl font-serif tracking-tight hover:text-stone-500 transition-colors py-2"
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-16 h-[1px] bg-stone-200 mt-4"
              />

              {/* Language Switcher in Mobile Menu */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-8 pt-4"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`text-lg font-bold tracking-wider transition-all px-2 py-1 ${
                      language === lang.code 
                        ? 'text-stone-900 border-b-2 border-stone-900' 
                        : 'text-stone-400 hover:text-stone-600'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Optional Branding Footer inside Menu */}
            <div className="py-10 text-center px-6 opacity-30">
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-900">
                Crafting Excellence Since 2004
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};